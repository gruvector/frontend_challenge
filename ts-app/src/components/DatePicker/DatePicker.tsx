import React, { useState } from "react";

import type { Dayjs } from "dayjs";


import { DatePickerCalendar } from "./DatePickerCalendar/DatePickerCalendar";
import { DatePickerSelector } from "./DatePickerSelector/DatePickerSelector";

import "./DatePicker.css";

export interface IDatePickerProps {
  selectedDate: Dayjs;

  onChange: (newDate: Dayjs) => void;
}

export const DatePicker: React.FC<IDatePickerProps> = ({
  selectedDate,
  onChange
}) => {
  const [shownDate, setShownDate] = useState(selectedDate);

  return (
    <div className={"datePicker"}>
      <DatePickerSelector
        shownDate={shownDate}
        setShownDate={setShownDate}
      />

      <DatePickerCalendar
        selectedDate={selectedDate}
        shownDate={shownDate}
        onChange={onChange}
      />
    </div>
  );
};