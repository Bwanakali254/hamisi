import { motion as Motion } from "framer-motion";

const PHONE = "+254796530452";
const EMAIL = "mwapodzoh6@gmail.com";
const WA_URL = "https://wa.me/254796530452";

function Contact() {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6 sm:py-20">
      <Motion.div
        className="mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
          Contact
        </h2>
        <p className="mb-8 text-slate-300">
          Ready to discuss an IT Support or ICT Systems role? I'm open to
          remote interviews and international relocation.
        </p>
   
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-emerald-600 px-6 py-3 font-medium text-white hover:bg-emerald-500 transition-colors"
          >
            WhatsApp
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-full border border-white/20 px-6 py-3 font-medium text-white hover:bg-white/10 transition-colors"
          >
            Email
          </a>
        </div>
      </Motion.div>
    </section>
  );
}

export default Contact;
