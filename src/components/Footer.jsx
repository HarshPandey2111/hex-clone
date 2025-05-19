function Footer() {
    return (
      <footer className="bg-[#0F1114] text-gray-400 py-10 px-6 md:px-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            © {new Date().getFullYear()} HexClone. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">GitHub</a>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  