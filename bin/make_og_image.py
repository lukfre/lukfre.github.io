"""Generate the Open Graph preview card (assets/img/og-image.png).

Re-run this whenever the profile photo, name or tagline changes:

    python3 bin/make_og_image.py

Why a composed card rather than the photo itself: Open Graph is 1200x630
(1.91:1), so a square portrait gets its top and bottom cropped off. A card
keeps your face intact and stays readable at the ~300px width these previews
are actually rendered at.

Name and palette are read from _config.yml and _sass/_themes.scss so this
stays in sync with the site.
"""

import re
import sys
from pathlib import Path

import yaml
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent

PHOTO = ROOT / "assets" / "img" / "bio-photo.png"
OUT = ROOT / "assets" / "img" / "og-image.png"

# --- tweak these -----------------------------------------------------------
ROLE = "PhD Student in Artificial Intelligence"
AFFILIATION = "Sapienza University of Rome"
TAGLINE = "Narrative Understanding · Information Extraction · LLM post-training · Meta-evaluation"
SITE = "lukfre.github.io"
TAGLINE_SIZE = 25  # wraps to as many lines as it needs
FONT_BOLD = "/usr/share/fonts/truetype/lato/Lato-Black.ttf"
FONT_SEMI = "/usr/share/fonts/truetype/lato/Lato-Bold.ttf"
FONT_REG = "/usr/share/fonts/truetype/lato/Lato-Regular.ttf"
# ---------------------------------------------------------------------------

# Open Graph's canonical size is 1200x630. Rendering at a multiple of it and
# shipping the larger file keeps the card sharp on high-DPI displays — every
# consumer downsamples, none upscale. PNG is already lossless, so "quality"
# here means resolution, not compression.
SCALE = 2

W, H = 1200 * SCALE, 630 * SCALE
PAD = 78 * SCALE
PHOTO_D = 350 * SCALE


def theme_colour(name, fallback):
    """Pull a colour out of _sass/_themes.scss so the card matches the site."""
    scss = (ROOT / "_sass" / "_themes.scss").read_text(encoding="utf-8")
    m = re.search(rf"^\${re.escape(name)}:\s*(#[0-9a-fA-F]{{3,8}})", scss, re.MULTILINE)
    return m.group(1) if m else fallback


def site_name():
    cfg = yaml.safe_load((ROOT / "_config.yml").read_text(encoding="utf-8"))
    parts = [cfg.get("first_name"), cfg.get("middle_name"), cfg.get("last_name")]
    return " ".join(p for p in parts if p) or "Your Name"


def circle_crop(path, diameter):
    im = Image.open(path).convert("RGB")
    side = min(im.size)
    im = im.crop(
        (
            (im.width - side) // 2,
            (im.height - side) // 2,
            (im.width + side) // 2,
            (im.height + side) // 2,
        )
    )
    im = im.resize((diameter, diameter), Image.LANCZOS)
    mask = Image.new("L", (diameter * 4, diameter * 4), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, diameter * 4, diameter * 4), fill=255)
    im.putalpha(mask.resize((diameter, diameter), Image.LANCZOS))
    return im


def main():
    if not PHOTO.exists():
        sys.exit(f"profile photo not found: {PHOTO}")

    bg = theme_colour("light-bg", "#f7f4ef")
    ink = theme_colour("light-text", "#1c1916")
    muted = theme_colour("light-text-secondary", "#6e6860")
    accent = theme_colour("light-accent", "#086012")

    card = Image.new("RGB", (W, H), bg)
    d = ImageDraw.Draw(card)

    # accent rule down the left edge
    d.rectangle([0, 0, 40 * SCALE, H], fill=accent)

    photo = circle_crop(PHOTO, PHOTO_D)
    px, py = W - PAD - PHOTO_D, (H - PHOTO_D) // 2
    ring = 6 * SCALE
    d.ellipse(
        [px - ring, py - ring, px + PHOTO_D + ring, py + PHOTO_D + ring], fill=accent
    )
    card.paste(photo, (px, py), photo)

    text_w = px - PAD - 60 * SCALE
    f_name = ImageFont.truetype(FONT_BOLD, 82 * SCALE)
    f_role = ImageFont.truetype(FONT_SEMI, 33 * SCALE)
    f_aff = ImageFont.truetype(FONT_REG, 29 * SCALE)
    f_tag = ImageFont.truetype(FONT_REG, 23 * SCALE)
    f_site = ImageFont.truetype(FONT_SEMI, 24 * SCALE)

    def fit(text, font_path, size, max_w):
        """Shrink until the line fits the text column."""
        while size > 12 * SCALE:
            f = ImageFont.truetype(font_path, size)
            if d.textlength(text, font=f) <= max_w:
                return f
            size -= 2 * SCALE
        return ImageFont.truetype(font_path, 12 * SCALE)

    def wrap(text, font_path, size, max_w):
        """Break text into lines that fit the column, keeping the size asked for.

        The tagline is far wider than the text column, so shrinking it to fit on
        one line (what fit() does) drove it down to ~15pt. Wrapping keeps it
        legible instead.
        """
        f = ImageFont.truetype(font_path, size)
        # Break between " · " items where the text uses them, so a separator
        # never dangles at the end of a line; fall back to words otherwise.
        sep = " \u00b7 "
        if sep in text:
            units, joiner = text.split(sep), sep
        else:
            units, joiner = text.split(), " "

        lines, current = [], ""
        for unit in units:
            trial = f"{current}{joiner}{unit}" if current else unit
            if not current or d.textlength(trial, font=f) <= max_w:
                current = trial
            else:
                lines.append(current)
                current = unit
        if current:
            lines.append(current)
        return f, lines

    name = site_name()
    f_name = fit(name, FONT_BOLD, 82 * SCALE, text_w)
    f_role = fit(ROLE, FONT_SEMI, 33 * SCALE, text_w)

    y = 150 * SCALE
    d.text((PAD, y), name, font=f_name, fill=ink)
    y += f_name.size + 26 * SCALE
    d.rectangle([PAD, y, PAD + 96 * SCALE, y + 5 * SCALE], fill=accent)
    y += 34 * SCALE
    d.text((PAD, y), ROLE, font=f_role, fill=accent)
    y += f_role.size + 12 * SCALE
    d.text((PAD, y), AFFILIATION, font=f_aff, fill=muted)
    y += f_aff.size + 30 * SCALE
    f_tag, tag_lines = wrap(TAGLINE, FONT_REG, TAGLINE_SIZE * SCALE, text_w)
    for line in tag_lines:
        d.text((PAD, y), line, font=f_tag, fill=muted)
        y += f_tag.size + 8 * SCALE

    d.text((PAD, H - PAD - 10 * SCALE), SITE, font=f_site, fill=accent)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    card.save(OUT, "PNG", optimize=True, compress_level=9)
    print(
        f"wrote {OUT.relative_to(ROOT)}  ({W}x{H} = {SCALE}x the 1200x630 baseline, "
        f"{OUT.stat().st_size // 1024} KB)"
    )


if __name__ == "__main__":
    main()
