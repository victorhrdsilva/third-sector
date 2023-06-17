import { useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderRegister from "../../components/HeaderRegister";
import MenuRegister from "../../components/MenuRegister";
import PersonalData from "./Components/PersonalData";
import { Content, ContentDiv, Div, MenuDiv } from "./style";
import Adress from "./Components/Adress";
import Diversity from "./Components/Diversity";
import Contact from "./Components/Contact";
import Comments from "./Components/Comments";

export default function Register() {
  const location = useLocation();
  const [formData, setFormData] = useState({});

  const isPersonalDataPage = location.pathname === "/register";
  const isAdressPage = location.pathname === "/register/adress";
  const isDiversityPage = location.pathname === "/register/diversity";
  const isContactPage = location.pathname === "/register/contact";
  const isCommentsPage = location.pathname === "/register/comments";

const handleFormData = (data: Record<string, any>) => {
  setFormData((prev) => {
  return { ...prev, ...data };
  });
  console.log('oi register', data);
};

  return (
    <Div>
      <MenuDiv>
        <MenuRegister />
      </MenuDiv>
      <ContentDiv>
        <HeaderRegister />
        <Content>
          {isPersonalDataPage && (
            <PersonalData onNextPage={handleFormData} />
          )}
          {isAdressPage && <Adress onNextPage={handleFormData} />}
          {isDiversityPage && <Diversity onNextPage={handleFormData} />}
          {isContactPage && <Contact onNextPage={handleFormData} />}
          {isCommentsPage && <Comments onNextPage={handleFormData} />}
        </Content>
      </ContentDiv>
    </Div>
  );
}
