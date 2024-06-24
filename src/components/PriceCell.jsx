import React, { useState, useEffect } from "react";
import { Input } from "@chakra-ui/react";

const PriceCell = ({ getValue, row, column, table }) => {
  const initialPrice = getValue();
  const { updateData } = table.options.meta;
  const [price, setPrice] = useState(initialPrice ?? "");

  useEffect(() => {
    setPrice(initialPrice ?? "");
  }, [initialPrice]);

  const handleChange = (e) => {
    const value = e.target.value;
    setPrice(value);
    updateData(row.index, column.id, value === "" ? null : parseFloat(value));
  };

  return (
    <Input
      value={price}
      onChange={handleChange}
      type="number"
    //   step="0.01"
    //   min="0"
    //    width="140px"
    variant="filled"
    size="sm"
    w="85%"
    overflow="hidden"
    textOverflow="ellipsis"
    whiteSpace="nowrap"
    />
  );
};

export default PriceCell;
