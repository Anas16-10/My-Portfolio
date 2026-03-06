"use client";

import Reveal from "@/components/reveal";
import { Trophy, Award, Medal } from "lucide-react";

export default function Achievements() {
    const achievements = [
        {
            title: "1st Place in 4th Semester (Entire College)",
            desc: "Achieved the highest academic standing across the entire college during the 4th semester.",
            icon: Trophy,
            color: "text-yellow-500",
        },
        {
            title: "1st Place in Quiz Quest",
            desc: "Secured first place in the Quiz Quest competition conducted by IEEE MTTS SBC.",
            icon: Award,
            color: "text-blue-500",
        },
        {
            title: "2nd Place in Hack and Hunt (Insignia)",
            desc: "Secured second place in the Hack and Hunt competition conducted by SDM College; awarded ₹2000.",
            icon: Medal,
            color: "text-slate-400", // Silver/2nd place color
        },
        {
            title: "3rd Place in 3rd Academic Year (CS Dept)",
            desc: "Secured third place in academic performance within the Computer Science Department for the 3rd year.",
            icon: Medal,
            color: "text-amber-600", // Bronze/3rd place color
        },
        {
            title: "3rd Place in 2nd Academic Year (CS Dept)",
            desc: "Secured third place in academic performance within the Computer Science Department for the 2nd year.",
            icon: Medal,
            color: "text-amber-600",
        },
    ];

    return (
        <section id="achievements" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Reveal>
                <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center md:text-left">Achievements</h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <Reveal key={idx} delay={idx * 0.05} className="h-full">
                            <div className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-4 hover:shadow-lg transition h-full">
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-full bg-muted/50 ${item.color}`}>
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="text-lg font-semibold leading-tight">{item.title}</h3>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed mt-auto">
                                    {item.desc}
                                </p>
                            </div>
                        </Reveal>
                    );
                })}
            </div>
        </section>
    );
}
