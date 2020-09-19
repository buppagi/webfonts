# 웹폰트(Webfont)
무료 폰트를 웹폰트로 사용하기

> 비상업용 목적이며, 상업용으로 사용하실 때는 각 라이센스를 확인 후 사용하시길 바랍니다.
> 각 폰트는 각 회사의 라이센스에 따라 저작권이 있으니 참고부탁드립니다.

## 나눔글꼴 
네이버에서 만들어 무료로 배포한 나눔글꼴을 웹폰트로 만들었습니다.
[나눔글꼴이야기 PDF 보기](http://static.campaign.naver.com/0/hangeul/2014/doc/nanum_story.pdf)

### 나눔바른고딕
HTML 문서에 적용:
```html
<link href="https://raw.githubusercontent.com/buppagi/webfonts/master/css/NanumBarunGothic.min.css" rel="stylesheet" type="text/css" />
```
CSS:
```css
.text {font-family: 'NanumBarunGothic', '나눔바른고딕', sans-serif}
```

### 나눔스퀘어라운드
HTML 적용
```html
<link href="https://raw.githubusercontent.com/buppagi/webfonts/master/css/NanumSquareRound.min.css" rel="stylesheet" type="text/css" />
```
CSS:
```css
.text {font-family: 'NanumSquareRound', Arial, sans-serif}
```

## 우아한 형제들
주아체, 한나체, 도현체, 연성체, 키랑해랑체는 구글 웹폰트가 있어서 공유합니다.

HTML `<head>`
```html
<!-- 한나 -->
<link href="https://fonts.googleapis.com/earlyaccess/hanna.css" rel="stylesheet" type="text/css" />
<!-- 주아 -->
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">
<!-- 도현 -->
<link href="https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap" rel="stylesheet">
<!-- 연성체 -->
<link href="https://fonts.googleapis.com/css2?family=Yeon+Sung&display=swap" rel="stylesheet">
<!-- 키랑 해랑체-->
<link href="https://fonts.googleapis.com/css2?family=Kirang+Haerang&display=swap" rel="stylesheet">
```
CSS:
```css
.text1 { font-family:'Jua', sans-serif; } /* 주아체 */
.text2 { font-family:'Hanna', sans-serif; } /* 한나체 */
.text3 {font-family: 'Do Hyeon', sans-serif;} /* 도현체 */
.text4 {font-family: 'Yeon Sung', cursive;} /* 연성체 */
.text5 {font-family: 'Kirang Haerang', cursive;} /* 키랑 해랑체 */
```

### 배민 한나체 Pro
HTML:
```html
<link href="https://raw.githubusercontent.com/buppagi/webfonts/master/css/BMHANNAPro.min.css" rel="stylesheet" type="text/css" />
```
### 배민 한나체 Air
HTML:
```html
<link href="https://raw.githubusercontent.com/buppagi/webfonts/master/css/BMHANNAAir.min.css" rel="stylesheet" type="text/css" />
```

## 웹폰트 모두 사용하기
소개한 웹폰트를 모두 사용하시려면 **styles.css**를 사용하시면 됩니다.

HTML:
```html
<link href="https://raw.githubusercontent.com/buppagi/webfonts/master/css/styles.min.css" rel="stylesheet" type="text/css" />
```

**@import 사용**
CSS파일 및 ``<head>``안의 스타일 시트에 아래 코드를 넣으면 됩니다.
```css
@import url('https://raw.githubusercontent.com/buppagi/webfonts/master/css/style.min.css');

/* 폰트를 적용하려면 폰트 이름을 적용하길 원하는 CSS에 다음과 같이 추가하면 됩니다. */
.font{font-family: 'NanumBarunGothic', '나눔바른고딕', sans-serif;}
```


* 개인적으로 사용함을 위해 만든만큼 업데이트가 느릴 수 있고, 적용이 안될 수 있습니다.* 


* 적용이 안될 시에는 피드백 부탁드립니다.*
## 피드백
[Issues](https://github.com/buppagi/webfonts/issues)로 해주시면 됩니다.

## 라이센스
- 나눔폰트 [라이센스 보기](https://help.naver.com/support/contents/contents.help?serviceNo=1074&categoryNo=3497)