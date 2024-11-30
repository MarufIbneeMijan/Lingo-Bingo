import React from "react";
import CountUp from "react-countup";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
const Progress = () => {
  return (
    <div className="font-SourGummy" >
      <Header></Header>
      <div className="stats stats-vertical shadow">
        <div className="stat">
          <div className="stat-title">Lessons Completed</div>
          <div className="stat-value">{<CountUp end={9} />}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>
        <Helmet>
            <title>Progress</title>
           </Helmet>
        <div className="stat">
          <div className="stat-title">Vocabs Lerned</div>
          <div className="stat-value">{<CountUp end={101} />}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-title">Progress</div>
          <div className="stat-value">{<CountUp end={65} />}%</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Progress;
