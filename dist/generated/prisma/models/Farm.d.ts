import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Farm
 *
 */
export type FarmModel = runtime.Types.Result.DefaultSelection<Prisma.$FarmPayload>;
export type AggregateFarm = {
    _count: FarmCountAggregateOutputType | null;
    _min: FarmMinAggregateOutputType | null;
    _max: FarmMaxAggregateOutputType | null;
};
export type FarmMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    address: string | null;
    phone: string | null;
    email: string | null;
    description: string | null;
    currency: string | null;
    createdById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FarmMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    address: string | null;
    phone: string | null;
    email: string | null;
    description: string | null;
    currency: string | null;
    createdById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FarmCountAggregateOutputType = {
    id: number;
    name: number;
    address: number;
    phone: number;
    email: number;
    description: number;
    currency: number;
    createdById: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type FarmMinAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
    phone?: true;
    email?: true;
    description?: true;
    currency?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FarmMaxAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
    phone?: true;
    email?: true;
    description?: true;
    currency?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FarmCountAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
    phone?: true;
    email?: true;
    description?: true;
    currency?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type FarmAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Farm to aggregate.
     */
    where?: Prisma.FarmWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Farms to fetch.
     */
    orderBy?: Prisma.FarmOrderByWithRelationInput | Prisma.FarmOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.FarmWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Farms from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Farms.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Farms
    **/
    _count?: true | FarmCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: FarmMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: FarmMaxAggregateInputType;
};
export type GetFarmAggregateType<T extends FarmAggregateArgs> = {
    [P in keyof T & keyof AggregateFarm]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFarm[P]> : Prisma.GetScalarType<T[P], AggregateFarm[P]>;
};
export type FarmGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FarmWhereInput;
    orderBy?: Prisma.FarmOrderByWithAggregationInput | Prisma.FarmOrderByWithAggregationInput[];
    by: Prisma.FarmScalarFieldEnum[] | Prisma.FarmScalarFieldEnum;
    having?: Prisma.FarmScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FarmCountAggregateInputType | true;
    _min?: FarmMinAggregateInputType;
    _max?: FarmMaxAggregateInputType;
};
export type FarmGroupByOutputType = {
    id: string;
    name: string;
    address: string | null;
    phone: string | null;
    email: string | null;
    description: string | null;
    currency: string;
    createdById: string;
    createdAt: Date;
    updatedAt: Date;
    _count: FarmCountAggregateOutputType | null;
    _min: FarmMinAggregateOutputType | null;
    _max: FarmMaxAggregateOutputType | null;
};
export type GetFarmGroupByPayload<T extends FarmGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FarmGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FarmGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FarmGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FarmGroupByOutputType[P]>;
}>>;
export type FarmWhereInput = {
    AND?: Prisma.FarmWhereInput | Prisma.FarmWhereInput[];
    OR?: Prisma.FarmWhereInput[];
    NOT?: Prisma.FarmWhereInput | Prisma.FarmWhereInput[];
    id?: Prisma.StringFilter<"Farm"> | string;
    name?: Prisma.StringFilter<"Farm"> | string;
    address?: Prisma.StringNullableFilter<"Farm"> | string | null;
    phone?: Prisma.StringNullableFilter<"Farm"> | string | null;
    email?: Prisma.StringNullableFilter<"Farm"> | string | null;
    description?: Prisma.StringNullableFilter<"Farm"> | string | null;
    currency?: Prisma.StringFilter<"Farm"> | string;
    createdById?: Prisma.StringFilter<"Farm"> | string;
    createdAt?: Prisma.DateTimeFilter<"Farm"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Farm"> | Date | string;
    createdBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    memberships?: Prisma.FarmMembershipListRelationFilter;
    cows?: Prisma.CowListRelationFilter;
    joinRequests?: Prisma.FarmJoinRequestListRelationFilter;
};
export type FarmOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdBy?: Prisma.UserOrderByWithRelationInput;
    memberships?: Prisma.FarmMembershipOrderByRelationAggregateInput;
    cows?: Prisma.CowOrderByRelationAggregateInput;
    joinRequests?: Prisma.FarmJoinRequestOrderByRelationAggregateInput;
};
export type FarmWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    createdById?: string;
    AND?: Prisma.FarmWhereInput | Prisma.FarmWhereInput[];
    OR?: Prisma.FarmWhereInput[];
    NOT?: Prisma.FarmWhereInput | Prisma.FarmWhereInput[];
    name?: Prisma.StringFilter<"Farm"> | string;
    address?: Prisma.StringNullableFilter<"Farm"> | string | null;
    phone?: Prisma.StringNullableFilter<"Farm"> | string | null;
    email?: Prisma.StringNullableFilter<"Farm"> | string | null;
    description?: Prisma.StringNullableFilter<"Farm"> | string | null;
    currency?: Prisma.StringFilter<"Farm"> | string;
    createdAt?: Prisma.DateTimeFilter<"Farm"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Farm"> | Date | string;
    createdBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    memberships?: Prisma.FarmMembershipListRelationFilter;
    cows?: Prisma.CowListRelationFilter;
    joinRequests?: Prisma.FarmJoinRequestListRelationFilter;
}, "id" | "createdById">;
export type FarmOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.FarmCountOrderByAggregateInput;
    _max?: Prisma.FarmMaxOrderByAggregateInput;
    _min?: Prisma.FarmMinOrderByAggregateInput;
};
export type FarmScalarWhereWithAggregatesInput = {
    AND?: Prisma.FarmScalarWhereWithAggregatesInput | Prisma.FarmScalarWhereWithAggregatesInput[];
    OR?: Prisma.FarmScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FarmScalarWhereWithAggregatesInput | Prisma.FarmScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Farm"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Farm"> | string;
    address?: Prisma.StringNullableWithAggregatesFilter<"Farm"> | string | null;
    phone?: Prisma.StringNullableWithAggregatesFilter<"Farm"> | string | null;
    email?: Prisma.StringNullableWithAggregatesFilter<"Farm"> | string | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"Farm"> | string | null;
    currency?: Prisma.StringWithAggregatesFilter<"Farm"> | string;
    createdById?: Prisma.StringWithAggregatesFilter<"Farm"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Farm"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Farm"> | Date | string;
};
export type FarmCreateInput = {
    id?: string;
    name?: string;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    description?: string | null;
    currency?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedFarmsInput;
    memberships?: Prisma.FarmMembershipCreateNestedManyWithoutFarmInput;
    cows?: Prisma.CowCreateNestedManyWithoutFarmInput;
    joinRequests?: Prisma.FarmJoinRequestCreateNestedManyWithoutFarmInput;
};
export type FarmUncheckedCreateInput = {
    id?: string;
    name?: string;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    description?: string | null;
    currency?: string;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.FarmMembershipUncheckedCreateNestedManyWithoutFarmInput;
    cows?: Prisma.CowUncheckedCreateNestedManyWithoutFarmInput;
    joinRequests?: Prisma.FarmJoinRequestUncheckedCreateNestedManyWithoutFarmInput;
};
export type FarmUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedFarmsNestedInput;
    memberships?: Prisma.FarmMembershipUpdateManyWithoutFarmNestedInput;
    cows?: Prisma.CowUpdateManyWithoutFarmNestedInput;
    joinRequests?: Prisma.FarmJoinRequestUpdateManyWithoutFarmNestedInput;
};
export type FarmUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.FarmMembershipUncheckedUpdateManyWithoutFarmNestedInput;
    cows?: Prisma.CowUncheckedUpdateManyWithoutFarmNestedInput;
    joinRequests?: Prisma.FarmJoinRequestUncheckedUpdateManyWithoutFarmNestedInput;
};
export type FarmCreateManyInput = {
    id?: string;
    name?: string;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    description?: string | null;
    currency?: string;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FarmUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FarmUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FarmListRelationFilter = {
    every?: Prisma.FarmWhereInput;
    some?: Prisma.FarmWhereInput;
    none?: Prisma.FarmWhereInput;
};
export type FarmOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FarmCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FarmMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FarmMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FarmScalarRelationFilter = {
    is?: Prisma.FarmWhereInput;
    isNot?: Prisma.FarmWhereInput;
};
export type FarmCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.FarmCreateWithoutCreatedByInput, Prisma.FarmUncheckedCreateWithoutCreatedByInput> | Prisma.FarmCreateWithoutCreatedByInput[] | Prisma.FarmUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.FarmCreateOrConnectWithoutCreatedByInput | Prisma.FarmCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.FarmCreateManyCreatedByInputEnvelope;
    connect?: Prisma.FarmWhereUniqueInput | Prisma.FarmWhereUniqueInput[];
};
export type FarmUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.FarmCreateWithoutCreatedByInput, Prisma.FarmUncheckedCreateWithoutCreatedByInput> | Prisma.FarmCreateWithoutCreatedByInput[] | Prisma.FarmUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.FarmCreateOrConnectWithoutCreatedByInput | Prisma.FarmCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.FarmCreateManyCreatedByInputEnvelope;
    connect?: Prisma.FarmWhereUniqueInput | Prisma.FarmWhereUniqueInput[];
};
export type FarmUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.FarmCreateWithoutCreatedByInput, Prisma.FarmUncheckedCreateWithoutCreatedByInput> | Prisma.FarmCreateWithoutCreatedByInput[] | Prisma.FarmUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.FarmCreateOrConnectWithoutCreatedByInput | Prisma.FarmCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.FarmUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.FarmUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.FarmCreateManyCreatedByInputEnvelope;
    set?: Prisma.FarmWhereUniqueInput | Prisma.FarmWhereUniqueInput[];
    disconnect?: Prisma.FarmWhereUniqueInput | Prisma.FarmWhereUniqueInput[];
    delete?: Prisma.FarmWhereUniqueInput | Prisma.FarmWhereUniqueInput[];
    connect?: Prisma.FarmWhereUniqueInput | Prisma.FarmWhereUniqueInput[];
    update?: Prisma.FarmUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.FarmUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.FarmUpdateManyWithWhereWithoutCreatedByInput | Prisma.FarmUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.FarmScalarWhereInput | Prisma.FarmScalarWhereInput[];
};
export type FarmUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.FarmCreateWithoutCreatedByInput, Prisma.FarmUncheckedCreateWithoutCreatedByInput> | Prisma.FarmCreateWithoutCreatedByInput[] | Prisma.FarmUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.FarmCreateOrConnectWithoutCreatedByInput | Prisma.FarmCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.FarmUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.FarmUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.FarmCreateManyCreatedByInputEnvelope;
    set?: Prisma.FarmWhereUniqueInput | Prisma.FarmWhereUniqueInput[];
    disconnect?: Prisma.FarmWhereUniqueInput | Prisma.FarmWhereUniqueInput[];
    delete?: Prisma.FarmWhereUniqueInput | Prisma.FarmWhereUniqueInput[];
    connect?: Prisma.FarmWhereUniqueInput | Prisma.FarmWhereUniqueInput[];
    update?: Prisma.FarmUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.FarmUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.FarmUpdateManyWithWhereWithoutCreatedByInput | Prisma.FarmUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.FarmScalarWhereInput | Prisma.FarmScalarWhereInput[];
};
export type FarmCreateNestedOneWithoutMembershipsInput = {
    create?: Prisma.XOR<Prisma.FarmCreateWithoutMembershipsInput, Prisma.FarmUncheckedCreateWithoutMembershipsInput>;
    connectOrCreate?: Prisma.FarmCreateOrConnectWithoutMembershipsInput;
    connect?: Prisma.FarmWhereUniqueInput;
};
export type FarmUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: Prisma.XOR<Prisma.FarmCreateWithoutMembershipsInput, Prisma.FarmUncheckedCreateWithoutMembershipsInput>;
    connectOrCreate?: Prisma.FarmCreateOrConnectWithoutMembershipsInput;
    upsert?: Prisma.FarmUpsertWithoutMembershipsInput;
    connect?: Prisma.FarmWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FarmUpdateToOneWithWhereWithoutMembershipsInput, Prisma.FarmUpdateWithoutMembershipsInput>, Prisma.FarmUncheckedUpdateWithoutMembershipsInput>;
};
export type FarmCreateNestedOneWithoutJoinRequestsInput = {
    create?: Prisma.XOR<Prisma.FarmCreateWithoutJoinRequestsInput, Prisma.FarmUncheckedCreateWithoutJoinRequestsInput>;
    connectOrCreate?: Prisma.FarmCreateOrConnectWithoutJoinRequestsInput;
    connect?: Prisma.FarmWhereUniqueInput;
};
export type FarmUpdateOneRequiredWithoutJoinRequestsNestedInput = {
    create?: Prisma.XOR<Prisma.FarmCreateWithoutJoinRequestsInput, Prisma.FarmUncheckedCreateWithoutJoinRequestsInput>;
    connectOrCreate?: Prisma.FarmCreateOrConnectWithoutJoinRequestsInput;
    upsert?: Prisma.FarmUpsertWithoutJoinRequestsInput;
    connect?: Prisma.FarmWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FarmUpdateToOneWithWhereWithoutJoinRequestsInput, Prisma.FarmUpdateWithoutJoinRequestsInput>, Prisma.FarmUncheckedUpdateWithoutJoinRequestsInput>;
};
export type FarmCreateNestedOneWithoutCowsInput = {
    create?: Prisma.XOR<Prisma.FarmCreateWithoutCowsInput, Prisma.FarmUncheckedCreateWithoutCowsInput>;
    connectOrCreate?: Prisma.FarmCreateOrConnectWithoutCowsInput;
    connect?: Prisma.FarmWhereUniqueInput;
};
export type FarmUpdateOneRequiredWithoutCowsNestedInput = {
    create?: Prisma.XOR<Prisma.FarmCreateWithoutCowsInput, Prisma.FarmUncheckedCreateWithoutCowsInput>;
    connectOrCreate?: Prisma.FarmCreateOrConnectWithoutCowsInput;
    upsert?: Prisma.FarmUpsertWithoutCowsInput;
    connect?: Prisma.FarmWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FarmUpdateToOneWithWhereWithoutCowsInput, Prisma.FarmUpdateWithoutCowsInput>, Prisma.FarmUncheckedUpdateWithoutCowsInput>;
};
export type FarmCreateWithoutCreatedByInput = {
    id?: string;
    name?: string;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    description?: string | null;
    currency?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.FarmMembershipCreateNestedManyWithoutFarmInput;
    cows?: Prisma.CowCreateNestedManyWithoutFarmInput;
    joinRequests?: Prisma.FarmJoinRequestCreateNestedManyWithoutFarmInput;
};
export type FarmUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    name?: string;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    description?: string | null;
    currency?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.FarmMembershipUncheckedCreateNestedManyWithoutFarmInput;
    cows?: Prisma.CowUncheckedCreateNestedManyWithoutFarmInput;
    joinRequests?: Prisma.FarmJoinRequestUncheckedCreateNestedManyWithoutFarmInput;
};
export type FarmCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.FarmWhereUniqueInput;
    create: Prisma.XOR<Prisma.FarmCreateWithoutCreatedByInput, Prisma.FarmUncheckedCreateWithoutCreatedByInput>;
};
export type FarmCreateManyCreatedByInputEnvelope = {
    data: Prisma.FarmCreateManyCreatedByInput | Prisma.FarmCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type FarmUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.FarmWhereUniqueInput;
    update: Prisma.XOR<Prisma.FarmUpdateWithoutCreatedByInput, Prisma.FarmUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.FarmCreateWithoutCreatedByInput, Prisma.FarmUncheckedCreateWithoutCreatedByInput>;
};
export type FarmUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.FarmWhereUniqueInput;
    data: Prisma.XOR<Prisma.FarmUpdateWithoutCreatedByInput, Prisma.FarmUncheckedUpdateWithoutCreatedByInput>;
};
export type FarmUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.FarmScalarWhereInput;
    data: Prisma.XOR<Prisma.FarmUpdateManyMutationInput, Prisma.FarmUncheckedUpdateManyWithoutCreatedByInput>;
};
export type FarmScalarWhereInput = {
    AND?: Prisma.FarmScalarWhereInput | Prisma.FarmScalarWhereInput[];
    OR?: Prisma.FarmScalarWhereInput[];
    NOT?: Prisma.FarmScalarWhereInput | Prisma.FarmScalarWhereInput[];
    id?: Prisma.StringFilter<"Farm"> | string;
    name?: Prisma.StringFilter<"Farm"> | string;
    address?: Prisma.StringNullableFilter<"Farm"> | string | null;
    phone?: Prisma.StringNullableFilter<"Farm"> | string | null;
    email?: Prisma.StringNullableFilter<"Farm"> | string | null;
    description?: Prisma.StringNullableFilter<"Farm"> | string | null;
    currency?: Prisma.StringFilter<"Farm"> | string;
    createdById?: Prisma.StringFilter<"Farm"> | string;
    createdAt?: Prisma.DateTimeFilter<"Farm"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Farm"> | Date | string;
};
export type FarmCreateWithoutMembershipsInput = {
    id?: string;
    name?: string;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    description?: string | null;
    currency?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedFarmsInput;
    cows?: Prisma.CowCreateNestedManyWithoutFarmInput;
    joinRequests?: Prisma.FarmJoinRequestCreateNestedManyWithoutFarmInput;
};
export type FarmUncheckedCreateWithoutMembershipsInput = {
    id?: string;
    name?: string;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    description?: string | null;
    currency?: string;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cows?: Prisma.CowUncheckedCreateNestedManyWithoutFarmInput;
    joinRequests?: Prisma.FarmJoinRequestUncheckedCreateNestedManyWithoutFarmInput;
};
export type FarmCreateOrConnectWithoutMembershipsInput = {
    where: Prisma.FarmWhereUniqueInput;
    create: Prisma.XOR<Prisma.FarmCreateWithoutMembershipsInput, Prisma.FarmUncheckedCreateWithoutMembershipsInput>;
};
export type FarmUpsertWithoutMembershipsInput = {
    update: Prisma.XOR<Prisma.FarmUpdateWithoutMembershipsInput, Prisma.FarmUncheckedUpdateWithoutMembershipsInput>;
    create: Prisma.XOR<Prisma.FarmCreateWithoutMembershipsInput, Prisma.FarmUncheckedCreateWithoutMembershipsInput>;
    where?: Prisma.FarmWhereInput;
};
export type FarmUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: Prisma.FarmWhereInput;
    data: Prisma.XOR<Prisma.FarmUpdateWithoutMembershipsInput, Prisma.FarmUncheckedUpdateWithoutMembershipsInput>;
};
export type FarmUpdateWithoutMembershipsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedFarmsNestedInput;
    cows?: Prisma.CowUpdateManyWithoutFarmNestedInput;
    joinRequests?: Prisma.FarmJoinRequestUpdateManyWithoutFarmNestedInput;
};
export type FarmUncheckedUpdateWithoutMembershipsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cows?: Prisma.CowUncheckedUpdateManyWithoutFarmNestedInput;
    joinRequests?: Prisma.FarmJoinRequestUncheckedUpdateManyWithoutFarmNestedInput;
};
export type FarmCreateWithoutJoinRequestsInput = {
    id?: string;
    name?: string;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    description?: string | null;
    currency?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedFarmsInput;
    memberships?: Prisma.FarmMembershipCreateNestedManyWithoutFarmInput;
    cows?: Prisma.CowCreateNestedManyWithoutFarmInput;
};
export type FarmUncheckedCreateWithoutJoinRequestsInput = {
    id?: string;
    name?: string;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    description?: string | null;
    currency?: string;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.FarmMembershipUncheckedCreateNestedManyWithoutFarmInput;
    cows?: Prisma.CowUncheckedCreateNestedManyWithoutFarmInput;
};
export type FarmCreateOrConnectWithoutJoinRequestsInput = {
    where: Prisma.FarmWhereUniqueInput;
    create: Prisma.XOR<Prisma.FarmCreateWithoutJoinRequestsInput, Prisma.FarmUncheckedCreateWithoutJoinRequestsInput>;
};
export type FarmUpsertWithoutJoinRequestsInput = {
    update: Prisma.XOR<Prisma.FarmUpdateWithoutJoinRequestsInput, Prisma.FarmUncheckedUpdateWithoutJoinRequestsInput>;
    create: Prisma.XOR<Prisma.FarmCreateWithoutJoinRequestsInput, Prisma.FarmUncheckedCreateWithoutJoinRequestsInput>;
    where?: Prisma.FarmWhereInput;
};
export type FarmUpdateToOneWithWhereWithoutJoinRequestsInput = {
    where?: Prisma.FarmWhereInput;
    data: Prisma.XOR<Prisma.FarmUpdateWithoutJoinRequestsInput, Prisma.FarmUncheckedUpdateWithoutJoinRequestsInput>;
};
export type FarmUpdateWithoutJoinRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedFarmsNestedInput;
    memberships?: Prisma.FarmMembershipUpdateManyWithoutFarmNestedInput;
    cows?: Prisma.CowUpdateManyWithoutFarmNestedInput;
};
export type FarmUncheckedUpdateWithoutJoinRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.FarmMembershipUncheckedUpdateManyWithoutFarmNestedInput;
    cows?: Prisma.CowUncheckedUpdateManyWithoutFarmNestedInput;
};
export type FarmCreateWithoutCowsInput = {
    id?: string;
    name?: string;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    description?: string | null;
    currency?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedFarmsInput;
    memberships?: Prisma.FarmMembershipCreateNestedManyWithoutFarmInput;
    joinRequests?: Prisma.FarmJoinRequestCreateNestedManyWithoutFarmInput;
};
export type FarmUncheckedCreateWithoutCowsInput = {
    id?: string;
    name?: string;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    description?: string | null;
    currency?: string;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.FarmMembershipUncheckedCreateNestedManyWithoutFarmInput;
    joinRequests?: Prisma.FarmJoinRequestUncheckedCreateNestedManyWithoutFarmInput;
};
export type FarmCreateOrConnectWithoutCowsInput = {
    where: Prisma.FarmWhereUniqueInput;
    create: Prisma.XOR<Prisma.FarmCreateWithoutCowsInput, Prisma.FarmUncheckedCreateWithoutCowsInput>;
};
export type FarmUpsertWithoutCowsInput = {
    update: Prisma.XOR<Prisma.FarmUpdateWithoutCowsInput, Prisma.FarmUncheckedUpdateWithoutCowsInput>;
    create: Prisma.XOR<Prisma.FarmCreateWithoutCowsInput, Prisma.FarmUncheckedCreateWithoutCowsInput>;
    where?: Prisma.FarmWhereInput;
};
export type FarmUpdateToOneWithWhereWithoutCowsInput = {
    where?: Prisma.FarmWhereInput;
    data: Prisma.XOR<Prisma.FarmUpdateWithoutCowsInput, Prisma.FarmUncheckedUpdateWithoutCowsInput>;
};
export type FarmUpdateWithoutCowsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedFarmsNestedInput;
    memberships?: Prisma.FarmMembershipUpdateManyWithoutFarmNestedInput;
    joinRequests?: Prisma.FarmJoinRequestUpdateManyWithoutFarmNestedInput;
};
export type FarmUncheckedUpdateWithoutCowsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.FarmMembershipUncheckedUpdateManyWithoutFarmNestedInput;
    joinRequests?: Prisma.FarmJoinRequestUncheckedUpdateManyWithoutFarmNestedInput;
};
export type FarmCreateManyCreatedByInput = {
    id?: string;
    name?: string;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    description?: string | null;
    currency?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FarmUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.FarmMembershipUpdateManyWithoutFarmNestedInput;
    cows?: Prisma.CowUpdateManyWithoutFarmNestedInput;
    joinRequests?: Prisma.FarmJoinRequestUpdateManyWithoutFarmNestedInput;
};
export type FarmUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.FarmMembershipUncheckedUpdateManyWithoutFarmNestedInput;
    cows?: Prisma.CowUncheckedUpdateManyWithoutFarmNestedInput;
    joinRequests?: Prisma.FarmJoinRequestUncheckedUpdateManyWithoutFarmNestedInput;
};
export type FarmUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type FarmCountOutputType
 */
