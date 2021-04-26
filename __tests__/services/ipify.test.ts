import nock from 'nock';
import { getClientIp, getLocationByIp } from './../ipify';

import Config from '../../config';

const {
  ipifyApiKey,
} = Config;;

const ip = '192.168.0.1';

afterAll(() => console.log(nock.pendingMocks()));

describe('testes do Ipify', () => {
  test('obtém localização do cliente', async () => {
    nock('https://api.ipify.org')
      .get('/')
      .query({
        format: 'json',
      })
      .reply(200, {
        ip,
      });

    nock('https://geo.ipify.org')
      .get('/api/v1')
      .query({
        apiKey: ipifyApiKey,
        ipAddress: ip,
      })
      .reply(200, {
        location: 'brasil',
      });

    const request = await getClientIp();

    expect(request.location).toEqual('brasil');
  });

  test('obtém localização de um IP específico', async () => {
    nock('https://geo.ipify.org')
      .get('/api/v1')
      .query({
        apiKey: ipifyApiKey,
        ipAddress: ip,
      })
      .reply(200, {
        location: 'são paulo',
      });

    const request = await getLocationByIp(ip);

    expect(request.location).toEqual('são paulo');
  });
})