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

#### 카카오맵 API를 활용한 제로웨이스트 관련 맵

- 약 300개의 미리 저장된 제로웨이스트샵 DB를 맵에서 확인 가능
- 사용자가 따로 검색한 장소 정보를 DB에 추가, 삭제 기능
- 필터링한 지도 내 장소 즐겨찾기 추가 및 메모 기능
- 마이페이지에서 즐겨찾기 및 내가 등록한 장소 확인 기능

>필터링 된 지도 (DB에 있는 정보를 보영주는 지도) - 즐겨찾기 추가 및 메모 등록 가능
>통합검색 - 사용자가 장소 추가 가능 (DB에 지도 정보 추가)

<br>

### 5. 개발한 부분
- **`MVC pattern`을 적용하여 model, view, controller를 분리하여 설계**

- **ERD설계 **
- 3개의 외래키 사용
    - `**onDelete, onUpdate**` 를 `**cascade**`하게 사용자, 지도 데이터 관리
- zwMap 테이블과 2개의 테이블 `**JOIN`**
    - 마이페이지에서 즐겨찾기, 내가 등록한 장소를 불러올 때 해당 장소 정보를 불러옴
- 미리 저장된 지도 데이터는 map_email을 'admin'으로 설정
    - 사용자가 직접 추가한 정보는 `**sessionStroage**` 에 저장된 사용자 이메일 저장

- **사용자 관련 `RESTful API`구현**
    - 회원가입, 로그인, 정보 수정, 탈퇴 구현
    - RESTful API를 활용하여 사용자 정보를 주고받는 데이터 통신 구현, `**axios**` 사용
    - 회원가입과 비밀번호 수정 시 `**bcryptjs**` 패키지를 이용해 사용자 비밀번호 암호화하고 로그인 시 hash 처리
    
- **유저 정보를 `SessionStorage()`을 이용하여 저장**
    - 로그인 시, 세션에 사용자 정보 저장. 로그아웃 시 세션 정보 삭제
    - **`SessionStorage()`**에 사용자 정보가 있다면 **`isLogin`**값을 **`true`**로 설정하여 다른 라우터에 전달.
    - 이를 이용해 네비게이션 바가 로그인 상태와 로그아웃 상태에 따라 바뀔 수 있도록 설정
    
- **`AWS EC2`를 이용하여 프로젝트 배포**

</p>

