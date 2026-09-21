import os
import math
from PIL import Image, ImageDraw, ImageFont

os.makedirs('public', exist_ok=True)
artifact_dir = r"C:\Users\HP\.gemini\antigravity-ide\brain\20a6350e-562f-48e1-b3e8-62f48c18a14f"
os.makedirs(artifact_dir, exist_ok=True)

# 1. Generate clean SVG files
svg_icon = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" rx="112" fill="#0A0A0A" />
  <g transform="translate(96, 96) scale(13.333)" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </g>
</svg>'''

with open('public/clockin-icon.svg', 'w', encoding='utf-8') as f:
    f.write(svg_icon)

svg_logo_light = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200" width="800" height="200">
  <!-- Icon Mark -->
  <rect x="30" y="30" width="140" height="140" rx="32" fill="#0A0A0A" />
  <g transform="translate(56, 56) scale(3.666)" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </g>
  <!-- Typography -->
  <text x="200" y="125" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-weight="900" font-size="76" letter-spacing="-1.5" fill="#0A0A0A">CLOCKIN<tspan fill="#8A8780">.AI</tspan></text>
</svg>'''

with open('public/clockin-logo.svg', 'w', encoding='utf-8') as f:
    f.write(svg_logo_light)

svg_logo_dark = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200" width="800" height="200">
  <rect width="800" height="200" rx="24" fill="#0A0A0A" />
  <!-- Icon Mark -->
  <rect x="30" y="30" width="140" height="140" rx="32" fill="#1A1A1A" stroke="#333333" stroke-width="2" />
  <g transform="translate(56, 56) scale(3.666)" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </g>
  <!-- Typography -->
  <text x="200" y="125" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-weight="900" font-size="76" letter-spacing="-1.5" fill="#FFFFFF">CLOCKIN<tspan fill="#71717A">.AI</tspan></text>
