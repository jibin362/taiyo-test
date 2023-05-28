import LineChart from "../components/charts/LineChart";
import GobalMap from "../components/maps/GobalMap";

function ChartMap() {
  return (
    <div>
      <div className="w-full h-[400px]">
        <LineChart />
      </div>
      <div className="w-100 h-[100px]">
        <GobalMap />
      </div>
    </div>
  );
}

export default ChartMap;
