import React, { useState } from 'react';
import filterData from './utils/filterData';
import { Form } from './types/types';
import { formsData } from './data/data';
import FormDetails from './components/FormDetails';
import Filters from './components/Filters';
import { RightOutlined } from '@ant-design/icons';
import { Table, Space, Button, Layout, Tag } from 'antd';
import dayjs from 'dayjs';
import { StatusTag, TagVariants } from './components/StatusTag';
import { Content } from 'antd/es/layout/layout';

const App: React.FC = () => {
  const [selectedForm, setSelectedForm] = useState<Form | null>(null);
  const [filters, setFilters] = useState({
    searchText: '',
    selectedDate: '',
    selectedStatus: [] as string[],
    selectedRequiredAction: [] as string[],
  });

  const handleFiltersChange = (updatedFilters: any) => {
    setFilters({ ...filters, ...updatedFilters });
  };

  const handleFormClick = (record: Form) => {
    if (record) {
      setSelectedForm(record);
    }
  };

  const handleBackClick = () => {
    setSelectedForm(null);
  };

  const filteredDataSource = filterData(
    formsData,
    filters.searchText,
    filters.selectedDate,
    filters.selectedStatus,
    filters.selectedRequiredAction,
  );

  const columns = [
    {
      title: 'Form Name',
      dataIndex: 'formName',
      key: 'formName',
    },
    {
      title: 'Reference No',
      dataIndex: 'referenceNo',
      key: 'referenceNo',
    },
    {
      title: 'Created',
      dataIndex: 'created',
      key: 'created',
      render: (text: string, record: Form) =>
        dayjs(text).format('YYYY-MM-DD HH:mm'),
    },
    {
      title: 'Deadline',
      dataIndex: 'deadline',
      key: 'deadline',
      render: (text: string, record: Form) =>
        dayjs(text).format('YYYY-MM-DD HH:mm'),
    },
    {
      title: 'Modified By',
      dataIndex: 'modifiedBy',
      key: 'modifiedBy',
    },
    {
      title: 'Last Modification Date',
      dataIndex: 'lastModificationDate',
      key: 'lastModificationDate',
      render: (text: string, record: Form) =>
        dayjs(text).format('YYYY-MM-DD HH:mm'),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: TagVariants) => <StatusTag content={status} />,
    },
    {
      title: 'Required Action',
      dataIndex: 'requiredAction',
      key: 'requiredAction',
      render: (requiredAction: string[]) => (
        <>
          {requiredAction.map((action) => (
            <Tag key={action}>{action}</Tag>
          ))}
        </>
      ),
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
      render: (text: string, record: Form) => (
        <Button shape="circle" onClick={() => handleFormClick(record)}>
          <RightOutlined />
        </Button>
      ),
    },
  ];

  return (
    <Layout style={{ background: 'white' }}>
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
        }}
      >
        <h1>Forms List</h1>
        {selectedForm ? (
          <FormDetails form={selectedForm} onBack={handleBackClick} />
        ) : (
          <>
            <Space
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <Filters onChange={handleFiltersChange} />
              <Button type="primary">Add form</Button>
            </Space>
            <Table
              dataSource={filteredDataSource}
              columns={columns}
              rowKey="referenceNo"
              pagination={false}
            />
          </>
        )}
      </Content>
    </Layout>
  );
};

export default App;
