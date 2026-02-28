import React from 'react';

const AboutMe: React.FC = () => {
  return (
  <section className="py-24 px-6 md:px-12 lg:px-20">
  <div className="max-w-4xl mx-auto">
    
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
      About Me
    </h2>

    <div className="space-y-12 text-center">
      
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Who I Am <span className="text-indigo-600">Professionally</span>
        </h3>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          I’m a <span className="font-semibold text-indigo-600">Fullstack Developer</span> primarily working with 
          <span className="font-semibold text-indigo-600"> React</span>, 
          <span className="font-semibold text-indigo-600"> TypeScript</span>, and both 
          <span className="font-semibold text-indigo-600"> MERN</span> and 
          <span className="font-semibold text-indigo-600"> SQL-based stacks</span>. 
          I enjoy building complete, scalable applications while maintaining clean architecture and thoughtful user experiences.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          My <span className="text-indigo-600">Human-Driven</span> Perspective
        </h3>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Before shifting into tech, I worked in 
          <span className="font-semibold text-indigo-600"> therapeutic accompaniment</span> and 
          <span className="font-semibold text-indigo-600"> educational support</span>, 
          which sparked my deep interest in <span className="font-semibold text-indigo-600"> mental health</span>. 
          This background shapes the way I design and develop — I care about building 
          <span className="font-semibold text-indigo-600"> technology that genuinely improves people’s lives</span>.
        </p>
      </div>
      
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Where I’m <span className="text-indigo-600">Heading</span>
        </h3>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          While I continue growing as a <span className="font-semibold text-indigo-600">Fullstack Developer</span>, 
          I’m currently deepening my focus on 
          <span className="font-semibold text-indigo-600"> Frontend development</span> and 
          <span className="font-semibold text-indigo-600"> design</span>. 
          I’m also expanding into 
          <span className="font-semibold text-indigo-600"> mobile development with React Native</span> and 
          exploring <span className="font-semibold text-indigo-600"> Artificial Intelligence with Python</span>, 
          experimenting with modern frameworks and creative applications. 
          My curiosity is constant — I love building diverse projects that challenge me technically and creatively.
        </p>
      </div>

    </div>
  </div>
</section>
  );
};

export default AboutMe;
