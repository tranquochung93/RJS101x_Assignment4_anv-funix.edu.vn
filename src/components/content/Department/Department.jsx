import React from "react";
import {useNavigate} from 'react-router-dom'
import styles from "./department.module.css";
function Department({department, setIdDepartment}) {
    const navigate = useNavigate();
  const handleGoToDepartment = (id) => {
    setIdDepartment(id)
    navigate(`/menu/${id}`)

  }
  return (
    <div className={styles.departmentContainer}>
      {department.map((department, index) => {
        return (
          <div className={styles.department} key={index} onClick={() => handleGoToDepartment(department.id)}>
            <h1>{department.name}</h1>
            <h4
              className={styles.departmentUser}
            >{`Số lượng nhân viên: ${department.numberOfStaff}`}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Department;
