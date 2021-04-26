import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import Container from './Container';
import { Context } from '../../pages';

import 'leaflet/dist/leaflet.css';

const MapContainer = dynamic(
  () => import('react-leaflet').then(({ MapContainer }) => MapContainer),
  {
    ssr: false,
  },
);

const TileLayer = dynamic(
  () => import('react-leaflet').then(({ TileLayer }) => TileLayer),
  {
    ssr: false,
  },
);

const Marker = dynamic(
  () => import('react-leaflet').then(({ Marker }) => Marker),
  {
    ssr: false,
  },
);

const Popup = dynamic(
  () => import('react-leaflet').then(({ Popup }) => Popup),
  {
    ssr: false,
  },
);

let DefaultIcon = {};
// marker-icon.png
/*
const L = dynamic(
  () => import('leaflet').then((L) => {
    DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow,
    });
    return L;
  }),
  {
    ssr: false,
  },
);
*/

const MapComponent:any = () => {
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
                  // attribution="&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                  position={position}
                  // icon={DefaultIcon}
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
