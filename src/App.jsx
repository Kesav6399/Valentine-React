import { useState } from "react";
import confetti from "canvas-confetti";
import "./index.css";

export default function App() {
  const [accepted, setAccepted] = useState(false);
  const [noCount, setNoCount] = useState(0);

  const fireConfetti = () => {
    confetti({
      particleCount: 250,
      spread: 160,
      origin: { y: 0.6 },
    });
    setAccepted(true);
  };

  const moveNoButton = (e) => {
    const x = Math.random() * 260 - 130;
    const y = Math.random() * 180 - 90;
    e.target.style.transform = `translate(${x}px, ${y}px)`;
  };

  return (
    <div className="romantic-bg">
      {/* Floating hearts */}
      <div className="hearts">
        {Array.from({ length: 60 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          >
            💖
          </span>
        ))}
      </div>

      {/* FLOATING PHOTOS AFTER YES */}
      {accepted && (
        <div className="memory-field">
          {Array.from({ length: 52 }).map((_, i) => (
            <img
              key={i}
              src={`/photos/${i + 1}.jpg`}
              className="memory-photo"
              style={{
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 90}%`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
      )}

      {!accepted ? (
        <div className="card">
          <h1>💘 Will you be mine forever?</h1>

          <p className="main-text">
            Hey <b>ASHU_MUMMY</b>, <br />
            I don’t want perfect — <br />
            I want <b>you</b>. Always ✨
          </p>

          <div className="buttons">
            <button className="yes" onClick={fireConfetti}>
              YES 💞
            </button>

            <button
              className="no"
              onMouseEnter={moveNoButton}
              onClick={() => setNoCount(noCount + 1)}
            >
              NO 😈
            </button>
          </div>

          {noCount === 1 && (
            <div className="no-message">
              Where does this distance between us lead to? <br />
              When does this silence end? <br />
              Despite your anger, am I not in your heart? 🥲
            </div>
          )}

          {noCount >= 2 && (
            <div className="no-message big">
              am I not your incomplete wish… <br />
              so now don’t you wanna complete the wish? 💔
            </div>
          )}
        </div>
      ) : (
        <div className="card accepted">
          <h1>💞 It’s Always You 💞</h1>

          <p className="final-msg">
            THIS IS WHERE YOU WRITE YOUR MOST PERSONAL MESSAGE. <br />
            The words that carry your soul. <br />
            The promise. The forever. 💫
          </p>
        </div>
      )}
    </div>
  );
}
