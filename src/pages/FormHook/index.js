import React, { useState, memo } from 'react';
import { Grid, Form } from 'semantic-ui-react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { useForm, FormProvider } from 'react-hook-form';
import Button from 'components/Button';
import Input from 'components/Form/Input';
import Select from 'components/Form/Select';
import Radio from 'components/Form/Radio';
import Checkbox from 'components/Form/Checkbox';
import TextArea from 'components/Form/TextArea';
import MultipleSelect from 'components/Form/MultipleSelect';
// import MultipleSelectCustom from 'components/Form/MultipleSelectCustom';

import { alertFnc } from 'common/utils';
import { areEqualLocationKey } from 'common/hooks';

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

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const FormExample = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const schema = Yup.object().shape({
    firstName: Yup.string().required(t('general.required')),
    lastName: Yup.string().required(t('general.required')),
    country: Yup.string().required(t('general.required')),
    isAgree: Yup.bool().oneOf([true], t('general.required')),
    multipleCountry: Yup.string().required(t('general.required')),
  });
  const defaultValues = {
    firstName: '',
    lastName: '',
    country: '',
    gender: 0,
    languages: [],
    description: '',
    isAgree: false,
    multipleCountryCustom: [],
  };
  const onSubmit = (data) => {
    setIsLoading((prevLoading) => !prevLoading);
    setTimeout(() => {
      setIsLoading((prevLoading) => !prevLoading);
      alertFnc(JSON.stringify(data));
    }, 300);
  };
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)} loading={isLoading}>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column width={6}>
              <Input label={t('form.firstName')} name="firstName" />
              <Input label={t('form.lastName')} name="lastName" />
              <Select label={t('form.country')} name="country" options={countryOptions} />
              <Radio
                name="gender"
                label={t('form.gender')}
                options={[
                  { label: t('form.male'), value: 0, name: 'genderOption' },
                  { label: t('form.feMale'), value: 1, name: 'genderOption' },
                ]}
              />
              <Checkbox
                name="languages"
                label={t('form.languages')}
                options={[
                  { label: t('form.vietnamese'), value: 'vn' },
                  { label: t('form.english'), value: 'en' },
                ]}
              />
              <TextArea label={t('form.description')} name="description" />
              <Checkbox name="isAgree" options={[{ label: t('form.terms'), value: 1 }]} />
              <MultipleSelect name="multipleCountry" options={countryOptions} />
              <MultipleSelect name="multipleCountryCustom" options={options} />
            </Grid.Column>
          </Grid.Row>
          <Button type="submit" content="Submit" primary />
        </Grid>
      </Form>
    </FormProvider>
  );
};

export default memo(FormExample, areEqualLocationKey);
