import React from "react";

import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const DataTable = ({ datas }) => {
  const columns = [
    { field: "question", headerName: "Question", width: "1200" },
  ];
  const rows = datas.map((data) => {
    return {
      id: data.question_id,
      question: data.title,
    };
  });
  console.log(rows);
  return (
    <Box sx={{ height: 500, width: "100%" }} textAlign="center">
      <h2>Question Table</h2>
      <DataGrid rows={rows} columns={columns} pageSize={10} />
    </Box>
  );
};

export default DataTable;
