# webpack

## 설치
```
yarn install
```

## 실행(watch mode)
```
yarn dev or yarn prod
```

## 프로덕션용 빌드
```
yarn build
```

## css나 js추가
| 페이지 별로 webpack.entry.js에 추가
```
  // common 파일들
  'common': ['./src/js/common.js', './src/css/common.scss'],
  // 배송지 리스트 페이지
  'myp/destination': ['./src/js/myp/destination.js', './src/css/myp/destination.scss'],
```
