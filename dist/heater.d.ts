export declare class Heater {
    private readonly crawler;
    private readonly generator;
    private errorsCounter;
    constructor(url: string, user?: string | null, password?: string | null);
    process(): Promise<unknown>;
    errorHandler(error: any): Promise<void>;
}