export type FarmCountOutputType = {
    memberships: number;
    cows: number;
    joinRequests: number;
};
export type FarmCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    memberships?: boolean | FarmCountOutputTypeCountMembershipsArgs;
    cows?: boolean | FarmCountOutputTypeCountCowsArgs;
    joinRequests?: boolean | FarmCountOutputTypeCountJoinRequestsArgs;
};
/**
 * FarmCountOutputType without action
 */
export type FarmCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmCountOutputType
     */
    select?: Prisma.FarmCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * FarmCountOutputType without action
 */
export type FarmCountOutputTypeCountMembershipsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FarmMembershipWhereInput;
};
/**
 * FarmCountOutputType without action
 */
export type FarmCountOutputTypeCountCowsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CowWhereInput;
};
/**
 * FarmCountOutputType without action
 */
export type FarmCountOutputTypeCountJoinRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FarmJoinRequestWhereInput;
};
export type FarmSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    address?: boolean;
    phone?: boolean;
    email?: boolean;
    description?: boolean;
    currency?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    memberships?: boolean | Prisma.Farm$membershipsArgs<ExtArgs>;
    cows?: boolean | Prisma.Farm$cowsArgs<ExtArgs>;
    joinRequests?: boolean | Prisma.Farm$joinRequestsArgs<ExtArgs>;
    _count?: boolean | Prisma.FarmCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["farm"]>;
