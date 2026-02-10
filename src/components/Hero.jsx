import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="top" className="px-4 py-20 sm:px-6 sm:py-24">
      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        <p className="mb-2 text-slate-400">👋 Hello, I am</p>
        <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
          IT Support Technician
          <br />
          ICT Systems Support
        </h1>
        <p className="mb-8 text-lg text-slate-300">
          I troubleshoot hardware, software, networks, and systems to keep
          operations running with minimal downtime. Open to international
          opportunities, including the Maldives.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/Hamisi_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-emerald-600 px-6 py-3 font-medium text-white hover:bg-emerald-500 transition-colors"
          >
            Download CV
          </a>
          <a
            href="#experience"
            className="rounded-full border border-white/20 px-6 py-3 font-medium text-white hover:bg-white/10 transition-colors"
          >
            View Experience
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
