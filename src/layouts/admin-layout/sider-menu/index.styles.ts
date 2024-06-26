import { BaseMenu } from '@/components/common/base-menu';
import styled from 'styled-components';

export const Menu = styled(BaseMenu)`
  a {
    width: 100%;
    display: block;
  }

  .ant-menu-item.ant-menu-item-selected::after {
    border-color: var(--primary-color);
  }

  .ant-menu-item:not(:last-child),
  .ant-menu-submenu-title {
    margin-bottom: 8px;
  }
`;
