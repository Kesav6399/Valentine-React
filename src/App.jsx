import { useState, useEffect, useRef } from "react";

// Dynamic import for confetti to avoid build issues
let confetti = null;
try {
  confetti = require("canvas-confetti");
} catch (e) {
  console.log("Confetti module not available");
}

// Global audio ref for continuous playback
let globalAudio = null;
let globalAudioMuted = false;

// ===== MY CONFESSION PAGE - COMPLETE NEW PAGE =====
function ConfessionPage({ onClose }) {
  const [showSurprise, setShowSurprise] = useState(false);

  // Old photos (52-58) - keep original size
  const oldPhotos = [
    { id: 52, caption: "Our freaking Telegram VC — highest vc call record manadhi… nee childhood motham describe chesav, I loved it ❤️" },
    { id: 53, caption: "The confession I wanted to tell you… but you kept me quiet." },
    { id: 54, caption: "That freaking trip made me realize I adore our BOND more than myself — my ever BEST, mummy 💞" },
    { id: 55, caption: "The perfect pic — your laugh & holding my hand… aa days ey veru. Thank you for those days 🤍" },
    { id: 56, caption: "I always wanted to hold you like this in every trip… but unlucky 🖤" },
    { id: 57, caption: "That memorable VC — I was in a function, but my soul was in the call with you 🎧" },
    { id: 58, caption: "This time u held my Pinky finger & it was like ur saying I'm there FOR U, when I'm in Hospital...alot of promises ma 💕" },
  ];

  // New photos (59-73) - smaller, grid layout
  const newPhotos = [
    { id: 59, caption: "A Needle Task moment together 💖" },
    { id: 60, caption: "every update in VC beautiful memory 💕" },
    { id: 61, caption: "When i dont listen to U, the Reaction u hit ur Head 💘" },
    { id: 62, caption: "Our 1st Train jrny IG unforgettable day 🌸" },
    { id: 63, caption: "Testing the  Snap filters Sweet memories together 💗" },
    { id: 64, caption: "The best VC History photo Golden moments ✨" },
    { id: 65, caption: "The Cunning Smile, it Treasured forever 💎" },
    { id: 66, caption: "The Unexpected Hug U gave me, Beautiful TIME 🌷" },
    { id: 67, caption: "Our Best poses for our  special bond 💫" },
    { id: 68, caption: "The Attitude we show eachother & Loving this Egos (U win) ❤️" },
    { id: 69, caption: "This is our 1st Mirror photo together (we were sitting together) 🤍" },
    { id: 70, caption: "and Holding our Hands together enjoing that Beautiful jrny 🥰" },
    { id: 71, caption: "Our Last Trip ig jrny in Bus in Kerala...slowly Holding  hands fades but yet they r with me 💝" },
    { id: 72, caption: "The Stamp i wanted to leave On U as a permenant memory(coz u taught me that Bite) 🎀" },
    { id: 73, caption: "Same seat, same jrny, same Holding eachother, same photo poses(filters), but IDK but IM SURE U KNOW 🌹" },
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
        {[...oldPhotos, ...newPhotos].map((photo, index) => (
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

        {/* Old Photos Gallery (52-58) - Original Size */}
        <div className="confession-gallery">
          {oldPhotos.map((photo, index) => (
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

        {/* New Photos Gallery (59-73) - Smaller, Grid Layout */}
        <div className="confession-gallery-new">
          {newPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className="confession-photo-card-new"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <img
                src={`${import.meta.env.BASE_URL}photos/${photo.id}.jpeg`}
                alt={`Memory ${photo.id}`}
                className="confession-photo-img-new"
                onError={(e) => (e.target.style.display = "none")}
              />
              <p className="confession-caption-new">{photo.caption}</p>
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
            <span className="signature-name">K-ANNA or K-ESAV</span>
          </div>
        </div>

        {/* ===== SURPRISE MUMMY BUTTON ===== */}
        <div className="surprise-btn-container">
          <button className="surprise-mummy-btn" onClick={() => setShowSurprise(true)}>
            <span className="surprise-btn-text">Surprise Mummy 💖</span>
            <span className="surprise-btn-sparkles">
              <span>✨</span><span>💫</span><span>🌟</span><span>⭐</span>
            </span>
          </button>
        </div>

        {/* ===== SURPRISE POPUP MODAL ===== */}
        {showSurprise && (
          <div className="surprise-overlay" onClick={() => setShowSurprise(false)}>
            {/* Bubble Photos - Photos 52-58 and 59-73 */}
            {Array.from({ length: 28 }).map((_, i) => {
              // Photos 52-58 (7 photos) + Photos 59-73 (15 photos) = 22 photos total
              const photoIds = [52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73];
              const photoId = photoIds[i % photoIds.length];
              return (
                <img
                  key={`bubble-${i}`}
                  src={`${import.meta.env.BASE_URL}photos/${photoId}.jpeg`}
                  alt=""
                  className="bubble-photo"
                  style={{
                    left: `${5 + Math.random() * 85}%`,
                    top: `${5 + Math.random() * 85}%`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: `${3 + Math.random() * 4}s`,
                    width: `${60 + Math.random() * 50}px`,
                    height: `${60 + Math.random() * 50}px`,
                  }}
                  onError={(e) => (e.target.style.display = "none")}
                />
              );
            })}
            {/* Sparkle particles */}
            {Array.from({ length: 25 }).map((_, i) => (
              <span
                key={`sparkle-${i}`}
                className="surprise-sparkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                  fontSize: `${12 + Math.random() * 18}px`,
                }}
              >
                {['💖', '💕', '✨', '💫', '🌟', '💗', '💓', '❤️'][Math.floor(Math.random() * 8)]}
              </span>
            ))}
            {/* Modal Card */}
            <div className="surprise-modal" onClick={(e) => e.stopPropagation()}>
              <button className="surprise-close" onClick={() => setShowSurprise(false)}>✕</button>
              <div className="surprise-content">
                <h2 className="surprise-title">🎉💖 A Little Surprise For You 💖🎉</h2>
                <div className="surprise-message">
                  <p className="surprise-line fade-line" style={{animationDelay: '0.3s'}}>
                    I got a job mummy… 🥹💼 in Vizag only. 🏙️✨<br />
                    Startup company… name: <b>Ritefit.ai</b> anamataa. 🚀💻
                  </p>
                  <p className="surprise-line fade-line" style={{animationDelay: '0.8s'}}>
                    I thought when I got this, I would sit in your lap 🤗💕,<br />
                    take a deep breath 😮‍💨 and happily say…<br />
                    <span className="surprise-highlight">"Mummy finally I got it…" 🥺💖🎊</span>
                  </p>
                  <p className="surprise-line fade-line" style={{animationDelay: '1.3s'}}>
                    But… KANNA change aipoyadu ani telisi nappati nundi… 💔😢<br />
                    Idk what's running in my freaking mind… 🤯😭
                  </p>
                  <p className="surprise-line fade-line" style={{animationDelay: '1.8s'}}>
                    I'm waiting to buy you a gift 🎁💝 with my 1st salary… 💰✨<br />
                    That was my dream mummy… to surprise you with something special 🥹🌹
                  </p>
                  <p className="surprise-line fade-line sad-line" style={{animationDelay: '2.3s'}}>
                    But the sad reality is… hospital bills are more 🏥💸😔<br />
                    ammamma treatment… everything piling up… 😢💔<br />
                    Still… my heart says… first gift is for YOU mummy 🥺❤️‍🩹
                  </p>
                  <p className="surprise-line fade-line" style={{animationDelay: '2.8s'}}>
                    <span className="surprise-footer">— Your K-ANNA 💜🫶 forever & always ♾️</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

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

  // Toggle mute/unmute
  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(err => console.log("Audio play error:", err));
      } else {
        audioRef.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

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
    // Dispatch event to start background music
    window.dispatchEvent(new Event('startBackgroundMusic'));
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
