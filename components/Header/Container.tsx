import styles from 'styled-components';

import Background from '../../assets/img/pattern-bg.png';

const Container: any = styles.header`
background: url(${Background}) no-repeat;
height: 15rem;
padding: 2rem;
width: 100%;

* {
  box-sizing: border-box;
}

#header-container {
  width: 50%;

  &, & > h1 {
    margin: auto;
  }
  
  h1 {
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    margin-bottom: 1rem;
    width: fit-content;
  }

  .input-container {
    position: relative;
    width: 100%;

    > input {
      border-radius: .8rem;
      font-size: 1rem;
      padding: 1rem;
      width: 100%;
    }

    button {
      background: black;
      border: 0;
      border-radius: 0 .8rem .8rem 0;
      color: white;
      font-size: 1rem;
      font-weight: bold;
      height: 100%;
      min-width: 3rem;
      padding: 1rem;
      position: absolute;
      right: 0;
    }
  }
}

@media(max-width: 560px) {
  #header-container {
    width: 100%;

    h1 {
      font-size: 1.5rem;
    }
  }
}
`;

export default Container;
