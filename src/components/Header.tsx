import { HiOutlineSparkles } from "react-icons/hi";
import { RiTwitterFill } from "react-icons/ri";

export function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <RiTwitterFill style={{ color: "#d6d9db", fontSize: 42 }} />
      </div>
      <div className="header-center">
        <h2>Home</h2>
        <HiOutlineSparkles style={{ color: "#d6d9db", fontSize: 25 }} />
      </div>
      <div>
        <input type="search" placeholder="Search Twotter" />
      </div>
    </header>
  );
}
