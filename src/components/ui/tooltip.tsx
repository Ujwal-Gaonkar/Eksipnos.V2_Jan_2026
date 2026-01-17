import * as React from "react";

/**
 * NOTE:
 * The Radix Tooltip implementation was causing a runtime crash in this project
 * ("Cannot read properties of null (reading 'useRef')").
 *
 * Until the underlying duplicate-React/runtime issue is fully resolved, we ship
 * a safe no-op tooltip API so the app never white-screens.
 */

type WithChildren = { children?: React.ReactNode };

type TooltipProviderProps = WithChildren & {
  delayDuration?: number;
  skipDelayDuration?: number;
  disableHoverableContent?: boolean;
};

const TooltipProvider = ({ children }: TooltipProviderProps) => <>{children}</>;

const Tooltip = ({ children }: WithChildren) => <>{children}</>;

type TooltipTriggerProps = WithChildren & {
  asChild?: boolean;
};
const TooltipTrigger = ({ children }: TooltipTriggerProps) => <>{children}</>;

type TooltipContentProps = React.HTMLAttributes<HTMLDivElement> & {
  sideOffset?: number;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  hidden?: boolean;
};
const TooltipContent = (_props: TooltipContentProps) => null;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };

