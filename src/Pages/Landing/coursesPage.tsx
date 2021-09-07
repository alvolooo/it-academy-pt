import { Main } from "../../Layouts/Main";
import { Wrapper } from "../../Components/Wrapper";
import { Courses } from "../../Components/Courses";
import { Container } from "../../Components/Container";
import { Design } from "../../Components/Courses/design";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import zIndex from "@material-ui/core/styles/zIndex";

export const CoursesPage = () => {
  const state = useTypedSelector((state) => state.course);
  const select = {
    select1: {
      id: 0,
      isActive: false,
      array: [
        { id: 0, sel: "все" },
        { id: 1, sel: "Frontend" },
        { id: 2, sel: "Backend" },
        { id: 3, sel: "iOS" },
        { id: 4, sel: "Android" },
        { id: 5, sel: "Design" },
        { id: 6, sel: "QA" },
        { id: 7, sel: "PM" },
      ],
    },

    select2: {
      id: 0,
      isActive: false,
      array: [
        { id: 0, sel: "2021" },
        { id: 1, sel: "2022" },
        { id: 2, sel: "2023" },
        { id: 3, sel: "2024" },
      ],
    },
  };
  return (
    <Main>
      <>
        <Wrapper theme={"dark"}>
          <Container>
            <Courses />
          </Container>
        </Wrapper>
        {state.isShow ? (
          <Wrapper theme={"light"}>
            <Container>
              <Design />
            </Container>
          </Wrapper>
        ) : null}
      </>
    </Main>
  );
};
