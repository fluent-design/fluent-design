import * as React from 'react';
import Banner from './Banner';
import Footer from '../Layout/Footer';
import './index.less';

function getStyle() {
  return `
    .rc-footer-container {
      padding-left: 0;
      padding-right: 0;
    }

    .rc-footer-columns {
      max-width: 1208px;
      margin: 0 auto;
    }
  `;
}

const Home = (props: { location: any }) => {
  const { location } = props;

  return (
    <div className="home-container">
      <style dangerouslySetInnerHTML={{ __html: getStyle() }} />
      <Banner location={location} />
      <Footer location={location} />
    </div>
  );
};

export default Home;
