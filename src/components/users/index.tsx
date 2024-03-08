import SearchIcon from '@/assets/images/svg/icon-search-1.svg';
import { useTranslation } from 'next-i18next';
import React from 'react';

import { BaseTable } from '../common/base-table';
import * as S from './index.styles';
import useUsers from './index.utils';

const Users: React.FC = () => {
  const { t } = useTranslation(['users']);
  const { options, columns, tableData, handleTableChange } = useUsers();

  return (
    <S.TablesWrapper>
      <S.Card
        id="basic-table"
        title={t('userManagement.userManagement')}
        padding="1.25rem 1.25rem 0"
      >
        <S.WrapHeader>
          <S.Action>
            <S.Select options={options} />
            <S.Input prefix={<SearchIcon />} placeholder={t('userManagement.search')} />
          </S.Action>
          <S.Button type={'primary'}>{t('userManagement.export')}</S.Button>
        </S.WrapHeader>

        <BaseTable
          columns={columns}
          rowKey={'id'}
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
