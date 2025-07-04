"use client";

import Image from "next/image";

export function DetailPageImage({ src, alt }: { src: string; alt: string }) {
  console.log("DetailPageImage rendering with src:", src);
  
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      priority
      quality={90}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
    />
  );
}
