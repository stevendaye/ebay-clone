type AccountSwitchProps = {
  accountType: string;
  setAccountType: (val: string) => void;
  buyer: string;
  seller: string;
};

export const AccountSwitch = ({
  accountType,
  setAccountType,
  buyer,
  seller,
}: AccountSwitchProps) => {
  return (
    <div
      className="flex justify-between gap-2 rounded-[2rem] border-solid border-[1px]
          border-black p-[0.1rem]"
    >
      <button
        className={`${
          accountType === buyer ? " bg-black text-white" : "bg-transparent"
        } flex-1 p-[0.40rem] rounded-[2rem]`}
        onClick={() => setAccountType(buyer)}
      >
        Personal
      </button>
      <button
        className={`${
          accountType === seller ? " bg-black text-white" : "bg-transparent"
        } flex-1 p-[0.40rem] rounded-[2rem]`}
        onClick={() => setAccountType(seller)}
      >
        Business
      </button>
    </div>
  );
};
