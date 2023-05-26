import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  box-sizing: border-box;
`;

export const BackgroudColor = styled.div`
  position: absolute;
  width: 100vw;
  height: 50vh;
  background-color: var(--primary-color);
  z-index: -1;
`;

export const InfoBox = styled.div`
  width: 50vw;
  div {
    width: 396px;
    color: #ffffff;
    margin: 15vh 0 0 10vw;
    h1 {
      font-size: 2.12rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.82rem;
      margin-top: 5%;
    }
  }
`;

export const FormBox = styled.div`
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FloatingBox = styled.div`
  width: 539px;
  height: 741px;
  background-color: #FFFFFF;
  border-radius: 40px;
  box-shadow: 10px 11px 29px -15px black;
`