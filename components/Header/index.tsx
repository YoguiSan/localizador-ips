import React, { InputHTMLAttributes } from 'react';

import Container from './Container';
import { Context } from '../../pages';

interface HeaderProps extends InputHTMLAttributes<HTMLInputElement> {
  changeIp: Function;
  handleSearch: Function;
}

const Header:React.FC<HeaderProps> = ({ changeIp, handleSearch }) => (
  <Context.Consumer>
    {({ ip }) => (
      <Container>
        <div id="header-container">
          <h1>IP Address Tracker</h1>
          <div className="input-container">
            <input
              type="text"
              value={ip.replace(/[^0-9|.]/g, '')}
              onChange={({ target: { value } }) => changeIp(value.replace(/[^0-9|.]/g, ''))}
            />
            <button
              id="input-submit"
              type="submit"
              onClick={() => handleSearch(ip)}
            >
              &#8250;
            </button>
          </div>
        </div>
      </Container>
    )}
  </Context.Consumer>
);

export default Header;
