import About from "../Components/About";
import WorkSection from "../Components/WorkSection";
import banner1 from "../assets/images/banner/1.jpg";
import banner2 from "../assets/images/banner/2.jpg";
import banner3 from "../assets/images/banner/3.jpg";
import banner4 from "../assets/images/banner/4.jpg";
const Home = () => {
  return (
    <div>
      <div className="carousel rounded-xl h-[85vh] my-10">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner1} className="w-full rounded-xl" />

          <div className="absolute text-white gap-5 h-full justify-center top-0 max-w-96 space-y-3 flex flex-col bg-gradient-to-r from-[#151515] to-blue-[#151515]">
            <div className="ml-24">
              <h1 className="text-5xl">Affordable Price For Car Servicing</h1>
            </div>
            <p className="ml-24">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="ml-24">
              <button className="btn btn-active btn-secondary mr-5">
                Secondary
              </button>
              <button className="btn btn-outline btn-primary">Primary</button>
            </div>
          </div>

          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner2} className="w-full rounded-xl" />
          <div className="absolute text-white gap-5 h-full justify-center top-0 max-w-96 space-y-3 flex flex-col bg-gradient-to-r from-[#151515] to-blue-[#151515]">
            <div className="ml-24">
              <h1 className="text-5xl">Affordable Price For Car Servicing</h1>
            </div>
            <p className="ml-24">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="ml-24">
              <button className="btn btn-active btn-secondary mr-5">
                Secondary
              </button>
              <button className="btn btn-outline btn-primary">Primary</button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner3} className="w-full rounded-xl" />
          <div className="absolute rounded-xl text-white gap-5 h-full justify-center top-0 max-w-96 space-y-3 flex flex-col bg-gradient-to-r from-[#151515] to-blue-[#151515]">
            <div className="ml-24">
              <h1 className="text-5xl">Affordable Price For Car Servicing</h1>
            </div>
            <p className="ml-24">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="ml-24">
              <button className="btn btn-active btn-secondary mr-5">
                Secondary
              </button>
              <button className="btn btn-outline btn-primary">Primary</button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={banner4} className="w-full rounded-xl" />
          <div className="absolute text-white gap-5 h-full justify-center top-0 max-w-96 space-y-3 flex flex-col bg-gradient-to-r from-[#151515] to-blue-[#151515]">
            <div className="ml-24">
              <h1 className="text-5xl">Affordable Price For Car Servicing</h1>
            </div>
            <p className="ml-24">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="ml-24">
              <button className="btn btn-active btn-secondary mr-5">
                Secondary
              </button>
              <button className="btn btn-outline btn-primary">Primary</button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      <About></About>
      <WorkSection></WorkSection>
    </div>
  );
};

export default Home;
