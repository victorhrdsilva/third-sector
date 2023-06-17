import { useLocation, useNavigate } from "react-router-dom";
import { Buttons, ClearButton, ContinueButton } from "./style";
import { CaretLeft } from "phosphor-react";
import { useFormContext } from "react-hook-form";

export default function FooterRegister() {
  const { formState } = useFormContext();
  const navigate = useNavigate();
  const location = useLocation();
  const isPersonalDataPage = location.pathname !== "/register";

 const handleContinue = () => {
    const currentPage = location.pathname;
    
    let nextPage;

    if (currentPage === "/register") {
      nextPage = "/register/adress";
    } else if (currentPage === "/register/adress") {
      nextPage = "/register/diversity";
    } else if (currentPage === "/register/diversity") {
      nextPage = "/register/contact";
    } else if (currentPage === "/register/contact") {
      nextPage = "/register/comments";
    } else {
      nextPage = "/final-page";
    }

    navigate(nextPage);
  };;

  return (
    <Buttons isActive={isPersonalDataPage}>
      {isPersonalDataPage && (
        <CaretLeft type="button" onClick={() => navigate(-1)} size={40}>
          Voltar
        </CaretLeft>
      )}
      <div>
        <ClearButton>Limpar</ClearButton>
        <ContinueButton type="submit" onClick={handleContinue}>
          Continuar
        </ContinueButton>
      </div>
    </Buttons>
  );
}
