import type { Request, Response, NextFunction } from "express";
export declare class FarmController {
    static createFarm(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    static getAllFarms(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=farm.controller.d.ts.map