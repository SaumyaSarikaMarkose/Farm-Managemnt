import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Cow
 *
 */
export type CowModel = runtime.Types.Result.DefaultSelection<Prisma.$CowPayload>;
export type AggregateCow = {
    _count: CowCountAggregateOutputType | null;
    _avg: CowAvgAggregateOutputType | null;
    _sum: CowSumAggregateOutputType | null;
    _min: CowMinAggregateOutputType | null;
    _max: CowMaxAggregateOutputType | null;
};
export type CowAvgAggregateOutputType = {
    purchasePrice: runtime.Decimal | null;
};
export type CowSumAggregateOutputType = {
    purchasePrice: runtime.Decimal | null;
};
export type CowMinAggregateOutputType = {
    id: string | null;
    tagNumber: string | null;
    name: string | null;
    breed: string | null;
    gender: $Enums.CowGender | null;
    dateOfBirth: Date | null;
    acquiredAt: Date | null;
    purchasePrice: runtime.Decimal | null;
    status: $Enums.CowStatus | null;
    stage: $Enums.CowStage | null;
    photoUrl: string | null;
    description: string | null;
    farmId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CowMaxAggregateOutputType = {
    id: string | null;
    tagNumber: string | null;
    name: string | null;
    breed: string | null;
    gender: $Enums.CowGender | null;
    dateOfBirth: Date | null;
    acquiredAt: Date | null;
    purchasePrice: runtime.Decimal | null;
    status: $Enums.CowStatus | null;
    stage: $Enums.CowStage | null;
    photoUrl: string | null;
    description: string | null;
    farmId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CowCountAggregateOutputType = {
    id: number;
    tagNumber: number;
    name: number;
    breed: number;
    gender: number;
    dateOfBirth: number;
    acquiredAt: number;
    purchasePrice: number;
    status: number;
    stage: number;
    photoUrl: number;
    description: number;
    farmId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CowAvgAggregateInputType = {
    purchasePrice?: true;
};
export type CowSumAggregateInputType = {
    purchasePrice?: true;
};
export type CowMinAggregateInputType = {
    id?: true;
    tagNumber?: true;
    name?: true;
    breed?: true;
    gender?: true;
    dateOfBirth?: true;
    acquiredAt?: true;
    purchasePrice?: true;
    status?: true;
    stage?: true;
    photoUrl?: true;
    description?: true;
    farmId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CowMaxAggregateInputType = {
    id?: true;
    tagNumber?: true;
    name?: true;
    breed?: true;
    gender?: true;
    dateOfBirth?: true;
    acquiredAt?: true;
    purchasePrice?: true;
    status?: true;
    stage?: true;
    photoUrl?: true;
    description?: true;
    farmId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CowCountAggregateInputType = {
    id?: true;
    tagNumber?: true;
    name?: true;
    breed?: true;
    gender?: true;
    dateOfBirth?: true;
    acquiredAt?: true;
    purchasePrice?: true;
    status?: true;
    stage?: true;
    photoUrl?: true;
    description?: true;
    farmId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CowAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Cow to aggregate.
     */
    where?: Prisma.CowWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cows to fetch.
     */
    orderBy?: Prisma.CowOrderByWithRelationInput | Prisma.CowOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CowWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cows from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cows.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Cows
    **/
    _count?: true | CowCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CowAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CowSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CowMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CowMaxAggregateInputType;
};
export type GetCowAggregateType<T extends CowAggregateArgs> = {
    [P in keyof T & keyof AggregateCow]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCow[P]> : Prisma.GetScalarType<T[P], AggregateCow[P]>;
};
export type CowGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CowWhereInput;
    orderBy?: Prisma.CowOrderByWithAggregationInput | Prisma.CowOrderByWithAggregationInput[];
    by: Prisma.CowScalarFieldEnum[] | Prisma.CowScalarFieldEnum;
    having?: Prisma.CowScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CowCountAggregateInputType | true;
    _avg?: CowAvgAggregateInputType;
    _sum?: CowSumAggregateInputType;
    _min?: CowMinAggregateInputType;
    _max?: CowMaxAggregateInputType;
};
export type CowGroupByOutputType = {
    id: string;
    tagNumber: string;
    name: string | null;
    breed: string | null;
    gender: $Enums.CowGender;
    dateOfBirth: Date | null;
    acquiredAt: Date | null;
    purchasePrice: runtime.Decimal | null;
    status: $Enums.CowStatus;
    stage: $Enums.CowStage;
    photoUrl: string | null;
    description: string | null;
    farmId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: CowCountAggregateOutputType | null;
    _avg: CowAvgAggregateOutputType | null;
    _sum: CowSumAggregateOutputType | null;
    _min: CowMinAggregateOutputType | null;
    _max: CowMaxAggregateOutputType | null;
};
export type GetCowGroupByPayload<T extends CowGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CowGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CowGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CowGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CowGroupByOutputType[P]>;
}>>;
export type CowWhereInput = {
    AND?: Prisma.CowWhereInput | Prisma.CowWhereInput[];
    OR?: Prisma.CowWhereInput[];
    NOT?: Prisma.CowWhereInput | Prisma.CowWhereInput[];
    id?: Prisma.StringFilter<"Cow"> | string;
    tagNumber?: Prisma.StringFilter<"Cow"> | string;
    name?: Prisma.StringNullableFilter<"Cow"> | string | null;
    breed?: Prisma.StringNullableFilter<"Cow"> | string | null;
    gender?: Prisma.EnumCowGenderFilter<"Cow"> | $Enums.CowGender;
    dateOfBirth?: Prisma.DateTimeNullableFilter<"Cow"> | Date | string | null;
    acquiredAt?: Prisma.DateTimeNullableFilter<"Cow"> | Date | string | null;
    purchasePrice?: Prisma.DecimalNullableFilter<"Cow"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumCowStatusFilter<"Cow"> | $Enums.CowStatus;
    stage?: Prisma.EnumCowStageFilter<"Cow"> | $Enums.CowStage;
    photoUrl?: Prisma.StringNullableFilter<"Cow"> | string | null;
    description?: Prisma.StringNullableFilter<"Cow"> | string | null;
    farmId?: Prisma.StringFilter<"Cow"> | string;
    createdAt?: Prisma.DateTimeFilter<"Cow"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Cow"> | Date | string;
    farm?: Prisma.XOR<Prisma.FarmScalarRelationFilter, Prisma.FarmWhereInput>;
    milkProductions?: Prisma.MilkProductionListRelationFilter;
    feedConsumptions?: Prisma.FeedConsumptionListRelationFilter;
};
export type CowOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tagNumber?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    breed?: Prisma.SortOrderInput | Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrderInput | Prisma.SortOrder;
    acquiredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    purchasePrice?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    stage?: Prisma.SortOrder;
    photoUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    farmId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    farm?: Prisma.FarmOrderByWithRelationInput;
    milkProductions?: Prisma.MilkProductionOrderByRelationAggregateInput;
    feedConsumptions?: Prisma.FeedConsumptionOrderByRelationAggregateInput;
};
export type CowWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    farmId_tagNumber?: Prisma.CowFarmIdTagNumberCompoundUniqueInput;
    AND?: Prisma.CowWhereInput | Prisma.CowWhereInput[];
    OR?: Prisma.CowWhereInput[];
    NOT?: Prisma.CowWhereInput | Prisma.CowWhereInput[];
    tagNumber?: Prisma.StringFilter<"Cow"> | string;
    name?: Prisma.StringNullableFilter<"Cow"> | string | null;
    breed?: Prisma.StringNullableFilter<"Cow"> | string | null;
    gender?: Prisma.EnumCowGenderFilter<"Cow"> | $Enums.CowGender;
    dateOfBirth?: Prisma.DateTimeNullableFilter<"Cow"> | Date | string | null;
    acquiredAt?: Prisma.DateTimeNullableFilter<"Cow"> | Date | string | null;
    purchasePrice?: Prisma.DecimalNullableFilter<"Cow"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumCowStatusFilter<"Cow"> | $Enums.CowStatus;
    stage?: Prisma.EnumCowStageFilter<"Cow"> | $Enums.CowStage;
    photoUrl?: Prisma.StringNullableFilter<"Cow"> | string | null;
    description?: Prisma.StringNullableFilter<"Cow"> | string | null;
    farmId?: Prisma.StringFilter<"Cow"> | string;
    createdAt?: Prisma.DateTimeFilter<"Cow"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Cow"> | Date | string;
    farm?: Prisma.XOR<Prisma.FarmScalarRelationFilter, Prisma.FarmWhereInput>;
    milkProductions?: Prisma.MilkProductionListRelationFilter;
    feedConsumptions?: Prisma.FeedConsumptionListRelationFilter;
}, "id" | "farmId_tagNumber">;
export type CowOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tagNumber?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    breed?: Prisma.SortOrderInput | Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrderInput | Prisma.SortOrder;
    acquiredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    purchasePrice?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    stage?: Prisma.SortOrder;
    photoUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    farmId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CowCountOrderByAggregateInput;
    _avg?: Prisma.CowAvgOrderByAggregateInput;
    _max?: Prisma.CowMaxOrderByAggregateInput;
    _min?: Prisma.CowMinOrderByAggregateInput;
    _sum?: Prisma.CowSumOrderByAggregateInput;
};
export type CowScalarWhereWithAggregatesInput = {
    AND?: Prisma.CowScalarWhereWithAggregatesInput | Prisma.CowScalarWhereWithAggregatesInput[];
    OR?: Prisma.CowScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CowScalarWhereWithAggregatesInput | Prisma.CowScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Cow"> | string;
    tagNumber?: Prisma.StringWithAggregatesFilter<"Cow"> | string;
    name?: Prisma.StringNullableWithAggregatesFilter<"Cow"> | string | null;
    breed?: Prisma.StringNullableWithAggregatesFilter<"Cow"> | string | null;
    gender?: Prisma.EnumCowGenderWithAggregatesFilter<"Cow"> | $Enums.CowGender;
    dateOfBirth?: Prisma.DateTimeNullableWithAggregatesFilter<"Cow"> | Date | string | null;
    acquiredAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Cow"> | Date | string | null;
    purchasePrice?: Prisma.DecimalNullableWithAggregatesFilter<"Cow"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumCowStatusWithAggregatesFilter<"Cow"> | $Enums.CowStatus;
    stage?: Prisma.EnumCowStageWithAggregatesFilter<"Cow"> | $Enums.CowStage;
    photoUrl?: Prisma.StringNullableWithAggregatesFilter<"Cow"> | string | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"Cow"> | string | null;
    farmId?: Prisma.StringWithAggregatesFilter<"Cow"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Cow"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Cow"> | Date | string;
};
export type CowCreateInput = {
    id?: string;
    tagNumber: string;
    name?: string | null;
    breed?: string | null;
    gender?: $Enums.CowGender;
    dateOfBirth?: Date | string | null;
    acquiredAt?: Date | string | null;
    purchasePrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.CowStatus;
    stage: $Enums.CowStage;
    photoUrl?: string | null;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    farm: Prisma.FarmCreateNestedOneWithoutCowsInput;
    milkProductions?: Prisma.MilkProductionCreateNestedManyWithoutCowInput;
    feedConsumptions?: Prisma.FeedConsumptionCreateNestedManyWithoutCowInput;
};
export type CowUncheckedCreateInput = {
    id?: string;
    tagNumber: string;
    name?: string | null;
    breed?: string | null;
    gender?: $Enums.CowGender;
    dateOfBirth?: Date | string | null;
    acquiredAt?: Date | string | null;
    purchasePrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.CowStatus;
    stage: $Enums.CowStage;
    photoUrl?: string | null;
    description?: string | null;
    farmId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    milkProductions?: Prisma.MilkProductionUncheckedCreateNestedManyWithoutCowInput;
    feedConsumptions?: Prisma.FeedConsumptionUncheckedCreateNestedManyWithoutCowInput;
};
export type CowUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tagNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumCowGenderFieldUpdateOperationsInput | $Enums.CowGender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquiredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purchasePrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumCowStatusFieldUpdateOperationsInput | $Enums.CowStatus;
    stage?: Prisma.EnumCowStageFieldUpdateOperationsInput | $Enums.CowStage;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    farm?: Prisma.FarmUpdateOneRequiredWithoutCowsNestedInput;
    milkProductions?: Prisma.MilkProductionUpdateManyWithoutCowNestedInput;
    feedConsumptions?: Prisma.FeedConsumptionUpdateManyWithoutCowNestedInput;
};
export type CowUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tagNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumCowGenderFieldUpdateOperationsInput | $Enums.CowGender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquiredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purchasePrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumCowStatusFieldUpdateOperationsInput | $Enums.CowStatus;
    stage?: Prisma.EnumCowStageFieldUpdateOperationsInput | $Enums.CowStage;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    farmId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    milkProductions?: Prisma.MilkProductionUncheckedUpdateManyWithoutCowNestedInput;
    feedConsumptions?: Prisma.FeedConsumptionUncheckedUpdateManyWithoutCowNestedInput;
};
export type CowCreateManyInput = {
    id?: string;
    tagNumber: string;
    name?: string | null;
    breed?: string | null;
    gender?: $Enums.CowGender;
    dateOfBirth?: Date | string | null;
    acquiredAt?: Date | string | null;
    purchasePrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.CowStatus;
    stage: $Enums.CowStage;
    photoUrl?: string | null;
    description?: string | null;
    farmId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CowUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tagNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumCowGenderFieldUpdateOperationsInput | $Enums.CowGender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquiredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purchasePrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumCowStatusFieldUpdateOperationsInput | $Enums.CowStatus;
    stage?: Prisma.EnumCowStageFieldUpdateOperationsInput | $Enums.CowStage;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CowUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tagNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumCowGenderFieldUpdateOperationsInput | $Enums.CowGender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquiredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purchasePrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumCowStatusFieldUpdateOperationsInput | $Enums.CowStatus;
    stage?: Prisma.EnumCowStageFieldUpdateOperationsInput | $Enums.CowStage;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    farmId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CowListRelationFilter = {
    every?: Prisma.CowWhereInput;
    some?: Prisma.CowWhereInput;
    none?: Prisma.CowWhereInput;
};
export type CowOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CowFarmIdTagNumberCompoundUniqueInput = {
    farmId: string;
    tagNumber: string;
};
export type CowCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tagNumber?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    breed?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    acquiredAt?: Prisma.SortOrder;
    purchasePrice?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    stage?: Prisma.SortOrder;
    photoUrl?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    farmId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CowAvgOrderByAggregateInput = {
    purchasePrice?: Prisma.SortOrder;
};
export type CowMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tagNumber?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    breed?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    acquiredAt?: Prisma.SortOrder;
    purchasePrice?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    stage?: Prisma.SortOrder;
    photoUrl?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    farmId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CowMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tagNumber?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    breed?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    acquiredAt?: Prisma.SortOrder;
    purchasePrice?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    stage?: Prisma.SortOrder;
    photoUrl?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    farmId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CowSumOrderByAggregateInput = {
    purchasePrice?: Prisma.SortOrder;
};
export type CowScalarRelationFilter = {
    is?: Prisma.CowWhereInput;
    isNot?: Prisma.CowWhereInput;
};
export type CowNullableScalarRelationFilter = {
    is?: Prisma.CowWhereInput | null;
    isNot?: Prisma.CowWhereInput | null;
};
export type CowCreateNestedManyWithoutFarmInput = {
    create?: Prisma.XOR<Prisma.CowCreateWithoutFarmInput, Prisma.CowUncheckedCreateWithoutFarmInput> | Prisma.CowCreateWithoutFarmInput[] | Prisma.CowUncheckedCreateWithoutFarmInput[];
    connectOrCreate?: Prisma.CowCreateOrConnectWithoutFarmInput | Prisma.CowCreateOrConnectWithoutFarmInput[];
    createMany?: Prisma.CowCreateManyFarmInputEnvelope;
    connect?: Prisma.CowWhereUniqueInput | Prisma.CowWhereUniqueInput[];
};
export type CowUncheckedCreateNestedManyWithoutFarmInput = {
    create?: Prisma.XOR<Prisma.CowCreateWithoutFarmInput, Prisma.CowUncheckedCreateWithoutFarmInput> | Prisma.CowCreateWithoutFarmInput[] | Prisma.CowUncheckedCreateWithoutFarmInput[];
    connectOrCreate?: Prisma.CowCreateOrConnectWithoutFarmInput | Prisma.CowCreateOrConnectWithoutFarmInput[];
    createMany?: Prisma.CowCreateManyFarmInputEnvelope;
    connect?: Prisma.CowWhereUniqueInput | Prisma.CowWhereUniqueInput[];
};
export type CowUpdateManyWithoutFarmNestedInput = {
    create?: Prisma.XOR<Prisma.CowCreateWithoutFarmInput, Prisma.CowUncheckedCreateWithoutFarmInput> | Prisma.CowCreateWithoutFarmInput[] | Prisma.CowUncheckedCreateWithoutFarmInput[];
    connectOrCreate?: Prisma.CowCreateOrConnectWithoutFarmInput | Prisma.CowCreateOrConnectWithoutFarmInput[];
    upsert?: Prisma.CowUpsertWithWhereUniqueWithoutFarmInput | Prisma.CowUpsertWithWhereUniqueWithoutFarmInput[];
    createMany?: Prisma.CowCreateManyFarmInputEnvelope;
    set?: Prisma.CowWhereUniqueInput | Prisma.CowWhereUniqueInput[];
    disconnect?: Prisma.CowWhereUniqueInput | Prisma.CowWhereUniqueInput[];
    delete?: Prisma.CowWhereUniqueInput | Prisma.CowWhereUniqueInput[];
    connect?: Prisma.CowWhereUniqueInput | Prisma.CowWhereUniqueInput[];
    update?: Prisma.CowUpdateWithWhereUniqueWithoutFarmInput | Prisma.CowUpdateWithWhereUniqueWithoutFarmInput[];
    updateMany?: Prisma.CowUpdateManyWithWhereWithoutFarmInput | Prisma.CowUpdateManyWithWhereWithoutFarmInput[];
    deleteMany?: Prisma.CowScalarWhereInput | Prisma.CowScalarWhereInput[];
};
export type CowUncheckedUpdateManyWithoutFarmNestedInput = {
    create?: Prisma.XOR<Prisma.CowCreateWithoutFarmInput, Prisma.CowUncheckedCreateWithoutFarmInput> | Prisma.CowCreateWithoutFarmInput[] | Prisma.CowUncheckedCreateWithoutFarmInput[];
    connectOrCreate?: Prisma.CowCreateOrConnectWithoutFarmInput | Prisma.CowCreateOrConnectWithoutFarmInput[];
    upsert?: Prisma.CowUpsertWithWhereUniqueWithoutFarmInput | Prisma.CowUpsertWithWhereUniqueWithoutFarmInput[];
    createMany?: Prisma.CowCreateManyFarmInputEnvelope;
    set?: Prisma.CowWhereUniqueInput | Prisma.CowWhereUniqueInput[];
    disconnect?: Prisma.CowWhereUniqueInput | Prisma.CowWhereUniqueInput[];
    delete?: Prisma.CowWhereUniqueInput | Prisma.CowWhereUniqueInput[];
    connect?: Prisma.CowWhereUniqueInput | Prisma.CowWhereUniqueInput[];
    update?: Prisma.CowUpdateWithWhereUniqueWithoutFarmInput | Prisma.CowUpdateWithWhereUniqueWithoutFarmInput[];
    updateMany?: Prisma.CowUpdateManyWithWhereWithoutFarmInput | Prisma.CowUpdateManyWithWhereWithoutFarmInput[];
    deleteMany?: Prisma.CowScalarWhereInput | Prisma.CowScalarWhereInput[];
};
export type EnumCowGenderFieldUpdateOperationsInput = {
    set?: $Enums.CowGender;
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type EnumCowStatusFieldUpdateOperationsInput = {
    set?: $Enums.CowStatus;
};
export type EnumCowStageFieldUpdateOperationsInput = {
    set?: $Enums.CowStage;
};
export type CowCreateNestedOneWithoutMilkProductionsInput = {
    create?: Prisma.XOR<Prisma.CowCreateWithoutMilkProductionsInput, Prisma.CowUncheckedCreateWithoutMilkProductionsInput>;
    connectOrCreate?: Prisma.CowCreateOrConnectWithoutMilkProductionsInput;
    connect?: Prisma.CowWhereUniqueInput;
};
export type CowUpdateOneRequiredWithoutMilkProductionsNestedInput = {
    create?: Prisma.XOR<Prisma.CowCreateWithoutMilkProductionsInput, Prisma.CowUncheckedCreateWithoutMilkProductionsInput>;
    connectOrCreate?: Prisma.CowCreateOrConnectWithoutMilkProductionsInput;
    upsert?: Prisma.CowUpsertWithoutMilkProductionsInput;
    connect?: Prisma.CowWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CowUpdateToOneWithWhereWithoutMilkProductionsInput, Prisma.CowUpdateWithoutMilkProductionsInput>, Prisma.CowUncheckedUpdateWithoutMilkProductionsInput>;
};
export type CowCreateNestedOneWithoutFeedConsumptionsInput = {
    create?: Prisma.XOR<Prisma.CowCreateWithoutFeedConsumptionsInput, Prisma.CowUncheckedCreateWithoutFeedConsumptionsInput>;
    connectOrCreate?: Prisma.CowCreateOrConnectWithoutFeedConsumptionsInput;
    connect?: Prisma.CowWhereUniqueInput;
};
export type CowUpdateOneWithoutFeedConsumptionsNestedInput = {
    create?: Prisma.XOR<Prisma.CowCreateWithoutFeedConsumptionsInput, Prisma.CowUncheckedCreateWithoutFeedConsumptionsInput>;
    connectOrCreate?: Prisma.CowCreateOrConnectWithoutFeedConsumptionsInput;
    upsert?: Prisma.CowUpsertWithoutFeedConsumptionsInput;
    disconnect?: Prisma.CowWhereInput | boolean;
    delete?: Prisma.CowWhereInput | boolean;
    connect?: Prisma.CowWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CowUpdateToOneWithWhereWithoutFeedConsumptionsInput, Prisma.CowUpdateWithoutFeedConsumptionsInput>, Prisma.CowUncheckedUpdateWithoutFeedConsumptionsInput>;
};
export type CowCreateWithoutFarmInput = {
    id?: string;
    tagNumber: string;
    name?: string | null;
    breed?: string | null;
    gender?: $Enums.CowGender;
    dateOfBirth?: Date | string | null;
    acquiredAt?: Date | string | null;
    purchasePrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.CowStatus;
    stage: $Enums.CowStage;
    photoUrl?: string | null;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    milkProductions?: Prisma.MilkProductionCreateNestedManyWithoutCowInput;
    feedConsumptions?: Prisma.FeedConsumptionCreateNestedManyWithoutCowInput;
};
export type CowUncheckedCreateWithoutFarmInput = {
    id?: string;
    tagNumber: string;
    name?: string | null;
    breed?: string | null;
    gender?: $Enums.CowGender;
    dateOfBirth?: Date | string | null;
    acquiredAt?: Date | string | null;
    purchasePrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.CowStatus;
    stage: $Enums.CowStage;
    photoUrl?: string | null;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    milkProductions?: Prisma.MilkProductionUncheckedCreateNestedManyWithoutCowInput;
    feedConsumptions?: Prisma.FeedConsumptionUncheckedCreateNestedManyWithoutCowInput;
};
export type CowCreateOrConnectWithoutFarmInput = {
    where: Prisma.CowWhereUniqueInput;
    create: Prisma.XOR<Prisma.CowCreateWithoutFarmInput, Prisma.CowUncheckedCreateWithoutFarmInput>;
};
export type CowCreateManyFarmInputEnvelope = {
    data: Prisma.CowCreateManyFarmInput | Prisma.CowCreateManyFarmInput[];
    skipDuplicates?: boolean;
};
export type CowUpsertWithWhereUniqueWithoutFarmInput = {
    where: Prisma.CowWhereUniqueInput;
    update: Prisma.XOR<Prisma.CowUpdateWithoutFarmInput, Prisma.CowUncheckedUpdateWithoutFarmInput>;
    create: Prisma.XOR<Prisma.CowCreateWithoutFarmInput, Prisma.CowUncheckedCreateWithoutFarmInput>;
};
export type CowUpdateWithWhereUniqueWithoutFarmInput = {
    where: Prisma.CowWhereUniqueInput;
    data: Prisma.XOR<Prisma.CowUpdateWithoutFarmInput, Prisma.CowUncheckedUpdateWithoutFarmInput>;
};
export type CowUpdateManyWithWhereWithoutFarmInput = {
    where: Prisma.CowScalarWhereInput;
    data: Prisma.XOR<Prisma.CowUpdateManyMutationInput, Prisma.CowUncheckedUpdateManyWithoutFarmInput>;
};
export type CowScalarWhereInput = {
    AND?: Prisma.CowScalarWhereInput | Prisma.CowScalarWhereInput[];
    OR?: Prisma.CowScalarWhereInput[];
    NOT?: Prisma.CowScalarWhereInput | Prisma.CowScalarWhereInput[];
    id?: Prisma.StringFilter<"Cow"> | string;
    tagNumber?: Prisma.StringFilter<"Cow"> | string;
    name?: Prisma.StringNullableFilter<"Cow"> | string | null;
    breed?: Prisma.StringNullableFilter<"Cow"> | string | null;
    gender?: Prisma.EnumCowGenderFilter<"Cow"> | $Enums.CowGender;
    dateOfBirth?: Prisma.DateTimeNullableFilter<"Cow"> | Date | string | null;
    acquiredAt?: Prisma.DateTimeNullableFilter<"Cow"> | Date | string | null;
    purchasePrice?: Prisma.DecimalNullableFilter<"Cow"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumCowStatusFilter<"Cow"> | $Enums.CowStatus;
    stage?: Prisma.EnumCowStageFilter<"Cow"> | $Enums.CowStage;
    photoUrl?: Prisma.StringNullableFilter<"Cow"> | string | null;
    description?: Prisma.StringNullableFilter<"Cow"> | string | null;
    farmId?: Prisma.StringFilter<"Cow"> | string;
    createdAt?: Prisma.DateTimeFilter<"Cow"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Cow"> | Date | string;
};
export type CowCreateWithoutMilkProductionsInput = {
    id?: string;
    tagNumber: string;
    name?: string | null;
    breed?: string | null;
    gender?: $Enums.CowGender;
    dateOfBirth?: Date | string | null;
    acquiredAt?: Date | string | null;
    purchasePrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.CowStatus;
    stage: $Enums.CowStage;
    photoUrl?: string | null;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    farm: Prisma.FarmCreateNestedOneWithoutCowsInput;
    feedConsumptions?: Prisma.FeedConsumptionCreateNestedManyWithoutCowInput;
};
export type CowUncheckedCreateWithoutMilkProductionsInput = {
    id?: string;
    tagNumber: string;
    name?: string | null;
    breed?: string | null;
    gender?: $Enums.CowGender;
    dateOfBirth?: Date | string | null;
    acquiredAt?: Date | string | null;
    purchasePrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.CowStatus;
    stage: $Enums.CowStage;
    photoUrl?: string | null;
    description?: string | null;
    farmId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    feedConsumptions?: Prisma.FeedConsumptionUncheckedCreateNestedManyWithoutCowInput;
};
export type CowCreateOrConnectWithoutMilkProductionsInput = {
    where: Prisma.CowWhereUniqueInput;
    create: Prisma.XOR<Prisma.CowCreateWithoutMilkProductionsInput, Prisma.CowUncheckedCreateWithoutMilkProductionsInput>;
};
export type CowUpsertWithoutMilkProductionsInput = {
    update: Prisma.XOR<Prisma.CowUpdateWithoutMilkProductionsInput, Prisma.CowUncheckedUpdateWithoutMilkProductionsInput>;
    create: Prisma.XOR<Prisma.CowCreateWithoutMilkProductionsInput, Prisma.CowUncheckedCreateWithoutMilkProductionsInput>;
    where?: Prisma.CowWhereInput;
};
export type CowUpdateToOneWithWhereWithoutMilkProductionsInput = {
    where?: Prisma.CowWhereInput;
    data: Prisma.XOR<Prisma.CowUpdateWithoutMilkProductionsInput, Prisma.CowUncheckedUpdateWithoutMilkProductionsInput>;
};
export type CowUpdateWithoutMilkProductionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tagNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumCowGenderFieldUpdateOperationsInput | $Enums.CowGender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquiredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purchasePrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumCowStatusFieldUpdateOperationsInput | $Enums.CowStatus;
    stage?: Prisma.EnumCowStageFieldUpdateOperationsInput | $Enums.CowStage;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    farm?: Prisma.FarmUpdateOneRequiredWithoutCowsNestedInput;
    feedConsumptions?: Prisma.FeedConsumptionUpdateManyWithoutCowNestedInput;
};
export type CowUncheckedUpdateWithoutMilkProductionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tagNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumCowGenderFieldUpdateOperationsInput | $Enums.CowGender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquiredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purchasePrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumCowStatusFieldUpdateOperationsInput | $Enums.CowStatus;
    stage?: Prisma.EnumCowStageFieldUpdateOperationsInput | $Enums.CowStage;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    farmId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    feedConsumptions?: Prisma.FeedConsumptionUncheckedUpdateManyWithoutCowNestedInput;
};
export type CowCreateWithoutFeedConsumptionsInput = {
    id?: string;
    tagNumber: string;
    name?: string | null;
    breed?: string | null;
    gender?: $Enums.CowGender;
    dateOfBirth?: Date | string | null;
    acquiredAt?: Date | string | null;
    purchasePrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.CowStatus;
    stage: $Enums.CowStage;
    photoUrl?: string | null;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    farm: Prisma.FarmCreateNestedOneWithoutCowsInput;
    milkProductions?: Prisma.MilkProductionCreateNestedManyWithoutCowInput;
};
export type CowUncheckedCreateWithoutFeedConsumptionsInput = {
    id?: string;
    tagNumber: string;
    name?: string | null;
    breed?: string | null;
    gender?: $Enums.CowGender;
    dateOfBirth?: Date | string | null;
    acquiredAt?: Date | string | null;
    purchasePrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.CowStatus;
    stage: $Enums.CowStage;
    photoUrl?: string | null;
    description?: string | null;
    farmId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    milkProductions?: Prisma.MilkProductionUncheckedCreateNestedManyWithoutCowInput;
};
export type CowCreateOrConnectWithoutFeedConsumptionsInput = {
    where: Prisma.CowWhereUniqueInput;
    create: Prisma.XOR<Prisma.CowCreateWithoutFeedConsumptionsInput, Prisma.CowUncheckedCreateWithoutFeedConsumptionsInput>;
};
export type CowUpsertWithoutFeedConsumptionsInput = {
    update: Prisma.XOR<Prisma.CowUpdateWithoutFeedConsumptionsInput, Prisma.CowUncheckedUpdateWithoutFeedConsumptionsInput>;
    create: Prisma.XOR<Prisma.CowCreateWithoutFeedConsumptionsInput, Prisma.CowUncheckedCreateWithoutFeedConsumptionsInput>;
    where?: Prisma.CowWhereInput;
};
export type CowUpdateToOneWithWhereWithoutFeedConsumptionsInput = {
    where?: Prisma.CowWhereInput;
    data: Prisma.XOR<Prisma.CowUpdateWithoutFeedConsumptionsInput, Prisma.CowUncheckedUpdateWithoutFeedConsumptionsInput>;
};
export type CowUpdateWithoutFeedConsumptionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tagNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumCowGenderFieldUpdateOperationsInput | $Enums.CowGender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquiredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purchasePrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumCowStatusFieldUpdateOperationsInput | $Enums.CowStatus;
    stage?: Prisma.EnumCowStageFieldUpdateOperationsInput | $Enums.CowStage;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    farm?: Prisma.FarmUpdateOneRequiredWithoutCowsNestedInput;
    milkProductions?: Prisma.MilkProductionUpdateManyWithoutCowNestedInput;
};
export type CowUncheckedUpdateWithoutFeedConsumptionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tagNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumCowGenderFieldUpdateOperationsInput | $Enums.CowGender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquiredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purchasePrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumCowStatusFieldUpdateOperationsInput | $Enums.CowStatus;
    stage?: Prisma.EnumCowStageFieldUpdateOperationsInput | $Enums.CowStage;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    farmId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    milkProductions?: Prisma.MilkProductionUncheckedUpdateManyWithoutCowNestedInput;
};
export type CowCreateManyFarmInput = {
    id?: string;
    tagNumber: string;
    name?: string | null;
    breed?: string | null;
    gender?: $Enums.CowGender;
    dateOfBirth?: Date | string | null;
    acquiredAt?: Date | string | null;
    purchasePrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.CowStatus;
    stage: $Enums.CowStage;
    photoUrl?: string | null;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CowUpdateWithoutFarmInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tagNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumCowGenderFieldUpdateOperationsInput | $Enums.CowGender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquiredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purchasePrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumCowStatusFieldUpdateOperationsInput | $Enums.CowStatus;
    stage?: Prisma.EnumCowStageFieldUpdateOperationsInput | $Enums.CowStage;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    milkProductions?: Prisma.MilkProductionUpdateManyWithoutCowNestedInput;
    feedConsumptions?: Prisma.FeedConsumptionUpdateManyWithoutCowNestedInput;
};
export type CowUncheckedUpdateWithoutFarmInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tagNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumCowGenderFieldUpdateOperationsInput | $Enums.CowGender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquiredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purchasePrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumCowStatusFieldUpdateOperationsInput | $Enums.CowStatus;
    stage?: Prisma.EnumCowStageFieldUpdateOperationsInput | $Enums.CowStage;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    milkProductions?: Prisma.MilkProductionUncheckedUpdateManyWithoutCowNestedInput;
    feedConsumptions?: Prisma.FeedConsumptionUncheckedUpdateManyWithoutCowNestedInput;
};
export type CowUncheckedUpdateManyWithoutFarmInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tagNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    breed?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.EnumCowGenderFieldUpdateOperationsInput | $Enums.CowGender;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquiredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purchasePrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumCowStatusFieldUpdateOperationsInput | $Enums.CowStatus;
    stage?: Prisma.EnumCowStageFieldUpdateOperationsInput | $Enums.CowStage;
    photoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type CowCountOutputType
 */
