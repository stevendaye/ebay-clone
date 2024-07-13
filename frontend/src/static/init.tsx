import { BiCategory, BiCameraMovie, BiPalette } from "react-icons/bi";
import {
  GiClothJar,
  GiGemChain,
  GiCurlyMask,
  GiGardeningShears,
  GiMirrorMirror,
  GiPaintedPottery,
  GiConsoleController,
} from "react-icons/gi";
import {
  PiBabyCarriage,
  PiStampLight,
  PiShirtFoldedThin,
  PiCoinsLight,
  PiBooks,
  PiPianoKeys,
  PiPawPrintLight,
  PiGiftLight,
} from "react-icons/pi";
import { GrBusinessService } from "react-icons/gr";
import { IoCameraOutline } from "react-icons/io5";
import {
  HiOutlineDevicePhoneMobile,
  HiComputerDesktop,
  HiOutlineTicket,
  HiOutlinePaintBrush,
} from "react-icons/hi2";
import { ImDrawer } from "react-icons/im";
import { TbFridge, TbBuildingEstate, TbHorseToy } from "react-icons/tb";
import {
  RiBearSmileLine,
  RiMovie2Line,
  RiCustomerService2Line,
} from "react-icons/ri";
import { LiaCarSideSolid } from "react-icons/lia";
import { BsFileMusic } from "react-icons/bs";
import {
  MdOutlineSportsTennis,
  MdOutlineSportsRugby,
  MdOutlineTravelExplore,
} from "react-icons/md";

// Swiper Images
import watchpng from "../assets/images/watch.png";
import handbagpng from "../assets/images/handbag.png";
import jewelrypng from "../assets/images/jewelry.png";
import carRackspng from "../assets/images/car_racks.png";
import carTechpng from "../assets/images/in_car_tech.png";
import camperpng from "../assets/images/camper_parts.png";

// Popular Catgerories Images
import luxuryjpg from "../assets/images/popular_destination_luxury.jpg";
import sneakersjpg from "../assets/images/popular_destination_sneakers.jpg";
import tirejpg from "../assets/images/popular_destination_tire.jpg";
import refurbishedjpg from "../assets/images/popular_destination_refurbished.jpg";
import cardsjpg from "../assets/images/popular_cestination_cards.jpg";
import toysjpg from "../assets/images/popular_destination_toys.jpg";
import prejpg from "../assets/images/popular_destination_pre_loved.jpg";

export type OptionType = {
  value: string;
  label: JSX.Element;
};

// Hero Configuration
export const highlightProductsLuxury = [
  {
    id: 1,
    title: "Watches",
    subTitle: "Watches",
    image: (
      <img
        src={watchpng}
        alt="Pre-Loved"
        className="w-full h-full object-contain"
      />
    ),
    promotion: true,
    discount: -15,
  },
  {
    id: 2,
    title: "Handbags",
    subTitle: "Handbags",
    image: (
      <img
        src={handbagpng}
        alt="Handbags"
        className="w-full h-full object-contain"
      />
    ),
    promotion: true,
    discount: -15,
  },
  {
    id: 3,
    title: "Jewelry",
    subTitle: "Jewelry",
    image: (
      <img
        src={jewelrypng}
        alt="Jewelry"
        className="w-full h-full object-contain"
      />
    ),
    promotion: true,
    discount: -15,
  },
];

export const highlightProductsRoad = [
  {
    id: 1,
    title: "Car racks & roof boxes",
    subTitle: "Car racks & roof boxes",
    image: (
      <img
        src={carRackspng}
        alt="Car Racks"
        className="w-full h-full object-contain"
      />
    ),
    promotion: false,
    discount: 0,
  },
  {
    id: 2,
    title: "In-Car technology, GPS & security devices",
    subTitle: "In-Car technology, GPS & security devices",
    image: (
      <img
        src={carTechpng}
        alt="In-Car Technology"
        className="w-[90px] h-[130px] object-contain mt-auto"
      />
    ),
    promotion: false,
    discount: 0,
  },
  {
    id: 3,
    title: "RV, trailer, camper parts & accessories",
    subTitle: "RV, trailer, camper parts & accessories",
    image: (
      <img
        src={camperpng}
        alt="RV, trailer"
        className="w-full h-full object-contain"
      />
    ),
    promotion: false,
    discount: 0,
  },
];

