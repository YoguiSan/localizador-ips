import React from 'react';

import Container from './Container';

const Field = ({ title, text }) => (
  <Container>
    <h2>{title}</h2>
    <p>{text}</p>
  </Container>
);

export default Field;
