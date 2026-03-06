import Logo from "../assets/Logo.png";

function MainPage() {
  return (
    <div className="flex justify-between h-auto w-full bg-red-200 items-center py-6">
      {/* Left side */}
      <div className="flex flex-col sm:flex-row items-center text-lg text-white font-sans gap-5 ">
        {/* Bigger logo */}
        <img src={Logo} alt="Logo" className="h-[156px] w-[85px] mr-10" />
        <p>Home</p>
        <p>About</p>
        <p>Services</p>
        <p>Contact</p>
        <p>Blog</p>
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

export default MainPage;