export type CowCountOutputType = {
    milkProductions: number;
    feedConsumptions: number;
};
export type CowCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    milkProductions?: boolean | CowCountOutputTypeCountMilkProductionsArgs;
    feedConsumptions?: boolean | CowCountOutputTypeCountFeedConsumptionsArgs;
};
/**
 * CowCountOutputType without action
 */
export type CowCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CowCountOutputType
     */
    select?: Prisma.CowCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * CowCountOutputType without action
 */
export type CowCountOutputTypeCountMilkProductionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MilkProductionWhereInput;
};
/**
 * CowCountOutputType without action
 */
export type CowCountOutputTypeCountFeedConsumptionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeedConsumptionWhereInput;
};
export type CowSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tagNumber?: boolean;
    name?: boolean;
    breed?: boolean;
    gender?: boolean;
    dateOfBirth?: boolean;
    acquiredAt?: boolean;
    purchasePrice?: boolean;
    status?: boolean;
    stage?: boolean;
    photoUrl?: boolean;
    description?: boolean;
    farmId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    farm?: boolean | Prisma.FarmDefaultArgs<ExtArgs>;
    milkProductions?: boolean | Prisma.Cow$milkProductionsArgs<ExtArgs>;
    feedConsumptions?: boolean | Prisma.Cow$feedConsumptionsArgs<ExtArgs>;
    _count?: boolean | Prisma.CowCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cow"]>;
