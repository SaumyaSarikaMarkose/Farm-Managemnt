import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model FarmJoinRequest
 *
 */
export type FarmJoinRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$FarmJoinRequestPayload>;
export type AggregateFarmJoinRequest = {
    _count: FarmJoinRequestCountAggregateOutputType | null;
    _min: FarmJoinRequestMinAggregateOutputType | null;
    _max: FarmJoinRequestMaxAggregateOutputType | null;
};
export type FarmJoinRequestMinAggregateOutputType = {
    id: string | null;
    farmId: string | null;
    userId: string | null;
    message: string | null;
    status: $Enums.JoinRequestStatus | null;
    reviewedById: string | null;
    reviewNote: string | null;
    requestedAt: Date | null;
    reviewedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FarmJoinRequestMaxAggregateOutputType = {
    id: string | null;
    farmId: string | null;
    userId: string | null;
    message: string | null;
    status: $Enums.JoinRequestStatus | null;
    reviewedById: string | null;
    reviewNote: string | null;
    requestedAt: Date | null;
    reviewedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FarmJoinRequestCountAggregateOutputType = {
    id: number;
    farmId: number;
    userId: number;
    message: number;
    status: number;
    reviewedById: number;
    reviewNote: number;
    requestedAt: number;
    reviewedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type FarmJoinRequestMinAggregateInputType = {
    id?: true;
    farmId?: true;
    userId?: true;
    message?: true;
    status?: true;
    reviewedById?: true;
    reviewNote?: true;
    requestedAt?: true;
    reviewedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FarmJoinRequestMaxAggregateInputType = {
    id?: true;
    farmId?: true;
    userId?: true;
    message?: true;
    status?: true;
    reviewedById?: true;
    reviewNote?: true;
    requestedAt?: true;
    reviewedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FarmJoinRequestCountAggregateInputType = {
    id?: true;
    farmId?: true;
    userId?: true;
    message?: true;
    status?: true;
    reviewedById?: true;
    reviewNote?: true;
    requestedAt?: true;
    reviewedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type FarmJoinRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which FarmJoinRequest to aggregate.
     */
    where?: Prisma.FarmJoinRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FarmJoinRequests to fetch.
     */
    orderBy?: Prisma.FarmJoinRequestOrderByWithRelationInput | Prisma.FarmJoinRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.FarmJoinRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FarmJoinRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FarmJoinRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned FarmJoinRequests
    **/
    _count?: true | FarmJoinRequestCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: FarmJoinRequestMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: FarmJoinRequestMaxAggregateInputType;
};
export type GetFarmJoinRequestAggregateType<T extends FarmJoinRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateFarmJoinRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFarmJoinRequest[P]> : Prisma.GetScalarType<T[P], AggregateFarmJoinRequest[P]>;
};
export type FarmJoinRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FarmJoinRequestWhereInput;
    orderBy?: Prisma.FarmJoinRequestOrderByWithAggregationInput | Prisma.FarmJoinRequestOrderByWithAggregationInput[];
    by: Prisma.FarmJoinRequestScalarFieldEnum[] | Prisma.FarmJoinRequestScalarFieldEnum;
    having?: Prisma.FarmJoinRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FarmJoinRequestCountAggregateInputType | true;
    _min?: FarmJoinRequestMinAggregateInputType;
    _max?: FarmJoinRequestMaxAggregateInputType;
};
export type FarmJoinRequestGroupByOutputType = {
    id: string;
    farmId: string;
    userId: string;
    message: string | null;
    status: $Enums.JoinRequestStatus;
    reviewedById: string | null;
    reviewNote: string | null;
    requestedAt: Date;
    reviewedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: FarmJoinRequestCountAggregateOutputType | null;
    _min: FarmJoinRequestMinAggregateOutputType | null;
    _max: FarmJoinRequestMaxAggregateOutputType | null;
};
export type GetFarmJoinRequestGroupByPayload<T extends FarmJoinRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FarmJoinRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FarmJoinRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FarmJoinRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FarmJoinRequestGroupByOutputType[P]>;
}>>;
export type FarmJoinRequestWhereInput = {
    AND?: Prisma.FarmJoinRequestWhereInput | Prisma.FarmJoinRequestWhereInput[];
    OR?: Prisma.FarmJoinRequestWhereInput[];
    NOT?: Prisma.FarmJoinRequestWhereInput | Prisma.FarmJoinRequestWhereInput[];
    id?: Prisma.StringFilter<"FarmJoinRequest"> | string;
    farmId?: Prisma.StringFilter<"FarmJoinRequest"> | string;
    userId?: Prisma.StringFilter<"FarmJoinRequest"> | string;
    message?: Prisma.StringNullableFilter<"FarmJoinRequest"> | string | null;
    status?: Prisma.EnumJoinRequestStatusFilter<"FarmJoinRequest"> | $Enums.JoinRequestStatus;
    reviewedById?: Prisma.StringNullableFilter<"FarmJoinRequest"> | string | null;
    reviewNote?: Prisma.StringNullableFilter<"FarmJoinRequest"> | string | null;
    requestedAt?: Prisma.DateTimeFilter<"FarmJoinRequest"> | Date | string;
    reviewedAt?: Prisma.DateTimeNullableFilter<"FarmJoinRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"FarmJoinRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FarmJoinRequest"> | Date | string;
    farm?: Prisma.XOR<Prisma.FarmScalarRelationFilter, Prisma.FarmWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    reviewedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type FarmJoinRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    farmId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewNote?: Prisma.SortOrderInput | Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    farm?: Prisma.FarmOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
    reviewedBy?: Prisma.UserOrderByWithRelationInput;
};
export type FarmJoinRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    farmId_userId?: Prisma.FarmJoinRequestFarmIdUserIdCompoundUniqueInput;
    AND?: Prisma.FarmJoinRequestWhereInput | Prisma.FarmJoinRequestWhereInput[];
    OR?: Prisma.FarmJoinRequestWhereInput[];
    NOT?: Prisma.FarmJoinRequestWhereInput | Prisma.FarmJoinRequestWhereInput[];
    farmId?: Prisma.StringFilter<"FarmJoinRequest"> | string;
    userId?: Prisma.StringFilter<"FarmJoinRequest"> | string;
    message?: Prisma.StringNullableFilter<"FarmJoinRequest"> | string | null;
    status?: Prisma.EnumJoinRequestStatusFilter<"FarmJoinRequest"> | $Enums.JoinRequestStatus;
    reviewedById?: Prisma.StringNullableFilter<"FarmJoinRequest"> | string | null;
    reviewNote?: Prisma.StringNullableFilter<"FarmJoinRequest"> | string | null;
    requestedAt?: Prisma.DateTimeFilter<"FarmJoinRequest"> | Date | string;
    reviewedAt?: Prisma.DateTimeNullableFilter<"FarmJoinRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"FarmJoinRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FarmJoinRequest"> | Date | string;
    farm?: Prisma.XOR<Prisma.FarmScalarRelationFilter, Prisma.FarmWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    reviewedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id" | "farmId_userId">;
export type FarmJoinRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    farmId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewNote?: Prisma.SortOrderInput | Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.FarmJoinRequestCountOrderByAggregateInput;
    _max?: Prisma.FarmJoinRequestMaxOrderByAggregateInput;
    _min?: Prisma.FarmJoinRequestMinOrderByAggregateInput;
};
export type FarmJoinRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.FarmJoinRequestScalarWhereWithAggregatesInput | Prisma.FarmJoinRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.FarmJoinRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FarmJoinRequestScalarWhereWithAggregatesInput | Prisma.FarmJoinRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"FarmJoinRequest"> | string;
    farmId?: Prisma.StringWithAggregatesFilter<"FarmJoinRequest"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"FarmJoinRequest"> | string;
    message?: Prisma.StringNullableWithAggregatesFilter<"FarmJoinRequest"> | string | null;
    status?: Prisma.EnumJoinRequestStatusWithAggregatesFilter<"FarmJoinRequest"> | $Enums.JoinRequestStatus;
    reviewedById?: Prisma.StringNullableWithAggregatesFilter<"FarmJoinRequest"> | string | null;
    reviewNote?: Prisma.StringNullableWithAggregatesFilter<"FarmJoinRequest"> | string | null;
    requestedAt?: Prisma.DateTimeWithAggregatesFilter<"FarmJoinRequest"> | Date | string;
    reviewedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"FarmJoinRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"FarmJoinRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"FarmJoinRequest"> | Date | string;
};
export type FarmJoinRequestCreateInput = {
    id?: string;
    message?: string | null;
    status?: $Enums.JoinRequestStatus;
    reviewNote?: string | null;
    requestedAt?: Date | string;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    farm: Prisma.FarmCreateNestedOneWithoutJoinRequestsInput;
    user: Prisma.UserCreateNestedOneWithoutJoinRequestsInput;
    reviewedBy?: Prisma.UserCreateNestedOneWithoutReviewedJoinRequestsInput;
};
export type FarmJoinRequestUncheckedCreateInput = {
    id?: string;
    farmId: string;
    userId: string;
    message?: string | null;
    status?: $Enums.JoinRequestStatus;
    reviewedById?: string | null;
    reviewNote?: string | null;
    requestedAt?: Date | string;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FarmJoinRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumJoinRequestStatusFieldUpdateOperationsInput | $Enums.JoinRequestStatus;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    farm?: Prisma.FarmUpdateOneRequiredWithoutJoinRequestsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutJoinRequestsNestedInput;
    reviewedBy?: Prisma.UserUpdateOneWithoutReviewedJoinRequestsNestedInput;
};
export type FarmJoinRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    farmId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumJoinRequestStatusFieldUpdateOperationsInput | $Enums.JoinRequestStatus;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FarmJoinRequestCreateManyInput = {
    id?: string;
    farmId: string;
    userId: string;
    message?: string | null;
    status?: $Enums.JoinRequestStatus;
    reviewedById?: string | null;
    reviewNote?: string | null;
    requestedAt?: Date | string;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FarmJoinRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumJoinRequestStatusFieldUpdateOperationsInput | $Enums.JoinRequestStatus;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FarmJoinRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    farmId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumJoinRequestStatusFieldUpdateOperationsInput | $Enums.JoinRequestStatus;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FarmJoinRequestListRelationFilter = {
    every?: Prisma.FarmJoinRequestWhereInput;
    some?: Prisma.FarmJoinRequestWhereInput;
    none?: Prisma.FarmJoinRequestWhereInput;
};
export type FarmJoinRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FarmJoinRequestFarmIdUserIdCompoundUniqueInput = {
    farmId: string;
    userId: string;
};
export type FarmJoinRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    farmId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrder;
    reviewNote?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FarmJoinRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    farmId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrder;
    reviewNote?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FarmJoinRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    farmId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrder;
    reviewNote?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FarmJoinRequestCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.FarmJoinRequestCreateWithoutUserInput, Prisma.FarmJoinRequestUncheckedCreateWithoutUserInput> | Prisma.FarmJoinRequestCreateWithoutUserInput[] | Prisma.FarmJoinRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FarmJoinRequestCreateOrConnectWithoutUserInput | Prisma.FarmJoinRequestCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.FarmJoinRequestCreateManyUserInputEnvelope;
    connect?: Prisma.FarmJoinRequestWhereUniqueInput | Prisma.FarmJoinRequestWhereUniqueInput[];
};
export type FarmJoinRequestCreateNestedManyWithoutReviewedByInput = {
    create?: Prisma.XOR<Prisma.FarmJoinRequestCreateWithoutReviewedByInput, Prisma.FarmJoinRequestUncheckedCreateWithoutReviewedByInput> | Prisma.FarmJoinRequestCreateWithoutReviewedByInput[] | Prisma.FarmJoinRequestUncheckedCreateWithoutReviewedByInput[];
    connectOrCreate?: Prisma.FarmJoinRequestCreateOrConnectWithoutReviewedByInput | Prisma.FarmJoinRequestCreateOrConnectWithoutReviewedByInput[];
    createMany?: Prisma.FarmJoinRequestCreateManyReviewedByInputEnvelope;
    connect?: Prisma.FarmJoinRequestWhereUniqueInput | Prisma.FarmJoinRequestWhereUniqueInput[];
};
export type FarmJoinRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.FarmJoinRequestCreateWithoutUserInput, Prisma.FarmJoinRequestUncheckedCreateWithoutUserInput> | Prisma.FarmJoinRequestCreateWithoutUserInput[] | Prisma.FarmJoinRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FarmJoinRequestCreateOrConnectWithoutUserInput | Prisma.FarmJoinRequestCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.FarmJoinRequestCreateManyUserInputEnvelope;
    connect?: Prisma.FarmJoinRequestWhereUniqueInput | Prisma.FarmJoinRequestWhereUniqueInput[];
};
export type FarmJoinRequestUncheckedCreateNestedManyWithoutReviewedByInput = {
    create?: Prisma.XOR<Prisma.FarmJoinRequestCreateWithoutReviewedByInput, Prisma.FarmJoinRequestUncheckedCreateWithoutReviewedByInput> | Prisma.FarmJoinRequestCreateWithoutReviewedByInput[] | Prisma.FarmJoinRequestUncheckedCreateWithoutReviewedByInput[];
    connectOrCreate?: Prisma.FarmJoinRequestCreateOrConnectWithoutReviewedByInput | Prisma.FarmJoinRequestCreateOrConnectWithoutReviewedByInput[];
    createMany?: Prisma.FarmJoinRequestCreateManyReviewedByInputEnvelope;
    connect?: Prisma.FarmJoinRequestWhereUniqueInput | Prisma.FarmJoinRequestWhereUniqueInput[];
};
export type FarmJoinRequestUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.FarmJoinRequestCreateWithoutUserInput, Prisma.FarmJoinRequestUncheckedCreateWithoutUserInput> | Prisma.FarmJoinRequestCreateWithoutUserInput[] | Prisma.FarmJoinRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FarmJoinRequestCreateOrConnectWithoutUserInput | Prisma.FarmJoinRequestCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.FarmJoinRequestUpsertWithWhereUniqueWithoutUserInput | Prisma.FarmJoinRequestUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.FarmJoinRequestCreateManyUserInputEnvelope;
    set?: Prisma.FarmJoinRequestWhereUniqueInput | Prisma.FarmJoinRequestWhereUniqueInput[];
    disconnect?: Prisma.FarmJoinRequestWhereUniqueInput | Prisma.FarmJoinRequestWhereUniqueInput[];
    delete?: Prisma.FarmJoinRequestWhereUniqueInput | Prisma.FarmJoinRequestWhereUniqueInput[];
    connect?: Prisma.FarmJoinRequestWhereUniqueInput | Prisma.FarmJoinRequestWhereUniqueInput[];
    update?: Prisma.FarmJoinRequestUpdateWithWhereUniqueWithoutUserInput | Prisma.FarmJoinRequestUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.FarmJoinRequestUpdateManyWithWhereWithoutUserInput | Prisma.FarmJoinRequestUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.FarmJoinRequestScalarWhereInput | Prisma.FarmJoinRequestScalarWhereInput[];
};
export type FarmJoinRequestUpdateManyWithoutReviewedByNestedInput = {
    create?: Prisma.XOR<Prisma.FarmJoinRequestCreateWithoutReviewedByInput, Prisma.FarmJoinRequestUncheckedCreateWithoutReviewedByInput> | Prisma.FarmJoinRequestCreateWithoutReviewedByInput[] | Prisma.FarmJoinRequestUncheckedCreateWithoutReviewedByInput[];
    connectOrCreate?: Prisma.FarmJoinRequestCreateOrConnectWithoutReviewedByInput | Prisma.FarmJoinRequestCreateOrConnectWithoutReviewedByInput[];
    upsert?: Prisma.FarmJoinRequestUpsertWithWhereUniqueWithoutReviewedByInput | Prisma.FarmJoinRequestUpsertWithWhereUniqueWithoutReviewedByInput[];
    createMany?: Prisma.FarmJoinRequestCreateManyReviewedByInputEnvelope;
    set?: Prisma.FarmJoinRequestWhereUniqueInput | Prisma.FarmJoinRequestWhereUniqueInput[];
    disconnect?: Prisma.FarmJoinRequestWhereUniqueInput | Prisma.FarmJoinRequestWhereUniqueInput[];
    delete?: Prisma.FarmJoinRequestWhereUniqueInput | Prisma.FarmJoinRequestWhereUniqueInput[];
    connect?: Prisma.FarmJoinRequestWhereUniqueInput | Prisma.FarmJoinRequestWhereUniqueInput[];
    update?: Prisma.FarmJoinRequestUpdateWithWhereUniqueWithoutReviewedByInput | Prisma.FarmJoinRequestUpdateWithWhereUniqueWithoutReviewedByInput[];
    updateMany?: Prisma.FarmJoinRequestUpdateManyWithWhereWithoutReviewedByInput | Prisma.FarmJoinRequestUpdateManyWithWhereWithoutReviewedByInput[];
    deleteMany?: Prisma.FarmJoinRequestScalarWhereInput | Prisma.FarmJoinRequestScalarWhereInput[];
};
export type FarmJoinRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.FarmJoinRequestCreateWithoutUserInput, Prisma.FarmJoinRequestUncheckedCreateWithoutUserInput> | Prisma.FarmJoinRequestCreateWithoutUserInput[] | Prisma.FarmJoinRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FarmJoinRequestCreateOrConnectWithoutUserInput | Prisma.FarmJoinRequestCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.FarmJoinRequestUpsertWithWhereUniqueWithoutUserInput | Prisma.FarmJoinRequestUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.FarmJoinRequestCreateManyUserInputEnvelope;
    set?: Prisma.FarmJoinRequestWhereUniqueInput | Prisma.FarmJoinRequestWhereUniqueInput[];
    disconnect?: Prisma.FarmJoinRequestWhereUniqueInput | Prisma.FarmJoinRequestWhereUniqueInput[];
    delete?: Prisma.FarmJoinRequestWhereUniqueInput | Prisma.FarmJoinRequestWhereUniqueInput[];
    connect?: Prisma.FarmJoinRequestWhereUniqueInput | Prisma.FarmJoinRequestWhereUniqueInput[];
    update?: Prisma.FarmJoinRequestUpdateWithWhereUniqueWithoutUserInput | Prisma.FarmJoinRequestUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.FarmJoinRequestUpdateManyWithWhereWithoutUserInput | Prisma.FarmJoinRequestUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.FarmJoinRequestScalarWhereInput | Prisma.FarmJoinRequestScalarWhereInput[];
};
export type FarmJoinRequestUncheckedUpdateManyWithoutReviewedByNestedInput = {
    create?: Prisma.XOR<Prisma.FarmJoinRequestCreateWithoutReviewedByInput, Prisma.FarmJoinRequestUncheckedCreateWithoutReviewedByInput> | Prisma.FarmJoinRequestCreateWithoutReviewedByInput[] | Prisma.FarmJoinRequestUncheckedCreateWithoutReviewedByInput[];
    connectOrCreate?: Prisma.FarmJoinRequestCreateOrConnectWithoutReviewedByInput | Prisma.FarmJoinRequestCreateOrConnectWithoutReviewedByInput[];
    upsert?: Prisma.FarmJoinRequestUpsertWithWhereUniqueWithoutReviewedByInput | Prisma.FarmJoinRequestUpsertWithWhereUniqueWithoutReviewedByInput[];
    createMany?: Prisma.FarmJoinRequestCreateManyReviewedByInputEnvelope;
    set?: Prisma.FarmJoinRequestWhereUniqueInput | Prisma.FarmJoinRequestWhereUniqueInput[];
    disconnect?: Prisma.FarmJoinRequestWhereUniqueInput | Prisma.FarmJoinRequestWhereUniqueInput[];
    delete?: Prisma.FarmJoinRequestWhereUniqueInput | Prisma.FarmJoinRequestWhereUniqueInput[];
    connect?: Prisma.FarmJoinRequestWhereUniqueInput | Prisma.FarmJoinRequestWhereUniqueInput[];
    update?: Prisma.FarmJoinRequestUpdateWithWhereUniqueWithoutReviewedByInput | Prisma.FarmJoinRequestUpdateWithWhereUniqueWithoutReviewedByInput[];
    updateMany?: Prisma.FarmJoinRequestUpdateManyWithWhereWithoutReviewedByInput | Prisma.FarmJoinRequestUpdateManyWithWhereWithoutReviewedByInput[];
    deleteMany?: Prisma.FarmJoinRequestScalarWhereInput | Prisma.FarmJoinRequestScalarWhereInput[];
};
export type FarmJoinRequestCreateNestedManyWithoutFarmInput = {
    create?: Prisma.XOR<Prisma.FarmJoinRequestCreateWithoutFarmInput, Prisma.FarmJoinRequestUncheckedCreateWithoutFarmInput> | Prisma.FarmJoinRequestCreateWithoutFarmInput[] | Prisma.FarmJoinRequestUncheckedCreateWithoutFarmInput[];
    connectOrCreate?: Prisma.FarmJoinRequestCreateOrConnectWithoutFarmInput | Prisma.FarmJoinRequestCreateOrConnectWithoutFarmInput[];
    createMany?: Prisma.FarmJoinRequestCreateManyFarmInputEnvelope;
    connect?: Prisma.FarmJoinRequestWhereUniqueInput | Prisma.FarmJoinRequestWhereUniqueInput[];
};
export type FarmJoinRequestUncheckedCreateNestedManyWithoutFarmInput = {
    create?: Prisma.XOR<Prisma.FarmJoinRequestCreateWithoutFarmInput, Prisma.FarmJoinRequestUncheckedCreateWithoutFarmInput> | Prisma.FarmJoinRequestCreateWithoutFarmInput[] | Prisma.FarmJoinRequestUncheckedCreateWithoutFarmInput[];
    connectOrCreate?: Prisma.FarmJoinRequestCreateOrConnectWithoutFarmInput | Prisma.FarmJoinRequestCreateOrConnectWithoutFarmInput[];
    createMany?: Prisma.FarmJoinRequestCreateManyFarmInputEnvelope;
    connect?: Prisma.FarmJoinRequestWhereUniqueInput | Prisma.FarmJoinRequestWhereUniqueInput[];
};
export type FarmJoinRequestUpdateManyWithoutFarmNestedInput = {
    create?: Prisma.XOR<Prisma.FarmJoinRequestCreateWithoutFarmInput, Prisma.FarmJoinRequestUncheckedCreateWithoutFarmInput> | Prisma.FarmJoinRequestCreateWithoutFarmInput[] | Prisma.FarmJoinRequestUncheckedCreateWithoutFarmInput[];
    connectOrCreate?: Prisma.FarmJoinRequestCreateOrConnectWithoutFarmInput | Prisma.FarmJoinRequestCreateOrConnectWithoutFarmInput[];
    upsert?: Prisma.FarmJoinRequestUpsertWithWhereUniqueWithoutFarmInput | Prisma.FarmJoinRequestUpsertWithWhereUniqueWithoutFarmInput[];
    createMany?: Prisma.FarmJoinRequestCreateManyFarmInputEnvelope;
    set?: Prisma.FarmJoinRequestWhereUniqueInput | Prisma.FarmJoinRequestWhereUniqueInput[];
    disconnect?: Prisma.FarmJoinRequestWhereUniqueInput | Prisma.FarmJoinRequestWhereUniqueInput[];
    delete?: Prisma.FarmJoinRequestWhereUniqueInput | Prisma.FarmJoinRequestWhereUniqueInput[];
    connect?: Prisma.FarmJoinRequestWhereUniqueInput | Prisma.FarmJoinRequestWhereUniqueInput[];
    update?: Prisma.FarmJoinRequestUpdateWithWhereUniqueWithoutFarmInput | Prisma.FarmJoinRequestUpdateWithWhereUniqueWithoutFarmInput[];
    updateMany?: Prisma.FarmJoinRequestUpdateManyWithWhereWithoutFarmInput | Prisma.FarmJoinRequestUpdateManyWithWhereWithoutFarmInput[];
    deleteMany?: Prisma.FarmJoinRequestScalarWhereInput | Prisma.FarmJoinRequestScalarWhereInput[];
};
export type FarmJoinRequestUncheckedUpdateManyWithoutFarmNestedInput = {
    create?: Prisma.XOR<Prisma.FarmJoinRequestCreateWithoutFarmInput, Prisma.FarmJoinRequestUncheckedCreateWithoutFarmInput> | Prisma.FarmJoinRequestCreateWithoutFarmInput[] | Prisma.FarmJoinRequestUncheckedCreateWithoutFarmInput[];
    connectOrCreate?: Prisma.FarmJoinRequestCreateOrConnectWithoutFarmInput | Prisma.FarmJoinRequestCreateOrConnectWithoutFarmInput[];
    upsert?: Prisma.FarmJoinRequestUpsertWithWhereUniqueWithoutFarmInput | Prisma.FarmJoinRequestUpsertWithWhereUniqueWithoutFarmInput[];
    createMany?: Prisma.FarmJoinRequestCreateManyFarmInputEnvelope;
    set?: Prisma.FarmJoinRequestWhereUniqueInput | Prisma.FarmJoinRequestWhereUniqueInput[];
    disconnect?: Prisma.FarmJoinRequestWhereUniqueInput | Prisma.FarmJoinRequestWhereUniqueInput[];
    delete?: Prisma.FarmJoinRequestWhereUniqueInput | Prisma.FarmJoinRequestWhereUniqueInput[];
    connect?: Prisma.FarmJoinRequestWhereUniqueInput | Prisma.FarmJoinRequestWhereUniqueInput[];
    update?: Prisma.FarmJoinRequestUpdateWithWhereUniqueWithoutFarmInput | Prisma.FarmJoinRequestUpdateWithWhereUniqueWithoutFarmInput[];
    updateMany?: Prisma.FarmJoinRequestUpdateManyWithWhereWithoutFarmInput | Prisma.FarmJoinRequestUpdateManyWithWhereWithoutFarmInput[];
    deleteMany?: Prisma.FarmJoinRequestScalarWhereInput | Prisma.FarmJoinRequestScalarWhereInput[];
};
export type EnumJoinRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.JoinRequestStatus;
};
export type FarmJoinRequestCreateWithoutUserInput = {
    id?: string;
    message?: string | null;
    status?: $Enums.JoinRequestStatus;
    reviewNote?: string | null;
    requestedAt?: Date | string;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    farm: Prisma.FarmCreateNestedOneWithoutJoinRequestsInput;
    reviewedBy?: Prisma.UserCreateNestedOneWithoutReviewedJoinRequestsInput;
};
export type FarmJoinRequestUncheckedCreateWithoutUserInput = {
    id?: string;
    farmId: string;
    message?: string | null;
    status?: $Enums.JoinRequestStatus;
    reviewedById?: string | null;
    reviewNote?: string | null;
    requestedAt?: Date | string;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FarmJoinRequestCreateOrConnectWithoutUserInput = {
    where: Prisma.FarmJoinRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.FarmJoinRequestCreateWithoutUserInput, Prisma.FarmJoinRequestUncheckedCreateWithoutUserInput>;
};
export type FarmJoinRequestCreateManyUserInputEnvelope = {
    data: Prisma.FarmJoinRequestCreateManyUserInput | Prisma.FarmJoinRequestCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type FarmJoinRequestCreateWithoutReviewedByInput = {
    id?: string;
    message?: string | null;
    status?: $Enums.JoinRequestStatus;
    reviewNote?: string | null;
    requestedAt?: Date | string;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    farm: Prisma.FarmCreateNestedOneWithoutJoinRequestsInput;
    user: Prisma.UserCreateNestedOneWithoutJoinRequestsInput;
};
export type FarmJoinRequestUncheckedCreateWithoutReviewedByInput = {
    id?: string;
    farmId: string;
    userId: string;
    message?: string | null;
    status?: $Enums.JoinRequestStatus;
    reviewNote?: string | null;
    requestedAt?: Date | string;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FarmJoinRequestCreateOrConnectWithoutReviewedByInput = {
    where: Prisma.FarmJoinRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.FarmJoinRequestCreateWithoutReviewedByInput, Prisma.FarmJoinRequestUncheckedCreateWithoutReviewedByInput>;
};
export type FarmJoinRequestCreateManyReviewedByInputEnvelope = {
    data: Prisma.FarmJoinRequestCreateManyReviewedByInput | Prisma.FarmJoinRequestCreateManyReviewedByInput[];
    skipDuplicates?: boolean;
};
export type FarmJoinRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.FarmJoinRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.FarmJoinRequestUpdateWithoutUserInput, Prisma.FarmJoinRequestUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.FarmJoinRequestCreateWithoutUserInput, Prisma.FarmJoinRequestUncheckedCreateWithoutUserInput>;
};
export type FarmJoinRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.FarmJoinRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.FarmJoinRequestUpdateWithoutUserInput, Prisma.FarmJoinRequestUncheckedUpdateWithoutUserInput>;
};
export type FarmJoinRequestUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.FarmJoinRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.FarmJoinRequestUpdateManyMutationInput, Prisma.FarmJoinRequestUncheckedUpdateManyWithoutUserInput>;
};
export type FarmJoinRequestScalarWhereInput = {
    AND?: Prisma.FarmJoinRequestScalarWhereInput | Prisma.FarmJoinRequestScalarWhereInput[];
    OR?: Prisma.FarmJoinRequestScalarWhereInput[];
    NOT?: Prisma.FarmJoinRequestScalarWhereInput | Prisma.FarmJoinRequestScalarWhereInput[];
    id?: Prisma.StringFilter<"FarmJoinRequest"> | string;
    farmId?: Prisma.StringFilter<"FarmJoinRequest"> | string;
    userId?: Prisma.StringFilter<"FarmJoinRequest"> | string;
    message?: Prisma.StringNullableFilter<"FarmJoinRequest"> | string | null;
    status?: Prisma.EnumJoinRequestStatusFilter<"FarmJoinRequest"> | $Enums.JoinRequestStatus;
    reviewedById?: Prisma.StringNullableFilter<"FarmJoinRequest"> | string | null;
    reviewNote?: Prisma.StringNullableFilter<"FarmJoinRequest"> | string | null;
    requestedAt?: Prisma.DateTimeFilter<"FarmJoinRequest"> | Date | string;
    reviewedAt?: Prisma.DateTimeNullableFilter<"FarmJoinRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"FarmJoinRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FarmJoinRequest"> | Date | string;
};
export type FarmJoinRequestUpsertWithWhereUniqueWithoutReviewedByInput = {
    where: Prisma.FarmJoinRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.FarmJoinRequestUpdateWithoutReviewedByInput, Prisma.FarmJoinRequestUncheckedUpdateWithoutReviewedByInput>;
    create: Prisma.XOR<Prisma.FarmJoinRequestCreateWithoutReviewedByInput, Prisma.FarmJoinRequestUncheckedCreateWithoutReviewedByInput>;
};
export type FarmJoinRequestUpdateWithWhereUniqueWithoutReviewedByInput = {
    where: Prisma.FarmJoinRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.FarmJoinRequestUpdateWithoutReviewedByInput, Prisma.FarmJoinRequestUncheckedUpdateWithoutReviewedByInput>;
};
export type FarmJoinRequestUpdateManyWithWhereWithoutReviewedByInput = {
    where: Prisma.FarmJoinRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.FarmJoinRequestUpdateManyMutationInput, Prisma.FarmJoinRequestUncheckedUpdateManyWithoutReviewedByInput>;
};
export type FarmJoinRequestCreateWithoutFarmInput = {
    id?: string;
    message?: string | null;
    status?: $Enums.JoinRequestStatus;
    reviewNote?: string | null;
    requestedAt?: Date | string;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutJoinRequestsInput;
    reviewedBy?: Prisma.UserCreateNestedOneWithoutReviewedJoinRequestsInput;
};
export type FarmJoinRequestUncheckedCreateWithoutFarmInput = {
    id?: string;
    userId: string;
    message?: string | null;
    status?: $Enums.JoinRequestStatus;
    reviewedById?: string | null;
    reviewNote?: string | null;
    requestedAt?: Date | string;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FarmJoinRequestCreateOrConnectWithoutFarmInput = {
    where: Prisma.FarmJoinRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.FarmJoinRequestCreateWithoutFarmInput, Prisma.FarmJoinRequestUncheckedCreateWithoutFarmInput>;
};
export type FarmJoinRequestCreateManyFarmInputEnvelope = {
    data: Prisma.FarmJoinRequestCreateManyFarmInput | Prisma.FarmJoinRequestCreateManyFarmInput[];
    skipDuplicates?: boolean;
};
export type FarmJoinRequestUpsertWithWhereUniqueWithoutFarmInput = {
    where: Prisma.FarmJoinRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.FarmJoinRequestUpdateWithoutFarmInput, Prisma.FarmJoinRequestUncheckedUpdateWithoutFarmInput>;
    create: Prisma.XOR<Prisma.FarmJoinRequestCreateWithoutFarmInput, Prisma.FarmJoinRequestUncheckedCreateWithoutFarmInput>;
};
export type FarmJoinRequestUpdateWithWhereUniqueWithoutFarmInput = {
    where: Prisma.FarmJoinRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.FarmJoinRequestUpdateWithoutFarmInput, Prisma.FarmJoinRequestUncheckedUpdateWithoutFarmInput>;
};
export type FarmJoinRequestUpdateManyWithWhereWithoutFarmInput = {
    where: Prisma.FarmJoinRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.FarmJoinRequestUpdateManyMutationInput, Prisma.FarmJoinRequestUncheckedUpdateManyWithoutFarmInput>;
};
export type FarmJoinRequestCreateManyUserInput = {
    id?: string;
    farmId: string;
    message?: string | null;
    status?: $Enums.JoinRequestStatus;
    reviewedById?: string | null;
    reviewNote?: string | null;
    requestedAt?: Date | string;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FarmJoinRequestCreateManyReviewedByInput = {
    id?: string;
    farmId: string;
    userId: string;
    message?: string | null;
    status?: $Enums.JoinRequestStatus;
    reviewNote?: string | null;
    requestedAt?: Date | string;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FarmJoinRequestUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumJoinRequestStatusFieldUpdateOperationsInput | $Enums.JoinRequestStatus;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    farm?: Prisma.FarmUpdateOneRequiredWithoutJoinRequestsNestedInput;
    reviewedBy?: Prisma.UserUpdateOneWithoutReviewedJoinRequestsNestedInput;
};
export type FarmJoinRequestUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    farmId?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumJoinRequestStatusFieldUpdateOperationsInput | $Enums.JoinRequestStatus;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FarmJoinRequestUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    farmId?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumJoinRequestStatusFieldUpdateOperationsInput | $Enums.JoinRequestStatus;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FarmJoinRequestUpdateWithoutReviewedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumJoinRequestStatusFieldUpdateOperationsInput | $Enums.JoinRequestStatus;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    farm?: Prisma.FarmUpdateOneRequiredWithoutJoinRequestsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutJoinRequestsNestedInput;
};
export type FarmJoinRequestUncheckedUpdateWithoutReviewedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    farmId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumJoinRequestStatusFieldUpdateOperationsInput | $Enums.JoinRequestStatus;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FarmJoinRequestUncheckedUpdateManyWithoutReviewedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    farmId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumJoinRequestStatusFieldUpdateOperationsInput | $Enums.JoinRequestStatus;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FarmJoinRequestCreateManyFarmInput = {
    id?: string;
    userId: string;
    message?: string | null;
    status?: $Enums.JoinRequestStatus;
    reviewedById?: string | null;
    reviewNote?: string | null;
    requestedAt?: Date | string;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FarmJoinRequestUpdateWithoutFarmInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumJoinRequestStatusFieldUpdateOperationsInput | $Enums.JoinRequestStatus;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutJoinRequestsNestedInput;
    reviewedBy?: Prisma.UserUpdateOneWithoutReviewedJoinRequestsNestedInput;
};
export type FarmJoinRequestUncheckedUpdateWithoutFarmInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumJoinRequestStatusFieldUpdateOperationsInput | $Enums.JoinRequestStatus;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FarmJoinRequestUncheckedUpdateManyWithoutFarmInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumJoinRequestStatusFieldUpdateOperationsInput | $Enums.JoinRequestStatus;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FarmJoinRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    farmId?: boolean;
    userId?: boolean;
    message?: boolean;
    status?: boolean;
    reviewedById?: boolean;
    reviewNote?: boolean;
    requestedAt?: boolean;
    reviewedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    farm?: boolean | Prisma.FarmDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.FarmJoinRequest$reviewedByArgs<ExtArgs>;
}, ExtArgs["result"]["farmJoinRequest"]>;
export type FarmJoinRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    farmId?: boolean;
    userId?: boolean;
    message?: boolean;
    status?: boolean;
    reviewedById?: boolean;
    reviewNote?: boolean;
    requestedAt?: boolean;
    reviewedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    farm?: boolean | Prisma.FarmDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.FarmJoinRequest$reviewedByArgs<ExtArgs>;
}, ExtArgs["result"]["farmJoinRequest"]>;
export type FarmJoinRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    farmId?: boolean;
    userId?: boolean;
    message?: boolean;
    status?: boolean;
    reviewedById?: boolean;
    reviewNote?: boolean;
    requestedAt?: boolean;
    reviewedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    farm?: boolean | Prisma.FarmDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.FarmJoinRequest$reviewedByArgs<ExtArgs>;
}, ExtArgs["result"]["farmJoinRequest"]>;
export type FarmJoinRequestSelectScalar = {
    id?: boolean;
    farmId?: boolean;
    userId?: boolean;
    message?: boolean;
    status?: boolean;
    reviewedById?: boolean;
    reviewNote?: boolean;
    requestedAt?: boolean;
    reviewedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type FarmJoinRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "farmId" | "userId" | "message" | "status" | "reviewedById" | "reviewNote" | "requestedAt" | "reviewedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["farmJoinRequest"]>;
export type FarmJoinRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    farm?: boolean | Prisma.FarmDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.FarmJoinRequest$reviewedByArgs<ExtArgs>;
};
export type FarmJoinRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    farm?: boolean | Prisma.FarmDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.FarmJoinRequest$reviewedByArgs<ExtArgs>;
};
export type FarmJoinRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    farm?: boolean | Prisma.FarmDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.FarmJoinRequest$reviewedByArgs<ExtArgs>;
};
export type $FarmJoinRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FarmJoinRequest";
    objects: {
        farm: Prisma.$FarmPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
        reviewedBy: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        farmId: string;
        userId: string;
        message: string | null;
        status: $Enums.JoinRequestStatus;
        reviewedById: string | null;
        reviewNote: string | null;
        requestedAt: Date;
        reviewedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["farmJoinRequest"]>;
    composites: {};
};
export type FarmJoinRequestGetPayload<S extends boolean | null | undefined | FarmJoinRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FarmJoinRequestPayload, S>;
export type FarmJoinRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FarmJoinRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FarmJoinRequestCountAggregateInputType | true;
};
export interface FarmJoinRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FarmJoinRequest'];
        meta: {
            name: 'FarmJoinRequest';
        };
    };
    /**
     * Find zero or one FarmJoinRequest that matches the filter.
     * @param {FarmJoinRequestFindUniqueArgs} args - Arguments to find a FarmJoinRequest
     * @example
     * // Get one FarmJoinRequest
     * const farmJoinRequest = await prisma.farmJoinRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FarmJoinRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, FarmJoinRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FarmJoinRequestClient<runtime.Types.Result.GetResult<Prisma.$FarmJoinRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one FarmJoinRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FarmJoinRequestFindUniqueOrThrowArgs} args - Arguments to find a FarmJoinRequest
     * @example
     * // Get one FarmJoinRequest
     * const farmJoinRequest = await prisma.farmJoinRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FarmJoinRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FarmJoinRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FarmJoinRequestClient<runtime.Types.Result.GetResult<Prisma.$FarmJoinRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first FarmJoinRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmJoinRequestFindFirstArgs} args - Arguments to find a FarmJoinRequest
     * @example
     * // Get one FarmJoinRequest
     * const farmJoinRequest = await prisma.farmJoinRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FarmJoinRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, FarmJoinRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__FarmJoinRequestClient<runtime.Types.Result.GetResult<Prisma.$FarmJoinRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first FarmJoinRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmJoinRequestFindFirstOrThrowArgs} args - Arguments to find a FarmJoinRequest
     * @example
     * // Get one FarmJoinRequest
     * const farmJoinRequest = await prisma.farmJoinRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FarmJoinRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FarmJoinRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FarmJoinRequestClient<runtime.Types.Result.GetResult<Prisma.$FarmJoinRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more FarmJoinRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmJoinRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FarmJoinRequests
     * const farmJoinRequests = await prisma.farmJoinRequest.findMany()
     *
     * // Get first 10 FarmJoinRequests
     * const farmJoinRequests = await prisma.farmJoinRequest.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const farmJoinRequestWithIdOnly = await prisma.farmJoinRequest.findMany({ select: { id: true } })
     *
     */
    findMany<T extends FarmJoinRequestFindManyArgs>(args?: Prisma.SelectSubset<T, FarmJoinRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FarmJoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a FarmJoinRequest.
     * @param {FarmJoinRequestCreateArgs} args - Arguments to create a FarmJoinRequest.
     * @example
     * // Create one FarmJoinRequest
     * const FarmJoinRequest = await prisma.farmJoinRequest.create({
     *   data: {
     *     // ... data to create a FarmJoinRequest
     *   }
     * })
     *
     */
    create<T extends FarmJoinRequestCreateArgs>(args: Prisma.SelectSubset<T, FarmJoinRequestCreateArgs<ExtArgs>>): Prisma.Prisma__FarmJoinRequestClient<runtime.Types.Result.GetResult<Prisma.$FarmJoinRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many FarmJoinRequests.
     * @param {FarmJoinRequestCreateManyArgs} args - Arguments to create many FarmJoinRequests.
     * @example
     * // Create many FarmJoinRequests
     * const farmJoinRequest = await prisma.farmJoinRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FarmJoinRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, FarmJoinRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many FarmJoinRequests and returns the data saved in the database.
     * @param {FarmJoinRequestCreateManyAndReturnArgs} args - Arguments to create many FarmJoinRequests.
     * @example
     * // Create many FarmJoinRequests
     * const farmJoinRequest = await prisma.farmJoinRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many FarmJoinRequests and only return the `id`
     * const farmJoinRequestWithIdOnly = await prisma.farmJoinRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FarmJoinRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FarmJoinRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FarmJoinRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a FarmJoinRequest.
     * @param {FarmJoinRequestDeleteArgs} args - Arguments to delete one FarmJoinRequest.
     * @example
     * // Delete one FarmJoinRequest
     * const FarmJoinRequest = await prisma.farmJoinRequest.delete({
     *   where: {
     *     // ... filter to delete one FarmJoinRequest
     *   }
     * })
     *
     */
    delete<T extends FarmJoinRequestDeleteArgs>(args: Prisma.SelectSubset<T, FarmJoinRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__FarmJoinRequestClient<runtime.Types.Result.GetResult<Prisma.$FarmJoinRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one FarmJoinRequest.
     * @param {FarmJoinRequestUpdateArgs} args - Arguments to update one FarmJoinRequest.
     * @example
     * // Update one FarmJoinRequest
     * const farmJoinRequest = await prisma.farmJoinRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FarmJoinRequestUpdateArgs>(args: Prisma.SelectSubset<T, FarmJoinRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__FarmJoinRequestClient<runtime.Types.Result.GetResult<Prisma.$FarmJoinRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more FarmJoinRequests.
     * @param {FarmJoinRequestDeleteManyArgs} args - Arguments to filter FarmJoinRequests to delete.
     * @example
     * // Delete a few FarmJoinRequests
     * const { count } = await prisma.farmJoinRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FarmJoinRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, FarmJoinRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more FarmJoinRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmJoinRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FarmJoinRequests
     * const farmJoinRequest = await prisma.farmJoinRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FarmJoinRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, FarmJoinRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more FarmJoinRequests and returns the data updated in the database.
     * @param {FarmJoinRequestUpdateManyAndReturnArgs} args - Arguments to update many FarmJoinRequests.
     * @example
     * // Update many FarmJoinRequests
     * const farmJoinRequest = await prisma.farmJoinRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more FarmJoinRequests and only return the `id`
     * const farmJoinRequestWithIdOnly = await prisma.farmJoinRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends FarmJoinRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FarmJoinRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FarmJoinRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one FarmJoinRequest.
     * @param {FarmJoinRequestUpsertArgs} args - Arguments to update or create a FarmJoinRequest.
     * @example
     * // Update or create a FarmJoinRequest
     * const farmJoinRequest = await prisma.farmJoinRequest.upsert({
     *   create: {
     *     // ... data to create a FarmJoinRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FarmJoinRequest we want to update
     *   }
     * })
     */
    upsert<T extends FarmJoinRequestUpsertArgs>(args: Prisma.SelectSubset<T, FarmJoinRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__FarmJoinRequestClient<runtime.Types.Result.GetResult<Prisma.$FarmJoinRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of FarmJoinRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmJoinRequestCountArgs} args - Arguments to filter FarmJoinRequests to count.
     * @example
     * // Count the number of FarmJoinRequests
     * const count = await prisma.farmJoinRequest.count({
     *   where: {
     *     // ... the filter for the FarmJoinRequests we want to count
     *   }
     * })
    **/
    count<T extends FarmJoinRequestCountArgs>(args?: Prisma.Subset<T, FarmJoinRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FarmJoinRequestCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a FarmJoinRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmJoinRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FarmJoinRequestAggregateArgs>(args: Prisma.Subset<T, FarmJoinRequestAggregateArgs>): Prisma.PrismaPromise<GetFarmJoinRequestAggregateType<T>>;
    /**
     * Group by FarmJoinRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmJoinRequestGroupByArgs} args - Group by arguments.
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
    groupBy<T extends FarmJoinRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FarmJoinRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: FarmJoinRequestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FarmJoinRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFarmJoinRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the FarmJoinRequest model
     */
    readonly fields: FarmJoinRequestFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for FarmJoinRequest.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__FarmJoinRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    farm<T extends Prisma.FarmDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FarmDefaultArgs<ExtArgs>>): Prisma.Prisma__FarmClient<runtime.Types.Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    reviewedBy<T extends Prisma.FarmJoinRequest$reviewedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FarmJoinRequest$reviewedByArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the FarmJoinRequest model
 */
export interface FarmJoinRequestFieldRefs {
    readonly id: Prisma.FieldRef<"FarmJoinRequest", 'String'>;
    readonly farmId: Prisma.FieldRef<"FarmJoinRequest", 'String'>;
    readonly userId: Prisma.FieldRef<"FarmJoinRequest", 'String'>;
    readonly message: Prisma.FieldRef<"FarmJoinRequest", 'String'>;
    readonly status: Prisma.FieldRef<"FarmJoinRequest", 'JoinRequestStatus'>;
    readonly reviewedById: Prisma.FieldRef<"FarmJoinRequest", 'String'>;
    readonly reviewNote: Prisma.FieldRef<"FarmJoinRequest", 'String'>;
    readonly requestedAt: Prisma.FieldRef<"FarmJoinRequest", 'DateTime'>;
    readonly reviewedAt: Prisma.FieldRef<"FarmJoinRequest", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"FarmJoinRequest", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"FarmJoinRequest", 'DateTime'>;
}
/**
 * FarmJoinRequest findUnique
 */
export type FarmJoinRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which FarmJoinRequest to fetch.
     */
    where: Prisma.FarmJoinRequestWhereUniqueInput;
};
/**
 * FarmJoinRequest findUniqueOrThrow
 */
export type FarmJoinRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which FarmJoinRequest to fetch.
     */
    where: Prisma.FarmJoinRequestWhereUniqueInput;
};
/**
 * FarmJoinRequest findFirst
 */
export type FarmJoinRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which FarmJoinRequest to fetch.
     */
    where?: Prisma.FarmJoinRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FarmJoinRequests to fetch.
     */
    orderBy?: Prisma.FarmJoinRequestOrderByWithRelationInput | Prisma.FarmJoinRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FarmJoinRequests.
     */
    cursor?: Prisma.FarmJoinRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FarmJoinRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FarmJoinRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FarmJoinRequests.
     */
    distinct?: Prisma.FarmJoinRequestScalarFieldEnum | Prisma.FarmJoinRequestScalarFieldEnum[];
};
/**
 * FarmJoinRequest findFirstOrThrow
 */
