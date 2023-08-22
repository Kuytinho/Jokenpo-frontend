import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 fixed-bottom">
      <div className="container">
        <div className="row">
          <div className="col">
            <p>Siga-me nas redes sociais:</p>
            <a
              href="https://github.com/Kuytinho"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white me-2"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kuytinho/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
