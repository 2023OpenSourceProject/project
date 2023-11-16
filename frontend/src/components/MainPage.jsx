import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import Navbar from "./UI/Navbar";
import mainImage from "../assets/image/mainPageImage.png";
import styles from "./MainPage.module.css";

const MainPage = () => {
  const travelPlanHandler = () =>{

  }

  // 메인페이지 접속시 토큰을 로그로 출력
  useEffect(() => {
    console.log("token : " + localStorage.getItem('token'));
  }, []);


  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <img src={mainImage} />  

        <div className={styles.mainBody}>
          <div className={styles.body1}>
            <p>
              <span>Great </span>
              <span className={styles.Plan}>Plan </span>
              <span>is</span>
            </p>
            <p>
              <span>made by </span>
              <span className={styles.Review}>Review</span>
            </p>

            </div>
          <div className={styles.body2}>
            <p>최고의 여행은 그 계획의 후기를 통해 만들어집니다.</p>
            <p>Travel Log와 함께 여행계획을 세우고 후기를 리뷰해보세요!</p>
          </div>
          <Link to="/NewPlan" style={{ textDecoration: "none"}}><button className={styles.startButton}>지금 바로 시작하기!</button></Link>
        </div>
      </div>

    </>
  );
};

export default MainPage;
