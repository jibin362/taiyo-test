import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useQuery } from "@tanstack/react-query";
import { fetchAllDisease } from "../../apis/fetchAllDisease";
import { normalizeChartData } from "../../normalizers/normalizeChartData";
import Loader from "../Loader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "COVID-19 History",
    },
  },
};

function LineChart() {
  const { data, error, isError, isLoading } = useQuery<
    IAllDiseaseResponse,
    Error
  >({
    queryKey: ["todos"],
    queryFn: fetchAllDisease,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError && error) {
    return <h2>{error.message || "Oops something went wrong!"}</h2>;
  }

  const { chartData } = normalizeChartData(data);

  return <Line options={options} data={chartData} />;
}

export default LineChart;
