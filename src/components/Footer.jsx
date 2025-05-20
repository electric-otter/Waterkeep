import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Thanks to your support, Waterkeep has exceeded {year}!</p>
    </footer>
  );
}

export default Footer;
