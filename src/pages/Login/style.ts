import { Button } from "react-bootstrap";
import { Form } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
`;

export const BackgroudColor = styled.div`
  position: absolute;
  width: 100vw;
  height: 50vh;
  background-color: var(--primary-color);
  z-index: -1;
`;

export const InfoSide = styled.div`
  width: 50vw;
  div {
    max-width: 396px;
    box-sizing: border-box;
    color: #ffffff;
    margin: 15vh 5vw 0 10vw;
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

export const FormSide = styled.div`
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FloatingBox = styled.div`
  padding: clamp(15px, 5vw, 44px);
  height: 80vh;
  width: 50vw;
  max-width: 500px;
  max-height: 741px;
  background-color: #ffffff;
  border-radius: 40px;
  box-shadow: 10px 11px 29px -15px black;
  h1 {
    font-weight: 600;
    font-size: clamp(30px, 50px, 55px);
  }
  label {
    font-size: 16px;
  }

  ::placeholder {
    font-weight: 300;
    color: #808080;
    font-size: 14px;
  }
`;

export const SinginButton = styled(Button)`
  width: 100%;
  height: 44px;
  background-color: var(--primary-color);
  border: none;
  box-shadow: 5px 5px 20px -15px black;
  margin-top: 10%;
`;

export const FormInput = styled(Form)`
  input {
    height: 44px;
  }
`;
export const ErrorMessage = styled.p`
  color: var(--red);
  margin-top: 5px;
  font-size: 16px;
`;

export const HeaderForm = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    color: var(--primary-color);
    font-size: 11px;
  }
  p {
    font-size: 21px;
  }
`;

export const SocialLogin = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8% 0;
  transition: .4s;
  :hover {
    filter: brightness(60%);    
  }
  button {
    height: 55px;
    border-radius: 9px;
    border: none;
  }

  img {
    width: 25px;
  }
`;

export const PrimarySocialButton = styled.button`
  width: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e8e8e8;

  p {
    margin: 0 0 0 5%;
  }
`;

export const SecundarySocialButton = styled.button`
  width: 55px;
  border-radius: 9px;
  background-color: #f6f6f6;
`;
