# Sticker prompt

Use this prompt (with Claude or by hand) whenever a new publication is added to
`src/data/publications.json`, `posters.json`, or `preprints.json`.
The sticker code lives in `stickers.js` and is rendered by `publicationEntry.js`.

## Prompt

Make a sticker icon for the paper below and add it to `src/components/stickers.js`.

Paper title: <TITLE>
Abstract link: <URL>

1. Read the abstract (arXiv, ACM, or the project site). If it cannot be opened,
   use the title and say so in your reply.
2. Pick one concrete visual metaphor for the core idea of the paper. Prefer a
   specific object over a generic one (a lifted building block for reusable
   intents, an iceberg for tacit knowledge). Do not use documents, lightbulbs,
   or brains. Do not draw text or letters.
3. Draw it as JSX inside `ICONS` with these rules.
   - Canvas is `viewBox="0 0 64 64"`. Keep the drawing inside 6 to 58 on both
     axes, and aim for a bounding box of about 48 to 56 px on its longer side so
     it matches the other stickers. If the shape is dense and square, scale it
     down with a wrapping `<g transform>` (see `genquery`).
   - The wrapper already sets `fill="none"`, `stroke` to the ink color `#2b1600`,
     `strokeWidth` 3, and round caps and joins. Only override `strokeWidth` for
     thin details (1.5 to 2.5) or thick limbs (4 to 6).
   - Use only the palette constants at the top of the file: `O` orange, `Y`
     yellow, `M` mint, `B` blue, `P` pink, `C` cream, `W` white, `INK`.
     Use at most 3 fill colors per icon.
   - Use 4 to 10 shapes. Hand-drawn feel is welcome (slightly off rectangles,
     `Q` curves). Add a `<Sparkle />` only when it fits the idea.
   - The white sticker outline and shadow come from CSS (`.pub-sticker`), so do
     not draw them.
4. Register it.
   - Add a key to `ICONS`, for example `myname: () => (<>...</>)`.
   - Add `["<unique substring of the title>", "myname"]` to `RULES`. The first
     matching rule wins, so put more specific substrings before shorter ones.
5. Check it. Render the icon next to the existing ones, confirm it reads at 52px,
   and confirm `npm start` compiles. Reply with the metaphor you chose in one
   sentence.
