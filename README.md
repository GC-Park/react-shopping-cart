<p align="middle" >
  <img src="https://techcourse-storage.s3.ap-northeast-2.amazonaws.com/3e6c6f30b11d4b098b5a3e81be19ce3a" width="400">
</p>
<h2 align="middle">Level2 - 장바구니</h2>
<p align="middle">React & Redux 데스크탑 장바구니 애플리케이션</p>
</p>

![GIFMaker_me](https://github.com/woowacourse/prolog/assets/72205402/eaf2e688-82dd-4040-a560-0e8a2ca87cc5)

## 🔗 링크
[홈페이지 링크](https://gc-park.github.io/react-shopping-cart/)<br>
[스토리북 링크](https://gc-park.github.io/react-shopping-cart/storybook)

## 🚀 Getting Started

> 다수의 컴포넌트를 페이지로 구성하고 복잡해진 상태를 관리합니다.

✔️ `데스크탑 타겟`의 웹 앱을 구현하며 구매로 이어지는 것에 끊김이 없고 `재방문을 고려한 UI/UX`에 대해 고민해봅니다.  
✔️ 상태 관리를 위해 `Flux Architecture` 기반의 `Redux`를 활용합니다.  
✔️ `Router`를 활용해 여러 페이지 전환을 고려합니다.  
✔️ MSW를 이용하여 API를 Mocking하고 리액트에서 비동기 상황에 대해 고민해 봅니다.  
✔️ Router를 활용해 여러 페이지 전환을 고려합니다.  
✔️ [배민상회](https://mart.baemin.com) 서비스 참고

## 📝필수 요구 사항
### step1
### 1. 상품 목록 페이지
- 상품 목록 페이지에 필요한 UI 마크업
- header의 숫자 표시를 통해 장바구니에 담긴 상품 종류의 갯수 표시
### 2. 전역 상태 관리
- recoil을 사용하여 전역 상태 관리
### 3. mock 데이터 활용
- Mock 데이터를 활용하여 상품 데이터를 처리한다. 협업 미션을 고려하여 장바구니 API 예상 명세 참고
### 4. 테스트 도구 선정
- 적합한 테스트 도구를 선택하여 사용하고, 중요한 테스트 케이스를 정의하여 테스트 진행
### step2
### 1. 장바구니 페이지
- 장바구니 페이지 마크업을 완성하고, 상품 목록 페이지와 함께 모바일 환경 대응
### 2. MSW를 활용한 API Mocking
- MSW를 활용하여 실제 서버와 연동될 수 있는 API Mocking을 구현
- 단순한 Endpoint 변경으로 실제 API 사용이 가능하도록 작업
### 3. 테스트
- 장바구니 페이지에서 다양한 사용자 인터렉션에 대한 테스트 케이스를 고민하고, 선택한 테스트 도구를 이용하여 검증
### 4. 사용자 경험
- 새로고침 해도, 장바구니에 담은 상품 유지

## ✅ 프로그래밍 요구사항

### Readability
- API 요청을 처리하는 공통 함수나 커스텀 훅을 작성하여 재사용 가능하게 만든다.
- 페이지간 공통 스타일이 있는 경우 재사용한다.
### Reusability
- 서버와의 통신을 담당하는 코드와 UI를 렌더링 하는 코드를 분리하여 관심사를 분리한다.
- 에러 처리 로직을 명확하게 작성하여 코드의 가독성을 높인다.
### Performance
- 불필요한 상태 관리를 최소화하고, 상태 업데이트를 최적화한다.
- 컴포넌트의 리렌더링을 최소화하기 위해 memoization을 적용한다.

## 🤔 고려할 점
- 사용자 경험을 고려해서 심미적인 부분에 집중하기 보다는지금 상태에서 더 '유용'할 수 있는 경험에 집중하기
- 주어진 디자인 시안을 크게 벗어나게 하지 말 것
- 무한 스크롤, 페이지네이션 구현은 고려하지 말 것
- 모든 상태를 recoil로 다루는게 아니라 전역적으로 다루면 유용한 상태, 여러 컴포넌트에서 구독하는 상태의 경우에 recoil로 관리할 것

### 실행방법

```bash
yarn install
yarn start
```

### 테스트 실행방법

```bash
yarn test
```
