import React from "react";
import classes from "./footer.module.scss";
import { Text } from "../Text";

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.block}>
        <a
          href="https://profsoft.pro/"
          className={classes.gold}
          target="_blank"
        >
          profsoft.pro
        </a>
        <a
          href="https://academy.profsoft.pro/"
          className={classes.gold}
          target="_blank"
        >
          academy.profsoft.pro
        </a>
      </div>
      <div className={classes.block}>
        <a
          href="https://vk.com/profsoft_pro"
          className={classes.white}
          target="_blank"
        >
          vk.com
        </a>
        <a
          href="https://www.facebook.com/profsoftteam/"
          className={classes.white}
          target="_blank"
        >
          facebook.com
        </a>
      </div>

      <div className={classes.block}>
        <a
          href="https://www.instagram.com/profsoft_team/"
          className={classes.white}
          target="_blank"
        >
          instagram.com
        </a>
        <a
          href="https://vk.com/profsoft_pro"
          className={classes.white}
          target="_blank"
        >
          youtube.com
        </a>
      </div>

      <div className={classes.block}>
        <p className={classes.gray}>2021 © LLC Profsoft</p>
        <p className={classes.gray}>Публичная оферта</p>
      </div>
    </footer>
  );
};
