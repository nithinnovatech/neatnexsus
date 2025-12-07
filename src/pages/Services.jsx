import React from 'react';
import { Home, Shield, Users, Monitor, Flower, ArrowRight, Briefcase } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ServiceCard from '../components/ServiceCard';
import ContactPreview from '../components/ContactPreview';

const Services = () => {
    const services = [
        {
            id: 1,
            icon: <Home size={60} className="text-white" />,
            title: "Housekeeping",
            description: "From deep cleaning to daily maintenance, our housekeeping professionals ensure your space is spotless and hygienic. We use eco-friendly products and advanced techniques to deliver superior results for homes and offices.",
            image: "/housekeeping.jpg"
        },
        {
            id: 2,
            icon: <Shield size={60} className="text-white" />,
            title: "Security Services",
            description: "Protect your assets and loved ones with our comprehensive security solutions. Our trained personnel and surveillance systems provide round-the-clock protection for residential and commercial properties.",
            image: "/security.jpg"
        },
        {
            id: 3,
            icon: <Users size={60} className="text-white" />,
            title: "Event Assistance",
            description: "Make your events memorable with our professional support staff. Whether it's a corporate gathering or a private party, we handle logistics, guest management, and coordination so you can enjoy the moment.",
            image: "/eventmanagement.jpg"
        },
        {
            id: 4,
            icon: <Monitor size={60} className="text-white" />,
            title: "Digital Solutions",
            description: "Steer your business into the future with our digital management services. We offer IT support, digital marketing, and software solutions tailored to streamline your operations and enhance visibility.",
            image: "/digitalsolutions.png"
        },
        {
            id: 5,
            icon: <Flower size={60} className="text-white" />,
            title: "Gardening & Landscaping",
            description: "Create your personal oasis with our gardening expertise. From lawn care to landscape design, we nurture your outdoor spaces to be vibrant, healthy, and aesthetically pleasing.",
            image: "/gardening.jpg"
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <PageHeader
                title="Our Services"
                description="Professional solutions tailored to your unique requirements."
                icon={Briefcase}
            />

            {/* Services Grid */}
            <div className="w-full px-6 lg:px-12 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            index={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            image={service.image}
                        />
                    ))}
                </div>
            </div>

            <ContactPreview />
        </div>
    );
};

export default Services;
