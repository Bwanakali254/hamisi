import { motion as Motion } from "framer-motion";

const SKILLS = [
  "Windows Support",
  "Basic Windows Server",
  "Network Troubleshooting",
  "Wi-Fi / Access Points",
  "Hardware Maintenance",
  "End-User Support",
  "Technical Documentation",
  "CMS Updates",
  "React / JavaScript",
];

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 * i },
  }),
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

function Skills() {
  return (
    <section id="skills" className="px-4 py-16 sm:px-6 sm:py-20">
      <Motion.div
        className="mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={container}
      >
        <Motion.h2
          className="mb-10 text-2xl font-bold text-white sm:text-3xl"
          variants={item}
        >
          Skills & Tools
        </Motion.h2>
        <Motion.div
          className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
          variants={container}
        >
          {SKILLS.map((skill, i) => (
            <Motion.div
              key={skill}
              variants={item}
              className={`rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm ${
                i === SKILLS.length - 1
                  ? "text-slate-400"
                  : "text-slate-200"
              }`}
            >
              <span className="text-sm font-medium">{skill}</span>
            </Motion.div>
          ))}
        </Motion.div>
      </Motion.div>
    </section>
  );
}

export default Skills;
