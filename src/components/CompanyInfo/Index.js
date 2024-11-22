import React, { useState, useEffect } from "react";
import axios from "axios";

const CompanyInfo = () => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    // Fetch company info from the API
    const fetchCompanyInfo = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/company/info");
        setInfo(response.data);
      } catch (error) {
        console.error("Error fetching company info:", error);
      }
    };

    fetchCompanyInfo();
  }, []);

  if (!info) return <p>Loading...</p>;

  return (
    <div>
      <h1>Company Info</h1>
      <p><strong>Name:</strong> {info.name}</p>
      <p><strong>Address:</strong> {info.address}</p>
      <p><strong>Phone:</strong> {info.phone}</p>
      <p><strong>Email:</strong> {info.email}</p>
    </div>
  );
};

export default CompanyInfo;
