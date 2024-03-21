import EyeIcon from '@/assets/images/svg/eye.svg';
import { DATE_FORMAT, Priority } from '@/constants';
import { useGetUsers } from '@/hooks/features/useUsers';
import { IParams, IUser, Pagination } from '@/interfaces';
import { BaseOptionType, DefaultOptionType } from 'antd/es/select';
import { ColumnsType } from 'antd/es/table';
import dayjs from 'dayjs';
import { pickBy } from 'lodash';
import { useTranslation } from 'next-i18next';
import { useMemo, useState } from 'react';

interface UserTableState {
  data: IUser[];
  pagination: Pagination;
}

export interface Tag {
  value: string;
  priority: Priority;
}

interface Utils {
  loading: boolean;
  params: IParams;
  tableData: UserTableState;
  dataDownload: IUser[];
  loadingDownload: boolean;
  options: (BaseOptionType | DefaultOptionType)[];
  columns: ColumnsType<IUser>;
  handleParamsChange: (key: string, value: unknown) => void;
  handleTableChange: (pagination: Pagination) => void;
}

const initialPagination: Pagination = {
  current: 1,
  pageSize: 10,
};

const inittialParams = {
  page: 1,
  pageSize: initialPagination.pageSize,
  sortBy: null,
  sortField: '',
  search: '',
  filterUser: 'fullName',
};

export default function useUsers(): Utils {
  const { t } = useTranslation(['users']);
  const [params, setParams] = useState<IParams>(inittialParams);
  const { data, isLoading } = useGetUsers(pickBy(params));
  const { data: allUsers, isLoading: loadingDownload } = useGetUsers({
    page: 1,
    pageSize: data?.data?.pagination?.total,
  });

  const tableData = useMemo(() => {
    return {
      data: data?.data?.users || [],
      pagination: {
        current: Number(data?.data.pagination?.current_page) || initialPagination.current,
        pageSize: data?.data?.pagination?.per_page || initialPagination.pageSize,
        total: data?.data?.pagination?.total || initialPagination.total,
      },
    };
  }, [data]);

  const options = [
    { value: 'fullName', label: t('userManagement.name') },
    { value: 'kanaJapanese', label: t('userManagement.kanaName') },
    { value: 'companyName', label: t('userManagement.company') },
    { value: 'nationality', label: t('userManagement.country') },
  ];

  const handleTableChange = (pagination: Pagination) => {
    setParams((prev) => {
      return {
        ...prev,
        page: pagination.current,
      };
    });
  };

  const handleParamsChange = (key: string, value: unknown) => {
    setParams((prev) => {
      return { ...prev, page: 1, [key]: value };
    });
  };

  const columns: ColumnsType<IUser> = [
    {
      title: t('userManagement.id'),
      dataIndex: 'accountId',
      key: 'accountId',
      width: '5%',
      render: (text: string) => <span>{text}</span>,
    },
    {
      title: t('userManagement.name'),
      dataIndex: 'fullName',
      key: 'fullName',
      width: '10%',
    },
    {
      title: t('userManagement.kanaName'),
      dataIndex: 'kanaJapanese',
      key: 'kanaJapanese',
      width: '10%',
    },
    {
      title: t('userManagement.company'),
      dataIndex: 'companyName',
      key: 'companyName',
      width: '10%',
    },
    {
      title: t('userManagement.email'),
      dataIndex: 'email',
      key: 'email',
      width: '10%',
    },
    {
      title: t('userManagement.gender'),
      dataIndex: 'gender',
      key: 'gender',
      width: '5%',
    },
    {
      title: t('userManagement.birthday'),
      dataIndex: 'birth',
      key: 'birth',
      width: '10%',
      render: (value) => {
        return <> {dayjs(value).format(DATE_FORMAT.BASIC)}</>;
      },
    },
    {
      title: t('userManagement.country'),
      dataIndex: 'nationality',
      key: 'nationality',
      width: '10%',
    },
    {
      title: t('userManagement.shippingAddress'),
      dataIndex: 'collection_address',
      key: 'collection_address',
      width: '10%',
      render: (value) => {
        if (value.lenght > 0)
          return <>{value?.filter((item: any) => item?.is_default === true)?.address}</>;
        return <>---</>;
      },
    },
    {
      title: t('userManagement.magazineSubscription'),
      dataIndex: 'receive_mail',
      key: 'receive_mail',
      width: '10%',
      render: (value) => {
        return <> {value ? t('userManagement.yes') : t('userManagement.no')}</>;
      },
    },
    {
      title: t('userManagement.purchaseHistory'),
      dataIndex: 'purchaseHistory',
      key: 'purchaseHistory',
      width: '10%',
      render: () => (
        <div>
          <EyeIcon />
        </div>
      ),
    },
  ];

  return {
    loading: isLoading,
    params,
    options,
    tableData,
    dataDownload: allUsers?.data?.users || [],
    loadingDownload,
    columns,
    handleParamsChange,
    handleTableChange,
  };
}
