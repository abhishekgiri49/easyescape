import React, { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Breadcrumb, DataTable } from "../components";

const AllJobs = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [clickedRow, setClickedRow] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEditAction = (id) => {
    console.log(`Edit action clicked for row with ID ${id}`);
  };

  const handleDeleteAction = (id) => {
    console.log(`Delete action clicked for row with ID ${id}`);
  };

  const handleMenuClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setClickedRow(id);
  };

  const menuItems = [
    { label: "Edit", onClick: () => handleEditAction(clickedRow) },
    { label: "Delete", onClick: () => handleDeleteAction(clickedRow) },
    // Add more items as needed
  ];

  const breadcrumb = [{ name: "Job List" }];

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "firstName", headerName: "First name", width: 300 },
    { field: "lastName", headerName: "Last name", width: 300 },
    { field: "age", headerName: "Age", type: "number", width: 20 },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 250,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => (
        <>
          <FaEllipsisV
            variant="outlined"
            size={20}
            onClick={(event) => handleMenuClick(event, params.row.id)}
          />
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {menuItems.map((menuItem, index) => (
              <MenuItem key={index} onClick={menuItem.onClick}>
                {menuItem.label}
              </MenuItem>
            ))}
          </Menu>
        </>
      ),
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <div className="content-wrapper">
      <div className="content-header row">
        <div className="content-header-left col-md-9 col-12 mb-2">
          <Breadcrumb routes={breadcrumb} title="Job List" />
        </div>
        <div className="content-header-right text-md-end col-md-3 col-12 d-md-block d-none">
          <div className="mb-1 breadcrumb-right">
            <button type="button" className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="content-body">
        <div className="row">
          <div className="col-12">
            <section className="invoice-list-wrapper">
              <div className="card">
                <div className="card-datatable table-responsive">
                  <DataTable columns={columns} rows={rows} />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