export type CowSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tagNumber?: boolean;
    name?: boolean;
    breed?: boolean;
    gender?: boolean;
    dateOfBirth?: boolean;
    acquiredAt?: boolean;
    purchasePrice?: boolean;
    status?: boolean;
    stage?: boolean;
    photoUrl?: boolean;
    description?: boolean;
    farmId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    farm?: boolean | Prisma.FarmDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cow"]>;
export type CowSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tagNumber?: boolean;
    name?: boolean;
    breed?: boolean;
    gender?: boolean;
    dateOfBirth?: boolean;
    acquiredAt?: boolean;
    purchasePrice?: boolean;
    status?: boolean;
    stage?: boolean;
    photoUrl?: boolean;
    description?: boolean;
    farmId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    farm?: boolean | Prisma.FarmDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cow"]>;
export type CowSelectScalar = {
    id?: boolean;
    tagNumber?: boolean;
    name?: boolean;
    breed?: boolean;
    gender?: boolean;
    dateOfBirth?: boolean;
    acquiredAt?: boolean;
    purchasePrice?: boolean;
    status?: boolean;
    stage?: boolean;
    photoUrl?: boolean;
    description?: boolean;
    farmId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CowOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tagNumber" | "name" | "breed" | "gender" | "dateOfBirth" | "acquiredAt" | "purchasePrice" | "status" | "stage" | "photoUrl" | "description" | "farmId" | "createdAt" | "updatedAt", ExtArgs["result"]["cow"]>;
export type CowInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    farm?: boolean | Prisma.FarmDefaultArgs<ExtArgs>;
    milkProductions?: boolean | Prisma.Cow$milkProductionsArgs<ExtArgs>;
    feedConsumptions?: boolean | Prisma.Cow$feedConsumptionsArgs<ExtArgs>;
    _count?: boolean | Prisma.CowCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CowIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    farm?: boolean | Prisma.FarmDefaultArgs<ExtArgs>;
};
export type CowIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    farm?: boolean | Prisma.FarmDefaultArgs<ExtArgs>;
};
export type $CowPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Cow";
    objects: {
        farm: Prisma.$FarmPayload<ExtArgs>;
        milkProductions: Prisma.$MilkProductionPayload<ExtArgs>[];
        feedConsumptions: Prisma.$FeedConsumptionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tagNumber: string;
        name: string | null;
        breed: string | null;
        gender: $Enums.CowGender;
        dateOfBirth: Date | null;
        acquiredAt: Date | null;
        purchasePrice: runtime.Decimal | null;
        status: $Enums.CowStatus;
        stage: $Enums.CowStage;
        photoUrl: string | null;
        description: string | null;
        farmId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["cow"]>;
    composites: {};
};
export type CowGetPayload<S extends boolean | null | undefined | CowDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CowPayload, S>;
export type CowCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CowCountAggregateInputType | true;
};
export interface CowDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Cow'];
        meta: {
            name: 'Cow';
        };
    };
    /**
     * Find zero or one Cow that matches the filter.
     * @param {CowFindUniqueArgs} args - Arguments to find a Cow
     * @example
     * // Get one Cow
     * const cow = await prisma.cow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CowFindUniqueArgs>(args: Prisma.SelectSubset<T, CowFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CowClient<runtime.Types.Result.GetResult<Prisma.$CowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Cow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CowFindUniqueOrThrowArgs} args - Arguments to find a Cow
     * @example
     * // Get one Cow
     * const cow = await prisma.cow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CowFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CowFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CowClient<runtime.Types.Result.GetResult<Prisma.$CowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Cow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CowFindFirstArgs} args - Arguments to find a Cow
     * @example
     * // Get one Cow
     * const cow = await prisma.cow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CowFindFirstArgs>(args?: Prisma.SelectSubset<T, CowFindFirstArgs<ExtArgs>>): Prisma.Prisma__CowClient<runtime.Types.Result.GetResult<Prisma.$CowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Cow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CowFindFirstOrThrowArgs} args - Arguments to find a Cow
     * @example
     * // Get one Cow
     * const cow = await prisma.cow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CowFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CowFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CowClient<runtime.Types.Result.GetResult<Prisma.$CowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Cows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cows
     * const cows = await prisma.cow.findMany()
     *
     * // Get first 10 Cows
     * const cows = await prisma.cow.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const cowWithIdOnly = await prisma.cow.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CowFindManyArgs>(args?: Prisma.SelectSubset<T, CowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Cow.
     * @param {CowCreateArgs} args - Arguments to create a Cow.
     * @example
     * // Create one Cow
     * const Cow = await prisma.cow.create({
     *   data: {
     *     // ... data to create a Cow
     *   }
     * })
     *
     */
    create<T extends CowCreateArgs>(args: Prisma.SelectSubset<T, CowCreateArgs<ExtArgs>>): Prisma.Prisma__CowClient<runtime.Types.Result.GetResult<Prisma.$CowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Cows.
     * @param {CowCreateManyArgs} args - Arguments to create many Cows.
     * @example
     * // Create many Cows
     * const cow = await prisma.cow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CowCreateManyArgs>(args?: Prisma.SelectSubset<T, CowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Cows and returns the data saved in the database.
     * @param {CowCreateManyAndReturnArgs} args - Arguments to create many Cows.
     * @example
     * // Create many Cows
     * const cow = await prisma.cow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Cows and only return the `id`
     * const cowWithIdOnly = await prisma.cow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CowCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Cow.
     * @param {CowDeleteArgs} args - Arguments to delete one Cow.
     * @example
     * // Delete one Cow
     * const Cow = await prisma.cow.delete({
     *   where: {
     *     // ... filter to delete one Cow
     *   }
     * })
     *
     */
    delete<T extends CowDeleteArgs>(args: Prisma.SelectSubset<T, CowDeleteArgs<ExtArgs>>): Prisma.Prisma__CowClient<runtime.Types.Result.GetResult<Prisma.$CowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Cow.
     * @param {CowUpdateArgs} args - Arguments to update one Cow.
     * @example
     * // Update one Cow
     * const cow = await prisma.cow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CowUpdateArgs>(args: Prisma.SelectSubset<T, CowUpdateArgs<ExtArgs>>): Prisma.Prisma__CowClient<runtime.Types.Result.GetResult<Prisma.$CowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Cows.
     * @param {CowDeleteManyArgs} args - Arguments to filter Cows to delete.
     * @example
     * // Delete a few Cows
     * const { count } = await prisma.cow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CowDeleteManyArgs>(args?: Prisma.SelectSubset<T, CowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Cows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cows
     * const cow = await prisma.cow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CowUpdateManyArgs>(args: Prisma.SelectSubset<T, CowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Cows and returns the data updated in the database.
     * @param {CowUpdateManyAndReturnArgs} args - Arguments to update many Cows.
     * @example
     * // Update many Cows
     * const cow = await prisma.cow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Cows and only return the `id`
     * const cowWithIdOnly = await prisma.cow.updateManyAndReturn({
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
    updateManyAndReturn<T extends CowUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Cow.
     * @param {CowUpsertArgs} args - Arguments to update or create a Cow.
     * @example
     * // Update or create a Cow
     * const cow = await prisma.cow.upsert({
     *   create: {
     *     // ... data to create a Cow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cow we want to update
     *   }
     * })
     */
    upsert<T extends CowUpsertArgs>(args: Prisma.SelectSubset<T, CowUpsertArgs<ExtArgs>>): Prisma.Prisma__CowClient<runtime.Types.Result.GetResult<Prisma.$CowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Cows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CowCountArgs} args - Arguments to filter Cows to count.
     * @example
     * // Count the number of Cows
     * const count = await prisma.cow.count({
     *   where: {
     *     // ... the filter for the Cows we want to count
     *   }
     * })
    **/
    count<T extends CowCountArgs>(args?: Prisma.Subset<T, CowCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CowCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Cow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CowAggregateArgs>(args: Prisma.Subset<T, CowAggregateArgs>): Prisma.PrismaPromise<GetCowAggregateType<T>>;
    /**
     * Group by Cow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CowGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CowGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CowGroupByArgs['orderBy'];
    } : {
        orderBy?: CowGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Cow model
     */
    readonly fields: CowFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Cow.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CowClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    farm<T extends Prisma.FarmDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FarmDefaultArgs<ExtArgs>>): Prisma.Prisma__FarmClient<runtime.Types.Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    milkProductions<T extends Prisma.Cow$milkProductionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Cow$milkProductionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MilkProductionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    feedConsumptions<T extends Prisma.Cow$feedConsumptionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Cow$feedConsumptionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeedConsumptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Cow model
 */
export interface CowFieldRefs {
    readonly id: Prisma.FieldRef<"Cow", 'String'>;
    readonly tagNumber: Prisma.FieldRef<"Cow", 'String'>;
    readonly name: Prisma.FieldRef<"Cow", 'String'>;
    readonly breed: Prisma.FieldRef<"Cow", 'String'>;
    readonly gender: Prisma.FieldRef<"Cow", 'CowGender'>;
    readonly dateOfBirth: Prisma.FieldRef<"Cow", 'DateTime'>;
    readonly acquiredAt: Prisma.FieldRef<"Cow", 'DateTime'>;
    readonly purchasePrice: Prisma.FieldRef<"Cow", 'Decimal'>;
    readonly status: Prisma.FieldRef<"Cow", 'CowStatus'>;
    readonly stage: Prisma.FieldRef<"Cow", 'CowStage'>;
    readonly photoUrl: Prisma.FieldRef<"Cow", 'String'>;
    readonly description: Prisma.FieldRef<"Cow", 'String'>;
    readonly farmId: Prisma.FieldRef<"Cow", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Cow", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Cow", 'DateTime'>;
}
/**
 * Cow findUnique
 */
export type CowFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Cow to fetch.
     */
    where: Prisma.CowWhereUniqueInput;
};
/**
 * Cow findUniqueOrThrow
 */
export type CowFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Cow to fetch.
     */
    where: Prisma.CowWhereUniqueInput;
};
/**
 * Cow findFirst
 */
export type CowFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Cow to fetch.
     */
    where?: Prisma.CowWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cows to fetch.
     */
    orderBy?: Prisma.CowOrderByWithRelationInput | Prisma.CowOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Cows.
     */
    cursor?: Prisma.CowWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cows from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cows.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Cows.
     */
    distinct?: Prisma.CowScalarFieldEnum | Prisma.CowScalarFieldEnum[];
};
/**
 * Cow findFirstOrThrow
 */
export type CowFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Cow to fetch.
     */
    where?: Prisma.CowWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cows to fetch.
     */
    orderBy?: Prisma.CowOrderByWithRelationInput | Prisma.CowOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Cows.
     */
    cursor?: Prisma.CowWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cows from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cows.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Cows.
     */
    distinct?: Prisma.CowScalarFieldEnum | Prisma.CowScalarFieldEnum[];
};
/**
 * Cow findMany
 */
