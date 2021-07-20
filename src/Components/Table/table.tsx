import React, { useEffect, useState } from "react";
import classes from "./table.module.scss";
import axios from "axios";
import { User } from "../types/user";
import { api } from "../../service/api.service";

type Props = {
  blockUser(id: number): void;
} & User;

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

  const deleteUser = async (id: number) => {
    return axios
      .delete(`http://localhost:5050/users/${id}`)
      .then((response) => {
        getUsers();
        return response.data;
      });
  };

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
    <>
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
          <input
            type="text"
            name={"email"}
            placeholder={"Email"}
            onChange={onChangeHandler}
            className={classes.emailInput}
          />
          <input
            type="text"
            name={"name"}
            placeholder={"Name"}
            onChange={onChangeHandler}
            className={classes.nameInput}
          />
          <input
            type="text"
            name={"role"}
            placeholder={"Role"}
            onChange={onChangeHandler}
            className={classes.roleInput}
          />
          <input
            type="text"
            name={"status"}
            placeholder={"Status"}
            onChange={onChangeHandler}
            className={classes.statusInput}
          />
          <div onClick={createUser}>tap</div>
        </div>
      </div>
    </>
  );
};
