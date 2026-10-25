"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type Props = Omit<ImageProps, "alt"> & {
  alt: string;
};

export function ImageWithFallback({ alt, className, src, ...props }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`grid place-items-center bg-navy text-center text-sm font-medium text-white ${className ?? ""}`}
      >
        <span className="px-6">{alt}</span>
      </div>
    );
  }

  return <Image {...props} src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
}
