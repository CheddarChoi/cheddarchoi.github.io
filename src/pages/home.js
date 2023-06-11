import About from "../sections/about";
import Publications from "../sections/publications";

import "../assets/wave.css";

function Home() {
  return (
    <>
      <div className="custom-container position-relative">
        <About />
        <Publications />
      </div>
    </>
  );
}

export default Home;
