#!/bin/bash

for paper in *.pdf; do
    tmp="thumbs/out.png"
    out="thumbs/`basename $paper .pdf`.png"
    if [ ! -e "$out" ]; then
	echo "Will create thumbnail    - $out"
	convert -density 576 ${paper}\[0\] -background white -flatten -resize 400x518 $tmp
	convert $tmp \
    		\( -clone 0 -background gray -shadow 80x3+0+0 \) \
    		-reverse -background none -layers merge +repage -crop 412x200+0+0 $out
    else
	echo "thumbnail already exists - $out"
    fi
done
