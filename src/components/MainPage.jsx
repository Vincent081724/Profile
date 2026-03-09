import Header from "../components/Header";
import Homepic from "../assets/HomePic.png";
import AboutPic from "../assets/AboutPic.png";
function MainPage() {
  return (
    <div>
      <Header />
      <div>
        <section
          id="home"
          className="min-h-screen grid grid-cols-2 w-full text-white px-80 items-center"
        >
          {/* Left content */}
          <div className="flex flex-col p-4">
            <h2 className="text-4xl font-sans font-bold mb-2">
              Design that Sells,
            </h2>

            <h1 className="text-5xl font-sans font-bold mb-4 text-red-400">
              Transform <span>Experiences</span>
            </h1>

            <p className="text-base font-sans my-8">
              Let your web design comes into life, do care most about satisfying
              your needs, and will go the extra mile to meet your specific
              requests. Half-cooked outputs aren’t an option for me. Thus, Get
              in touch and see what I can work on you for today!
            </p>

            <button className="w-[130px] p-2 border rounded-xl mt-8">
              CONTACT US
            </button>
          </div>

          {/* Right image */}
          <div className="p-4 flex justify-center items-center">
            <img
              src={Homepic}
              alt="Home Picture"
              className="max-h-[700px] w-auto"
            />
          </div>
        </section>
      </div>
      <section
        id="about"
        className="min-h-screen w-full text-white flex items-center px-80"
      >
        <div className="w-full">
          <div className="grid grid-cols-2 gap-10">
            <div className="flex justify-start items-center p-4">
              <img
                src={AboutPic}
                alt="About Picture"
                className="rounded-xl border-[30px] border-gray-900"
              />
            </div>

            <div className="p-4">
              <h2 className="text-lg text-gray-500 font-semibold pb-6">
                Mastering Design Experience
              </h2>

              <h1 className="text-4xl font-bold">
                About <span className="text-red-400">Me</span>
              </h1>

              <div className="font-sans text-base">
                <p className="my-6">
                  With over 10 years of immersive experience in the world of
                  design, I am your guide through the captivating realm of UI/UX
                  and Graphic & Web Design.
                </p>

                <p className="my-6">
                  My journey began with a passion for creating visually stunning
                  and intuitive interfaces, and it’s evolved into a relentless
                  pursuit of perfection in every pixel.
                </p>

                <p className="my-6">
                  In this ever-evolving digital landscape, I’ve honed my skills
                  to adapt and innovate, ensuring your projects are always at
                  the forefront of design trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainPage;
