import React, { useEffect, useState } from 'react';
import { Result, Button, Spin } from 'antd';

import { userApi } from 'utils/api';
import { Block } from 'components';

const renderTextInfo = ({ hash, verified }) => {
  if (hash) {
    if (verified) {
      return {
        status: 'success',
        title: 'Done!',
        message: 'Account confirmed successfully!',
      };
    } else {
      return {
        status: 'error',
        title: 'Error',
        message: 'You specified a non-existent or invalid hash',
      };
    }
  } else {
    return {
      status: 'info',
      title: 'Confirm Mail',
      message: 'Account confirmation link has been sent to E-Mail.',
    };
  }
};

const CheckEmailInfo = ({ location, history }) => {
  const hash = location.search.split('hash=')[1];
  const [verified, setVerified] = useState(false);
  const [checking, setChecking] = useState(!!hash);
  const [info, setInfo] = useState(
    renderTextInfo({ hash, checking, verified })
  );

  const setStatus = ({ checking, verified }) => {
    setInfo(renderTextInfo({ hash, checking, verified }));
    setVerified(verified);
    setChecking(checking);
  };

  useEffect(() => {
    if (hash) {
      userApi
        .verifyHash(hash)
        .then(() => {
          setStatus({ verified: true, checking: false });
        })
        .catch(() => {
          setStatus({ verified: false, checking: false });
        });
    }
  }, []);

  console.log({ info, checking, verified, hash });

  return (
    <div className='verify-block'>
      <Block>
        {!checking ? (
          <Result
            status={info.status}
            title={info.title}
            subTitle={info.message}
            extra={
              info.status === 'success' &&
              verified && (
                <Button type='primary' onClick={() => history.push('/signin')}>
                  Enter
                </Button>
              )
            }
          />
        ) : (
          <div className='verify-block__loading'>
            <Spin size='large' />
          </div>
        )}
      </Block>
    </div>
  );
};

export default CheckEmailInfo;
