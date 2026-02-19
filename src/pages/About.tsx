import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
          About Me
        </h2>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-600 mb-4">
          Who I Am Professionally
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          I’m a Fullstack Developer specializing in <span className="font-semibold text-indigo-600">React</span> and <span className="font-semibold text-indigo-600">TypeScript</span>, with a strong passion for crafting visually engaging, user-centered applications. I focus on creating innovative solutions that are both precise and impactful.
        </p>

        <h2 className="text-3xl font-bold text-indigo-600 mb-4">
          My Human-Driven Perspective
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Before shifting into tech, I worked in therapeutic accompaniment and educational support, which sparked my deep interest in mental health. This drives me to build applications that genuinely help people improve their quality of life, especially in the realm of mental well-being.
        </p>
        
        <h2 className="text-3xl font-bold text-indigo-600 mb-4">
          Where I’m Heading
        </h2>
        <p className="text-lg text-gray-700">
          I’ve already gained solid experience building fullstack applications, and I’m eager to reinforce that by learning new tools—diving deeper into backend technologies like Node.js and expanding my expertise with emerging frameworks.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;