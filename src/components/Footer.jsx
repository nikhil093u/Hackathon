const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 text-center">
      <div>© 2025 React Hackathon. All rights reserved.</div>
      <div className="mt-2">
        Built with <span className="text-red-500">❤️</span> by Hackathon Team
      </div>
      <div className="mt-3 space-x-4">
        <a
          href="https://github.com/react-hackathon"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600"
        >
          GitHub
        </a>
        <a
          href="https://www.thesmatwork.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600"
        >
          Official Site
        </a>
        <a
          href="mailto:thesmatwork@gmail.com"
          className="text-blue-400 hover:text-blue-600"
        >
          Contact Us
        </a>
      </div>
    </footer>
  );
};

export default Footer;
