import { IoCartOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-6 px-8 ">
      <div>Aegis Vault</div>
      {/* <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul> */}
      <div className="flex border text-2xl gap-x-8">
        <IoCartOutline />
        <RxHamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;
