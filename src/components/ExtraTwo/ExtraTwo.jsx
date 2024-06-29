import { Typography } from "@material-tailwind/react";
import { Typewriter } from "react-simple-typewriter";

const ExtraTwo = () => {
  return (
    <section className="my-4 md:my-6">
      <Typography variant="h2" className="my-4 text-center font-museo">
        <Typewriter
          words={["Beautiful Bangladesh"]}
          loop={0}
          cursor
          cursorBlinking
        />
      </Typography>
      <iframe
        className="max-w-[90%] mx-auto"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Cn4G2lZ_g2I?si=d5ROAAiqTNTg4m0Y"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </section>
  );
};

export default ExtraTwo;
