 #  Zerowave ?

- ZEROWAVE는 제로웨이스트 관련 지도 웹사이트입니다.<br />
- 지도를 기반으로 제로웨이스트샵과 다회용기 사용(용기내 챌린지)이 가능한 장소 정보를 제공합니다.<br />
- 사용자는 자신이 알고 있는 장소를 제로웨이스트 맵에 추가할 수 있습니다.
- 지도의 장소를 즐겨찾기 목록에 저장할 수 있고 관련 메모도 저장이 가능하며 이는 마이페이지에서 확인이 가능합니다.<br />

 >## 배포 링크
><a href="http://52.79.93.121:8000/zerowave">http://52.79.93.121:8000/zerowave</a>
><p>아이디: root@naver.com 
><br>비밀번호: root123

<img width="1411" alt="zerowave1" src="https://user-images.githubusercontent.com/116782324/226173433-35e251fc-8730-4ca1-88fa-b926046b994f.png">
<img width="1425" alt="zerowave2" src="https://user-images.githubusercontent.com/116782324/226173390-b4533e67-59bc-41a1-a436-d2d92810a4c3.png">




## 1. 제작 기간 & 참여 인원
- 진행 기간 : 2022.12.15 ~ 2022.12.29 (2주) <br />
- 개발 인원: 프론트엔드 3명, 백엔드 2명 - 총 5명의 팀 프로젝트
- 맡은 역할: 백엔드 개발

<br>

## 2. 사용 기술

#### `Back-end`
  - NodeJS(Express)
  - Sequelize
#### `Front-end`
  - html
  - css
  - Javascript
  - JQuery
#### `Database`
  - MySQL
#### `DevOps`
  - AWS EC2

<br>

## 3. ERD 설계
<img src='https://ifh.cc/g/tNnCSd.png' border='0'>

## 4. 핵심 기능

4.1 카카오맵 API를 활용한 제로웨이스트 맵
- 약 300개의 미리 저장된 제로웨이스트샵 DB를 맵에서 확인 가능
- 사용자가 따로 검색한 장소 정보를 DB에 추가, 삭제 기능
- 지도 내 장소 즐겨찾기 추가 및 메모 기능
- 마이페이지에서 즐겨찾기 및 내가 등록한 장소 확인 기능

　

|기능| 설명|
|:---|:---|
|메인 및 지도 페이지|1. Session 을 통해 로그인 여부에 따른 상이한 페이지 구현 <br>2. KakaoMap API를 이용한 지도 관련 컴포넌트 구현 <br /> 3. mySQL을 이용하여 서버의 DB를 가져와 지도에 구현|
|회원가입/로그인/마이페이지|1. SessionStorage를 이용하여 회원정보 수정 시 사용자의 세션과 입력값을 서버로 전달해 사용자를 찾고 새로운 값으로 변경할 시 UserDB에 업데이트. <br>2. bcryptjs : 암호화 모듈을 통해 가입 시 서버에 실제 입력값이 아닌 암호화 된 비밀번호를 전달 <br /> 3. Axios & Sequelize : 사용자의 입력값을 서버로 전달하여 해당 사용자의 유무를 DB에서 조회한 후 결과값에 따라 UserDB에 새로운 값을 생성<br /> 

|API| KakaoMap API <br />|


</p>

