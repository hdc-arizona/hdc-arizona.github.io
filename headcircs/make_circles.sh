cp ../headshots/*.png .
convert -fill "#FFFFFF" -size 200x267 xc:none -draw 'circle 99,120 5,120' -blur 5x5 circle.png
mogrify -alpha Set -draw 'image Multiply 0,0 0,0 "circle.png"' *.png
mogrify -crop 200x220+0+10 *.png
