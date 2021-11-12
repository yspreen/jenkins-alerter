#!/bin/bash

cd icons/on
magick convert "icon128.png" -resize 37.5% "icon48.png"
magick convert "icon128.png" -resize 25% "icon32.png"
magick convert "icon128.png" -resize 14.84375% "icon19.png"
magick convert "icon128.png" -resize 12.5% "icon16.png"
cd ../..

cd icons/off
magick convert "icon128.png" -resize 37.5% "icon48.png"
magick convert "icon128.png" -resize 25% "icon32.png"
magick convert "icon128.png" -resize 14.84375% "icon19.png"
magick convert "icon128.png" -resize 12.5% "icon16.png"
cd ../..
