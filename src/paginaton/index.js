import { Box, MenuItem, Pagination, Select } from "@mui/material";
import { useEffect, useState } from "react";

import service from "../services";

export default function AppPagination({ setCryptoList }) {
  const [page, setPage] = useState(5);
  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  useEffect(() => {
    service
      .getData({ from: pagination.from, to: pagination.to })
      .then((response) => {
        setPagination({ ...pagination, count: response.count });
        setItems(response.data.map((item) => setCryptoList(response.data)));
      });
  }, [pagination.from, pagination.to]);

  useEffect(() => {
    setPagination({ ...pagination, to: pageSize });
    handlePageChange(null, Math.ceil(pagination.to / pageSize));
  }, [pageSize]);

  const handlePageChange = (event, page) => {
    setPage(page);
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setPagination({ ...pagination, from: from, to: to });
  };

  return (
    <Box
      justifyContent={"center"}
      alignContent={"center"}
      display={"flex"}
      px={{ margin: "20px 0px" }}
    >
      <Select
        className='h-10'
        value={pageSize}
        onChange={(s) => setPageSize(s.target.value)}
      >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={25}>25</MenuItem>
        <MenuItem value={50}>50</MenuItem>
        <MenuItem value={100}>100</MenuItem>
      </Select>
      <Pagination
        color='primary'
        count={Math.ceil(pagination.count / pageSize)}
        onChange={handlePageChange}
        page={page}
      />
    </Box>
  );
}
