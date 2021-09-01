import { Main } from "../../Layouts/Main";
import { Wrapper } from "../../Components/Wrapper";
import { Courses } from "../../Components/Courses";
import { Container } from "../../Components/Container";
import { Design } from "../../Components/Courses/design";

export const CoursesPage = () => {
  return (
    <Main>
      <>
        <Wrapper theme={"dark"}>
          <Container>
            <Courses />
          </Container>
        </Wrapper>
        <Wrapper theme={"light"}>
          <Container>
            <Design />
          </Container>
        </Wrapper>
      </>
    </Main>
  );
};
