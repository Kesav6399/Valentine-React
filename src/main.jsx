import React, { useEffect, useState, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Global audio element for continuous playback
function GlobalAudio() {
  const [isMuted, setIsMuted] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);
  const audioRef = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    // Function to start music
    const startMusic = () => {
      if (!startedRef.current && audioRef.current) {
        startedRef.current = true;
        audioRef.current.play().then(() => {
          setMusicStarted(true);
        }).catch(err => {
          console.log("Audio play error:", err);
          startedRef.current = false;
        });
      }
    };

    // Listen for custom event to start music (triggered when Yes button is clicked)
    window.addEventListener('startBackgroundMusic', startMusic);

    return () => {
      window.removeEventListener('startBackgroundMusic', startMusic);
    };
  }, []);

  const toggleMute = (e) => {
    e.stopPropagation();
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(err => console.log("Audio play error:", err));
      } else {
        audioRef.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}music/hey Rangule ringtone.mpeg`}
        loop
        preload="auto"
      />
      <button
        onClick={toggleMute}
        style={{
          position: 'fixed',
          top: '15px',
          right: '15px',
          zIndex: 10000,
          background: 'rgba(255,255,255,0.9)',
          border: '2px solid #ff6b9d',
          borderRadius: '50%',
          width: '45px',
          height: '45px',
          fontSize: '20px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 15px rgba(255, 107, 157, 0.4)',
          opacity: musicStarted ? 1 : 0.5,
          transition: 'opacity 0.3s',
        }}
        title={isMuted ? "Unmute Music" : "Mute Music"}
      >
        {isMuted ? "🔇" : "🎵"}
      </button>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalAudio />
    <App />
  </React.StrictMode>
)
