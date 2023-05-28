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

/**
 * Register chart js library
 */

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

/**
 * chart configs for line chart
 */
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
  /**
   * Fetch data from endpoint using tanstack query
   */
  const { data, error, isError, isLoading } = useQuery<
    IAllDiseaseResponse,
    Error
  >({
    queryKey: ["all-diseases"],
    queryFn: fetchAllDisease,
  });

  /**
   * Loading component while data is being fetched from servers
   */
  if (isLoading) {
    return <Loader />;
  }

  /**
   * Error component when API fails or network is down
   */
  if (isError && error) {
    return <h2>{error.message || "Oops something went wrong!"}</h2>;
  }

  /**
   * Normalizes api response data to be used for line chart
   */
  const { chartData } = normalizeChartData(data);

  return <Line options={options} data={chartData} />;
}

export default LineChart;
