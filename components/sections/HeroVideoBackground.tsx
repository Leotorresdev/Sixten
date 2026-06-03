"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const VIDEO_SRC = "/video.mp4";
/** Copia de publicidad 2.jpg — misma imagen, ruta sin espacios */
const POSTER_SRC = "/hero-poster.jpg";

export function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [staticOnly, setStaticOnly] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setStaticOnly(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (staticOnly) return;

    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const play = () => {
      void video.play().catch(() => setStaticOnly(true));
    };

    play();
    video.addEventListener("canplay", play);

    return () => video.removeEventListener("canplay", play);
  }, [staticOnly]);

  return (
    <div className="absolute inset-0 min-h-full w-full bg-[var(--sixten-black)]">
      {staticOnly ? (
        <Image
          src={POSTER_SRC}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      ) : (
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          className="absolute inset-0 z-0 h-full w-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={POSTER_SRC}
          aria-hidden
        />
      )}

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[var(--sixten-black)]/40" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[var(--sixten-black)]/70 via-[var(--sixten-black)]/30 to-[var(--sixten-black)]/88 sm:bg-gradient-to-r sm:from-[var(--sixten-black)]/90 sm:via-[var(--sixten-black)]/60 sm:to-[var(--sixten-black)]/20" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[var(--sixten-black)] via-transparent to-[var(--sixten-black)]/35 sm:to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_70%_40%,rgba(56,189,248,0.1),transparent_50%)]" />
    </div>
  );
}
