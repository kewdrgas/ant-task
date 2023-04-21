import React from 'react';
import { Input, DatePicker, Select, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import dayjs, { Dayjs } from 'dayjs';

interface FiltersProps {
  onChange: (updatedFilters: any) => void;
}

const Filters: React.FC<FiltersProps> = ({ onChange }) => {
  const handleSearchTextChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    onChange({ searchText: event.target.value });
  };

  const handleDateChange = (date: Dayjs | null, dateString: string) => {
    onChange({ selectedDate: dateString });
  };

  const handleStatusChange = (values: string[]) => {
    onChange({ selectedStatus: values });
  };

  const handleRequiredActionChange = (values: string[]) => {
    onChange({ selectedRequiredAction: values });
  };

  return (
    <Space style={{ marginBottom: 16 }}>
      <Input
        placeholder="Search by form name"
        prefix={<SearchOutlined />}
        onChange={handleSearchTextChange}
      />
      <DatePicker
        placeholder="Select date"
        onChange={(date: Dayjs | null, dateString: string) =>
          handleDateChange(date, dateString)
        }
      />
      <Select
        mode="multiple"
        placeholder="Select statuses"
        style={{ minWidth: 180 }}
        onChange={handleStatusChange}
        options={[
          { value: 'Approved', label: 'Approved' },
          { value: 'In Progress', label: 'In Progress' },
          { value: 'Created', label: 'Created' },
        ]}
      />
      <Select
        mode="multiple"
        placeholder="Select required actions"
        style={{ minWidth: 210 }}
        onChange={handleRequiredActionChange}
        options={[
          { value: 'Quality', label: 'Quality' },
          { value: 'Operator', label: 'Operator' },
          { value: 'Action 3', label: 'Action 3' },
        ]}
      />
    </Space>
  );
};

export default Filters;
