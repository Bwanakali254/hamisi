import { motion } from "framer-motion";

const CARDS = [
  {
    title: "IT Support & Troubleshooting",
    items: [
      "Hardware and software troubleshooting",
      "Printer and user support",
      "Preventive maintenance",
    ],
  },
  {
    title: "Network & Connectivity",
    items: [
      "Wi-Fi support and access points",
      "Basic LAN troubleshooting",
      "Connectivity reliability focus",
    ],
  },
  {
    title: "Systems Support",
    items: [
      "Basic Windows Server assistance",
      "CMS and web system updates",
      "Documentation and handover notes",
    ],
  },
];

function Value() {
  return (
    <section id="value" className="px-4 py-16 sm:px-6 sm:py-20">
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
          What I do
        </h2>
        <p className="mb-8 max-w-2xl text-slate-300">
          I provide reliable ICT support across devices, networks, and systems.
          I solve issues quickly, document fixes clearly, and help teams work
          smoothly.
        </p>
        <motion.div
          className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
        >
          {CARDS.map((card) => (
            <motion.div
              key={card.title}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <h3 className="mb-3 font-semibold text-white">{card.title}</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-slate-400">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex flex-wrap gap-4">
          <a
            href="/Hamisi_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-emerald-600 px-6 py-3 font-medium text-white hover:bg-emerald-500 transition-colors"
          >
            Download CV
          </a>
          <a
            href="#showcase"
            className="rounded-full border border-white/20 px-6 py-3 font-medium text-white hover:bg-white/10 transition-colors"
          >
            View Case Study
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Value;
