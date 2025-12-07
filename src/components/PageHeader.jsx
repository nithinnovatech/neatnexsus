import React from 'react';

const PageHeader = ({ title, description, icon: Icon }) => {
    return (
        <div className="bg-[#1A73E8] py-16 md:py-24 relative overflow-hidden">
            {/* Background Pattern/Decoration */}
            <div className="absolute top-0 right-0 p-12 opacity-10 transform translate-x-1/2 -translate-y-1/2">
                {Icon && <Icon size={400} className="text-white" />}
            </div>
            <div className="absolute bottom-0 left-0 p-8 opacity-5 transform -translate-x-1/4 translate-y-1/4">
                <div className="w-64 h-64 rounded-full bg-white blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <div className="flex justify-center mb-6">
                    <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm shadow-xl inline-flex animate-fade-in-down">
                        {Icon && <Icon size={48} className="text-white" />}
                    </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
                    {title}
                </h1>
                {description && (
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
};

export default PageHeader;
