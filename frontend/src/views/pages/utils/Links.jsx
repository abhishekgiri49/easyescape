import React from "react";

import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaCottonBureau } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";

const Links = [
  { text: "Dashboard", path: ".", icon: <FaCottonBureau />, subNav: [] },
  // {
  //   text: "Jobs",
  //   path: "#",
  //   status: false,
  //   icon: <MdQueryStats />,
  //   subNav: [
  //     {
  //       title: "All Job",
  //       path: "jobs",
  //       status: false,
  //       icon: <FaWpforms />,
  //     },
  //     {
  //       title: "Add Job",
  //       path: "job/create",
  //       status: false,
  //       icon: <FaWpforms />,
  //     },
  //     {
  //       title: "Stats",
  //       path: "stats",
  //       status: false,
  //       icon: <IoBarChartSharp />,
  //     },
  //   ],
  // },
  {
    text: "Admin",
    path: "admin",
    icon: <MdAdminPanelSettings />,
    status: false,
    subNav: [],
  },
  {
    text: "Users",
    path: "users",
    icon: <ImProfile />,
    status: false,
    subNav: [],
  },

  {
    text: "Categories",
    path: "categories",
    icon: <BiCategory />,
    status: false,
    subNav: [],
  },
];

export default Links;
