import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  
  const mousePos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const outlinePos = useRef({ x: 0, y: 0 });

  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => {
      if (outlineRef.current) {
        outlineRef.current.style.transform = 'translate(-50%, -50%) scale(0.8)';
      }
    };

    const onMouseUp = () => {
      if (outlineRef.current) {
        outlineRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
      }
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    const handleHoverStart = () => setIsHovered(true);
    const handleHoverEnd = () => setIsHovered(false);

    const animate = () => {
      // Smooth interpolation
      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.2;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.2;

      outlinePos.current.x += (mousePos.current.x - outlinePos.current.x) * 0.15;
      outlinePos.current.y += (mousePos.current.y - outlinePos.current.y) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.left = `${dotPos.current.x}px`;
        dotRef.current.style.top = `${dotPos.current.y}px`;
      }

      if (outlineRef.current) {
        outlineRef.current.style.left = `${outlinePos.current.x}px`;
        outlineRef.current.style.top = `${outlinePos.current.y}px`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    // Attach hover listeners to interactive elements
    const attachListeners = () => {
      const targets = document.querySelectorAll('a, button, .hover-target');
      targets.forEach((target) => {
        target.addEventListener('mouseenter', handleHoverStart);
        target.addEventListener('mouseleave', handleHoverEnd);
        // Ensure default cursor is hidden on these elements too
        (target as HTMLElement).style.cursor = 'none';
      });
    };

    attachListeners();
    requestRef.current = requestAnimationFrame(animate);

    // Re-attach listeners if DOM changes (optional but good for SPAs)
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      observer.disconnect();
    };
  }, [isVisible]);

  return (
    <>
      <div 
        ref={dotRef} 
        className={`cursor-dot ${isHovered ? 'hover' : ''} ${isVisible ? 'visible' : ''}`}
      />
      <div 
        ref={outlineRef} 
        className={`cursor-outline ${isHovered ? 'hover' : ''} ${isVisible ? 'visible' : ''}`}
      />
    </>
  );
};

export default CustomCursor;
