import { Main } from "../../Layouts/Main";
import { Wrapper } from "../../Components/Wrapper";
import { Auth } from "../../Components/Auth";
import { Container } from "../../Components/Container";

export const AuthPage = () => {
  return (
    <Main>
      <Wrapper theme={"dark"}>
        <Container>
          <Auth />
        </Container>
      </Wrapper>
    </Main>
  );
};
