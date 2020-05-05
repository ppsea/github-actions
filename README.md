# github-actions

## github action이 제공하는 cron 스케쥴러 기능을 사용해서 slack, mail등을 통해 몇가지 서비스를 제공합니다

### 🐦 주의사항

github action은 (프리티어 기준, 최대 6시간의 실행시간, 최대 72시간 워크플로 실행, 최대 24시간 작업 대기시간, 최대 1000개의 API요청, 최대 20개의 동시작업, 최대 5개의 mac os 동시작업 제한이 있습니다.)

### 🐤 포함 기능

    1. slack으로 매일 아침 날씨 알림 [O]
    2. slack으로 토요일 저녁에 로또 구매 알림 [x]
    3. 메일 기능 추가 [x]

### 🐔process.env 설정

    github내의 settings -> secret에 추가

## 🐧 참고

> [깃허브 액션 공식문서](https://help.github.com/en/actions/getting-started-with-github-actions/about-github-actions#about-github-actions)

> [안희정님 블로그](https://ahnheejong.name/articles/receive-new-room-notification-mails-using-github-action/)

> [jwn님 블로그](https://velog.io/@jwn4492/Github-Action%EC%9C%BC%EB%A1%9C-%EB%A7%A4%EC%9D%BC%EB%A7%88%EB%8B%A4-%EB%B8%8C%EB%A6%AC%ED%95%91-%EB%B0%9B%EA%B8%B0)