// Navigation Categories
export const categoriesNav = [
  "Saved",
  "Electronics",
  "Motors",
  "Fashion",
  "Collectibles & Arts",
  "Sports",
  "Health & Beauty",
  "Industrial Equipment",
  "Deal",
  "Sell",
];

// All Categories List
export const categoriesList: OptionType[] = [
  {
    value: "All Categories",
    label: (
      <div className="flex gap-2 items-center">
        <BiCategory size={20} />
        <span>All Categories</span>
      </div>
    ),
  },
  {
    value: "Antiques",
    label: (
      <div className="flex gap-2 items-center">
        <GiClothJar size={20} />
        <span>Antiques</span>
      </div>
    ),
  },

  {
    value: "Arts",
    label: (
      <div className="flex gap-2 items-center">
        <GiCurlyMask size={20} />
        <span>Arts</span>
      </div>
    ),
  },
  {
    value: "Baby",
    label: (
      <div className="flex gap-2 items-center">
        <PiBabyCarriage size={20} />
        <span>Baby</span>
      </div>
    ),
  },
  {
    value: "Books",
    label: (
      <div className="flex gap-2 items-center">
        <PiBooks size={20} />
        <span>Books</span>
      </div>
    ),
  },

  {
    value: "Business & Industrial",
    label: (
      <div className="flex gap-2 items-center">
        <GrBusinessService size={20} />
        <span>Business & Industrial</span>
      </div>
    ),
  },
  {
    value: "Cameras & Photo",
    label: (
      <div className="flex gap-2 items-center">
        <IoCameraOutline size={20} />
        <span>Cameras & Photo</span>
      </div>
    ),
  },
  {
    value: "Cell Phones & Accessories",
    label: (
      <div className="flex gap-2 items-center">
        <HiOutlineDevicePhoneMobile size={20} />
        <span>Clothing, Shoes & Accessories</span>
      </div>
    ),
  },
  {
    value: "Clothing, Shoes & Accessories",
    label: (
      <div className="flex gap-2 items-center">
        <PiShirtFoldedThin size={20} />
        <span>Clothing, Shoes & Accessories</span>
      </div>
    ),
  },
  {
    value: "Coins & Paper Money",
    label: (
      <div className="flex gap-2 items-center">
        <PiCoinsLight size={20} />
        <span>Coins & Paper Money</span>
      </div>
    ),
  },
  {
    value: "Collectibles",
    label: (
      <div className="flex gap-2 items-center">
        <ImDrawer size={20} />
        <span>Collectibles</span>
      </div>
    ),
  },
  {
    value: "Conputers/Tablets & Networking",
    label: (
      <div className="flex gap-2 items-center">
        <HiComputerDesktop size={20} />
        <span>Conputers/Tablets & Networking</span>
      </div>
    ),
  },
  {
    value: "Consumer Electronics",
    label: (
      <div className="flex gap-2 items-center">
        <TbFridge size={20} />
        <span>Consumer Electronics</span>
      </div>
    ),
  },
  {
    value: "Crafts",
    label: (
      <div className="flex gap-2 items-center">
        <HiOutlinePaintBrush size={20} />
        <span>Crafts</span>
      </div>
    ),
  },
  {
    value: "Dolls & Bears",
    label: (
      <div className="flex gap-2 items-center">
        <RiBearSmileLine size={20} />
        <span>Dolls & Bears</span>
      </div>
    ),
  },
  {
    value: "DVDs & Movies",
    label: (
      <div className="flex gap-2 items-center">
        <BiCameraMovie size={20} />
        <span>"DVDs & Movies</span>
      </div>
    ),
  },
  {
    value: "ebay Motors",
    label: (
      <div className="flex gap-2 items-center">
        <LiaCarSideSolid size={20} />
        <span>ebay Motors</span>
      </div>
    ),
  },
  {
    value: "Entertainment Memorabilia",
    label: (
      <div className="flex gap-2 items-center">
        <RiMovie2Line size={20} />
        <span>Entertainment Memorabilia</span>
      </div>
    ),
  },
  {
    value: "Gift Cards & Coupons",
    label: (
      <div className="flex gap-2 items-center">
        <PiGiftLight size={20} />
        <span>Gift Cards & Coupons</span>
      </div>
    ),
  },
  {
    value: "Health & Beauty",
    label: (
      <div className="flex gap-2 items-center">
        <GiMirrorMirror size={20} />
        <span>JHealth & Beauty</span>
      </div>
    ),
  },
  {
    value: "Home & Garden",
    label: (
      <div className="flex gap-2 items-center">
        <GiGardeningShears size={20} />
        <span>Home & Garden</span>
      </div>
    ),
  },
  {
    value: "Jewelry & Watches",
    label: (
      <div className="flex gap-2 items-center">
        <GiGemChain size={20} />
        <span>Jewelry & Watches</span>
      </div>
    ),
  },
  {
    value: "Music",
    label: (
      <div className="flex gap-2 items-center">
        <BsFileMusic size={20} />
        <span>Music</span>
      </div>
    ),
  },
  {
    value: "Musical Instruments & Gear",
    label: (
      <div className="flex gap-2 items-center">
        <PiPianoKeys size={20} />
        <span>Musical Instruments & Gear</span>
      </div>
    ),
  },
  {
    value: "Pet Supplies",
    label: (
      <div className="flex gap-2 items-center">
        <PiPawPrintLight size={20} />
        <span>Pet Supplies</span>
      </div>
    ),
  },
  {
    value: "Pottery & Glass",
    label: (
      <div className="flex gap-2 items-center">
        <GiPaintedPottery size={20} />
        <span>Pottery & Glass</span>
      </div>
    ),
  },
  {
    value: "Real Estate",
    label: (
      <div className="flex gap-2 items-center">
        <TbBuildingEstate size={20} />
        <span>Real Estate</span>
      </div>
    ),
  },
  {
    value: "Speciality Services",
    label: (
      <div className="flex gap-2 items-center">
        <RiCustomerService2Line size={20} />
        <span>Speciality Services</span>
      </div>
    ),
  },
  {
    value: "Sporting Goods",
    label: (
      <div className="flex gap-2 items-center">
        <MdOutlineSportsTennis size={20} />
        <span>Sporting Goods</span>
      </div>
    ),
  },
  {
    value: "Sports Men,Cards & Fan Shop",
    label: (
      <div className="flex gap-2 items-center">
        <MdOutlineSportsRugby size={20} />
        <span>Sports Men,Cards & Fan Shop</span>
      </div>
    ),
  },
  {
    value: "Stamps",
    label: (
      <div className="flex gap-2 items-center">
        <PiStampLight size={20} />
        <span>Stamps</span>
      </div>
    ),
  },
  {
    value: "Ticket & Experiences",
    label: (
      <div className="flex gap-2 items-center">
        <HiOutlineTicket size={20} />
        <span>Ticket & Experiences</span>
      </div>
    ),
  },
  {
    value: "Toys & Hobbies",
    label: (
      <div className="flex gap-2 items-center">
        <TbHorseToy size={20} />
        <span>Toys & Hobbies</span>
      </div>
    ),
  },
  {
    value: "Travel",
    label: (
      <div className="flex gap-2 items-center">
        <MdOutlineTravelExplore size={20} />
        <span>Travel</span>
      </div>
    ),
  },
  {
    value: "Video Games & Consoles",
    label: (
      <div className="flex gap-2 items-center">
        <GiConsoleController size={20} />
        <span>Video Games & Consoles</span>
      </div>
    ),
  },
  {
    value: "Everything Else",
    label: (
      <div className="flex gap-2 items-center">
        <BiPalette size={20} />
        <span>Everything Else</span>
      </div>
    ),
  },
];

