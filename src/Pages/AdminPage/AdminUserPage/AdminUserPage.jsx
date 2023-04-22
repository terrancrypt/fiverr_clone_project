import React, { useEffect, useState } from "react";
import { adminUserService } from "../../../services/adminServices/adminUserService";
import { Button, Input, Table, message } from "antd";
import { headerUsers } from "./utils";
import { useSearchParams } from "react-router-dom";
import qs from "qs";

export default function AdminUserPage() {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useSearchParams();
  let stringSearch = window.location.search.substring(1);
  console.log(qs.parse(stringSearch));

  useEffect(() => {
    adminUserService
      .getUserList()
      .then((res) => {
        setUsers(res.data.content);
      })
      .catch((err) => {});
  }, []);
  let handleDelete = (id) => {
    adminUserService
      .deleteUser(id)
      .then((res) => {
        fetUserList();
        message.success("Xóa thành công");
      })
      .catch((err) => {
        message.error(err.response.data.content);
      });
  };
  let fetUserList = () => {
    adminUserService
      .getUserList()
      .then((res) => {
        let userArr = res.data.content.map((item) => {
          return {
            ...item,
            action: (
              <Button
                onClick={() => {
                  handleDelete(item.id);
                }}
                type="primary"
                danger
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </Button>
            ),
          };
        });
        setUsers(userArr);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetUserList();
  }, []);

  let handleSearchOnchange = (e) => {
    let { value } = e.target;
    setSearchValue({
      keyword: value,
    });
    if (!value) {
      fetUserList();
    } else {
      adminUserService
        .getSearchUser(value)
        .then((res) => {
          let userArr = res.data.content.map((item) => {
            return {
              ...item,
            };
          });
          setUsers(userArr);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className=" text-center">
      <Input
        onChange={handleSearchOnchange}
        placeholder="Tìm kiếm người dùng"
        className="my-5 border-black placeholder:text-black placeholder:font-medium focus:border-black focus:border-2"
      />
      <Table columns={headerUsers} dataSource={users} />;
    </div>
  );
}
