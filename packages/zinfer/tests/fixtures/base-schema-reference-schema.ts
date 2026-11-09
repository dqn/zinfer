import { z } from "zod";

export const KindSchema = z.enum(["a", "b"]);

const BaseShapeSchema = z.strictObject({ kind: KindSchema, name: z.string() });

export const RefinedBaseSchema = BaseShapeSchema.superRefine(() => {});

export const ExtendedBaseSchema = BaseShapeSchema.extend({ extra: KindSchema });

export const OverriddenBaseSchema = BaseShapeSchema.safeExtend({ kind: z.literal("a") });

export const ExportedBaseSchema = z
  .strictObject({ kind: KindSchema, name: z.string() })
  .superRefine(() => {});

export const ShapeSpreadSchema = z.strictObject({ ...ExportedBaseSchema.shape, extra: z.string() });

export const InlineExtendedSchema = z
  .strictObject({ name: z.string(), extra: KindSchema })
  .extend({ kind: KindSchema, extra: z.string() });
