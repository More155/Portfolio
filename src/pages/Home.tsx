import { Link } from 'react-router-dom'

export const Home = () => {
  const skills = [
    'React',
    'TypeScript',
    'Node.js',
    'Express',
    'MongoDB',
    'TailwindCSS'
  ]

  return (
    <section className="flex flex-col items-center text-center px-6 pt-24 pb-28">

      <div className="flex flex-col items-center gap-6 max-w-3xl">

        <h3 className="text-2xl md:text-3xl font-light text-gray-500">
          Hello,
        </h3>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
          I'm Morena
        </h1>

        <h2 className="text-3xl md:text-5xl font-medium text-indigo-600">
          Fullstack Developer
        </h2>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
          I build scalable web applications with a strong focus on
          usability, clean architecture and meaningful user experiences.
        </p>

        <div className="flex flex-wrap justify-center gap-6 pt-6">
          <Link
            to="/pet-projects"
            className="px-6 py-3 border border-indigo-500 text-indigo-600 rounded-full hover:bg-indigo-50 transition-colors"
          >
            Pet Projects
          </Link>

          <Link
            to="/about"
            className="px-6 py-3 border border-indigo-500 text-indigo-600 rounded-full hover:bg-indigo-50 transition-colors"
          >
            About me
          </Link>

          <a
            href="/CV-Morena-Nicora.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors shadow-md"
          >
            Download CV
          </a>
        </div>
      </div>

      <p className="mt-20 text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
        I don’t just build interfaces — I think about cognition, clarity
        and how users actually feel while navigating a product.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-16">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-5 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex flex-col items-center gap-6 mt-16">
        <p className="text-2xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
          Let’s build something intentional.
        </p>

        <Link
          to="/contact"
          className="px-8 py-4 bg-indigo-600 text-white font-medium rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
        >
          Contact me
        </Link>
      </div>

        <footer className="py-12 text-center">
    <div className="flex justify-center gap-8">
      <a href="https://www.linkedin.com/in/morenanicora/" target="_blank">
        <img src="https://cdn-icons-png.flaticon.com/128/145/145807.png" alt="LinkedIn" className="w-10 h-10 hover:opacity-80 transition-opacity" />
      </a>
      <a href="https://github.com/More155" target="_blank">
        <img src="https://cdn-icons-png.flaticon.com/128/733/733553.png" alt="GitHub" className="w-10 h-10 hover:opacity-80 transition-opacity"/>
      </a>
    </div>
  </footer>

    </section>
  )
}
