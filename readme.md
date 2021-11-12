## \<View>
> - \<div>과 같이 `컨테이너`이다. <br>
> - 기본적으로 flex container이며 web과 다르게 기본 방향이 column이다. <br>
> - `모체` style에 `{flex:1}`을 할당하고 `자식`들의 `{flex: x}`를 할당함으로서 `비율`로 `레이아웃 스타일`링이 가능하다.

## \<Text> 
> 리액트 네이티브에서 `모든 텍스트`는 \<Text>로 감싸져야 한다. (HTML 태그 사용 불가)

## \<StyleSheet>
> `css 객체`를 만든다. (StyleSheet가 없어도 css객체를 만들 수 있으나 자동 완성이 되지 않는다.)
```
ex)

const styles= StyleSheet.create({...})
```

## \<ScrollView>
> - 스크롤이 가능한 \<View>
> - \<ScrollView>는 style이 아닌 `contentContainerStyle`을 사용해야 한다
<img src="https://user-images.githubusercontent.com/65326586/140964157-1ccdde8a-e6d3-43a0-8a47-5914a6a2daa6.png" />

***optional***
> `horizontal` &rarr;<br>스크롤 방향을 수평으로 바꿔준다 <br>

> `pagingEnabled` &rarr;<br>스크롤을 페이지 단위로 끊을 수 있다 <br>

> `showHorizontalScrollIndicator` &rarr;<br>페이지 수평 스크롤바 표기를 정할 수 있다 <br>

> `indicatorStyle` &rarr;<br>(only IOS) 스크롤바의 스타일을 변경할 수 있다

## Dimension
> 사용자의 디바이스 크기를 알 수 있는 API

## ActivityIndicator
> 로딩중을 표시할 수 있다
