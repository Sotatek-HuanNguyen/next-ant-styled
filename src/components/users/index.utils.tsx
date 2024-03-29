import EyeIcon from '@/assets/images/svg/eye.svg';
import { DATE_FORMAT } from '@/constants';
import { useGetUsers } from '@/hooks/features/useUsers';
import { IParams, IUser, Pagination } from '@/interfaces';
import { BaseOptionType, DefaultOptionType } from 'antd/es/select';
import { ColumnsType } from 'antd/es/table';
import { ColumnTitle, Key } from 'antd/es/table/interface';
import dayjs from 'dayjs';
import { pickBy } from 'lodash';
import { useTranslation } from 'next-i18next';
import { useMemo, useState } from 'react';

interface UserTableState {
  data: IUser[];
  pagination: Pagination;
}

export interface ICollum {
  label: ColumnTitle<IUser>;
  key: Key | undefined;
}

interface Utils {
  loading: boolean;
  params: IParams;
  tableData: UserTableState;
  dataDownload: IUser[];
  loadingDownload: boolean;
  options: (BaseOptionType | DefaultOptionType)[];
  columns: ColumnsType<IUser>;
  columnsCSV: ICollum[];
  getGenderName: (genderId?: number) => void;
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
    { value: 'country', label: t('userManagement.country') },
  ];

  const genders = [
    {
      id: 0,
      label: t('userManagement.genders.male'),
    },
    {
      id: 1,
      label: t('userManagement.genders.female'),
    },
    {
      id: 2,
      label: t('userManagement.genders.other'),
    },
  ];

  const getGenderName = (genderId?: number) => {
    if (!genderId) return;
    return genders.find((gender) => gender.id == genderId)?.label;
  };

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
      render: (value) => {
        console.log('value', getGenderName(value));
        return <>{getGenderName(value)}</>;
      },
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
      dataIndex: 'collection_address',
      key: 'collection_address',
      width: '10%',
      render: (value) => {
        if (value.length > 0)
          return <>{value?.find((item: any) => item?.is_default === true)?.country}</>;
        return <>---</>;
      },
    },
    {
      title: t('userManagement.shippingAddress'),
      dataIndex: 'collection_address',
      key: 'collection_address',
      width: '10%',
      render: (value) => {
        if (value.length > 0)
          return <>{value?.find((item: any) => item?.is_default === true)?.address}</>;
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

  const columnsCSV = columns
    .filter((column) => column.key !== 'purchaseHistory')
    .map((column) => {
      return {
        label: column.title,
        key: column.key,
      };
    });

  return {
    loading: isLoading,
    params,
    options,
    tableData,
    dataDownload: allUsers?.data?.users || [],
    loadingDownload,
    columns,
    columnsCSV,
    getGenderName,
    handleParamsChange,
    handleTableChange,
  };
}
