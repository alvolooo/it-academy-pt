import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

//other
import { api } from "../../service/api.service";
import { User } from "../types/user";
import styles from "./cards.module.scss";
import classes from "../Table/table.module.scss";

const useStyles = makeStyles({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const GenerateCard = ({ name, role, id, status, email }: User) => {
  const statusName = status === 1 ? "Активен" : "Заблокирован";
  return (
    <Card className={styles.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {email}
        </Typography>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {role}
        </Typography>
        <Typography variant="body2" component="p">
          {statusName}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export const CardOfUser = () => {
  const [users, setUsers] = useState<[] | User[]>([]);

  const classes = useStyles();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await api[`users`].getList();
    setUsers(response);
  };

  return (
    <div className={styles.container}>
      {users.map((user) => (
        <GenerateCard
          name={user.name}
          email={user.email}
          role={user.role}
          id={user.id}
          status={user.status}
          key={user.id}
        />
      ))}
    </div>
  );
};
