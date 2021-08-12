import React, { useEffect, useState } from "react";
import classes from "./tree.module.scss";
import { TreeOfOrganizations } from "../types/treeOfOrganizations";
import { Employee } from "../types/employee";
import { api } from "../../service/api.service";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

export const Tree = () => {
  const [tree, setTree] = useState<[] | TreeOfOrganizations[]>([]);

  const getTree = async () => {
    const response = await api["treeOfOrg"].getList();
    setTree(response);
  };

  useEffect(() => {
    getTree();
  }, []);

  const GenerateUser = ({
    id,
    name,
    surname,
    patronymic,
    org_name,
  }: Employee) => {
    return (
      <ul>
        <li className={classes.userNames}>
          <span className={classes.userSurnames}>{surname}</span> {name}{" "}
          {patronymic} <br />
          <span className={classes.userOrgNames}>{org_name}</span>
        </li>
      </ul>
    );
  };

  const userChecker = (item: any) => {
    const arrOfUsers = item.users;
    if (arrOfUsers !== undefined && arrOfUsers.length !== 0) {
      return (
        <div>
          {arrOfUsers.map((item: Employee) => (
            <GenerateUser
              id={item.id}
              name={item.name}
              surname={item.surname}
              patronymic={item.patronymic}
              org_name={item.org_name}
              key={item.id}
            />
          ))}
        </div>
      );
    }
  };

  const TreeNode = ({ node }: any) => {
    const [childVisible, setChildVisible] = useState(false);
    const hasChild = !!node.organizations;

    return (
      <>
        <Container maxWidth="md">
          <li key={node.id} onClick={(event) => setChildVisible((v) => !v)}>
            <span className={classes.expandingText}>{node.name}</span>
            {hasChild && childVisible && (
              <div
                key={node.id}
                onClick={(event) => setChildVisible((v) => !v)}
              >
                {userChecker(node)}
                {<SubTree data={node.organizations} />}
              </div>
            )}
          </li>
        </Container>
      </>
    );
  };

  const SubTree = ({ data }: any) => (
    <ul>
      {data && data.map((item: any) => <TreeNode key={item.id} node={item} />)}
    </ul>
  );

  return (
    <Container maxWidth="md">
      <Breadcrumbs aria-label="breadcrumb" className={classes.bread}>
        <Link color="inherit" href="/">
          Главная
        </Link>
        <Link color="textPrimary" href="http://localhost:3000/login">
          Дерево
        </Link>
      </Breadcrumbs>
      <div className={classes.body}>
        <div className={classes.container}>
          <SubTree data={tree} />
        </div>
      </div>
    </Container>
  );
};
