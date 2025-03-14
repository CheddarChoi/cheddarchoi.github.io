import About from "../sections/about";
import Publications from "../sections/publications";
import Services from "../sections/services";

function Home() {
  return (
    <>
      <div className="custom-container position-relative" style={{ marginTop: "3rem" }}>
        <About />
        <Publications />
        <Services />
      </div>
    </>
  );
}

export default Home;
