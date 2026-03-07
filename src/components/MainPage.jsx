import Header from "../components/Header";
import Homepic from "../assets/HomePic.png";
import AboutPic from "../assets/AboutPic.png";
function MainPage() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-2 w-full h-auto text-white px-40 items-center">
        <div className="flex flex-col p-4">
          <h2 className="text-4xl font-sans font-bold mb-2">
            Design that Sells,
          </h2>

          <h1 className="text-5xl font-sans font-bold mb-2">
            Transform <span>Experiences</span>
          </h1>

          <p className="text-base font-sans font-regular mb-2">
            Let your web design comes into life, do care most about satisfying
            your needs, and will go the extra mile to meet your specific
            requests. Half-cooked outputs aren’t an option for me. Thus, Get in
            touch and see what i can work on you for today!
          </p>

          <button className="w-[130px] p-2 border rounded-xl m-2">
            CONTACT US
          </button>
        </div>

        <div className="p-4 flex justify-center items-center ">
          <img src={Homepic} alt="Home Picture " className="h-[758px]" />
        </div>
      </div>
      <section id="about" className="w-full h-[1050px] text-white">
        <div className="mx-40">
          <div className="grid grid-cols-2 py-30">
            <div className="p-4 ">
              <img
                src={AboutPic}
                alt=""
                className="border-30 rounded-xl border-gray-900"
              />
            </div>
            <div className="p-4 ">
              <h2 className="text-lg text-gray-500 font-semibold mt-2 pb-6">
                Mastering Design Experience
              </h2>
              <h1 className="text-4xl font-bold">
                About <span className="text-red-400">Me</span>
              </h1>
              <div className="font-sans text-base">
                <p className="my-8">
                  With over 10 years of immersive experience in the world of
                  design, I am your guide through the captivating realm of UI/UX
                  and Graphic & Web Design.
                </p>
                <p className="my-8">
                  My journey began with a passion for creating visually stunning
                  and intuitive interfaces, and it’s evolved into a relentless
                  pursuit of perfection in every pixel. From crafting
                  user-centered experiences to forging memorable brand
                  identities, I bring both expertise and artistry to the table.
                </p>
                <p className="my-8">
                  In this ever-evolving digital landscape, I’ve honed my skills
                  to adapt and innovate, ensuring your projects are always at
                  the forefront of design trends. My mission is clear: to
                  elevate your brand, engage your audience, and transform your
                  vision into a compelling reality.
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
