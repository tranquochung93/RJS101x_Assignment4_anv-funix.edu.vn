import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiBase } from "./components/api/ApiBase";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import UserGetData from "./components/content/UserContent/UserGetData";
import AboutUser from "./components/content/UserContent/AboutUser";
import Department from "./components/content/Department/Department";
import Payroll from "./components/payroll/Payroll";
import SearchUser from "./components/searchUser/SearchUser";
import store from "./components/redux/store";
import { Provider } from "react-redux";
import DepartmentId from "./components/content/Department/DepartmentId";
function App() {
  const [department, setDepartments] = useState([]);
  const [idDepartment, setIdDepartment] = useState("");
  const [userDepartment, setUserDepartment] = useState([]);

  useEffect(async () => {
    await axios.get(`${apiBase}/departments`).then((response) => {
      setDepartments(response.data);
    });
  }, []);

  useEffect(async () => {
    await axios
      .get(`${apiBase}/departments/${idDepartment}`)
      .then((response) => {
        if (response.status === 200) {
          setUserDepartment(response.data);
        }
      });
  }, [idDepartment]);
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          {/* header */}
          <Header />
          {/* router */}
          <Routes>
            <Route path="/" element={<UserGetData />}></Route>
            <Route path="/staffs/:id" element={<AboutUser />}></Route>
            <Route
              path="/menu/:departmentId"
              element={<DepartmentId userDepartment={userDepartment} />}
            ></Route>
            <Route
              path="/menu"
              element={
                <Department
                  department={department}
                  setIdDepartment={setIdDepartment}
                />
              }
            ></Route>
            <Route path="/payroll" element={<Payroll />}></Route>
            <Route path="/staffs/search" element={<SearchUser />}></Route>
          </Routes>
          {/* footer */}
          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
