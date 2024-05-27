import { data } from "../../config/SiteLink";
import { useTelegram } from "../../hooks/useTelegram";
import LinkContainer from "../Footer/LinkContainer";
import LayoutLoading from "../LoadingComponent/LayoutLoading";
import "./index.css";

const RootLayout = ({ children, bg_img, bg_radial }) => {
  const user = useTelegram();
  return (
    <>
      {/* {user?.loading ? (
        <LayoutLoading />
      ) : ( */}
        <div className="layout" style={{ backgroundImage: `url(${bg_img})` }}>
          {/* <div className="radial" style={{ backgroundImage: bg_radial }} /> */}
          <div className="layout_container">
            <main>{children}</main>
            <footer className={"footer sm:gap-4 xs:gap-3"}>
              {data.map((item, index) => (
                <LinkContainer
                  link_index={index}
                  src={item.src}
                  name={item.name}
                  href={item.link}
                />
              ))}
            </footer>
          </div>
        </div>
      {/* )} */}
    </>
  );
};

export default RootLayout;
