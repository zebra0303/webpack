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
  // 메인페이지
  main: ['core-js/modules/es.array.iterator', './src/js/main.js', './src/css/main.scss'],
  ie: ['whatwg-fetch', './src/js/ie.js', './src/css/ie.scss'],
  // lib 폴더 속의 list 페이지
  'lib/list': ['core-js/modules/es.array.iterator', './src/js/lib/list.js', './src/css/lib/list.scss']
```
