import type { Request, Response } from "express";
export declare class CowController {
    static createCow(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static getCows(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static getCowById(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static updateCow(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static updateCowStatus(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=cow.controller.d.ts.map