export type FarmSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    address?: boolean;
    phone?: boolean;
    email?: boolean;
    description?: boolean;
    currency?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["farm"]>;
export type FarmSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    address?: boolean;
    phone?: boolean;
    email?: boolean;
    description?: boolean;
    currency?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["farm"]>;
export type FarmSelectScalar = {
    id?: boolean;
    name?: boolean;
    address?: boolean;
    phone?: boolean;
    email?: boolean;
    description?: boolean;
    currency?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type FarmOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "address" | "phone" | "email" | "description" | "currency" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["farm"]>;
export type FarmInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    memberships?: boolean | Prisma.Farm$membershipsArgs<ExtArgs>;
    cows?: boolean | Prisma.Farm$cowsArgs<ExtArgs>;
    joinRequests?: boolean | Prisma.Farm$joinRequestsArgs<ExtArgs>;
    _count?: boolean | Prisma.FarmCountOutputTypeDefaultArgs<ExtArgs>;
};
export type FarmIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type FarmIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $FarmPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Farm";
    objects: {
        createdBy: Prisma.$UserPayload<ExtArgs>;
        memberships: Prisma.$FarmMembershipPayload<ExtArgs>[];
        cows: Prisma.$CowPayload<ExtArgs>[];
        joinRequests: Prisma.$FarmJoinRequestPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        address: string | null;
        phone: string | null;
        email: string | null;
        description: string | null;
        currency: string;
        createdById: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["farm"]>;
    composites: {};
};
export type FarmGetPayload<S extends boolean | null | undefined | FarmDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FarmPayload, S>;
export type FarmCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FarmFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FarmCountAggregateInputType | true;
};
export interface FarmDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Farm'];
        meta: {
            name: 'Farm';
        };
    };
    /**
     * Find zero or one Farm that matches the filter.
     * @param {FarmFindUniqueArgs} args - Arguments to find a Farm
     * @example
     * // Get one Farm
     * const farm = await prisma.farm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FarmFindUniqueArgs>(args: Prisma.SelectSubset<T, FarmFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FarmClient<runtime.Types.Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Farm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FarmFindUniqueOrThrowArgs} args - Arguments to find a Farm
     * @example
     * // Get one Farm
     * const farm = await prisma.farm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FarmFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FarmFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FarmClient<runtime.Types.Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Farm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmFindFirstArgs} args - Arguments to find a Farm
     * @example
     * // Get one Farm
     * const farm = await prisma.farm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FarmFindFirstArgs>(args?: Prisma.SelectSubset<T, FarmFindFirstArgs<ExtArgs>>): Prisma.Prisma__FarmClient<runtime.Types.Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Farm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmFindFirstOrThrowArgs} args - Arguments to find a Farm
     * @example
     * // Get one Farm
     * const farm = await prisma.farm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FarmFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FarmFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FarmClient<runtime.Types.Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Farms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Farms
     * const farms = await prisma.farm.findMany()
     *
     * // Get first 10 Farms
     * const farms = await prisma.farm.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const farmWithIdOnly = await prisma.farm.findMany({ select: { id: true } })
     *
     */
    findMany<T extends FarmFindManyArgs>(args?: Prisma.SelectSubset<T, FarmFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Farm.
     * @param {FarmCreateArgs} args - Arguments to create a Farm.
     * @example
     * // Create one Farm
     * const Farm = await prisma.farm.create({
     *   data: {
     *     // ... data to create a Farm
     *   }
     * })
     *
     */
    create<T extends FarmCreateArgs>(args: Prisma.SelectSubset<T, FarmCreateArgs<ExtArgs>>): Prisma.Prisma__FarmClient<runtime.Types.Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Farms.
     * @param {FarmCreateManyArgs} args - Arguments to create many Farms.
     * @example
     * // Create many Farms
     * const farm = await prisma.farm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FarmCreateManyArgs>(args?: Prisma.SelectSubset<T, FarmCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Farms and returns the data saved in the database.
     * @param {FarmCreateManyAndReturnArgs} args - Arguments to create many Farms.
     * @example
     * // Create many Farms
     * const farm = await prisma.farm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Farms and only return the `id`
     * const farmWithIdOnly = await prisma.farm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FarmCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FarmCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Farm.
     * @param {FarmDeleteArgs} args - Arguments to delete one Farm.
     * @example
     * // Delete one Farm
     * const Farm = await prisma.farm.delete({
     *   where: {
     *     // ... filter to delete one Farm
     *   }
     * })
     *
     */
    delete<T extends FarmDeleteArgs>(args: Prisma.SelectSubset<T, FarmDeleteArgs<ExtArgs>>): Prisma.Prisma__FarmClient<runtime.Types.Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Farm.
     * @param {FarmUpdateArgs} args - Arguments to update one Farm.
     * @example
     * // Update one Farm
     * const farm = await prisma.farm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FarmUpdateArgs>(args: Prisma.SelectSubset<T, FarmUpdateArgs<ExtArgs>>): Prisma.Prisma__FarmClient<runtime.Types.Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Farms.
     * @param {FarmDeleteManyArgs} args - Arguments to filter Farms to delete.
     * @example
     * // Delete a few Farms
     * const { count } = await prisma.farm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FarmDeleteManyArgs>(args?: Prisma.SelectSubset<T, FarmDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Farms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Farms
     * const farm = await prisma.farm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FarmUpdateManyArgs>(args: Prisma.SelectSubset<T, FarmUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Farms and returns the data updated in the database.
     * @param {FarmUpdateManyAndReturnArgs} args - Arguments to update many Farms.
     * @example
     * // Update many Farms
     * const farm = await prisma.farm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Farms and only return the `id`
     * const farmWithIdOnly = await prisma.farm.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends FarmUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FarmUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Farm.
     * @param {FarmUpsertArgs} args - Arguments to update or create a Farm.
     * @example
     * // Update or create a Farm
     * const farm = await prisma.farm.upsert({
     *   create: {
     *     // ... data to create a Farm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Farm we want to update
     *   }
     * })
     */
    upsert<T extends FarmUpsertArgs>(args: Prisma.SelectSubset<T, FarmUpsertArgs<ExtArgs>>): Prisma.Prisma__FarmClient<runtime.Types.Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Farms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmCountArgs} args - Arguments to filter Farms to count.
     * @example
     * // Count the number of Farms
     * const count = await prisma.farm.count({
     *   where: {
     *     // ... the filter for the Farms we want to count
     *   }
     * })
    **/
    count<T extends FarmCountArgs>(args?: Prisma.Subset<T, FarmCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FarmCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Farm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FarmAggregateArgs>(args: Prisma.Subset<T, FarmAggregateArgs>): Prisma.PrismaPromise<GetFarmAggregateType<T>>;
    /**
     * Group by Farm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends FarmGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FarmGroupByArgs['orderBy'];
    } : {
        orderBy?: FarmGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FarmGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFarmGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Farm model
     */
    readonly fields: FarmFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Farm.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__FarmClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    createdBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    memberships<T extends Prisma.Farm$membershipsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Farm$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FarmMembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    cows<T extends Prisma.Farm$cowsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Farm$cowsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    joinRequests<T extends Prisma.Farm$joinRequestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Farm$joinRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FarmJoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Farm model
 */
export interface FarmFieldRefs {
    readonly id: Prisma.FieldRef<"Farm", 'String'>;
    readonly name: Prisma.FieldRef<"Farm", 'String'>;
    readonly address: Prisma.FieldRef<"Farm", 'String'>;
    readonly phone: Prisma.FieldRef<"Farm", 'String'>;
    readonly email: Prisma.FieldRef<"Farm", 'String'>;
    readonly description: Prisma.FieldRef<"Farm", 'String'>;
    readonly currency: Prisma.FieldRef<"Farm", 'String'>;
    readonly createdById: Prisma.FieldRef<"Farm", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Farm", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Farm", 'DateTime'>;
}
/**
 * Farm findUnique
 */
export type FarmFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: Prisma.FarmSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Farm
     */
    omit?: Prisma.FarmOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmInclude<ExtArgs> | null;
    /**
     * Filter, which Farm to fetch.
     */
    where: Prisma.FarmWhereUniqueInput;
};
/**
 * Farm findUniqueOrThrow
 */
export type FarmFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: Prisma.FarmSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Farm
     */
    omit?: Prisma.FarmOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmInclude<ExtArgs> | null;
    /**
     * Filter, which Farm to fetch.
     */
    where: Prisma.FarmWhereUniqueInput;
};
/**
 * Farm findFirst
 */
export type FarmFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: Prisma.FarmSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Farm
     */
    omit?: Prisma.FarmOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmInclude<ExtArgs> | null;
    /**
     * Filter, which Farm to fetch.
     */
    where?: Prisma.FarmWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Farms to fetch.
     */
    orderBy?: Prisma.FarmOrderByWithRelationInput | Prisma.FarmOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Farms.
     */
    cursor?: Prisma.FarmWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Farms from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Farms.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Farms.
     */
    distinct?: Prisma.FarmScalarFieldEnum | Prisma.FarmScalarFieldEnum[];
};
/**
 * Farm findFirstOrThrow
 */
export type FarmFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: Prisma.FarmSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Farm
     */
    omit?: Prisma.FarmOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmInclude<ExtArgs> | null;
    /**
     * Filter, which Farm to fetch.
     */
    where?: Prisma.FarmWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Farms to fetch.
     */
    orderBy?: Prisma.FarmOrderByWithRelationInput | Prisma.FarmOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Farms.
     */
    cursor?: Prisma.FarmWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Farms from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Farms.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Farms.
     */
    distinct?: Prisma.FarmScalarFieldEnum | Prisma.FarmScalarFieldEnum[];
};
/**
 * Farm findMany
 */