export type FarmJoinRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which FarmJoinRequest to fetch.
     */
    where?: Prisma.FarmJoinRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FarmJoinRequests to fetch.
     */
    orderBy?: Prisma.FarmJoinRequestOrderByWithRelationInput | Prisma.FarmJoinRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FarmJoinRequests.
     */
    cursor?: Prisma.FarmJoinRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FarmJoinRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FarmJoinRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FarmJoinRequests.
     */
    distinct?: Prisma.FarmJoinRequestScalarFieldEnum | Prisma.FarmJoinRequestScalarFieldEnum[];
};
/**
 * FarmJoinRequest findMany
 */
export type FarmJoinRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which FarmJoinRequests to fetch.
     */
    where?: Prisma.FarmJoinRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FarmJoinRequests to fetch.
     */
    orderBy?: Prisma.FarmJoinRequestOrderByWithRelationInput | Prisma.FarmJoinRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing FarmJoinRequests.
     */
    cursor?: Prisma.FarmJoinRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FarmJoinRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FarmJoinRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FarmJoinRequests.
     */
    distinct?: Prisma.FarmJoinRequestScalarFieldEnum | Prisma.FarmJoinRequestScalarFieldEnum[];
};
/**
 * FarmJoinRequest create
 */
export type FarmJoinRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a FarmJoinRequest.
     */
    data: Prisma.XOR<Prisma.FarmJoinRequestCreateInput, Prisma.FarmJoinRequestUncheckedCreateInput>;
};
/**
 * FarmJoinRequest createMany
 */
