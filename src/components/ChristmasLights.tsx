import React from 'react';

const ChristmasLights = () => {
  const lights = Array.from({ length: 15 }, (_, i) => ({
    color: i % 2 === 0 ? 'bg-red-500' : 'bg-green-500',
  }));

  return (
    <div className="absolute top-0 left-0 w-full flex justify-center space-x-2 z-20">
      {lights.map((light, index) => (
        <div
          key={index}
          className={`w-4 h-4 rounded-full ${light.color} animate-blink`}
          style={{ animationDelay: `${index * 0.2}s` }}
        ></div>
      ))}
    </div>
  );
};

export default ChristmasLights;