</svg>'''

with open('public/clockin-logo-dark.svg', 'w', encoding='utf-8') as f:
    f.write(svg_logo_dark)

# 2. Render High-Resolution Pixel-Perfect PNGs with PIL (Supersampled for pristine anti-aliasing)
SCALE = 4  # 4x supersampling for razor sharp anti-aliasing

def draw_layers_icon(draw, cx, cy, size, stroke_color, stroke_width):
    # Base Lucide polygon and polylines scaled to size
    # Original 24x24 box
    unit = size / 24.0
    ox = cx - size / 2.0
    oy = cy - size / 2.0

    def pt(x, y):
        return (ox + x * unit, oy + y * unit)

    # Polygon 12,2 -> 2,7 -> 12,12 -> 22,7
    poly = [pt(12, 2), pt(2, 7), pt(12, 12), pt(22, 7)]
    draw.polygon(poly, outline=stroke_color, width=int(stroke_width))

    # Polyline 2,12 -> 12,17 -> 22,12
    draw.line([pt(2, 12), pt(12, 17), pt(22, 12)], fill=stroke_color, width=int(stroke_width), joint="curve")

    # Polyline 2,17 -> 12,22 -> 22,17
    draw.line([pt(2, 17), pt(12, 22), pt(22, 17)], fill=stroke_color, width=int(stroke_width), joint="curve")

# Render Icon 512x512
icon_size = 512 * SCALE
im_icon = Image.new("RGBA", (icon_size, icon_size), (0, 0, 0, 0))
d_icon = ImageDraw.Draw(im_icon)

# Rounded rectangle background
corner_r = int(112 * SCALE)
d_icon.rounded_rectangle([0, 0, icon_size - 1, icon_size - 1], radius=corner_r, fill=(10, 10, 10, 255))
draw_layers_icon(d_icon, icon_size / 2, icon_size / 2, 320 * SCALE, (255, 255, 255, 255), 26 * SCALE)

im_icon_final = im_icon.resize((512, 512), Image.Resampling.LANCZOS)
im_icon_final.save("public/clockin-icon.png", "PNG")
im_icon_final.save(os.path.join(artifact_dir, "clockin-icon.png"), "PNG")

# Render Full Logo Transparent (1200 x 320)
logo_w, logo_h = 1200 * SCALE, 320 * SCALE
im_logo = Image.new("RGBA", (logo_w, logo_h), (0, 0, 0, 0))
d_logo = ImageDraw.Draw(im_logo)

# Icon box in full logo
box_size = 200 * SCALE
box_x = 50 * SCALE
box_y = (logo_h - box_size) / 2
d_logo.rounded_rectangle([box_x, box_y, box_x + box_size, box_y + box_size], radius=int(44 * SCALE), fill=(10, 10, 10, 255))
draw_layers_icon(d_logo, box_x + box_size / 2, box_y + box_size / 2, 128 * SCALE, (255, 255, 255, 255), 10 * SCALE)

# Typography
font_path = "C:/Windows/Fonts/segoeuib.ttf"
if not os.path.exists(font_path):
    font_path = "C:/Windows/Fonts/arialbd.ttf"

font_size = int(112 * SCALE)
font = ImageFont.truetype(font_path, font_size)

text_x = box_x + box_size + 45 * SCALE
text_y = box_y + (box_size - font_size) / 2 - 12 * SCALE

# Draw "CLOCKIN" in black
d_logo.text((text_x, text_y), "CLOCKIN", font=font, fill=(10, 10, 10, 255))

# Calculate width of "CLOCKIN"
bbox = font.getbbox("CLOCKIN")
clockin_w = bbox[2] - bbox[0]

# Draw ".AI" in muted gray
d_logo.text((text_x + clockin_w, text_y), ".AI", font=font, fill=(138, 135, 128, 255))

im_logo_final = im_logo.resize((1200, 320), Image.Resampling.LANCZOS)
im_logo_final.save("public/clockin-logo.png", "PNG")
im_logo_final.save(os.path.join(artifact_dir, "clockin-logo.png"), "PNG")

# Render Full Logo Dark Mode (1200 x 320 on black)
im_logo_dark = Image.new("RGBA", (logo_w, logo_h), (10, 10, 10, 255))
d_logo_dark = ImageDraw.Draw(im_logo_dark)

# Icon box in dark logo
d_logo_dark.rounded_rectangle([box_x, box_y, box_x + box_size, box_y + box_size], radius=int(44 * SCALE), fill=(26, 26, 26, 255), outline=(50, 50, 50, 255), width=int(3 * SCALE))
draw_layers_icon(d_logo_dark, box_x + box_size / 2, box_y + box_size / 2, 128 * SCALE, (255, 255, 255, 255), 10 * SCALE)

# Draw "CLOCKIN" in white
d_logo_dark.text((text_x, text_y), "CLOCKIN", font=font, fill=(255, 255, 255, 255))
# Draw ".AI" in neutral silver
d_logo_dark.text((text_x + clockin_w, text_y), ".AI", font=font, fill=(150, 150, 155, 255))

im_logo_dark_final = im_logo_dark.resize((1200, 320), Image.Resampling.LANCZOS)
im_logo_dark_final.save("public/clockin-logo-dark.png", "PNG")
im_logo_dark_final.save(os.path.join(artifact_dir, "clockin-logo-dark.png"), "PNG")

# Render Full Logo White (Transparent with white text for dark placement)
im_logo_white = Image.new("RGBA", (logo_w, logo_h), (0, 0, 0, 0))
d_logo_white = ImageDraw.Draw(im_logo_white)

d_logo_white.rounded_rectangle([box_x, box_y, box_x + box_size, box_y + box_size], radius=int(44 * SCALE), fill=(255, 255, 255, 255))
draw_layers_icon(d_logo_white, box_x + box_size / 2, box_y + box_size / 2, 128 * SCALE, (10, 10, 10, 255), 10 * SCALE)

d_logo_white.text((text_x, text_y), "CLOCKIN", font=font, fill=(255, 255, 255, 255))
d_logo_white.text((text_x + clockin_w, text_y), ".AI", font=font, fill=(180, 180, 185, 255))

im_logo_white_final = im_logo_white.resize((1200, 320), Image.Resampling.LANCZOS)
im_logo_white_final.save("public/clockin-logo-white.png", "PNG")
im_logo_white_final.save(os.path.join(artifact_dir, "clockin-logo-white.png"), "PNG")

print("All logos generated successfully!")
