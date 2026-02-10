import { useState } from "react";
import { motion } from "framer-motion";

const ITEMS = [
  {
    title: "ICT Technician Assistant (Volunteer)",
    org: "Northcoast Beach Hotel, Diani",
    dates: "September 2025 – October 2025",
    bullets: [
      "Assisted in hardware and software maintenance across hotel departments",
      "Supported network troubleshooting and improved Wi-Fi reliability",
      "Provided technical support to staff and ensured minimal downtime",
      "Assisted in integrating ICT solutions for internal operations",
    ],
  },
  {
    title: "ICT Attachment",
    org: "County Government of Kwale",
    dates: "May 2024 – August 2024",
    bullets: [
      "Supported hardware repairs and routine system maintenance",
      "Assisted in Windows Server setup and administration",
      "Managed wireless access points and network connectivity",
      "Contributed to CMS updates and IFMIS system support",
    ],
  },
];

function Experience() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="experience" className="px-4 py-16 sm:px-6 sm:py-20">
      <motion.div
        className="mx-auto max-w-3xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="mb-10 text-2xl font-bold text-white sm:text-3xl">
          Experience
        </h2>
        <div className="space-y-2">
          {ITEMS.map((item, i) => (
            <div
              key={item.title + item.org}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left hover:bg-white/5 transition-colors"
                aria-expanded={openIndex === i}
              >
                <div className="min-w-0">
                  <div>
                    <span className="font-semibold text-white">{item.title}</span>
                    <span className="mx-2 text-slate-500">—</span>
                    <span className="text-slate-400">{item.org}</span>
                  </div>
                  {item.dates && (
                    <div className="mt-0.5 text-sm text-slate-500">{item.dates}</div>
                  )}
                </div>
                <span
                  className={`text-slate-400 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  aria-hidden
                >
                  ▼
                </span>
              </button>
              {openIndex === i && (
                <div className="border-t border-white/10 px-6 py-4">
                  <ul className="list-inside list-disc space-y-1 text-sm text-slate-400">
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;
