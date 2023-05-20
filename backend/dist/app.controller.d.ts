import { AppService } from "./app.service";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getLastItems(res: any): Promise<any>;
    getStatistics(res: any): Promise<any>;
    getReport(res: any): Promise<any>;
    getUserFromMemoryCache(): Promise<() => Promise<unknown>>;
    addUserInMemoryCache(username: string): Promise<string>;
}
