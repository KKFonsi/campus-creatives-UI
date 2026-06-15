import { useState } from "react";

const avatarColors = [
  "bg-pup-maroon text-white",
  "bg-deep-maroon text-white",
  "bg-warm-gold text-white",
  "bg-[#38546b] text-white",
  "bg-[#2f6b57] text-white",
  "bg-[#6b4d7a] text-white",
  "bg-[#8a4f35] text-white",
  "bg-[#4f5f2f] text-white",
];

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);

  if (parts.length === 0) {
    return "CC";
  }

  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }

  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

function getColorClass(name: string): string {
  const normalized = name.trim().toLowerCase();
  const hash = Array.from(normalized).reduce(
    (value, char) => value + char.charCodeAt(0),
    0,
  );

  return avatarColors[hash % avatarColors.length];
}

interface InitialsAvatarProps {
  name: string;
  src?: string;
  alt?: string;
  className?: string;
  textClassName?: string;
}

export function InitialsAvatar({
  name,
  src,
  alt,
  className = "w-10 h-10",
  textClassName = "text-sm",
}: InitialsAvatarProps) {
  const [hasImageError, setHasImageError] = useState(false);
  const showImage = Boolean(src && !hasImageError);

  return (
    <div
      className={`${className} ${getColorClass(name)} rounded-full overflow-hidden inline-flex items-center justify-center shrink-0 font-bold select-none`}
      aria-label={alt ?? name}
      title={name}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt ?? name}
          className="w-full h-full object-cover"
          onError={() => setHasImageError(true)}
        />
      ) : (
        <span className={`${textClassName} leading-none tracking-normal`}>
          {getInitials(name)}
        </span>
      )}
    </div>
  );
}
