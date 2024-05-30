"use client";
import { useState } from "react";

export default function LoginPage() {
  const [jwt, setJwt] = useState("");
  const [userData, setUserData] = useState(null);
  const [tableData, setTableData] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await fetch("https://recruitment-api.vercel.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: "admin", password: "admin123" }),
      });

      if (response.ok) {
        const data = await response.json();
        setJwt(data.jwt);

        // Kullanıcı giriş yaptıktan hemen sonra verileri alma işlemi
        fetchUserData(data.jwt);
        fetchTableData(data.jwt);
        console.log("Login successful");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const fetchUserData = async (jwtToken) => {
    try {
      const response = await fetch(
        "https://recruitment-api.vercel.app/get-info",
        {
          method: "GET",
          headers: {
            Authorization: `${jwtToken}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        console.log("User data fetched successfully", data);
      } else {
        console.error("Failed to fetch user data:", response.status);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const fetchTableData = async (jwtToken) => {
    try {
      const response = await fetch(
        "https://recruitment-api.vercel.app/get-table",
        {
          method: "GET",
          headers: {
            Authorization: `${jwtToken}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setTableData(data);
        console.log("Table data fetched successfully", data);
      } else {
        console.error("Failed to fetch table data:", response.status);
      }
    } catch (error) {
      console.error("Error fetching table data:", error);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <p>JWT: {jwt}</p>
      {userData && (
        <div>
          <table>
            <tbody>
              <tr>
                <td>Total Data Usage:</td>
                <td>{userData.totalDataUsage}</td>
              </tr>
              <tr>
                <td>Daily Usage:</td>
                <td>{userData.dailyUsage}</td>
              </tr>
              <tr>
                <td>Last Charge:</td>
                <td>{userData.lastCharge}</td>
              </tr>
              <tr>
                <td>Last Charge Amount:</td>
                <td>{userData.lastChargeAmount}</td>
              </tr>
              <tr>
                <td>Expire Time:</td>
                <td>{userData.expireTime}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {tableData && (
        <div>
          <h2>Data List</h2>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Location</th>
                <th>Rental</th>
                <th>IP Count</th>
                <th>Purpose</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {tableData.data.map((item, index) => (
                <tr key={index}>
                  <td>{item.type}</td>
                  <td>{item.location}</td>
                  <td>{item.rental}</td>
                  <td>{item.ipcount}</td>
                  <td>{item.purpose}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
