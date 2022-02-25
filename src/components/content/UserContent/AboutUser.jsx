import React, { useEffect, useState } from "react";
// import Moment from 'react-moment';
import axios from "axios";
import Moment from "react-moment";
import { useParams, Link } from "react-router-dom";
import styles from "./user.module.css";
import { apiBase } from "../../api/ApiBase";
import { STAFFS } from "../../dataUser/staffs";
function AboutUser(props) {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(async () => {

    // about user
    await axios.get(`${apiBase}/staffs`).then((response) => {
      const user = response.data.filter((user) => user.id == id).at(0);
      setUser(user);
    });
  }, []);

  return (
    <div className={styles.AboutUser}>
      <div className={styles.router}>
        <Link to={"/"}>
          <h2>Nhân Viên </h2>
        </Link>
        <h2>{` / ${user.name}`}</h2>
      </div>

      <div className={styles.userContainer}>
        <img
          className={styles.userImage}
          src="http://www.livedemolink.com/cric-profile/img/img1.jpg"
        />
        <div className={styles.infoUser}>
          <h3 className={styles.name}>{user.name}</h3>
          <h4 className={styles.time}>
            <span>Ngày sinh:</span>
            <Moment format="YYYY-MM-DD">{user.doB}</Moment>
          </h4>
          <h4 className={styles.time}>
            <span>Ngày vào công ty:</span>
            <Moment format="YYYY-MM-DD">{user.startDate}</Moment>
          </h4>

          {user && (
            <h4 className={styles.department}>{`Phòng ban: ${
              user.departmentId
            }`}</h4>
          )}
          <h4
            className={styles.timeRest}
          >{`Số ngày nghỉ còn lại:${user.annualLeave}`}</h4>
          <h4
            className={styles.timeRest}
          >{`Số ngày đã làm thêm:${user.overTime}`}</h4>
        </div>
      </div>
    </div>
  );
}

export default AboutUser;
