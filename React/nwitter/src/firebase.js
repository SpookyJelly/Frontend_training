// 가끔 코드들 보면 import * as firebase로 되어있는데, 그건 7버전 이하인 경우에 뜨는거다
// 나는 8버전이라 무관하다
// 이거 run 해보니까 콘솔창에 firebase 싹 다 로드하는 것 보다는 진짜로 사용할 기능만 꺼내와서 사용하라고하네
// ex. /database, /auth 이런 식으로.
import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGEING_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

export default firebase.initializeApp(firebaseConfig);
