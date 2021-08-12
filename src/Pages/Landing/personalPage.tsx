import { Main } from "../../Layouts/Main";
import { Wrapper } from "../../Components/Wrapper";
import { Personal } from "../../Components/Auth/personal";
import { Container } from "../../Components/Container";
import { Cert } from "../../Components/HomePage/cert";
import { MyCourses } from "../../Components/Auth/myCourses";

export const PersonalPage = () => {
  return (
    <Main>
      <>
        <Wrapper theme={"dark"}>
          <Container>
            <Personal
              name={"Волошина Александра Андреевна"}
              login={"alvolooo@mail.ru"}
              token={"125698"}
            />
          </Container>
        </Wrapper>
        <Wrapper theme={"light"}>
          <Container>
            <MyCourses />
          </Container>
        </Wrapper>
        <Wrapper theme={"light"}>
          <Container>
            <Cert />
          </Container>
        </Wrapper>
      </>
    </Main>
  );
};
