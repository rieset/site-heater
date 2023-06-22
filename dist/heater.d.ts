export declare class Heater {
    private crawler;
    private sitemap;
    private generator;
    constructor(url: string);
    process(): Promise<unknown>;
    processor(options: any, done: any): Promise<void>;
    addHandler(url: any): Promise<void>;
    errorHandler(error: any): Promise<void>;
}
