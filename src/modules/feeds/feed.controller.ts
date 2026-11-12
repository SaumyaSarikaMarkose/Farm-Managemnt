
import type { Request, Response, NextFunction } from "express";
import { FeedService } from "../feeds/feed.service.js";

// Safely convert route/query parameters to strings
function getString(value: unknown): string | undefined {
  if (typeof value === "string") {
    return value;
  }

  if (Array.isArray(value) && typeof value[0] === "string") {
    return value[0];
  }

  return undefined;
}

export class FeedController {
  // CREATE FEED ITEM
  static async createItem(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await FeedService.createFeedItem(
        req.userId!,
        req.body
      );

      return res.status(201).json({
        success: true,
        message: "Feed item created successfully.",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  // UPDATE FEED ITEM
  static async updateItem(req: Request, res: Response, next: NextFunction) {
    try {
      const id = getString(req.params.id);

      if (!id) {
        return res.status(400).json({
          success: false,
          message: "Feed item ID is required.",
        });
      }

      const result = await FeedService.updateFeedItem(
        req.userId!,
        id,
        req.body
      );

      return res.status(200).json({
        success: true,
        message: "Feed item updated successfully.",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  // GET ALL INVENTORY
  static async inventory(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await FeedService.getInventory(req.userId!);

      return res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  // GET ONE FEED ITEM
  static async getItem(req: Request, res: Response, next: NextFunction) {
    try {
      const id = getString(req.params.id);

      if (!id) {
        return res.status(400).json({
          success: false,
          message: "Feed item ID is required.",
        });
      }

      const result = await FeedService.getFeedItem(req.userId!, id);

      return res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  // RECORD PURCHASE
  static async createPurchase(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const result = await FeedService.createPurchase(
        req.userId!,
        req.body
      );

      return res.status(201).json({
        success: true,
        message: "Feed purchase recorded and inventory updated.",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  // GET PURCHASE HISTORY
  static async purchases(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const result = await FeedService.getPurchases(
        req.userId!,
        getString(req.query.feedItemId),
        getString(req.query.from),
        getString(req.query.to)
      );

      return res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  // RECORD CONSUMPTION
  static async createConsumption(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const result = await FeedService.createConsumption(
        req.userId!,
        req.body
      );

      return res.status(201).json({
        success: true,
        message: "Feed consumption recorded and inventory deducted.",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  // DAILY CONSUMPTION
  static async dailyConsumption(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const date = getString(req.query.date);

      if (!date) {
        return res.status(400).json({
          success: false,
          message: "Date is required in YYYY-MM-DD format.",
        });
      }

      const result = await FeedService.getDailyConsumption(
        req.userId!,
        date
      );

      return res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  // COW CONSUMPTION HISTORY
  static async cowConsumption(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const cowId = getString(req.params.cowId);

      if (!cowId) {
        return res.status(400).json({
          success: false,
          message: "Cow ID is required.",
        });
      }

      const result = await FeedService.getCowConsumption(
        req.userId!,
        cowId,
        getString(req.query.from),
        getString(req.query.to)
      );

      return res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  // CREATE OTHER FEED EXPENSE
  static async createExpense(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const result = await FeedService.createFeedExpense(
        req.userId!,
        req.body
      );

      return res.status(201).json({
        success: true,
        message: "Feed expense recorded successfully.",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  // GET FEED EXPENSES
  static async expenses(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const result = await FeedService.getFeedExpenses(
        req.userId!,
        getString(req.query.from),
        getString(req.query.to)
      );

      return res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  // FEED REPORT
  static async report(req: Request, res: Response, next: NextFunction) {
    try {
      const from = getString(req.query.from);
      const to = getString(req.query.to);

      if (!from || !to) {
        return res.status(400).json({
          success: false,
          message: "From and to dates are required.",
        });
      }

      const result = await FeedService.getFeedReport(
        req.userId!,
        from,
        to
      );

      return res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
}
