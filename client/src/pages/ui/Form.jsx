import Button from "./Button";
import Input from "./Input";

const Form = ({ fields, onSubmit, className }) => {
  return (
    <form onSubmit={onSubmit} className="flex justify-center align-middle">
      <div className={className}>
        {fields.map((field, index) => {
          const flexClass =
            field.layout === "row" ? "flex w-full" : "flex flex-col";
          return (
            <div key={index} className={`mb-4 ${flexClass}`}>
              <label htmlFor={field.id} className="block text-sm mb-2">
                {field.label}
              </label>
              <Input
                type={field.type}
                id={field.id}
                placeHolder={field.placeHolder}
                name={field.name}
                className={field.className}
              />
            </div>
          );
        })}
      </div>
    </form>
  );
};

export default Form;
