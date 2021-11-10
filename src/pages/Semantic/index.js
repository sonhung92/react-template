import React, { useReducer, useState, memo } from 'react';
import { Button, Icon, Label, Modal, Checkbox, Confirm, Select, Grid } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import 'semantic-ui-css/semantic.min.css';
import { areEqualLocationKey } from 'common/hooks';
import {
  StyledButton,
  StyledTitle,
  StyledMarginRight,
  StyledMarginBottom,
  StyledInput,
} from './style';

const countryOptions = [
  { key: 'af', value: 'af', text: 'Afghanistan' },
  { key: 'ax', value: 'ax', text: 'Aland Islands' },
  { key: 'al', value: 'al', text: 'Albania' },
  { key: 'dz', value: 'dz', text: 'Algeria' },
  { key: 'as', value: 'as', text: 'American Samoa' },
  { key: 'ad', value: 'ad', text: 'Andorra' },
  { key: 'ao', value: 'ao', text: 'Angola' },
  { key: 'ai', value: 'ai', text: 'Anguilla' },
  { key: 'ag', value: 'ag', text: 'Antigua' },
  { key: 'ar', value: 'ar', text: 'Argentina' },
  { key: 'am', value: 'am', text: 'Armenia' },
  { key: 'aw', value: 'aw', text: 'Aruba' },
  { key: 'au', value: 'au', text: 'Australia' },
  { key: 'at', value: 'at', text: 'Austria' },
  { key: 'az', value: 'az', text: 'Azerbaijan' },
  { key: 'bs', value: 'bs', text: 'Bahamas' },
  { key: 'bh', value: 'bh', text: 'Bahrain' },
  { key: 'bd', value: 'bd', text: 'Bangladesh' },
  { key: 'bb', value: 'bb', text: 'Barbados' },
  { key: 'by', value: 'by', text: 'Belarus' },
  { key: 'be', value: 'be', text: 'Belgium' },
  { key: 'bz', value: 'bz', text: 'Belize' },
  { key: 'bj', value: 'bj', text: 'Benin' },
];

function exampleReducer(state, action) {
  switch (action.type) {
    case 'close':
      return { open: false };
    case 'open':
      return { open: true, size: action.size };
    default:
      throw new Error('Unsupported action...');
  }
}

