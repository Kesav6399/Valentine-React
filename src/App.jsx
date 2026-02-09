import { useState, useEffect } from "react";

// Dynamic import for confetti to avoid build issues
let confetti = null;
try {
  confetti = require("canvas-confetti");
} catch (e) {
  console.log("Confetti module not available");
}

// ===== MY CONFESSION PAGE - COMPLETE NEW PAGE =====
function ConfessionPage({ onClose }) {
  // Photo data with captions for images 52-58
  const confessionPhotos = [
    { id: 52, caption: "Our freaking Telegram VC — highest vc call record manadhi… nee childhood motham describe chesav, I loved it ❤️" },
    { id: 53, caption: "The confession I wanted to tell you… but you kept me quiet." },
    { id: 54, caption: "That freaking trip made me realize I adore our BOND more than myself — my ever BEST, mummy 💞" },
    { id: 55, caption: "The perfect pic — your laugh & holding my hand… aa days ey veru. Thank you for those days 🤍" },
    { id: 56, caption: "I always wanted to hold you like this in every trip… but unlucky 🖤" },
    { id: 57, caption: "That memorable VC — I was in a function, but my soul was in the call with you 🎧" },
    { id: 58, caption: "This time u held my Pinky finger & it was like ur saying I'm there FOR U, when I'm in Hospital...alot of promises ma 💕" },
  ];

  return (
    <div className="confession-page">
      {/* Floating Background Emojis */}
      <div className="confession-emoji-bg">
        {Array.from({ length: 70 }).map((_, i) => {
          const emojis = ["💖", "💕", "💘", "💞", "❤️", "💙", "🥰", "😘", "🌸", "✨", "💗", "💓", "🤍", "🧡", "💛", "💚", "🧡", "🤎", "💜", "🎀", "🌷", "🌹", "🥀", "🍓", "🍒", "🍑", "🌺", "🌸", "💝", "🎁", "🎈", "🧸", "🫶", "👫", "💑", "👩‍❤‍👨", "💏", "🧧", "🧧", "🎊", "🎉", "🥂", "🍾", "🍷", "🥃", "🧉", "☕", "🧋", "🍫", "🍬", "🍭"];
          const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
          return (
            <span
              key={i}
              className="confession-emoji"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${18 + Math.random() * 12}s`,
                fontSize: `${20 + Math.random() * 35}px`,
              }}
            >
              {randomEmoji}
            </span>
          );
        })}
      </div>

      {/* Floating Photos Background */}
      <div className="confession-photos-bg">
        {confessionPhotos.map((photo, index) => (
          <img
            key={`bg-${photo.id}`}
            src={`${import.meta.env.BASE_URL}photos/${photo.id}.jpeg`}
            alt=""
            className="confession-photo-bg"
            style={{
              left: `${5 + (index * 16)}%`,
              animationDelay: `${index * 0.5}s`,
            }}
            onError={(e) => (e.target.style.display = "none")}
          />
        ))}
      </div>

      {/* Close Button */}
      <button className="confession-close-btn" onClick={onClose}>
        ✕ Close
      </button>

      {/* Main Content - Scrollable */}
      <div className="confession-main">
        {/* Title */}
        <h1 className="confession-title">💕 My Confession 💕</h1>

        {/* Photo Gallery with Pop-up Animation */}
        <div className="confession-gallery">
          {confessionPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className="confession-photo-card"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <img
                src={`${import.meta.env.BASE_URL}photos/${photo.id}.jpeg`}
                alt={`Memory ${photo.id}`}
                className="confession-photo-img"
                onError={(e) => (e.target.style.display = "none")}
              />
              <p className="confession-caption">{photo.caption}</p>
            </div>
          ))}
        </div>

        {/* Confession Card */}
        <div className="confession-text-card">
          <div className="confession-text-content">
            {/* ===== CONFESSION TEXT ===== */}
            <p className="confession-line">
              My love for you is uncontrollable. 💖<br />
              My feelings for you are unstoppable. 🔥<br />
              Can't go a day without thinking about you. 🥺
            </p>

            <p className="confession-line">
              Without you I'm not complete. 🌙<br />
              With you my heart finds its beat. 💓
            </p>

            <p className="confession-line">
              My heart is filled with joy because of your love. 💕<br />
              You are my strength, and without you I'm weak. 💪
            </p>

            <p className="confession-line">
              Before you came into my life, I was hopeless, lonely, sad. 🌧️<br />
              When you showed up, I knew that you were sent to me. ✨
            </p>

            <p className="confession-line">
              You are always here to cheer me up. 😊<br />
              Your smile makes me shy. 🙈<br />
              Sometimes I wonder where you were all this while,<br />
              but I'm just glad I managed to get you in my life. 💗
            </p>

            <p className="confession-line highlight">
              YOU FILL MY HEART WITH JOY! ❤️
            </p>

            <p className="confession-line telugu">
              mummy naatho matladtm ledu anoo… 💬<br />
              selfish kosam kaadu… ❤️<br />
              naatho love vadhu ani chepi malli ade buradha lo padavv… 🤗<br />
              within 6 months 30k +, ipudu karchu pettav… 💰<br />
              nearly 10k slice kaduthunnav… 🥺
            </p>

            <p className="confession-line telugu">
              Feb motham lo naaku entha money avasaram ayyindo telusa mummy… 💸<br />
              I literally wanted to ask but couldn't… 😔<br />
              ammamma cancer treatment kosam money veskuntunnam… 🏥<br />
              Feb ending ki nearly 25k hospital purpose undi ani promise ga cheptunna… 📅<br />
              but idk… 😟
            </p>

            <p className="confession-line">
              nuvvu baagunte chaalu… 😊<br />
              na hospital badha kanna nuvvu happy undadam important… 💫<br />
              na kosam selfish ga undalekapothunna… 🥀
            </p>

            <p className="confession-line">
              U be happy. 🌸<br />
              Have a long, gorgeous life ma… 🌺<br />
              Tiruvumalai Trip ki velliunteyy on Feb 14th nuvvu enjoy chesi untav ani hoping… ✈️😌
            </p>

            <p className="confession-line signature">
              Arunachalam… 💜<br />
              How unlucky am I? 😢💔
            </p>
            {/* ===== END TEXT ===== */}
          </div>
        </div>

        {/* ===== CONGRATULATIONS SECTION ===== */}
        <div className="congrats-section">
          <div className="congrats-text">🎉🎊 CONGRATULATIONS 🎊🎉</div>
          <div className="blast-emojis">
            <span>🎉</span><span>🎊</span><span>✨</span><span>💖</span><span>💕</span><span>💗</span><span>💞</span><span>💓</span>
          </div>
        </div>

        {/* ===== I MISS U SECTION ===== */}
        <div className="miss-u-section">
          <div className="miss-u-text">I MISS U KANNAMMA</div>
          <div className="mummy-text">(mummy) 💔🥺😭</div>
          <div className="heartfelt-emojis">
            <span className="emoji-cry">😭</span>
            <span className="emoji-heart">💔</span>
            <span className="emoji-cry">🥺</span>
            <span className="emoji-heart">❤️</span>
            <span className="emoji-cry">😢</span>
            <span className="emoji-heart">🖤</span>
            <span className="emoji-cry">💧</span>
            <span className="emoji-heart">💜</span>
          </div>
        </div>

        {/* ===== SIGNATURE AT BOTTOM RIGHT ===== */}
        <div className="signature-section">
          <div className="signature-option">
            <span className="signature-name">K-ANNA or ESAV</span>
          </div>
        </div>

        {/* Bottom Space */}
        <div className="confession-space"></div>
      </div>
    </div>
  );
}

export default function App() {
  const [accepted, setAccepted] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  // when the app is opened with ?secret=true show the secret page
  const [revealSecret, setRevealSecret] = useState(false);
  const [showConfession, setShowConfession] = useState(false);
  const isSecretPage = typeof window !== "undefined" && new URL(window.location.href).searchParams.get("secret") === "true";

  const fireConfetti = () => {
    try {
      if (confetti && confetti.default) {
        confetti.default({ particleCount: 300, spread: 160, origin: { y: 0.6 } });
      } else if (confetti) {
        confetti({ particleCount: 300, spread: 160, origin: { y: 0.6 } });
      }
    } catch (e) {
      console.log("Confetti not available");
    }
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
              src={`${import.meta.env.BASE_URL}photos/${(i % 52) + 1}.jpeg`}
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
            HAPPY VALENTINE'S DAY, MUMMY 💝🌹<br /><br />

            Happy V‑Day to my best partner 💑❤️<br />
            For me, the sun rises and sets by you 🌅🌇 and your smile 😊💖<br />
            I am blessed to have the most perfect partner in the world 🌍💞<br /><br />

            You're the first person I want to talk to when I wake up 🌞📞<br />
            And the last person I want to talk to before I drift off to sleep 🌙💤<br />
            When something good happens to me 🎉✨, you're the first person I want to tell 💬❤️<br />
            When I'm troubled or get bad news 😔💔, you're the one I go to for comfort and support 🤍🤲<br /><br />

            You're so much more than a friend 💖<br />
            You're my bestest friend 🫶👯, my laughter 😂, my comfort 🤗, and my strength 💪❤️<br /><br />
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

  // Show confession page if active
  if (showConfession) {
    return <ConfessionPage onClose={() => setShowConfession(false)} />;
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
                src={`${import.meta.env.BASE_URL}photos/${i + 1}.jpeg`}
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
                src={`${import.meta.env.BASE_URL}photos/${selectedPhoto}.jpeg`}
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
               <span style={{fontSize: '1.8rem'}}><span style={{color: '#ff69b4'}}>ASHU</span><span style={{color: '#4169e1'}}>_MUMMY</span>❤️💙</span> <br />I don't want perfect — <br />I want <b>you</b>. Always U ✨
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
          
          {/* Action Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap', marginTop: '20px' }}>
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
            
            {/* ===== MY CONFESSION BUTTON ===== */}
            <button
              className="confession-btn"
              onClick={() => setShowConfession(true)}
            >
              My Confession ❤️
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
