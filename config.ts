const ipifyUrl = process.env.NEXT_PUBLIC_IPIFY_ADDRESS;
const ipifyApiKey = process.env.NEXT_PUBLIC_IPIFY_KEY;

const Config: object = {
  ipifyUrl,
  ipifyApiKey,
}

export default Config;
