import bgImg from "../../assets/bg_images/bg-6.png";
import Balance from "../../components/Balance";
import RootLayout from "../../components/Layout";

const BoostPage = () => {
  return (
    <RootLayout
      bg_img={bgImg}
      // bg_radial={
      //   "radial-gradient(ellipse at 30% 40%, rgb(224, 224, 65) -27%, transparent 40%)"
      // }
    >
      <Balance
        balance={Number(14589).toLocaleString()}
        border={true}
        description={"Your Share balance"}
      />
    </RootLayout>
  );
};

export default BoostPage;
