import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model FeedPurchase
 *
 */
export type FeedPurchaseModel = runtime.Types.Result.DefaultSelection<Prisma.$FeedPurchasePayload>;
export type AggregateFeedPurchase = {
    _count: FeedPurchaseCountAggregateOutputType | null;
    _avg: FeedPurchaseAvgAggregateOutputType | null;
    _sum: FeedPurchaseSumAggregateOutputType | null;
    _min: FeedPurchaseMinAggregateOutputType | null;
    _max: FeedPurchaseMaxAggregateOutputType | null;
};
export type FeedPurchaseAvgAggregateOutputType = {
    quantity: runtime.Decimal | null;
    unitPrice: runtime.Decimal | null;
    totalCost: runtime.Decimal | null;
};
export type FeedPurchaseSumAggregateOutputType = {
    quantity: runtime.Decimal | null;
    unitPrice: runtime.Decimal | null;
    totalCost: runtime.Decimal | null;
};
export type FeedPurchaseMinAggregateOutputType = {
    id: string | null;
    feedItemId: string | null;
    quantity: runtime.Decimal | null;
    unitPrice: runtime.Decimal | null;
    totalCost: runtime.Decimal | null;
    supplier: string | null;
    invoiceNumber: string | null;
    purchaseDate: Date | null;
    notes: string | null;
    recordedById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FeedPurchaseMaxAggregateOutputType = {
    id: string | null;
    feedItemId: string | null;
    quantity: runtime.Decimal | null;
    unitPrice: runtime.Decimal | null;
    totalCost: runtime.Decimal | null;
    supplier: string | null;
    invoiceNumber: string | null;
    purchaseDate: Date | null;
    notes: string | null;
    recordedById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FeedPurchaseCountAggregateOutputType = {
    id: number;
    feedItemId: number;
    quantity: number;
    unitPrice: number;
    totalCost: number;
    supplier: number;
    invoiceNumber: number;
    purchaseDate: number;
    notes: number;
    recordedById: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type FeedPurchaseAvgAggregateInputType = {
    quantity?: true;
    unitPrice?: true;
    totalCost?: true;
};
export type FeedPurchaseSumAggregateInputType = {
    quantity?: true;
    unitPrice?: true;
    totalCost?: true;
};
export type FeedPurchaseMinAggregateInputType = {
    id?: true;
    feedItemId?: true;
    quantity?: true;
    unitPrice?: true;
    totalCost?: true;
    supplier?: true;
    invoiceNumber?: true;
    purchaseDate?: true;
    notes?: true;
    recordedById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FeedPurchaseMaxAggregateInputType = {
    id?: true;
    feedItemId?: true;
    quantity?: true;
    unitPrice?: true;
    totalCost?: true;
    supplier?: true;
    invoiceNumber?: true;
    purchaseDate?: true;
    notes?: true;
    recordedById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FeedPurchaseCountAggregateInputType = {
    id?: true;
    feedItemId?: true;
    quantity?: true;
    unitPrice?: true;
    totalCost?: true;
    supplier?: true;
    invoiceNumber?: true;
    purchaseDate?: true;
    notes?: true;
    recordedById?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type FeedPurchaseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which FeedPurchase to aggregate.
     */
    where?: Prisma.FeedPurchaseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FeedPurchases to fetch.
     */
    orderBy?: Prisma.FeedPurchaseOrderByWithRelationInput | Prisma.FeedPurchaseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.FeedPurchaseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FeedPurchases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FeedPurchases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned FeedPurchases
    **/
    _count?: true | FeedPurchaseCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: FeedPurchaseAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: FeedPurchaseSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: FeedPurchaseMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: FeedPurchaseMaxAggregateInputType;
};
export type GetFeedPurchaseAggregateType<T extends FeedPurchaseAggregateArgs> = {
    [P in keyof T & keyof AggregateFeedPurchase]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFeedPurchase[P]> : Prisma.GetScalarType<T[P], AggregateFeedPurchase[P]>;
};
export type FeedPurchaseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeedPurchaseWhereInput;
    orderBy?: Prisma.FeedPurchaseOrderByWithAggregationInput | Prisma.FeedPurchaseOrderByWithAggregationInput[];
    by: Prisma.FeedPurchaseScalarFieldEnum[] | Prisma.FeedPurchaseScalarFieldEnum;
    having?: Prisma.FeedPurchaseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FeedPurchaseCountAggregateInputType | true;
    _avg?: FeedPurchaseAvgAggregateInputType;
    _sum?: FeedPurchaseSumAggregateInputType;
    _min?: FeedPurchaseMinAggregateInputType;
    _max?: FeedPurchaseMaxAggregateInputType;
};
export type FeedPurchaseGroupByOutputType = {
    id: string;
    feedItemId: string;
    quantity: runtime.Decimal;
    unitPrice: runtime.Decimal;
    totalCost: runtime.Decimal;
    supplier: string | null;
    invoiceNumber: string | null;
    purchaseDate: Date;
    notes: string | null;
    recordedById: string;
    createdAt: Date;
    updatedAt: Date;
    _count: FeedPurchaseCountAggregateOutputType | null;
    _avg: FeedPurchaseAvgAggregateOutputType | null;
    _sum: FeedPurchaseSumAggregateOutputType | null;
    _min: FeedPurchaseMinAggregateOutputType | null;
    _max: FeedPurchaseMaxAggregateOutputType | null;
};
export type GetFeedPurchaseGroupByPayload<T extends FeedPurchaseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FeedPurchaseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FeedPurchaseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FeedPurchaseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FeedPurchaseGroupByOutputType[P]>;
}>>;
export type FeedPurchaseWhereInput = {
    AND?: Prisma.FeedPurchaseWhereInput | Prisma.FeedPurchaseWhereInput[];
    OR?: Prisma.FeedPurchaseWhereInput[];
    NOT?: Prisma.FeedPurchaseWhereInput | Prisma.FeedPurchaseWhereInput[];
    id?: Prisma.StringFilter<"FeedPurchase"> | string;
    feedItemId?: Prisma.StringFilter<"FeedPurchase"> | string;
    quantity?: Prisma.DecimalFilter<"FeedPurchase"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFilter<"FeedPurchase"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalCost?: Prisma.DecimalFilter<"FeedPurchase"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplier?: Prisma.StringNullableFilter<"FeedPurchase"> | string | null;
    invoiceNumber?: Prisma.StringNullableFilter<"FeedPurchase"> | string | null;
    purchaseDate?: Prisma.DateTimeFilter<"FeedPurchase"> | Date | string;
    notes?: Prisma.StringNullableFilter<"FeedPurchase"> | string | null;
    recordedById?: Prisma.StringFilter<"FeedPurchase"> | string;
    createdAt?: Prisma.DateTimeFilter<"FeedPurchase"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FeedPurchase"> | Date | string;
    feedItem?: Prisma.XOR<Prisma.FeedItemScalarRelationFilter, Prisma.FeedItemWhereInput>;
    recordedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type FeedPurchaseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    feedItemId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalCost?: Prisma.SortOrder;
    supplier?: Prisma.SortOrderInput | Prisma.SortOrder;
    invoiceNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    purchaseDate?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    recordedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    feedItem?: Prisma.FeedItemOrderByWithRelationInput;
    recordedBy?: Prisma.UserOrderByWithRelationInput;
};
export type FeedPurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.FeedPurchaseWhereInput | Prisma.FeedPurchaseWhereInput[];
    OR?: Prisma.FeedPurchaseWhereInput[];
    NOT?: Prisma.FeedPurchaseWhereInput | Prisma.FeedPurchaseWhereInput[];
    feedItemId?: Prisma.StringFilter<"FeedPurchase"> | string;
    quantity?: Prisma.DecimalFilter<"FeedPurchase"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFilter<"FeedPurchase"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalCost?: Prisma.DecimalFilter<"FeedPurchase"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplier?: Prisma.StringNullableFilter<"FeedPurchase"> | string | null;
    invoiceNumber?: Prisma.StringNullableFilter<"FeedPurchase"> | string | null;
    purchaseDate?: Prisma.DateTimeFilter<"FeedPurchase"> | Date | string;
    notes?: Prisma.StringNullableFilter<"FeedPurchase"> | string | null;
    recordedById?: Prisma.StringFilter<"FeedPurchase"> | string;
    createdAt?: Prisma.DateTimeFilter<"FeedPurchase"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FeedPurchase"> | Date | string;
    feedItem?: Prisma.XOR<Prisma.FeedItemScalarRelationFilter, Prisma.FeedItemWhereInput>;
    recordedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type FeedPurchaseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    feedItemId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalCost?: Prisma.SortOrder;
    supplier?: Prisma.SortOrderInput | Prisma.SortOrder;
    invoiceNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    purchaseDate?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    recordedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.FeedPurchaseCountOrderByAggregateInput;
    _avg?: Prisma.FeedPurchaseAvgOrderByAggregateInput;
    _max?: Prisma.FeedPurchaseMaxOrderByAggregateInput;
    _min?: Prisma.FeedPurchaseMinOrderByAggregateInput;
    _sum?: Prisma.FeedPurchaseSumOrderByAggregateInput;
};
export type FeedPurchaseScalarWhereWithAggregatesInput = {
    AND?: Prisma.FeedPurchaseScalarWhereWithAggregatesInput | Prisma.FeedPurchaseScalarWhereWithAggregatesInput[];
    OR?: Prisma.FeedPurchaseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FeedPurchaseScalarWhereWithAggregatesInput | Prisma.FeedPurchaseScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"FeedPurchase"> | string;
    feedItemId?: Prisma.StringWithAggregatesFilter<"FeedPurchase"> | string;
    quantity?: Prisma.DecimalWithAggregatesFilter<"FeedPurchase"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalWithAggregatesFilter<"FeedPurchase"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalCost?: Prisma.DecimalWithAggregatesFilter<"FeedPurchase"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplier?: Prisma.StringNullableWithAggregatesFilter<"FeedPurchase"> | string | null;
    invoiceNumber?: Prisma.StringNullableWithAggregatesFilter<"FeedPurchase"> | string | null;
    purchaseDate?: Prisma.DateTimeWithAggregatesFilter<"FeedPurchase"> | Date | string;
    notes?: Prisma.StringNullableWithAggregatesFilter<"FeedPurchase"> | string | null;
    recordedById?: Prisma.StringWithAggregatesFilter<"FeedPurchase"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"FeedPurchase"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"FeedPurchase"> | Date | string;
};
export type FeedPurchaseCreateInput = {
    id?: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalCost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplier?: string | null;
    invoiceNumber?: string | null;
    purchaseDate?: Date | string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    feedItem: Prisma.FeedItemCreateNestedOneWithoutPurchasesInput;
    recordedBy: Prisma.UserCreateNestedOneWithoutFeedPurchasesInput;
};
export type FeedPurchaseUncheckedCreateInput = {
    id?: string;
    feedItemId: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalCost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplier?: string | null;
    invoiceNumber?: string | null;
    purchaseDate?: Date | string;
    notes?: string | null;
    recordedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FeedPurchaseUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invoiceNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    feedItem?: Prisma.FeedItemUpdateOneRequiredWithoutPurchasesNestedInput;
    recordedBy?: Prisma.UserUpdateOneRequiredWithoutFeedPurchasesNestedInput;
};
export type FeedPurchaseUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    feedItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invoiceNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeedPurchaseCreateManyInput = {
    id?: string;
    feedItemId: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalCost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplier?: string | null;
    invoiceNumber?: string | null;
    purchaseDate?: Date | string;
    notes?: string | null;
    recordedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FeedPurchaseUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invoiceNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeedPurchaseUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    feedItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invoiceNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeedPurchaseListRelationFilter = {
    every?: Prisma.FeedPurchaseWhereInput;
    some?: Prisma.FeedPurchaseWhereInput;
    none?: Prisma.FeedPurchaseWhereInput;
};
export type FeedPurchaseOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FeedPurchaseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    feedItemId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalCost?: Prisma.SortOrder;
    supplier?: Prisma.SortOrder;
    invoiceNumber?: Prisma.SortOrder;
    purchaseDate?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    recordedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FeedPurchaseAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalCost?: Prisma.SortOrder;
};
export type FeedPurchaseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    feedItemId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalCost?: Prisma.SortOrder;
    supplier?: Prisma.SortOrder;
    invoiceNumber?: Prisma.SortOrder;
    purchaseDate?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    recordedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FeedPurchaseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    feedItemId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalCost?: Prisma.SortOrder;
    supplier?: Prisma.SortOrder;
    invoiceNumber?: Prisma.SortOrder;
    purchaseDate?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    recordedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FeedPurchaseSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalCost?: Prisma.SortOrder;
};
export type FeedPurchaseCreateNestedManyWithoutRecordedByInput = {
    create?: Prisma.XOR<Prisma.FeedPurchaseCreateWithoutRecordedByInput, Prisma.FeedPurchaseUncheckedCreateWithoutRecordedByInput> | Prisma.FeedPurchaseCreateWithoutRecordedByInput[] | Prisma.FeedPurchaseUncheckedCreateWithoutRecordedByInput[];
    connectOrCreate?: Prisma.FeedPurchaseCreateOrConnectWithoutRecordedByInput | Prisma.FeedPurchaseCreateOrConnectWithoutRecordedByInput[];
    createMany?: Prisma.FeedPurchaseCreateManyRecordedByInputEnvelope;
    connect?: Prisma.FeedPurchaseWhereUniqueInput | Prisma.FeedPurchaseWhereUniqueInput[];
};
export type FeedPurchaseUncheckedCreateNestedManyWithoutRecordedByInput = {
    create?: Prisma.XOR<Prisma.FeedPurchaseCreateWithoutRecordedByInput, Prisma.FeedPurchaseUncheckedCreateWithoutRecordedByInput> | Prisma.FeedPurchaseCreateWithoutRecordedByInput[] | Prisma.FeedPurchaseUncheckedCreateWithoutRecordedByInput[];
    connectOrCreate?: Prisma.FeedPurchaseCreateOrConnectWithoutRecordedByInput | Prisma.FeedPurchaseCreateOrConnectWithoutRecordedByInput[];
    createMany?: Prisma.FeedPurchaseCreateManyRecordedByInputEnvelope;
    connect?: Prisma.FeedPurchaseWhereUniqueInput | Prisma.FeedPurchaseWhereUniqueInput[];
};
export type FeedPurchaseUpdateManyWithoutRecordedByNestedInput = {
    create?: Prisma.XOR<Prisma.FeedPurchaseCreateWithoutRecordedByInput, Prisma.FeedPurchaseUncheckedCreateWithoutRecordedByInput> | Prisma.FeedPurchaseCreateWithoutRecordedByInput[] | Prisma.FeedPurchaseUncheckedCreateWithoutRecordedByInput[];
    connectOrCreate?: Prisma.FeedPurchaseCreateOrConnectWithoutRecordedByInput | Prisma.FeedPurchaseCreateOrConnectWithoutRecordedByInput[];
    upsert?: Prisma.FeedPurchaseUpsertWithWhereUniqueWithoutRecordedByInput | Prisma.FeedPurchaseUpsertWithWhereUniqueWithoutRecordedByInput[];
    createMany?: Prisma.FeedPurchaseCreateManyRecordedByInputEnvelope;
    set?: Prisma.FeedPurchaseWhereUniqueInput | Prisma.FeedPurchaseWhereUniqueInput[];
    disconnect?: Prisma.FeedPurchaseWhereUniqueInput | Prisma.FeedPurchaseWhereUniqueInput[];
    delete?: Prisma.FeedPurchaseWhereUniqueInput | Prisma.FeedPurchaseWhereUniqueInput[];
    connect?: Prisma.FeedPurchaseWhereUniqueInput | Prisma.FeedPurchaseWhereUniqueInput[];
    update?: Prisma.FeedPurchaseUpdateWithWhereUniqueWithoutRecordedByInput | Prisma.FeedPurchaseUpdateWithWhereUniqueWithoutRecordedByInput[];
    updateMany?: Prisma.FeedPurchaseUpdateManyWithWhereWithoutRecordedByInput | Prisma.FeedPurchaseUpdateManyWithWhereWithoutRecordedByInput[];
    deleteMany?: Prisma.FeedPurchaseScalarWhereInput | Prisma.FeedPurchaseScalarWhereInput[];
};
export type FeedPurchaseUncheckedUpdateManyWithoutRecordedByNestedInput = {
    create?: Prisma.XOR<Prisma.FeedPurchaseCreateWithoutRecordedByInput, Prisma.FeedPurchaseUncheckedCreateWithoutRecordedByInput> | Prisma.FeedPurchaseCreateWithoutRecordedByInput[] | Prisma.FeedPurchaseUncheckedCreateWithoutRecordedByInput[];
    connectOrCreate?: Prisma.FeedPurchaseCreateOrConnectWithoutRecordedByInput | Prisma.FeedPurchaseCreateOrConnectWithoutRecordedByInput[];
    upsert?: Prisma.FeedPurchaseUpsertWithWhereUniqueWithoutRecordedByInput | Prisma.FeedPurchaseUpsertWithWhereUniqueWithoutRecordedByInput[];
    createMany?: Prisma.FeedPurchaseCreateManyRecordedByInputEnvelope;
    set?: Prisma.FeedPurchaseWhereUniqueInput | Prisma.FeedPurchaseWhereUniqueInput[];
    disconnect?: Prisma.FeedPurchaseWhereUniqueInput | Prisma.FeedPurchaseWhereUniqueInput[];
    delete?: Prisma.FeedPurchaseWhereUniqueInput | Prisma.FeedPurchaseWhereUniqueInput[];
    connect?: Prisma.FeedPurchaseWhereUniqueInput | Prisma.FeedPurchaseWhereUniqueInput[];
    update?: Prisma.FeedPurchaseUpdateWithWhereUniqueWithoutRecordedByInput | Prisma.FeedPurchaseUpdateWithWhereUniqueWithoutRecordedByInput[];
    updateMany?: Prisma.FeedPurchaseUpdateManyWithWhereWithoutRecordedByInput | Prisma.FeedPurchaseUpdateManyWithWhereWithoutRecordedByInput[];
    deleteMany?: Prisma.FeedPurchaseScalarWhereInput | Prisma.FeedPurchaseScalarWhereInput[];
};
export type FeedPurchaseCreateNestedManyWithoutFeedItemInput = {
    create?: Prisma.XOR<Prisma.FeedPurchaseCreateWithoutFeedItemInput, Prisma.FeedPurchaseUncheckedCreateWithoutFeedItemInput> | Prisma.FeedPurchaseCreateWithoutFeedItemInput[] | Prisma.FeedPurchaseUncheckedCreateWithoutFeedItemInput[];
    connectOrCreate?: Prisma.FeedPurchaseCreateOrConnectWithoutFeedItemInput | Prisma.FeedPurchaseCreateOrConnectWithoutFeedItemInput[];
    createMany?: Prisma.FeedPurchaseCreateManyFeedItemInputEnvelope;
    connect?: Prisma.FeedPurchaseWhereUniqueInput | Prisma.FeedPurchaseWhereUniqueInput[];
};
export type FeedPurchaseUncheckedCreateNestedManyWithoutFeedItemInput = {
    create?: Prisma.XOR<Prisma.FeedPurchaseCreateWithoutFeedItemInput, Prisma.FeedPurchaseUncheckedCreateWithoutFeedItemInput> | Prisma.FeedPurchaseCreateWithoutFeedItemInput[] | Prisma.FeedPurchaseUncheckedCreateWithoutFeedItemInput[];
    connectOrCreate?: Prisma.FeedPurchaseCreateOrConnectWithoutFeedItemInput | Prisma.FeedPurchaseCreateOrConnectWithoutFeedItemInput[];
    createMany?: Prisma.FeedPurchaseCreateManyFeedItemInputEnvelope;
    connect?: Prisma.FeedPurchaseWhereUniqueInput | Prisma.FeedPurchaseWhereUniqueInput[];
};
export type FeedPurchaseUpdateManyWithoutFeedItemNestedInput = {
    create?: Prisma.XOR<Prisma.FeedPurchaseCreateWithoutFeedItemInput, Prisma.FeedPurchaseUncheckedCreateWithoutFeedItemInput> | Prisma.FeedPurchaseCreateWithoutFeedItemInput[] | Prisma.FeedPurchaseUncheckedCreateWithoutFeedItemInput[];
    connectOrCreate?: Prisma.FeedPurchaseCreateOrConnectWithoutFeedItemInput | Prisma.FeedPurchaseCreateOrConnectWithoutFeedItemInput[];
    upsert?: Prisma.FeedPurchaseUpsertWithWhereUniqueWithoutFeedItemInput | Prisma.FeedPurchaseUpsertWithWhereUniqueWithoutFeedItemInput[];
    createMany?: Prisma.FeedPurchaseCreateManyFeedItemInputEnvelope;
    set?: Prisma.FeedPurchaseWhereUniqueInput | Prisma.FeedPurchaseWhereUniqueInput[];
    disconnect?: Prisma.FeedPurchaseWhereUniqueInput | Prisma.FeedPurchaseWhereUniqueInput[];
    delete?: Prisma.FeedPurchaseWhereUniqueInput | Prisma.FeedPurchaseWhereUniqueInput[];
    connect?: Prisma.FeedPurchaseWhereUniqueInput | Prisma.FeedPurchaseWhereUniqueInput[];
    update?: Prisma.FeedPurchaseUpdateWithWhereUniqueWithoutFeedItemInput | Prisma.FeedPurchaseUpdateWithWhereUniqueWithoutFeedItemInput[];
    updateMany?: Prisma.FeedPurchaseUpdateManyWithWhereWithoutFeedItemInput | Prisma.FeedPurchaseUpdateManyWithWhereWithoutFeedItemInput[];
    deleteMany?: Prisma.FeedPurchaseScalarWhereInput | Prisma.FeedPurchaseScalarWhereInput[];
};
export type FeedPurchaseUncheckedUpdateManyWithoutFeedItemNestedInput = {
    create?: Prisma.XOR<Prisma.FeedPurchaseCreateWithoutFeedItemInput, Prisma.FeedPurchaseUncheckedCreateWithoutFeedItemInput> | Prisma.FeedPurchaseCreateWithoutFeedItemInput[] | Prisma.FeedPurchaseUncheckedCreateWithoutFeedItemInput[];
    connectOrCreate?: Prisma.FeedPurchaseCreateOrConnectWithoutFeedItemInput | Prisma.FeedPurchaseCreateOrConnectWithoutFeedItemInput[];
    upsert?: Prisma.FeedPurchaseUpsertWithWhereUniqueWithoutFeedItemInput | Prisma.FeedPurchaseUpsertWithWhereUniqueWithoutFeedItemInput[];
    createMany?: Prisma.FeedPurchaseCreateManyFeedItemInputEnvelope;
    set?: Prisma.FeedPurchaseWhereUniqueInput | Prisma.FeedPurchaseWhereUniqueInput[];
    disconnect?: Prisma.FeedPurchaseWhereUniqueInput | Prisma.FeedPurchaseWhereUniqueInput[];
    delete?: Prisma.FeedPurchaseWhereUniqueInput | Prisma.FeedPurchaseWhereUniqueInput[];
    connect?: Prisma.FeedPurchaseWhereUniqueInput | Prisma.FeedPurchaseWhereUniqueInput[];
    update?: Prisma.FeedPurchaseUpdateWithWhereUniqueWithoutFeedItemInput | Prisma.FeedPurchaseUpdateWithWhereUniqueWithoutFeedItemInput[];
    updateMany?: Prisma.FeedPurchaseUpdateManyWithWhereWithoutFeedItemInput | Prisma.FeedPurchaseUpdateManyWithWhereWithoutFeedItemInput[];
    deleteMany?: Prisma.FeedPurchaseScalarWhereInput | Prisma.FeedPurchaseScalarWhereInput[];
};
export type FeedPurchaseCreateWithoutRecordedByInput = {
    id?: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalCost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplier?: string | null;
    invoiceNumber?: string | null;
    purchaseDate?: Date | string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    feedItem: Prisma.FeedItemCreateNestedOneWithoutPurchasesInput;
};
export type FeedPurchaseUncheckedCreateWithoutRecordedByInput = {
    id?: string;
    feedItemId: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalCost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplier?: string | null;
    invoiceNumber?: string | null;
    purchaseDate?: Date | string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FeedPurchaseCreateOrConnectWithoutRecordedByInput = {
    where: Prisma.FeedPurchaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeedPurchaseCreateWithoutRecordedByInput, Prisma.FeedPurchaseUncheckedCreateWithoutRecordedByInput>;
};
export type FeedPurchaseCreateManyRecordedByInputEnvelope = {
    data: Prisma.FeedPurchaseCreateManyRecordedByInput | Prisma.FeedPurchaseCreateManyRecordedByInput[];
    skipDuplicates?: boolean;
};
export type FeedPurchaseUpsertWithWhereUniqueWithoutRecordedByInput = {
    where: Prisma.FeedPurchaseWhereUniqueInput;
    update: Prisma.XOR<Prisma.FeedPurchaseUpdateWithoutRecordedByInput, Prisma.FeedPurchaseUncheckedUpdateWithoutRecordedByInput>;
    create: Prisma.XOR<Prisma.FeedPurchaseCreateWithoutRecordedByInput, Prisma.FeedPurchaseUncheckedCreateWithoutRecordedByInput>;
};
export type FeedPurchaseUpdateWithWhereUniqueWithoutRecordedByInput = {
    where: Prisma.FeedPurchaseWhereUniqueInput;
    data: Prisma.XOR<Prisma.FeedPurchaseUpdateWithoutRecordedByInput, Prisma.FeedPurchaseUncheckedUpdateWithoutRecordedByInput>;
};
export type FeedPurchaseUpdateManyWithWhereWithoutRecordedByInput = {
    where: Prisma.FeedPurchaseScalarWhereInput;
    data: Prisma.XOR<Prisma.FeedPurchaseUpdateManyMutationInput, Prisma.FeedPurchaseUncheckedUpdateManyWithoutRecordedByInput>;
};
export type FeedPurchaseScalarWhereInput = {
    AND?: Prisma.FeedPurchaseScalarWhereInput | Prisma.FeedPurchaseScalarWhereInput[];
    OR?: Prisma.FeedPurchaseScalarWhereInput[];
    NOT?: Prisma.FeedPurchaseScalarWhereInput | Prisma.FeedPurchaseScalarWhereInput[];
    id?: Prisma.StringFilter<"FeedPurchase"> | string;
    feedItemId?: Prisma.StringFilter<"FeedPurchase"> | string;
    quantity?: Prisma.DecimalFilter<"FeedPurchase"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFilter<"FeedPurchase"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalCost?: Prisma.DecimalFilter<"FeedPurchase"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplier?: Prisma.StringNullableFilter<"FeedPurchase"> | string | null;
    invoiceNumber?: Prisma.StringNullableFilter<"FeedPurchase"> | string | null;
    purchaseDate?: Prisma.DateTimeFilter<"FeedPurchase"> | Date | string;
    notes?: Prisma.StringNullableFilter<"FeedPurchase"> | string | null;
    recordedById?: Prisma.StringFilter<"FeedPurchase"> | string;
    createdAt?: Prisma.DateTimeFilter<"FeedPurchase"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FeedPurchase"> | Date | string;
};
export type FeedPurchaseCreateWithoutFeedItemInput = {
    id?: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalCost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplier?: string | null;
    invoiceNumber?: string | null;
    purchaseDate?: Date | string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    recordedBy: Prisma.UserCreateNestedOneWithoutFeedPurchasesInput;
};
export type FeedPurchaseUncheckedCreateWithoutFeedItemInput = {
    id?: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalCost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplier?: string | null;
    invoiceNumber?: string | null;
    purchaseDate?: Date | string;
    notes?: string | null;
    recordedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FeedPurchaseCreateOrConnectWithoutFeedItemInput = {
    where: Prisma.FeedPurchaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeedPurchaseCreateWithoutFeedItemInput, Prisma.FeedPurchaseUncheckedCreateWithoutFeedItemInput>;
};
export type FeedPurchaseCreateManyFeedItemInputEnvelope = {
    data: Prisma.FeedPurchaseCreateManyFeedItemInput | Prisma.FeedPurchaseCreateManyFeedItemInput[];
    skipDuplicates?: boolean;
};
export type FeedPurchaseUpsertWithWhereUniqueWithoutFeedItemInput = {
    where: Prisma.FeedPurchaseWhereUniqueInput;
    update: Prisma.XOR<Prisma.FeedPurchaseUpdateWithoutFeedItemInput, Prisma.FeedPurchaseUncheckedUpdateWithoutFeedItemInput>;
    create: Prisma.XOR<Prisma.FeedPurchaseCreateWithoutFeedItemInput, Prisma.FeedPurchaseUncheckedCreateWithoutFeedItemInput>;
};
export type FeedPurchaseUpdateWithWhereUniqueWithoutFeedItemInput = {
    where: Prisma.FeedPurchaseWhereUniqueInput;
    data: Prisma.XOR<Prisma.FeedPurchaseUpdateWithoutFeedItemInput, Prisma.FeedPurchaseUncheckedUpdateWithoutFeedItemInput>;
};
export type FeedPurchaseUpdateManyWithWhereWithoutFeedItemInput = {
    where: Prisma.FeedPurchaseScalarWhereInput;
    data: Prisma.XOR<Prisma.FeedPurchaseUpdateManyMutationInput, Prisma.FeedPurchaseUncheckedUpdateManyWithoutFeedItemInput>;
};
export type FeedPurchaseCreateManyRecordedByInput = {
    id?: string;
    feedItemId: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalCost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplier?: string | null;
    invoiceNumber?: string | null;
    purchaseDate?: Date | string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FeedPurchaseUpdateWithoutRecordedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invoiceNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    feedItem?: Prisma.FeedItemUpdateOneRequiredWithoutPurchasesNestedInput;
};
export type FeedPurchaseUncheckedUpdateWithoutRecordedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    feedItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invoiceNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeedPurchaseUncheckedUpdateManyWithoutRecordedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    feedItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invoiceNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeedPurchaseCreateManyFeedItemInput = {
    id?: string;
    quantity: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalCost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplier?: string | null;
    invoiceNumber?: string | null;
    purchaseDate?: Date | string;
    notes?: string | null;
    recordedById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FeedPurchaseUpdateWithoutFeedItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invoiceNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    recordedBy?: Prisma.UserUpdateOneRequiredWithoutFeedPurchasesNestedInput;
};
export type FeedPurchaseUncheckedUpdateWithoutFeedItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invoiceNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeedPurchaseUncheckedUpdateManyWithoutFeedItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    supplier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invoiceNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchaseDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeedPurchaseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    feedItemId?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    totalCost?: boolean;
    supplier?: boolean;
    invoiceNumber?: boolean;
    purchaseDate?: boolean;
    notes?: boolean;
    recordedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    feedItem?: boolean | Prisma.FeedItemDefaultArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["feedPurchase"]>;
export type FeedPurchaseSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    feedItemId?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    totalCost?: boolean;
    supplier?: boolean;
    invoiceNumber?: boolean;
    purchaseDate?: boolean;
    notes?: boolean;
    recordedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    feedItem?: boolean | Prisma.FeedItemDefaultArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["feedPurchase"]>;
export type FeedPurchaseSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    feedItemId?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    totalCost?: boolean;
    supplier?: boolean;
    invoiceNumber?: boolean;
    purchaseDate?: boolean;
    notes?: boolean;
    recordedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    feedItem?: boolean | Prisma.FeedItemDefaultArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["feedPurchase"]>;
export type FeedPurchaseSelectScalar = {
    id?: boolean;
    feedItemId?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    totalCost?: boolean;
    supplier?: boolean;
    invoiceNumber?: boolean;
    purchaseDate?: boolean;
    notes?: boolean;
    recordedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type FeedPurchaseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "feedItemId" | "quantity" | "unitPrice" | "totalCost" | "supplier" | "invoiceNumber" | "purchaseDate" | "notes" | "recordedById" | "createdAt" | "updatedAt", ExtArgs["result"]["feedPurchase"]>;
export type FeedPurchaseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    feedItem?: boolean | Prisma.FeedItemDefaultArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type FeedPurchaseIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    feedItem?: boolean | Prisma.FeedItemDefaultArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type FeedPurchaseIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    feedItem?: boolean | Prisma.FeedItemDefaultArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $FeedPurchasePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FeedPurchase";
    objects: {
        feedItem: Prisma.$FeedItemPayload<ExtArgs>;
        recordedBy: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        feedItemId: string;
        quantity: runtime.Decimal;
        unitPrice: runtime.Decimal;
        totalCost: runtime.Decimal;
        supplier: string | null;
        invoiceNumber: string | null;
        purchaseDate: Date;
        notes: string | null;
        recordedById: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["feedPurchase"]>;
    composites: {};
};
export type FeedPurchaseGetPayload<S extends boolean | null | undefined | FeedPurchaseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FeedPurchasePayload, S>;
export type FeedPurchaseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FeedPurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FeedPurchaseCountAggregateInputType | true;
};
export interface FeedPurchaseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FeedPurchase'];
        meta: {
            name: 'FeedPurchase';
        };
    };
    /**
     * Find zero or one FeedPurchase that matches the filter.
     * @param {FeedPurchaseFindUniqueArgs} args - Arguments to find a FeedPurchase
     * @example
     * // Get one FeedPurchase
     * const feedPurchase = await prisma.feedPurchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedPurchaseFindUniqueArgs>(args: Prisma.SelectSubset<T, FeedPurchaseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FeedPurchaseClient<runtime.Types.Result.GetResult<Prisma.$FeedPurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one FeedPurchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedPurchaseFindUniqueOrThrowArgs} args - Arguments to find a FeedPurchase
     * @example
     * // Get one FeedPurchase
     * const feedPurchase = await prisma.feedPurchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedPurchaseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FeedPurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FeedPurchaseClient<runtime.Types.Result.GetResult<Prisma.$FeedPurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first FeedPurchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedPurchaseFindFirstArgs} args - Arguments to find a FeedPurchase
     * @example
     * // Get one FeedPurchase
     * const feedPurchase = await prisma.feedPurchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedPurchaseFindFirstArgs>(args?: Prisma.SelectSubset<T, FeedPurchaseFindFirstArgs<ExtArgs>>): Prisma.Prisma__FeedPurchaseClient<runtime.Types.Result.GetResult<Prisma.$FeedPurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first FeedPurchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedPurchaseFindFirstOrThrowArgs} args - Arguments to find a FeedPurchase
     * @example
     * // Get one FeedPurchase
     * const feedPurchase = await prisma.feedPurchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedPurchaseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FeedPurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FeedPurchaseClient<runtime.Types.Result.GetResult<Prisma.$FeedPurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more FeedPurchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedPurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeedPurchases
     * const feedPurchases = await prisma.feedPurchase.findMany()
     *
     * // Get first 10 FeedPurchases
     * const feedPurchases = await prisma.feedPurchase.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const feedPurchaseWithIdOnly = await prisma.feedPurchase.findMany({ select: { id: true } })
     *
     */
    findMany<T extends FeedPurchaseFindManyArgs>(args?: Prisma.SelectSubset<T, FeedPurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeedPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a FeedPurchase.
     * @param {FeedPurchaseCreateArgs} args - Arguments to create a FeedPurchase.
     * @example
     * // Create one FeedPurchase
     * const FeedPurchase = await prisma.feedPurchase.create({
     *   data: {
     *     // ... data to create a FeedPurchase
     *   }
     * })
     *
     */
    create<T extends FeedPurchaseCreateArgs>(args: Prisma.SelectSubset<T, FeedPurchaseCreateArgs<ExtArgs>>): Prisma.Prisma__FeedPurchaseClient<runtime.Types.Result.GetResult<Prisma.$FeedPurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many FeedPurchases.
     * @param {FeedPurchaseCreateManyArgs} args - Arguments to create many FeedPurchases.
     * @example
     * // Create many FeedPurchases
     * const feedPurchase = await prisma.feedPurchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FeedPurchaseCreateManyArgs>(args?: Prisma.SelectSubset<T, FeedPurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many FeedPurchases and returns the data saved in the database.
     * @param {FeedPurchaseCreateManyAndReturnArgs} args - Arguments to create many FeedPurchases.
     * @example
     * // Create many FeedPurchases
     * const feedPurchase = await prisma.feedPurchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many FeedPurchases and only return the `id`
     * const feedPurchaseWithIdOnly = await prisma.feedPurchase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FeedPurchaseCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FeedPurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeedPurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a FeedPurchase.
     * @param {FeedPurchaseDeleteArgs} args - Arguments to delete one FeedPurchase.
     * @example
     * // Delete one FeedPurchase
     * const FeedPurchase = await prisma.feedPurchase.delete({
     *   where: {
     *     // ... filter to delete one FeedPurchase
     *   }
     * })
     *
     */
    delete<T extends FeedPurchaseDeleteArgs>(args: Prisma.SelectSubset<T, FeedPurchaseDeleteArgs<ExtArgs>>): Prisma.Prisma__FeedPurchaseClient<runtime.Types.Result.GetResult<Prisma.$FeedPurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one FeedPurchase.
     * @param {FeedPurchaseUpdateArgs} args - Arguments to update one FeedPurchase.
     * @example
     * // Update one FeedPurchase
     * const feedPurchase = await prisma.feedPurchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FeedPurchaseUpdateArgs>(args: Prisma.SelectSubset<T, FeedPurchaseUpdateArgs<ExtArgs>>): Prisma.Prisma__FeedPurchaseClient<runtime.Types.Result.GetResult<Prisma.$FeedPurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more FeedPurchases.
     * @param {FeedPurchaseDeleteManyArgs} args - Arguments to filter FeedPurchases to delete.
     * @example
     * // Delete a few FeedPurchases
     * const { count } = await prisma.feedPurchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FeedPurchaseDeleteManyArgs>(args?: Prisma.SelectSubset<T, FeedPurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more FeedPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedPurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeedPurchases
     * const feedPurchase = await prisma.feedPurchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FeedPurchaseUpdateManyArgs>(args: Prisma.SelectSubset<T, FeedPurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more FeedPurchases and returns the data updated in the database.
     * @param {FeedPurchaseUpdateManyAndReturnArgs} args - Arguments to update many FeedPurchases.
     * @example
     * // Update many FeedPurchases
     * const feedPurchase = await prisma.feedPurchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more FeedPurchases and only return the `id`
     * const feedPurchaseWithIdOnly = await prisma.feedPurchase.updateManyAndReturn({
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
    updateManyAndReturn<T extends FeedPurchaseUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FeedPurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeedPurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one FeedPurchase.
     * @param {FeedPurchaseUpsertArgs} args - Arguments to update or create a FeedPurchase.
     * @example
     * // Update or create a FeedPurchase
     * const feedPurchase = await prisma.feedPurchase.upsert({
     *   create: {
     *     // ... data to create a FeedPurchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeedPurchase we want to update
     *   }
     * })
     */
    upsert<T extends FeedPurchaseUpsertArgs>(args: Prisma.SelectSubset<T, FeedPurchaseUpsertArgs<ExtArgs>>): Prisma.Prisma__FeedPurchaseClient<runtime.Types.Result.GetResult<Prisma.$FeedPurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of FeedPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedPurchaseCountArgs} args - Arguments to filter FeedPurchases to count.
     * @example
     * // Count the number of FeedPurchases
     * const count = await prisma.feedPurchase.count({
     *   where: {
     *     // ... the filter for the FeedPurchases we want to count
     *   }
     * })
    **/
    count<T extends FeedPurchaseCountArgs>(args?: Prisma.Subset<T, FeedPurchaseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FeedPurchaseCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a FeedPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedPurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeedPurchaseAggregateArgs>(args: Prisma.Subset<T, FeedPurchaseAggregateArgs>): Prisma.PrismaPromise<GetFeedPurchaseAggregateType<T>>;
    /**
     * Group by FeedPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedPurchaseGroupByArgs} args - Group by arguments.
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
    groupBy<T extends FeedPurchaseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FeedPurchaseGroupByArgs['orderBy'];
    } : {
        orderBy?: FeedPurchaseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FeedPurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the FeedPurchase model
     */
    readonly fields: FeedPurchaseFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for FeedPurchase.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__FeedPurchaseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    feedItem<T extends Prisma.FeedItemDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FeedItemDefaultArgs<ExtArgs>>): Prisma.Prisma__FeedItemClient<runtime.Types.Result.GetResult<Prisma.$FeedItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the FeedPurchase model
 */
export interface FeedPurchaseFieldRefs {
    readonly id: Prisma.FieldRef<"FeedPurchase", 'String'>;
    readonly feedItemId: Prisma.FieldRef<"FeedPurchase", 'String'>;
    readonly quantity: Prisma.FieldRef<"FeedPurchase", 'Decimal'>;
    readonly unitPrice: Prisma.FieldRef<"FeedPurchase", 'Decimal'>;
    readonly totalCost: Prisma.FieldRef<"FeedPurchase", 'Decimal'>;
    readonly supplier: Prisma.FieldRef<"FeedPurchase", 'String'>;
    readonly invoiceNumber: Prisma.FieldRef<"FeedPurchase", 'String'>;
    readonly purchaseDate: Prisma.FieldRef<"FeedPurchase", 'DateTime'>;
    readonly notes: Prisma.FieldRef<"FeedPurchase", 'String'>;
    readonly recordedById: Prisma.FieldRef<"FeedPurchase", 'String'>;
    readonly createdAt: Prisma.FieldRef<"FeedPurchase", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"FeedPurchase", 'DateTime'>;
}
/**
 * FeedPurchase findUnique
 */
export type FeedPurchaseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedPurchase
     */
    select?: Prisma.FeedPurchaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedPurchase
     */
    omit?: Prisma.FeedPurchaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedPurchaseInclude<ExtArgs> | null;
    /**
     * Filter, which FeedPurchase to fetch.
     */
    where: Prisma.FeedPurchaseWhereUniqueInput;
};
/**
 * FeedPurchase findUniqueOrThrow
 */
export type FeedPurchaseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedPurchase
     */
    select?: Prisma.FeedPurchaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedPurchase
     */
    omit?: Prisma.FeedPurchaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedPurchaseInclude<ExtArgs> | null;
    /**
     * Filter, which FeedPurchase to fetch.
     */
    where: Prisma.FeedPurchaseWhereUniqueInput;
};
/**
 * FeedPurchase findFirst
 */
export type FeedPurchaseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedPurchase
     */
    select?: Prisma.FeedPurchaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedPurchase
     */
    omit?: Prisma.FeedPurchaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedPurchaseInclude<ExtArgs> | null;
    /**
     * Filter, which FeedPurchase to fetch.
     */
    where?: Prisma.FeedPurchaseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FeedPurchases to fetch.
     */
    orderBy?: Prisma.FeedPurchaseOrderByWithRelationInput | Prisma.FeedPurchaseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FeedPurchases.
     */
    cursor?: Prisma.FeedPurchaseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FeedPurchases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FeedPurchases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FeedPurchases.
     */
    distinct?: Prisma.FeedPurchaseScalarFieldEnum | Prisma.FeedPurchaseScalarFieldEnum[];
};
/**
 * FeedPurchase findFirstOrThrow
 */
export type FeedPurchaseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedPurchase
     */
    select?: Prisma.FeedPurchaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedPurchase
     */
    omit?: Prisma.FeedPurchaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedPurchaseInclude<ExtArgs> | null;
    /**
     * Filter, which FeedPurchase to fetch.
     */
    where?: Prisma.FeedPurchaseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FeedPurchases to fetch.
     */
    orderBy?: Prisma.FeedPurchaseOrderByWithRelationInput | Prisma.FeedPurchaseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FeedPurchases.
     */
    cursor?: Prisma.FeedPurchaseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FeedPurchases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FeedPurchases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FeedPurchases.
     */
    distinct?: Prisma.FeedPurchaseScalarFieldEnum | Prisma.FeedPurchaseScalarFieldEnum[];
};
/**
 * FeedPurchase findMany
 */
export type FeedPurchaseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedPurchase
     */
    select?: Prisma.FeedPurchaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedPurchase
     */
    omit?: Prisma.FeedPurchaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedPurchaseInclude<ExtArgs> | null;
    /**
     * Filter, which FeedPurchases to fetch.
     */
    where?: Prisma.FeedPurchaseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FeedPurchases to fetch.
     */
    orderBy?: Prisma.FeedPurchaseOrderByWithRelationInput | Prisma.FeedPurchaseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing FeedPurchases.
     */
    cursor?: Prisma.FeedPurchaseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FeedPurchases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FeedPurchases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FeedPurchases.
     */
    distinct?: Prisma.FeedPurchaseScalarFieldEnum | Prisma.FeedPurchaseScalarFieldEnum[];
};
/**
 * FeedPurchase create
 */
export type FeedPurchaseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedPurchase
     */
    select?: Prisma.FeedPurchaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedPurchase
     */
    omit?: Prisma.FeedPurchaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedPurchaseInclude<ExtArgs> | null;
    /**
     * The data needed to create a FeedPurchase.
     */
    data: Prisma.XOR<Prisma.FeedPurchaseCreateInput, Prisma.FeedPurchaseUncheckedCreateInput>;
};
/**
 * FeedPurchase createMany
 */
export type FeedPurchaseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeedPurchases.
     */
    data: Prisma.FeedPurchaseCreateManyInput | Prisma.FeedPurchaseCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * FeedPurchase createManyAndReturn
 */
export type FeedPurchaseCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedPurchase
     */
    select?: Prisma.FeedPurchaseSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedPurchase
     */
    omit?: Prisma.FeedPurchaseOmit<ExtArgs> | null;
    /**
     * The data used to create many FeedPurchases.
     */
    data: Prisma.FeedPurchaseCreateManyInput | Prisma.FeedPurchaseCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedPurchaseIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * FeedPurchase update
 */
export type FeedPurchaseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedPurchase
     */
    select?: Prisma.FeedPurchaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedPurchase
     */
    omit?: Prisma.FeedPurchaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedPurchaseInclude<ExtArgs> | null;
    /**
     * The data needed to update a FeedPurchase.
     */
    data: Prisma.XOR<Prisma.FeedPurchaseUpdateInput, Prisma.FeedPurchaseUncheckedUpdateInput>;
    /**
     * Choose, which FeedPurchase to update.
     */
    where: Prisma.FeedPurchaseWhereUniqueInput;
};
/**
 * FeedPurchase updateMany
 */
