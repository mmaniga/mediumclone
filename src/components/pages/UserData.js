import React from "react";

import { userData } from "../../data";

function UserData() {
  return (
    <section id="brand-list">
      <div class="container mt-2">
        <h3>List of Brands With their Offers</h3>
        <h5 class="sub-title pb-2">since the 1500s </h5>

        <div class="row mb-4 pb-4 pt-4">
          <table class="table bl-table-bg  align-middle table-borderless ">
            <thead>
              <tr>
                <th class="ps-1">{userData.headers.category} </th>
                <th>{userData.headers.brand}s</th>
                <th>{userData.headers.category}</th>
                <th>{userData.headers.sharing}</th>
                <th>{userData.headers.status}</th>
              </tr>
            </thead>
            <tbody>
              {userData.data.map((d) => {
                return (
                  <tr>
                    <td>{d.category}</td>
                    <td>{d.branad}</td>
                    <td>{d.dicount}</td>
                    <td>{d.period}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-outline-success btn-sm"
                      >
                        {d.staus}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default UserData;
