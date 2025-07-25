import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Code, Zap } from "lucide-react";

const mainLinks = [
  { name: "Events", to: "/events" },
  { name: "Teams", to: "/teams" },
  // { name: "Hackathons", to: "/hackathons" }
  {name: "Leaderboard", to: "/leaderboard"},
  { name: "Submission", to: "/submission" },
  { name: "Admin", to: "/admin" }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">


      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://lh3.googleusercontent.com/noa-2TQslgxjmC3CgtAAaT952-KtrCOGC7epLa7XfKI_xVcnxd045Dr3ePAzJfwIA8VxBHWjYb-W3nSXncw9SK39jJMPvx-xufm4f73zZPiRy2jbcH3U4Tv_dyv6-LxQjXMEBP5Qnso=w16383"
              alt="HackStream Logo"
              className="h-8 w-auto rounded-full cursor-pointer"
            />
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {[...mainLinks].map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  `text-muted-foreground hover:text-foreground transition-colors ${
                    isActive ? "font-semibold text-foreground" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/register">
              <button className="text-sm px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-md">
                Register Now
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {[...mainLinks, ].map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full text-sm px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-md">
                    Register Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
