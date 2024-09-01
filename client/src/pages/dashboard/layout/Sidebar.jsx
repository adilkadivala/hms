const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-full w-64 p-4">
      <ul>
        <li className="mb-4">
          <a href="#" className="text-white">
            Dashboard
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="text-white">
            Settings
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="text-white">
            Profile
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="text-white">
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
