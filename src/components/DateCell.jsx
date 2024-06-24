import React, { forwardRef } from "react";
import { Center, Icon } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarIcon from "./icons/CalendarIcon";

const DateCustomInput = forwardRef(({ value, onClick }, ref) => (
  <Center ref={ref} onClick={onClick} cursor="pointer" position="relative">
    {value ? (
      value
    ) : (
      <Icon as={CalendarIcon} fontSize="xl" />
    )}
  </Center>
));

const DateCell = ({ getValue, row, column, table }) => {
  const date = getValue() ? new Date(getValue()) : null;
  const { updateData } = table.options.meta;

  return (
    <DatePicker
      wrapperClassName="date-wrapper"
      dateFormat="dd-MMM-yyyy HH:mm"
      selected={date}
      onChange={(date) => updateData(row.index, column.id, date)}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      customInput={
        <DateCustomInput
          value={date ? date.toLocaleString('en-GB') : ""}
        />
      }
    />
  );
};

export default DateCell;
