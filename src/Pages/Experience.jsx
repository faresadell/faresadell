import React, { memo } from "react";
import { GraduationCap, ShieldCheck, Terminal, Sparkles, Briefcase } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const EXPERIENCE = [
  {
    title: "Cybersecurity Intern",
    org: "Networkwalks",
    period: "Oct 2026 — Present",
    icon: Terminal,
    points: [
      "Build a hands-on lab environment with a Kali Linux attacker machine and Windows and Android target machines",
      "Perform footprinting and scanning with Maltego and Nmap and document findings in assessment reports",
      "Practice password cracking and exploitation techniques using John the Ripper and Metasploit",
      "Capture and analyze network traffic with Wireshark and write security reports on the findings (SOC track)",
    ],
  },
  {
    title: "Cybersecurity Trainee — HCIA-Security",
    org: "NTI × Huawei ICT Academy",
    period: "Aug 2026",
    icon: GraduationCap,
    points: [
      "Completed HCIA-Security V4.0 training covering network security fundamentals, firewall and VPN technologies, and security operations",
    ],
  },
  {
    title: "Cybersecurity Trainee — SOC & Incident Response",
    org: "DEPI — Digital Egypt Pioneers Initiative",
    period: "Jul 2026 — Present",
    icon: ShieldCheck,
    points: [
      "Analyze security events, logs, and system activity in SIEM-based environments to identify suspicious behavior and Indicators of Compromise (IOCs)",
      "Investigate incidents and perform Windows Event Log analysis as part of digital forensics practice",
      "Perform alert triage and threat analysis through practical SOC labs and guided exercises",
      "Apply security analysis skills in a capstone project built on realistic cybersecurity scenarios",
    ],
  },
  {
    title: "Founder & Platform Lead",
    org: "Null P0inter Academy",
    period: "Jan 2026 — Present",
    icon: Briefcase,
    points: [
      "Founded and lead a cybersecurity education platform with a six-person team, offering five learning tracks including SOC analysis and digital forensics",
      "Built platform features with Supabase and vanilla JavaScript, including student and admin dashboards, enrollment workflows, and authentication",
      "Developed an AI chatbot using the Groq API to answer student questions about learning tracks and the platform",
    ],
  },
];

const Experience = memo(() => {
  return (
    <div className="h-auto py-12" id="Experience">
      <div className="text-center mb-12 px-[5%]">
        <h2
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1e40af] to-[#0ea5e9]"
          data-aos="zoom-in-up"
          data-aos-duration="600"
        >
          My Experience
        </h2>
        <p
          className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
          data-aos="zoom-in-up"
          data-aos-duration="800"
        >
          <Sparkles className="w-5 h-5 text-sky-400" />
          Internships, training, and platform leadership
          <Sparkles className="w-5 h-5 text-sky-400" />
        </p>
      </div>

      <div className="container mx-auto px-[5%] max-w-3xl">
        <div className="relative pl-10 sm:pl-12">
          <div className="absolute left-[15px] sm:left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-[#1e40af] via-[#0ea5e9] to-transparent" />

          <div className="flex flex-col gap-8">
            {EXPERIENCE.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="relative group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="absolute -left-10 sm:-left-12 top-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#1e40af] to-[#0ea5e9] shadow-lg shadow-blue-900/40 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>

                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:scale-[1.02] hover:border-white/20 hover:shadow-2xl hover:shadow-blue-900/30 hover:bg-white/[0.07]">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-sm sm:text-base text-sky-400 mt-1 mb-3">
                      <span>{item.org}</span>
                      {item.period && (
                        <>
                          <span className="hidden sm:inline text-gray-500">•</span>
                          <span className="text-gray-400">{item.period}</span>
                        </>
                      )}
                    </div>
                    <ul className="space-y-1.5">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-gray-400 text-sm sm:text-base"
                        >
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Experience;
