import React from 'react';
import SpotlightCard from './SpotlightCard/SpotlightCard';
import images from '../assets';
const teamMembers = [
  {
    name: 'Nguyễn Văn A',
    role: 'Giám đốc điều hành (CEO)',
    imageUrl: images.hangpham,
  },
  {
    name: 'Trần Thị B',
    role: 'Giám đốc tài chính (CFO)',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'Lê Văn C',
    role: 'Giám đốc công nghệ (CTO)',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'Phạm Thị D',
    role: 'Trưởng phòng Marketing',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'Hoàng Văn E',
    role: 'Trưởng phòng Nhân sự',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'Đỗ Thị F',
    role: 'Trưởng phòng Kinh doanh',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
            ?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 255, 255, 0.4)">
              {/* <div
                key={index}
                className="rounded-lg p-6 flex flex-col items-center text-center"
              >
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-24 h-24 object-cover mb-4"
                />

                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div> */}
            </SpotlightCard>


          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
