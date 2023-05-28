export function normalizeChartData(data: IAllDiseaseResponse) {
  const labels = Object.keys(data.cases);
  const casesValues = Object.values(data.cases);
  const deathsValues = Object.values(data.deaths);
  const recoveredValues = Object.values(data.recovered);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Cases",
        data: casesValues,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Deaths",
        data: deathsValues,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Recovered",
        data: recoveredValues,
        borderColor: "#d2691e",
        backgroundColor: "#d2691e50",
      },
    ],
  };

  return {
    chartData,
  };
}
