import Chart from "../../components/chart/Chart";
import "./Home.css";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo";
import WidgetSm from "../../components/widgetSm/widgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
  
export default function Home() {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  )

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("users/stats");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        )
      } catch {}
    }
    getStats()
  }, [MONTHS])

  return (
    <div className="home">
      
      <FeaturedInfo /> 
       <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      /> 
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}