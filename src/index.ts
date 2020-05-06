import * as core from "@actions/core";
import * as dateFns from "date-fns";
import dateData from "./data/date.json";
import parser from "./parser";
import slack from "./slack";

const todayUTC = Date.parse(new Date().toString()); //UTC기준
const todayKST = new Date(todayUTC - 540 * 60 * 1000); //KST로 수정(-9시간)
//토, 일 확인
const yoIlOk =
  dateFns.format(todayKST, "e") !== "7" ||
  dateFns.format(todayKST, "e") !== "1";
//공휴일 확인
const specialDayFormat = dateFns.format(todayKST, "M-d");
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
