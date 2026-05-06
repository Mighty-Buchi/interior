"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
    {
        number: 12,
        suffix: "+",
        title: "Years of Interior Design Experience",
        description:
            "With a decade of experience, we have worked on a wide range of interior projects.",
    },
    {
        number: 300,
        suffix: "+",
        title: "Satisfied Clients Worldwide",
        description:
            "With a decade of experience, we have worked on a wide range of interior projects.",
    },
];

export default function SectionCount() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.4,
    });

    return (
        <section
            ref={ref}
            className="grid grid-cols-1  md:grid-cols-2 gap-4 md:gap-6"
        >
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="
            group
            rounded-3xl
            border border-[#E8E1D9]
            bg-[#FAF8F5]
            p-6 md:p-10
            shadow-[0_8px_30px_rgba(0,0,0,0.04)]
            transition-all
            duration-500
            hover:-translate-y-1
            hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]
          "
                >
                    <h2 className="text-4xl md:text-6xl font-light tracking-tight text-[#1C1C1C] mb-3 md:mb-4">
                        {inView && (
                            <CountUp
                                end={stat.number}
                                duration={2.5}
                            />
                        )}
                        {stat.suffix}
                    </h2>

                    <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">
                        {stat.title}
                    </h3>

                    <p className="text-[#6B6B6B] leading-relaxed">
                        {stat.description}
                    </p>
                    
                </div>
                
            ))}
        </section>
    );
}