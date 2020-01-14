cp ../headshots/*.png .
convert  -size 200x267 xc:none -draw 'circle 100,120 100,20'  circle.gif
mogrify -alpha Set -draw 'image Dst_In 0,0 0,0 "circle.gif"' -crop 200x220+0+10 *.png
