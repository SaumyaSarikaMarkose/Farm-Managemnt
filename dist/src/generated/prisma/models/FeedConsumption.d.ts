import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model FeedConsumption
 *
 */
export type FeedConsumptionModel = runtime.Types.Result.DefaultSelection<Prisma.$FeedConsumptionPayload>;
export type AggregateFeedConsumption = {
    _count: FeedConsumptionCountAggregateOutputType | null;
    _avg: FeedConsumptionAvgAggregateOutputType | null;
    _sum: FeedConsumptionSumAggregateOutputType | null;
    _min: FeedConsumptionMinAggregateOutputType | null;
    _max: FeedConsumptionMaxAggregateOutputType | null;
};
export type FeedConsumptionAvgAggregateOutputType = {
    quantity: runtime.Decimal | null;
};
export type FeedConsumptionSumAggregateOutputType = {
    quantity: runtime.Decimal | null;
};
export type FeedConsumptionMinAggregateOutputType = {
    id: string | null;
    feedItemId: string | null;
    cowId: string | null;
    quantity: runtime.Decimal | null;
    consumptionDate: Date | null;
    notes: string | null;
    recordedById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FeedConsumptionMaxAggregateOutputType = {
    id: string | null;
    feedItemId: string | null;
    cowId: string | null;
    quantity: runtime.Decimal | null;
    consumptionDate: Date | null;
    notes: string | null;
    recordedById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FeedConsumptionCountAggregateOutputType = {
    id: number;
    feedItemId: number;
    cowId: number;
    quantity: number;
    consumptionDate: number;
    notes: number;
    recordedById: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type FeedConsumptionAvgAggregateInputType = {
    quantity?: true;
};
export type FeedConsumptionSumAggregateInputType = {
    quantity?: true;
};
export type FeedConsumptionMinAggregateInputType = {
    id?: true;
    feedItemId?: true;
    cowId?: true;
    quantity?: true;
    consumptionDate?: true;
    notes?: true;
    recordedById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FeedConsumptionMaxAggregateInputType = {
    id?: true;
    feedItemId?: true;
    cowId?: true;
    quantity?: true;
    consumptionDate?: true;
    notes?: true;
    recordedById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FeedConsumptionCountAggregateInputType = {
    id?: true;
    feedItemId?: true;
    cowId?: true;
    quantity?: true;
    consumptionDate?: true;
    notes?: true;
    recordedById?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type FeedConsumptionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which FeedConsumption to aggregate.
     */
    where?: Prisma.FeedConsumptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FeedConsumptions to fetch.
     */
    orderBy?: Prisma.FeedConsumptionOrderByWithRelationInput | Prisma.FeedConsumptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.FeedConsumptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FeedConsumptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FeedConsumptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned FeedConsumptions
    **/
    _count?: true | FeedConsumptionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: FeedConsumptionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: FeedConsumptionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: FeedConsumptionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: FeedConsumptionMaxAggregateInputType;
};
export type GetFeedConsumptionAggregateType<T extends FeedConsumptionAggregateArgs> = {
    [P in keyof T & keyof AggregateFeedConsumption]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFeedConsumption[P]> : Prisma.GetScalarType<T[P], AggregateFeedConsumption[P]>;
};
export type FeedConsumptionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeedConsumptionWhereInput;
    orderBy?: Prisma.FeedConsumptionOrderByWithAggregationInput | Prisma.FeedConsumptionOrderByWithAggregationInput[];
    by: Prisma.FeedConsumptionScalarFieldEnum[] | Prisma.FeedConsumptionScalarFieldEnum;
    having?: Prisma.FeedConsumptionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FeedConsumptionCountAggregateInputType | true;
    _avg?: FeedConsumptionAvgAggregateInputType;
    _sum?: FeedConsumptionSumAggregateInputType;
    _min?: FeedConsumptionMinAggregateInputType;
    _max?: FeedConsumptionMaxAggregateInputType;
};
export type FeedConsumptionGroupByOutputType = {
    id: string;
    feedItemId: string;
    cowId: string | null;
    quantity: runtime.Decimal;
    consumptionDate: Date;
    notes: string | null;
    recordedById: string;
    createdAt: Date;
    updatedAt: Date;
    _count: FeedConsumptionCountAggregateOutputType | null;
    _avg: FeedConsumptionAvgAggregateOutputType | null;
    _sum: FeedConsumptionSumAggregateOutputType | null;
    _min: FeedConsumptionMinAggregateOutputType | null;
    _max: FeedConsumptionMaxAggregateOutputType | null;
};
export type GetFeedConsumptionGroupByPayload<T extends FeedConsumptionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FeedConsumptionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FeedConsumptionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FeedConsumptionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FeedConsumptionGroupByOutputType[P]>;
}>>;
export type FeedConsumptionWhereInput = {
    AND?: Prisma.FeedConsumptionWhereInput | Prisma.FeedConsumptionWhereInput[];
    OR?: Prisma.FeedConsumptionWhereInput[];
    NOT?: Prisma.FeedConsumptionWhereInput | Prisma.FeedConsumptionWhereInput[];
    id?: Prisma.StringFilter<"FeedConsumption"> | string;
    feedItemId?: Prisma.StringFilter<"FeedConsumption"> | string;
    cowId?: Prisma.StringNullableFilter<"FeedConsumption"> | string | null;
    quantity?: Prisma.DecimalFilter<"FeedConsumption"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    consumptionDate?: Prisma.DateTimeFilter<"FeedConsumption"> | Date | string;
    notes?: Prisma.StringNullableFilter<"FeedConsumption"> | string | null;
    recordedById?: Prisma.StringFilter<"FeedConsumption"> | string;
    createdAt?: Prisma.DateTimeFilter<"FeedConsumption"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FeedConsumption"> | Date | string;
    feedItem?: Prisma.XOR<Prisma.FeedItemScalarRelationFilter, Prisma.FeedItemWhereInput>;
    cow?: Prisma.XOR<Prisma.CowNullableScalarRelationFilter, Prisma.CowWhereInput> | null;
    recordedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type FeedConsumptionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    feedItemId?: Prisma.SortOrder;
    cowId?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    consumptionDate?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    recordedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    feedItem?: Prisma.FeedItemOrderByWithRelationInput;
    cow?: Prisma.CowOrderByWithRelationInput;
    recordedBy?: Prisma.UserOrderByWithRelationInput;
};
export type FeedConsumptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.FeedConsumptionWhereInput | Prisma.FeedConsumptionWhereInput[];
    OR?: Prisma.FeedConsumptionWhereInput[];
    NOT?: Prisma.FeedConsumptionWhereInput | Prisma.FeedConsumptionWhereInput[];
    feedItemId?: Prisma.StringFilter<"FeedConsumption"> | string;
    cowId?: Prisma.StringNullableFilter<"FeedConsumption"> | string | null;
    quantity?: Prisma.DecimalFilter<"FeedConsumption"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    consumptionDate?: Prisma.DateTimeFilter<"FeedConsumption"> | Date | string;
    notes?: Prisma.StringNullableFilter<"FeedConsumption"> | string | null;
    recordedById?: Prisma.StringFilter<"FeedConsumption"> | string;
    createdAt?: Prisma.DateTimeFilter<"FeedConsumption"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FeedConsumption"> | Date | string;
    feedItem?: Prisma.XOR<Prisma.FeedItemScalarRelationFilter, Prisma.FeedItemWhereInput>;
    cow?: Prisma.XOR<Prisma.CowNullableScalarRelationFilter, Prisma.CowWhereInput> | null;
    recordedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type FeedConsumptionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    feedItemId?: Prisma.SortOrder;
    cowId?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    consumptionDate?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    recordedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.FeedConsumptionCountOrderByAggregateInput;
    _avg?: Prisma.FeedConsumptionAvgOrderByAggregateInput;
    _max?: Prisma.FeedConsumptionMaxOrderByAggregateInput;
    _min?: Prisma.FeedConsumptionMinOrderByAggregateInput;
    _sum?: Prisma.FeedConsumptionSumOrderByAggregateInput;
};
export type FeedConsumptionScalarWhereWithAggregatesInput = {
    AND?: Prisma.FeedConsumptionScalarWhereWithAggregatesInput | Prisma.FeedConsumptionScalarWhereWithAggregatesInput[];
    OR?: Prisma.FeedConsumptionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FeedConsumptionScalarWhereWithAggregatesInput | Prisma.FeedConsumptionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"FeedConsumption"> | string;
    feedItemId?: Prisma.StringWithAggregatesFilter<"FeedConsumption"> | string;
    cowId?: Prisma.StringNullableWithAggregatesFilter<"FeedConsumption"> | string | null;
    quantity?: Prisma.DecimalWithAggregatesFilter<"FeedConsumption"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    consumptionDate?: Prisma.DateTimeWithAggregatesFilter<"FeedConsumption"> | Date | string;
    notes?: Prisma.StringNullableWithAggregatesFilter<"FeedConsumption"> | string | null;
    recordedById?: Prisma.StringWithAggregatesFilter<"FeedConsumption"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"FeedConsumption"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"FeedConsumption"> | Date | string;
};
export type FeedConsumptionCreateInput = {
    id?: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    consumptionDate: Date | string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    feedItem: Prisma.FeedItemCreateNestedOneWithoutConsumptionsInput;
    cow?: Prisma.CowCreateNestedOneWithoutFeedConsumptionsInput;
    recordedBy: Prisma.UserCreateNestedOneWithoutFeedConsumptionsInput;
};
export type FeedConsumptionUncheckedCreateInput = {
    id?: string;
    feedItemId: string;
    cowId?: string | null;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    consumptionDate: Date | string;
    notes?: string | null;
    recordedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FeedConsumptionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    consumptionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    feedItem?: Prisma.FeedItemUpdateOneRequiredWithoutConsumptionsNestedInput;
    cow?: Prisma.CowUpdateOneWithoutFeedConsumptionsNestedInput;
    recordedBy?: Prisma.UserUpdateOneRequiredWithoutFeedConsumptionsNestedInput;
};
export type FeedConsumptionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    feedItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    cowId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    consumptionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeedConsumptionCreateManyInput = {
    id?: string;
    feedItemId: string;
    cowId?: string | null;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    consumptionDate: Date | string;
    notes?: string | null;
    recordedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FeedConsumptionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    consumptionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeedConsumptionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    feedItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    cowId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    consumptionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeedConsumptionListRelationFilter = {
    every?: Prisma.FeedConsumptionWhereInput;
    some?: Prisma.FeedConsumptionWhereInput;
    none?: Prisma.FeedConsumptionWhereInput;
};
export type FeedConsumptionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FeedConsumptionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    feedItemId?: Prisma.SortOrder;
    cowId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    consumptionDate?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    recordedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FeedConsumptionAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type FeedConsumptionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    feedItemId?: Prisma.SortOrder;
    cowId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    consumptionDate?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    recordedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FeedConsumptionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    feedItemId?: Prisma.SortOrder;
    cowId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    consumptionDate?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    recordedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FeedConsumptionSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type FeedConsumptionCreateNestedManyWithoutRecordedByInput = {
    create?: Prisma.XOR<Prisma.FeedConsumptionCreateWithoutRecordedByInput, Prisma.FeedConsumptionUncheckedCreateWithoutRecordedByInput> | Prisma.FeedConsumptionCreateWithoutRecordedByInput[] | Prisma.FeedConsumptionUncheckedCreateWithoutRecordedByInput[];
    connectOrCreate?: Prisma.FeedConsumptionCreateOrConnectWithoutRecordedByInput | Prisma.FeedConsumptionCreateOrConnectWithoutRecordedByInput[];
    createMany?: Prisma.FeedConsumptionCreateManyRecordedByInputEnvelope;
    connect?: Prisma.FeedConsumptionWhereUniqueInput | Prisma.FeedConsumptionWhereUniqueInput[];
};
export type FeedConsumptionUncheckedCreateNestedManyWithoutRecordedByInput = {
    create?: Prisma.XOR<Prisma.FeedConsumptionCreateWithoutRecordedByInput, Prisma.FeedConsumptionUncheckedCreateWithoutRecordedByInput> | Prisma.FeedConsumptionCreateWithoutRecordedByInput[] | Prisma.FeedConsumptionUncheckedCreateWithoutRecordedByInput[];
    connectOrCreate?: Prisma.FeedConsumptionCreateOrConnectWithoutRecordedByInput | Prisma.FeedConsumptionCreateOrConnectWithoutRecordedByInput[];
    createMany?: Prisma.FeedConsumptionCreateManyRecordedByInputEnvelope;
    connect?: Prisma.FeedConsumptionWhereUniqueInput | Prisma.FeedConsumptionWhereUniqueInput[];
};
export type FeedConsumptionUpdateManyWithoutRecordedByNestedInput = {
    create?: Prisma.XOR<Prisma.FeedConsumptionCreateWithoutRecordedByInput, Prisma.FeedConsumptionUncheckedCreateWithoutRecordedByInput> | Prisma.FeedConsumptionCreateWithoutRecordedByInput[] | Prisma.FeedConsumptionUncheckedCreateWithoutRecordedByInput[];
    connectOrCreate?: Prisma.FeedConsumptionCreateOrConnectWithoutRecordedByInput | Prisma.FeedConsumptionCreateOrConnectWithoutRecordedByInput[];
    upsert?: Prisma.FeedConsumptionUpsertWithWhereUniqueWithoutRecordedByInput | Prisma.FeedConsumptionUpsertWithWhereUniqueWithoutRecordedByInput[];
    createMany?: Prisma.FeedConsumptionCreateManyRecordedByInputEnvelope;
    set?: Prisma.FeedConsumptionWhereUniqueInput | Prisma.FeedConsumptionWhereUniqueInput[];
    disconnect?: Prisma.FeedConsumptionWhereUniqueInput | Prisma.FeedConsumptionWhereUniqueInput[];
    delete?: Prisma.FeedConsumptionWhereUniqueInput | Prisma.FeedConsumptionWhereUniqueInput[];
    connect?: Prisma.FeedConsumptionWhereUniqueInput | Prisma.FeedConsumptionWhereUniqueInput[];
    update?: Prisma.FeedConsumptionUpdateWithWhereUniqueWithoutRecordedByInput | Prisma.FeedConsumptionUpdateWithWhereUniqueWithoutRecordedByInput[];
    updateMany?: Prisma.FeedConsumptionUpdateManyWithWhereWithoutRecordedByInput | Prisma.FeedConsumptionUpdateManyWithWhereWithoutRecordedByInput[];
    deleteMany?: Prisma.FeedConsumptionScalarWhereInput | Prisma.FeedConsumptionScalarWhereInput[];
};
export type FeedConsumptionUncheckedUpdateManyWithoutRecordedByNestedInput = {
    create?: Prisma.XOR<Prisma.FeedConsumptionCreateWithoutRecordedByInput, Prisma.FeedConsumptionUncheckedCreateWithoutRecordedByInput> | Prisma.FeedConsumptionCreateWithoutRecordedByInput[] | Prisma.FeedConsumptionUncheckedCreateWithoutRecordedByInput[];
    connectOrCreate?: Prisma.FeedConsumptionCreateOrConnectWithoutRecordedByInput | Prisma.FeedConsumptionCreateOrConnectWithoutRecordedByInput[];
    upsert?: Prisma.FeedConsumptionUpsertWithWhereUniqueWithoutRecordedByInput | Prisma.FeedConsumptionUpsertWithWhereUniqueWithoutRecordedByInput[];
    createMany?: Prisma.FeedConsumptionCreateManyRecordedByInputEnvelope;
    set?: Prisma.FeedConsumptionWhereUniqueInput | Prisma.FeedConsumptionWhereUniqueInput[];
    disconnect?: Prisma.FeedConsumptionWhereUniqueInput | Prisma.FeedConsumptionWhereUniqueInput[];
    delete?: Prisma.FeedConsumptionWhereUniqueInput | Prisma.FeedConsumptionWhereUniqueInput[];
    connect?: Prisma.FeedConsumptionWhereUniqueInput | Prisma.FeedConsumptionWhereUniqueInput[];
    update?: Prisma.FeedConsumptionUpdateWithWhereUniqueWithoutRecordedByInput | Prisma.FeedConsumptionUpdateWithWhereUniqueWithoutRecordedByInput[];
    updateMany?: Prisma.FeedConsumptionUpdateManyWithWhereWithoutRecordedByInput | Prisma.FeedConsumptionUpdateManyWithWhereWithoutRecordedByInput[];
    deleteMany?: Prisma.FeedConsumptionScalarWhereInput | Prisma.FeedConsumptionScalarWhereInput[];
};
export type FeedConsumptionCreateNestedManyWithoutCowInput = {
    create?: Prisma.XOR<Prisma.FeedConsumptionCreateWithoutCowInput, Prisma.FeedConsumptionUncheckedCreateWithoutCowInput> | Prisma.FeedConsumptionCreateWithoutCowInput[] | Prisma.FeedConsumptionUncheckedCreateWithoutCowInput[];
    connectOrCreate?: Prisma.FeedConsumptionCreateOrConnectWithoutCowInput | Prisma.FeedConsumptionCreateOrConnectWithoutCowInput[];
    createMany?: Prisma.FeedConsumptionCreateManyCowInputEnvelope;
    connect?: Prisma.FeedConsumptionWhereUniqueInput | Prisma.FeedConsumptionWhereUniqueInput[];
};
export type FeedConsumptionUncheckedCreateNestedManyWithoutCowInput = {
    create?: Prisma.XOR<Prisma.FeedConsumptionCreateWithoutCowInput, Prisma.FeedConsumptionUncheckedCreateWithoutCowInput> | Prisma.FeedConsumptionCreateWithoutCowInput[] | Prisma.FeedConsumptionUncheckedCreateWithoutCowInput[];
    connectOrCreate?: Prisma.FeedConsumptionCreateOrConnectWithoutCowInput | Prisma.FeedConsumptionCreateOrConnectWithoutCowInput[];
    createMany?: Prisma.FeedConsumptionCreateManyCowInputEnvelope;
    connect?: Prisma.FeedConsumptionWhereUniqueInput | Prisma.FeedConsumptionWhereUniqueInput[];
};
export type FeedConsumptionUpdateManyWithoutCowNestedInput = {
    create?: Prisma.XOR<Prisma.FeedConsumptionCreateWithoutCowInput, Prisma.FeedConsumptionUncheckedCreateWithoutCowInput> | Prisma.FeedConsumptionCreateWithoutCowInput[] | Prisma.FeedConsumptionUncheckedCreateWithoutCowInput[];
    connectOrCreate?: Prisma.FeedConsumptionCreateOrConnectWithoutCowInput | Prisma.FeedConsumptionCreateOrConnectWithoutCowInput[];
    upsert?: Prisma.FeedConsumptionUpsertWithWhereUniqueWithoutCowInput | Prisma.FeedConsumptionUpsertWithWhereUniqueWithoutCowInput[];
    createMany?: Prisma.FeedConsumptionCreateManyCowInputEnvelope;
    set?: Prisma.FeedConsumptionWhereUniqueInput | Prisma.FeedConsumptionWhereUniqueInput[];
    disconnect?: Prisma.FeedConsumptionWhereUniqueInput | Prisma.FeedConsumptionWhereUniqueInput[];
    delete?: Prisma.FeedConsumptionWhereUniqueInput | Prisma.FeedConsumptionWhereUniqueInput[];
    connect?: Prisma.FeedConsumptionWhereUniqueInput | Prisma.FeedConsumptionWhereUniqueInput[];
    update?: Prisma.FeedConsumptionUpdateWithWhereUniqueWithoutCowInput | Prisma.FeedConsumptionUpdateWithWhereUniqueWithoutCowInput[];
    updateMany?: Prisma.FeedConsumptionUpdateManyWithWhereWithoutCowInput | Prisma.FeedConsumptionUpdateManyWithWhereWithoutCowInput[];
    deleteMany?: Prisma.FeedConsumptionScalarWhereInput | Prisma.FeedConsumptionScalarWhereInput[];
};
export type FeedConsumptionUncheckedUpdateManyWithoutCowNestedInput = {
    create?: Prisma.XOR<Prisma.FeedConsumptionCreateWithoutCowInput, Prisma.FeedConsumptionUncheckedCreateWithoutCowInput> | Prisma.FeedConsumptionCreateWithoutCowInput[] | Prisma.FeedConsumptionUncheckedCreateWithoutCowInput[];
    connectOrCreate?: Prisma.FeedConsumptionCreateOrConnectWithoutCowInput | Prisma.FeedConsumptionCreateOrConnectWithoutCowInput[];
    upsert?: Prisma.FeedConsumptionUpsertWithWhereUniqueWithoutCowInput | Prisma.FeedConsumptionUpsertWithWhereUniqueWithoutCowInput[];
    createMany?: Prisma.FeedConsumptionCreateManyCowInputEnvelope;
    set?: Prisma.FeedConsumptionWhereUniqueInput | Prisma.FeedConsumptionWhereUniqueInput[];
    disconnect?: Prisma.FeedConsumptionWhereUniqueInput | Prisma.FeedConsumptionWhereUniqueInput[];
    delete?: Prisma.FeedConsumptionWhereUniqueInput | Prisma.FeedConsumptionWhereUniqueInput[];
    connect?: Prisma.FeedConsumptionWhereUniqueInput | Prisma.FeedConsumptionWhereUniqueInput[];
    update?: Prisma.FeedConsumptionUpdateWithWhereUniqueWithoutCowInput | Prisma.FeedConsumptionUpdateWithWhereUniqueWithoutCowInput[];
    updateMany?: Prisma.FeedConsumptionUpdateManyWithWhereWithoutCowInput | Prisma.FeedConsumptionUpdateManyWithWhereWithoutCowInput[];
    deleteMany?: Prisma.FeedConsumptionScalarWhereInput | Prisma.FeedConsumptionScalarWhereInput[];
};
export type FeedConsumptionCreateNestedManyWithoutFeedItemInput = {
    create?: Prisma.XOR<Prisma.FeedConsumptionCreateWithoutFeedItemInput, Prisma.FeedConsumptionUncheckedCreateWithoutFeedItemInput> | Prisma.FeedConsumptionCreateWithoutFeedItemInput[] | Prisma.FeedConsumptionUncheckedCreateWithoutFeedItemInput[];
    connectOrCreate?: Prisma.FeedConsumptionCreateOrConnectWithoutFeedItemInput | Prisma.FeedConsumptionCreateOrConnectWithoutFeedItemInput[];
    createMany?: Prisma.FeedConsumptionCreateManyFeedItemInputEnvelope;
    connect?: Prisma.FeedConsumptionWhereUniqueInput | Prisma.FeedConsumptionWhereUniqueInput[];
};
export type FeedConsumptionUncheckedCreateNestedManyWithoutFeedItemInput = {
    create?: Prisma.XOR<Prisma.FeedConsumptionCreateWithoutFeedItemInput, Prisma.FeedConsumptionUncheckedCreateWithoutFeedItemInput> | Prisma.FeedConsumptionCreateWithoutFeedItemInput[] | Prisma.FeedConsumptionUncheckedCreateWithoutFeedItemInput[];
    connectOrCreate?: Prisma.FeedConsumptionCreateOrConnectWithoutFeedItemInput | Prisma.FeedConsumptionCreateOrConnectWithoutFeedItemInput[];
    createMany?: Prisma.FeedConsumptionCreateManyFeedItemInputEnvelope;
    connect?: Prisma.FeedConsumptionWhereUniqueInput | Prisma.FeedConsumptionWhereUniqueInput[];
};
export type FeedConsumptionUpdateManyWithoutFeedItemNestedInput = {
    create?: Prisma.XOR<Prisma.FeedConsumptionCreateWithoutFeedItemInput, Prisma.FeedConsumptionUncheckedCreateWithoutFeedItemInput> | Prisma.FeedConsumptionCreateWithoutFeedItemInput[] | Prisma.FeedConsumptionUncheckedCreateWithoutFeedItemInput[];
    connectOrCreate?: Prisma.FeedConsumptionCreateOrConnectWithoutFeedItemInput | Prisma.FeedConsumptionCreateOrConnectWithoutFeedItemInput[];
    upsert?: Prisma.FeedConsumptionUpsertWithWhereUniqueWithoutFeedItemInput | Prisma.FeedConsumptionUpsertWithWhereUniqueWithoutFeedItemInput[];
    createMany?: Prisma.FeedConsumptionCreateManyFeedItemInputEnvelope;
    set?: Prisma.FeedConsumptionWhereUniqueInput | Prisma.FeedConsumptionWhereUniqueInput[];
    disconnect?: Prisma.FeedConsumptionWhereUniqueInput | Prisma.FeedConsumptionWhereUniqueInput[];
    delete?: Prisma.FeedConsumptionWhereUniqueInput | Prisma.FeedConsumptionWhereUniqueInput[];
    connect?: Prisma.FeedConsumptionWhereUniqueInput | Prisma.FeedConsumptionWhereUniqueInput[];
    update?: Prisma.FeedConsumptionUpdateWithWhereUniqueWithoutFeedItemInput | Prisma.FeedConsumptionUpdateWithWhereUniqueWithoutFeedItemInput[];
    updateMany?: Prisma.FeedConsumptionUpdateManyWithWhereWithoutFeedItemInput | Prisma.FeedConsumptionUpdateManyWithWhereWithoutFeedItemInput[];
    deleteMany?: Prisma.FeedConsumptionScalarWhereInput | Prisma.FeedConsumptionScalarWhereInput[];
};
export type FeedConsumptionUncheckedUpdateManyWithoutFeedItemNestedInput = {
    create?: Prisma.XOR<Prisma.FeedConsumptionCreateWithoutFeedItemInput, Prisma.FeedConsumptionUncheckedCreateWithoutFeedItemInput> | Prisma.FeedConsumptionCreateWithoutFeedItemInput[] | Prisma.FeedConsumptionUncheckedCreateWithoutFeedItemInput[];
    connectOrCreate?: Prisma.FeedConsumptionCreateOrConnectWithoutFeedItemInput | Prisma.FeedConsumptionCreateOrConnectWithoutFeedItemInput[];
    upsert?: Prisma.FeedConsumptionUpsertWithWhereUniqueWithoutFeedItemInput | Prisma.FeedConsumptionUpsertWithWhereUniqueWithoutFeedItemInput[];
    createMany?: Prisma.FeedConsumptionCreateManyFeedItemInputEnvelope;
    set?: Prisma.FeedConsumptionWhereUniqueInput | Prisma.FeedConsumptionWhereUniqueInput[];
    disconnect?: Prisma.FeedConsumptionWhereUniqueInput | Prisma.FeedConsumptionWhereUniqueInput[];
    delete?: Prisma.FeedConsumptionWhereUniqueInput | Prisma.FeedConsumptionWhereUniqueInput[];
    connect?: Prisma.FeedConsumptionWhereUniqueInput | Prisma.FeedConsumptionWhereUniqueInput[];
    update?: Prisma.FeedConsumptionUpdateWithWhereUniqueWithoutFeedItemInput | Prisma.FeedConsumptionUpdateWithWhereUniqueWithoutFeedItemInput[];
    updateMany?: Prisma.FeedConsumptionUpdateManyWithWhereWithoutFeedItemInput | Prisma.FeedConsumptionUpdateManyWithWhereWithoutFeedItemInput[];
    deleteMany?: Prisma.FeedConsumptionScalarWhereInput | Prisma.FeedConsumptionScalarWhereInput[];
};
export type FeedConsumptionCreateWithoutRecordedByInput = {
    id?: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    consumptionDate: Date | string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    feedItem: Prisma.FeedItemCreateNestedOneWithoutConsumptionsInput;
    cow?: Prisma.CowCreateNestedOneWithoutFeedConsumptionsInput;
};
export type FeedConsumptionUncheckedCreateWithoutRecordedByInput = {
    id?: string;
    feedItemId: string;
    cowId?: string | null;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    consumptionDate: Date | string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FeedConsumptionCreateOrConnectWithoutRecordedByInput = {
    where: Prisma.FeedConsumptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeedConsumptionCreateWithoutRecordedByInput, Prisma.FeedConsumptionUncheckedCreateWithoutRecordedByInput>;
};
export type FeedConsumptionCreateManyRecordedByInputEnvelope = {
    data: Prisma.FeedConsumptionCreateManyRecordedByInput | Prisma.FeedConsumptionCreateManyRecordedByInput[];
    skipDuplicates?: boolean;
};
export type FeedConsumptionUpsertWithWhereUniqueWithoutRecordedByInput = {
    where: Prisma.FeedConsumptionWhereUniqueInput;
    update: Prisma.XOR<Prisma.FeedConsumptionUpdateWithoutRecordedByInput, Prisma.FeedConsumptionUncheckedUpdateWithoutRecordedByInput>;
    create: Prisma.XOR<Prisma.FeedConsumptionCreateWithoutRecordedByInput, Prisma.FeedConsumptionUncheckedCreateWithoutRecordedByInput>;
};
export type FeedConsumptionUpdateWithWhereUniqueWithoutRecordedByInput = {
    where: Prisma.FeedConsumptionWhereUniqueInput;
    data: Prisma.XOR<Prisma.FeedConsumptionUpdateWithoutRecordedByInput, Prisma.FeedConsumptionUncheckedUpdateWithoutRecordedByInput>;
};
export type FeedConsumptionUpdateManyWithWhereWithoutRecordedByInput = {
    where: Prisma.FeedConsumptionScalarWhereInput;
    data: Prisma.XOR<Prisma.FeedConsumptionUpdateManyMutationInput, Prisma.FeedConsumptionUncheckedUpdateManyWithoutRecordedByInput>;
};
export type FeedConsumptionScalarWhereInput = {
    AND?: Prisma.FeedConsumptionScalarWhereInput | Prisma.FeedConsumptionScalarWhereInput[];
    OR?: Prisma.FeedConsumptionScalarWhereInput[];
    NOT?: Prisma.FeedConsumptionScalarWhereInput | Prisma.FeedConsumptionScalarWhereInput[];
    id?: Prisma.StringFilter<"FeedConsumption"> | string;
    feedItemId?: Prisma.StringFilter<"FeedConsumption"> | string;
    cowId?: Prisma.StringNullableFilter<"FeedConsumption"> | string | null;
    quantity?: Prisma.DecimalFilter<"FeedConsumption"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    consumptionDate?: Prisma.DateTimeFilter<"FeedConsumption"> | Date | string;
    notes?: Prisma.StringNullableFilter<"FeedConsumption"> | string | null;
    recordedById?: Prisma.StringFilter<"FeedConsumption"> | string;
    createdAt?: Prisma.DateTimeFilter<"FeedConsumption"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FeedConsumption"> | Date | string;
};
export type FeedConsumptionCreateWithoutCowInput = {
    id?: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    consumptionDate: Date | string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    feedItem: Prisma.FeedItemCreateNestedOneWithoutConsumptionsInput;
    recordedBy: Prisma.UserCreateNestedOneWithoutFeedConsumptionsInput;
};
export type FeedConsumptionUncheckedCreateWithoutCowInput = {
    id?: string;
    feedItemId: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    consumptionDate: Date | string;
    notes?: string | null;
    recordedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FeedConsumptionCreateOrConnectWithoutCowInput = {
    where: Prisma.FeedConsumptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeedConsumptionCreateWithoutCowInput, Prisma.FeedConsumptionUncheckedCreateWithoutCowInput>;
};
export type FeedConsumptionCreateManyCowInputEnvelope = {
    data: Prisma.FeedConsumptionCreateManyCowInput | Prisma.FeedConsumptionCreateManyCowInput[];
    skipDuplicates?: boolean;
};
export type FeedConsumptionUpsertWithWhereUniqueWithoutCowInput = {
    where: Prisma.FeedConsumptionWhereUniqueInput;
    update: Prisma.XOR<Prisma.FeedConsumptionUpdateWithoutCowInput, Prisma.FeedConsumptionUncheckedUpdateWithoutCowInput>;
    create: Prisma.XOR<Prisma.FeedConsumptionCreateWithoutCowInput, Prisma.FeedConsumptionUncheckedCreateWithoutCowInput>;
};
export type FeedConsumptionUpdateWithWhereUniqueWithoutCowInput = {
    where: Prisma.FeedConsumptionWhereUniqueInput;
    data: Prisma.XOR<Prisma.FeedConsumptionUpdateWithoutCowInput, Prisma.FeedConsumptionUncheckedUpdateWithoutCowInput>;
};
export type FeedConsumptionUpdateManyWithWhereWithoutCowInput = {
    where: Prisma.FeedConsumptionScalarWhereInput;
    data: Prisma.XOR<Prisma.FeedConsumptionUpdateManyMutationInput, Prisma.FeedConsumptionUncheckedUpdateManyWithoutCowInput>;
};
export type FeedConsumptionCreateWithoutFeedItemInput = {
    id?: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    consumptionDate: Date | string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cow?: Prisma.CowCreateNestedOneWithoutFeedConsumptionsInput;
    recordedBy: Prisma.UserCreateNestedOneWithoutFeedConsumptionsInput;
};
export type FeedConsumptionUncheckedCreateWithoutFeedItemInput = {
    id?: string;
    cowId?: string | null;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    consumptionDate: Date | string;
    notes?: string | null;
    recordedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FeedConsumptionCreateOrConnectWithoutFeedItemInput = {
    where: Prisma.FeedConsumptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeedConsumptionCreateWithoutFeedItemInput, Prisma.FeedConsumptionUncheckedCreateWithoutFeedItemInput>;
};
export type FeedConsumptionCreateManyFeedItemInputEnvelope = {
    data: Prisma.FeedConsumptionCreateManyFeedItemInput | Prisma.FeedConsumptionCreateManyFeedItemInput[];
    skipDuplicates?: boolean;
};
export type FeedConsumptionUpsertWithWhereUniqueWithoutFeedItemInput = {
    where: Prisma.FeedConsumptionWhereUniqueInput;
    update: Prisma.XOR<Prisma.FeedConsumptionUpdateWithoutFeedItemInput, Prisma.FeedConsumptionUncheckedUpdateWithoutFeedItemInput>;
    create: Prisma.XOR<Prisma.FeedConsumptionCreateWithoutFeedItemInput, Prisma.FeedConsumptionUncheckedCreateWithoutFeedItemInput>;
};
export type FeedConsumptionUpdateWithWhereUniqueWithoutFeedItemInput = {
    where: Prisma.FeedConsumptionWhereUniqueInput;
    data: Prisma.XOR<Prisma.FeedConsumptionUpdateWithoutFeedItemInput, Prisma.FeedConsumptionUncheckedUpdateWithoutFeedItemInput>;
};
export type FeedConsumptionUpdateManyWithWhereWithoutFeedItemInput = {
    where: Prisma.FeedConsumptionScalarWhereInput;
    data: Prisma.XOR<Prisma.FeedConsumptionUpdateManyMutationInput, Prisma.FeedConsumptionUncheckedUpdateManyWithoutFeedItemInput>;
};
export type FeedConsumptionCreateManyRecordedByInput = {
    id?: string;
    feedItemId: string;
    cowId?: string | null;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    consumptionDate: Date | string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FeedConsumptionUpdateWithoutRecordedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    consumptionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    feedItem?: Prisma.FeedItemUpdateOneRequiredWithoutConsumptionsNestedInput;
    cow?: Prisma.CowUpdateOneWithoutFeedConsumptionsNestedInput;
};
export type FeedConsumptionUncheckedUpdateWithoutRecordedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    feedItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    cowId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    consumptionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeedConsumptionUncheckedUpdateManyWithoutRecordedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    feedItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    cowId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    consumptionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeedConsumptionCreateManyCowInput = {
    id?: string;
    feedItemId: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    consumptionDate: Date | string;
    notes?: string | null;
    recordedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FeedConsumptionUpdateWithoutCowInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    consumptionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    feedItem?: Prisma.FeedItemUpdateOneRequiredWithoutConsumptionsNestedInput;
    recordedBy?: Prisma.UserUpdateOneRequiredWithoutFeedConsumptionsNestedInput;
};
export type FeedConsumptionUncheckedUpdateWithoutCowInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    feedItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    consumptionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeedConsumptionUncheckedUpdateManyWithoutCowInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    feedItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    consumptionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeedConsumptionCreateManyFeedItemInput = {
    id?: string;
    cowId?: string | null;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    consumptionDate: Date | string;
    notes?: string | null;
    recordedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FeedConsumptionUpdateWithoutFeedItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    consumptionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cow?: Prisma.CowUpdateOneWithoutFeedConsumptionsNestedInput;
    recordedBy?: Prisma.UserUpdateOneRequiredWithoutFeedConsumptionsNestedInput;
};
export type FeedConsumptionUncheckedUpdateWithoutFeedItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cowId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    consumptionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeedConsumptionUncheckedUpdateManyWithoutFeedItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cowId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    consumptionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeedConsumptionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    feedItemId?: boolean;
    cowId?: boolean;
    quantity?: boolean;
    consumptionDate?: boolean;
    notes?: boolean;
    recordedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    feedItem?: boolean | Prisma.FeedItemDefaultArgs<ExtArgs>;
    cow?: boolean | Prisma.FeedConsumption$cowArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["feedConsumption"]>;
export type FeedConsumptionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    feedItemId?: boolean;
    cowId?: boolean;
    quantity?: boolean;
    consumptionDate?: boolean;
    notes?: boolean;
    recordedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    feedItem?: boolean | Prisma.FeedItemDefaultArgs<ExtArgs>;
    cow?: boolean | Prisma.FeedConsumption$cowArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["feedConsumption"]>;
export type FeedConsumptionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    feedItemId?: boolean;
    cowId?: boolean;
    quantity?: boolean;
    consumptionDate?: boolean;
    notes?: boolean;
    recordedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    feedItem?: boolean | Prisma.FeedItemDefaultArgs<ExtArgs>;
    cow?: boolean | Prisma.FeedConsumption$cowArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["feedConsumption"]>;
export type FeedConsumptionSelectScalar = {
    id?: boolean;
    feedItemId?: boolean;
    cowId?: boolean;
    quantity?: boolean;
    consumptionDate?: boolean;
    notes?: boolean;
    recordedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type FeedConsumptionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "feedItemId" | "cowId" | "quantity" | "consumptionDate" | "notes" | "recordedById" | "createdAt" | "updatedAt", ExtArgs["result"]["feedConsumption"]>;
export type FeedConsumptionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    feedItem?: boolean | Prisma.FeedItemDefaultArgs<ExtArgs>;
    cow?: boolean | Prisma.FeedConsumption$cowArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type FeedConsumptionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    feedItem?: boolean | Prisma.FeedItemDefaultArgs<ExtArgs>;
    cow?: boolean | Prisma.FeedConsumption$cowArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type FeedConsumptionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    feedItem?: boolean | Prisma.FeedItemDefaultArgs<ExtArgs>;
    cow?: boolean | Prisma.FeedConsumption$cowArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $FeedConsumptionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FeedConsumption";
    objects: {
        feedItem: Prisma.$FeedItemPayload<ExtArgs>;
        cow: Prisma.$CowPayload<ExtArgs> | null;
        recordedBy: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        feedItemId: string;
        cowId: string | null;
        quantity: runtime.Decimal;
        consumptionDate: Date;
        notes: string | null;
        recordedById: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["feedConsumption"]>;
    composites: {};
};
export type FeedConsumptionGetPayload<S extends boolean | null | undefined | FeedConsumptionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FeedConsumptionPayload, S>;
export type FeedConsumptionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FeedConsumptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FeedConsumptionCountAggregateInputType | true;
};
export interface FeedConsumptionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FeedConsumption'];
        meta: {
            name: 'FeedConsumption';
        };
    };
    /**
     * Find zero or one FeedConsumption that matches the filter.
     * @param {FeedConsumptionFindUniqueArgs} args - Arguments to find a FeedConsumption
     * @example
     * // Get one FeedConsumption
     * const feedConsumption = await prisma.feedConsumption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedConsumptionFindUniqueArgs>(args: Prisma.SelectSubset<T, FeedConsumptionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FeedConsumptionClient<runtime.Types.Result.GetResult<Prisma.$FeedConsumptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one FeedConsumption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedConsumptionFindUniqueOrThrowArgs} args - Arguments to find a FeedConsumption
     * @example
     * // Get one FeedConsumption
     * const feedConsumption = await prisma.feedConsumption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedConsumptionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FeedConsumptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FeedConsumptionClient<runtime.Types.Result.GetResult<Prisma.$FeedConsumptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first FeedConsumption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedConsumptionFindFirstArgs} args - Arguments to find a FeedConsumption
     * @example
     * // Get one FeedConsumption
     * const feedConsumption = await prisma.feedConsumption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedConsumptionFindFirstArgs>(args?: Prisma.SelectSubset<T, FeedConsumptionFindFirstArgs<ExtArgs>>): Prisma.Prisma__FeedConsumptionClient<runtime.Types.Result.GetResult<Prisma.$FeedConsumptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first FeedConsumption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedConsumptionFindFirstOrThrowArgs} args - Arguments to find a FeedConsumption
     * @example
     * // Get one FeedConsumption
     * const feedConsumption = await prisma.feedConsumption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedConsumptionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FeedConsumptionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FeedConsumptionClient<runtime.Types.Result.GetResult<Prisma.$FeedConsumptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more FeedConsumptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedConsumptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeedConsumptions
     * const feedConsumptions = await prisma.feedConsumption.findMany()
     *
     * // Get first 10 FeedConsumptions
     * const feedConsumptions = await prisma.feedConsumption.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const feedConsumptionWithIdOnly = await prisma.feedConsumption.findMany({ select: { id: true } })
     *
     */
    findMany<T extends FeedConsumptionFindManyArgs>(args?: Prisma.SelectSubset<T, FeedConsumptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeedConsumptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a FeedConsumption.
     * @param {FeedConsumptionCreateArgs} args - Arguments to create a FeedConsumption.
     * @example
     * // Create one FeedConsumption
     * const FeedConsumption = await prisma.feedConsumption.create({
     *   data: {
     *     // ... data to create a FeedConsumption
     *   }
     * })
     *
     */
    create<T extends FeedConsumptionCreateArgs>(args: Prisma.SelectSubset<T, FeedConsumptionCreateArgs<ExtArgs>>): Prisma.Prisma__FeedConsumptionClient<runtime.Types.Result.GetResult<Prisma.$FeedConsumptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many FeedConsumptions.
     * @param {FeedConsumptionCreateManyArgs} args - Arguments to create many FeedConsumptions.
     * @example
     * // Create many FeedConsumptions
     * const feedConsumption = await prisma.feedConsumption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FeedConsumptionCreateManyArgs>(args?: Prisma.SelectSubset<T, FeedConsumptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many FeedConsumptions and returns the data saved in the database.
     * @param {FeedConsumptionCreateManyAndReturnArgs} args - Arguments to create many FeedConsumptions.
     * @example
     * // Create many FeedConsumptions
     * const feedConsumption = await prisma.feedConsumption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many FeedConsumptions and only return the `id`
     * const feedConsumptionWithIdOnly = await prisma.feedConsumption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FeedConsumptionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FeedConsumptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeedConsumptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a FeedConsumption.
     * @param {FeedConsumptionDeleteArgs} args - Arguments to delete one FeedConsumption.
     * @example
     * // Delete one FeedConsumption
     * const FeedConsumption = await prisma.feedConsumption.delete({
     *   where: {
     *     // ... filter to delete one FeedConsumption
     *   }
     * })
     *
     */
    delete<T extends FeedConsumptionDeleteArgs>(args: Prisma.SelectSubset<T, FeedConsumptionDeleteArgs<ExtArgs>>): Prisma.Prisma__FeedConsumptionClient<runtime.Types.Result.GetResult<Prisma.$FeedConsumptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one FeedConsumption.
     * @param {FeedConsumptionUpdateArgs} args - Arguments to update one FeedConsumption.
     * @example
     * // Update one FeedConsumption
     * const feedConsumption = await prisma.feedConsumption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FeedConsumptionUpdateArgs>(args: Prisma.SelectSubset<T, FeedConsumptionUpdateArgs<ExtArgs>>): Prisma.Prisma__FeedConsumptionClient<runtime.Types.Result.GetResult<Prisma.$FeedConsumptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more FeedConsumptions.
     * @param {FeedConsumptionDeleteManyArgs} args - Arguments to filter FeedConsumptions to delete.
     * @example
     * // Delete a few FeedConsumptions
     * const { count } = await prisma.feedConsumption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FeedConsumptionDeleteManyArgs>(args?: Prisma.SelectSubset<T, FeedConsumptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more FeedConsumptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedConsumptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeedConsumptions
     * const feedConsumption = await prisma.feedConsumption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FeedConsumptionUpdateManyArgs>(args: Prisma.SelectSubset<T, FeedConsumptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more FeedConsumptions and returns the data updated in the database.
     * @param {FeedConsumptionUpdateManyAndReturnArgs} args - Arguments to update many FeedConsumptions.
     * @example
     * // Update many FeedConsumptions
     * const feedConsumption = await prisma.feedConsumption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more FeedConsumptions and only return the `id`
     * const feedConsumptionWithIdOnly = await prisma.feedConsumption.updateManyAndReturn({
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
    updateManyAndReturn<T extends FeedConsumptionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FeedConsumptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeedConsumptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one FeedConsumption.
     * @param {FeedConsumptionUpsertArgs} args - Arguments to update or create a FeedConsumption.
     * @example
     * // Update or create a FeedConsumption
     * const feedConsumption = await prisma.feedConsumption.upsert({
     *   create: {
     *     // ... data to create a FeedConsumption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeedConsumption we want to update
     *   }
     * })
     */
    upsert<T extends FeedConsumptionUpsertArgs>(args: Prisma.SelectSubset<T, FeedConsumptionUpsertArgs<ExtArgs>>): Prisma.Prisma__FeedConsumptionClient<runtime.Types.Result.GetResult<Prisma.$FeedConsumptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of FeedConsumptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedConsumptionCountArgs} args - Arguments to filter FeedConsumptions to count.
     * @example
     * // Count the number of FeedConsumptions
     * const count = await prisma.feedConsumption.count({
     *   where: {
     *     // ... the filter for the FeedConsumptions we want to count
     *   }
     * })
    **/
    count<T extends FeedConsumptionCountArgs>(args?: Prisma.Subset<T, FeedConsumptionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FeedConsumptionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a FeedConsumption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedConsumptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeedConsumptionAggregateArgs>(args: Prisma.Subset<T, FeedConsumptionAggregateArgs>): Prisma.PrismaPromise<GetFeedConsumptionAggregateType<T>>;
    /**
     * Group by FeedConsumption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedConsumptionGroupByArgs} args - Group by arguments.
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
    groupBy<T extends FeedConsumptionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FeedConsumptionGroupByArgs['orderBy'];
    } : {
        orderBy?: FeedConsumptionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FeedConsumptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedConsumptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the FeedConsumption model
     */
    readonly fields: FeedConsumptionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for FeedConsumption.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__FeedConsumptionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    feedItem<T extends Prisma.FeedItemDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FeedItemDefaultArgs<ExtArgs>>): Prisma.Prisma__FeedItemClient<runtime.Types.Result.GetResult<Prisma.$FeedItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    cow<T extends Prisma.FeedConsumption$cowArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FeedConsumption$cowArgs<ExtArgs>>): Prisma.Prisma__CowClient<runtime.Types.Result.GetResult<Prisma.$CowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    recordedBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the FeedConsumption model
 */
export interface FeedConsumptionFieldRefs {
    readonly id: Prisma.FieldRef<"FeedConsumption", 'String'>;
    readonly feedItemId: Prisma.FieldRef<"FeedConsumption", 'String'>;
    readonly cowId: Prisma.FieldRef<"FeedConsumption", 'String'>;
    readonly quantity: Prisma.FieldRef<"FeedConsumption", 'Decimal'>;
    readonly consumptionDate: Prisma.FieldRef<"FeedConsumption", 'DateTime'>;
    readonly notes: Prisma.FieldRef<"FeedConsumption", 'String'>;
    readonly recordedById: Prisma.FieldRef<"FeedConsumption", 'String'>;
    readonly createdAt: Prisma.FieldRef<"FeedConsumption", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"FeedConsumption", 'DateTime'>;
}
/**
 * FeedConsumption findUnique
 */
export type FeedConsumptionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedConsumption
     */
    select?: Prisma.FeedConsumptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedConsumption
     */
    omit?: Prisma.FeedConsumptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedConsumptionInclude<ExtArgs> | null;
    /**
     * Filter, which FeedConsumption to fetch.
     */
    where: Prisma.FeedConsumptionWhereUniqueInput;
};
/**
 * FeedConsumption findUniqueOrThrow
 */
export type FeedConsumptionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedConsumption
     */
    select?: Prisma.FeedConsumptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedConsumption
     */
    omit?: Prisma.FeedConsumptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedConsumptionInclude<ExtArgs> | null;
    /**
     * Filter, which FeedConsumption to fetch.
     */
    where: Prisma.FeedConsumptionWhereUniqueInput;
};
/**
 * FeedConsumption findFirst
 */
export type FeedConsumptionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedConsumption
     */
    select?: Prisma.FeedConsumptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedConsumption
     */
    omit?: Prisma.FeedConsumptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedConsumptionInclude<ExtArgs> | null;
    /**
     * Filter, which FeedConsumption to fetch.
     */
    where?: Prisma.FeedConsumptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FeedConsumptions to fetch.
     */
    orderBy?: Prisma.FeedConsumptionOrderByWithRelationInput | Prisma.FeedConsumptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FeedConsumptions.
     */
    cursor?: Prisma.FeedConsumptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FeedConsumptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FeedConsumptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FeedConsumptions.
     */
    distinct?: Prisma.FeedConsumptionScalarFieldEnum | Prisma.FeedConsumptionScalarFieldEnum[];
};
/**
 * FeedConsumption findFirstOrThrow
 */
export type FeedConsumptionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedConsumption
     */
    select?: Prisma.FeedConsumptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedConsumption
     */
    omit?: Prisma.FeedConsumptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedConsumptionInclude<ExtArgs> | null;
    /**
     * Filter, which FeedConsumption to fetch.
     */
    where?: Prisma.FeedConsumptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FeedConsumptions to fetch.
     */
    orderBy?: Prisma.FeedConsumptionOrderByWithRelationInput | Prisma.FeedConsumptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FeedConsumptions.
     */
    cursor?: Prisma.FeedConsumptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FeedConsumptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FeedConsumptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FeedConsumptions.
     */
    distinct?: Prisma.FeedConsumptionScalarFieldEnum | Prisma.FeedConsumptionScalarFieldEnum[];
};
/**
 * FeedConsumption findMany
 */
export type FeedConsumptionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedConsumption
     */
    select?: Prisma.FeedConsumptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedConsumption
     */
    omit?: Prisma.FeedConsumptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedConsumptionInclude<ExtArgs> | null;
    /**
     * Filter, which FeedConsumptions to fetch.
     */
    where?: Prisma.FeedConsumptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FeedConsumptions to fetch.
     */
    orderBy?: Prisma.FeedConsumptionOrderByWithRelationInput | Prisma.FeedConsumptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing FeedConsumptions.
     */
    cursor?: Prisma.FeedConsumptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FeedConsumptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FeedConsumptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FeedConsumptions.
     */
    distinct?: Prisma.FeedConsumptionScalarFieldEnum | Prisma.FeedConsumptionScalarFieldEnum[];
};
/**
 * FeedConsumption create
 */
export type FeedConsumptionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedConsumption
     */
    select?: Prisma.FeedConsumptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedConsumption
     */
    omit?: Prisma.FeedConsumptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedConsumptionInclude<ExtArgs> | null;
    /**
     * The data needed to create a FeedConsumption.
     */
    data: Prisma.XOR<Prisma.FeedConsumptionCreateInput, Prisma.FeedConsumptionUncheckedCreateInput>;
};
/**
 * FeedConsumption createMany
 */
export type FeedConsumptionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeedConsumptions.
     */
    data: Prisma.FeedConsumptionCreateManyInput | Prisma.FeedConsumptionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * FeedConsumption createManyAndReturn
 */
export type FeedConsumptionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedConsumption
     */
    select?: Prisma.FeedConsumptionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedConsumption
     */
    omit?: Prisma.FeedConsumptionOmit<ExtArgs> | null;
    /**
     * The data used to create many FeedConsumptions.
     */
    data: Prisma.FeedConsumptionCreateManyInput | Prisma.FeedConsumptionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedConsumptionIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * FeedConsumption update
 */
export type FeedConsumptionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedConsumption
     */
    select?: Prisma.FeedConsumptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedConsumption
     */
    omit?: Prisma.FeedConsumptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedConsumptionInclude<ExtArgs> | null;
    /**
     * The data needed to update a FeedConsumption.
     */
    data: Prisma.XOR<Prisma.FeedConsumptionUpdateInput, Prisma.FeedConsumptionUncheckedUpdateInput>;
    /**
     * Choose, which FeedConsumption to update.
     */
    where: Prisma.FeedConsumptionWhereUniqueInput;
};
/**
 * FeedConsumption updateMany
 */
export type FeedConsumptionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update FeedConsumptions.
     */
    data: Prisma.XOR<Prisma.FeedConsumptionUpdateManyMutationInput, Prisma.FeedConsumptionUncheckedUpdateManyInput>;
    /**
     * Filter which FeedConsumptions to update
     */
    where?: Prisma.FeedConsumptionWhereInput;
    /**
     * Limit how many FeedConsumptions to update.
     */
    limit?: number;
};
/**
 * FeedConsumption updateManyAndReturn
 */
export type FeedConsumptionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedConsumption
     */
    select?: Prisma.FeedConsumptionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedConsumption
     */
    omit?: Prisma.FeedConsumptionOmit<ExtArgs> | null;
    /**
     * The data used to update FeedConsumptions.
     */
    data: Prisma.XOR<Prisma.FeedConsumptionUpdateManyMutationInput, Prisma.FeedConsumptionUncheckedUpdateManyInput>;
    /**
     * Filter which FeedConsumptions to update
     */
    where?: Prisma.FeedConsumptionWhereInput;
    /**
     * Limit how many FeedConsumptions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedConsumptionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * FeedConsumption upsert
 */
export type FeedConsumptionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedConsumption
     */
    select?: Prisma.FeedConsumptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedConsumption
     */
    omit?: Prisma.FeedConsumptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedConsumptionInclude<ExtArgs> | null;
    /**
     * The filter to search for the FeedConsumption to update in case it exists.
     */
    where: Prisma.FeedConsumptionWhereUniqueInput;
    /**
     * In case the FeedConsumption found by the `where` argument doesn't exist, create a new FeedConsumption with this data.
     */
    create: Prisma.XOR<Prisma.FeedConsumptionCreateInput, Prisma.FeedConsumptionUncheckedCreateInput>;
    /**
     * In case the FeedConsumption was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.FeedConsumptionUpdateInput, Prisma.FeedConsumptionUncheckedUpdateInput>;
};
/**
 * FeedConsumption delete
 */
export type FeedConsumptionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedConsumption
     */
    select?: Prisma.FeedConsumptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedConsumption
     */
    omit?: Prisma.FeedConsumptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedConsumptionInclude<ExtArgs> | null;
    /**
     * Filter which FeedConsumption to delete.
     */
    where: Prisma.FeedConsumptionWhereUniqueInput;
};
/**
 * FeedConsumption deleteMany
 */
export type FeedConsumptionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which FeedConsumptions to delete
     */
    where?: Prisma.FeedConsumptionWhereInput;
    /**
     * Limit how many FeedConsumptions to delete.
     */
    limit?: number;
};
/**
 * FeedConsumption.cow
 */
export type FeedConsumption$cowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * FeedConsumption without action
 */
export type FeedConsumptionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedConsumption
     */
    select?: Prisma.FeedConsumptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedConsumption
     */
    omit?: Prisma.FeedConsumptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedConsumptionInclude<ExtArgs> | null;
};
//# sourceMappingURL=FeedConsumption.d.ts.map