import { BiEnvelope, BiHomeCircle } from "react-icons/bi";
import { RiFileList2Line, RiHashtag } from "react-icons/ri";
import { VscBell, VscAccount } from "react-icons/vsc";
import { FiBookmark } from "react-icons/fi";
import { CgMoreO } from "react-icons/cg";
import { Link } from "react-router-dom";

export function LeftNavbarSection() {
  return (
    <aside className="left-navbar-section">
      <div className="navbar-profile-container">
        <nav>
          <ul className="navbar-list">
            <a href="#">
              <li className="navbar-list-item">
                <BiHomeCircle className="sidebar-icon" />
                Home
              </li>
            </a>

            <a href="#">
              <li className="navbar-list-item">
                <RiHashtag className="sidebar-icon" />
                Explore
              </li>
            </a>

            <a href="#">
              <li className="navbar-list-item">
                <VscBell className="sidebar-icon" />
                Notifications
              </li>
            </a>

            <a href="#">
              <li className="navbar-list-item">
                <BiEnvelope className="sidebar-icon" />
                Messages
              </li>
            </a>

            <a href="#">
              <li className="navbar-list-item">
                <FiBookmark className="sidebar-icon" />
                Bookmarks
              </li>
            </a>

            <a href="#">
              <li className="navbar-list-item">
                <RiFileList2Line className="sidebar-icon" />
                Lists
              </li>
            </a>

            <a href="#">
              <li className="navbar-list-item">
                <VscAccount className="sidebar-icon" />
                Profile
              </li>
            </a>

            <a href="#">
              <li className="navbar-list-item">
                <CgMoreO className="sidebar-icon" />
                More
              </li>
            </a>

            <button className="tweet-btn">Tweet</button>
          </ul>
        </nav>
        <Link to="/:username" className="sidebar-profile-section">
          <img
            className="profile-pic"
            src="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="user profile pic"
          />
          <h3>Username</h3>
        </Link>
      </div>
    </aside>
  );
}
