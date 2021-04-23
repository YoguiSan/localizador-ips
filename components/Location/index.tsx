import React from 'react';

import Container from './Container';

import { Context } from '../../pages';
import Field from '../Field';

const Location:any = () => {
  return(
    <Context.Consumer>
      {
        ({
          location,
          clientLocation,
        }) => (
          <Container>
            <Field
              title="IP Address"
              text={location.ip || clientLocation.ip || '-'}
            />
            <div className="verticaldivider" />
            <Field
              title="Location"
              text={location ? `${location?.location?.city || '-'}\n${location?.location?.postalCode || ''}` : `${clientLocation?.location?.city || '-'}\n${clientLocation?.location?.postalCode || ''}`}
            />
            <div className="verticaldivider" />
            <Field
              title="Timezone"
              text={`UTC ${location?.location?.timezone || clientLocation?.location?.timezone || '?'}`}
            />
            <div className="verticaldivider" />
            <Field
              title="ISP"
              text={location?.isp || clientLocation?.isp || '-'}
            />
          </Container>
        )
      }
    </Context.Consumer>
  )
};

export default Location;
