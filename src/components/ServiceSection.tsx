import React from 'react';
import { services } from '../data/services';
import { ArrowRight } from 'lucide-react';
import SplitText from '../TextAnimations/SplitText/SplitText';
const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const ServiceSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2><SplitText
            text="Our Services"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            delay={50}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}

            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}>
          </SplitText></h2>
          <div className="w-20 h-1 bg-primary-400 mx-auto mb-6 mt-2"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive business services tailored to help your company successfully enter and thrive in the Australian & New Zealand market.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:translate-y-[-5px]"
            >
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-green-500 to-green-900 bg-clip-text text-transparent mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-4 mb-6">
                  {service.items.map((item) => (
                    <li key={item.id} className="flex">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <a
                  href={`/services/${service.id}`}
                  className="inline-flex items-center text-primary-500 font-medium hover:text-primary-700 transition-colors"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;