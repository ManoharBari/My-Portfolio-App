import React from 'react';

const SplashScreen = () => {
    return (
        <div className="fixed inset-0 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
                    <span className="inline-block animate-slide-up">Meet</span>{' '}
                    <span className="inline-block animate-slide-up animation-delay-200">Manohar</span>
                </h1>
                <div className="w-24 h-1 bg-white/30 mx-auto rounded-full overflow-hidden">
                    <div className="w-full h-full bg-white animate-loading-bar"></div>
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;