export type FarmFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: Prisma.FarmSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Farm
     */
    omit?: Prisma.FarmOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmInclude<ExtArgs> | null;
    /**
     * Filter, which Farms to fetch.
     */
    where?: Prisma.FarmWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Farms to fetch.
     */
    orderBy?: Prisma.FarmOrderByWithRelationInput | Prisma.FarmOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Farms.
     */
    cursor?: Prisma.FarmWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Farms from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Farms.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Farms.
     */
    distinct?: Prisma.FarmScalarFieldEnum | Prisma.FarmScalarFieldEnum[];
};
/**
 * Farm create
 */
export type FarmCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: Prisma.FarmSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Farm
     */
    omit?: Prisma.FarmOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmInclude<ExtArgs> | null;
    /**
     * The data needed to create a Farm.
     */
    data: Prisma.XOR<Prisma.FarmCreateInput, Prisma.FarmUncheckedCreateInput>;
};
/**
 * Farm createMany
 */
export type FarmCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Farms.
     */
    data: Prisma.FarmCreateManyInput | Prisma.FarmCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Farm createManyAndReturn
 */
export type FarmCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: Prisma.FarmSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Farm
     */
    omit?: Prisma.FarmOmit<ExtArgs> | null;
    /**
     * The data used to create many Farms.
     */
    data: Prisma.FarmCreateManyInput | Prisma.FarmCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Farm update
 */
