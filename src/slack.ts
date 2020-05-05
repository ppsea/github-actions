import axios from "axios";
interface IDate {
  date: string;
  note: string;
}
interface ISlack {
  weather: {
    weather: string;
    temp: string;
  };
  date: IDate;
}

const url = process.env.SLACK_API_KEY || "";

export default async ({ weather, date }: ISlack) => {
  let message: any = {
    attachments: [],
  };
  message.attachments.push({
    color: "#928BFF",
    pretext: `📨 오늘의 편지가 왔어요!
    ${date.note}
    `,
    fields: [
      {
        title: "📅 날짜",
        value: `${date.date}`,
        short: true,
      },
      {
        title: "🏞️ 날씨 / 서울",
        value: weather.weather,
        short: true,
      },
      {
        title: "🌡 현재온도 / 서울",
        value: weather.temp,
        short: true,
      },
    ],
  });

  // message.attachments.push({
  //   // text: '<http://www.foo.com|This message *is* a link>',
  //   fields: [
  //     {
  //       type: "mrkdwn",
  //       title: "📰 뉴스 / 구글",
  //       value: news,
  //     },
  //   ],
  // });

  await axios.post(url, message);
};
