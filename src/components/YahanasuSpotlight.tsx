import React from 'react';
import { Quote } from 'lucide-react';

const YahanasuSpotlight = () => {
  const stories = [
    {
      id: 1,
      initial: 'Y',
      name: 'Yahanasu',
      role: 'Talented Artist & Designer',
      content: "Yahanasu is a brilliant young artist whose sketches could stop you in your tracks — full of depth, emotion, and raw talent. But like many creatives in Nigeria, she struggled to turn talent into income. No access to digital platforms, no mentorship, no consistent clients. That's the problem SkillPurse is solving. With SkillPurse, artists like Yahanasu will get access to training, visibility, and direct connections to buyers, collaborators, and supporters — both locally and globally. Because talent like hers shouldn't go unseen. It should be celebrated, empowered, and paid."
    },
    {
      id: 2,
      initial: 'A',
      name: 'Aisha',
      role: 'Digital Content Creator',
      content: "Aisha creates amazing digital content but struggles to find consistent work. With SkillPurse, she'll get the training and connections needed to turn her passion into a sustainable career."
    },
    {
      id: 3,
      initial: 'M',
      name: 'Mohammed',
      role: 'Web Developer',
      content: "Mohammed has taught himself coding but lacks the professional network to find clients. SkillPurse will help him connect with opportunities and grow his skills."
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4 sm:mb-6">
            Stories That Drive Us
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div 
              key={story.id}
              className="bg-gray-50 rounded-3xl p-6 sm:p-8 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Quote className="text-primary" size={32} />
              </div>
              
              <div className="flex flex-col items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{story.initial}</span>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-dark">{story.name}</h3>
                  <p className="text-gray-600">{story.role}</p>
                </div>
              </div>
              
              <p className="text-gray-600">{story.content.slice(0, 200)}...</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YahanasuSpotlight;