export function normalizeMapData(data: IDiseaseCountryResponse[]) {
  const filteredData = data.filter(
    (elem) => elem.countryInfo.iso3 ?? elem.countryInfo.iso2
  );
  return filteredData.map((elem) => {
    return {
      id: elem.countryInfo.iso3 ?? elem.countryInfo.iso2,
      lat: elem.countryInfo.lat,
      long: elem.countryInfo.long,
      country: elem.country,
      deaths: elem.deaths,
      active: elem.active,
      recovered: elem.recovered,
    };
  });
}
