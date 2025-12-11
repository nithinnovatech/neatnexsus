import React from 'react';

const PageHeader = ({ title, description, icon: Icon }) => {
    return (
        <div className="bg-[#1A73E8] pt-20 pb-6 sm:pt-24 sm:pb-8 md:pt-28 md:pb-10 relative overflow-hidden">
            {/* Background Pattern/Decoration */}
            <div className="absolute top-0 right-0 p-12 opacity-10 transform translate-x-1/2 -translate-y-1/2">
                {Icon && <Icon size={400} className="text-white" />}
            </div>
            <div className="absolute bottom-0 left-0 p-8 opacity-5 transform -translate-x-1/4 translate-y-1/4">
                <div className="w-64 h-64 rounded-full bg-white blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
                <div className="flex justify-center mb-3 sm:mb-4">
                    <div className="p-2.5 sm:p-3 bg-white/10 rounded-full backdrop-blur-sm shadow-xl inline-flex animate-fade-in-down">
                        {Icon && <Icon size={32} className="text-white sm:w-10 sm:h-10" />}
                    </div>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 animate-fade-in-up">
                    {title}
                </h1>
                {description && (
                    <p className="text-sm sm:text-base md:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
};

export default PageHeader;
