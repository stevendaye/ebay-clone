import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import * as api from "../utils/api";
import { Header } from "../components/Auth";

const ActivationPage = () => {
  const { token } = useParams();
  const [error, setError] = useState<boolean>(false);

  const mutation = useMutation(api.activateAccount, {
    onSuccess(data) {
      console.log(data);
    },
    onError(err) {
      setError(true);
      console.log(err);
    },
  });

  useEffect(() => {
    if (token) {
      mutation.mutate(token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className=" relative min-h-screen">
      <Header />

      <div className="w-full h-[100vh] flex flex-col justify-center items-center text-gray-800 text-sm font-bold">
        {error ? (
          <span className="block">Your Token has expired!</span>
        ) : (
          <span className="block">Your account was activated successfully</span>
        )}
      </div>
    </div>
  );
};

export default ActivationPage;
