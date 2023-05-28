/**
 * Fetches country wise stats of covid-19 from disease.sh
 */

export const fetchAllDiseaseCountry = async (): Promise<
  IDiseaseCountryResponse[]
> => {
  const response = await fetch("https://disease.sh/v3/covid-19/countries");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
