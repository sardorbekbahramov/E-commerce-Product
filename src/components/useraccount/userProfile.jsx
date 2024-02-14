import React, { useState } from "react";
import "./userProfile.css";
import { MdModeEdit } from "react-icons/md";

export default function UserProfile() {
  const [edit1, setEdit1] = useState(true);
  const [edit2, setEdit2] = useState(true);
  const [edit3, setEdit3] = useState(true);
  const [edit4, setEdit4] = useState(true);
  const [edit5, setEdit5] = useState(true);
  return (
    <div className="user_profile">
      <div className="grp">
        <p>Name:</p>
        <div className="for_save">
          {edit1 ? (
            <p className="user_name">John Doe</p>
          ) : (
            <input type="text" className="edit" placeholder="Enter your name" />
          )}
          {edit1 ? (
            <MdModeEdit
              onClick={() => {
                setEdit1(false);
              }}
            />
          ) : (
            <div className="btn_grp">
              <button className="user_profile_btn">Save</button>
              <button className="user_profile_btn"
                onClick={() => {
                  setEdit1(true);
                }}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="grp">
        <p>Number:</p>
        <div className="for_save">
          {edit2 ? (
            <p className="user_name">+1 659 123 458 79</p>
          ) : (
            <input type="text" className="edit" placeholder="Phone number" />
          )}
          {edit2 ? (
            <MdModeEdit
              onClick={() => {
                setEdit2(false);
              }}
            />
          ) : (
            <div className="btn_grp">
              <button className="user_profile_btn">Save</button>
              <button className="user_profile_btn"
                onClick={() => {
                  setEdit2(true);
                }}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="grp">
        <p>Email:</p>
        <div className="for_save">
          {edit3 ? (
            <p className="user_name">johnDoe@gmail.com</p>
          ) : (
            <input type="email" className="edit" placeholder="Yoour email" />
          )}
          {edit3 ? (
            <MdModeEdit
              onClick={() => {
                setEdit3(false);
              }}
            />
          ) : (
            <div className="btn_grp">
              <button className="user_profile_btn">Save</button>
              <button className="user_profile_btn"
                onClick={() => {
                  setEdit3(true);
                }}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="grp">
        <p>Gender:</p>
        <div className="for_save">
          {edit4 ? (
            <p className="user_name">Male</p>
          ) : (
            <input type="text" className="edit" placeholder="Your gender" />
          )}
          {edit4 ? (
            <MdModeEdit
              onClick={() => {
                setEdit4(false);
              }}
            />
          ) : (
            <div className="btn_grp">
              <button className="user_profile_btn">Save</button>
              <button className="user_profile_btn"
                onClick={() => {
                  setEdit4(true);
                }}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="grp">
        <p>Location:</p>
        <div className="for_save">
          {edit5 ? (
            <p className="user_name">United States New York WallStreet 221-b</p>
          ) : (
            <input type="text" className="edit" placeholder="Your location" />
          )}
          {edit5 ? (
            <MdModeEdit
              onClick={() => {
                setEdit5(false);
              }}
            />
          ) : (
            <div className="btn_grp">
              <button className="user_profile_btn">Save</button>
              <button className="user_profile_btn"
                onClick={() => {
                  setEdit5(true);
                }}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="grp">
        <p>Roll:</p>
        <div className="for_save">
          <p className="user_name">User</p>
        </div>
      </div>
    </div>
  );
}
