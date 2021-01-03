import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser } from "../actions/adduser";

function UserProfile(props, setCurrentId) {
  //console.log(props)
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/users/getOneUser/+${window.localStorage.userId}`
      )
      .then((res) => {
        //console.log(res.data[0])
        setUser({
          userName: res.data[0].userName,
          age: res.data[0].age,
          gender: res.data[0].gender,
          email: res.data[0].email,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, [window.localStorage.userId]);
  return (
    <div
      className="container w-50 p-3 mt-5"
      style={{
        textAlign: "left",
        backgroundColor: "beige",
        alignSelf: "center",
        width: "100%",
        height: "auto",
        borderRadius: 5,
      }}
    >
      {" "}
      <br />
      <div style={{ marginLeft: 10 }}>
        <h2> {user.userName}'s Profile</h2>
      </div>
      <br />
      <div
        className="row"
        style={{
          textAlign: "left",
          backgroundColor: "white",
          alignSelf: "center",
          width: "800",
          marginLeft: 10,
          marginRight: 10,
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <br />

        <h4 style={{ marginLeft: 15 }}>User Name :</h4>

        <div
          className="col-sm-9 text-secondary "
          style={{
            textAlign: "left",
            marginLeft: 5,
            fontSize: 14,
          }}
        >
          {user.userName}
        </div>
      </div>
      {/* <hr> */}
      <div
        className="row"
        style={{
          textAlign: "left",
          backgroundColor: "white",
          alignSelf: "center",
          width: "800",
          marginLeft: 10,
          marginRight: 10,
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <h4 style={{ marginLeft: 15 }}>Age :</h4>

        <div
          className="col-sm-9 text-secondary"
          style={{
            textAlign: "left",
            marginLeft: 5,
            fontSize: 14,
          }}
        >
          {user.age}
        </div>
      </div>
      {/* </hr> */}
      <div
        className="row"
        style={{
          textAlign: "left",
          backgroundColor: "white",
          alignSelf: "center",
          width: "800",
          marginLeft: 10,
          marginRight: 10,
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <h4 style={{ marginLeft: 15 }}> Gender :</h4>

        <div
          className="col-sm-9 text-secondary"
          style={{
            textAlign: "left",
            marginLeft: 5,
            fontSize: 14,
          }}
        >
          {user.gender}
        </div>
      </div>
      {/* </hr> */}
      <div
        className="row "
        style={{
          textAlign: "left",
          backgroundColor: "white",
          alignSelf: "center",
          width: "800",
          marginLeft: 10,
          marginRight: 10,
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <h4 style={{ marginLeft: 15 }}>Email :</h4>

        <div
          className="col-sm-9 text-secondary"
          style={{
            textAlign: "left",
            marginLeft: 5,
            fontSize: 14,
          }}
        >
          {user.email}
        </div>
      </div>
      {/* buttons div starts */}
      <br />
      <div
        style={{
          marginLeft: 10,
          alignItems: "center",
        }}
      >
        <Link
          type="button"
          className="btn btn-info btn-rounded  mr-2"
          to={`/edit/${window.localStorage.userId}`}
        >
          edit
        </Link>

        <Link
          type="button"
          className="btn btn-info btn-rounded mr-2 ml-2"
          to={"/video"}
        >
          Start Meeting
        </Link>
        <a
          href="/"
          style={{ backgroundColor: "red", borderColor: "red" }}
          type="button"
          className="btn btn-dark btn-rounded  mr-2 ml-2"
          onClick={() => {
            dispatch(deleteUser(window.localStorage.userId));
            window.localStorage.clear();
          }}
        >
          delete
        </a>
        <br />
        <br />
        <br />
      </div>
      {/* buttons div ends*/}
    </div>
  );
}
export default UserProfile;
