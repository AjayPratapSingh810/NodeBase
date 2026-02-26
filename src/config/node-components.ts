import { InitialNode } from "@/components/initial-node";
import type { NodeTypes } from "@xyflow/react";

import { HttpRequestNode } from "@/features/executions/components/http-request/node";
import { ManualTriggerNode } from "@/features/triggers/components/manual-trigger/node";
import { NodeType } from "@/generated/prisma/enums";
import { GoogleFormTrigger } from "@/features/triggers/components/google-form-trigger/node";
import { StripeTriggerNode } from "@/features/triggers/components/stripe-trigger/node";

export const nodeComponents = {
  [NodeType.INITIAL]: InitialNode,
  [NodeType.HTTP_REQUEST]: HttpRequestNode,
  [NodeType.MANUAL_TRIGGER]: ManualTriggerNode,
  [NodeType.GOOGLE_FORM_TRIGGER]: GoogleFormTrigger, // TODO: Replace with actual google form trigger node when implemented
  [NodeType.STRIPE_TRIGGER]: StripeTriggerNode, // TODO: Replace with actual stripe trigger node when implemented
} as const satisfies NodeTypes;

export type RegisteredNodeType = keyof typeof nodeComponents;
