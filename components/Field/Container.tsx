import styles from 'styled-components';

import Colors from '../../styles/colors';

const { DarkGray } = Colors;

const Container = styles.div`
  height: fit-content;
  margin: auto;
  width: 12rem;

  h2 {
    color: ${DarkGray};
    font-size: .7rem;
    text-transform: uppercase;
    letter-spacing: .1rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: bold;
    margin: .5rem 0;
  }

  @media(max-width: 560px) {
    h2, p {
      text-align: center;
    }
  }
`;

export default Container;
