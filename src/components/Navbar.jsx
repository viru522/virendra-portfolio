

const Navbar = () => (
  <nav className="fixed w-full bg-white shadow z-50">
    <div className="max-w-6xl mx-auto flex justify-between p-4">
      <h1 className="font-bold text-xl">MyPortfolio</h1>
      <div className="space-x-4">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </nav>
);
export default Navbar;