import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model MilkProduction
 *
 */
export type MilkProductionModel = runtime.Types.Result.DefaultSelection<Prisma.$MilkProductionPayload>;
export type AggregateMilkProduction = {
    _count: MilkProductionCountAggregateOutputType | null;
    _avg: MilkProductionAvgAggregateOutputType | null;
    _sum: MilkProductionSumAggregateOutputType | null;
    _min: MilkProductionMinAggregateOutputType | null;
    _max: MilkProductionMaxAggregateOutputType | null;
};
export type MilkProductionAvgAggregateOutputType = {
    morningYield: runtime.Decimal | null;
    eveningYield: runtime.Decimal | null;
};
export type MilkProductionSumAggregateOutputType = {
    morningYield: runtime.Decimal | null;
    eveningYield: runtime.Decimal | null;
};
export type MilkProductionMinAggregateOutputType = {
    id: string | null;
    cowId: string | null;
    productionDate: Date | null;
    morningYield: runtime.Decimal | null;
    eveningYield: runtime.Decimal | null;
    notes: string | null;
    recordedById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MilkProductionMaxAggregateOutputType = {
    id: string | null;
    cowId: string | null;
    productionDate: Date | null;
    morningYield: runtime.Decimal | null;
    eveningYield: runtime.Decimal | null;
    notes: string | null;
    recordedById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MilkProductionCountAggregateOutputType = {
    id: number;
    cowId: number;
    productionDate: number;
    morningYield: number;
    eveningYield: number;
    notes: number;
    recordedById: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MilkProductionAvgAggregateInputType = {
    morningYield?: true;
    eveningYield?: true;
};
export type MilkProductionSumAggregateInputType = {
    morningYield?: true;
    eveningYield?: true;
};
export type MilkProductionMinAggregateInputType = {
    id?: true;
    cowId?: true;
    productionDate?: true;
    morningYield?: true;
    eveningYield?: true;
    notes?: true;
    recordedById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MilkProductionMaxAggregateInputType = {
    id?: true;
    cowId?: true;
    productionDate?: true;
    morningYield?: true;
    eveningYield?: true;
    notes?: true;
    recordedById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MilkProductionCountAggregateInputType = {
    id?: true;
    cowId?: true;
    productionDate?: true;
    morningYield?: true;
    eveningYield?: true;
    notes?: true;
    recordedById?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MilkProductionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MilkProduction to aggregate.
     */
    where?: Prisma.MilkProductionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MilkProductions to fetch.
     */
    orderBy?: Prisma.MilkProductionOrderByWithRelationInput | Prisma.MilkProductionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.MilkProductionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MilkProductions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MilkProductions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MilkProductions
    **/
    _count?: true | MilkProductionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: MilkProductionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: MilkProductionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MilkProductionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MilkProductionMaxAggregateInputType;
};
export type GetMilkProductionAggregateType<T extends MilkProductionAggregateArgs> = {
    [P in keyof T & keyof AggregateMilkProduction]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMilkProduction[P]> : Prisma.GetScalarType<T[P], AggregateMilkProduction[P]>;
};
export type MilkProductionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MilkProductionWhereInput;
    orderBy?: Prisma.MilkProductionOrderByWithAggregationInput | Prisma.MilkProductionOrderByWithAggregationInput[];
    by: Prisma.MilkProductionScalarFieldEnum[] | Prisma.MilkProductionScalarFieldEnum;
    having?: Prisma.MilkProductionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MilkProductionCountAggregateInputType | true;
    _avg?: MilkProductionAvgAggregateInputType;
    _sum?: MilkProductionSumAggregateInputType;
    _min?: MilkProductionMinAggregateInputType;
    _max?: MilkProductionMaxAggregateInputType;
};
export type MilkProductionGroupByOutputType = {
    id: string;
    cowId: string;
    productionDate: Date;
    morningYield: runtime.Decimal | null;
    eveningYield: runtime.Decimal | null;
    notes: string | null;
    recordedById: string;
    createdAt: Date;
    updatedAt: Date;
    _count: MilkProductionCountAggregateOutputType | null;
    _avg: MilkProductionAvgAggregateOutputType | null;
    _sum: MilkProductionSumAggregateOutputType | null;
    _min: MilkProductionMinAggregateOutputType | null;
    _max: MilkProductionMaxAggregateOutputType | null;
};
export type GetMilkProductionGroupByPayload<T extends MilkProductionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MilkProductionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MilkProductionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MilkProductionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MilkProductionGroupByOutputType[P]>;
}>>;
export type MilkProductionWhereInput = {
    AND?: Prisma.MilkProductionWhereInput | Prisma.MilkProductionWhereInput[];
    OR?: Prisma.MilkProductionWhereInput[];
    NOT?: Prisma.MilkProductionWhereInput | Prisma.MilkProductionWhereInput[];
    id?: Prisma.StringFilter<"MilkProduction"> | string;
    cowId?: Prisma.StringFilter<"MilkProduction"> | string;
    productionDate?: Prisma.DateTimeFilter<"MilkProduction"> | Date | string;
    morningYield?: Prisma.DecimalNullableFilter<"MilkProduction"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    eveningYield?: Prisma.DecimalNullableFilter<"MilkProduction"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.StringNullableFilter<"MilkProduction"> | string | null;
    recordedById?: Prisma.StringFilter<"MilkProduction"> | string;
    createdAt?: Prisma.DateTimeFilter<"MilkProduction"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MilkProduction"> | Date | string;
    cow?: Prisma.XOR<Prisma.CowScalarRelationFilter, Prisma.CowWhereInput>;
    recordedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type MilkProductionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    cowId?: Prisma.SortOrder;
    productionDate?: Prisma.SortOrder;
    morningYield?: Prisma.SortOrderInput | Prisma.SortOrder;
    eveningYield?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    recordedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    cow?: Prisma.CowOrderByWithRelationInput;
    recordedBy?: Prisma.UserOrderByWithRelationInput;
};
export type MilkProductionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    cowId_productionDate?: Prisma.MilkProductionCowIdProductionDateCompoundUniqueInput;
    AND?: Prisma.MilkProductionWhereInput | Prisma.MilkProductionWhereInput[];
    OR?: Prisma.MilkProductionWhereInput[];
    NOT?: Prisma.MilkProductionWhereInput | Prisma.MilkProductionWhereInput[];
    cowId?: Prisma.StringFilter<"MilkProduction"> | string;
    productionDate?: Prisma.DateTimeFilter<"MilkProduction"> | Date | string;
    morningYield?: Prisma.DecimalNullableFilter<"MilkProduction"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    eveningYield?: Prisma.DecimalNullableFilter<"MilkProduction"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.StringNullableFilter<"MilkProduction"> | string | null;
    recordedById?: Prisma.StringFilter<"MilkProduction"> | string;
    createdAt?: Prisma.DateTimeFilter<"MilkProduction"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MilkProduction"> | Date | string;
    cow?: Prisma.XOR<Prisma.CowScalarRelationFilter, Prisma.CowWhereInput>;
    recordedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "cowId_productionDate">;
export type MilkProductionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    cowId?: Prisma.SortOrder;
    productionDate?: Prisma.SortOrder;
    morningYield?: Prisma.SortOrderInput | Prisma.SortOrder;
    eveningYield?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    recordedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MilkProductionCountOrderByAggregateInput;
    _avg?: Prisma.MilkProductionAvgOrderByAggregateInput;
    _max?: Prisma.MilkProductionMaxOrderByAggregateInput;
    _min?: Prisma.MilkProductionMinOrderByAggregateInput;
    _sum?: Prisma.MilkProductionSumOrderByAggregateInput;
};
export type MilkProductionScalarWhereWithAggregatesInput = {
    AND?: Prisma.MilkProductionScalarWhereWithAggregatesInput | Prisma.MilkProductionScalarWhereWithAggregatesInput[];
    OR?: Prisma.MilkProductionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MilkProductionScalarWhereWithAggregatesInput | Prisma.MilkProductionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"MilkProduction"> | string;
    cowId?: Prisma.StringWithAggregatesFilter<"MilkProduction"> | string;
    productionDate?: Prisma.DateTimeWithAggregatesFilter<"MilkProduction"> | Date | string;
    morningYield?: Prisma.DecimalNullableWithAggregatesFilter<"MilkProduction"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    eveningYield?: Prisma.DecimalNullableWithAggregatesFilter<"MilkProduction"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"MilkProduction"> | string | null;
    recordedById?: Prisma.StringWithAggregatesFilter<"MilkProduction"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MilkProduction"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"MilkProduction"> | Date | string;
};
export type MilkProductionCreateInput = {
    id?: string;
    productionDate: Date | string;
    morningYield?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    eveningYield?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cow: Prisma.CowCreateNestedOneWithoutMilkProductionsInput;
    recordedBy: Prisma.UserCreateNestedOneWithoutMilkProductionsInput;
};
export type MilkProductionUncheckedCreateInput = {
    id?: string;
    cowId: string;
    productionDate: Date | string;
    morningYield?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    eveningYield?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: string | null;
    recordedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MilkProductionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    morningYield?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    eveningYield?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cow?: Prisma.CowUpdateOneRequiredWithoutMilkProductionsNestedInput;
    recordedBy?: Prisma.UserUpdateOneRequiredWithoutMilkProductionsNestedInput;
};
export type MilkProductionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cowId?: Prisma.StringFieldUpdateOperationsInput | string;
    productionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    morningYield?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    eveningYield?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MilkProductionCreateManyInput = {
    id?: string;
    cowId: string;
    productionDate: Date | string;
    morningYield?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    eveningYield?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: string | null;
    recordedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MilkProductionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    morningYield?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    eveningYield?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MilkProductionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cowId?: Prisma.StringFieldUpdateOperationsInput | string;
    productionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    morningYield?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    eveningYield?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MilkProductionListRelationFilter = {
    every?: Prisma.MilkProductionWhereInput;
    some?: Prisma.MilkProductionWhereInput;
    none?: Prisma.MilkProductionWhereInput;
};
export type MilkProductionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MilkProductionCowIdProductionDateCompoundUniqueInput = {
    cowId: string;
    productionDate: Date | string;
};
export type MilkProductionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cowId?: Prisma.SortOrder;
    productionDate?: Prisma.SortOrder;
    morningYield?: Prisma.SortOrder;
    eveningYield?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    recordedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MilkProductionAvgOrderByAggregateInput = {
    morningYield?: Prisma.SortOrder;
    eveningYield?: Prisma.SortOrder;
};
export type MilkProductionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cowId?: Prisma.SortOrder;
    productionDate?: Prisma.SortOrder;
    morningYield?: Prisma.SortOrder;
    eveningYield?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    recordedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MilkProductionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cowId?: Prisma.SortOrder;
    productionDate?: Prisma.SortOrder;
    morningYield?: Prisma.SortOrder;
    eveningYield?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    recordedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MilkProductionSumOrderByAggregateInput = {
    morningYield?: Prisma.SortOrder;
    eveningYield?: Prisma.SortOrder;
};
export type MilkProductionCreateNestedManyWithoutRecordedByInput = {
    create?: Prisma.XOR<Prisma.MilkProductionCreateWithoutRecordedByInput, Prisma.MilkProductionUncheckedCreateWithoutRecordedByInput> | Prisma.MilkProductionCreateWithoutRecordedByInput[] | Prisma.MilkProductionUncheckedCreateWithoutRecordedByInput[];
    connectOrCreate?: Prisma.MilkProductionCreateOrConnectWithoutRecordedByInput | Prisma.MilkProductionCreateOrConnectWithoutRecordedByInput[];
    createMany?: Prisma.MilkProductionCreateManyRecordedByInputEnvelope;
    connect?: Prisma.MilkProductionWhereUniqueInput | Prisma.MilkProductionWhereUniqueInput[];
};
export type MilkProductionUncheckedCreateNestedManyWithoutRecordedByInput = {
    create?: Prisma.XOR<Prisma.MilkProductionCreateWithoutRecordedByInput, Prisma.MilkProductionUncheckedCreateWithoutRecordedByInput> | Prisma.MilkProductionCreateWithoutRecordedByInput[] | Prisma.MilkProductionUncheckedCreateWithoutRecordedByInput[];
    connectOrCreate?: Prisma.MilkProductionCreateOrConnectWithoutRecordedByInput | Prisma.MilkProductionCreateOrConnectWithoutRecordedByInput[];
    createMany?: Prisma.MilkProductionCreateManyRecordedByInputEnvelope;
    connect?: Prisma.MilkProductionWhereUniqueInput | Prisma.MilkProductionWhereUniqueInput[];
};
export type MilkProductionUpdateManyWithoutRecordedByNestedInput = {
    create?: Prisma.XOR<Prisma.MilkProductionCreateWithoutRecordedByInput, Prisma.MilkProductionUncheckedCreateWithoutRecordedByInput> | Prisma.MilkProductionCreateWithoutRecordedByInput[] | Prisma.MilkProductionUncheckedCreateWithoutRecordedByInput[];
    connectOrCreate?: Prisma.MilkProductionCreateOrConnectWithoutRecordedByInput | Prisma.MilkProductionCreateOrConnectWithoutRecordedByInput[];
    upsert?: Prisma.MilkProductionUpsertWithWhereUniqueWithoutRecordedByInput | Prisma.MilkProductionUpsertWithWhereUniqueWithoutRecordedByInput[];
    createMany?: Prisma.MilkProductionCreateManyRecordedByInputEnvelope;
    set?: Prisma.MilkProductionWhereUniqueInput | Prisma.MilkProductionWhereUniqueInput[];
    disconnect?: Prisma.MilkProductionWhereUniqueInput | Prisma.MilkProductionWhereUniqueInput[];
    delete?: Prisma.MilkProductionWhereUniqueInput | Prisma.MilkProductionWhereUniqueInput[];
    connect?: Prisma.MilkProductionWhereUniqueInput | Prisma.MilkProductionWhereUniqueInput[];
    update?: Prisma.MilkProductionUpdateWithWhereUniqueWithoutRecordedByInput | Prisma.MilkProductionUpdateWithWhereUniqueWithoutRecordedByInput[];
    updateMany?: Prisma.MilkProductionUpdateManyWithWhereWithoutRecordedByInput | Prisma.MilkProductionUpdateManyWithWhereWithoutRecordedByInput[];
    deleteMany?: Prisma.MilkProductionScalarWhereInput | Prisma.MilkProductionScalarWhereInput[];
};
export type MilkProductionUncheckedUpdateManyWithoutRecordedByNestedInput = {
    create?: Prisma.XOR<Prisma.MilkProductionCreateWithoutRecordedByInput, Prisma.MilkProductionUncheckedCreateWithoutRecordedByInput> | Prisma.MilkProductionCreateWithoutRecordedByInput[] | Prisma.MilkProductionUncheckedCreateWithoutRecordedByInput[];
    connectOrCreate?: Prisma.MilkProductionCreateOrConnectWithoutRecordedByInput | Prisma.MilkProductionCreateOrConnectWithoutRecordedByInput[];
    upsert?: Prisma.MilkProductionUpsertWithWhereUniqueWithoutRecordedByInput | Prisma.MilkProductionUpsertWithWhereUniqueWithoutRecordedByInput[];
    createMany?: Prisma.MilkProductionCreateManyRecordedByInputEnvelope;
    set?: Prisma.MilkProductionWhereUniqueInput | Prisma.MilkProductionWhereUniqueInput[];
    disconnect?: Prisma.MilkProductionWhereUniqueInput | Prisma.MilkProductionWhereUniqueInput[];
    delete?: Prisma.MilkProductionWhereUniqueInput | Prisma.MilkProductionWhereUniqueInput[];
    connect?: Prisma.MilkProductionWhereUniqueInput | Prisma.MilkProductionWhereUniqueInput[];
    update?: Prisma.MilkProductionUpdateWithWhereUniqueWithoutRecordedByInput | Prisma.MilkProductionUpdateWithWhereUniqueWithoutRecordedByInput[];
    updateMany?: Prisma.MilkProductionUpdateManyWithWhereWithoutRecordedByInput | Prisma.MilkProductionUpdateManyWithWhereWithoutRecordedByInput[];
    deleteMany?: Prisma.MilkProductionScalarWhereInput | Prisma.MilkProductionScalarWhereInput[];
};
export type MilkProductionCreateNestedManyWithoutCowInput = {
    create?: Prisma.XOR<Prisma.MilkProductionCreateWithoutCowInput, Prisma.MilkProductionUncheckedCreateWithoutCowInput> | Prisma.MilkProductionCreateWithoutCowInput[] | Prisma.MilkProductionUncheckedCreateWithoutCowInput[];
    connectOrCreate?: Prisma.MilkProductionCreateOrConnectWithoutCowInput | Prisma.MilkProductionCreateOrConnectWithoutCowInput[];
    createMany?: Prisma.MilkProductionCreateManyCowInputEnvelope;
    connect?: Prisma.MilkProductionWhereUniqueInput | Prisma.MilkProductionWhereUniqueInput[];
};
export type MilkProductionUncheckedCreateNestedManyWithoutCowInput = {
    create?: Prisma.XOR<Prisma.MilkProductionCreateWithoutCowInput, Prisma.MilkProductionUncheckedCreateWithoutCowInput> | Prisma.MilkProductionCreateWithoutCowInput[] | Prisma.MilkProductionUncheckedCreateWithoutCowInput[];
    connectOrCreate?: Prisma.MilkProductionCreateOrConnectWithoutCowInput | Prisma.MilkProductionCreateOrConnectWithoutCowInput[];
    createMany?: Prisma.MilkProductionCreateManyCowInputEnvelope;
    connect?: Prisma.MilkProductionWhereUniqueInput | Prisma.MilkProductionWhereUniqueInput[];
};
export type MilkProductionUpdateManyWithoutCowNestedInput = {
    create?: Prisma.XOR<Prisma.MilkProductionCreateWithoutCowInput, Prisma.MilkProductionUncheckedCreateWithoutCowInput> | Prisma.MilkProductionCreateWithoutCowInput[] | Prisma.MilkProductionUncheckedCreateWithoutCowInput[];
    connectOrCreate?: Prisma.MilkProductionCreateOrConnectWithoutCowInput | Prisma.MilkProductionCreateOrConnectWithoutCowInput[];
    upsert?: Prisma.MilkProductionUpsertWithWhereUniqueWithoutCowInput | Prisma.MilkProductionUpsertWithWhereUniqueWithoutCowInput[];
    createMany?: Prisma.MilkProductionCreateManyCowInputEnvelope;
    set?: Prisma.MilkProductionWhereUniqueInput | Prisma.MilkProductionWhereUniqueInput[];
    disconnect?: Prisma.MilkProductionWhereUniqueInput | Prisma.MilkProductionWhereUniqueInput[];
    delete?: Prisma.MilkProductionWhereUniqueInput | Prisma.MilkProductionWhereUniqueInput[];
    connect?: Prisma.MilkProductionWhereUniqueInput | Prisma.MilkProductionWhereUniqueInput[];
    update?: Prisma.MilkProductionUpdateWithWhereUniqueWithoutCowInput | Prisma.MilkProductionUpdateWithWhereUniqueWithoutCowInput[];
    updateMany?: Prisma.MilkProductionUpdateManyWithWhereWithoutCowInput | Prisma.MilkProductionUpdateManyWithWhereWithoutCowInput[];
    deleteMany?: Prisma.MilkProductionScalarWhereInput | Prisma.MilkProductionScalarWhereInput[];
};
export type MilkProductionUncheckedUpdateManyWithoutCowNestedInput = {
    create?: Prisma.XOR<Prisma.MilkProductionCreateWithoutCowInput, Prisma.MilkProductionUncheckedCreateWithoutCowInput> | Prisma.MilkProductionCreateWithoutCowInput[] | Prisma.MilkProductionUncheckedCreateWithoutCowInput[];
    connectOrCreate?: Prisma.MilkProductionCreateOrConnectWithoutCowInput | Prisma.MilkProductionCreateOrConnectWithoutCowInput[];
    upsert?: Prisma.MilkProductionUpsertWithWhereUniqueWithoutCowInput | Prisma.MilkProductionUpsertWithWhereUniqueWithoutCowInput[];
    createMany?: Prisma.MilkProductionCreateManyCowInputEnvelope;
    set?: Prisma.MilkProductionWhereUniqueInput | Prisma.MilkProductionWhereUniqueInput[];
    disconnect?: Prisma.MilkProductionWhereUniqueInput | Prisma.MilkProductionWhereUniqueInput[];
    delete?: Prisma.MilkProductionWhereUniqueInput | Prisma.MilkProductionWhereUniqueInput[];
    connect?: Prisma.MilkProductionWhereUniqueInput | Prisma.MilkProductionWhereUniqueInput[];
    update?: Prisma.MilkProductionUpdateWithWhereUniqueWithoutCowInput | Prisma.MilkProductionUpdateWithWhereUniqueWithoutCowInput[];
    updateMany?: Prisma.MilkProductionUpdateManyWithWhereWithoutCowInput | Prisma.MilkProductionUpdateManyWithWhereWithoutCowInput[];
    deleteMany?: Prisma.MilkProductionScalarWhereInput | Prisma.MilkProductionScalarWhereInput[];
};
export type MilkProductionCreateWithoutRecordedByInput = {
    id?: string;
    productionDate: Date | string;
    morningYield?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    eveningYield?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cow: Prisma.CowCreateNestedOneWithoutMilkProductionsInput;
};
export type MilkProductionUncheckedCreateWithoutRecordedByInput = {
    id?: string;
    cowId: string;
    productionDate: Date | string;
    morningYield?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    eveningYield?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MilkProductionCreateOrConnectWithoutRecordedByInput = {
    where: Prisma.MilkProductionWhereUniqueInput;
    create: Prisma.XOR<Prisma.MilkProductionCreateWithoutRecordedByInput, Prisma.MilkProductionUncheckedCreateWithoutRecordedByInput>;
};
export type MilkProductionCreateManyRecordedByInputEnvelope = {
    data: Prisma.MilkProductionCreateManyRecordedByInput | Prisma.MilkProductionCreateManyRecordedByInput[];
    skipDuplicates?: boolean;
};
export type MilkProductionUpsertWithWhereUniqueWithoutRecordedByInput = {
    where: Prisma.MilkProductionWhereUniqueInput;
    update: Prisma.XOR<Prisma.MilkProductionUpdateWithoutRecordedByInput, Prisma.MilkProductionUncheckedUpdateWithoutRecordedByInput>;
    create: Prisma.XOR<Prisma.MilkProductionCreateWithoutRecordedByInput, Prisma.MilkProductionUncheckedCreateWithoutRecordedByInput>;
};
export type MilkProductionUpdateWithWhereUniqueWithoutRecordedByInput = {
    where: Prisma.MilkProductionWhereUniqueInput;
    data: Prisma.XOR<Prisma.MilkProductionUpdateWithoutRecordedByInput, Prisma.MilkProductionUncheckedUpdateWithoutRecordedByInput>;
};
export type MilkProductionUpdateManyWithWhereWithoutRecordedByInput = {
    where: Prisma.MilkProductionScalarWhereInput;
    data: Prisma.XOR<Prisma.MilkProductionUpdateManyMutationInput, Prisma.MilkProductionUncheckedUpdateManyWithoutRecordedByInput>;
};
export type MilkProductionScalarWhereInput = {
    AND?: Prisma.MilkProductionScalarWhereInput | Prisma.MilkProductionScalarWhereInput[];
    OR?: Prisma.MilkProductionScalarWhereInput[];
    NOT?: Prisma.MilkProductionScalarWhereInput | Prisma.MilkProductionScalarWhereInput[];
    id?: Prisma.StringFilter<"MilkProduction"> | string;
    cowId?: Prisma.StringFilter<"MilkProduction"> | string;
    productionDate?: Prisma.DateTimeFilter<"MilkProduction"> | Date | string;
    morningYield?: Prisma.DecimalNullableFilter<"MilkProduction"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    eveningYield?: Prisma.DecimalNullableFilter<"MilkProduction"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.StringNullableFilter<"MilkProduction"> | string | null;
    recordedById?: Prisma.StringFilter<"MilkProduction"> | string;
    createdAt?: Prisma.DateTimeFilter<"MilkProduction"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MilkProduction"> | Date | string;
};
export type MilkProductionCreateWithoutCowInput = {
    id?: string;
    productionDate: Date | string;
    morningYield?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    eveningYield?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    recordedBy: Prisma.UserCreateNestedOneWithoutMilkProductionsInput;
};
export type MilkProductionUncheckedCreateWithoutCowInput = {
    id?: string;
    productionDate: Date | string;
    morningYield?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    eveningYield?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: string | null;
    recordedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MilkProductionCreateOrConnectWithoutCowInput = {
    where: Prisma.MilkProductionWhereUniqueInput;
    create: Prisma.XOR<Prisma.MilkProductionCreateWithoutCowInput, Prisma.MilkProductionUncheckedCreateWithoutCowInput>;
};
export type MilkProductionCreateManyCowInputEnvelope = {
    data: Prisma.MilkProductionCreateManyCowInput | Prisma.MilkProductionCreateManyCowInput[];
    skipDuplicates?: boolean;
};
export type MilkProductionUpsertWithWhereUniqueWithoutCowInput = {
    where: Prisma.MilkProductionWhereUniqueInput;
    update: Prisma.XOR<Prisma.MilkProductionUpdateWithoutCowInput, Prisma.MilkProductionUncheckedUpdateWithoutCowInput>;
    create: Prisma.XOR<Prisma.MilkProductionCreateWithoutCowInput, Prisma.MilkProductionUncheckedCreateWithoutCowInput>;
};
export type MilkProductionUpdateWithWhereUniqueWithoutCowInput = {
    where: Prisma.MilkProductionWhereUniqueInput;
    data: Prisma.XOR<Prisma.MilkProductionUpdateWithoutCowInput, Prisma.MilkProductionUncheckedUpdateWithoutCowInput>;
};
export type MilkProductionUpdateManyWithWhereWithoutCowInput = {
    where: Prisma.MilkProductionScalarWhereInput;
    data: Prisma.XOR<Prisma.MilkProductionUpdateManyMutationInput, Prisma.MilkProductionUncheckedUpdateManyWithoutCowInput>;
};
export type MilkProductionCreateManyRecordedByInput = {
    id?: string;
    cowId: string;
    productionDate: Date | string;
    morningYield?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    eveningYield?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MilkProductionUpdateWithoutRecordedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    morningYield?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    eveningYield?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cow?: Prisma.CowUpdateOneRequiredWithoutMilkProductionsNestedInput;
};
export type MilkProductionUncheckedUpdateWithoutRecordedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cowId?: Prisma.StringFieldUpdateOperationsInput | string;
    productionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    morningYield?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    eveningYield?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MilkProductionUncheckedUpdateManyWithoutRecordedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cowId?: Prisma.StringFieldUpdateOperationsInput | string;
    productionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    morningYield?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    eveningYield?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MilkProductionCreateManyCowInput = {
    id?: string;
    productionDate: Date | string;
    morningYield?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    eveningYield?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: string | null;
    recordedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MilkProductionUpdateWithoutCowInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    morningYield?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    eveningYield?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    recordedBy?: Prisma.UserUpdateOneRequiredWithoutMilkProductionsNestedInput;
};
export type MilkProductionUncheckedUpdateWithoutCowInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    morningYield?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    eveningYield?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MilkProductionUncheckedUpdateManyWithoutCowInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productionDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    morningYield?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    eveningYield?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MilkProductionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cowId?: boolean;
    productionDate?: boolean;
    morningYield?: boolean;
    eveningYield?: boolean;
    notes?: boolean;
    recordedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    cow?: boolean | Prisma.CowDefaultArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["milkProduction"]>;
export type MilkProductionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cowId?: boolean;
    productionDate?: boolean;
    morningYield?: boolean;
    eveningYield?: boolean;
    notes?: boolean;
    recordedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    cow?: boolean | Prisma.CowDefaultArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["milkProduction"]>;
export type MilkProductionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cowId?: boolean;
    productionDate?: boolean;
    morningYield?: boolean;
    eveningYield?: boolean;
    notes?: boolean;
    recordedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    cow?: boolean | Prisma.CowDefaultArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["milkProduction"]>;
export type MilkProductionSelectScalar = {
    id?: boolean;
    cowId?: boolean;
    productionDate?: boolean;
    morningYield?: boolean;
    eveningYield?: boolean;
    notes?: boolean;
    recordedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MilkProductionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "cowId" | "productionDate" | "morningYield" | "eveningYield" | "notes" | "recordedById" | "createdAt" | "updatedAt", ExtArgs["result"]["milkProduction"]>;
export type MilkProductionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cow?: boolean | Prisma.CowDefaultArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type MilkProductionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cow?: boolean | Prisma.CowDefaultArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type MilkProductionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cow?: boolean | Prisma.CowDefaultArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $MilkProductionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MilkProduction";
    objects: {
        cow: Prisma.$CowPayload<ExtArgs>;
        recordedBy: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        cowId: string;
        productionDate: Date;
        morningYield: runtime.Decimal | null;
        eveningYield: runtime.Decimal | null;
        notes: string | null;
        recordedById: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["milkProduction"]>;
    composites: {};
};
export type MilkProductionGetPayload<S extends boolean | null | undefined | MilkProductionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MilkProductionPayload, S>;
export type MilkProductionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MilkProductionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MilkProductionCountAggregateInputType | true;
};
export interface MilkProductionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MilkProduction'];
        meta: {
            name: 'MilkProduction';
        };
    };
    /**
     * Find zero or one MilkProduction that matches the filter.
     * @param {MilkProductionFindUniqueArgs} args - Arguments to find a MilkProduction
     * @example
     * // Get one MilkProduction
     * const milkProduction = await prisma.milkProduction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MilkProductionFindUniqueArgs>(args: Prisma.SelectSubset<T, MilkProductionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MilkProductionClient<runtime.Types.Result.GetResult<Prisma.$MilkProductionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one MilkProduction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MilkProductionFindUniqueOrThrowArgs} args - Arguments to find a MilkProduction
     * @example
     * // Get one MilkProduction
     * const milkProduction = await prisma.milkProduction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MilkProductionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MilkProductionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MilkProductionClient<runtime.Types.Result.GetResult<Prisma.$MilkProductionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MilkProduction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilkProductionFindFirstArgs} args - Arguments to find a MilkProduction
     * @example
     * // Get one MilkProduction
     * const milkProduction = await prisma.milkProduction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MilkProductionFindFirstArgs>(args?: Prisma.SelectSubset<T, MilkProductionFindFirstArgs<ExtArgs>>): Prisma.Prisma__MilkProductionClient<runtime.Types.Result.GetResult<Prisma.$MilkProductionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MilkProduction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilkProductionFindFirstOrThrowArgs} args - Arguments to find a MilkProduction
     * @example
     * // Get one MilkProduction
     * const milkProduction = await prisma.milkProduction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MilkProductionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MilkProductionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MilkProductionClient<runtime.Types.Result.GetResult<Prisma.$MilkProductionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more MilkProductions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilkProductionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MilkProductions
     * const milkProductions = await prisma.milkProduction.findMany()
     *
     * // Get first 10 MilkProductions
     * const milkProductions = await prisma.milkProduction.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const milkProductionWithIdOnly = await prisma.milkProduction.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MilkProductionFindManyArgs>(args?: Prisma.SelectSubset<T, MilkProductionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MilkProductionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a MilkProduction.
     * @param {MilkProductionCreateArgs} args - Arguments to create a MilkProduction.
     * @example
     * // Create one MilkProduction
     * const MilkProduction = await prisma.milkProduction.create({
     *   data: {
     *     // ... data to create a MilkProduction
     *   }
     * })
     *
     */
    create<T extends MilkProductionCreateArgs>(args: Prisma.SelectSubset<T, MilkProductionCreateArgs<ExtArgs>>): Prisma.Prisma__MilkProductionClient<runtime.Types.Result.GetResult<Prisma.$MilkProductionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many MilkProductions.
     * @param {MilkProductionCreateManyArgs} args - Arguments to create many MilkProductions.
     * @example
     * // Create many MilkProductions
     * const milkProduction = await prisma.milkProduction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MilkProductionCreateManyArgs>(args?: Prisma.SelectSubset<T, MilkProductionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many MilkProductions and returns the data saved in the database.
     * @param {MilkProductionCreateManyAndReturnArgs} args - Arguments to create many MilkProductions.
     * @example
     * // Create many MilkProductions
     * const milkProduction = await prisma.milkProduction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many MilkProductions and only return the `id`
     * const milkProductionWithIdOnly = await prisma.milkProduction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MilkProductionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MilkProductionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MilkProductionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a MilkProduction.
     * @param {MilkProductionDeleteArgs} args - Arguments to delete one MilkProduction.
     * @example
     * // Delete one MilkProduction
     * const MilkProduction = await prisma.milkProduction.delete({
     *   where: {
     *     // ... filter to delete one MilkProduction
     *   }
     * })
     *
     */
    delete<T extends MilkProductionDeleteArgs>(args: Prisma.SelectSubset<T, MilkProductionDeleteArgs<ExtArgs>>): Prisma.Prisma__MilkProductionClient<runtime.Types.Result.GetResult<Prisma.$MilkProductionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one MilkProduction.
     * @param {MilkProductionUpdateArgs} args - Arguments to update one MilkProduction.
     * @example
     * // Update one MilkProduction
     * const milkProduction = await prisma.milkProduction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MilkProductionUpdateArgs>(args: Prisma.SelectSubset<T, MilkProductionUpdateArgs<ExtArgs>>): Prisma.Prisma__MilkProductionClient<runtime.Types.Result.GetResult<Prisma.$MilkProductionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more MilkProductions.
     * @param {MilkProductionDeleteManyArgs} args - Arguments to filter MilkProductions to delete.
     * @example
     * // Delete a few MilkProductions
     * const { count } = await prisma.milkProduction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MilkProductionDeleteManyArgs>(args?: Prisma.SelectSubset<T, MilkProductionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MilkProductions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilkProductionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MilkProductions
     * const milkProduction = await prisma.milkProduction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MilkProductionUpdateManyArgs>(args: Prisma.SelectSubset<T, MilkProductionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MilkProductions and returns the data updated in the database.
     * @param {MilkProductionUpdateManyAndReturnArgs} args - Arguments to update many MilkProductions.
     * @example
     * // Update many MilkProductions
     * const milkProduction = await prisma.milkProduction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more MilkProductions and only return the `id`
     * const milkProductionWithIdOnly = await prisma.milkProduction.updateManyAndReturn({
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
    updateManyAndReturn<T extends MilkProductionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MilkProductionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MilkProductionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one MilkProduction.
     * @param {MilkProductionUpsertArgs} args - Arguments to update or create a MilkProduction.
     * @example
     * // Update or create a MilkProduction
     * const milkProduction = await prisma.milkProduction.upsert({
     *   create: {
     *     // ... data to create a MilkProduction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MilkProduction we want to update
     *   }
     * })
     */
    upsert<T extends MilkProductionUpsertArgs>(args: Prisma.SelectSubset<T, MilkProductionUpsertArgs<ExtArgs>>): Prisma.Prisma__MilkProductionClient<runtime.Types.Result.GetResult<Prisma.$MilkProductionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of MilkProductions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilkProductionCountArgs} args - Arguments to filter MilkProductions to count.
     * @example
     * // Count the number of MilkProductions
     * const count = await prisma.milkProduction.count({
     *   where: {
     *     // ... the filter for the MilkProductions we want to count
     *   }
     * })
    **/
    count<T extends MilkProductionCountArgs>(args?: Prisma.Subset<T, MilkProductionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MilkProductionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a MilkProduction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilkProductionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MilkProductionAggregateArgs>(args: Prisma.Subset<T, MilkProductionAggregateArgs>): Prisma.PrismaPromise<GetMilkProductionAggregateType<T>>;
    /**
     * Group by MilkProduction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilkProductionGroupByArgs} args - Group by arguments.
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
    groupBy<T extends MilkProductionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MilkProductionGroupByArgs['orderBy'];
    } : {
        orderBy?: MilkProductionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MilkProductionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMilkProductionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MilkProduction model
     */
    readonly fields: MilkProductionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for MilkProduction.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__MilkProductionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cow<T extends Prisma.CowDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CowDefaultArgs<ExtArgs>>): Prisma.Prisma__CowClient<runtime.Types.Result.GetResult<Prisma.$CowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the MilkProduction model
 */
export interface MilkProductionFieldRefs {
    readonly id: Prisma.FieldRef<"MilkProduction", 'String'>;
    readonly cowId: Prisma.FieldRef<"MilkProduction", 'String'>;
    readonly productionDate: Prisma.FieldRef<"MilkProduction", 'DateTime'>;
    readonly morningYield: Prisma.FieldRef<"MilkProduction", 'Decimal'>;
    readonly eveningYield: Prisma.FieldRef<"MilkProduction", 'Decimal'>;
    readonly notes: Prisma.FieldRef<"MilkProduction", 'String'>;
    readonly recordedById: Prisma.FieldRef<"MilkProduction", 'String'>;
    readonly createdAt: Prisma.FieldRef<"MilkProduction", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"MilkProduction", 'DateTime'>;
}
/**
 * MilkProduction findUnique
 */
export type MilkProductionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilkProduction
     */
    select?: Prisma.MilkProductionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MilkProduction
     */
    omit?: Prisma.MilkProductionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MilkProductionInclude<ExtArgs> | null;
    /**
     * Filter, which MilkProduction to fetch.
     */
    where: Prisma.MilkProductionWhereUniqueInput;
};
/**
 * MilkProduction findUniqueOrThrow
 */
export type MilkProductionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilkProduction
     */
    select?: Prisma.MilkProductionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MilkProduction
     */
    omit?: Prisma.MilkProductionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MilkProductionInclude<ExtArgs> | null;
    /**
     * Filter, which MilkProduction to fetch.
     */
    where: Prisma.MilkProductionWhereUniqueInput;
};
/**
 * MilkProduction findFirst
 */
export type MilkProductionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilkProduction
     */
    select?: Prisma.MilkProductionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MilkProduction
     */
    omit?: Prisma.MilkProductionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MilkProductionInclude<ExtArgs> | null;
    /**
     * Filter, which MilkProduction to fetch.
     */
    where?: Prisma.MilkProductionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MilkProductions to fetch.
     */
    orderBy?: Prisma.MilkProductionOrderByWithRelationInput | Prisma.MilkProductionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MilkProductions.
     */
    cursor?: Prisma.MilkProductionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MilkProductions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MilkProductions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MilkProductions.
     */
    distinct?: Prisma.MilkProductionScalarFieldEnum | Prisma.MilkProductionScalarFieldEnum[];
};
/**
 * MilkProduction findFirstOrThrow
 */
export type MilkProductionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilkProduction
     */
    select?: Prisma.MilkProductionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MilkProduction
     */
    omit?: Prisma.MilkProductionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MilkProductionInclude<ExtArgs> | null;
    /**
     * Filter, which MilkProduction to fetch.
     */
    where?: Prisma.MilkProductionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MilkProductions to fetch.
     */
    orderBy?: Prisma.MilkProductionOrderByWithRelationInput | Prisma.MilkProductionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MilkProductions.
     */
    cursor?: Prisma.MilkProductionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MilkProductions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MilkProductions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MilkProductions.
     */
    distinct?: Prisma.MilkProductionScalarFieldEnum | Prisma.MilkProductionScalarFieldEnum[];
};
/**
 * MilkProduction findMany
 */
export type MilkProductionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilkProduction
     */
    select?: Prisma.MilkProductionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MilkProduction
     */
    omit?: Prisma.MilkProductionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MilkProductionInclude<ExtArgs> | null;
    /**
     * Filter, which MilkProductions to fetch.
     */
    where?: Prisma.MilkProductionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MilkProductions to fetch.
     */
    orderBy?: Prisma.MilkProductionOrderByWithRelationInput | Prisma.MilkProductionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MilkProductions.
     */
    cursor?: Prisma.MilkProductionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MilkProductions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MilkProductions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MilkProductions.
     */
    distinct?: Prisma.MilkProductionScalarFieldEnum | Prisma.MilkProductionScalarFieldEnum[];
};
/**
 * MilkProduction create
 */
export type MilkProductionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilkProduction
     */
    select?: Prisma.MilkProductionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MilkProduction
     */
    omit?: Prisma.MilkProductionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MilkProductionInclude<ExtArgs> | null;
    /**
     * The data needed to create a MilkProduction.
     */
    data: Prisma.XOR<Prisma.MilkProductionCreateInput, Prisma.MilkProductionUncheckedCreateInput>;
};
/**
 * MilkProduction createMany
 */
export type MilkProductionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many MilkProductions.
     */
    data: Prisma.MilkProductionCreateManyInput | Prisma.MilkProductionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * MilkProduction createManyAndReturn
 */
export type MilkProductionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilkProduction
     */
    select?: Prisma.MilkProductionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MilkProduction
     */
    omit?: Prisma.MilkProductionOmit<ExtArgs> | null;
    /**
     * The data used to create many MilkProductions.
     */
    data: Prisma.MilkProductionCreateManyInput | Prisma.MilkProductionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MilkProductionIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * MilkProduction update
 */
export type MilkProductionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilkProduction
     */
    select?: Prisma.MilkProductionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MilkProduction
     */
    omit?: Prisma.MilkProductionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MilkProductionInclude<ExtArgs> | null;
    /**
     * The data needed to update a MilkProduction.
     */
    data: Prisma.XOR<Prisma.MilkProductionUpdateInput, Prisma.MilkProductionUncheckedUpdateInput>;
    /**
     * Choose, which MilkProduction to update.
     */
    where: Prisma.MilkProductionWhereUniqueInput;
};
/**
 * MilkProduction updateMany
 */
export type MilkProductionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update MilkProductions.
     */
    data: Prisma.XOR<Prisma.MilkProductionUpdateManyMutationInput, Prisma.MilkProductionUncheckedUpdateManyInput>;
    /**
     * Filter which MilkProductions to update
     */
    where?: Prisma.MilkProductionWhereInput;
    /**
     * Limit how many MilkProductions to update.
     */
    limit?: number;
};
/**
 * MilkProduction updateManyAndReturn
 */
