import React from "react";

const foodImages = [
  "https://images.fittrapi.com/tr:w-1024,pr-true,q-60/5287daf8-db97-4ee2-a193-6a8933c39d3c.jpeg",
  "https://dhaba-sardardaa.com/wp-content/uploads/2021/12/Matar-Paneer.jpg",
  "https://example.com/image3.jpg",
  "https://example.com/image4.jpg",
  "https://example.com/image5.jpg",
];

const HomeSection = () => {
  return (
    <div className="bg-orange-500 text-white p-8 rounded-2xl">
      {/* Header and noodle image */}
      <div className="flex flex-wrap justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold">Eate Food And Serve Love</h1>
          <h2 className="text-3xl font-semibold mt-2 text-orange-100">Eate Food And Serve Love</h2>
          <h3 className="text-2xl font-medium mt-1 text-orange-200">Eate Food And Serve Love</h3>
          <h4 className="text-1xl font-medium mt-1 text-orange-200">Eate Food And Serve Love</h4>
          
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
          alt="Noodles"
          className="w-36 h-36 object-cover mt-4 md:mt-0"
        />
      </div>

      {/* Food images row */}
      <div className="flex overflow-x-auto gap-4 mt-6 pb-2">
        {foodImages.map((src, index) => (
          <div
            key={index}
            className="min-w-[200px] rounded-xl shadow-lg overflow-hidden bg-white"
          >
            <img src={src} alt={`food-${index}`} className="w-full h-48 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSection;
