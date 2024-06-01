import { Link } from "react-router-dom";
import routes from "../routes";
import { ChangeEvent, useRef, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import pngEbay from "../assets/images/ebay.png";
import apple from "../assets/images/apple.png";
import fb from "../assets/images/fb.png";
import google from "../assets/images/google.png";
import jpgBuyer from "../assets/images/buyer.jpg";
import jpgSeller from "../assets/images/business.jpg";
import { RxAvatar } from "react-icons/rx";

type buyerSignup = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type sellerSignup = {
  businessName: string;
  businessEmail: string;
  password: string;
  country: string;
  buyerOnly: boolean;
};

const buyer: string = "buyer";
const seller: string = "seller";

const Signup = () => {
  const [buyerInput, setBuyerInput] = useState<buyerSignup>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [sellerInput, setSellerInput] = useState<sellerSignup>({
    businessName: "",
    businessEmail: "",
    password: "",
    country: "",
    buyerOnly: false,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [accountType, setAccountType] = useState<string>(buyer);
  const [visible, setVisible] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<File | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (accountType === buyer) {
      setBuyerInput({ ...buyerInput, [e.target.name]: e.target.value });
    } else {
      setSellerInput({ ...sellerInput, [e.target.name]: e.target.value });
    }
  };

  const onCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setSellerInput({ ...sellerInput, buyerOnly: e.target.checked });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    file && setAvatar(file);
  };

  const handleFileClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      fileInputRef.current?.click();
    }
  };

  return (
    <div className="relative min-h-screen">
      <header className="w-full pt-5 pr-5 pb-5 pl-8 flex justify-between">
        <Link to={routes.home}>
          <img src={pngEbay} alt="Ebay" width={"100px"} height={"auto"} />
        </Link>

        <div className="text-gray-500 max-sm:text-xs">
          Already have an account?{" "}
          <Link to={routes.login} className="text-black underline">
            Sign in
          </Link>
        </div>
      </header>

      <section className="min-h-screen bg-white flex justify-center px-24 gap-10 max-2xl:px-10">
        <div className="w-[695px] h-[calc(100vh-3rem*2.2)] rounded-2xl max-xl:hidden">
          <img
            src={accountType === buyer ? jpgBuyer : jpgSeller}
            alt="Buyer"
            className="object-cover w-full h-full rounded-2xl"
          />
        </div>

        <div className="flex flex-col gap-5 pt-10 w-[900px] h-[calc(100vh-3rem*2.2)] px-56 max-2xl:w-[700px] max-2xl:px-32 max-sm:px-2">
          {/* Avatar */}
          <div className="flex justify-between w-full">
            <h1 className="font-bold text-2xl">Create an account</h1>
            <div className="flex">
              <label
                htmlFor="avatar"
                className="text-sm font-medium text-gray-700"
              >
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                  id="avatar"
                  accept=".jpg,.jpeg,.png"
                  ref={fileInputRef}
                />
              </label>

              <div
                className="cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => handleKeyDown(e)}
                onClick={(e) => handleFileClick(e)}
                title="Click to upload an avatar"
              >
                {avatar ? (
                  <img
                    src={URL.createObjectURL(avatar)}
                    alt="Avatar"
                    className="w-8 h-8 object-cover rounded-full"
                  />
                ) : (
                  <RxAvatar className="w-8 h-8" />
                )}
              </div>
            </div>
          </div>

          {/* Account Type Switch */}
          <div className="flex justify-between gap-2 rounded-[2rem] border-solid border-[1px] border-black p-[0.1rem]">
            <button
              className={`${
                accountType === buyer
                  ? " bg-black text-white"
                  : "bg-transparent"
              } flex-1 p-[0.40rem] rounded-[2rem]`}
              onClick={() => setAccountType(buyer)}
            >
              Personal
            </button>
            <button
              className={`${
                accountType === seller
                  ? " bg-black text-white"
                  : "bg-transparent"
              } flex-1 p-[0.40rem] rounded-[2rem]`}
              onClick={() => setAccountType(seller)}
            >
              Business
            </button>
          </div>

          <form className="w-full">
            {accountType === buyer ? (
              /* Common Account Form */
              <div className="flex flex-col gap-4">
                <BuyerForm
                  firstName={buyerInput.firstName}
                  lastName={buyerInput.lastName}
                  email={buyerInput.email}
                  onChange={onChange}
                />

                <PasswordInput
                  visible={visible}
                  setVisible={setVisible}
                  onChange={onChange}
                  password={buyerInput.password}
                />

                <div className="text-xs text-gray-600">
                  By selecting{" "}
                  <span className="font-bold">Create personal account</span>,
                  you agree to our{" "}
                  <Link to={"#"} className="underline">
                    User Agreement
                  </Link>{" "}
                  and acknowledge reading our{" "}
                  <Link to={"#"}> User Privacy Notice</Link>.
                </div>
              </div>
            ) : (
              /* Business Account Form */
              <div className="flex flex-col gap-4 w-full">
                <div className="text-sm">
                  Continue to register as a{" "}
                  <span className="font-bold my-4">business or nonprofit</span>,
                  or if you plan to sell a large number of goods.
                </div>

                <div className="flex flex-col gap-3">
                  <SellerForm
                    businessName={sellerInput.businessName}
                    businessEmail={sellerInput.businessEmail}
                    onChange={onChange}
                  />
                  <PasswordInput
                    visible={visible}
                    setVisible={setVisible}
                    onChange={onChange}
                    password={sellerInput.password}
                  />
                </div>

                <label
                  htmlFor="buyerOnly"
                  className="flex items-center gap-3 text-xs text-gray-600"
                >
                  <input
                    type="checkbox"
                    name="buyerOnly"
                    id="buyerOnly"
                    checked={sellerInput.buyerOnly}
                    className="w-4 h-4 text-black focus:black border-gray-600 rounded cursor-pointer"
                    onChange={onCheck}
                  />
                  <span>I am only interested in buying for ebay for now</span>
                </label>

                <div className="text-xs text-gray-600">
                  By selecting{" "}
                  <span className="font-bold">Create business account</span>,
                  you agree to our{" "}
                  <Link to={"#"} className="underline">
                    User Agreement
                  </Link>{" "}
                  and acknowledge reading our{" "}
                  <Link to={"#"}> User Privacy Notice</Link>.
                </div>
              </div>
            )}

            <button
              type="submit"
              className="font-bold text-white disabled:bg-gray-400 p-3 w-full rounded-[2rem] mt-5"
              disabled
            >
              Create {accountType === buyer ? "personal" : "business"} account{" "}
            </button>
          </form>

          {accountType === buyer && (
            <div className="w-full">
              <div className="flex gap-2 items-center justify-center mt-2">
                <hr className="w-[30%] border-none h-[1px] bg-gray-300" />
                <p className="text-xs px-2">or continue with</p>
                <hr className="w-[30%] border-none h-[1px] bg-gray-300" />
              </div>

              <div className="flex justify-between mt-5 gap-3 max-sm:flex-col max-sm:items-center">
                <button className="flex items-center w-36 rounded-[2rem] bg-[#4267B2] px-4 py-3 font-bold text-white">
                  <img src={fb} alt="Facebook" width="20px" height="20px" />
                  <span className="text-sm px-2 flex justify-center w-full mt-[0.2rem]">
                    Facebook
                  </span>
                </button>

                <button className="flex items-center w-36 rounded-[2rem] bg-transparent border-[1px] border-solid border-gray-700 px-4 py-3 font-bold">
                  <img src={google} alt="Google" width="20px" height="20px" />
                  <span className="text-sm px-2 flex justify-center w-full mt-[0.15rem]">
                    Google
                  </span>
                </button>

                <button className="flex items-center w-28 rounded-[2rem] bg-transparent border-[1px] border-solid border-gray-700 px-4 py-3 font-bold">
                  <img src={apple} alt="Apple" width="16px" height="16px" />
                  <span className="text-sm px-2 flex justify-center w-full mt-[0.4rem]">
                    Apple
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <footer className="absolute bottom-0 text-center text-xs text-gray-700 border-t-[1px] py-7 border-solid w-full">
        Copyright © 1995-2024 eBay Clone by Steven Audrey Daye |
        hello@stevendaye.com. All Rights Reserved.
      </footer>
    </div>
  );
};

const BuyerForm = ({
  firstName,
  lastName,
  email,
  onChange,
}: {
  firstName: string;
  lastName: string;
  email: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => (
  <>
    <div className="flex justify-between gap-4">
      <div className="flex flex-col w-full">
        <label
          htmlFor="firstName"
          className="block text-sm font-medium text-gray-700"
        >
          <input
            type="text"
            id="firstName"
            name="firstName"
            autoComplete="firstName"
            onChange={onChange}
            placeholder="First name"
            value={firstName}
            required
            className="border-solid border-[1px] border-gray-500 rounded-md px-4 py-3 w-full placeholder-black"
          />
        </label>
      </div>

      <div className="flex flex-col w-full">
        <label
          htmlFor="lastName"
          className="block text-sm font-medium text-gray-700"
        >
          <input
            type="text"
            id="lastName"
            name="lastName"
            autoComplete="lastName"
            onChange={onChange}
            placeholder="Last name"
            value={lastName}
            required
            className="border-solid border-[1px] border-gray-500 rounded-md px-4 py-3 w-full placeholder-black"
          />
        </label>
      </div>
    </div>

    <div className="flex flex-col w-full">
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          onChange={onChange}
          placeholder="Email or username"
          value={email}
          required
          className="border-solid border-[1px] border-gray-500 rounded-md px-4 py-3 w-full placeholder-black"
        />
      </label>
    </div>
  </>
);

const SellerForm = ({
  businessName,
  businessEmail,
  onChange,
}: {
  businessName: string;
  businessEmail: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}) => (
  <>
    <div className="flex flex-col w-full">
      <label
        htmlFor="businessName"
        className="block text-sm font-medium text-gray-700"
      >
        <input
          type="text"
          id="businessName"
          name="businessName"
          autoComplete="businessName"
          onChange={onChange}
          placeholder="Business name"
          value={businessName}
          required
          className="border-solid border-[1px] border-gray-500 rounded-md px-4 py-3 w-full placeholder-black"
        />
      </label>
    </div>

    <div className="flex flex-col w-full">
      <label
        htmlFor="businessEmail"
        className="block text-sm font-medium text-gray-700"
      >
        <input
          type="email"
          id="businessEmail"
          name="businessEmail"
          autoComplete="businessEmail"
          onChange={onChange}
          placeholder="Business email"
          value={businessEmail}
          required
          className="border-solid border-[1px] border-gray-500 rounded-md px-4 py-3 w-full placeholder-black"
        />
      </label>
    </div>

    {/* Temprary Country Selector */}
    <div className="flex flex-col w-full">
      <label className="" htmlFor="country">
        <select
          id="country"
          className="border-solid border-[1px] border-gray-500 rounded-md px-4 py-3 w-full placeholder-black"
          onChange={onChange}
        >
          <option value="">Where is your business registered?</option>
          <option key="bj" value="Benin">
            Benin Republic
          </option>
          <option key="bj" value="Nigeria">
            Nigeria
          </option>
          <option key="bj" value="Keny">
            Kenya
          </option>
          <option key="bj" value="Ghana">
            Ghana
          </option>
          <option key="bj" value="Rwanda">
            Rwanda
          </option>
        </select>
        <span className=" text-xs text-gray-600">
          If your business isn't registered, select your country of resisdence
        </span>
      </label>
    </div>
  </>
);

const PasswordInput = ({
  visible,
  setVisible,
  onChange,
  password,
}: {
  visible: boolean;
  setVisible: (value: boolean) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  password: string;
}) => (
  <div className="flex flex-col w-full">
    <label
      htmlFor="password"
      className="block text-sm font-medium text-gray-700 relative"
    >
      <input
        type={visible ? "text" : "password"}
        id="password"
        name="password"
        autoComplete="current-password"
        onChange={onChange}
        placeholder="Password"
        value={password}
        required
        className="border-solid border-[1px] border-gray-500 rounded-md px-4 py-3 w-full placeholder-black"
      />
      {!visible ? (
        <AiOutlineEye
          size={22}
          className="absolute right-2 top-3 cursor-pointer"
          onClick={() => setVisible(true)}
        />
      ) : (
        <AiOutlineEyeInvisible
          size={22}
          className="absolute right-2 top-3 cursor-pointer"
          onClick={() => setVisible(false)}
        />
      )}
    </label>
  </div>
);

export default Signup;
