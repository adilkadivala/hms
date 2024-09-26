import Button from "./ui/Button";
import { NavLink } from "react-router-dom";

const HeroSearch = () => {
  return (
    <div className="absolute top-[55vh] left-1/2 transform -translate-x-1/2 h-72 w-[60rem] bg-white rounded-lg shadow-xl">
      <div className="flex p-8 gap-5">
        <select className="py-3 px-4 pe-9 block bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:focus:ring-neutral-600">
          <option defaultValue="">Open this select menu</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <select className="py-3 px-4 pe-9 block bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:focus:ring-neutral-600">
          <option defaultValue="">Open this select menu</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <select className="py-3 px-4 pe-9 block bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:focus:ring-neutral-600">
          <option defaultValue="">Open this select menu</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <Button className="bg-primary text-white rounded w-full">search</Button>
      </div>
      <div className="flex items-center justify-center gap-12 ">
        <NavLink to="/doctors">
          <div className="p-10 bg-slate-100 rounded flex flex-col items-center ">
            <i className="fa-solid fa-user-doctor text-4xl text-primary"></i>
            <span className="text-slate-400">Doctors</span>
          </div>
        </NavLink>
        <NavLink to="/doctors">
          <div className="p-10 bg-slate-100 rounded flex flex-col items-center ">
            <i className="fa-solid fa-user-doctor text-4xl text-primary"></i>
            <span className="text-slate-400">Doctors</span>
          </div>
        </NavLink>
        <NavLink to="/doctors">
          <div className="p-10 bg-slate-100 rounded flex flex-col items-center ">
            <i className="fa-solid fa-user-doctor text-4xl text-primary"></i>
            <span className="text-slate-400">Doctors</span>
          </div>
        </NavLink>

        <div className="p-10 rounded flex flex-col items-center">
          <span>You may be looking for</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;
