// API 설정 - 서버리스 함수 사용
const API_URL = '/api/analyze';

// 3M 제품 리스트
const M3_PRODUCTS = [
  {
    "제품명": "POST-IT노트(656 노랑)",
    "SKU": "56169",
    "서브카테고리": "사무메모"
  },
  {
    "제품명": "3M플래그인덱스탭(686/24매)",
    "SKU": "1005979",
    "서브카테고리": "사무메모"
  },
  {
    "제품명": "Post-it노트(657노랑)",
    "SKU": "50056",
    "서브카테고리": "사무메모"
  },
  {
    "제품명": "3M플래그12매*4색(683)",
    "SKU": "56262",
    "서브카테고리": "사무메모"
  },
  {
    "제품명": "3M포스트잇팝업(60매+653/50매)",
    "SKU": "1005987",
    "서브카테고리": "사무메모"
  },
  {
    "제품명": "3M플래그(683/20매*5)",
    "SKU": "1005981",
    "서브카테고리": "사무메모"
  },
  {
    "제품명": "3M포스트잇노트(613/5색/200매)",
    "SKU": "1005986",
    "서브카테고리": "사무메모"
  },
  {
    "제품명": "3M분류플래그(종이/670/50매*6색)",
    "SKU": "1005982",
    "서브카테고리": "사무메모"
  },
  {
    "제품명": "POST-IT노트(656 레몬)",
    "SKU": "56172",
    "서브카테고리": "사무메모"
  },
  {
    "제품명": "Post-it노트(654/613노랑)",
    "SKU": "50062",
    "서브카테고리": "사무메모"
  },
  {
    "제품명": "Post-it노트(657형광노랑)",
    "SKU": "50060",
    "서브카테고리": "사무메모"
  },
  {
    "제품명": "3M무스탕플래그(683/20매*3)",
    "SKU": "1005978",
    "서브카테고리": "사무메모"
  },
  {
    "제품명": "POST-IT노트(656 라임)",
    "SKU": "56170",
    "서브카테고리": "사무메모"
  },
  {
    "제품명": "3M포스트잇(657/라인60매+613/50매)",
    "SKU": "1005983",
    "서브카테고리": "사무메모"
  },
  {
    "제품명": "POST-IT노트(656 파랑)",
    "SKU": "56174",
    "서브카테고리": "사무메모"
  },
  {
    "제품명": "POST-IT노트(656 분홍/파랑/노랑/라임)",
    "SKU": "56166",
    "서브카테고리": "사무메모"
  },
  {
    "제품명": "Post-it노트(657형광연두)",
    "SKU": "50059",
    "서브카테고리": "사무메모"
  },
  {
    "제품명": "3M포스트잇(654/라인65매+613/50매)",
    "SKU": "1005984",
    "서브카테고리": "사무메모"
  },
  {
    "제품명": "Post-it노트(657파랑)",
    "SKU": "50058",
    "서브카테고리": "사무메모"
  },
  {
    "제품명": "3M포스트잇스터디메이트(먼슬리플래너/12매)",
    "SKU": "1005976",
    "서브카테고리": "사무메모"
  },
  {
    "제품명": "3M포스트잇(660/라인30매+613/50매)",
    "SKU": "1005985",
    "서브카테고리": "사무메모"
  },
  {
    "제품명": "POST-IT노트(656 분홍)",
    "SKU": "56173",
    "서브카테고리": "사무메모"
  },
  {
    "제품명": "3M포스트잇팝업노트(휴대용팩/90매)",
    "SKU": "1005988",
    "서브카테고리": "사무메모"
  },
  {
    "제품명": "Post-it노트(657분홍)",
    "SKU": "50057",
    "서브카테고리": "사무메모"
  },
  {
    "제품명": "Post-it노트(654/613형광노랑)",
    "SKU": "50066",
    "서브카테고리": "사무메모"
  },
  {
    "제품명": "3M포스트잇스터디메이트(위클리플래너/25매)",
    "SKU": "1005975",
    "서브카테고리": "사무메모"
  },
  {
    "제품명": "3M디스펜서클래식(팝업)+리필50매",
    "SKU": "1005989",
    "서브카테고리": "사무메모"
  },
  {
    "제품명": "3M무스탕플래그(680 m/50매)",
    "SKU": "1005977",
    "서브카테고리": "사무메모"
  },
  {
    "제품명": "Post-it노트(654/613형광연두)",
    "SKU": "50065",
    "서브카테고리": "사무메모"
  },
  {
    "제품명": "3M플래그12매*2색(680)",
    "SKU": "56263",
    "서브카테고리": "사무메모"
  },
  {
    "제품명": "3M스카치다용도테이프디스펜서(12 mm*21 m)/522",
    "SKU": "56264",
    "서브카테고리": "사무테이프"
  },
  {
    "제품명": "3M스카치다용도테이프디스펜서(18 mm*25 m)/583",
    "SKU": "56265",
    "서브카테고리": "사무테이프"
  },
  {
    "제품명": "3M스카치다용도테이프리필2입(18 mm*15 m)/550",
    "SKU": "58895",
    "서브카테고리": "사무테이프"
  },
  {
    "제품명": "3M스카치다용도테이프리필2입(12 mm*21 m)/550",
    "SKU": "56266",
    "서브카테고리": "사무테이프"
  },
  {
    "제품명": "3M스카치매직테이프리필(18 mm*15 m)",
    "SKU": "58896",
    "서브카테고리": "사무테이프"
  },
  {
    "제품명": "3M스카치다용도테이프리필4입(12 mm*10 m)/550",
    "SKU": "56267",
    "서브카테고리": "사무테이프"
  },
  {
    "제품명": "3M스카치크리스탈테이프(18 mm*24 m)",
    "SKU": "1024924",
    "서브카테고리": "사무테이프"
  },
  {
    "제품명": "3M스카치매직테이프디스펜서(18 mm*10 m/122)",
    "SKU": "56270",
    "서브카테고리": "사무테이프"
  },
  {
    "제품명": "3M스카치벽면부착용테이프(19 mm*15 m)",
    "SKU": "1024926",
    "서브카테고리": "사무테이프"
  },
  {
    "제품명": "3M스카치매직테이프디스펜서(12 mm*8 m/104)",
    "SKU": "56268",
    "서브카테고리": "사무테이프"
  },
  {
    "제품명": "3M스카치마운팅폼양면테이프(12 mm*1 m)/1000",
    "SKU": "58898",
    "서브카테고리": "사무테이프"
  },
  {
    "제품명": "3M스카치강력투명마운팅폼양면테이프/3000C",
    "SKU": "58899",
    "서브카테고리": "사무테이프"
  },
  {
    "제품명": "3M스카치초강력마운팅폼양면테이프/5000VHB",
    "SKU": "58901",
    "서브카테고리": "사무테이프"
  },
  {
    "제품명": "3M스카치매직테이프리필(12 mm*18 m/810)",
    "SKU": "56269",
    "서브카테고리": "사무테이프"
  },
  {
    "제품명": "3M토끼디스펜서(매직테이프 18 mm*8 m포함)",
    "SKU": "1005991",
    "서브카테고리": "사무테이프"
  },
  {
    "제품명": "3M스카치선물포장용테이프(19 mm*15 m)",
    "SKU": "1024925",
    "서브카테고리": "사무테이프"
  },
  {
    "제품명": "3M스카치강력마운팅폼양면테이프/3000",
    "SKU": "58900",
    "서브카테고리": "사무테이프"
  },
  {
    "제품명": "3M스카치마카롱매직테이프_블루(18 mm*9 m)",
    "SKU": "1024931",
    "서브카테고리": "사무테이프"
  },
  {
    "제품명": "3M스카치마카롱매직테이프_핑크(18 mm*9 m)",
    "SKU": "1024929",
    "서브카테고리": "사무테이프"
  },
  {
    "제품명": "3M스카치마카롱매직테이프_그린(18 mm*9 m)",
    "SKU": "1024932",
    "서브카테고리": "사무테이프"
  },
  {
    "제품명": "3M스카치마카롱매직테이프_퍼플(18 mm*9 m)",
    "SKU": "1024930",
    "서브카테고리": "사무테이프"
  },
  {
    "제품명": "3M스카치매직테이프(도넛모양)2000",
    "SKU": "58897",
    "서브카테고리": "사무테이프"
  },
  {
    "제품명": "3M스카치마카롱매직테이프_옐로우(18 mm*9 m)",
    "SKU": "1024928",
    "서브카테고리": "사무테이프"
  },
  {
    "제품명": "3M스카치수정테이프(5 mm*6 m)",
    "SKU": "56271",
    "서브카테고리": "수정테이프"
  },
  {
    "제품명": "3M이어플러그일반형",
    "SKU": "1025163",
    "서브카테고리": "학습기타"
  },
  {
    "제품명": "3M이어플러그고급형(케이스/리필2SET)",
    "SKU": "1024918",
    "서브카테고리": "학습기타"
  },
  {
    "제품명": "3M이어플러그고급형(리필4SET)",
    "SKU": "1024920",
    "서브카테고리": "학습기타"
  },
  {
    "제품명": "스카치 3M 매직풀 (25 g)",
    "SKU": "1019560",
    "서브카테고리": "풀"
  },
  {
    "제품명": "3M 코맨드 유틸리티 훅(중)(4개입)",
    "SKU": "1034446",
    "서브카테고리": "접착행거"
  },
  {
    "제품명": "3M 코맨드 유틸리티 훅(대)(3개입)",
    "SKU": "1032648",
    "서브카테고리": "접착행거"
  },
  {
    "제품명": "3M 코맨드 투명 주방용 훅(3개입)",
    "SKU": "1032643",
    "서브카테고리": "접착행거"
  },
  {
    "제품명": "3M 코맨드 투명 미니훅(6개입)",
    "SKU": "1032644",
    "서브카테고리": "접착행거"
  },
  {
    "제품명": "3M 코맨드 투명 훅(소)(3개입)",
    "SKU": "1032645",
    "서브카테고리": "접착행거"
  },
  {
    "제품명": "3M 코맨드 다용도 훅(소)(3개입)",
    "SKU": "1032646",
    "서브카테고리": "접착행거"
  },
  {
    "제품명": "스카치브라이트테이프클리너리필",
    "SKU": "1010875",
    "서브카테고리": "롤클리너"
  },
  {
    "제품명": "스카치브라이트 테이프클리너 리필 16cm(6m x 2 개입)",
    "SKU": "1032562",
    "서브카테고리": "롤클리너"
  },
  {
    "제품명": "스카치브라이트테이프클리너I형",
    "SKU": "1010877",
    "서브카테고리": "롤클리너"
  },
  {
    "제품명": "스카치브라이트테이프클리너T형",
    "SKU": "1010876",
    "서브카테고리": "롤클리너"
  },
  {
    "제품명": "3M크린스틱리필(4P)",
    "SKU": "1001967",
    "서브카테고리": "변기솔"
  },
  {
    "제품명": "3M크린스틱(리필2P포함)",
    "SKU": "1001968",
    "서브카테고리": "변기솔"
  },
  {
    "제품명": "3M향기톡톡 크린스틱_본체+리필1개입(레몬)",
    "SKU": "1032565",
    "서브카테고리": "변기솔"
  },
  {
    "제품명": "3M향기톡톡 크린스틱_본체+리필1개입(라벤더)",
    "SKU": "1032563",
    "서브카테고리": "변기솔"
  },
  {
    "제품명": "3M-습식청소포(25매)",
    "SKU": "1009814",
    "서브카테고리": "청소포"
  },
  {
    "제품명": "3M-건식청소포(35매)",
    "SKU": "1009813",
    "서브카테고리": "청소포"
  },
  {
    "제품명": "3M 세이프그립 다목적 안전장갑M",
    "SKU": "1011177",
    "서브카테고리": "작업용장갑"
  },
  {
    "제품명": "3M 세이프그립 다목적 안전장갑L",
    "SKU": "1011178",
    "서브카테고리": "작업용장갑"
  },
  {
    "제품명": "3M 세이프그립 기능성 안전장갑M",
    "SKU": "1011175",
    "서브카테고리": "작업용장갑"
  },
  {
    "제품명": "3M 세이프그립 기능성 안전장갑L",
    "SKU": "1011176",
    "서브카테고리": "작업용장갑"
  },
  {
    "제품명": "3M 스카치 박스테이프 (90 m)(투명)",
    "SKU": "1011286",
    "서브카테고리": "공구용테이프"
  },
  {
    "제품명": "3M 스카치 박스테이프 (40 m)(투명)",
    "SKU": "1011285",
    "서브카테고리": "공구용테이프"
  },
  {
    "제품명": "3M 스카치 박스테이프 (90 m)(갈색)",
    "SKU": "1011288",
    "서브카테고리": "공구용테이프"
  },
  {
    "제품명": "3M스카치초강력4XVHB폼양면테이프(5*6 cm)2매",
    "SKU": "1006398",
    "서브카테고리": "공구용테이프"
  },
  {
    "제품명": "3M스카치강력2X폼양면테이프(24 mm*1.1 m)",
    "SKU": "1006393",
    "서브카테고리": "공구용테이프"
  },
  {
    "제품명": "3M스카치초강력4XVHB폼양면테이프(18 mm*1.5 m)",
    "SKU": "1006394",
    "서브카테고리": "공구용테이프"
  },
  {
    "제품명": "3M 스카치 박스테이프 (40 m)(갈색)",
    "SKU": "1011287",
    "서브카테고리": "공구용테이프"
  },
  {
    "제품명": "3M 플라스틱 금속용 강력폼 양면테이프(18 mm*0.9 m)",
    "SKU": "1014615",
    "서브카테고리": "공구용테이프"
  },
  {
    "제품명": "3M 주방욕실용 강력폼양면테이프(18 mm*0.8 m)",
    "SKU": "1014616",
    "서브카테고리": "공구용테이프"
  },
  {
    "제품명": "3M스카치강력투명폼양면테이프(5*6 cm)2매",
    "SKU": "1006397",
    "서브카테고리": "공구용테이프"
  },
  {
    "제품명": "3M스카치강력고내열블랙박스용폼양면테이프(5*6 cm)2매",
    "SKU": "1006400",
    "서브카테고리": "공구용테이프"
  },
  {
    "제품명": "3M 코맨드 투명리필테이프 (중) (6개입)",
    "SKU": "1032671",
    "서브카테고리": "공구용테이프"
  },
  {
    "제품명": "3M 포장용 일반필름 양면테이프(12 mm*5 m)",
    "SKU": "1014614",
    "서브카테고리": "공구용테이프"
  },
  {
    "제품명": "3M코맨드 찍찍이 테이프(중)10개입/5세트",
    "SKU": "1006404",
    "서브카테고리": "공구용테이프"
  },
  {
    "제품명": "3M스카치강력자동차외장용폼양면테이프(18 mm*1.5 m)",
    "SKU": "1006395",
    "서브카테고리": "공구용테이프"
  },
  {
    "제품명": "3M 울트라파워 초강력 폼양면테이프(12 mm*1.3 m)",
    "SKU": "1014617",
    "서브카테고리": "공구용테이프"
  },
  {
    "제품명": "3M스카치강력목재용폼양면테이프(18 mm*1.3 m)",
    "SKU": "1006396",
    "서브카테고리": "공구용테이프"
  },
  {
    "제품명": "3M코맨드 찍찍이 테이트(소)14개입/7세트",
    "SKU": "1006403",
    "서브카테고리": "공구용테이프"
  },
  {
    "제품명": "3M 순간접착제 브러쉬형 (5 g)",
    "SKU": "1019385",
    "서브카테고리": "접착제"
  },
  {
    "제품명": "3M 순간접착제 캡형 (11 g)",
    "SKU": "1019386",
    "서브카테고리": "접착제"
  },
  {
    "제품명": "3M 스카치탈부착다용도타이(2 m)",
    "SKU": "1006402",
    "서브카테고리": "벨크로"
  },
  {
    "제품명": "3M 스카치브라이트 고무장갑(중)",
    "SKU": "1021629",
    "서브카테고리": "고무장갑"
  },
  {
    "제품명": "3M 스카치브라이트 고무장갑(대)",
    "SKU": "1021630",
    "서브카테고리": "고무장갑"
  },
  {
    "제품명": "3M 스카치브라이트 고무장갑(소)",
    "SKU": "1021628",
    "서브카테고리": "고무장갑"
  },
  {
    "제품명": "3M후레쉬롤백중형200매",
    "SKU": "1018173",
    "서브카테고리": "롤백"
  },
  {
    "제품명": "3M후레쉬롤백소형200매",
    "SKU": "1018172",
    "서브카테고리": "롤백"
  },
  {
    "제품명": "3M후레쉬롤백대형150매",
    "SKU": "1018174",
    "서브카테고리": "롤백"
  },
  {
    "제품명": "3M후레쉬컴팩트백미니100매",
    "SKU": "1018175",
    "서브카테고리": "위생백"
  },
  {
    "제품명": "3M후레쉬컴팩트백중형100매",
    "SKU": "1018176",
    "서브카테고리": "위생백"
  },
  {
    "제품명": "3M후레쉬컴팩트백대형70매",
    "SKU": "1018177",
    "서브카테고리": "위생백"
  },
  {
    "제품명": "3M 후레쉬 실속형 위생장갑 100매",
    "SKU": "1025270",
    "서브카테고리": "위생장갑"
  },
  {
    "제품명": "3M후레쉬위생장갑 70매",
    "SKU": "1018169",
    "서브카테고리": "위생장갑"
  },
  {
    "제품명": "3M 후레쉬 더블지퍼백 미니 15매",
    "SKU": "1025271",
    "서브카테고리": "지퍼백"
  },
  {
    "제품명": "3M후레쉬스탠딩슬라이드지퍼백대형15매",
    "SKU": "1018171",
    "서브카테고리": "지퍼백"
  },
  {
    "제품명": "3M후레쉬스탠딩슬라이드지퍼백소형12매",
    "SKU": "1018170",
    "서브카테고리": "지퍼백"
  },
  {
    "제품명": "3M 후레쉬 스탠딩 더블지퍼백 소형 22매",
    "SKU": "1025272",
    "서브카테고리": "지퍼백"
  },
  {
    "제품명": "3M 후레쉬 스탠딩 더블지퍼백 대형15매",
    "SKU": "1025273",
    "서브카테고리": "지퍼백"
  },
  {
    "제품명": "스카치브라이트베이직노스크래치스펀지(1P/블루)",
    "SKU": "56578",
    "서브카테고리": "수세미"
  },
  {
    "제품명": "스카치브라이트베이직그물망사수세미(2P/SET)",
    "SKU": "58112",
    "서브카테고리": "수세미"
  },
  {
    "제품명": "스카치브라이트베이직다목적수세미(3P)",
    "SKU": "56571",
    "서브카테고리": "수세미"
  },
  {
    "제품명": "스카치브라이트베이직노스크래치스펀지(1P/핑크)",
    "SKU": "56580",
    "서브카테고리": "수세미"
  },
  {
    "제품명": "스카치브라이트베이직항균망사수세미(3P)",
    "SKU": "56574",
    "서브카테고리": "수세미"
  },
  {
    "제품명": "스카치브라이트베이직항균스펀지다목적수세미(1P)",
    "SKU": "56573",
    "서브카테고리": "수세미"
  },
  {
    "제품명": "스카치브라이트베이직삼중양면다목적수세미(1P)",
    "SKU": "56579",
    "서브카테고리": "수세미"
  },
  {
    "제품명": "스카치브라이트베이직셀룰로오스수세미(2P)",
    "SKU": "56567",
    "서브카테고리": "수세미"
  },
  {
    "제품명": "스카치브라이트베이직다목적수세미(5P/SET)",
    "SKU": "58110",
    "서브카테고리": "수세미"
  },
  {
    "제품명": "스카치브라이트베이직노스크래치셀룰로오스수세미(1P)",
    "SKU": "56568",
    "서브카테고리": "수세미"
  },
  {
    "제품명": "스카치브라이트베이직셀룰로오스수세미(3P/SET)",
    "SKU": "58108",
    "서브카테고리": "수세미"
  },
  {
    "제품명": "스카치브라이트베이직삼중양면고운수세미(1P)",
    "SKU": "56577",
    "서브카테고리": "수세미"
  },
  {
    "제품명": "스카치브라이트플래티넘초강력수세미",
    "SKU": "1013417",
    "서브카테고리": "수세미"
  },
  {
    "제품명": "스카치브라이트베이직셀룰로오스다목적수세미(1P)",
    "SKU": "56570",
    "서브카테고리": "수세미"
  },
  {
    "제품명": "스카치브라이트베이직다목적양면수세미(3P/SET)",
    "SKU": "58113",
    "서브카테고리": "수세미"
  },
  {
    "제품명": "스카치브라이트베이직제로스크래치다목적수세미(3P/SET",
    "SKU": "58111",
    "서브카테고리": "수세미"
  },
  {
    "제품명": "스카치브라이트베이직아크릴다목적수세미1입",
    "SKU": "56576",
    "서브카테고리": "수세미"
  },
  {
    "제품명": "스카치브라이트베이직셀룰로오스망사수세미",
    "SKU": "1006232",
    "서브카테고리": "수세미"
  },
  {
    "제품명": "스카치브라이트베이직후라이팬수세미(2P/SET)",
    "SKU": "58107",
    "서브카테고리": "수세미"
  },
  {
    "제품명": "스카치브라이트베이직은사수세미(2P)",
    "SKU": "56566",
    "서브카테고리": "수세미"
  },
  {
    "제품명": "스카치브라이트베이직순면행주(3매입)",
    "SKU": "56610",
    "서브카테고리": "행주"
  },
  {
    "제품명": "스카치브라이트베이직플라워순면행주",
    "SKU": "56612",
    "서브카테고리": "행주"
  },
  {
    "제품명": "3M 코맨드 투명 데코레이션 클립 (20개입)",
    "SKU": "1032670",
    "서브카테고리": "충전기"
  },
  {
    "제품명": "3M 코맨드 투명 전선용클립 (소) (8개입)",
    "SKU": "1032665",
    "서브카테고리": "충전기"
  },
  {
    "제품명": "3M자동차투명양면테이프(18 mm*1.3 m)",
    "SKU": "1023108",
    "서브카테고리": "차량공구소모품"
  },
  {
    "제품명": "3M 싱글라인 일회용치실 27P",
    "SKU": "1021743",
    "서브카테고리": "치실"
  },
  {
    "제품명": "3M 더블라인 일회용치실 35P",
    "SKU": "1021744",
    "서브카테고리": "치실"
  },
  {
    "제품명": "3M 어린이 일회용치실 16P",
    "SKU": "1021745",
    "서브카테고리": "치실"
  },
  {
    "제품명": "쓰리엠 넥스케어 블레미쉬 패치 라이트 32매",
    "SKU": "1043101",
    "서브카테고리": "스팟패치"
  },
  {
    "제품명": "쓰리엠 넥스케어 블레미쉬 클리어 커버(11매)",
    "SKU": "58974",
    "서브카테고리": "스팟패치"
  },
  {
    "제품명": "쓰리엠 넥스케어 블레미쉬 클리어 커버(12매)",
    "SKU": "58973",
    "서브카테고리": "스팟패치"
  }
];

