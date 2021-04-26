const ipifyUrl = process.env.NEXT_PUBLIC_IPIFY_ADDRESS;
const ipifyApiKey = process.env.NEXT_PUBLIC_IPIFY_KEY;

type ConfigProps = {
  ipifyUrl: string,
  ipifyApiKey: string,
};

const Config:ConfigProps = {
  ipifyUrl,
  ipifyApiKey,
}

export default Config;
