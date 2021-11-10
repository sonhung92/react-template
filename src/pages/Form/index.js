import React, { lazy, memo } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button, Grid } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import { log } from 'util';
import { areEqualLocationKey } from 'common/hooks';

const InputControl = lazy(() => import('components/FormControl/InputControl'));
const SelectControl = lazy(() => import('components/FormControl/SelectControl'));
const CheckBoxControl = lazy(() => import('components/FormControl/CheckBoxControl'));
const Radio = lazy(() => import('components/FormControl/Radio'));
const TextAreaControl = lazy(() => import('components/FormControl/TextAreaControl'));

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

const FormExample = () => {
  const { t } = useTranslation();
  const initialValues = { text: '', country: '', gender: 0, textArea: '', showInfo: 0 };
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={(values) => {
        log(values);
      }}
      validationSchema={Yup.object({
        text: Yup.string().required(t('general.required')),
        country: Yup.string().required(t('general.required')),
        textArea: Yup.string().required(t('general.required')),
      })}
    >
      {() => (
        <Grid columns={2}>
          <Grid.Column>
            <Form className="ui form">
              <InputControl name="text" label={t('form.fullName')} />
              <SelectControl
                label={t('form.born')}
                name="country"
                placeholder="country"
                options={countryOptions}
              />
              <span className="font-bold">{t('form.gender')}</span>
              <Radio
                name="gender"
                options={[
                  { label: t('form.male'), value: 0, name: 'genderOption' },
                  { label: t('form.feMale'), value: 1, name: 'genderOption' },
                ]}
              />
              <CheckBoxControl
                name="showInfo"
                options={[{ label: t('form.showInformation'), value: 1 }]}
              />
              <TextAreaControl label={t('form.description')} name="textArea" />
              <Button type="submit">{t('general.submit')}</Button>
            </Form>
          </Grid.Column>
        </Grid>
      )}
    </Formik>
  );
};

export default memo(FormExample, areEqualLocationKey);
