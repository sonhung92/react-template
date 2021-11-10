import React, { memo } from 'react';
import Button from 'components/Button';
import { Grid } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import { fetchErrorAPI } from 'api/error';
import { areEqualLocationKey } from 'common/hooks';

const Error = () => {
  const { t } = useTranslation();
  const handleClick = (code) => () => {
    fetchErrorAPI(code);
  };
  return (
    <Grid columns={4}>
      <Grid.Row textAlign="center">
        <Grid.Column>
          <Button primary onClick={handleClick(400)} content={t('error.fetch', { code: 400 })} />
        </Grid.Column>
        <Grid.Column>
          <Button secondary onClick={handleClick(401)} content={t('error.fetch', { code: 401 })} />
        </Grid.Column>
        <Grid.Column>
          <Button
            color="red"
            onClick={handleClick(500)}
            content={t('error.fetch', { code: 500 })}
          />
        </Grid.Column>
        <Grid.Column>
          <Button
            primary
            basic
            onClick={handleClick(404)}
            content={t('error.fetch', { code: 404 })}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default memo(Error, areEqualLocationKey);
