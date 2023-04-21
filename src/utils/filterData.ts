import { Form } from '../types/types';
import dayjs, { Dayjs } from 'dayjs';

const filterData = (
  dataSource: Form[],
  searchText: string,
  selectedDate: string,
  selectedStatus: string[],
  selectedRequiredAction: string[],
) => {
  return dataSource.filter((form) => {
    let matchesSearchText = true;
    if (searchText) {
      matchesSearchText = form.formName
        .toLowerCase()
        .includes(searchText.toLowerCase());
    }

    let matchesDate = true;
    if (selectedDate) {
      const selectedDateObj: Dayjs = dayjs(selectedDate);
      matchesDate = selectedDateObj.isAfter(dayjs(form.created), 'day');
    }

    let matchesStatus = true;
    if (selectedStatus.length > 0) {
      matchesStatus = selectedStatus.includes(form.status);
    }

    let matchesRequiredAction = true;
    if (selectedRequiredAction.length > 0) {
      matchesRequiredAction = selectedRequiredAction.some((action) =>
        form.requiredAction.includes(action),
      );
    }

    return (
      matchesSearchText && matchesDate && matchesStatus && matchesRequiredAction
    );
  });
};

export default filterData;
