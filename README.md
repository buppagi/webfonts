# 웹폰트
무료 폰트를 웹폰트로 사용하기

##나눔글꼴
네이버에서 만들어 무료로 배포한 폰트를 웹폰트로 만들었습니다.
개인적으로 사용 가능하며, 라이센스는 각
[나눔글꼴이야기 PDF 보기][nanum story]

**나눔바른고딕



##우아한 형제들

**배달의 민족 한나체
한나체 [라이센스 보기][license1]

**배달의 민족 주아체
주아체 [라이센스 보기][license2]

웹사이트 HTML문서의 ``<head>``안에 아래 코드를 넣으면 된다.
```
<link href='https://cdn.rawgit.com/openhiun/hangul/14c0f6faa2941116bb53001d6a7dcd5e82300c3/webfonts.css' rel='stylesheet' type='text/css'>
```

##적용하기
폰트를 적용하려면 폰트 이름을 적용하길 원하는 CSS에 다음과 같이 추가하면 된다.
```
font-family: 'NanumBarunGothic', '나눔바른고딕', sans-serif;
```
html 문서에 적용하기
```
<style type="text/css">
.text {font-family: 'NanumBarunGothic', '나눔바른고딕', sans-serif;}
.jua {font-family:'BM JUA','배달의민족 한나',sans-serif;}
.hana{font-family:'BM HANNA','배달의민족 주아', sans-serif; }
</style>
```

[nanum story]: http://static.campaign.naver.com/0/hangeul/2014/doc/nanum_story.pdf
[license1]: http://www.woowahan.com/license.html?keepThis=true&TB_iframe=true&height=620&width=659&modal=true
[license2]: http://www.woowahan.com/license-jua.html?keepThis=true&TB_iframe=true&height=620&width=659&modal=true