import React from "react";

const QZone = () => {
  // Put all images in an array
  const images = [
    "/src/assets/swimming.png",
    "/src/assets/class.png",
    "/src/assets/playground.png",
  ];

  // Shuffle function (Fisher-Yates)
  const shuffleArray = (arr) => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const shuffledImages = shuffleArray(images);

  return (
    <div className="bg-base-200 p-2 mt-5 rounded">
      <h2 className="font-bold text-center text-accent">QZone</h2>
      <div className="flex flex-col space-y-5">
        {shuffledImages.map((img, index) => (
          <img key={index} src={img} alt={`qzone-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default QZone;
