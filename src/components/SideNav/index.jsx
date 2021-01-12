import React from "react";
import LinkItem from "../LinkItem/index";
import "./style.css";

export default function SidNav() {
  return (
    <div className="SideNav">
      <nav className="SideNav-nav">
        <ul className="SideNav-nav-list">
          <LinkItem
            nameOfClass="item-link"
            withIcon={false}
            text="Home"
            to="recommended"
          />
          <LinkItem
            nameOfClass="item-link"
            withIcon={false}
            text="Recommended"
            to="movies"
          />
          <LinkItem
            nameOfClass="item-link"
            withIcon={false}
            text="Watched"
            to="watched"
          />
          <LinkItem
            nameOfClass="item-link"
            withIcon={false}
            text="Contact"
            to="contact"
          />
          <LinkItem
            nameOfClass="item-link"
            withIcon={false}
            text="About us"
            to="about"
          />
        </ul>
      </nav>
    </div>
  );
}
