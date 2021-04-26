import React, { InputHTMLAttributes } from 'react';

import Container from './Container';

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  text: string;
}

const Field:React.FC<FieldProps> = ({ title, text }) => (
  <Container>
    <h2>{title}</h2>
    <p>{text}</p>
  </Container>
);

export default Field;
