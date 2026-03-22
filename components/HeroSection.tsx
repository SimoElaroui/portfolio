'use client';
import { TypeAnimation } from 'react-type-animation';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="grid grid-cols-1 sm:grid-cols-12 w-full px-6 prociono-regular">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-blue-400 mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">
              {/* قمنا بتغيير طريقة كتابة النص هنا لتجنب خطأ ESLint */}
              Hello, I&apos;m{' '}
            </span>
            <br />
            <TypeAnimation 
              sequence={[
                'Mohammed Elaroui',
                1000,
                'Software Developer',
                1000,
                'UI/UX Designer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block' }}
              repeat={Infinity}
            /> 
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
