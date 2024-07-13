import React from "react";
import { Header } from "../layouts";
import styles from "../styles";

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="w-full pt-1 mb-14">
        <div className={`${styles.section} flex flex-col`}>
          <h1>404</h1>
          <p>Page Not Found</p>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
