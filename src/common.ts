import { Heater } from "./heater";

export const heating = async (url: string): Promise<any> => {

  if (!url) {
    console.error('URL is not specified');
  } else {

    // Get config file and start process deploy
    try {
      const deployer = new Heater(url);

      await deployer.process();
      console.log('Done common');
    } catch (e) {
      console.error('URL is not exist or invalid format: \n', e.message, '\n')
    }
  }
  
  return false;
}
