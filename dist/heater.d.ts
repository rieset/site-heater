export declare class Heater {
    private crawler;
    private generator;
    constructor(url: string);
    process(): Promise<unknown>;
    errorHandler(error: any): Promise<void>;
}
