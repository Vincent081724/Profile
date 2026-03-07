import Logo from "../assets/Logo.png";

function Header() {
  return (
    <div className="flex justify-between h-auto w-full bg-transparent items-center px-40 py-6 sticky top-0 z-50 bg-black/80 backdrop-blur-md">
      {/* Left side */}
      <div className="flex flex-col sm:flex-row items-center text-lg text-white font-sans gap-5 sticky top-0">
        {/* Bigger logo */}
        <img src={Logo} alt="Logo" className="h-[156px] w-[85px] mr-30" />
        <p>Home</p>
        <p>About</p>
        <p>Services</p>
        <p>Certification</p>
        <p>Portfolio</p>
      </div>

      {/* Right side */}
      <div className="flex flex-col sm:flex-row items-center justify-center text-lg text-white font-sans gap-5 ">
        <p>Login</p>
        <p>Sign Up</p>
        <p>Profile</p>
      </div>
    </div>
  );
}

export default Header;
