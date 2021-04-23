import Config from '../config'

const { ipifyUrl: url, ipifyApiKey: apiKey } = Config;

export const getLocationByIp:any = async (ip:string) => await fetch(`${url}?apiKey=${apiKey}&ipAddress=${ip}`)
    .then(res => res.json())
    .then(data => data);

export const getClientIp:any = async () => await fetch('https://api.ipify.org?format=json')
    .then(res => res.json())
    .then(data => {
      if (data?.ip) {
        return getLocationByIp(data.ip);
      }
    });