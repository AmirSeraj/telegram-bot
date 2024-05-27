import bgImg from "../../assets/bg_images/bg-6.png";
import Balance from "../../components/Balance/Balance";
import CustomBtn from "../../components/CustomBtn";
import RootLayout from "../../components/Layout";
import LayoutLoading from "../../components/LoadingComponent/LayoutLoading";
import { useTelegram } from "../../hooks/useTelegram";

const RefPage = () => {
  const referrals = 0;
  const user = useTelegram();
  return (
    <>
      {user?.rootLoading ? (
        <LayoutLoading />
      ) : (
        <RootLayout
          bg_img={bgImg}
          // bg_radial={
          //   "radial-gradient(ellipse at 20% 70%, rgb(224, 224, 65) -30%, transparent 40%)"
          // }
        >
          <Balance
            referral_status={true}
            referral={referrals}
            referral_score={referrals}
            border={true}
          />

          <div className="flex justify-between items-center mt-5">
            <p className="font-bold text-white capitalize text-2xl">
              my referrals:
            </p>
            <CustomBtn
              title={"Invite a friend"}
              className={"bg-gradient-to-b from-orange-300 to-orange-500"}
            />
          </div>

          {referrals === 0 && (
            <div className="flex justify-center mt-12 sm:text-sm text-xs">
              You don't have referrals 😭
            </div>
          )}
        </RootLayout>
      )}
    </>
  );
};

export default RefPage;