export type FarmJoinRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many FarmJoinRequests.
     */
    data: Prisma.FarmJoinRequestCreateManyInput | Prisma.FarmJoinRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * FarmJoinRequest createManyAndReturn
 */
export type FarmJoinRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmJoinRequest
     */
    select?: Prisma.FarmJoinRequestSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FarmJoinRequest
     */
    omit?: Prisma.FarmJoinRequestOmit<ExtArgs> | null;
    /**
     * The data used to create many FarmJoinRequests.
     */
    data: Prisma.FarmJoinRequestCreateManyInput | Prisma.FarmJoinRequestCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmJoinRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * FarmJoinRequest update
 */
export type FarmJoinRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a FarmJoinRequest.
     */
    data: Prisma.XOR<Prisma.FarmJoinRequestUpdateInput, Prisma.FarmJoinRequestUncheckedUpdateInput>;
    /**
     * Choose, which FarmJoinRequest to update.
     */
    where: Prisma.FarmJoinRequestWhereUniqueInput;
};
/**
 * FarmJoinRequest updateMany
 */
export type FarmJoinRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update FarmJoinRequests.
     */
    data: Prisma.XOR<Prisma.FarmJoinRequestUpdateManyMutationInput, Prisma.FarmJoinRequestUncheckedUpdateManyInput>;
    /**
     * Filter which FarmJoinRequests to update
     */
    where?: Prisma.FarmJoinRequestWhereInput;
    /**
     * Limit how many FarmJoinRequests to update.
     */
    limit?: number;
};
/**
 * FarmJoinRequest updateManyAndReturn
 */
