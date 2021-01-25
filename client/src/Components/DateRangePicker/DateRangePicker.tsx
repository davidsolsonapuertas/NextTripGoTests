import React from 'react';
import { DateRangePicker, OnChangeProps, Range } from 'react-date-range';
import { Dispatch, SetStateAction } from 'react';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface IProps {
  setDates: Dispatch<SetStateAction<object>>;
  dates: object;
  setRanges: Dispatch<SetStateAction<object>>;
}

function Daterangepicker({ setDates, dates, setRanges }: IProps) {
  // const date = new Date();
  const handleSelect = (ranges: OnChangeProps) => { //* changed type ranges 
    setDates({
      ...dates,
      startDate: (ranges as { selection: Range }).selection.startDate,
      endDate: (ranges as { selection: Range }).selection.endDate,
    });
    setRanges((ranges as { selection: Range }).selection);
  };

  return (
    <div>
      <DateRangePicker
        minDate={new Date()}
        ranges={[dates]}
        onChange={handleSelect}
      />
    </div>
  );
}

export default Daterangepicker;

// switch (ranges) {
//   case { selection: Range }: {
//     setDates({
//       ...dates,
//       startDate: ranges.selection.startDate,
//       endDate: ranges.selection.endDate,
//     });
//     setRanges(ranges.selection);
//     break;
//   }
//   default: 
//   break;
// }
