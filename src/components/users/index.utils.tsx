import EyeIcon from '@/assets/images/svg/eye.svg';
import { Priority } from '@/constants';
import { BaseOptionType, DefaultOptionType } from 'antd/es/select';
import { ColumnsType } from 'antd/es/table';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';

export interface Pagination {
  current?: number;
  pageSize?: number;
  total?: number;
}

interface UserTableState {
  data: BasicTableRow[];
  pagination: Pagination;
  loading: boolean;
}

export interface Tag {
  value: string;
  priority: Priority;
}

export interface BasicTableRow {
  id: string;
  no: number;
  name: string;
  kanaName: string;
  company: string;
  email: string;
  gender: string;
  birthday: string;
  country: string;
  phoneNumber: string;
  magazineSubscription: string;
  purchaseHistory: string;
}

interface Utils {
  tableData: UserTableState;
  options: (BaseOptionType | DefaultOptionType)[];
  columns: ColumnsType<BasicTableRow>;
  handleTableChange: (pagination: Pagination) => void;
}

const initialData = [
  {
    id: '1',
    no: 1,
    name: 'Name',
    kanaName: 'Kana Name',
    company: 'Company',
    email: 'Email',
    gender: 'Gender',
    birthday: 'Birthday',
    country: 'Country',
    phoneNumber: 'Phone Number',
    magazineSubscription: 'Magazine Subscription',
    purchaseHistory: 'Purchase history',
  },
  {
    id: '2',
    no: 2,
    name: 'Name',
    kanaName: 'Kana Name',
    company: 'Company',
    email: 'Email',
    gender: 'Gender',
    birthday: 'Birthday',
    country: 'Country',
    phoneNumber: 'Phone Number',
    magazineSubscription: 'Magazine Subscription',
    purchaseHistory: 'Purchase history',
  },
];

const initialPagination: Pagination = {
  current: 1,
  pageSize: 5,
};

export default function useUsers(): Utils {
  const { t } = useTranslation(['users']);
  const [tableData] = useState<UserTableState>({
    data: initialData,
    pagination: initialPagination,
    loading: false,
  });

  const options = [{ value: 'name', label: 'Name' }];

  const handleTableChange = (pagination: Pagination) => {
    // fetch data
    console.log('🚀 ~ handleTableChange ~ pagination:', pagination);
  };

  const columns: ColumnsType<BasicTableRow> = [
    {
      title: t('userManagement.no'),
      dataIndex: 'no',
      key: 'no',
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
    },
    {
      title: t('userManagement.name'),
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: t('userManagement.kanaName'),
      dataIndex: 'kanaName',
      key: 'kanaName',
    },
    {
      title: t('userManagement.company'),
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: t('userManagement.email'),
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: t('userManagement.gender'),
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: t('userManagement.birthday'),
      dataIndex: 'birthday',
      key: 'birthday',
    },
    {
      title: t('userManagement.country'),
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: t('userManagement.phoneNumber'),
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: t('userManagement.magazineSubscription'),
      dataIndex: 'magazineSubscription',
      key: 'magazineSubscription',
    },
    {
      title: t('userManagement.purchaseHistory'),
      dataIndex: 'purchaseHistory',
      key: 'purchaseHistory',
      render: () => (
        <div>
          <EyeIcon />
        </div>
      ),
    },
  ];

  return {
    options,
    tableData,
    columns,
    handleTableChange,
  };
}