// Categories Dropdown
export const categoriesDropdown = [
  {
    id: "CD1",
    title: "Collectibles & Arts",
    subs: [
      { id: "CDST1", subtitle: "Collectibles" },
      { id: "CDST2", subtitle: "Antiques" },
      { id: "CDST3", subtitle: "Sports Mermorabilia" },
      { id: "CDST4", subtitle: "Arts" },
    ],
  },
  {
    id: "CD2",
    title: "Electronics",
    subs: [
      { id: "CDST5", subtitle: "Computers & Tablets" },
      { id: "CDST6", subtitle: "Cameras & Photo" },
      { id: "CDST7", subtitle: "TV, Audio & Surveillance" },
      { id: "CDST8", subtitle: "Cell phones & Accessories" },
    ],
  },
  {
    id: "CD3",
    title: "Fashion",
    subs: [
      { id: "CDST9", subtitle: "Women" },
      { id: "CDST10", subtitle: "Men" },
      { id: "CDST11", subtitle: "Jewelries & Watches" },
      { id: "CDST12", subtitle: "Shoes" },
    ],
  },
  {
    id: "CD4",
    title: "Home & Garden",
    subs: [
      { id: "CDST13", subtitle: "Yard, Garden & Outdoor" },
      { id: "CDST14", subtitle: "Crafts" },
      { id: "CDST15", subtitle: "Home Improvement" },
      { id: "CDST16", subtitle: "Pet Supplies" },
    ],
  },
  {
    id: "CD5",
    title: "Auto Parts & Accessories",
    subs: [
      { id: "CDST17", subtitle: "GPS & Security Devices" },
      { id: "CDST18", subtitle: "Radar & Laser Detector" },
      { id: "CDST19", subtitle: "Care & Detailing" },
      { id: "CDST20", subtitle: "Boats Parts & Accessories" },
    ],
  },
  {
    id: "CD6",
    title: "Musical Instruments & Gear",
    subs: [
      { id: "CDST21", subtitle: "Guitar" },
      { id: "CDST22", subtitle: "Pro Audio Equipment" },
      { id: "CDST23", subtitle: "String" },
      { id: "CDST24", subtitle: "Stage Lighting & Effect" },
    ],
  },
  {
    id: "CD7",
    title: "Sporting Goods",
    subs: [
      { id: "CDST25", subtitle: "Outdoor Sport" },
      { id: "CDST26", subtitle: "Tean Sports" },
      { id: "CDST27", subtitle: "Exercise & Fitness" },
      { id: "CDST28", subtitle: "Golf" },
    ],
  },
  {
    id: "CD8",
    title: "Toys & Hobbies",
    subs: [
      { id: "CDST29", subtitle: "Radio Control" },
      { id: "CDST30", subtitle: "Kid Toys" },
      { id: "CDST31", subtitle: "Action Figures" },
      { id: "CDST32", subtitle: "Dolls & Bears" },
    ],
  },
  {
    id: "CD9",
    title: "Other Categories",
    subs: [
      { id: "CDST33", subtitle: "Video Games & Consoles" },
      { id: "CDST34", subtitle: "Health & Beauty" },
      { id: "CDST35", subtitle: "Baby" },
      { id: "CDST36", subtitle: "Business & Industrial" },
    ],
  },
];

