export default function Avatar({ src, alt, size }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-full bg-gray-400 ${size ? `w-${size} h-${size}` : 'w-8 h-8'}`}
    />
  );
}; 