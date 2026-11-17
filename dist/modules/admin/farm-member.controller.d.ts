import type { Request, Response } from "express";
export declare class FarmMemberController {
    static getEligibleUsers(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static addMember(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static getMembers(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    private static getMembershipId;
    static updateRole(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static updateStatus(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static removeMember(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    private static handleError;
}
//# sourceMappingURL=farm-member.controller.d.ts.map