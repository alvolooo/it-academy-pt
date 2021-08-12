import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";
import * as Yup from "yup";

//other
import classes from "./table.module.scss";
import { User } from "../types/user";
import { api } from "../../service/api.service";

type Props = {
  blockUser(id: number): void;
} & User;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);

const schema = Yup.object().shape({
  email: Yup.string().email().required("Enter Email"),
  name: Yup.string().required("Enter Name and Surname"),
  role: Yup.string().required("Enter your server role"),
});

const GenerateRow = ({ name, role, id, blockUser, status, email }: Props) => {
  const statusName = status === 1 ? "Активен" : "Заблокирован";
  const buttonName = status === 1 ? "Блокировать" : "Разблокировать";
  return (
    <tr>
      <td>{email}</td>
      <td>{name}</td>
      <td>{role}</td>
      <td>{statusName}</td>
      <td>
        <div className={classes.blockButton} onClick={() => blockUser(id)}>
          <p>{buttonName}</p>
        </div>
      </td>
    </tr>
  );
};
export const Table = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState(1);
  const [users, setUsers] = useState<[] | User[]>([]);

  const { values, errors, handleSubmit, handleChange, touched } = useFormik({
    initialValues: {
      email: "",
      name: "",
      role: "",
      status: "",
    },

    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Не является email")
        .required("Обязательное поле для заполнения"),
      name: Yup.string()
        .required("Обязательное поле для заполнения")
        .min(2, "Минимум 2 символа"),
      role: Yup.string().required("Обязательное поле для заполнения"),
      status: Yup.string().required("Обязательное поле для заполнения"),
    }),

    onSubmit: async (data: any) => {
      return axios
        .post(`http://localhost:5050/users`, {
          name: name,
          email: email,
          role: role,
          status: status,
        })
        .then(function (response) {
          getUsers();
        });
    },
  });

  const onChangeHandler = (e: any) => {
    if (e.target.name == "email") return setEmail(e.target.value);
    if (e.target.name == "name") return setName(e.target.value);
    if (e.target.name == "role") return setRole(e.target.value);
    if (e.target.name == "status") return setStatus(e.target.value);
  };

  const getUsers = async () => {
    const response = await api[`users`].getList();
    setUsers(response);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const blockUser = async (id: number) => {
    const response = await api[`users`].delete(id);
    if (response) {
      await getUsers();
    }
  };

  const createUser = async () => {
    return axios
      .post(`http://localhost:5050/users`, {
        name: name,
        email: email,
        role: role,
        status: status,
      })
      .then(function (response) {
        getUsers();
      });
  };

  return (
    <Container maxWidth="md">
      <Breadcrumbs aria-label="breadcrumb" className={classes.bread}>
        <Link color="inherit" href="/">
          Главная
        </Link>
        <Link color="textPrimary" href="http://localhost:3000/login">
          Таблица
        </Link>
      </Breadcrumbs>
      <div className={classes.section}>
        <table className={classes.table}>
          <thead className={classes.thead}>
            <tr>
              <th className={classes.th}>Email</th>
              <th className={classes.th}>Фамилия и имя</th>
              <th className={classes.th}>Роль</th>
              <th className={classes.th}>Статус</th>
              <th className={classes.th}>Действия</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <GenerateRow
                name={user.name}
                email={user.email}
                role={user.role}
                id={user.id}
                status={user.status}
                key={user.id}
                blockUser={blockUser}
              />
            ))}
          </tbody>
        </table>

        <div className={classes.createBlock}>
          <TextField
            id="standard-basic"
            label="Email"
            color="secondary"
            type={"text"}
            value={values.email}
            name={"email"}
            onChange={handleChange}
            error={!!(errors.email && touched.email)}
            helperText={
              errors.email && touched.email ? errors.email : "Обязательное поле"
            }
          />

          <TextField
            id="standard-basic"
            label="Name"
            color="secondary"
            type={"text"}
            value={values.name}
            name={"name"}
            onChange={handleChange}
            error={!!(errors.name && touched.name)}
            helperText={
              errors.name && touched.name ? errors.name : "Обязательное поле"
            }
          />

          <TextField
            id="standard-basic"
            label="Role"
            color="secondary"
            type={"text"}
            value={values.role}
            name={"role"}
            onChange={handleChange}
            error={!!(errors.role && touched.role)}
            helperText={
              errors.role && touched.role ? errors.role : "Обязательное поле"
            }
          />

          <TextField
            id="standard-basic"
            label="Status"
            color="secondary"
            type={"text"}
            value={values.status}
            name={"status"}
            onChange={handleChange}
            error={!!(errors.status && touched.status)}
            helperText={
              errors.status && touched.status
                ? errors.status
                : "Обязательное поле"
            }
          />
          <div className={classes.but}>
            <Button
              variant="contained"
              color="secondary"
              onClick={createUser}
              className={classes.but}
            >
              Отправить
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};
