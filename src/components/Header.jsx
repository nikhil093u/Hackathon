// src/components/Navbar.jsx
import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";

const navigation = [
  { name: "Learn", to: "/learn" },
  { name: "Teams", to: "/teams" },
  { name: "Hackathons", to: "/hackathons" },
  { name: "Submission", to: "/submission" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <nav className="bg-gray-800 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-8 w-auto"
                src="https://lh5.googleusercontent.com/43xqg9CDpuiYxlbjGX03RvYn-jjz3voW7zgUl5tXpUh4qOHvELn9NKoNLosmcyMu4F1YgdCvPJBJ8DMNyrPVZwIkQiLQsq6gTw3L7MLtTge-7G0Hg1Xxp4aTUXaA4wgpDwXl4zQwQTk=w16383"
                alt="Hackathon Logo"
                style={{ borderRadius: "50%" }}
              />
            </Link>

            {/* Navigation Links */}
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right side button */}
          <div className="flex items-center">
            <Link
              to="/register"
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              Register Here
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
