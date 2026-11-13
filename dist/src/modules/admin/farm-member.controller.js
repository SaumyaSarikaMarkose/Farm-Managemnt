import { FarmMemberService } from "./farm-member.service.js";
export class FarmMemberController {
    static async getEligibleUsers(req, res) {
        console.log("{{{{{{{{{{{{{{{{{{{{{{{[[");
        try {
            const users = await FarmMemberService.getEligibleUsers();
            return res.status(200).json({
                success: true,
                data: users,
            });
        }
        catch (error) {
            return FarmMemberController.handleError(res, error);
        }
    }
    static async addMember(req, res) {
        try {
            const { userId, role = "PARTNER" } = req.body ?? {};
            if (!userId || typeof userId !== "string") {
                return res.status(400).json({
                    success: false,
                    message: "A valid userId is required.",
                });
            }
            const member = await FarmMemberService.addMember(userId, role);
            return res.status(201).json({
                success: true,
                message: "Farm member added successfully.",
                data: member,
            });
        }
        catch (error) {
            return FarmMemberController.handleError(res, error);
        }
    }
    static async getMembers(req, res) {
        try {
            const members = await FarmMemberService.getMembers();
            return res.status(200).json({
                success: true,
                data: members,
            });
        }
        catch (error) {
            return FarmMemberController.handleError(res, error);
        }
    }
    static getMembershipId(req) {
        const membershipId = req.params.membershipId;
        if (typeof membershipId !== "string" || !membershipId.trim()) {
            throw new Error("Valid membershipId is required.");
        }
        return membershipId;
    }
    static async updateRole(req, res) {
        try {
            const { role } = req.body ?? {};
            const member = await FarmMemberService.updateRole(FarmMemberController.getMembershipId(req), role);
            return res.status(200).json({
                success: true,
                message: "Member role updated successfully.",
                data: member,
            });
        }
        catch (error) {
            return FarmMemberController.handleError(res, error);
        }
    }
    static async updateStatus(req, res) {
        try {
            const { status } = req.body ?? {};
            if (status !== "ACTIVE" && status !== "SUSPENDED") {
                return res.status(400).json({
                    success: false,
                    message: "Status must be ACTIVE or SUSPENDED.",
                });
            }
            const member = await FarmMemberService.updateStatus(FarmMemberController.getMembershipId(req), status);
            return res.status(200).json({
                success: true,
                message: "Member status updated successfully.",
                data: member,
            });
        }
        catch (error) {
            return FarmMemberController.handleError(res, error);
        }
    }
    static async removeMember(req, res) {
        try {
            const member = await FarmMemberService.removeMember(FarmMemberController.getMembershipId(req));
            return res.status(200).json({
                success: true,
                message: "Member removed from the farm.",
                data: member,
            });
        }
        catch (error) {
            return FarmMemberController.handleError(res, error);
        }
    }
    static handleError(res, error) {
        const message = error instanceof Error ? error.message : "Something went wrong.";
        const status = message.includes("not found") ? 404 :
            message.includes("already") ? 409 :
                message.includes("approved") ||
                    message.includes("OWNER") ||
                    message.includes("permission") ? 403 :
                    400;
        return res.status(status).json({
            success: false,
            message,
        });
    }
}
//# sourceMappingURL=farm-member.controller.js.map