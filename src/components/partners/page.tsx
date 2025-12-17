'use client';

import { motion } from 'framer-motion';

const Partners = () => {
    const partners = [
        { name: "United Nations", logo: "https://images.squarespace-cdn.com/content/v1/5f7d7f6726f18b36ca79db0e/1607500384795-FLMTR90XH43XO7M19PVH/13.png?format=2500w" },
        { name: "World Health Organization", logo: "https://images.squarespace-cdn.com/content/v1/5f7d7f6726f18b36ca79db0e/1607500384795-FLMTR90XH43XO7M19PVH/13.png?format=2500w" },
        { name: "UNICEF", logo: "https://images.squarespace-cdn.com/content/v1/5f7d7f6726f18b36ca79db0e/1607500384795-FLMTR90XH43XO7M19PVH/13.png?format=2500w" },
        { name: "Red Cross", logo: "https://images.squarespace-cdn.com/content/v1/5f7d7f6726f18b36ca79db0e/1607500384795-FLMTR90XH43XO7M19PVH/13.png?format=2500w" },
        { name: "Doctors Without Borders", logo: "https://images.squarespace-cdn.com/content/v1/5f7d7f6726f18b36ca79db0e/1607500384795-FLMTR90XH43XO7M19PVH/13.png?format=2500w" },
        { name: "Oxfam", logo: "https://images.squarespace-cdn.com/content/v1/5f7d7f6726f18b36ca79db0e/1607500384795-FLMTR90XH43XO7M19PVH/13.png?format=2500w" },
        { name: "Save the Children", logo: "https://images.squarespace-cdn.com/content/v1/5f7d7f6726f18b36ca79db0e/1607500384795-FLMTR90XH43XO7M19PVH/13.png?format=2500w" },
        { name: "World Vision", logo: "https://images.squarespace-cdn.com/content/v1/5f7d7f6726f18b36ca79db0e/1607500384795-FLMTR90XH43XO7M19PVH/13.png?format=2500w" },
        { name: "Care International", logo: "https://images.squarespace-cdn.com/content/v1/5f7d7f6726f18b36ca79db0e/1607500384795-FLMTR90XH43XO7M19PVH/13.png?format=2500w" },
        { name: "Habitat for Humanity", logo: "https://images.squarespace-cdn.com/content/v1/5f7d7f6726f18b36ca79db0e/1607500384795-FLMTR90XH43XO7M19PVH/13.png?format=2500w" },
        { name: "Amnesty International", logo: "https://images.squarespace-cdn.com/content/v1/5f7d7f6726f18b36ca79db0e/1607500384795-FLMTR90XH43XO7M19PVH/13.png?format=2500w" },
        { name: "Greenpeace", logo: "https://images.squarespace-cdn.com/content/v1/5f7d7f6726f18b36ca79db0e/1607500384795-FLMTR90XH43XO7M19PVH/13.png?format=2500w" }
    ];

    return (
        <section className="py-20 bg-gray-50">
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
                        Our Partners
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Working together with leading organizations worldwide to maximize our impact 
                        and reach more communities in need.
                    </p>
                </motion.div>

                {/* Partners Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:-translate-y-2"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-center">
                                <div className=" bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <img className=""
                                        src={partner.logo}
                                        alt={"Name"}
                                    />
                                </div>
                                <p className="text-lg text-gray-600 font-medium leading-tight">
                                    {partner.name}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Partnership CTA */}
                <motion.div 
                    className="text-center mt-16 bg-white rounded-2xl p-8 shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Interested in Partnership?
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Join our network of partners and help us create sustainable change across the globe. 
                        Together, we can achieve more than we ever could alone.
                    </p>
                    <button className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Become a Partner
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Partners;
