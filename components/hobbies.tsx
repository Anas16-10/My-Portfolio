"use client";

import Reveal from "@/components/reveal";
import { Bike, Dumbbell, Plane, Lightbulb } from "lucide-react";

const hobbies = [
    { label: "Football", icon: Bike, color: "text-green-400" },
    { label: "Fitness", icon: Dumbbell, color: "text-orange-400" },
    { label: "Travelling", icon: Plane, color: "text-sky-400" },
    { label: "Learning New Things", icon: Lightbulb, color: "text-yellow-400" },
];

export default function Hobbies() {
    return (
        <section id="hobbies" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Reveal>
                <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center md:text-left">Hobbies & Interests</h2>
            </Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {hobbies.map((h, idx) => {
                    const Icon = h.icon;
                    return (
                        <Reveal key={h.label} delay={idx * 0.05}>
                            <div className="rounded-2xl border border-border bg-card p-6 flex flex-col items-center gap-3 hover:shadow-lg transition text-center">
                                <Icon size={36} className={h.color} />
                                <span className="text-sm sm:text-base font-medium">{h.label}</span>
                            </div>
                        </Reveal>
                    );
                })}
            </div>
        </section>
    );
}
