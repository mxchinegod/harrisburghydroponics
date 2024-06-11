import { PageContainer } from '@ant-design/pro-components';
import {
  Card,
  Row,
  Button,
  Divider,
  Calendar,
  Modal,
} from 'antd';
import moment from 'moment';
moment.locale('en');
import dayjs from 'dayjs';
dayjs.locale('en');

import React, { useLayoutEffect, useState } from 'react';

/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */

const Welcome: React.FC = () => {
  const [calendarOpen, setCalendarOpen] = useState(false);

  useLayoutEffect(() => {
  }, []);
  return (
    <PageContainer>
      <Card
        style={{
          borderRadius: 8,
        }}
        title={
          <Button
            type="primary"
            onClick={() => setCalendarOpen(true)}
          >
            Growth Calendar
          </Button>
        }
      >
        <div
          style={{
            backgroundPosition: '100% -30%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '500px auto',
            backgroundImage: "url('/brain.png')",
          }}
        >
          <p
            style={{
              fontSize: '14px',
              color: 'rgba(0,0,0,0.65)',
              lineHeight: '22px',
              marginTop: 16,
              marginBottom: 32,
              width: '65%',
            }}
          >
            <Divider dashed />
          </p>
          <div className="site-card-wrapper">
            <Row gutter={24} style={{ maxHeight: '750px', overflow: 'auto' }}>
             Hello
            </Row>
          </div>
        </div>
      </Card>
      <Modal
        title="🗓️ Growth Calendar 🥬"
        centered
        footer={null}
        open={calendarOpen}
        onCancel={() => setCalendarOpen(false)}
        destroyOnClose={true}
        style={{ minWidth: '75%' }}
        maskClosable={false}
      >
        <Calendar fullscreen={true}/>
      </Modal>
    </PageContainer>
  );
};

export default Welcome;
