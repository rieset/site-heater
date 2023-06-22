const Generator = require('sitemap-generator');

export class Heater {

  private crawler: any;
  private generator: any;

  constructor (url: string) {
    this.generator = Generator(url, {
      filepath: "./sitemap.xml",
      stripQuerystring: true,
      priorityMap: [1.0, 0.8, 0.6, 0.4, 0.2, 0],
      changeFreq: "daily",
      maxDepth: 10,
      timeout: 999999,
      queueItem: 1,
      userAgent: 'site-heater',

    });
    this.crawler = this.generator.getCrawler();

    this.generator.on('error', this.errorHandler.bind(this))

    this.crawler.on("fetchcomplete", function(queueItem, responseBuffer, response) {
      console.log("\nStatus: %d\t\tLatency %ds\t\tDownload %ds\t\tRequest %ds\t\t", queueItem?.stateData?.code, queueItem?.stateData?.requestLatency / 1000, queueItem?.stateData?.downloadTime / 1000, queueItem?.stateData?.requestTime / 1000);
      console.log("Page %s\n", queueItem.url);
    });
  }

  public process() {
    return new Promise((resolve, reject) => {
      this.generator.on('done', () => {
        resolve(true);
      })
      this.generator.start();
    })
  }

  public async errorHandler(error) {
    console.log('error', error);
  }
}
