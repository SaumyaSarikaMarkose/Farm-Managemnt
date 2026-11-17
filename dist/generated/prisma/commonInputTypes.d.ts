import type * as runtime from "@prisma/client/runtime/client";
import * as $Enums from "./enums.js";
import type * as Prisma from "./internal/prismaNamespace.js";
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type EnumAccountStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | Prisma.EnumAccountStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AccountStatus[] | Prisma.ListEnumAccountStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccountStatus[] | Prisma.ListEnumAccountStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccountStatusFilter<$PrismaModel> | $Enums.AccountStatus;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type EnumAccountStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | Prisma.EnumAccountStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AccountStatus[] | Prisma.ListEnumAccountStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccountStatus[] | Prisma.ListEnumAccountStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel> | $Enums.AccountStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAccountStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAccountStatusFilter<$PrismaModel>;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type EnumFarmRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.FarmRole | Prisma.EnumFarmRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.FarmRole[] | Prisma.ListEnumFarmRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FarmRole[] | Prisma.ListEnumFarmRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFarmRoleFilter<$PrismaModel> | $Enums.FarmRole;
};
export type EnumMembershipStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MembershipStatus | Prisma.EnumMembershipStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.MembershipStatus[] | Prisma.ListEnumMembershipStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MembershipStatus[] | Prisma.ListEnumMembershipStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMembershipStatusFilter<$PrismaModel> | $Enums.MembershipStatus;
};
export type EnumFarmRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FarmRole | Prisma.EnumFarmRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.FarmRole[] | Prisma.ListEnumFarmRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FarmRole[] | Prisma.ListEnumFarmRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFarmRoleWithAggregatesFilter<$PrismaModel> | $Enums.FarmRole;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFarmRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFarmRoleFilter<$PrismaModel>;
};
export type EnumMembershipStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MembershipStatus | Prisma.EnumMembershipStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.MembershipStatus[] | Prisma.ListEnumMembershipStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MembershipStatus[] | Prisma.ListEnumMembershipStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMembershipStatusWithAggregatesFilter<$PrismaModel> | $Enums.MembershipStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMembershipStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMembershipStatusFilter<$PrismaModel>;
};
export type EnumJoinRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JoinRequestStatus | Prisma.EnumJoinRequestStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.JoinRequestStatus[] | Prisma.ListEnumJoinRequestStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.JoinRequestStatus[] | Prisma.ListEnumJoinRequestStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumJoinRequestStatusFilter<$PrismaModel> | $Enums.JoinRequestStatus;
};
export type EnumJoinRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JoinRequestStatus | Prisma.EnumJoinRequestStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.JoinRequestStatus[] | Prisma.ListEnumJoinRequestStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.JoinRequestStatus[] | Prisma.ListEnumJoinRequestStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumJoinRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.JoinRequestStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumJoinRequestStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumJoinRequestStatusFilter<$PrismaModel>;
};
export type EnumContributionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContributionType | Prisma.EnumContributionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ContributionType[] | Prisma.ListEnumContributionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ContributionType[] | Prisma.ListEnumContributionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumContributionTypeFilter<$PrismaModel> | $Enums.ContributionType;
};
export type DecimalFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type EnumRecordStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordStatus | Prisma.EnumRecordStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RecordStatus[] | Prisma.ListEnumRecordStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RecordStatus[] | Prisma.ListEnumRecordStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRecordStatusFilter<$PrismaModel> | $Enums.RecordStatus;
};
export type EnumContributionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContributionType | Prisma.EnumContributionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ContributionType[] | Prisma.ListEnumContributionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ContributionType[] | Prisma.ListEnumContributionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumContributionTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContributionType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumContributionTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumContributionTypeFilter<$PrismaModel>;
};
export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalFilter<$PrismaModel>;
};
export type EnumRecordStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordStatus | Prisma.EnumRecordStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RecordStatus[] | Prisma.ListEnumRecordStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RecordStatus[] | Prisma.ListEnumRecordStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRecordStatusWithAggregatesFilter<$PrismaModel> | $Enums.RecordStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRecordStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRecordStatusFilter<$PrismaModel>;
};
export type EnumExpenseCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseCategory | Prisma.EnumExpenseCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.ExpenseCategory[] | Prisma.ListEnumExpenseCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ExpenseCategory[] | Prisma.ListEnumExpenseCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumExpenseCategoryFilter<$PrismaModel> | $Enums.ExpenseCategory;
};
export type EnumExpenseCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseCategory | Prisma.EnumExpenseCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.ExpenseCategory[] | Prisma.ListEnumExpenseCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ExpenseCategory[] | Prisma.ListEnumExpenseCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumExpenseCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ExpenseCategory;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumExpenseCategoryFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumExpenseCategoryFilter<$PrismaModel>;
};
export type EnumCowGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.CowGender | Prisma.EnumCowGenderFieldRefInput<$PrismaModel>;
    in?: $Enums.CowGender[] | Prisma.ListEnumCowGenderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CowGender[] | Prisma.ListEnumCowGenderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCowGenderFilter<$PrismaModel> | $Enums.CowGender;
};
export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type EnumCowStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CowStatus | Prisma.EnumCowStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CowStatus[] | Prisma.ListEnumCowStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CowStatus[] | Prisma.ListEnumCowStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCowStatusFilter<$PrismaModel> | $Enums.CowStatus;
};
export type EnumCowStageFilter<$PrismaModel = never> = {
    equals?: $Enums.CowStage | Prisma.EnumCowStageFieldRefInput<$PrismaModel>;
    in?: $Enums.CowStage[] | Prisma.ListEnumCowStageFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CowStage[] | Prisma.ListEnumCowStageFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCowStageFilter<$PrismaModel> | $Enums.CowStage;
};
export type EnumCowGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CowGender | Prisma.EnumCowGenderFieldRefInput<$PrismaModel>;
    in?: $Enums.CowGender[] | Prisma.ListEnumCowGenderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CowGender[] | Prisma.ListEnumCowGenderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCowGenderWithAggregatesFilter<$PrismaModel> | $Enums.CowGender;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCowGenderFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCowGenderFilter<$PrismaModel>;
};
export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
};
export type EnumCowStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CowStatus | Prisma.EnumCowStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CowStatus[] | Prisma.ListEnumCowStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CowStatus[] | Prisma.ListEnumCowStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCowStatusWithAggregatesFilter<$PrismaModel> | $Enums.CowStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCowStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCowStatusFilter<$PrismaModel>;
};
export type EnumCowStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CowStage | Prisma.EnumCowStageFieldRefInput<$PrismaModel>;
    in?: $Enums.CowStage[] | Prisma.ListEnumCowStageFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CowStage[] | Prisma.ListEnumCowStageFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCowStageWithAggregatesFilter<$PrismaModel> | $Enums.CowStage;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCowStageFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCowStageFilter<$PrismaModel>;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type NestedEnumAccountStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | Prisma.EnumAccountStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AccountStatus[] | Prisma.ListEnumAccountStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccountStatus[] | Prisma.ListEnumAccountStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccountStatusFilter<$PrismaModel> | $Enums.AccountStatus;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | Prisma.EnumAccountStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AccountStatus[] | Prisma.ListEnumAccountStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccountStatus[] | Prisma.ListEnumAccountStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel> | $Enums.AccountStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAccountStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAccountStatusFilter<$PrismaModel>;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedEnumFarmRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.FarmRole | Prisma.EnumFarmRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.FarmRole[] | Prisma.ListEnumFarmRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FarmRole[] | Prisma.ListEnumFarmRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFarmRoleFilter<$PrismaModel> | $Enums.FarmRole;
};
export type NestedEnumMembershipStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MembershipStatus | Prisma.EnumMembershipStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.MembershipStatus[] | Prisma.ListEnumMembershipStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MembershipStatus[] | Prisma.ListEnumMembershipStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMembershipStatusFilter<$PrismaModel> | $Enums.MembershipStatus;
};
export type NestedEnumFarmRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FarmRole | Prisma.EnumFarmRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.FarmRole[] | Prisma.ListEnumFarmRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FarmRole[] | Prisma.ListEnumFarmRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFarmRoleWithAggregatesFilter<$PrismaModel> | $Enums.FarmRole;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFarmRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFarmRoleFilter<$PrismaModel>;
};
export type NestedEnumMembershipStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MembershipStatus | Prisma.EnumMembershipStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.MembershipStatus[] | Prisma.ListEnumMembershipStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MembershipStatus[] | Prisma.ListEnumMembershipStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMembershipStatusWithAggregatesFilter<$PrismaModel> | $Enums.MembershipStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMembershipStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMembershipStatusFilter<$PrismaModel>;
};
export type NestedEnumJoinRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JoinRequestStatus | Prisma.EnumJoinRequestStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.JoinRequestStatus[] | Prisma.ListEnumJoinRequestStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.JoinRequestStatus[] | Prisma.ListEnumJoinRequestStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumJoinRequestStatusFilter<$PrismaModel> | $Enums.JoinRequestStatus;
};
export type NestedEnumJoinRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JoinRequestStatus | Prisma.EnumJoinRequestStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.JoinRequestStatus[] | Prisma.ListEnumJoinRequestStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.JoinRequestStatus[] | Prisma.ListEnumJoinRequestStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumJoinRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.JoinRequestStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumJoinRequestStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumJoinRequestStatusFilter<$PrismaModel>;
};
export type NestedEnumContributionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContributionType | Prisma.EnumContributionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ContributionType[] | Prisma.ListEnumContributionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ContributionType[] | Prisma.ListEnumContributionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumContributionTypeFilter<$PrismaModel> | $Enums.ContributionType;
};
export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type NestedEnumRecordStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordStatus | Prisma.EnumRecordStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RecordStatus[] | Prisma.ListEnumRecordStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RecordStatus[] | Prisma.ListEnumRecordStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRecordStatusFilter<$PrismaModel> | $Enums.RecordStatus;
};
export type NestedEnumContributionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContributionType | Prisma.EnumContributionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ContributionType[] | Prisma.ListEnumContributionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ContributionType[] | Prisma.ListEnumContributionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumContributionTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContributionType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumContributionTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumContributionTypeFilter<$PrismaModel>;
};
export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalFilter<$PrismaModel>;
};
export type NestedEnumRecordStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordStatus | Prisma.EnumRecordStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RecordStatus[] | Prisma.ListEnumRecordStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RecordStatus[] | Prisma.ListEnumRecordStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRecordStatusWithAggregatesFilter<$PrismaModel> | $Enums.RecordStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRecordStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRecordStatusFilter<$PrismaModel>;
};
export type NestedEnumExpenseCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseCategory | Prisma.EnumExpenseCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.ExpenseCategory[] | Prisma.ListEnumExpenseCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ExpenseCategory[] | Prisma.ListEnumExpenseCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumExpenseCategoryFilter<$PrismaModel> | $Enums.ExpenseCategory;
};
export type NestedEnumExpenseCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseCategory | Prisma.EnumExpenseCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.ExpenseCategory[] | Prisma.ListEnumExpenseCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ExpenseCategory[] | Prisma.ListEnumExpenseCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumExpenseCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ExpenseCategory;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumExpenseCategoryFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumExpenseCategoryFilter<$PrismaModel>;
};
export type NestedEnumCowGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.CowGender | Prisma.EnumCowGenderFieldRefInput<$PrismaModel>;
    in?: $Enums.CowGender[] | Prisma.ListEnumCowGenderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CowGender[] | Prisma.ListEnumCowGenderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCowGenderFilter<$PrismaModel> | $Enums.CowGender;
};
export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type NestedEnumCowStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CowStatus | Prisma.EnumCowStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CowStatus[] | Prisma.ListEnumCowStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CowStatus[] | Prisma.ListEnumCowStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCowStatusFilter<$PrismaModel> | $Enums.CowStatus;
};
export type NestedEnumCowStageFilter<$PrismaModel = never> = {
    equals?: $Enums.CowStage | Prisma.EnumCowStageFieldRefInput<$PrismaModel>;
    in?: $Enums.CowStage[] | Prisma.ListEnumCowStageFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CowStage[] | Prisma.ListEnumCowStageFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCowStageFilter<$PrismaModel> | $Enums.CowStage;
};
export type NestedEnumCowGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CowGender | Prisma.EnumCowGenderFieldRefInput<$PrismaModel>;
    in?: $Enums.CowGender[] | Prisma.ListEnumCowGenderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CowGender[] | Prisma.ListEnumCowGenderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCowGenderWithAggregatesFilter<$PrismaModel> | $Enums.CowGender;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCowGenderFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCowGenderFilter<$PrismaModel>;
};
export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
};
export type NestedEnumCowStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CowStatus | Prisma.EnumCowStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CowStatus[] | Prisma.ListEnumCowStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CowStatus[] | Prisma.ListEnumCowStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCowStatusWithAggregatesFilter<$PrismaModel> | $Enums.CowStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCowStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCowStatusFilter<$PrismaModel>;
};
export type NestedEnumCowStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CowStage | Prisma.EnumCowStageFieldRefInput<$PrismaModel>;
    in?: $Enums.CowStage[] | Prisma.ListEnumCowStageFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CowStage[] | Prisma.ListEnumCowStageFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCowStageWithAggregatesFilter<$PrismaModel> | $Enums.CowStage;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCowStageFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCowStageFilter<$PrismaModel>;
};
//# sourceMappingURL=commonInputTypes.d.ts.map