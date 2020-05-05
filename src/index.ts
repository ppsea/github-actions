import * as core from "@actions/core";
import * as dateFns from "date-fns";
import dateData from "./data/date.json";
import parser from "./parser";
import slack from "./slack";

const today = new Date();
//토, 일 확인
const yoIlOk =
  dateFns.format(today, "e") !== "7" || dateFns.format(today, "e") !== "1";
//공휴일 확인
const specialDayFormat = dateFns.format(today, "M-d");
const specialDayOk =
  (<any>dateData)[specialDayFormat] === undefined ? true : false;

//앱실행
// yoIlOk && specialDayOk
//   ? (async () => {
//       const parsed = await parser();
//       await slack({
//         weather: parsed.weather,
//         date: parsed.date,
//       });
//     })().catch((e) => {
//       console.error(e);
//       core.setFailed(e);
//     })
//   : "";

(async () => {
  const parsed = await parser();
  await slack({
    weather: parsed.weather,
    date: parsed.date,
  });
})().catch((e) => {
  console.error(e);
  core.setFailed(e);
});
