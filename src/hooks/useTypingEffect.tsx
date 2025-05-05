import { useState, useEffect } from 'react';

export default function useTypingEffect() {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText =
    'I’m a passionate Front-End Engineer, dedicated to crafting stunning, user-friendly interfaces. Always eager to learn and grow, I’m seeking exciting projects and talented teams to collaborate with. Let’s connect!';

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Cursor blinks every 500ms

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <p className="text-gray-400 mb-4">
      {displayedText}
      <span className={showCursor ? 'inline-block' : 'hidden'}>|</span>
    </p>
  );
}
