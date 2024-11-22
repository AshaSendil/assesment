const express = require("express");

const router = express.Router();

// Static Company Information
const companyInfo = {
  name: "Your Company Name",
  address: "123, Main Street, Your City, Your Country",
  phone: "123-456-7890",
  email: "info@company.com",
};

// API to fetch company info
router.get("/info", (req, res) => {
  res.json(companyInfo);
});

module.exports = router;
