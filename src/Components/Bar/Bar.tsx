import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Drawer } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { useHistory } from "react-router-dom";
import DashboardIcon from "@material-ui/icons/Dashboard";
import BrightnessLowIcon from "@material-ui/icons/BrightnessLow";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    list: {
      width: 250,
    },
    fullList: {
      width: "auto",
    },
  })
);

export const Bar = () => {
  const classes = useStyles();

  const history = useHistory();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const list = () => (
    <div className={classes.list} role="presentation">
      <List>
        <ListItem
          button
          onClick={() => {
            history.push("/");
          }}
        >
          <ListItemIcon>
            <BrightnessLowIcon />
          </ListItemIcon>
          <ListItemText primary={"Главная страница"} />
        </ListItem>
      </List>
      <List>
        <ListItem
          button
          onClick={() => {
            history.push("/table");
          }}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary={"Таблица"} />
        </ListItem>
      </List>
      <List>
        <ListItem
          button
          onClick={() => {
            history.push("/tree");
          }}
        >
          <ListItemIcon>
            <ClearAllIcon />
          </ListItemIcon>
          <ListItemText primary={"Дерево"} />
        </ListItem>
      </List>
      <List>
        <ListItem
          button
          onClick={() => {
            history.push("/counter");
          }}
        >
          <ListItemIcon>
            <AddToPhotosIcon />
          </ListItemIcon>
          <ListItemText primary={"Счетчик"} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button
              color="inherit"
              onClick={() => {
                history.push("/login");
              }}
            >
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </div>

      <div>
        <Drawer anchor={"left"} open={open} onClose={handleOpen}>
          {list()}
        </Drawer>
      </div>
    </>
  );
};
