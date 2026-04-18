# Copilot Instructions — Sssnakes

## Styling

- **Always use Tailwind classes** for styling. Avoid inline `style={{}}` props.
- Exception: `text-shadow` and other CSS properties not yet supported as Tailwind utilities — use the pre-defined custom utility classes (see below) or inline style only as a last resort.

## Design Tokens via Tailwind

All design tokens are registered in `src/styles/variables.css` via `@theme {}` and are available as **Tailwind utility classes**:

### Colors

| Tailwind class prefix | Token | Hex |
|---|---|---|
| `bg-bg` / `text-bg` | `--color-bg` | `#0d1117` |
| `bg-bg-surface` | `--color-bg-surface` | `#161b22` |
| `bg-bg-elevated` | `--color-bg-elevated` | `#21262d` |
| `bg-accent` / `text-accent` / `border-accent` | `--color-accent` | `#39ff14` (neon green) |
| `bg-accent-dim` / `text-accent-dim` | `--color-accent-dim` | `#22c55e` |
| `text-text-primary` | `--color-text-primary` | `#f0f6fc` |
| `text-text-secondary` | `--color-text-secondary` | `#8b949e` |
| `text-text-muted` | `--color-text-muted` | `#484f58` |
| `border-border` | `--color-border` | `#30363d` |
| `text-danger` / `bg-danger` | `--color-danger` | `#f85149` |
| `text-gold` | `--color-gold` | `#ffd700` |
| `text-silver` | `--color-silver` | `#c0c0c0` |
| `text-bronze` | `--color-bronze` | `#cd7f32` |

### Fonts

| Tailwind class | Token | Value |
|---|---|---|
| `font-game` | `--font-game` | Orbitron (headings, scores, logo) |
| `font-body` | `--font-body` | Inter (all other text) |

### Custom Utilities (`src/index.css`)

| Class | Effect |
|---|---|
| `text-glow-accent` | Neon green text-shadow glow |
| `box-glow-accent` | Neon green box-shadow glow |

## TanStack Router — Active Link Styling

Use `activeProps` / `inactiveProps` on `<Link>` for active state styling — **do not** force `data-[status=active]:` CSS variants.

```tsx
<Link
  to="/somewhere"
  className="base-classes"
  inactiveProps={{ className: "text-text-secondary" }}
  activeProps={{ className: "text-accent border-b-2 border-accent" }}
/>
```

## Tech Stack

- React 19, TypeScript (strict)
- TanStack Router (file-based routing in `src/routes/`)
- TanStack Query for server state
- Tailwind CSS v4 via `@tailwindcss/vite`
- No SCSS — CSS custom properties only
