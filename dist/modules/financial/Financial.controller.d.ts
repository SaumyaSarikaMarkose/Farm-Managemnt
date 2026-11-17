import type { Request, Response } from "express";
export declare function createContribution(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getContributions(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function reviewContribution(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function createExpense(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getExpenses(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function reviewExpense(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function createExpensePayment(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getExpensePayments(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function createIncome(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getIncome(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function reviewIncome(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getPartnerInvestmentReport(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getProfitAndLossReport(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=Financial.controller.d.ts.map