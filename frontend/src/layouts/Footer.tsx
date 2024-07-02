import { Link } from "react-router-dom";
import styles from "../styles";

const Footer = () => {
  return (
    <div className="border-solid border-t-[1px] border-gray-300 w-full bg-gray-100 pt-12">
      <div className={`${styles.section}`}>
        <div className="py-2 flex justify-between text-gray-500 text-xs">
          <section className="flex flex-col gap-2">
            <p className="font-bold text-black">Buy</p>
            <Link to={"#"} className="hover:underline">
              Registration
            </Link>
            <Link to={"#"} className="hover:underline">
              eBay Money Back Guarantee
            </Link>
            <Link to={"#"} className="hover:underline">
              Bidding & buying help
            </Link>
            <Link to={"#"} className="hover:underline">
              Stores
            </Link>
          </section>

          <section className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <p className="font-bold text-black">Sell</p>
              <Link to={"#"} className="hover:underline">
                Start selling
              </Link>
              <Link to={"#"} className="hover:underline">
                Learn to sell
              </Link>
              <Link to={"#"} className="hover:underline">
                Affiliates
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-bold text-black">Tools & Apps</p>
              <Link to={"#"} className="hover:underline">
                Developers
              </Link>
              <Link to={"#"} className="hover:underline">
                Security center
              </Link>
              <Link to={"#"} className="hover:underline">
                Site map
              </Link>
            </div>
          </section>

          <section className="flex flex-col gap-2">
            <p className="font-bold text-black">Stay Connected</p>
            <Link to={"#"} className="hover:underline">
              eBay's Blogs
            </Link>
            <Link to={"#"} className="hover:underline">
              Facebook
            </Link>
            <Link to={"#"} className="hover:underline">
              Twitter
            </Link>
          </section>

          <section className="flex flex-col gap-2">
            <p className="font-bold text-black">About Ebay</p>
            <Link to={"#"} className="hover:underline">
              Company info
            </Link>
            <Link to={"#"} className="hover:underline">
              News
            </Link>
            <Link to={"#"} className="hover:underline">
              Investors
            </Link>
            <Link to={"#"} className="hover:underline">
              Careers
            </Link>
            <Link to={"#"} className="hover:underline">
              Government relations
            </Link>
            <Link to={"#"} className="hover:underline">
              Advertise with us
            </Link>
            <Link to={"#"} className="hover:underline">
              Policies
            </Link>
            <Link to={"#"} className="hover:underline">
              Verified Rights Owner (VeRO) Program
            </Link>
          </section>

          <section className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <p className="font-bold text-black">Help & Contact</p>
              <Link to={"#"} className="hover:underline">
                Seller Information Center
              </Link>
              <Link to={"#"} className="hover:underline">
                Contact us
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-bold text-black">Community</p>
              <Link to={"#"} className="hover:underline">
                Announcements
              </Link>
              <Link to={"#"} className="hover:underline">
                Discussion boards
              </Link>
              <Link to={"#"} className="hover:underline">
                eBay Giving Works
              </Link>
            </div>
          </section>
        </div>

        <div className="text-xs text-gray-500 flex gap-1 py-10">
          <p className="text-gray-600">
            Copyright © Fullstack MERN ebay Clone by Steven Audrey Daye. All
            Rights Reserved.{" "}
          </p>
          <Link to={"#"} className="underline">
            {" "}
            Accessibility
          </Link>
          ,
          <Link to={"#"} className="underline">
            User Agreement
          </Link>
          ,
          <Link to={"#"} className="underline">
            Privacy
          </Link>
          ,
          <Link to={"#"} className="underline">
            Payments Terms of Use
          </Link>
          ,
          <Link to={"#"} className="underline">
            Cookies
          </Link>
          ,
          <Link to={"#"} className="underline">
            CA Privacy Notice
          </Link>
          ,
          <Link to={"#"} className="underline">
            Your Privacy Choices
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
