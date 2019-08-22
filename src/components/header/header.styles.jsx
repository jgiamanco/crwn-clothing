import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 600px) {
    height: 50px;
    padding: 10px;
    margin-bottom: 10px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
  @media screen and (max-width: 600px) {
    svg.logo {
      width: 20vw;
      height: 7vh;
    }
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    padding: 10px 5px;
  }
`;