// DOM 요소들
let cameraInput = null;
let capturedImage = null;
let takePhotoBtn = null;
let analyzeBtn = null;
let resetBtn = null;
let loading = null;
let resultsSection = null;
let resultsTableBody = null;
let noResults = null;
let errorMessage = null;

let capturedImageData = null;

// 페이지 로드 완료 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    setupEventListeners();
});

function initializeElements() {
    cameraInput = document.getElementById('cameraInput');
    capturedImage = document.getElementById('capturedImage');
    takePhotoBtn = document.getElementById('takePhotoBtn');
    analyzeBtn = document.getElementById('analyzeBtn');
    resetBtn = document.getElementById('resetBtn');
    loading = document.querySelector('.loading');
    resultsSection = document.getElementById('resultsSection');
    resultsTableBody = document.getElementById('resultsTableBody');
    noResults = document.getElementById('noResults');
    errorMessage = document.getElementById('errorMessage');
}

function setupEventListeners() {
    takePhotoBtn.addEventListener('click', takePhoto);
    cameraInput.addEventListener('change', handlePhotoCapture);
    analyzeBtn.addEventListener('click', analyzeImage);
    resetBtn.addEventListener('click', resetApp);
}

function takePhoto() {
    console.log('카메라 실행...');
    hideError();
    cameraInput.click(); // 핸드폰 카메라 앱 실행
}

