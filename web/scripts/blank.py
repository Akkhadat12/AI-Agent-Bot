# Reports the "content" share of each scan frame: pixels differing from the background
# (#0E1116) by more than 14 levels. Frames under the threshold are flagged.
import sys, glob, os
from PIL import Image, ImageChops
d = sys.argv[1]; thr = float(sys.argv[2]) if len(sys.argv) > 2 else 0.06
bg = (14, 17, 22)
worst = {}
bad = []
for f in sorted(glob.glob(os.path.join(d, '*.png'))):
    im = Image.open(f).convert('RGB').resize((240, 135))
    diff = ImageChops.difference(im, Image.new('RGB', im.size, bg)).convert('L')
    share = sum(1 for v in diff.get_flattened_data() if v > 14) / (240 * 135)
    key = os.path.basename(f).split('-')[1]
    if share < worst.get(key, (9, ''))[0]: worst[key] = (share, os.path.basename(f))
    if share < thr: bad.append((os.path.basename(f), round(share, 3)))
for k, (v, f) in worst.items(): print(f'{k}: min content {v:.1%} ({f})')
print('FLAGGED' if bad else 'OK', bad)
