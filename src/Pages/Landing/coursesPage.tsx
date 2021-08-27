import { Main } from "../../Layouts/Main";
import { Wrapper } from "../../Components/Wrapper";
import { Courses } from "../../Components/Courses";
import { Container } from "../../Components/Container";

export const CoursesPage = () => {
  return (
    <Main>
      <Wrapper theme={"dark"}>
        <Container>
          <Courses />
        </Container>
      </Wrapper>
    </Main>
  );
};