export type FarmUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: Prisma.FarmSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Farm
     */
    omit?: Prisma.FarmOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmInclude<ExtArgs> | null;
    /**
     * The data needed to update a Farm.
     */
    data: Prisma.XOR<Prisma.FarmUpdateInput, Prisma.FarmUncheckedUpdateInput>;
    /**
     * Choose, which Farm to update.
     */
    where: Prisma.FarmWhereUniqueInput;
};
/**
 * Farm updateMany
 */
export type FarmUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Farms.
     */
    data: Prisma.XOR<Prisma.FarmUpdateManyMutationInput, Prisma.FarmUncheckedUpdateManyInput>;
    /**
     * Filter which Farms to update
     */
    where?: Prisma.FarmWhereInput;
    /**
     * Limit how many Farms to update.
     */
    limit?: number;
};
/**
 * Farm updateManyAndReturn
 */
export type FarmUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: Prisma.FarmSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Farm
     */
    omit?: Prisma.FarmOmit<ExtArgs> | null;
    /**
     * The data used to update Farms.
     */
    data: Prisma.XOR<Prisma.FarmUpdateManyMutationInput, Prisma.FarmUncheckedUpdateManyInput>;
    /**
     * Filter which Farms to update
     */
    where?: Prisma.FarmWhereInput;
    /**
     * Limit how many Farms to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Farm upsert
 */