export type CowFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Cows to fetch.
     */
    where?: Prisma.CowWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cows to fetch.
     */
    orderBy?: Prisma.CowOrderByWithRelationInput | Prisma.CowOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Cows.
     */
    cursor?: Prisma.CowWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cows from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cows.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Cows.
     */
    distinct?: Prisma.CowScalarFieldEnum | Prisma.CowScalarFieldEnum[];
};
/**
 * Cow create
 */
export type CowCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Cow.
     */
    data: Prisma.XOR<Prisma.CowCreateInput, Prisma.CowUncheckedCreateInput>;
};
/**
 * Cow createMany
 */
export type CowCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cows.
     */
    data: Prisma.CowCreateManyInput | Prisma.CowCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Cow createManyAndReturn
 */
export type CowCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cow
     */
    select?: Prisma.CowSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Cow
     */
    omit?: Prisma.CowOmit<ExtArgs> | null;
    /**
     * The data used to create many Cows.
     */
    data: Prisma.CowCreateManyInput | Prisma.CowCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CowIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Cow update
 */
export type CowUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Cow.
     */
    data: Prisma.XOR<Prisma.CowUpdateInput, Prisma.CowUncheckedUpdateInput>;
    /**
     * Choose, which Cow to update.
     */
    where: Prisma.CowWhereUniqueInput;
};
/**
 * Cow updateMany
 */
