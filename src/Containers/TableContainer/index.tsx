import { Table } from "../../Components";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export const TableContainer = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        >
          <Table />
        </Typography>
      </Container>
    </>
  );
};
