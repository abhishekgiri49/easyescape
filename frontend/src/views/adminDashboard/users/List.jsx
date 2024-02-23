import { useEffect, useState, useMemo } from "react";
import { FaEllipsisV } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Breadcrumb, DataTable } from "../../components";

import { AdminService } from "../../../repositories";
import { UserAdd } from "../../../views";
const List = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [clickedRow, setClickedRow] = useState(null);
  const [show, setShow] = useState(null);
  const [rows, setRows] = useState([]);
  const [formData, setFormData] = useState({
    _id: null,
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({});
  const breadcrumb = [{ name: "Admin List" }];
  useEffect(() => {
    fetchAdminList();
  }, []);

  const fetchAdminList = () => {
    AdminService.get().then((data) => {
      setRows(data);
    });
  };

  const columns = [
    { field: "firstName", headerName: "First name", width: 200 },
    { field: "lastName", headerName: "Last name", width: 200 },
    { field: "username", headerName: "Username", width: 200 },
    { field: "phoneNumber", headerName: "Phone Number", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "role", headerName: "Role", width: 200 },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => (
        <>
          <FaEllipsisV
            variant="outlined"
            size={20}
            onClick={(event) => handleMenuClick(event, params.row._id)}
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
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEditAction = (id) => {
    const rowIndex = rows.findIndex((row) => row._id === id);

    setFormData(rows[rowIndex]);
    setEditMode(true);
    setShow(true);
  };

  const handleDeleteAction = (id) => {
    AdminService.delete(id)
      .then(() => {
        fetchAdminList();
      })
      .catch((error) => {});
  };

  const handleMenuClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setClickedRow(id);
  };
  const handleOpenModal = () => {
    setShow(true);
  };

  const handleCloseModal = () => {
    setShow(false);
  };
  const menuItems = useMemo(
    () => [
      { label: "Edit", onClick: () => handleEditAction(clickedRow) },
      { label: "Delete", onClick: () => handleDeleteAction(clickedRow) },
      // Add more items as needed
    ],
    [clickedRow]
  );
  const handleModalSubmit = (formData) => {
    AdminService.create(formData)
      .then(() => {
        setErrors({});
        handleCloseModal();
        // Optionally, you can redirect or perform other actions after successful addition
      })
      .catch((error) => {
        if (error.status === 422) {
          const newErrors = {};
          error.data.data.forEach((item) => {
            const fieldName = item.path;
            const errorMsg = item.msg;
            newErrors[fieldName] = errorMsg;
          });
          setErrors(newErrors);
        } else {
          setErrorMessage("Error adding Admin. Please try again.");
        }
      });
    // Handle form submission logic here
  };

  return (
    <div className="content-wrapper">
      <div className="content-header row">
        <div className="content-header-left col-md-9 col-12 mb-2">
          <Breadcrumb routes={breadcrumb} title="Admin List" />
        </div>
        <div className="content-header-right text-md-end col-md-3 col-12 d-md-block d-none">
          <div className="mb-1 breadcrumb-right">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleOpenModal}
            >
              Create New
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
      <UserAdd
        editMode={editMode}
        initialFormData={formData}
        onClose={handleCloseModal}
        onSubmit={handleModalSubmit}
        errors={errors}
        show={show}
      />
    </div>
  );
};

export default List;
