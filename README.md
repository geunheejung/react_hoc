# React HOC Study

HOC를 사용하여
1. window의 scroll 이벤트를 걸어 그 값을 ownProps로 넘겨주는 withWindowScroll HOC
2. window의 mousemove 이벤트를 걸어 그 값을 ownProps로 넘겨주는 withMouserPointer
3. react-redux의 connect 처럼 Wrapper컴포넌트에 주입시키려하는 값을 먼저 받은 이후 반환하는 HOC에서는 Component만 받는 형식으로 분리 및 redux의 compose 함수 적용