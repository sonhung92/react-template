import { difference, keys } from 'lodash';
import { warn } from 'common/utils/log';

export const bindErrorToSlack = (method, url, errors) => {
  warn(`${method.toUpperCase()} ${url}: Wrong structure data in: ${JSON.stringify(errors)}
  ---------------------------------------------------------------------------------------------
  `);
};

export const compareDiffKeys = (model, object) => difference(keys(model), keys(object));
