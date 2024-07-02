import React from "react";
import { EventCard } from "./EventCard";

export const Events: React.FC = () => {
  const product = {
    id: 10,
    category: "Computers and Laptops",
    name: "Apple iPhone 15 Pro Max, 512GB, Blue Titanium - Unlocked (Renewed)",
    description: `6.7inch Super Retina XDR display. ProMotion technology. Always-On display. Titanium with textured matte glass back. Action button Dynamic Island. A magical way to interact with iPhone. A17 Pro chip with 6-core GPU Pro camera system. 48MP Main | Ultra Wide| Telephoto. Super-high-resolution photos (24MP and 48MP).
      Next-generation portraits with Focus and Depth Control. Up to 10x optical zoom range Emergency SOS via satellite. Crash Detection. Roadside Assistance via satellite Up to 29 hours video playback. USB-C, Supports USB 3 for up to 20x faster transfers. Face ID.`,
    condition: "New Product",
    image_Url: [
      {
        public_id: "test1",
        url: "https://m.media-amazon.com/images/I/61C+6juc-UL._AC_SX522_.jpg",
      },
      {
        public_id: "test2",
        url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
      },
    ],
    shop: {
      name: "Asus Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 300,
    discount_price: 239,
    rating: 4.5,
    reviews: [
      {
        user: {
          // user object will be here
        },
        comment: "IT's so cool!",
        rating: 5,
      },
    ],
    total_sell: 20,
    stock: 10,
  };

  return (
    <div className="w-full mt-12">
      <h3 className="text-xl font-bold mb-4">eBay's Daily Flash Sales</h3>

      <div className="w-full grid">
        <EventCard event={product} />
      </div>
    </div>
  );
};
