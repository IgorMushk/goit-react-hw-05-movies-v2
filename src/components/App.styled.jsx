import styled from "styled-components";

const Container = styled.div`
  //margin-left: auto;
  //margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  width: 1440px;
`;

const Header = styled.header`
  //background-color: #032541;
  background-color: rgb(3, 37, 65, 0.9);
  position: sticky;
  top: 0;
  z-index: 100;

`;

const Nav = styled.nav`
  padding: 16px 0;
  display: flex;
  align-items: center;
  gap: 32px;
`;

export { Container, Header, Nav};