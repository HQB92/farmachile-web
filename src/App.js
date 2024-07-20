import React, { useState, useEffect } from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import Header from './components/Header';
import Dropdown from './components/Dropdown';
import PharmacyCard from './components/PharmacyCard';
import Map from './components/Map';
import Footer from './components/Footer';
import { fetchFarmacias } from './services/api';
import comunasChile from './region-comuna.json';
import './index.css';

function App() {
  const [selectedComuna, setSelectedComuna] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [comunas, setComunas] = useState([]);
  const [farmacias, setFarmacias] = useState([]);
  const [farmaciaTurno, setFarmaciaTurno] = useState(null);

  useEffect(() => {
    const getFarmacias = async () => {
      try {
        const data = await fetchFarmacias();
        setFarmacias(data);
      } catch (error) {
        console.error(error);
      }
    };
    getFarmacias();
  }, []);

  useEffect(() => {
    if (selectedRegion) {
      const regionData = comunasChile.find(region => region.region === selectedRegion);
      setComunas(regionData ? regionData.comunas : []);
    }
  }, [selectedRegion]);

  useEffect(() => {
    if (selectedComuna && farmacias.length > 0) {
      const farmaciasComuna = farmacias.filter(
          farmacia => farmacia.comuna_nombre === selectedComuna.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase()
      );
      setFarmaciaTurno(farmaciasComuna.length > 0 ? farmaciasComuna[0] : null);
    }
  }, [selectedComuna, farmacias]);

  const googleMapUrl = farmaciaTurno
      ? `https://www.google.com/maps?q=${farmaciaTurno.local_lat},${farmaciaTurno.local_lng}&z=15&output=embed`
      : '';

  return (
      <Container className="container">

          <Header/>
          <Box sx={{flexGrow: 1, my: 2}}>
              <Grid container spacing={2} justifyContent="center">
                  <Grid item xs={12} sm={6} md={4}>
                      <Dropdown
                          label="Seleccione una región:"
                          options={comunasChile.map(region => ({
                              label: region.region,
                              value: region.region
                          }))}
                          value={selectedRegion}
                          onChange={(e) => setSelectedRegion(e.target.value)}
                      />
                  </Grid>
                  {comunas.length > 0 && (
                      <Grid item xs={12} sm={6} md={4}>
                          <Dropdown
                              label="Seleccione una comuna:"
                              options={comunas.map(comuna => ({
                                  label: comuna,
                                  value: comuna
                              }))}
                              value={selectedComuna}
                              onChange={(e) => setSelectedComuna(e.target.value)}
                          />
                      </Grid>
                  )}
              </Grid>
          </Box>
          {farmaciaTurno ? (
              <Grid container spacing={3} justifyContent="center">
                  <Grid item xs={12} sm={6} md={5}>
                      <PharmacyCard
                          name={farmaciaTurno.local_nombre}
                          address={farmaciaTurno.local_direccion}
                          phone={farmaciaTurno.local_telefono}
                          date={farmaciaTurno.fecha.split('-').reverse().join('-')}
                          link={`https://www.waze.com/ul?ll=${farmaciaTurno.local_lat}%2C${farmaciaTurno.local_lng}&navigate=yes&zoom=17`}
                      />
                  </Grid>
                  <Grid item xs={12}>
                      <Map src={googleMapUrl}/>
                  </Grid>
              </Grid>
          ) : (
              selectedComuna &&
              <Typography variant="body1" align="center">No hay farmacias de
                  turno
                  en esta comuna</Typography>
          )}
          {/*<div className="ads">
              <ins className="adsbygoogle"
                   style={{display: 'block'}}
                   data-ad-client="ca-pub-2072509419197864"  // Tu ID de cliente
                   data-ad-slot="1323706138"          // Tu ID de slot
                   data-ad-format="auto"
                   data-full-width-responsive="true">
              </ins>
              <Adsense
                  client="ca-pub-2072509419197864"
                  slot="1323706138"
                  style={{ display: 'block' }}
                  layout="in-article"
                  format="fluid"
              />

          </div>*/}
          <Footer/>

      </Container>
  )
      ;
}

export default App;
