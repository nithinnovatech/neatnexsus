import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Homeowner",
            content: "The housekeeping team transformed my home! They were professional, efficient, and paid attention to every detail.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Office Manager",
            content: "Neat Nexus manages our office security and cleaning. The difference in our workspace environment is remarkable.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
        },
        {
            id: 3,
            name: "Emily Davis",
            role: "Event Planner",
            content: "Their event assistance crew was a lifesaver during our last corporate gala. Highly recommended!",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop"
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="w-full px-6 lg:px-12">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">Testimonials</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">What Our Clients Say</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center relative">
                            {/* Quote Icon Background */}
                            <div className="absolute top-4 left-6 text-9xl text-blue-50 font-serif leading-none select-none">"</div>

                            <div className="relative z-10 w-20 h-20 mb-6 rounded-full overflow-hidden border-4 border-blue-50">
                                <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                            </div>

                            <div className="relative z-10 mb-6 flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>

                            <p className="relative z-10 text-gray-600 mb-6 italic">
                                "{review.content}"
                            </p>

                            <div className="relative z-10 mt-auto">
                                <h4 className="font-bold text-gray-900">{review.name}</h4>
                                <p className="text-sm text-gray-500">{review.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
