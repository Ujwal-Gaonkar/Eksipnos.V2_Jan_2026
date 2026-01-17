import * as React from "react";

/**
 * Runtime safety shim for @radix-ui/react-tooltip.
 *
 * In some environments a duplicate-React situation can cause Radix Tooltip to crash
 * with: "Cannot read properties of null (reading 'useRef')".
 *
 * This shim keeps the app stable by providing compatible exports without any
 * hook usage.
 */

type WithChildren = { children?: React.ReactNode };

type ProviderProps = WithChildren & {
  delayDuration?: number;
  skipDelayDuration?: number;
  disableHoverableContent?: boolean;
};

export const Provider = ({ children }: ProviderProps) => <>{children}</>;

export const Root = ({ children }: WithChildren) => <>{children}</>;

export const Trigger = ({ children }: WithChildren & { asChild?: boolean }) => <>{children}</>;

export type ContentProps = React.HTMLAttributes<HTMLDivElement> & {
  sideOffset?: number;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
};

export const Content = React.forwardRef<HTMLDivElement, ContentProps>(function ContentShim(_props, _ref) {
  return null;
});