export type MilkProductionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilkProduction
     */
    select?: Prisma.MilkProductionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MilkProduction
     */
    omit?: Prisma.MilkProductionOmit<ExtArgs> | null;
    /**
     * The data used to update MilkProductions.
     */
    data: Prisma.XOR<Prisma.MilkProductionUpdateManyMutationInput, Prisma.MilkProductionUncheckedUpdateManyInput>;
    /**
     * Filter which MilkProductions to update
     */
    where?: Prisma.MilkProductionWhereInput;
    /**
     * Limit how many MilkProductions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MilkProductionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * MilkProduction upsert
 */
export type MilkProductionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilkProduction
     */
    select?: Prisma.MilkProductionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MilkProduction
     */
    omit?: Prisma.MilkProductionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MilkProductionInclude<ExtArgs> | null;
    /**
     * The filter to search for the MilkProduction to update in case it exists.
     */
    where: Prisma.MilkProductionWhereUniqueInput;
    /**
     * In case the MilkProduction found by the `where` argument doesn't exist, create a new MilkProduction with this data.
     */
    create: Prisma.XOR<Prisma.MilkProductionCreateInput, Prisma.MilkProductionUncheckedCreateInput>;
    /**
     * In case the MilkProduction was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.MilkProductionUpdateInput, Prisma.MilkProductionUncheckedUpdateInput>;
};
/**
 * MilkProduction delete
 */
export type MilkProductionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilkProduction
     */
    select?: Prisma.MilkProductionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MilkProduction
     */
    omit?: Prisma.MilkProductionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MilkProductionInclude<ExtArgs> | null;
    /**
     * Filter which MilkProduction to delete.
     */
    where: Prisma.MilkProductionWhereUniqueInput;
};
/**
 * MilkProduction deleteMany
 */
export type MilkProductionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MilkProductions to delete
     */
    where?: Prisma.MilkProductionWhereInput;
    /**
     * Limit how many MilkProductions to delete.
     */
    limit?: number;
};
/**
 * MilkProduction without action
 */
export type MilkProductionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilkProduction
     */
    select?: Prisma.MilkProductionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MilkProduction
     */
    omit?: Prisma.MilkProductionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MilkProductionInclude<ExtArgs> | null;
};
//# sourceMappingURL=MilkProduction.d.ts.map