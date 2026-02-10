import { motion as Motion } from "framer-motion";
import sunmegaImage from "../assets/sunmega.png";

function Showcase() {
  return (
    <section id="showcase" className="px-4 py-16 sm:px-6 sm:py-20">
      <Motion.div
        className="mx-auto max-w-4xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="mb-10 text-2xl font-bold text-white sm:text-3xl">
          Case Study
        </h2>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
          <img
            src={sunmegaImage}
            alt="SunMega Limited e-commerce platform"
            className="mb-6 w-full rounded-xl border border-white/10 object-cover aspect-video"
          />
          <h3 className="mb-3 text-xl font-semibold text-white">
            SunMega Limited (Live E-commerce)
          </h3>
          <p className="mb-6 text-slate-300">
            A live solar solutions e-commerce platform with payment integration
            and an admin panel. Built and deployed to support real customers and
            business operations.
          </p>
          <a
            href="https://sunmega.co.ke/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-emerald-600 px-6 py-3 font-medium text-white hover:bg-emerald-500 transition-colors"
          >
            Visit SunMega
          </a>
        </div>
      </Motion.div>
    </section>
  );
}

export default Showcase;
