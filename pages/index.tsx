import React, { createContext, EffectCallback, SetStateAction, useEffect, useState } from 'react';
import styles from 'styled-components';
import Header from '../components/Header';
import Location from '../components/Location';
import Map from '../components/Map';
import { getClientIp, getLocationByIp } from '../services/ipify';

const Container = styles.main`
`;

export let Context;

const Index:React.FC = () => {
  const [ip, setIp] = useState('');
  const [location, setLocation] = useState('');
  const [clientLocation, setClientLocation] = useState('');

  const contextValue = {
    ip,
    location,
    clientLocation,
  };

  Context = createContext(contextValue);

  const changeIp = (newIp: string):void => setIp(newIp);

  const searchIp = async (ip:string):Promise<any> => {
    const location = await getLocationByIp(ip);
    setLocation(location);
  };

  useEffect(() => {
    const get = async () => await getClientIp().then(res => setClientLocation(res));

    get();
  }, []);

  return (
    <Context.Provider value={contextValue}>
      <Header
        changeIp={changeIp}
        handleSearch={searchIp}
      />
      <Container>
        <Location />
        <Map />
      </Container>
    </Context.Provider>
    
  );
}

export default Index;
