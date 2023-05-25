import styled from "styled-components";

interface BackgroudColorProps {
  inputColor?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
`;

export const BackgroudColor = styled.div<BackgroudColorProps>`
  width: 100vw;
  height: 50vh;
  background-color: ${(props) => props.inputColor || "var(--primary-color)"};
`;

export const Wrapper = styled.div`
  width: 396px;
  color: #FFFFFF;
  margin: 150px 0 0 73px;
  h1{
    font-size: 34px;
  };

  h2{
    font-size: 24px;
  };

  p{
    font-size: 13px;
    margin-top: 22px;
  }

`;
