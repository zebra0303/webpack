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
 main: {
    import: ['./src/js/main.js', './src/css/main.scss'], 
    filename: './js/[name].bundle.js'
  }
```
