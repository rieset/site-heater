import { Heater } from "./heater";

export const heating = async (url: string): Promise<any> => {

  if (!url) {
    console.error('URL is not specified');
  } else {
    const deployer = new Heater(url);

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
