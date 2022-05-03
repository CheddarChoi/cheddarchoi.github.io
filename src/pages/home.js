import About from "../sections/about";
import Publications from "../sections/publications";

function Home() {
  return (
    <>
      <div className="custom-container">
        <About />
        <Publications />
      </div>
    </>
  );
}

export default Home;
