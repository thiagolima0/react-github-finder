import React from "react";

const AppFooter = () => {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
      <p className="text-gray-50">Copyright &copy; {footerYear}</p>
    </footer>
  );
};

export default AppFooter;
