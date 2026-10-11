# Model slider images

One side-profile photo per model, all from the same shoot, on a pure white background.

## Spec
- Format: `.webp` (convert with any tool; quality ~85)
- Size: 1600 x 900 px (16:9), car centered, facing the same direction in every image
- Same camera distance and scale, so every car appears the same width
- Background: pure `#ffffff` (no shadow gradient, or a very faint ground shadow only)
- Use only images you are licensed to use (BMW press kit / dealer assets / your own shoot)

## Filenames (must match `slug` in `app/model-slider.tsx`)
- ix3-50-xdrive.webp
- ix3-40-sdrive-urban.webp
- x3-20-xdrive.webp
- x3-m50-xdrive.webp
- i5.webp
- ix2.webp

To add a model: add `{ slug, name }` to `MODELS` in `app/model-slider.tsx` and drop `<slug>.webp` here.
Until a file exists, its card shows a "missing image" note.
