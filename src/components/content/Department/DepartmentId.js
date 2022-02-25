import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import clsx from 'clsx'
import styles from "../UserContent/user.module.css";
function DepartmentId({ userDepartment }) {
  return (
    <div className={styles.userDepartmentContainer}>
      {userDepartment &&
        userDepartment.map((user, index) => {
          return (
            <div className={clsx(styles.AboutUser, styles.aboutUserDepartment)} key={index}>
              <div className={clsx(styles.userContainer, styles.aboutUserDepartmentContainer)}>
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
                    <h4
                      className={styles.department}
                    >{`Phòng ban: ${user.departmentId}`}</h4>
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
        })}
    </div>
  );
}

export default DepartmentId;
