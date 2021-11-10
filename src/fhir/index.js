/* eslint-disable  */
const mkFhir = require('fhir.js');

export const client = mkFhir({
  baseUrl: 'http://test.fhir.org/r4',
});

client
  .search({ type: 'Patient', query: { birthdate: '1974' } })
  .then(function (res) {
    const bundle = res.data;
    const count = (bundle.entry && bundle.entry.length) || 0;
  })
  .catch(function (res) {
    //Error responses
    if (res.status) {
    }

    //Errors
    if (res.message) {
    }
  });
