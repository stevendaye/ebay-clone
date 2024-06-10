import { useForm } from "react-hook-form";
import { useState } from "react";
import { Footer, Header } from "../components/Auth";
import { LeftHandBarner } from "../components/Signup/LeftHandBarner";
import { Avatar } from "../components/Signup/Avatar";
import { AccountSwitch } from "../components/Signup/AccountSwitch";
import { OAuthSignup } from "../components/Signup/OAuthSignup";
import { Signup } from "../components/Signup/Signup";

export type SignupFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: PasswordFormData["password"];
  businessName: string;
  businessEmail: string;
  country: string;
  avatar: File | null;
  buyerOnly: boolean;
};

export type PasswordToggleProps = {
  visible: boolean;
  setVisible: (val: boolean) => void;
};

export type PasswordFormData = {
  password: string;
};

const buyer: string = "buyer";
const seller: string = "seller";

const SignupPage = () => {
  const formMethods = useForm<SignupFormData>();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = formMethods;

  const [accountType, setAccountType] = useState<string>(buyer);
  const [avatar, setAvatar] = useState<File | null>(null);

  return (
    <div className="relative min-h-screen">
      <Header />

      <section className="min-h-screen bg-white flex justify-center px-24 gap-10 max-2xl:px-10">
        <LeftHandBarner accountType={accountType} buyer={buyer} />

        <div
          className="flex flex-col gap-5 pt-10 w-[900px] h-[calc(100vh-3rem*2.2)]
          px-56 max-2xl:w-[700px] max-2xl:px-32 max-sm:px-2"
        >
          <Avatar
            register={register}
            errors={errors}
            setValue={setValue}
            avatar={avatar}
            setAvatar={setAvatar}
          />

          <AccountSwitch
            accountType={accountType}
            setAccountType={setAccountType}
            buyer={buyer}
            seller={seller}
          />

          <Signup
            accountType={accountType}
            avatar={avatar}
            buyer={buyer}
            formMethods={formMethods}
            handleSubmit={handleSubmit}
          />

          <OAuthSignup accountType={accountType} buyer={buyer} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SignupPage;
