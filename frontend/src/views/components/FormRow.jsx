import { Link } from "react-router-dom";

const FormRow = ({ type, name, labeltext, placeholder }) => {
  return (
    <div className="mb-1">
      <label htmlFor={name} className="form-label">
        {labeltext || name}
      </label>
      <input
        type={type || "text"}
        id={name}
        name={name}
        placeholder={placeholder || ""}
        className="form-control"
      />
    </div>
  );
};
export default FormRow;