const Semantic = () => {
  const { t } = useTranslation();
  const [state, dispatch] = useReducer(exampleReducer, {
    open: false,
    size: undefined,
  });
  const [openConfirm, setConfirmOpen] = useState(false);
  const [result, setResult] = useState('capture');
  const { open, size } = state;
  const show = () => setConfirmOpen(true);
  const handleConfirm = () => {
    setResult('confirmed');
    setConfirmOpen(false);
  };
  const handleCancel = () => {
    setResult('cancelled');
    setConfirmOpen(false);
  };

  return (
    <>
      <Grid divided>
        {/* Button */}
        <StyledTitle>{t('semantic.button.title')}</StyledTitle>
        <Grid.Row>
          <Grid.Column>
            <StyledButton content={t('semantic.button.simple')} />

            <StyledButton primary>{t('semantic.button.primary')}</StyledButton>

            <StyledButton basic color="red">
              {t('semantic.button.outline')}
            </StyledButton>

            <StyledButton animated>
              <StyledButton.Content visible>
                {t('semantic.button.registerMember')}
              </StyledButton.Content>
              <StyledButton.Content hidden>$69 {t('semantic.button.aMonth')}</StyledButton.Content>
            </StyledButton>

            <Button as="div" labelPosition="right" className="mr-20">
              <Button color="red">
                <Icon name="heart" />
                {t('semantic.button.like')}
              </Button>
              <Label as="a" basic color="red" pointing="left">
                2,048
              </Label>
            </Button>
            <StyledMarginRight />

            <Button as="div" labelPosition="right">
              <Button basic color="blue">
                <Icon name="fork" />
                {t('semantic.button.fork')}
              </Button>
              <Label as="a" basic color="blue" pointing="left">
                2,048
              </Label>
            </Button>
            <StyledMarginRight />

            <StyledButton inverted color="orange">
              {t('semantic.button.inverted')}
            </StyledButton>

            <StyledButton.Group
              buttons={[
                t('semantic.button.one'),
                t('semantic.button.two'),
                t('semantic.button.three'),
              ]}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Button.Group>
              <Button>{t('general.cancel')}</Button>
              <Button.Or />
              <Button positive>{t('general.save')}</Button>
            </Button.Group>
            <StyledMarginRight />

            <StyledButton disabled>{t('general.disabled')}</StyledButton>

            <StyledButton loading primary>
              {t('general.loading')}
            </StyledButton>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <StyledButton size="mini">{t('semantic.size.mini')}</StyledButton>
            <StyledButton size="tiny">{t('semantic.size.tiny')}</StyledButton>
            <StyledButton size="small">{t('semantic.size.small')}</StyledButton>
            <StyledButton size="medium">{t('semantic.size.medium')}</StyledButton>
            <StyledButton size="large">{t('semantic.size.large')}</StyledButton>
            <StyledButton size="big">{t('semantic.size.big')}</StyledButton>
            <StyledButton size="huge">{t('semantic.size.huge')}</StyledButton>
            <StyledButton size="massive">{t('semantic.size.massive')}</StyledButton>
          </Grid.Column>
        </Grid.Row>

        {/* Modal */}
        <StyledTitle>{t('general.modal')}</StyledTitle>
        <Grid.Row>
          <Grid.Column>
            <StyledButton onClick={() => dispatch({ type: 'open', size: 'mini' })}>
              {t('semantic.size.mini')}
            </StyledButton>
            <StyledButton onClick={() => dispatch({ type: 'open', size: 'tiny' })}>
              {t('semantic.size.tiny')}
            </StyledButton>
            <StyledButton onClick={() => dispatch({ type: 'open', size: 'small' })}>
              {t('semantic.size.small')}
            </StyledButton>
            <StyledButton onClick={() => dispatch({ type: 'open', size: 'large' })}>
              {t('semantic.size.large')}
            </StyledButton>
            <StyledButton onClick={() => dispatch({ type: 'open', size: 'fullscreen' })}>
              <Icon name="desktop" />
              {t('semantic.size.fullscreen')}
            </StyledButton>

            <Modal size={size} open={open} onClose={() => dispatch({ type: 'close' })}>
              <Modal.Header>{t('semantic.modal.header')}</Modal.Header>
              <Modal.Content>
                <p>{t('semantic.modal.content')}</p>
              </Modal.Content>
              <Modal.Actions>
                <Button negative onClick={() => dispatch({ type: 'close' })}>
                  {t('general.no')}
                </Button>
                <Button positive onClick={() => dispatch({ type: 'close' })}>
                  {t('general.yes')}
                </Button>
              </Modal.Actions>
            </Modal>
          </Grid.Column>
        </Grid.Row>

        {/* Select */}
        <StyledTitle>{t('semantic.select.title')}</StyledTitle>
        <Grid.Row>
          <Grid.Column>
            <Select placeholder={t('semantic.select.placeholder')} options={countryOptions} />
          </Grid.Column>
        </Grid.Row>

        {/* Input */}
        <StyledTitle>{t('semantic.input.title')}</StyledTitle>
        <Grid.Row>
          <Grid.Column>
            <StyledInput placeholder={`${t('general.search')}...`} />

            <StyledInput loading icon="user" placeholder={`${t('general.search')}...`} />

            <StyledInput disabled placeholder={`${t('general.search')}...`} />

            <StyledInput error placeholder={`${t('general.search')}...`} />

            <StyledInput icon="search" placeholder={`${t('general.search')}...`} />

            <StyledInput
              icon="users"
              iconPosition="left"
              placeholder={`${t('semantic.input.searchUsers')}...`}
            />
            <StyledMarginBottom />

            <StyledInput
              list="languages"
              placeholder={`${t('semantic.input.chooseLanguage')}...`}
            />
            <datalist id="languages">
              <option value="en">{t('semantic.input.english')}</option>
              <option value="vi">{t('semantic.input.vietnamese')}</option>
            </datalist>
          </Grid.Column>
        </Grid.Row>
        {/* Checkkbox */}
        <StyledTitle>{t('semantic.checkbox.title')}</StyledTitle>
        <Grid.Row>
          <Grid.Column>
            <Checkbox label={t('semantic.checkbox.makeProfile')} />
            <StyledMarginRight />
            <Checkbox toggle />
            <StyledMarginRight />
            <Checkbox radio label={t('semantic.checkbox.radioChoice')} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <StyledTitle>{t('semantic.confirm.title')}</StyledTitle>
            <p>
              {t('semantic.confirm.result')}: <em>{t(`semantic.confirm.${result}`)}</em>
            </p>
            <Button onClick={show}>{t('semantic.confirm.show')}</Button>
            <Confirm open={openConfirm} onCancel={handleCancel} onConfirm={handleConfirm} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

Semantic.propTypes = {};
Semantic.defaultProps = {};

export default memo(Semantic, areEqualLocationKey);
