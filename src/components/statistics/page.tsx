'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Users, Globe, Heart, Award } from 'lucide-react';

const Statistics = () => {
    const [counters, setCounters] = useState({
        lives: 0,
        countries: 0,
        projects: 0,
        volunteers: 0
    });

    const finalValues = {
        lives: 100,
        countries: 100,
        projects: 100,
        volunteers: 100
    };

    useEffect(() => {
        const duration = 3000; 
        const steps = 60;
        const increment = {
            lives: finalValues.lives / steps,
            countries: finalValues.countries / steps,
            projects: finalValues.projects / steps,
            volunteers: finalValues.volunteers / steps
        };

        let currentStep = 0;
        const timer = setInterval(() => {
            if (currentStep < steps) {
                setCounters({
                    lives: Math.floor(increment.lives * currentStep),
                    countries: Math.floor(increment.countries * currentStep),
                    projects: Math.floor(increment.projects * currentStep),
                    volunteers: Math.floor(increment.volunteers * currentStep)
                });
                currentStep++;
            } else {
                setCounters(finalValues);
                clearInterval(timer);
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, []);

    const stats = [
        {
            icon: Users,
            value: counters.lives,
            suffix: '+',
            label: 'Lives Impacted',
            description: 'People whose lives have been transformed through our programs',
            color: 'text-red-600'
        },
        {
            icon: Globe,
            value: counters.countries,
            suffix: '+',
            label: 'Countries',
            description: 'Nations where we actively operate and make a difference',
            color: 'text-orange-600'
        },
        {
            icon: Heart,
            value: counters.projects,
            suffix: '+',
            label: 'Active Projects',
            description: 'Ongoing initiatives creating sustainable change',
            color: 'text-red-500'
        },
        {
            icon: Award,
            value: counters.volunteers,
            suffix: '+',
            label: 'Volunteers',
            description: 'Dedicated individuals working towards our mission',
            color: 'text-orange-500'
        }
    ];

    return (
        <section className="py-20 bg-[#f1f1f1]">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Our Impact in Numbers
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Every number represents real lives changed, communities empowered, and hope restored. 
                        Together, were building a better world.
                    </p>
                </motion.div>

                {/* Statistics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-red-100 to-orange-100 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <stat.icon className={`w-8 h-8 ${stat.color}`} />
                            </div>
                            
                            <div className="mb-4">
                                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                                    {stat.value.toLocaleString()}{stat.suffix}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {stat.label}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {stat.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div 
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <p className="text-lg text-gray-600 mb-8">
                        Want to be part of these growing numbers?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Join Our Mission
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Statistics;
