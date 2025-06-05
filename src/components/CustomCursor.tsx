
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      
      // Add trail effect
      setTrail(prev => [
        ...prev.slice(-8), // Keep last 8 trail points
        { x: e.clientX, y: e.clientY, id: Date.now() }
      ]);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.classList.contains('cursor-pointer')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseEnter);
    window.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseEnter);
      window.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Trail Effect */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-50 mix-blend-difference"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div
            className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
            style={{
              opacity: (index + 1) / trail.length * 0.6,
              transform: `scale(${(index + 1) / trail.length})`,
            }}
          />
        </div>
      ))}

      {/* Main Cursor */}
      <div
        className={`fixed pointer-events-none z-50 transition-all duration-200 ease-out ${
          isHovering ? 'scale-150' : 'scale-100'
        }`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className={`w-8 h-8 border-2 border-red-500 rounded-full ${
          isHovering ? 'bg-red-500/20' : 'bg-transparent'
        } transition-all duration-200`} />
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </div>
    </>
  );
};

export default CustomCursor;
