#!/bin/bash
cd $1
rm -rf ph
mkdir ph
for filename in ./*.png ./*.jpg; do
    convert $filename -resize 10% -quality 20% ./ph/$filename
done