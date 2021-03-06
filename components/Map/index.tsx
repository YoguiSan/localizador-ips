import React, { ComponentType, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

/*
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
*/

import Container from './Container';
import { Context } from '../../pages';

import 'leaflet/dist/leaflet.css';

const MapContainer:ComponentType<{
  center: Array<number>,
  zoom: number,
}> = dynamic(
  () => import('react-leaflet').then(({ MapContainer }):any => MapContainer),
  {
    ssr: false,
  },
);

const TileLayer:ComponentType<{ url: string }> = dynamic(
  () => import('react-leaflet').then(({ TileLayer }):any => TileLayer),
  {
    ssr: false,
  },
);

const Marker:ComponentType<{ position: Array<any> }> = dynamic(
  () => import('react-leaflet').then(({ Marker }):any => Marker),
  {
    ssr: false,
  },
);

const Popup:ComponentType<{}> = dynamic(
  () => import('react-leaflet').then(({ Popup }) => Popup),
  {
    ssr: false,
  },
);
// let DefaultIcon = {};

const MapComponent:React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  } ,[]);

  return (
    <Container>
    {
      !isMounted
      ? ''
      : (
        <>
          <Context.Consumer>
          {({ location, clientLocation }) => {
            const position = (location && location?.location?.lat && location?.location?.lng && [location?.location?.lat, location?.location?.lng])
              || (clientLocation && clientLocation?.location?.lat && clientLocation?.location?.lng && [clientLocation?.location?.lat, clientLocation?.location?.lng])
              || [0, 0];

            return(
              <MapContainer
                center={position}
                zoom={13}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                  position={position}
                >
                  <Popup>
                    
                  </Popup>
                </Marker>
              </MapContainer>
            )}
          }
          </Context.Consumer>
        </>
      )
    }
    </Container>
  );
}

export default MapComponent;
