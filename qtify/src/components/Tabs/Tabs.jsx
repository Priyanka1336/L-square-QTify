import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function BasicTabs({ value, handleChange }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          textColor="#ffff"
          indicatorColor="secondary"
          value={value}
          onChange={(e) => handleChange(e.target.textContent)}
          aria-label="basic tabs example"
        >
          <Tab label="All" value="All" />
          <Tab label="Rock" value="Rock" />
          <Tab label="Pop" value="Pop" />
          <Tab label="Jazz" value="Jazz" />
          <Tab label="Blues" value="Blues" />
        </Tabs>
      </Box>
    </Box>
  );
}
