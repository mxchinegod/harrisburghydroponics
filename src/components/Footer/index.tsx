import { GithubOutlined, CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Tag, Space } from 'antd';
import { health } from '@/services/user/index';
import React, { useEffect, useState } from 'react';

const Footer: React.FC = () => {
  const intl = useIntl();
  const [healthStatus, setHealth] = useState({});
  const healthCheck = async () => {
    health().then((data) => {
      setHealth(data);
    });
  };

  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: '蚂蚁集团体验技术部出品',
  });

  const currentYear = new Date().getFullYear();
  useEffect(() => {
    healthCheck();
  }, []);
  return (
    <>
      <DefaultFooter
        style={{
          background: 'none',
        }}
        copyright={`${currentYear} ${defaultMessage}`}
        links={[
          {
            key: 'HarrisburgHydroponics',
            title: `HarrisburgHydroponics 3.0.1-beta`,
            href: 'https://harrisburghydroponics.com',
            blankTarget: true,
          },
        ]}
      />
      <Space
        align="center"
        style={{
          verticalAlign: 'middle',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '100%',
          paddingBottom: 10,
          marginTop: -15,
        }}
      >
      </Space>
    </>
  );
};

export default Footer;
