import SearchIcon from '@/assets/images/svg/icon-search-1.svg';
import { DATE_FORMAT } from '@/constants';
import dayjs from 'dayjs';
import { debounce } from 'lodash';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { CSVLink } from 'react-csv';

import { BaseTable } from '../common/base-table';
import * as S from './index.styles';
import useUsers from './index.utils';

const Users: React.FC = () => {
  const { t } = useTranslation(['users']);
  const {
    loading,
    params,
    options,
    columns,
    tableData,
    dataDownload,
    handleParamsChange,
    handleTableChange,
  } = useUsers();

  return (
    <S.TablesWrapper>
      <S.Card
        id="basic-table"
        title={t('userManagement.userManagement')}
        padding="1.25rem 1.25rem 0"
      >
        <S.WrapHeader>
          <S.Action>
            <S.Select
              options={options}
              value={params.filterUser}
              onChange={(option) => handleParamsChange('filterUser', option)}
            />
            <S.Input
              prefix={<SearchIcon />}
              placeholder={t('userManagement.search')}
              onChange={debounce((e) => handleParamsChange('search', e.target.value), 300)}
            />
          </S.Action>
          <CSVLink data={dataDownload} filename={'USERS' + dayjs().format(DATE_FORMAT.DATE_FULL)}>
            <S.Button type={'primary'}>{t('userManagement.export')}</S.Button>
          </CSVLink>
        </S.WrapHeader>

        <BaseTable
          columns={columns}
          rowKey={'id'}
          dataSource={tableData.data}
          pagination={tableData.pagination}
          loading={loading}
          onChange={handleTableChange}
          scroll={{ x: 800 }}
          bordered
        />
      </S.Card>
    </S.TablesWrapper>
  );
};

export default Users;
