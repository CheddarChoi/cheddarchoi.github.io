import About from "../sections/about";
import Publications from "../sections/publications";

function Home() {
  return (
    <>
      <div className="custom-container position-relative" style={{ marginTop: "3rem" }}>
        <About />
        <Publications />
      </div>
    </>
  );
}

export default Home;