export type CowUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Cows.
     */
    data: Prisma.XOR<Prisma.CowUpdateManyMutationInput, Prisma.CowUncheckedUpdateManyInput>;
    /**
     * Filter which Cows to update
     */
    where?: Prisma.CowWhereInput;
    /**
     * Limit how many Cows to update.
     */
    limit?: number;
};
/**
 * Cow updateManyAndReturn
 */
export type CowUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cow
     */
    select?: Prisma.CowSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Cow
     */
    omit?: Prisma.CowOmit<ExtArgs> | null;
    /**
     * The data used to update Cows.
     */
    data: Prisma.XOR<Prisma.CowUpdateManyMutationInput, Prisma.CowUncheckedUpdateManyInput>;
    /**
     * Filter which Cows to update
     */
    where?: Prisma.CowWhereInput;
    /**
     * Limit how many Cows to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CowIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Cow upsert
 */
export type CowUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Cow to update in case it exists.
     */
    where: Prisma.CowWhereUniqueInput;
    /**
     * In case the Cow found by the `where` argument doesn't exist, create a new Cow with this data.
     */
    create: Prisma.XOR<Prisma.CowCreateInput, Prisma.CowUncheckedCreateInput>;
    /**
     * In case the Cow was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CowUpdateInput, Prisma.CowUncheckedUpdateInput>;
};
/**
 * Cow delete
 */
export type CowDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Cow to delete.
     */
    where: Prisma.CowWhereUniqueInput;
};
/**
 * Cow deleteMany
 */
export type CowDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Cows to delete
     */
    where?: Prisma.CowWhereInput;
    /**
     * Limit how many Cows to delete.
     */
    limit?: number;
};
/**
 * Cow.milkProductions
 */
export type Cow$milkProductionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.MilkProductionWhereInput;
    orderBy?: Prisma.MilkProductionOrderByWithRelationInput | Prisma.MilkProductionOrderByWithRelationInput[];
    cursor?: Prisma.MilkProductionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MilkProductionScalarFieldEnum | Prisma.MilkProductionScalarFieldEnum[];
};
/**
 * Cow.feedConsumptions
 */
export type Cow$feedConsumptionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.FeedConsumptionWhereInput;
    orderBy?: Prisma.FeedConsumptionOrderByWithRelationInput | Prisma.FeedConsumptionOrderByWithRelationInput[];
    cursor?: Prisma.FeedConsumptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FeedConsumptionScalarFieldEnum | Prisma.FeedConsumptionScalarFieldEnum[];
};
/**
 * Cow without action
 */
export type CowDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=Cow.d.ts.map