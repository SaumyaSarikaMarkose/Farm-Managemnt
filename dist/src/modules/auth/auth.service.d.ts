import type { RegisterInput, LoginInput } from "./auth.validation.js";
export declare function registerUser(input: RegisterInput): Promise<{
    message: string;
    user: {
        name: string;
        email: string;
        id: string;
        accountStatus: import("../../generated/prisma/enums.js").AccountStatus;
        createdAt: Date;
    };
}>;
export declare function loginUser(input: LoginInput): Promise<{
    user: {
        id: string;
        name: string;
        email: string;
        isSuperAdmin: boolean;
        accountStatus: "APPROVED";
    };
    accessToken: string;
    tokenType: string;
    expiresIn: string;
}>;
export declare function getUserProfile(userId: string): Promise<{
    name: string;
    email: string;
    id: string;
    isSuperAdmin: boolean;
    accountStatus: import("../../generated/prisma/enums.js").AccountStatus;
    createdAt: Date;
}>;
//# sourceMappingURL=auth.service.d.ts.map