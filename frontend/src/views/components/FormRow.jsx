import { Link } from "react-router-dom";

const FormRow = ({ type, name, labeltext, placeholder, value, onChange }) => {
  return (
    <div>
      <label htmlFor={name} className="form-label">
        {labeltext || name}
      </label>
      <input
        type={type || "text"}
        id={name}
        name={name}
        placeholder={placeholder || ""}
        className="form-control"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default FormRow;
