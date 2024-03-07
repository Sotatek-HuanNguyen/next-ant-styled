import { Priority } from '@/constants';
import { useFeedback } from '@/hooks/useFeedback';
import { defineColorByPriority } from '@/utils';
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { BaseButton } from '../common/base-button';
import { BaseCol } from '../common/base-col';
import { BaseRow } from '../common/base-row';
import { BaseSpace } from '../common/base-space';
import { Status } from '../common/base-status';
import { BaseTable } from '../common/base-table';
import * as S from './index.styles';

export interface Tag {
  value: string;
  priority: Priority;
}

export interface Pagination {
  current?: number;
  pageSize?: number;
  total?: number;
}

export interface BasicTableRow {
  key: number;
  name: string;
  age: number;
  address: string;
  tags?: Tag[];
}

const initialPagination: Pagination = {
  current: 1,
  pageSize: 5,
};

const initialData = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: [
      {
        value: 'Architect',
        priority: 1,
      },
      {
        value: 'Engineer',
        priority: 2,
      },
    ],
  },
];

const Users: React.FC = () => {
  const [tableData] = useState<{
    data: BasicTableRow[];
    pagination: Pagination;
    loading: boolean;
  }>({
    data: initialData,
    pagination: initialPagination,
    loading: false,
  });
  const { t } = useTranslation();
  const { notification } = useFeedback();

  const handleTableChange = (pagination: Pagination) => {
    // fetch data
    console.log('🚀 ~ handleTableChange ~ pagination:', pagination);
  };

  const handleDeleteRow = (rowId: number) => {
    // handle delete
    console.log('🚀 ~ handleDeleteRow ~ rowId:', rowId);
  };

  const columns: ColumnsType<BasicTableRow> = [
    {
      title: t('name'),
      dataIndex: 'name',
      render: (text: string) => <span>{text}</span>,
      filterMode: 'tree',
      filterSearch: true,
      filters: [
        {
          text: t('common.firstName'),
          value: 'firstName',
          children: [
            {
              text: 'Joe',
              value: 'Joe',
            },
            {
              text: 'Pavel',
              value: 'Pavel',
            },
            {
              text: 'Jim',
              value: 'Jim',
            },
            {
              text: 'Josh',
              value: 'Josh',
            },
          ],
        },
        {
          text: t('common.lastName'),
          value: 'lastName',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
            {
              text: 'Brown',
              value: 'Brown',
            },
          ],
        },
      ],
      onFilter: (value: string | number | boolean, record: BasicTableRow) =>
        record.name.includes(value.toString()),
    },
    {
      title: t('age'),
      dataIndex: 'age',
      sorter: (a: BasicTableRow, b: BasicTableRow) => a.age - b.age,
      showSorterTooltip: false,
    },
    {
      title: t('address'),
      dataIndex: 'address',
    },
    {
      title: t('tags'),
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: Tag[]) => (
        <BaseRow gutter={[10, 10]}>
          {tags.map((tag: Tag) => {
            return (
              <BaseCol key={tag.value}>
                <Status
                  color={defineColorByPriority(tag.priority)}
                  text={tag.value.toUpperCase()}
                />
              </BaseCol>
            );
          })}
        </BaseRow>
      ),
    },
    {
      title: t('actions'),
      dataIndex: 'actions',
      width: '15%',
      render: (text: string, record: { name: string; key: number }) => {
        return (
          <BaseSpace>
            <BaseButton
              ghost
              onClick={() => {
                notification.info({ message: t('tables.inviteMessage', { name: record.name }) });
              }}
            >
              {t('invite')}
            </BaseButton>
            <BaseButton type="default" danger onClick={() => handleDeleteRow(record.key)}>
              {t('delete')}
            </BaseButton>
          </BaseSpace>
        );
      },
    },
  ];

  return (
    <S.TablesWrapper>
      <S.Card id="basic-table" title={t('Table')} padding="1.25rem 1.25rem 0">
        <BaseTable
          columns={columns}
          dataSource={tableData.data}
          pagination={tableData.pagination}
          loading={tableData.loading}
          onChange={handleTableChange}
          scroll={{ x: 800 }}
          bordered
        />
      </S.Card>
    </S.TablesWrapper>
  );
};

export default Users;
