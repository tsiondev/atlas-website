const MobileNav = () => {
  return (
    <ul className="h-full flex flex-col justify-center items-center gap-y-8 bg-blue">
      <li>
        <a className="link text-white text-xl" href="/">
          Home
        </a>
      </li>
      <li>
        <a className="link text-white text-xl" href="/">
          Services
        </a>
      </li>
      <li>
        <a className="link text-white text-xl" href="/">
          Products
        </a>
      </li>
      <li>
        <a className="link text-white text-xl" href="/">
          About Us
        </a>
      </li>
    </ul>
  );
};

export default MobileNav;
