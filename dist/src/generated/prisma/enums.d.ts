export declare const FarmRole: {
    readonly OWNER: "OWNER";
    readonly PARTNER: "PARTNER";
    readonly ACCOUNTANT: "ACCOUNTANT";
    readonly MANAGER: "MANAGER";
    readonly WORKER: "WORKER";
    readonly AUDITOR: "AUDITOR";
};
export type FarmRole = (typeof FarmRole)[keyof typeof FarmRole];
export declare const MembershipStatus: {
    readonly INVITED: "INVITED";
    readonly ACTIVE: "ACTIVE";
    readonly SUSPENDED: "SUSPENDED";
    readonly LEFT: "LEFT";
};
export type MembershipStatus = (typeof MembershipStatus)[keyof typeof MembershipStatus];
export declare const JoinRequestStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
};
export type JoinRequestStatus = (typeof JoinRequestStatus)[keyof typeof JoinRequestStatus];
export declare const AccountStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
};
export type AccountStatus = (typeof AccountStatus)[keyof typeof AccountStatus];
export declare const ContributionType: {
    readonly INITIAL_CAPITAL: "INITIAL_CAPITAL";
    readonly ADDITIONAL_CAPITAL: "ADDITIONAL_CAPITAL";
};
export type ContributionType = (typeof ContributionType)[keyof typeof ContributionType];
export declare const ExpenseCategory: {
    readonly FEED: "FEED";
    readonly MEDICINE: "MEDICINE";
    readonly VETERINARY: "VETERINARY";
    readonly SALARY: "SALARY";
    readonly ELECTRICITY: "ELECTRICITY";
    readonly TRANSPORT: "TRANSPORT";
    readonly EQUIPMENT: "EQUIPMENT";
    readonly MAINTENANCE: "MAINTENANCE";
    readonly OTHER: "OTHER";
};
export type ExpenseCategory = (typeof ExpenseCategory)[keyof typeof ExpenseCategory];
export declare const RecordStatus: {
    readonly DRAFT: "DRAFT";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
    readonly VOIDED: "VOIDED";
};
export type RecordStatus = (typeof RecordStatus)[keyof typeof RecordStatus];
export declare const CowGender: {
    readonly FEMALE: "FEMALE";
    readonly MALE: "MALE";
};
export type CowGender = (typeof CowGender)[keyof typeof CowGender];
export declare const CowStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly SOLD: "SOLD";
    readonly DECEASED: "DECEASED";
    readonly TRANSFERRED: "TRANSFERRED";
};
export type CowStatus = (typeof CowStatus)[keyof typeof CowStatus];
export declare const CowStage: {
    readonly CALF: "CALF";
    readonly HEIFER: "HEIFER";
    readonly LACTATING: "LACTATING";
    readonly DRY: "DRY";
    readonly BREEDING: "BREEDING";
};
export type CowStage = (typeof CowStage)[keyof typeof CowStage];
//# sourceMappingURL=enums.d.ts.map