export type FarmUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: Prisma.FarmSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Farm
     */
    omit?: Prisma.FarmOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmInclude<ExtArgs> | null;
    /**
     * The filter to search for the Farm to update in case it exists.
     */
    where: Prisma.FarmWhereUniqueInput;
    /**
     * In case the Farm found by the `where` argument doesn't exist, create a new Farm with this data.
     */
    create: Prisma.XOR<Prisma.FarmCreateInput, Prisma.FarmUncheckedCreateInput>;
    /**
     * In case the Farm was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.FarmUpdateInput, Prisma.FarmUncheckedUpdateInput>;
};
/**
 * Farm delete
 */
export type FarmDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: Prisma.FarmSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Farm
     */
    omit?: Prisma.FarmOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmInclude<ExtArgs> | null;
    /**
     * Filter which Farm to delete.
     */
    where: Prisma.FarmWhereUniqueInput;
};
/**
 * Farm deleteMany
 */
export type FarmDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Farms to delete
     */
    where?: Prisma.FarmWhereInput;
    /**
     * Limit how many Farms to delete.
     */
    limit?: number;
};
/**
 * Farm.memberships
 */
export type Farm$membershipsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmMembership
     */
    select?: Prisma.FarmMembershipSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FarmMembership
     */
    omit?: Prisma.FarmMembershipOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmMembershipInclude<ExtArgs> | null;
    where?: Prisma.FarmMembershipWhereInput;
    orderBy?: Prisma.FarmMembershipOrderByWithRelationInput | Prisma.FarmMembershipOrderByWithRelationInput[];
    cursor?: Prisma.FarmMembershipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FarmMembershipScalarFieldEnum | Prisma.FarmMembershipScalarFieldEnum[];
};
/**
 * Farm.cows
 */
