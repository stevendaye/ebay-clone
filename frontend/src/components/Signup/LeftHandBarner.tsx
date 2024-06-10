import jpgBuyer from "../../assets/images/buyer.jpg";
import jpgSeller from "../../assets/images/business.jpg";

type AccountProps = {
  accountType: string;
  buyer: string;
};

export const LeftHandBarner = ({ accountType, buyer }: AccountProps) => {
  return (
    <div className="w-[695px] h-[calc(100vh-3rem*2.2)] rounded-2xl max-xl:hidden">
      <img
        src={accountType === buyer ? jpgBuyer : jpgSeller}
        alt="Buyer"
        className="object-cover w-full h-full rounded-2xl"
      />
    </div>
  );
};
