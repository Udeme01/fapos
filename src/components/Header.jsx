import { Squeeze as Hamburger } from "hamburger-react";

const Header = () => {
  return (
    <section className="bg-[url('/assets/buildings-1B.jpg')] bg-cover bg-no-repeat bg-center w-full h-screen">
      {/* header nav */}
      <header className="text-white flex items-center justify-between px-6 py-3">
        <h1 className="text-3xl uppercase text-yellow font-semibold tracking-wide">
          Fapos
        </h1>
        <Hamburger color="#ffc700" />
      </header>
      <div className="flex items-center justify-center h-[80%] text-center text-white">
        <div>
          <h1 className="text-7xl font-semibold capitalize mb-4 w-full sm:text-red-600 md:text-green-600 lg:text-purple-600 xl:text-blue-600">
            Innovative geotechnical solutions
          </h1>
          <p className="text-md font-medium px-6 py-12">
            Providing expert geotechnical services for construction and
            infrastructure projects.
          </p>
          <button className="bg-yellow px-7 py-3 mt-6 text-lg text-blue font-semibold capitalize tracking-wide cursor-pointer hover:bg-blue hover:text-yellow">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;

{
  /* <nav>
  <ul className="flex items-center justify-center">
    <li>
      <a href="#">Home</a>
    </li>
    <li>
      <a href="#">About</a>
    </li>
    <li>
      <a href="#">Services</a>
    </li>
    <li>
      <a href="#">Contact</a>
    </li>
  </ul>
</nav>; */
}
