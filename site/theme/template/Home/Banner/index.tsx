import * as React from 'react';
import { Button } from 'antd';
import { Link } from 'bisheng/router';
import { FormattedMessage, useIntl } from 'react-intl';
import { PlayCircleFilled } from '@ant-design/icons';
import Background from './Background';
import { getLocalizedPathname } from '../../utils';

import './index.less';

const Banner = (props: { location: any }) => {
  const { location } = props;
  const { locale } = useIntl();
  const isZhCN = locale === 'zh-CN';

  return (
    <div className="home-banner">
      <Background />

      <div className="home-banner-holder">
        <div className="home-banner-content">
          <h1>Fluent Design</h1>

          <a className="banner-video">
            <PlayCircleFilled /> <FormattedMessage id="app.home.play-video" />
          </a>

          <div className="home-banner-content-operations">
            <Link to={getLocalizedPathname('/components/overview/', isZhCN, location.query)}>
              <Button type="primary" shape="round" style={{ backgroundColor: '#0078d4' }}>
                <FormattedMessage id="app.home.getting-started" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
