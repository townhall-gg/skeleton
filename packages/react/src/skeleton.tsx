"use client";

import {
  createContext,
  useContext,
  type CSSProperties,
  type ReactNode,
} from "react";

// Context for nested skeleton awareness
const SkeletonContext = createContext<boolean>(false);

export interface SkeletonProps {
  /** Whether content is loading */
  loading?: boolean;
  /** Content to show (will be skeletonized when loading) */
  children: ReactNode;
  /** Custom class name for the wrapper */
  className?: string;
  /** Custom styles for the wrapper */
  style?: CSSProperties;
  /** Animation style: 'pulse' | 'wave' | 'none'. Default: 'pulse' */
  animation?: "pulse" | "wave" | "none";
  /** Skeleton color. Default: 'rgba(255,255,255,0.1)' */
  baseColor?: string;
  /** Highlight color for animation. Default: 'rgba(255,255,255,0.2)' */
  highlightColor?: string;
  /** Border radius for skeleton elements. Default: '4px' */
  borderRadius?: string;
  /** Duration of animation in seconds. Default: 1.5 */
  duration?: number;
}

/**
 * Auto-skeleton wrapper - wraps your UI and turns it into skeleton form while loading
 *
 * @example
 * ```tsx
 * <Skeleton loading={isLoading}>
 *   <div className="card">
 *     <img src={user.avatar} alt="Avatar" />
 *     <h2>{user.name}</h2>
 *     <p>{user.bio}</p>
 *     <button>Follow</button>
 *   </div>
 * </Skeleton>
 * ```
 */
export function Skeleton({
  loading = false,
  children,
  className = "",
  style,
  animation = "pulse",
  baseColor = "rgba(255,255,255,0.1)",
  highlightColor = "rgba(255,255,255,0.2)",
  borderRadius = "4px",
  duration = 1.5,
}: SkeletonProps) {
  const isNested = useContext(SkeletonContext);

  // If nested inside another Skeleton that's loading, don't double-apply
  if (isNested && loading) {
    return <>{children}</>;
  }

  const cssVars = {
    "--skeleton-base": baseColor,
    "--skeleton-highlight": highlightColor,
    "--skeleton-radius": borderRadius,
    "--skeleton-duration": `${duration}s`,
  } as CSSProperties;

  return (
    <SkeletonContext.Provider value={loading}>
      <div
        className={`skeleton-wrapper ${loading ? "skeleton-loading" : ""} ${animation !== "none" ? `skeleton-${animation}` : ""} ${className}`}
        style={{ ...cssVars, ...style }}
        aria-busy={loading}
        aria-live="polite"
      >
        {children}
      </div>
    </SkeletonContext.Provider>
  );
}

/**
 * Hook to check if currently inside a loading skeleton
 */
export function useSkeletonLoading(): boolean {
  return useContext(SkeletonContext);
}

/**
 * Component that only renders when skeleton is loading (for custom skeleton shapes)
 */
export function SkeletonOnly({ children }: { children: ReactNode }) {
  const isLoading = useContext(SkeletonContext);
  return isLoading ? <>{children}</> : null;
}

/**
 * Component that only renders when skeleton is NOT loading (for actual content)
 */
export function ContentOnly({ children }: { children: ReactNode }) {
  const isLoading = useContext(SkeletonContext);
  return isLoading ? null : <>{children}</>;
}

/**
 * Inline skeleton element for custom shapes
 */
export interface SkeletonElementProps {
  /** Width of skeleton */
  width?: string | number;
  /** Height of skeleton */
  height?: string | number;
  /** Border radius */
  borderRadius?: string;
  /** Make it circular */
  circle?: boolean;
  /** Custom class name */
  className?: string;
  /** Custom styles */
  style?: CSSProperties;
}

export function SkeletonElement({
  width = "100%",
  height = "1em",
  borderRadius,
  circle = false,
  className = "",
  style,
}: SkeletonElementProps) {
  const w = typeof width === "number" ? `${width}px` : width;
  const h = typeof height === "number" ? `${height}px` : height;

  return (
    <span
      className={`skeleton-element ${className}`}
      style={{
        display: "inline-block",
        width: w,
        height: h,
        borderRadius: circle ? "50%" : borderRadius || "var(--skeleton-radius, 4px)",
        background: "var(--skeleton-base, rgba(255,255,255,0.1))",
        ...style,
      }}
      aria-hidden="true"
    />
  );
}
