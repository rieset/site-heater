import { Heater } from "./heater";

export const heating = async (url: string, user: string | null = null, password: string | null = null): Promise<any> => {

  if (!url) {
    console.error('URL is not specified');
  } else {
    const deployer = new Heater(url, user, password);

    return await deployer.process()
      .then((r) => {
        process.exit(0)
        return r;
      })
      .catch((r) => {
        process.exit(1)
        return r;
      })
  }
  
  return false;
}
