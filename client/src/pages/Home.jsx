import Navabr from "./component/Navabr";
import Hero from "./Hero";
// import HeroSearch from "./HeroSearch";
import Login from "./ui/Login";

const Home = () => {
  return (
    <>
      <Navabr />
      <Hero />
      {/* <HeroSearch /> */}
      <div className="flex items-center justify-center gap-7 pb-4">
        <Login form_name="Doctor Login" />
        <Login form_name="Hospital Login" />
        <Login form_name="Patient Login" />
      </div>
    </>
  );
};

export default Home;
