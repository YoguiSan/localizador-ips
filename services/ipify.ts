import Config from '../config'

const { ipifyUrl: url, ipifyApiKey: apiKey } = Config;

export const getLocationByIp = async (ip:string):Promise<any> => await fetch(`${url}?apiKey=${apiKey}&ipAddress=${ip}`)
    .then(res => res.json())
    .then(data => data)
    .catch(e => e);

export const getClientIp = async ():Promise<any> => await fetch('https://api.ipify.org?format=json')
    .then(res => res.json())
    .then(data => {
      if (data?.ip) {
        return getLocationByIp(data.ip);
      }
    })
    .catch(e => e);