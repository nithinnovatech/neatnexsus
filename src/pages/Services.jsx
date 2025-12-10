import React from 'react';
import { Home, Shield, Users, Monitor, Flower, ArrowRight, Briefcase, Utensils, Sparkles } from 'lucide-react';
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
            image: "/housekeeping.jpg",
            colorTheme: "blue"
        },
        {
            id: 2,
            icon: <Shield size={60} className="text-white" />,
            title: "Security Services",
            description: "Protect your assets and loved ones with our comprehensive security solutions. Our trained personnel and surveillance systems provide round-the-clock protection for residential and commercial properties.",
            image: "/security.jpg",
            colorTheme: "red"
        },
        {
            id: 3,
            icon: <Users size={60} className="text-white" />,
            title: "Event Assistance",
            description: "Make your events memorable with our professional support staff. Whether it's a corporate gathering or a private party, we handle logistics, guest management, and coordination so you can enjoy the moment.",
            image: "/eventmanagement.jpg",
            colorTheme: "purple"
        },
        {
            id: 4,
            icon: <Monitor size={60} className="text-white" />,
            title: "Digital Solutions",
            description: "Steer your business into the future with our digital management services. We offer IT support, digital marketing, and software solutions tailored to streamline your operations and enhance visibility.",
            image: "/digitalsolutions.png",
            colorTheme: "cyan"
        },
        {
            id: 5,
            icon: <Flower size={60} className="text-white" />,
            title: "Gardening & Landscaping",
            description: "Create your personal oasis with our gardening expertise. From lawn care to landscape design, we nurture your outdoor spaces to be vibrant, healthy, and aesthetically pleasing.",
            image: "/gardening.jpg",
            colorTheme: "green"
        },
        {
            id: 6,
            icon: <Utensils size={60} className="text-white" />,
            title: "Canteen & Kitchen Staff",
            description: "Experienced staff to manage your canteen operations efficiently, ensuring quality service and hygiene in your food service areas.",
            image: "/kitchen.jpg",
            colorTheme: "orange"
        },
        {
            id: 7,
            icon: <Sparkles size={60} className="text-white" />,
            title: "Washroom Cleaning & Maintenance",
            description: "Dedicated maintenance for washrooms to ensure high standards of sanitation and hygiene for the comfort and safety of all users.",
            image: "/washroomcleaning.jpg",
            colorTheme: "blue"
        }
    ];

    return (
        <div className="min-h-screen relative overflow-hidden bg-home-dark">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl opacity-60 mix-blend-screen"></div>
                <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl opacity-60 mix-blend-screen"></div>
                <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-3xl opacity-50 mix-blend-screen"></div>
            </div>

            <div className="relative z-10">
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
                                colorTheme={service.colorTheme}
                            />
                        ))}
                    </div>
                </div>

                <ContactPreview />
            </div>
        </div>
    );
};

export default Services;
