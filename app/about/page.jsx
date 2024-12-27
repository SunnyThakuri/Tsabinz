import Image from "next/image";
import React from "react";
import LetsTalk from "../components/LetsTalk";
import ContactPage from "../components/ContactPage";

const AboutPage = () => {

  return (
    <>
      <div
        className=" h-96 md:h-[811px] w-full bg-cover bg-center flex justify-center items-center relative"
        style={{ backgroundImage: "url('/images/classicfit.gif')" }}
      >
        <h1 className=" text-5xl text-[84px] text-white hero-font absolute left-8 md:left-[94px] bottom-[24px]">
          TSABINZ
        </h1>
      </div>

      <div className="mt-12 lg:mt-[80px] w-full h-[800px] flex flex-col justify-center items-center relative">
        <div className="flex flex-col justify-center items-center gap-8 w-full lg:w-[626px] text-center p-4 z-10">
          <p>Hello! Welcome to the World of Tsabinz</p>
          <p>
            Here at Tsabinz, we believe fashion is a powerful tool for
            self-expression and individuality. Founded by Tsabinz, a designer
            from Nepal with a forward-thinking approach, our brand is dedicated
            to crafting pieces that reflect confidence, creativity, and
            authenticity.
          </p>
          <p>
            Driven by a passion for modern design, Tsabinz redefines style with
            collections that balance sophistication and edge. Each piece is
            carefully created to help you showcase your unique style and feel
            empowered, whether you’re at a social event, a professional setting,
            or simply enjoying a day out.
          </p>
          <p>
            Explore the unique artistry of Tsabinz, where every garment is
            designed to celebrate personality and encourage you to express your
            true self. Join us in embracing fashion that’s as empowering as it
            is striking.
          </p>
        </div>

        <div className="w-[190px] hidden md:block h-[234px] overflow-hidden absolute  left-[6%] top-[4%] -rotate-[17deg]">
          <Image
            src="/images/express-1.jpg"
            alt="expressyouridentity"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="w-[190px] hidden md:block h-[234px] overflow-hidden absolute right-[6%] bottom-[3%] rotate-[15deg]">
          <Image
            src="/images/express-2.jpg"
            alt="expressyouridentity"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="w-[80px] h-[90px] hidden sm:block bg-black absolute left-[12%]  bottom-[84px] rounded-lg -rotate-[28deg]"></div>
        <div className="w-[80px] h-[90px] hidden sm:block bg-black absolute top-[88px] right-[12%] rounded-lg rotate-[37deg]"></div>
      </div>
      <LetsTalk/>
      <ContactPage/>    
    </>
  );
};

export default AboutPage;
