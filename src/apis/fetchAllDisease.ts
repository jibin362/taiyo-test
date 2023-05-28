export const fetchAllDisease = async (): Promise<IAllDiseaseResponse> => {
  const response = await fetch(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
