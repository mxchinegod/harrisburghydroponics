import { outLogin } from '@/services/user/api';
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { history, useModel } from '@umijs/max';
import { Avatar, Menu, Spin } from 'antd';
import type { ItemType } from 'antd/es/menu/hooks/useItems';
import { stringify } from 'querystring';
import type { MenuInfo } from 'rc-menu/lib/interface';
import React, { useCallback } from 'react';
import { flushSync } from 'react-dom';
import HeaderDropdown from '../HeaderDropdown';
// import styles from './index.less'

export type GlobalHeaderRightProps = {
  menu?: boolean;
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu }) => {

  const menuItems: ItemType[] = [
    ...(menu
      ? [
          {
            key: 'settings',
            icon: <SettingOutlined />,
            label: 'personalSettings',
          },
          {
            type: 'divider' as const,
          },
        ]
      : [])
  ];

  const menuHeaderDropdown = <Menu selectedKeys={[]} items={menuItems} />;

  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <span>
      </span>
    </HeaderDropdown>
  );
};

export default AvatarDropdown;
