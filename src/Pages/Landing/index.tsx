import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Main } from "../../Layouts/Main";
import { Container } from "../../Components/Container";
import { Wrapper } from "../../Components/Wrapper";
import { CertificateContext, Certificate } from "../../Context/certificate";
import { Content } from "../../Components/HomePage/Content";
import { CertChecker } from "../../Components/HomePage/CertChecker";
import { Cert } from "../../Components/HomePage/cert";
import { Directions } from "../../Components/HomePage/directions";

//certificate: Certificate
// export const Conternt = () => {
//   return (
//     <div>lololo</div>
//     <table>
//       <tbody>
//         <tr>
//           <th>ID</th>
//           <td>{certificate.id}</td>
//         </tr>
//         <tr>
//           <th>FullName</th>
//           <td>{certificate.fullName}</td>
//         </tr>
//         <tr>
//           <th>direction</th>
//           <td>{certificate.direction}</td>
//         </tr>
//         <tr>
//           <th>dateStart</th>
//           <td>{certificate.dateStart}</td>
//         </tr>
//         <tr>
//           <th>dateFinish</th>
//           <td>{certificate.dateFinish}</td>
//         </tr>
//         <tr>
//           <th>features</th>
//           <td>{certificate.features}</td>
//           {certificate.features.map((feature) => (
//             <div key={feature.id}>{feature.name}</div>
//           ))}
//         </tr>
//       </tbody>
//     </table>
//   );
// };

export const Landing = () => {
  // const state = useSelector<RootState, AuthState>((state) => state.auth);
  // const dispatch = useDispatch();
  //
  // const setLogin = () => {
  //   const data = { login: "test", name: "tets", token: "iolk" };
  //   dispatch(loginAction(data));
  //   localStorage.setItem("userData", JSON.stringify(data));
  // };
  //
  // const setLogout = () => {
  //   dispatch(loginAction({ login: "", name: "", token: "" }));
  //   localStorage.removeItem("userData");
  // };

  return (
    //   <>
    //     <div>hhh</div>
    //     <button onClick={setLogin}>in</button>
    //     <button onClick={setLogout}>out</button>
    //     <div>
    //       {state.name ? (
    //         <p>вас зовут {state.name}</p>
    //       ) : (
    //         <p>не авторизированный</p>
    //       )}
    //     </div>
    //   </>
    // );

    //const { isShow, certificate, fillData } = useContext(CertificateContext);

    // const simulation = () => {
    //   const data: Certificate = {
    //     id: 1,
    //     fullName: "Молчанов Петр Алексеевич",
    //     direction: "Frontend",
    //     dateFinish: "01.09.2021",
    //     dateStart: "05.07.2021",
    //     features: [
    //       {
    //         id: 1,
    //         name: "Context",
    //       },
    //       {
    //         id: 2,
    //         name: "Material UI",
    //       },
    //     ],
    //   };
    //
    //   fillData(data);
    // };
    //
    // console.log(certificate);
    //return (
    // <>
    //   {isShow ? (
    //     <Conternt
    //       id={certificate.id}
    //       fullName={certificate.fullName}
    //       direction={certificate.direction}
    //       dateStart={certificate.dateStart}
    //       dateFinish={certificate.dateFinish}
    //       features={certificate.features}
    //     />
    //   ) : null}
    //
    //   <button onClick={simulation}>Симулировать запрос</button>
    // </>

    <Main>
      <>
        <Wrapper theme={"dark"}>
          <Container>
            <Content />
          </Container>
        </Wrapper>
        <Wrapper theme={"light"}>
          <Container>
            <CertChecker />
          </Container>
        </Wrapper>

        <Wrapper theme={"dark"}>
          <Container>
            <Directions />
          </Container>
        </Wrapper>
      </>
    </Main>
  );
};