function handlePhotoCapture(event) {
    const file = event.target.files[0];
    
    if (!file) {
        console.log('사진 촬영 취소됨');
        return;
    }
    
    console.log('사진 선택됨:', file.name, file.size, 'bytes');
    
    const reader = new FileReader();
    
    reader.onload = function(e) {
        capturedImageData = e.target.result;
        console.log('이미지 로드 완료, 크기:', capturedImageData.length, 'characters');
        
        // 촬영된 이미지 미리보기 표시
        capturedImage.src = capturedImageData;
        capturedImage.style.display = 'block';
        
        // UI 업데이트: 분석 버튼 활성화
        analyzeBtn.style.display = 'inline-block';
        resetBtn.style.display = 'inline-block';
        
        console.log('사진 촬영 완료 - 분석 버튼 활성화됨');
    };
    
    reader.onerror = function(error) {
        console.error('이미지 로드 오류:', error);
        showError('이미지를 불러오는데 실패했습니다.');
    };
    
    reader.readAsDataURL(file);
}

async function analyzeImage() {
    if (!capturedImageData) {
        showError('분석할 이미지가 없습니다.');
        return;
    }
    
    try {
        hideError();
        showLoading(true);
        
        console.log('분석 시작 - API 호출 준비 중...');
        console.log('전송할 이미지 크기:', capturedImageData.length, 'characters');
        console.log('이미지 타입:', capturedImageData.substring(0, 50));
        
        const prompt = createAnalysisPrompt();
        
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                imageData: capturedImageData,
                prompt: prompt
            })
        });

        console.log('API 응답 상태:', response.status);

        if (!response.ok) {
            const errorText = await response.text();
            console.error('API 오류 응답:', errorText);
            throw new Error(`API 호출 실패: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        console.log('API 응답 데이터:', data);
        
        if (!data.success) {
            console.error('분석 실패:', data.error);
            throw new Error(data.error || '분석 중 오류가 발생했습니다.');
        }
        
        console.log('분석 결과:', data.result);
        displayResults(data.result);
        
    } catch (error) {
        console.error('이미지 분석 오류:', error);
        showError(`이미지 분석 중 오류가 발생했습니다: ${error.message}`);
    } finally {
        showLoading(false);
    }
}

function createAnalysisPrompt() {
    const productListString = JSON.stringify(M3_PRODUCTS, null, 2);
    
    return `당신은 세계최고의 전문 사진 분석가입니다. 사진속에서 '3M제품리스트'에 있는 제품이 있는지 찾아주세요. 그리고 아래와 같은 Flow만을 참고해서 작업해주세요.

Flow:
1. 사진에서 제품을 찾을때는 사진속에 있는 3M 제품을 최대한 누락없이 찾아주세요. 포장/색상/수량이 다르면 각각 별도의 제품으로 인식합니다. "3M" 또는 "Scotch-Brite" 등의 브랜드 로고나, Post-it, 스카치 테이프 등 3M 계열 제품으로 보이는 모든 제품을 포함합니다. 로고가 불분명해도 제품 형태와 특징으로 3M 제품으로 추정되면 분석에 포함하세요.

2. 사진속에서 찾은 각각의 제품들에 대해서 SKU를 매칭해주세요. 만약 사진에서 찾은 제품 한개에 대해 매칭 가능한 유사제품들이 여러개 있을 경우, 가장 가까운 제품의 SKU를 선택해주세요.

3. 결과는 [사진속제품정보, 매칭된 제품명, SKU]만 표로 정리해주세요.

3M제품리스트:
${productListString}

분석 결과를 다음 형식으로만 답변해주세요:

**분석 결과:**

| 사진속 제품정보 | 매칭된 제품명 | SKU |
|---|---|---|
| (찾은 제품 정보) | (매칭된 제품명) | (SKU 번호) |

만약 3M 제품을 찾을 수 없다면 "분석 결과: 3M 제품을 찾을 수 없습니다."라고만 답변해주세요.`;
}

function displayResults(analysisResult) {
    console.log('결과 표시 시작:', analysisResult);
    showLoading(false);
    
    // 결과 섹션 초기화
    resultsSection.style.display = 'none';
    noResults.style.display = 'none';
    resultsTableBody.innerHTML = '';
    
    // 원본 응답을 항상 화면에 표시하기 위한 원시 결과 섹션 생성
    let rawResultsDiv = document.getElementById('rawResults');
    if (!rawResultsDiv) {
        rawResultsDiv = document.createElement('div');
        rawResultsDiv.id = 'rawResults';
        rawResultsDiv.style.cssText = `
            margin-top: 20px;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 10px;
            border: 1px solid #dee2e6;
            white-space: pre-wrap;
            font-family: monospace;
            font-size: 12px;
            line-height: 1.4;
            max-height: 300px;
            overflow-y: auto;
        `;
        document.querySelector('.main-content').appendChild(rawResultsDiv);
    }
    
    // 원본 응답 표시
    rawResultsDiv.innerHTML = `<strong>AI 분석 결과:</strong><br/><br/>${analysisResult}`;
    rawResultsDiv.style.display = 'block';
    
    // "제품을 찾을 수 없습니다" 체크
    if (analysisResult.includes('3M 제품을 찾을 수 없습니다') || 
        analysisResult.includes('분석 결과: 3M 제품을 찾을 수 없습니다')) {
        console.log('제품을 찾을 수 없음');
        
        // noResults 섹션에 더 자세한 정보 표시
        const noResultsDiv = document.getElementById('noResults');
        noResultsDiv.innerHTML = `
            <h4>3M 제품을 찾을 수 없습니다</h4>
            <p>촬영된 이미지에서 3M 제품을 식별할 수 없었습니다.</p>
            <ul style="text-align: left; margin-top: 10px;">
                <li>제품 포장에 3M 또는 Scotch-Brite 로고가 명확히 보이는지 확인해주세요</li>
                <li>조명이 충분한 곳에서 다시 촬영해보세요</li>
                <li>Post-it, 스카치테이프 등 3M 제품들을 시도해보세요</li>
            </ul>
        `;
        noResultsDiv.style.display = 'block';
        return;
    }
    
    // 테이블 형식 파싱 시도
    const success = tryParseTableResults(analysisResult);
    if (success) {
        console.log('테이블 파싱 성공');
        resultsSection.style.display = 'block';
        return;
    }
    
    // SKU 패턴 파싱 시도
    const skuSuccess = tryParseSKUResults(analysisResult);
    if (skuSuccess) {
        console.log('SKU 파싱 성공');
        resultsSection.style.display = 'block';
        return;
    }
    
    // 파싱 실패 시에도 원본 결과는 이미 표시되어 있음
    console.log('구조화된 파싱 실패 - 원본 텍스트 표시됨');
}

function tryParseTableResults(analysisResult) {
    const tableMatch = analysisResult.match(/\|[\s\S]*?\|/g);
    
    if (!tableMatch || tableMatch.length < 2) {
        return false;
    }
    
    const dataRows = tableMatch.slice(2); // 헤더와 구분선 제외
    let hasValidResults = false;
    
    dataRows.forEach(row => {
        const cells = row.split('|').map(cell => cell.trim()).filter(cell => cell !== '');
        
        if (cells.length >= 3) {
            const tr = document.createElement('tr');
            
            cells.slice(0, 3).forEach(cellData => {
                const td = document.createElement('td');
                td.textContent = cellData;
                tr.appendChild(td);
            });
            
            resultsTableBody.appendChild(tr);
            hasValidResults = true;
        }
    });
    
    return hasValidResults;
}

function tryParseSKUResults(analysisResult) {
    const skuPattern = /SKU[:\s]*(\d+)/gi;
    const matches = analysisResult.matchAll(skuPattern);
    let hasValidResults = false;
    
    for (const match of matches) {
        const sku = match[1];
        const product = M3_PRODUCTS.find(p => p.SKU === sku);
        
        if (product) {
            const tr = document.createElement('tr');
            
            const tdInfo = document.createElement('td');
            tdInfo.textContent = '이미지에서 식별된 제품';
            tr.appendChild(tdInfo);
            
            const tdName = document.createElement('td');
            tdName.textContent = product.제품명;
            tr.appendChild(tdName);
            
            const tdSku = document.createElement('td');
            tdSku.textContent = product.SKU;
            tr.appendChild(tdSku);
            
            resultsTableBody.appendChild(tr);
            hasValidResults = true;
        }
    }
    
    return hasValidResults;
}

function parseNonTableResults(analysisResult) {
    // 테이블이 아닌 형식의 결과 파싱 시도
    resultsTableBody.innerHTML = '';
    
    // SKU 패턴 매칭 시도
    const skuPattern = /SKU[:\s]*(\d+)/gi;
    const matches = analysisResult.matchAll(skuPattern);
    
    let hasValidResults = false;
    
    for (const match of matches) {
        const sku = match[1];
        const product = M3_PRODUCTS.find(p => p.SKU === sku);
        
        if (product) {
            const tr = document.createElement('tr');
            
            const tdInfo = document.createElement('td');
            tdInfo.textContent = '이미지에서 식별된 제품';
            tr.appendChild(tdInfo);
            
            const tdName = document.createElement('td');
            tdName.textContent = product.제품명;
            tr.appendChild(tdName);
            
            const tdSku = document.createElement('td');
            tdSku.textContent = product.SKU;
            tr.appendChild(tdSku);
            
            resultsTableBody.appendChild(tr);
            hasValidResults = true;
        }
    }
    
    if (hasValidResults) {
        resultsSection.style.display = 'block';
        noResults.style.display = 'none';
    } else {
        noResults.style.display = 'block';
        resultsSection.style.display = 'none';
    }
}

function resetApp() {
    console.log('앱 초기화 시작...');
    
    // UI 초기화
    capturedImage.style.display = 'none';
    analyzeBtn.style.display = 'none';
    resetBtn.style.display = 'none';
    
    resultsSection.style.display = 'none';
    noResults.style.display = 'none';
    
    // rawResults 요소도 숨기기
    const rawResultsDiv = document.getElementById('rawResults');
    if (rawResultsDiv) {
        rawResultsDiv.style.display = 'none';
    }
    
    // 파일 input 초기화
    cameraInput.value = '';
    
    // 데이터 초기화
    capturedImageData = null;
    
    hideError();
    showLoading(false);
    
    console.log('앱 초기화 완료');
}

function showLoading(show) {
    if (show) {
        loading.style.display = 'block';
        analyzeBtn.disabled = true;
    } else {
        loading.style.display = 'none';
        analyzeBtn.disabled = false;
    }
}

function showError(message) {
    console.error('에러 표시:', message);
    
    errorMessage.innerHTML = `
        <strong>오류 발생</strong><br/>
        ${message}
        <br/><br/>
        <small>문제가 지속되면 페이지를 새로고침한 후 다시 시도해주세요.</small>
    `;
    errorMessage.style.display = 'block';
    
    // 에러 메시지를 페이지 상단으로 스크롤
    errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function hideError() {
    errorMessage.style.display = 'none';
}
