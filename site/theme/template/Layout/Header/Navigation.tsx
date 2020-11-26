import * as React from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { Link } from 'bisheng/router';
import { UnorderedListOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import * as utils from '../../utils';
import { SharedProps } from './interface';

import './Navigation.less';

export interface NavigationProps extends SharedProps {
  isMobile: boolean;
  isRTL: boolean;
  pathname: string;
  responsive: null | 'narrow' | 'crowded';
  location: { pathname: string; query: any };
  directionText: string;
  showTechUIButton: boolean;
  onLangChange: () => void;
  onDirectionChange: () => void;
}

export default ({
  isZhCN,
  isMobile,
  pathname,
  responsive,
  location,
  showTechUIButton,
  onLangChange,
}: NavigationProps) => {
  const menuMode = isMobile ? 'inline' : 'horizontal';

  const module = pathname.split('/').slice(0, -1).join('/');
  let activeMenuItem = module || 'home';

  let additional: React.ReactNode = null;
  const additionalItems = [
    <Menu.Item key="github">
      <a
        href="https://github.com/fluent-design/fluent-design"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
    </Menu.Item>,
    <Menu.Item key="switch-lang" onClick={onLangChange}>
      <FormattedMessage id="app.header.lang" />
    </Menu.Item>,
  ];

  if (isMobile) {
    additional = additionalItems;
  } else if (responsive === 'crowded') {
    additional = (
      <Menu.SubMenu key="additional" title={<UnorderedListOutlined />}>
        {additionalItems}
      </Menu.SubMenu>
    );
  }

  return (
    <Menu
      className={classNames('menu-site')}
      mode={menuMode}
      selectedKeys={[activeMenuItem]}
      id="nav"
    >
      <Menu.Item key="components">
        <Link to={utils.getLocalizedPathname('/components/overview/', isZhCN, location.query)}>
          <FormattedMessage id="app.header.menu.components" />
        </Link>
      </Menu.Item>
      {showTechUIButton && (
        <Menu.Item key="tech-ui">
          <a href="https://techui.alipay.com" target="__blank" rel="noopener noreferrer">
            TechUI
          </a>
        </Menu.Item>
      )}
      {additional}
    </Menu>
  );
};