// Popular Categories
export const popularCategories = [
  {
    id: 1,
    title: "Luxury",
    subTitle: "Luxury & Fashion",
    image: (
      <img
        src={luxuryjpg}
        alt="Luxury & Fashion"
        className="w-full h-full object-cover rounded-full"
      />
    ),
  },
  {
    id: 2,
    title: "Sneakers",
    subTitle: "Footwear & Sneakers",
    image: (
      <img
        src={sneakersjpg}
        alt="Footwear & Sneakers"
        className="w-full h-full object-cover rounded-full"
      />
    ),
  },
  {
    id: 3,
    title: "P&A",
    subTitle: "P&A",
    image: (
      <img
        src={tirejpg}
        alt="Tire"
        className="w-full h-full object-cover rounded-full"
      />
    ),
  },
  {
    id: 4,
    title: "Refurbished",
    subTitle: "Refurbished Items",
    image: (
      <img
        src={refurbishedjpg}
        alt="Refurbished Items"
        className="w-full h-full object-cover rounded-full"
      />
    ),
  },
  {
    id: 5,
    title: "Trading Cards",
    subTitle: "Trading Cards",
    image: (
      <img
        src={cardsjpg}
        alt="Trading Cards"
        className="w-full h-full object-cover rounded-full"
      />
    ),
  },
  {
    id: 6,
    title: "Toys",
    subTitle: "Toys",
    image: (
      <img
        src={toysjpg}
        alt="Toys"
        className="w-full h-full object-cover rounded-full"
      />
    ),
  },
  {
    id: 7,
    title: "Pre-loved",
    subTitle: "Babies Clothing & Accessories",
    image: (
      <img
        src={prejpg}
        alt="Pre-Loved"
        className="w-full h-full object-cover rounded-full"
      />
    ),
  },
];

