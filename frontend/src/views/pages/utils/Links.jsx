import React from "react";

import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaCottonBureau } from "react-icons/fa";
import logo from "../../../assets/images/logo.png";

const Links = [
  { text: "Dashboard", path: ".", icon: <FaCottonBureau />, subNav: [] },
  //   { text: "Add Job", path: ".", icon: <FaWpforms /> },
  {
    text: "Jobs",
    path: "#",
    status: false,
    icon: <MdQueryStats />,
    subNav: [
      {
        title: "All Job",
        path: "jobs",
        status: false,
        icon: <FaWpforms />,
      },
      {
        title: "Add Job",
        path: "job/create",
        status: false,
        icon: <FaWpforms />,
      },
      {
        title: "Stats",
        path: "stats",
        status: false,
        icon: <IoBarChartSharp />,
      },
    ],
  },
  //   { text: "Stats", path: "stats", icon: <IoBarChartSharp /> },
  {
    text: "Users",
    path: "users",
    icon: <ImProfile />,
    status: false,
    subNav: [],
  },
  {
    text: "Admin",
    path: "admin",
    icon: <MdAdminPanelSettings />,
    status: false,
    subNav: [],
  },
];

export default Links;
