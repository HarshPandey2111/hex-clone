function Navbar() {
    return (
      <nav className="flex justify-between items-center px-8 py-6 bg-[#0F1114] border-b border-gray-800">
        <div className="text-xl font-bold text-white">hex<span className="text-indigo-500">Clone</span></div>
        <ul className="hidden md:flex space-x-6 text-gray-300">
          <li><a href="#">Product</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Docs</a></li>
        </ul>
        <div className="hidden md:flex space-x-4">
          <button className="text-gray-300 hover:text-white">Login</button>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded">Sign Up</button>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  