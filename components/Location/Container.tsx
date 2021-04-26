import styles from 'styled-components';

import Colors from '../../styles/colors';

const { DarkGray } = Colors;

const Container = styles.div`
background: white;
border-radius: .8rem;
display: flex;
justify-content: space-around;
left: 0;
margin: auto;
min-height: 8rem;
max-width: 80%;
min-width: 60%;
position: absolute;
right: 0;
transform: translateY(-50%);
z-index: 1000;

div.verticaldivider {
  border-right: solid 1px ${DarkGray};
  display: block;
  height: 60%;
  margin: auto 0;
  min-height: 4rem;
  position: relative;
  width: 1px;
}

@media(max-width: 560px) {
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;
  max-width: 90%;
  min-width: 80%;
  padding: 1rem;

  div.verticaldivider {
    display: none;
  }
}
`;

export default Container;