export type Farm$cowsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cow
     */
    select?: Prisma.CowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cow
     */
    omit?: Prisma.CowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CowInclude<ExtArgs> | null;
    where?: Prisma.CowWhereInput;
    orderBy?: Prisma.CowOrderByWithRelationInput | Prisma.CowOrderByWithRelationInput[];
    cursor?: Prisma.CowWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CowScalarFieldEnum | Prisma.CowScalarFieldEnum[];
};
/**
 * Farm.joinRequests
 */
export type Farm$joinRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmJoinRequest
     */
    select?: Prisma.FarmJoinRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FarmJoinRequest
     */
    omit?: Prisma.FarmJoinRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmJoinRequestInclude<ExtArgs> | null;
    where?: Prisma.FarmJoinRequestWhereInput;
    orderBy?: Prisma.FarmJoinRequestOrderByWithRelationInput | Prisma.FarmJoinRequestOrderByWithRelationInput[];
    cursor?: Prisma.FarmJoinRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FarmJoinRequestScalarFieldEnum | Prisma.FarmJoinRequestScalarFieldEnum[];
};
/**
 * Farm without action
 */
export type FarmDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: Prisma.FarmSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Farm
     */
    omit?: Prisma.FarmOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmInclude<ExtArgs> | null;
};
//# sourceMappingURL=Farm.d.ts.map