export declare class FarmMemberService {
    static getEligibleUsers(): Promise<{
        name: string;
        email: string;
        id: string;
        createdAt: Date;
    }[]>;
    static addMember(userId: string, role: string): Promise<{
        user: {
            name: string;
            email: string;
            id: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: import("../../generated/prisma/enums.js").MembershipStatus;
        farmId: string;
        role: import("../../generated/prisma/enums.js").FarmRole;
        joinedAt: Date;
    }>;
    static getMembers(): Promise<({
        user: {
            name: string;
            email: string;
            id: string;
            accountStatus: import("../../generated/prisma/enums.js").AccountStatus;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: import("../../generated/prisma/enums.js").MembershipStatus;
        farmId: string;
        role: import("../../generated/prisma/enums.js").FarmRole;
        joinedAt: Date;
    })[]>;
    static updateRole(membershipId: string, role: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: import("../../generated/prisma/enums.js").MembershipStatus;
        farmId: string;
        role: import("../../generated/prisma/enums.js").FarmRole;
        joinedAt: Date;
    }>;
    static updateStatus(membershipId: string, status: "ACTIVE" | "SUSPENDED"): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: import("../../generated/prisma/enums.js").MembershipStatus;
        farmId: string;
        role: import("../../generated/prisma/enums.js").FarmRole;
        joinedAt: Date;
    }>;
    static removeMember(membershipId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: import("../../generated/prisma/enums.js").MembershipStatus;
        farmId: string;
        role: import("../../generated/prisma/enums.js").FarmRole;
        joinedAt: Date;
    }>;
}
//# sourceMappingURL=farm-member.service.d.ts.map