import React, { useState } from "react";
import { FaBell, FaEnvelope, FaUser } from "react-icons/fa";
import { signOut } from "../../firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [email, setEmail] = useState();
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setEmail(user?.email);
    } else {
      navigate("/login");
    }
  });
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    avatar: "https://www.gravatar.com/avatar/?d=mp",
  };
  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      {/* Left Side: Logo */}
      <h1 className="text-xl font-bold">unolo</h1>

      {/* Right Side: Icons & User Profile */}
      <div className="flex items-center gap-6">
        {/* Message Icon */}
        <button className="relative p-2 hover:bg-gray-700 rounded-full">
          <FaEnvelope size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </button>

        {/* Notification Icon */}
        <button className="relative p-2 hover:bg-gray-700 rounded-full">
          <FaBell size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs w-4 h-4 flex items-center justify-center rounded-full">
            5
          </span>
        </button>

        {/* User Profile with Dropdown */}
        <div className="relative">
          <button
            className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-lg"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            <img
              src={user.avatar}
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
            <span className="hidden md:inline">{email}</span>
            <FaUser />
          </button>

          {/* Drawer Menu */}
          {isDrawerOpen && (
            <div className="absolute right-0 mt-2 w-55 bg-white text-gray-900 shadow-lg rounded-lg overflow-hidden">
              <div className="p-4 border-b">
                <p className="font-semibold">{email}</p>
                <p className="text-sm text-gray-500">{email}</p>
              </div>
              <button
                onClick={() => handleLogout()}
                className="w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
