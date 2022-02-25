import React from "react";
import { STAFFS } from "../../dataUser/staffs";
import User from "./User";
import AboutUser from "./AboutUser";
function UserGetData(props) {
  return (
    <div>
      <User STAFFS={STAFFS} />
      {/* <AboutUser/> */}
    </div>
  );
}

export default UserGetData;
