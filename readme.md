## \<View>
> - \<div>과 같이 `컨테이너`이다. <br>
> - 기본적으로 flex container이며 web과 다르게 기본 방향이 column이다. <br>
> - `모체` style에 `{flex:1}`을 할당하고 `자식`들의 `{flex: x}`를 할당함으로서 `비율`로 `레이아웃 스타일`링이 가능하다.
<br>

## \<Text> 
> 리액트 네이티브에서 `모든 텍스트`는 \<Text>로 감싸져야 한다. (HTML 태그 사용 불가)

## \<StyleSheet>
> `css 객체`를 만든다. (StyleSheet가 없어도 css객체를 만들 수 있으나 자동 완성이 되지 않는다.)
```
ex)

const styles= StyleSheet.create({...})
```