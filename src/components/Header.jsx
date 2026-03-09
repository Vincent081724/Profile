import Logo from "../assets/Logo.png";

function Header({ setActiveSection }) {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex justify-between w-full items-center px-80 py-6 sticky top-0 z-50 bg-transparent/80 backdrop-blur-md">
      {/* Left side */}
      <img
        src={Logo}
        alt="Logo"
        className="h-[136px] w-[95px] pr-6 cursor-pointer"
        onClick={() => scrollToSection("home")}
      />
      <div className="flex items-center text-lg text-white font-sans gap-5">
        <button
          onClick={() => scrollToSection("home")}
          className="cursor-pointer text-white hover:text-red-500 hover:border-b-2 hover:border-red-500 transition-all duration-200"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="cursor-pointer text-white hover:text-red-500 hover:border-b-2 hover:border-red-500 transition-all duration-200"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("services")}
          className="cursor-pointer text-white hover:text-red-500 hover:border-b-2 hover:border-red-500 transition-all duration-200"
        >
          Services
        </button>
        <button
          onClick={() => scrollToSection("certification")}
          className="cursor-pointer text-white hover:text-red-500 hover:border-b-2 hover:border-red-500 transition-all duration-200"
        >
          Certification
        </button>
        <button
          onClick={() => scrollToSection("portfolio")}
          className="cursor-pointer text-white hover:text-red-500 hover:border-b-2 hover:border-red-500 transition-all duration-200"
        >
          Portfolio
        </button>
        <div className="flex items-center text-lg text-white font-sans gap-5 pl-20">
          <p>Login</p>
          <p>Sign Up</p>
          <p>Profile</p>
        </div>
      </div>

      {/* Right side */}
    </div>
  );
}

export default Header;
