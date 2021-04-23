import React, { useEffect, useState } from 'react';
// import { MapContainer } from 'react-leaflet';

import { Context } from '../../pages';

const MapComponent:any = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  } ,[]);

  return (
    <>
    {
      !isMounted
      ? ''
      : (
        <>
          {/*
          <Context.Consumer>
          {({ position }) => (
            <MapContainer
              center={position}
              zoom={13}
            >
            </MapContainer>
          )}
          </Context.Consumer>
          */}
        </>
      )
    }
    </>
  );
}

export default MapComponent;
