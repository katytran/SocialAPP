import Button from "@material-ui/core/Button";
import { Pagination } from "@material-ui/lab";
import React from "react";

function PaginationBar({ pageNum, setPageNum, totalPages }) {
  const handleChange = (event, value) => {
    setPageNum(value);
  };

  return (
    <div className="d-flex justify-content-center">
      <Pagination
        count={totalPages}
        variant="outlined"
        page={pageNum}
        onChange={handleChange}
        color="secondary"
      />
    </div>
  );
}

export default PaginationBar;
