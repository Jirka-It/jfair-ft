//const BASE_URL = 'https://sasha.jirka.co:10070/sasha-gateway/ms-jsugad/api/v1/';
//
//export const environment =
//{
//  production: false,
//  API_V1: BASE_URL,
//};
const BASE_URL = 'https://www.cotelco.org:9090/jpms-gateway';
const BASE_URL_JSIH = 'http://ec2-18-189-26-135.us-east-2.compute.amazonaws.com:8085';
const OAUTH_URL = 'https://www.cotelco.org:8083/jsih-oauth-server';
const BASE_URL_RATE = 'https://www.cotelco.org:9090/jpms-gateway/ms-rate';



export const environment = {
  production: false,
  oauthServer : OAUTH_URL,
  testServer: BASE_URL + '/directory/',
  API_URL: BASE_URL+'/ms-jpms',
  API_URL_JSIH: BASE_URL_JSIH + '/jsih',
  API_URL_RATE: BASE_URL_RATE,
  csocial_URL: 'https://materialdesignicons.com/',
  votation_URL: 'http://localhost:7896/jvote',
  portalBase_URL: 'http://localhost:4200',
  route_votation: '/votation-party/dashboard'

};
