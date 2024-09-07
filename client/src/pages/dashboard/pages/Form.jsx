import Layout from "../component/Main";
import Form from "../../ui/Form";

function FormPage() {
  return (
    <Layout>
      <Form
        formLable="Sign Up"
        discription="Already have an Account ? "
        className="mt-7 bg-white border border-gray-200 rounded-xl lg:w-1/2  shadow-sm dark:bg-neutral-900 dark:border-neutral-700"
      />
      <Form
        formLable="Sign In"
        discription="Don't have an account? "
        className="mt-7 bg-white border border-gray-200 rounded-xl lg:w-1/2  shadow-sm dark:bg-neutral-900 dark:border-neutral-700"
      />
    </Layout>
  );
}

export default FormPage;
