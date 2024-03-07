import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './index.styles';
import { SidebarNavigationItem, sidebarNavigation } from './menu.utils';

interface SiderContentProps {
  setCollapsed: (isCollapsed: boolean) => void;
}

const sidebarNavFlat = sidebarNavigation.reduce(
  (result: SidebarNavigationItem[], current) =>
    result.concat(current.children && current.children.length > 0 ? current.children : current),
  []
);

const SiderMenu: React.FC<SiderContentProps> = ({ setCollapsed }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const currentMenuItem = sidebarNavFlat.find(({ url }) => url === router.pathname);
  const defaultSelectedKeys = currentMenuItem ? [currentMenuItem.key] : [];

  const openedSubmenu = sidebarNavigation.find(({ children }) =>
    children?.some(({ url }) => url === router.pathname)
  );
  const defaultOpenKeys = openedSubmenu ? [openedSubmenu.key] : [];

  return (
    <S.Menu
      mode="inline"
      defaultSelectedKeys={defaultSelectedKeys}
      defaultOpenKeys={defaultOpenKeys}
      onClick={() => setCollapsed(true)}
      items={sidebarNavigation.map((nav) => {
        const isSubMenu = nav.children?.length;

        return {
          key: nav.key,
          title: t(nav.title),
          label: isSubMenu ? t(nav.title) : <Link href={nav.url || ''}>{t(nav.title)}</Link>,
          icon: nav.icon,
          children:
            isSubMenu &&
            nav.children &&
            nav.children.map((childNav) => ({
              key: childNav.key,
              label: <Link href={childNav.url || ''}>{t(childNav.title)}</Link>,
              title: t(childNav.title),
            })),
        };
      })}
    />
  );
};

export default SiderMenu;
