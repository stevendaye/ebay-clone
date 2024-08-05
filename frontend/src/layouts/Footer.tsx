import { Link } from "react-router-dom";
import styles from "../styles";
import { footerCopyright, footerLinks } from "../static/init";
import { sanitizeCategory } from "../utils";

const Footer = () => {
  return (
    <div className="border-solid border-t-[1px] border-gray-300 w-full bg-gray-100 pt-12">
      <div className={`${styles.section}`}>
        <div className="py-2 flex justify-between text-gray-500 text-xs">
          <section className="flex flex-col gap-2">
            {footerLinks.slice(0, 1).map((lnk) => (
              <div key={lnk.id}>
                <p className="font-bold text-black mb-2">{lnk.title}</p>

                <div className="flex flex-col gap-2">
                  {lnk.subs.map((subLnk) => (
                    <Link
                      key={subLnk.id}
                      to={sanitizeCategory(subLnk.subTitle)}
                      className="hover:underline"
                    >
                      {subLnk.subTitle}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className="flex flex-col gap-10">
            {footerLinks.slice(1, 2).map((lnk) => (
              <div key={lnk.id}>
                <p className="font-bold text-black mb-2">{lnk.title}</p>

                <div className="flex flex-col gap-2">
                  {lnk.subs.map((subLnk) => (
                    <Link
                      key={subLnk.id}
                      to={sanitizeCategory(subLnk.subTitle)}
                      className="hover:underline"
                    >
                      {subLnk.subTitle}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {footerLinks.slice(2, 3).map((lnk) => (
              <div key={lnk.id}>
                <p className="font-bold text-black mb-2">{lnk.title}</p>

                <div className="flex flex-col gap-2">
                  {lnk.subs.map((subLnk) => (
                    <Link
                      key={subLnk.id}
                      to={sanitizeCategory(subLnk.subTitle)}
                      className="hover:underline"
                    >
                      {subLnk.subTitle}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className="flex flex-col gap-2">
            {footerLinks.slice(3, 4).map((lnk) => (
              <div key={lnk.id}>
                <p className="font-bold text-black mb-2">{lnk.title}</p>

                <div className="flex flex-col gap-2">
                  {lnk.subs.map((subLnk) => (
                    <Link
                      key={subLnk.id}
                      to={sanitizeCategory(subLnk.subTitle)}
                      className="hover:underline"
                    >
                      {subLnk.subTitle}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className="flex flex-col gap-2">
            {footerLinks.slice(4, 5).map((lnk) => (
              <div key={lnk.id}>
                <p className="font-bold text-black mb-2">{lnk.title}</p>

                <div className="flex flex-col gap-2">
                  {lnk.subs.map((subLnk) => (
                    <Link
                      key={subLnk.id}
                      to={sanitizeCategory(subLnk.subTitle)}
                      className="hover:underline"
                    >
                      {subLnk.subTitle}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className="flex flex-col gap-10">
            {footerLinks.slice(5, 6).map((lnk) => (
              <div key={lnk.id}>
                <p className="font-bold text-black mb-2">{lnk.title}</p>

                <div className="flex flex-col gap-2">
                  {lnk.subs.map((subLnk) => (
                    <Link
                      key={subLnk.id}
                      to={sanitizeCategory(subLnk.subTitle)}
                      className="hover:underline"
                    >
                      {subLnk.subTitle}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {footerLinks.slice(6, 7).map((lnk) => (
              <div key={lnk.id}>
                <p className="font-bold text-black mb-2">{lnk.title}</p>

                <div className="flex flex-col gap-2">
                  {lnk.subs.map((subLnk) => (
                    <Link
                      key={subLnk.id}
                      to={sanitizeCategory(subLnk.subTitle)}
                      className="hover:underline"
                    >
                      {subLnk.subTitle}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>

        <div className="text-xs text-gray-500 flex gap-1 py-10">
          <p className="text-gray-600">
            Copyright © Fullstack MERN ebay Clone by Steven Audrey Daye. All
            Rights Reserved.{" "}
          </p>
          {footerCopyright.map((cpyr, idx) => (
            <Link
              to={`/${sanitizeCategory(cpyr)}`}
              key={idx}
              className="underline"
            >
              {cpyr}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
