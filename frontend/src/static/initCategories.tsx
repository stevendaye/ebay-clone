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

// All Categories List
export const allCategories = [
  { id: "DC1", title: "Clothing, Shoes & Accessories" },
  { id: "DC2", title: "Clothing, Sporting Goods" },
  { id: "DC3", title: "Clothing, Toys & Hobbies" },
  { id: "DC4", title: "Home & Garden" },
  { id: "DC5", title: "Jewelry & Watches" },
  { id: "DC6", title: "Health & Beauty" },
  { id: "DC7", title: "Business & Industrial" },
  { id: "DC8", title: "Pet Supplies" },
  { id: "DC9", title: "Baby Essentials" },
  { id: "DC10", title: "Electronics" },
  { id: "DC11", title: "Collectibles & Art" },
  { id: "DC12", title: "Books, Movies & Music" },
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

// Selection Categories List (Select Drowpdown List)
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

// Categories Dropdown (Custom Dropdown)
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

// Popular Categories (Displayed on HomePage)
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
