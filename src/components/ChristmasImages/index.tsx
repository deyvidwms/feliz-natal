import React, { useEffect, useState } from "react";

import decoration from "../../assets/images/christmas-decoration.svg";
import door from "../../assets/images/christmas-door.svg";
import gifts from "../../assets/images/christmas-gifts.svg";
import jingles from "../../assets/images/christmas-jingles.svg";
import llama from "../../assets/images/christmas-llama.svg";
import tree from "../../assets/images/christmas-tree.svg";

const imageList = [decoration, door, gifts, jingles, llama, tree];

const ChristmasImages: React.FC = () => {
  const [images, setImages] = useState<
    {
      imageUrl: string;
      style: React.CSSProperties | undefined;
    }[]
  >([]);

  useEffect(() => {
    arrangeImages();
  }, []);

  const getRandomPosition = () => {
    const maxX = window.innerWidth - 100; // Ajuste conforme o tamanho máximo da tela
    const maxY = window.innerHeight - 100; // Ajuste conforme o tamanho máximo da tela

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    return { x, y };
  };

  const arrangeImages = () => {
    const imageListMultiplied = imageList
      .flatMap((value) => [value, value])
      .flatMap((value) => [value, value]);

    console.log(imageListMultiplied);

    const arrangedImages = imageListMultiplied.map((imageUrl: string) => {
      const { x, y } = getRandomPosition();

      const style: React.CSSProperties = {
        width: "200px",
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
      };

      return {
        imageUrl,
        style: style,
      };
    });

    setImages(arrangedImages);
  };

  return (
    <div>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.imageUrl}
          alt={`Image ${index}`}
          style={image.style}
        />
      ))}
    </div>
  );
};

export default ChristmasImages;
