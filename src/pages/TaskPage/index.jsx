import RootLayout from "../../components/Layout";
import bgImg from "../../assets/bg_images/bg-3.png";
import Balance from "../../components/Balance/Balance";
import { useEffect, useState } from "react";
import Tab from "../../components/Task/Tab";
import Special from "../../components/Task/Special";
import Leagues from "../../components/Task/Leagues";
import RefTasks from "../../components/Task/RefTasks";
import { useTelegram } from "../../hooks/useTelegram";
import LayoutLoading from "../../components/LoadingComponent/LayoutLoading";
import Loading from "../../components/LoadingComponent/Loading";

const TaskPage = () => {
  const [special, setSpecial] = useState(false);
  const [league, setLeague] = useState(false);
  const [refTasks, setRefTasks] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState(0);
  const user = useTelegram();

  const getTasks_Specials = async () => {
    setLoading(true);
    try {
      const response = await fetch("fetch_get_all_tasks_specials", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      });
      const tasks = await response.json();
      setTasks(tasks);
      setLoading(false);
      return tasks;
    } catch (error) {
      setLoading(false);
      console.log("error2", error);
    }
  };

  useEffect(() => {
    setSpecial(true);
    getTasks_Specials();
    setBalance(user?.balance);
  }, []);

  const handleActiveTab = (val) => {
    if (val === "special") {
      setSpecial(true);
      setLeague(false);
      setRefTasks(false);
    }
    if (val === "leagues") {
      setSpecial(false);
      setLeague(true);
      setRefTasks(false);
    }
    if (val === "ref_tasks") {
      setSpecial(false);
      setLeague(false);
      setRefTasks(true);
    }
  };

  return (
    <>
      {user?.rootLoading ? (
        <LayoutLoading />
      ) : (
        <RootLayout
          bg_img={bgImg}
          // bg_radial={
          //   "radial-gradient(ellipse at 30% 40%, rgb(224, 224, 65) -7%, transparent 40%)"
          // }
        >
          {user?.loading ? (
            <Loading />
          ) : (
            <>
              <Balance cup={true} border={true} balance={balance} />
              <div className="border border-gray-500 p-1 rounded-lg w-full h-14 mt-5 grid grid-cols-3 gap-1">
                <Tab
                  className={special && "!bg-[#ef49c6cc]/60"}
                  onClick={() => handleActiveTab("special")}
                  title={"Special"}
                />
                <Tab
                  className={league && "!bg-[#ef49c6cc]/60"}
                  onClick={() => handleActiveTab("leagues")}
                  title={"Leagues"}
                  notComplete={true}
                />
                <Tab
                  className={refTasks && "!bg-[#ef49c6cc]/60"}
                  onClick={() => handleActiveTab("ref_tasks")}
                  title={"Ref Tasks"}
                />
              </div>
              <div className="container--task">
                {special && (
                  <Special specials={tasks.specials} loadingCards={loading} />
                )}
                {league && (
                  <Leagues balance={balance} setBalance={setBalance} />
                )}
                {refTasks && <RefTasks />}
              </div>
            </>
          )}
        </RootLayout>
      )}
    </>
  );
};

export default TaskPage;
