# @townhall-gg/skeleton

**Auto-skeleton loader** - Wrap your UI and it automatically becomes a skeleton while loading.

No need to manually create skeleton components that mirror your UI structure. Just wrap your actual content and let CSS do the magic!

## Installation

```bash
pnpm add @townhall-gg/skeleton
# or
npm install @townhall-gg/skeleton
```

## Quick Start

```tsx
import { Skeleton } from "@townhall-gg/skeleton";
import "@townhall-gg/skeleton/styles.css";

function UserCard({ user, isLoading }) {
  return (
    <Skeleton loading={isLoading}>
      <div className="card">
        <img src={user?.avatar} alt="Avatar" className="avatar" />
        <h2>{user?.name || "Loading..."}</h2>
        <p>{user?.bio || "Bio placeholder text here"}</p>
        <button>Follow</button>
      </div>
    </Skeleton>
  );
}
```

That's it! When `loading={true}`:
- Text becomes gray pulsing bars (same dimensions)
- Images become gray rectangles
- Buttons become skeleton shapes
- Everything preserves its original layout

## How It Works

The `<Skeleton>` component adds CSS classes that transform your actual UI elements into skeleton placeholders:

1. **Text elements** (`h1-h6`, `p`, `span`, `a`, etc.) - Color becomes transparent, background becomes skeleton color
2. **Images** (`img`, `video`, `svg`) - Becomes semi-transparent with skeleton background
3. **Buttons & Inputs** - Text hidden, background becomes skeleton color
4. **Badges/Pills** - Transformed to match skeleton style

All transformations use CSS, so your actual DOM structure is preserved and dimensions remain the same!

## API

### `<Skeleton>`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `loading` | `boolean` | `false` | Whether to show skeleton state |
| `children` | `ReactNode` | - | Content to wrap |
| `animation` | `'pulse' \| 'wave' \| 'none'` | `'pulse'` | Animation style |
| `baseColor` | `string` | `'rgba(255,255,255,0.1)'` | Skeleton base color |
| `highlightColor` | `string` | `'rgba(255,255,255,0.2)'` | Highlight color for wave animation |
| `borderRadius` | `string` | `'4px'` | Border radius for skeleton elements |
| `duration` | `number` | `1.5` | Animation duration in seconds |
| `className` | `string` | - | Additional CSS class |
| `style` | `CSSProperties` | - | Additional inline styles |

### `<SkeletonElement>`

For custom skeleton shapes when auto-detection isn't enough:

```tsx
import { Skeleton, SkeletonElement, SkeletonOnly } from "@townhall-gg/skeleton";

<Skeleton loading={isLoading}>
  <div className="card">
    {/* This shows only when loading */}
    <SkeletonOnly>
      <SkeletonElement width={100} height={100} circle />
    </SkeletonOnly>
    
    {/* Your actual content */}
    <img src={user.avatar} />
    <h2>{user.name}</h2>
  </div>
</Skeleton>
```

### `useSkeletonLoading()`

Hook to check if currently inside a loading skeleton:

```tsx
function MyComponent() {
  const isLoading = useSkeletonLoading();
  
  if (isLoading) {
    // Custom loading behavior
    return <CustomSkeleton />;
  }
  
  return <ActualContent />;
}
```

### `<SkeletonOnly>` / `<ContentOnly>`

Conditional rendering based on skeleton state:

```tsx
<Skeleton loading={isLoading}>
  <SkeletonOnly>
    <p>This only shows when loading</p>
  </SkeletonOnly>
  
  <ContentOnly>
    <p>This only shows when NOT loading</p>
  </ContentOnly>
</Skeleton>
```

## Customization

### Colors

```tsx
<Skeleton
  loading={true}
  baseColor="rgba(0, 0, 0, 0.1)"
  highlightColor="rgba(0, 0, 0, 0.2)"
>
  {children}
</Skeleton>
```

### CSS Variables

Override the CSS variables globally:

```css
:root {
  --skeleton-base: rgba(100, 100, 100, 0.2);
  --skeleton-highlight: rgba(100, 100, 100, 0.3);
  --skeleton-radius: 8px;
  --skeleton-duration: 2s;
}
```

### Animation

```tsx
// Pulse (default) - opacity fades in/out
<Skeleton loading animation="pulse">

// Wave - gradient sweeps across
<Skeleton loading animation="wave">

// None - static skeleton
<Skeleton loading animation="none">
```

## Accessibility

- Adds `aria-busy="true"` when loading
- Adds `aria-live="polite"` for screen reader announcements
- Respects `prefers-reduced-motion` - disables animations automatically
- Disables pointer events during loading state

## License

MIT © [Townhall](https://townhall.gg)
