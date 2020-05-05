import * as date from "./date";
import * as weather from "./weather";

const parser = async () => {
  const weatherContents = await weather.fetchData();
  const dateContents = date.parser();
  return {
    weather: weatherContents,
    date: dateContents,
  };
};
export default parser;
