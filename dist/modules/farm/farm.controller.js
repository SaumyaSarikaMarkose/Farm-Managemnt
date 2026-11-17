import { FarmService } from "./farm.service.js";
export class FarmController {
    static async createFarm(req, res, next) {
        try {
            const { name, address, phone, email, description, currency, } = req.body;
            if (!name || typeof name !== "string" || !name.trim()) {
                return res.status(400).json({
                    success: false,
                    message: "Farm name is required.",
                });
            }
            const farm = await FarmService.createFarm({
                name: name.trim(),
                address,
                phone,
                email,
                description,
                currency,
            }, req.userId);
            return res.status(201).json({
                success: true,
                message: "Farm created successfully.",
                data: farm,
            });
        }
        catch (error) {
            if (error.message === "Farm has already been initialized." ||
                error.message === "Farm already exists or admin has already created a farm.") {
                return res.status(409).json({
                    success: false,
                    message: error.message,
                });
            }
            next(error);
        }
    }
    static async getAllFarms(req, res, next) {
        try {
            const farms = await FarmService.getAllFarms();
            return res.status(200).json({
                success: true,
                data: farms,
            });
        }
        catch (error) {
            next(error);
        }
    }
}
//# sourceMappingURL=farm.controller.js.map