export type FarmJoinRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmJoinRequest
     */
    select?: Prisma.FarmJoinRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FarmJoinRequest
     */
    omit?: Prisma.FarmJoinRequestOmit<ExtArgs> | null;
    /**
     * The data used to update FarmJoinRequests.
     */
    data: Prisma.XOR<Prisma.FarmJoinRequestUpdateManyMutationInput, Prisma.FarmJoinRequestUncheckedUpdateManyInput>;
    /**
     * Filter which FarmJoinRequests to update
     */
    where?: Prisma.FarmJoinRequestWhereInput;
    /**
     * Limit how many FarmJoinRequests to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FarmJoinRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * FarmJoinRequest upsert
 */
export type FarmJoinRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the FarmJoinRequest to update in case it exists.
     */
    where: Prisma.FarmJoinRequestWhereUniqueInput;
    /**
     * In case the FarmJoinRequest found by the `where` argument doesn't exist, create a new FarmJoinRequest with this data.
     */
    create: Prisma.XOR<Prisma.FarmJoinRequestCreateInput, Prisma.FarmJoinRequestUncheckedCreateInput>;
    /**
     * In case the FarmJoinRequest was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.FarmJoinRequestUpdateInput, Prisma.FarmJoinRequestUncheckedUpdateInput>;
};
/**
 * FarmJoinRequest delete
 */
export type FarmJoinRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which FarmJoinRequest to delete.
     */
    where: Prisma.FarmJoinRequestWhereUniqueInput;
};
/**
 * FarmJoinRequest deleteMany
 */
export type FarmJoinRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which FarmJoinRequests to delete
     */
    where?: Prisma.FarmJoinRequestWhereInput;
    /**
     * Limit how many FarmJoinRequests to delete.
     */
    limit?: number;
};
/**
 * FarmJoinRequest.reviewedBy
 */
export type FarmJoinRequest$reviewedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
/**
 * FarmJoinRequest without action
 */
export type FarmJoinRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=FarmJoinRequest.d.ts.map