
const Navbar = ({ toggleTheme }) => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold">My Dashboard</div>
      <button
        onClick={toggleTheme}
        className="bg-primary text-white p-2 rounded"
      >
        Toggle Theme
      </button>
    </nav>
  );
};

export default Navbar;
