import * as React from 'react';
import { Link } from 'bisheng/router';
import * as utils from '../../utils';

import './Logo.less';

export interface LogoProps {
  isZhCN: boolean;
  location: any;
}

const Logo = ({ isZhCN, location }: LogoProps) => {
  return (
    <h1>
      <Link to={utils.getLocalizedPathname('/', isZhCN, location.query)} id="logo">
        <img alt="logo" src="https://avatars0.githubusercontent.com/u/74195481?s=200&v=4" />
        Fluent Design
      </Link>
    </h1>
  );
};

export default Logo;