export type FeedPurchaseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update FeedPurchases.
     */
    data: Prisma.XOR<Prisma.FeedPurchaseUpdateManyMutationInput, Prisma.FeedPurchaseUncheckedUpdateManyInput>;
    /**
     * Filter which FeedPurchases to update
     */
    where?: Prisma.FeedPurchaseWhereInput;
    /**
     * Limit how many FeedPurchases to update.
     */
    limit?: number;
};
/**
 * FeedPurchase updateManyAndReturn
 */
export type FeedPurchaseUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedPurchase
     */
    select?: Prisma.FeedPurchaseSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedPurchase
     */
    omit?: Prisma.FeedPurchaseOmit<ExtArgs> | null;
    /**
     * The data used to update FeedPurchases.
     */
    data: Prisma.XOR<Prisma.FeedPurchaseUpdateManyMutationInput, Prisma.FeedPurchaseUncheckedUpdateManyInput>;
    /**
     * Filter which FeedPurchases to update
     */
    where?: Prisma.FeedPurchaseWhereInput;
    /**
     * Limit how many FeedPurchases to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedPurchaseIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * FeedPurchase upsert
 */
export type FeedPurchaseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedPurchase
     */
    select?: Prisma.FeedPurchaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedPurchase
     */
    omit?: Prisma.FeedPurchaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedPurchaseInclude<ExtArgs> | null;
    /**
     * The filter to search for the FeedPurchase to update in case it exists.
     */
    where: Prisma.FeedPurchaseWhereUniqueInput;
    /**
     * In case the FeedPurchase found by the `where` argument doesn't exist, create a new FeedPurchase with this data.
     */
    create: Prisma.XOR<Prisma.FeedPurchaseCreateInput, Prisma.FeedPurchaseUncheckedCreateInput>;
    /**
     * In case the FeedPurchase was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.FeedPurchaseUpdateInput, Prisma.FeedPurchaseUncheckedUpdateInput>;
};
/**
 * FeedPurchase delete
 */
export type FeedPurchaseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedPurchase
     */
    select?: Prisma.FeedPurchaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedPurchase
     */
    omit?: Prisma.FeedPurchaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedPurchaseInclude<ExtArgs> | null;
    /**
     * Filter which FeedPurchase to delete.
     */
    where: Prisma.FeedPurchaseWhereUniqueInput;
};
/**
 * FeedPurchase deleteMany
 */
export type FeedPurchaseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which FeedPurchases to delete
     */
    where?: Prisma.FeedPurchaseWhereInput;
    /**
     * Limit how many FeedPurchases to delete.
     */
    limit?: number;
};
/**
 * FeedPurchase without action
 */
export type FeedPurchaseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedPurchase
     */
    select?: Prisma.FeedPurchaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FeedPurchase
     */
    omit?: Prisma.FeedPurchaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedPurchaseInclude<ExtArgs> | null;
};
//# sourceMappingURL=FeedPurchase.d.ts.map