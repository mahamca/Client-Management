import React from 'react';

const Avatar = ({ src, alt, size = "40" }) => {
  return (
    <div
      className={`relative inline-block overflow-hidden rounded-full ${size === '40' ? 'w-10 h-10' : 'w-16 h-16'}`}
    >
      {/* If an image is provided, display it. Otherwise, show the initials or a placeholder */}
      {src ? (
        <img src={src} alt={alt} className="object-cover w-full h-full" />
      ) : (
        <div className="flex items-center justify-center bg-gray-500 text-white font-semibold">
          {alt ? alt.charAt(0) : 'U'} {/* Display the first letter of the name */}
        </div>
      )}
    </div>
  );
};

export default Avatar;
