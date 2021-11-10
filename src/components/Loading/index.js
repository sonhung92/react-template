import React from 'react';
import { useSelector } from 'react-redux';
import { Dimmer, Loader } from 'semantic-ui-react';
import { hiddenScrollOnBody } from 'common/utils';
import { isLoadingSelector } from 'store/modules/app/selector';

const LoaderManager = () => {
  const isLoading = useSelector(isLoadingSelector);
  hiddenScrollOnBody(isLoading);
  return (
    <>
      {isLoading && (
        <Dimmer active>
          <Loader />
        </Dimmer>
      )}
    </>
  );
};

export default LoaderManager;
