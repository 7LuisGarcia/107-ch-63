import { useState } from 'react';
import './about.css'; // <-- Add this line

function About() {
  const [isEmailVisible, setIsEmailVisible] = useState(false);

  function showEmailInformation() {
    setIsEmailVisible(true);
  }

  function hideEmailInformation() {
    setIsEmailVisible(false);
  }

  return (
    <div className="about-wrapper">
      <div className="about-card shadow">
        <h1 className="about-title">About</h1>

        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint at eaque
          quibusdam rerum aliquid vero perspiciatis praesentium maiores quisquam.
          Harum veritatis minima dolore voluptatibus magnam reiciendis temporibus
          sapiente consequuntur placeat.
        </p>

        <div className="mb-4">
          {isEmailVisible ? (
            <p className="email-visible">garcia@gmail.com</p>
          ) : (
            <p className="email-hidden">Click the button below to see email address</p>
          )}
        </div>

        <div>
          <button className="btn btn-outline-danger me-3" onClick={hideEmailInformation}>
            Hide my email
          </button>

          <button className="btn btn-primary" onClick={showEmailInformation}>
            Show my email
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;