import Input from "./Input";
import { editFields } from "../../constant/Fields";

const Form = ({ fields, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      {editFields.map((field, index) => (
        <div key={index} className="mb-4">
          <label htmlFor={field.id} className="block text-sm mb-2">
            {field.label}
          </label>
          <Input
            type={field.type}
            id={field.id}
            name={field.name}
            className={field.className}
          />
          
        </div>
      ))}
    </form>
  );
};

export default Form;
