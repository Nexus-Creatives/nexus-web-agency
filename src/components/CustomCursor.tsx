"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    // Set initial styles
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    // QuickTo for smooth animations
    const xToCursor = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3.out" });
    const yToCursor = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3.out" });

    const xToFollower = gsap.quickTo(follower, "x", { duration: 0.4, ease: "power3.out" });
    const yToFollower = gsap.quickTo(follower, "y", { duration: 0.4, ease: "power3.out" });

    const onMouseMove = (e: MouseEvent) => {
      xToCursor(e.clientX);
      yToCursor(e.clientY);
      xToFollower(e.clientX);
      yToFollower(e.clientY);
    };

    window.addEventListener("mousemove", onMouseMove);

    // Hover effect elements
    const onMouseEnterLink = () => {
      gsap.to(cursor, { scale: 0.5, backgroundColor: "#06b6d4", duration: 0.3 });
      gsap.to(follower, {
        scale: 2.5,
        borderColor: "#06b6d4",
        backgroundColor: "rgba(6, 182, 212, 0.08)",
        borderWidth: "1px",
        duration: 0.3,
      });
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, { scale: 1, backgroundColor: "#a855f7", duration: 0.3 });
      gsap.to(follower, {
        scale: 1,
        borderColor: "#a855f7",
        backgroundColor: "transparent",
        borderWidth: "2px",
        duration: 0.3,
      });
    };

    const addHoverListeners = () => {
      const hoverables = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"], .hover-target'
      );
      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterLink);
        el.addEventListener("mouseleave", onMouseLeaveLink);
      });
    };

    addHoverListeners();

    // Create a MutationObserver to watch for dynamic DOM changes (e.g. page changes, loaded content)
    const observer = new MutationObserver(() => {
      addHoverListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
      const hoverables = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"], .hover-target'
      );
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterLink);
        el.removeEventListener("mouseleave", onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-purple-500 rounded-full pointer-events-none z-[9999] mix-blend-screen hidden md:block"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      {/* Ring */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border-2 border-purple-500 rounded-full pointer-events-none z-[9998] transition-transform duration-75 hidden md:block shadow-[0_0_10px_rgba(168,85,247,0.3)]"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
}
