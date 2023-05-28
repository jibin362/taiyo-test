interface IContact {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
}

type ReportData = Record<string, number>;

interface IAllDiseaseResponse {
  cases: ReportData;
  deaths: ReportData;
  recovered: ReportData;
}

interface ICountryInfo {
  _id: number;
  iso2: string;
  iso3: string;
  lat: number;
  long: number;
}

interface IDiseaseCountryResponse {
  active: number;
  activePerOneMillion: number;
  cases: number;
  casesPerOneMillion: number;
  continent: string;
  country: string;
  critical: number;
  criticalPerOneMillion: number;
  deaths: number;
  deathsPerOneMillion: number;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  population: number;
  recovered: number;
  recoveredPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  todayCases: number;
  todayDeaths: number;
  todayRecovered: number;
  updated: number;
  countryInfo: ICountryInfo;
}
