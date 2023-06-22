const Generator = require('sitemap-generator');

export class Heater {

  private readonly crawler: any;
  private readonly generator: any;

  private errorsCounter = 0;

  constructor (url: string) {
    this.generator = Generator(url, {
      filepath: "./sitemap.xml",
      stripQuerystring: true,
      priorityMap: [1.0, 0.8, 0.6, 0.4, 0.2, 0],
      changeFreq: "daily",
      maxDepth: 10,
      timeout: 99999999,
      queueItem: 1,
      userAgent: 'site-heater',
    });
    this.crawler = this.generator.getCrawler();

    this.generator.on('error', this.errorHandler.bind(this))

    this.crawler.on("fetchcomplete", function(queueItem, responseBuffer, response) {
      console.log("\nStatus: %d\tLatency %ds\tDownload %ds\tRequest %ds", queueItem?.stateData?.code, queueItem?.stateData?.requestLatency / 1000, queueItem?.stateData?.downloadTime / 1000, queueItem?.stateData?.requestTime / 1000);
      console.log("Page %s", queueItem.url);
    });
  }

  public process() {
    return new Promise((resolve, reject) => {
      this.generator.on('done', () => {
        if (this.errorsCounter > 0) {
          reject(false);
        }
        resolve(true);
      })
      this.generator.start();
    })
  }

  public async errorHandler(error) {
    // this.crawler
    this.crawler.queueURL(error.url, undefined, false)
    this.errorsCounter++;
    console.log(error);
  }
}