// Dummy Products
export const products = [
  {
    id: 1,
    category: "Computers & Tablets",
    name: "MacBook pro M2 chipset 256gb ssd 8gb ram space-gray color with apple 1 year warranty",
    description:
      "Apple 2023 MacBook Pro Laptop M3 Pro chip with 12-core CPU, 18-core GPU: 16.2-inch Liquid Retina XDR Display, 36GB Unified Memory, 512GB SSD Storage. Works with iPhone/iPad; Space Black.",
    condition: "New Product",
    image_Url: [
      {
        public_id: "test",
        url: "https://m.media-amazon.com/images/I/61RJn0ofUsL._AC_SX522_.jpg",
      },
      {
        public_id: "test",
        url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
      },
    ],
    shop: {
      name: "Apple inc.",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 1099,
    rating: 4,
    total_sell: 35,
    stock: 10,
  },
  {
    id: 2,
    category: "Cell phones & Accessories",
    name: "SAMSUNG Galaxy S24 Ultra Cell Phone, 512GB AI Smartphone, Unlocked Android, 50MP Zoom Camera, Long Battery Life, S Pen, US Version, 2024, Titanium Violet",
    description:
      "REAL EASY, REAL-TIME TRANSLATIONS: Speak foreign languages on the spot with Live Translate²; Unlock the power of convenient communication with near real-time voice translations, right through your Samsung Phone app.",
    condition: "Refurbished Product",
    image_Url: [
      {
        public_id: "test",
        url: "https://m.media-amazon.com/images/I/71qeTVe5d1L._AC_SX679_.jpg",
      },
      {
        public_id: "test",
        url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
      },
    ],
    shop: {
      name: "Amazon Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 275,
    discount_price: 1099,
    rating: 5,
    total_sell: 80,
    stock: 10,
  },
  {
    id: 3,
    category: "Cameras & Photo",
    name: "Nikon Z50 + Z DX 16-50mm Mirrorless Camera Kit (209-point Hybrid AF, High Speed Image Processing, 4K UHD Movies, High Resolution LCD Monitor) VOA050K001",
    description:
      "Ultra-portable wide-angle zoom: fast-focusing lens with wide-angle to normal 16-50mm focal length range (FX- format/35mm equivalent 24-75mm)..In-lens vibration reduction: shoot at shutter speeds up at 4.5 stops slower than otherwise possible. Capture clearer images in low light and record steady video footage even if filming while walking",
    condition: "Fairly Used Product",
    image_Url: [
      {
        public_id: "test",
        url: "https://m.media-amazon.com/images/I/91XYGekCBzL._AC_SX466_.jpg",
      },
      {
        public_id: "test",
        url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
      },
    ],
    shop: {
      name: "Apple inc.",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 1099,
    rating: 4,
    total_sell: 75,
    stock: 10,
  },
  {
    id: 4,
    category: "Jewelries & Watches",
    name: "New Fashionable Watch for men 2023 with multipleSAMSUNG Galaxy Watch 6 Classic 43mm Bluetooth Smartwatch, Rotating Bezel, Fitness Tracker, Personalized HR Zones, Advanced Sleep Coaching, Heart Monitor, BIA Sensor, Health Insights, US Version, Black",
    description:
      "A SMART WATCH WITH CLASSIC STYLE: Galaxy Watch6 Classic features a timeless, iconic look and a bezel that just clicks with your style; It not only looks great, but it also rotates to give you easy access to all your apps",
    condition: "New Product",
    image_Url: [
      {
        public_id: "test",
        url: "https://m.media-amazon.com/images/I/71ba0zsZtnL._AC_SX679_.jpg",
      },
      {
        public_id: "test",
        url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
      },
    ],
    shop: {
      name: "Shahriar Watch House",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
      category: "Others",
    },
    price: 100,
    discount_price: 79,
    rating: 4,
    total_sell: 12,
    stock: 10,
  },
  {
    id: 5,
    category: "Men",
    name: "Men & Women New Trend shoes with all sizes along with various colors",
    description:
      "Breathable Comfort for Athletes: Our women's tennis shoes feature a lightweight and breathable design that keeps your feet cool and comfortable during intense matches while providing the perfect balance of support and flexibility for optimal performance. Enhanced Stability & Support: These comfortable shoes for women are engineered to provide superior stability and support; A durable outsole and underfoot cushioning offer excellent shock absorption.",
    condition: "Refurbished Product",
    image_Url: [
      {
        public_id: "test",
        url: "https://m.media-amazon.com/images/I/51BFxKIYNdL._AC_SY695_.jpg",
      },
      {
        public_id: "test",
        url: "https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RLV0015/2-800x800.jpg",
      },
    ],
    shop: {
      name: "Alisha Shoes Mart",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 109,
    discount_price: 89,
    rating: 4.2,
    total_sell: 190,
    stock: 23,
  },
  {
    id: 6,
    category: "Pro Audio Equipment",
    name: "Beats Solo3 Wireless On-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 40 Hours of Listening Time, Built-in Microphone - Silver",
    description:
      "High-performance wireless Bluetooth headphones Features the Apple W1 chip and Class 1 wireless Bluetooth connectivity With up to 40 hours of battery life, Beats Solo3 wireless is your perfect everyday headphone Compatible with iOS and Android devices With Fast Fuel, 5 minutes of charging gives you 3 hours of playback when battery is low Adjustable fit with comfort-cushioned ear cups made for everyday use Sleek, streamlined design that’s durable and foldable to go everywhere you do Take calls, control your music, and activate Siri with the multifunction on-ear controls The award-winning sound and design you’ve come to love from Beats, with premium playback with fine-tuned acoustics that maximize clarity, breadth, and balance What's in the box - Beats Solo3 Wireless headphones, Carrying case, 3.5mm RemoteTalk cable, Universal USB charging cable (USB-A to USB Micro-B), Quick Start Guide, Warranty Card (USB power adapter sold separately)",
    condition: "New Product",
    image_Url: [
      {
        public_id: "test",
        url: "https://m.media-amazon.com/images/I/61HH4j3GZdL._AC_SX522_.jpg",
      },
      {
        public_id: "test",
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
  },
  {
    id: 7,
    category: "Jewelries & Watches",
    name: "New Fashionable Watch for men 2023 with multiple colors",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    condition: "Refurbished Product",
    image_Url: [
      {
        public_id: "test",
        url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
      },
      {
        public_id: "test",
        url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
      },
    ],
    shop: {
      name: "Shahriar Watch House",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 100,
    discount_price: 79,
    rating: 4,
    total_sell: 62,
    stock: 10,
  },
  {
    id: 8,
    category: "Home Improvement",
    name: "SAMSUNG 21.5 Cu Ft Side By Side Counter Depth Smart Refrigerator w/ 21.5 Touch Screen Family Hub, In-Door Ice Maker, Energy Star Certified, RF22t5561SR/AA, Fingerprint Resistant Stainless Steel",
    description:
      "BUILT IN LOOK W/ COUNTER DEPTH: Smooth and streamlined exterior design features beautiful flat doors, a minimal display dispenser, and easy to open recessed handles that blend beautifully into your cabinetry, adding function and style to your kitchen FAMILY HUB: Connect to your family and home, whenever and wherever; Family Hub lets you see inside your refrigerator, manage your family’s calendars, stream music, see who’s at the front door and much more, right from your fridge FINGERPRINT RESISTANT FINISH: A finish that withstands everyday smudges, so you spend less time cleaning. ALL-AROUND COOLING & IN DOOR ICE MAKER: Multi-vent technology keeps items on every shelf evenly cooled; High capacity indoor ice maker saves shelf space for your frozen foods MINIMAL DISPLAY DISPENSER: Integrated dispenser with touch display provides easy access to water, cubed or crushed ice",
    condition: "New Product",
    image_Url: [
      {
        public_id: "test",
        url: "https://m.media-amazon.com/images/I/51eHEx2J2JL._AC_SX679_.jpg",
      },
      {
        public_id: "test",
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
    price: 2399,
    discount_price: 3230,
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
  },
  {
    id: 9,
    category: "Computers & Tablets",
    name: "Iphone 14 pro max 256 gb ssd and 8 gb ram silver colour",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    condition: "Vintage Product",
    image_Url: [
      {
        public_id: "test",
        url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
      },
      {
        public_id: "test",
        url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
      },
    ],
    shop: {
      name: "Amazon Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 99,
    discount_price: 1099,
    rating: 5,
    total_sell: 20,
    stock: 10,
  },
  {
    id: 10,
    category: "Computers & Tablets",
    name: "SAMSUNG 14 Galaxy Book4 Pro Laptop PC Computer, Intel Core 7 Ultra Processor 512GB, 3K AMOLED (2880 x 1800) Touchscreen, Advanced Security, 2024 Model, NP940XGK-KG1US, Moonstone Gray",
    description:
      "POWER FOR YOUR MOST PRODUCTIVE DAYS: Breeze through every task with a powerful Intel processor; Intel Core Ultra 7 processor 155H; Enhanced with AI Intel ARC Graphics POWERFUL. LIGHT. AMAZINGLY SLIM: Take premium power on the go with an ultralight and amazingly slim laptop; 16” Thickness: 12.5mm, Weight: 3.44 lbs; 14 Thickness: 11.6mm, Weight: 2.71 lbs BRACE YOURSELF FOR THE ULTIMATE SCREEN EXPERIENCE: Tackle what you need to do then kick back with what you love to do on a spacious 14 or 16 Dynamic AMOLED 2X touchscreen that's bright, crisp and vivid A PACKED BATTERY FOR YOUR STACKED DAYS: Achieve your goals and more with a long-lasting battery that goes the distance; 16: 76Wh (Typical) 65W Adapter; 14: 63Wh (Typical) 65W Adapter.",
    condition: "New Product",
    image_Url: [
      {
        public_id: "test",
        url: "https://m.media-amazon.com/images/I/6131ZgIFn1L._AC_SX466_.jpg",
      },
      {
        public_id: "test",
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
  },
];

export const footerLinks = [
  {
    id: "FLS1",
    title: "Buy",
    subs: [
      { id: "SFLS1", subTitle: "Registration" },
      { id: "SFLS2", subTitle: "eBay Money Back Guarantee" },
      { id: "SFLS3", subTitle: "Bidding & buying help" },
      { id: "SFLS4", subTitle: "Stores" },
    ],
  },
  {
    id: "FLS2",
    title: "Sell",
    subs: [
      { id: "SFLS5", subTitle: "Start selling" },
      { id: "SFLS6", subTitle: "Learn to sell" },
      { id: "SFLS7", subTitle: "Affiliates" },
    ],
  },
  {
    id: "FLS3",
    title: "Tools & Apps",
    subs: [
      { id: "SFLS8", subTitle: "Developers" },
      { id: "SFLS9", subTitle: "Security center" },
      { id: "SFLS10", subTitle: "Site map" },
    ],
  },
  {
    id: "FLS4",
    title: "Stay Connected",
    subs: [
      { id: "SFLS11", subTitle: "eBay's Blogs" },
      { id: "SFLS12", subTitle: "Facebook" },
      { id: "SFLS13", subTitle: "Twitter" },
    ],
  },
  {
    id: "FLS5",
    title: "About Ebay",
    subs: [
      { id: "SFLS14", subTitle: "Company info" },
      { id: "SFLS27", subTitle: "News" },
      { id: "SFLS16", subTitle: "Investors" },
      { id: "SFLS26", subTitle: "Careers" },
      { id: "SFLS17", subTitle: "Government relations" },
      { id: "SFLS18", subTitle: "Advertise with us" },
      { id: "SFLS19", subTitle: "Policies" },
      { id: "SFLS20", subTitle: "Verified Rights Owner (VeRO) Program" },
    ],
  },
  {
    id: "FLS6",
    title: "Help & Contact",
    subs: [
      { id: "SFLS21", subTitle: "Seller Information Center" },
      { id: "SFLS22", subTitle: "Contact us" },
    ],
  },
  {
    id: "FLS7",
    title: "Community",
    subs: [
      { id: "SFLS23", subTitle: "Announcements" },
      { id: "SFLS24", subTitle: "Discussion boards" },
      { id: "SFLS25", subTitle: "eBay Giving Works" },
    ],
  },
];

export const footerCopyright = [
  "Accessibility",
  "User Agreement",
  "Privacy",
  "Payments Terms of Use",
  "Cookies",
  "CA Privacy Notice",
  "Your Privacy Choices",
];

export const AuthMenuLinks = [
  "Messages",
  "Summary",
  "Recently Viewed",
  "Bid/Offers",
  "Purchase History",
  "Buy Again",
  "Selling",
  "Saved Searches",
  "Saved Sellers",
];
