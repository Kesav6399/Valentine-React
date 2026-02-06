import { useState } from "react";
import confetti from "canvas-confetti";

export default function App() {
  const [accepted, setAccepted] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  // when the app is opened with ?secret=true show the secret page
  const [revealSecret, setRevealSecret] = useState(false);
  const isSecretPage = typeof window !== "undefined" && new URL(window.location.href).searchParams.get("secret") === "true";

  const fireConfetti = () => {
    confetti({ particleCount: 300, spread: 160, origin: { y: 0.6 } });
    setAccepted(true);
  };

  const moveNoButton = (e) => {
    const x = Math.random() * 320 - 160;
    const y = Math.random() * 220 - 110;
    e.target.style.transform = `translate(${x}px, ${y}px)`;
  };

  if (isSecretPage) {
    return (
      <div className="romantic-bg">
        <div className="hearts">
          {Array.from({ length: 60 }).map((_, i) => {
            const hearts = ["❤️", "💙", "💖", "💕", "💘", "💗", "💝", "💓"];
            const randomHeart = hearts[Math.floor(Math.random() * hearts.length)];
            return (
              <span
                key={i}
                className="heart"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${5 + Math.random() * 10}s`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              >
                {randomHeart}
              </span>
            );
          })}
        </div>

        <div className="memory-field">
          {Array.from({ length: 10 }).map((_, i) => (
            <img
              key={i}
              src={`/photos/${(i % 52) + 1}.jpeg`}
              className="memory-photo"
              style={{
                left: `${10 + (i * 8)}%`,
                bottom: `${-10 - Math.random() * 20}%`,
                animationDuration: `${12 + Math.random() * 10}s`,
                animationDelay: `${i * 0.6}s`,
                width: '180px',
                cursor: 'default',
              }}
              onError={(e) => (e.target.style.display = 'none')}
            />
          ))}
        </div>

        <div className="card accepted focus" style={{ maxWidth: '520px' }}>
          <h1>✨ A Little Surprise ✨</h1>
          <p className="main-text">
            To the sweetest and most caring person I know 💕🤗<br />
            Have an awesome day 🌸✨ and stay blessed 🙏💫<br />
            HAPPY VALENTINE’S DAY, MUMMY 💝🌹<br /><br />

            Happy V‑Day to my best partner 💑❤️<br />
            For me, the sun rises and sets by you 🌅🌇 and your smile 😊💖<br />
            I am blessed to have the most perfect partner in the world 🌍💞<br /><br />

            You’re the first person I want to talk to when I wake up 🌞📞<br />
            And the last person I want to talk to before I drift off to sleep 🌙💤<br />
            When something good happens to me 🎉✨, you’re the first person I want to tell 💬❤️<br />
            When I’m troubled or get bad news 😔💔, you’re the one I go to for comfort and support 🤍🤲<br /><br />

            You’re so much more than a friend 💖<br />
            You’re my bestest friend 🫶👯, my laughter 😂, my comfort 🤗, and my strength 💪❤️<br /><br />
            [I DONT KNOW HOW IT ENDS, BUT THE THING I KNOW IS I CANT UNLOVE YOU💔🥀]Forever n ever
            (yea OLD KANNA becaame NEW KANNA & to BAVA (i love u -  i hate u))
          </p>
          <div style={{ marginTop: 18 }}>
            <button className="yes" onClick={() => window.close()}>Close</button>
          </div>
        </div>
      </div>

          
    );
  }

  return (
    <div className="romantic-bg">
      {/* Floating Hearts with varied colors and paths */}
      <div className="hearts">
        {Array.from({ length: 90 }).map((_, i) => {
          const hearts = ["❤️", "💙", "💖", "💕", "💘", "💗", "💝", "💓"];
          const randomHeart = hearts[Math.floor(Math.random() * hearts.length)];
          return (
            <span
              key={i}
              className="heart"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${5 + Math.random() * 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            >
              {randomHeart}
            </span>
          );
        })}
      </div>

      {/* Floating Memories (ONLY AFTER YES) */}
      {accepted && (
        <>
          <div className="memory-field">
            {Array.from({ length: 52 }).map((_, i) => (
              <img
                key={i}
                src={`/photos/${i + 1}.jpeg`}
                className="memory-photo"
                style={{
                  left: `${Math.random() * 100}%`,
                  bottom: `${-20 - Math.random() * 30}%`,
                  animationDuration: `${15 + Math.random() * 18}s`,
                  animationDelay: `${(i % 6) * 1.5}s`,
                  cursor: "pointer",
                }}
                onClick={() => setSelectedPhoto(i + 1)}
                onError={(e) => (e.target.style.display = "none")}
              />
            ))}
          </div>

          {/* Photo Modal Popup */}
          {selectedPhoto && (
            <div className="photo-modal" onClick={() => setSelectedPhoto(null)}>
              <img
                src={`/photos/${selectedPhoto}.jpeg`}
                className="modal-photo"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
        </>
      )}

      {!accepted ? (
        <>
          {/* Romantic Teddy Bears Hugging */}
          <div className="teddy-bear teddy-left">🧸</div>
          <div className="teddy-bear teddy-right">🧸</div>

          {/* Animated Name */}
          <div className="animated-name">✨ ASHWINI ✨</div>

          <div className="card">
            <h1>💘 Will you be mine forever Valentine?</h1>

            <p className="main-text">
               <b>ASHU_MUMMY</b>, <br />I don't want perfect — <br />I want <b>you</b>. Always U ✨
            </p>

            <div className="buttons">
              <button className="yes" onClick={fireConfetti}>
                YES 💞
              </button>

              <button className="no" onMouseEnter={moveNoButton} onClick={() => setNoCount(noCount + 1)}>
                NO 😈
              </button>
            </div>

            {noCount === 1 && (
              <div className="no-message">
                Where does this distance between us lead to? <br />When does this silence end? <br />Despite your anger,
                am I not in your heart? 🥲
              </div>
            )}

            {noCount >= 2 && (
              <div className="no-message big">am I not your incomplete wish… <br />so now don't you wanna complete the wish? 💔</div>
            )}
          </div>
        </>
      ) : (
        <div className="card accepted focus">
          <h1>💞 It's Always You 💞</h1>

          {/* PERSONAL MESSAGE – THE HEART */}
          <p className="final-msg">
            You are the sun that shines brightly throughout my day.🌞🥰 you are the gravity that holds me down in every way.🤝❤️
            you are the moon that shimmers throughout my night.🌝🌜 you are the stars that glimmer oh so bright.✨🌟 you are the
            oxygen that keeps me alive.😍🥲 you are my heart that beats inside.💓💓 you are the blood that flows through me.🫀🩸
            you are the only guy I can see,👀👀 you have the voice of when a mockingbird sings — you are my everything☺️🕊️♥️ you
            are my one and only. You stop me from being so lonely.🥲😌 I never want to lose you😔🥺 I want you to be my best friend
            forever ♾️♾️ Thank you for everything.....😭❤️‍🩹
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              className="extra-btn"
              onClick={() => {
                // open a new tab with secret page
                const url = `${window.location.origin}${window.location.pathname}?secret=true`;
                window.open(url, "_blank");
              }}
            >
              wanna know something
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
