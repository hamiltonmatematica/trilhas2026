
import React from 'react';

interface CategoryProps {
  type: 'sisu' | 'preparacao';
  title: string;
  description: string;
  highlight: string;
  buttonLabel: string;
  buttonColor: string;
  icon: string;
}

const CategorySection: React.FC<CategoryProps> = ({ title, description, highlight, buttonLabel, buttonColor, icon }) => {
  const isSisu = buttonColor.includes('green');
  
  return (
    <div className={`relative p-8 md:p-12 rounded-2xl overflow-hidden transition-all duration-500 group border border-white/5 hover:border-white/20 bg-ebony shadow-2xl`}>
      {/* Brand shape overlay in background of card */}
      <div className={`absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 rounded-full blur-3xl opacity-20 ${isSisu ? 'bg-green-500' : 'bg-amber-900'}`}></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="text-4xl mb-6">{icon}</div>
        
        <h3 className="font-anton text-3xl md:text-4xl uppercase mb-4 tracking-wide group-hover:text-tangerine transition-colors">
          {title}
        </h3>
        
        <p className="font-inter font-bold text-white text-lg mb-6 leading-relaxed">
          {description}
        </p>
        
        <div className="flex-grow">
          <p className="font-inter text-gray-400 mb-8 leading-relaxed border-l-4 border-tangerine pl-4 italic">
            {highlight}
          </p>
        </div>
        
        <a 
          href="#"
          className={`${buttonColor} hover:opacity-90 text-white font-anton text-xl py-4 px-6 text-center rounded-sm transition-all transform group-hover:scale-[1.02] shadow-xl`}
          onClick={(e) => e.preventDefault()}
        >
          {buttonLabel}
        </a>
      </div>
    </div>
  );
};

export default CategorySection;
