SHELL := /bin/bash
all: cv

.PHONY: cv
cv:
	cd ./cv && ls main.tex ../data/*.bib | entr lualatex -pdf -bibtex -f

cv_update:
	cd ./cv && lualatex -pdf -bibtex -f main.tex && cp main.pdf ../public/cv.pdf

ncu:
	cd site && npx -y npm-check-updates -u && npm install

build:
	cd site && npm run build

clean:
	cd site && npm run clean && cd ..
	find . -name \*.aux -type f -delete
	find . -name \*.bbl -type f -delete
	find . -name \*.blg -type f -delete
	find . -name \*.fdb_latexmk -type f -delete
	find . -name \*.fls -type f -delete
	find . -name \*.log -type f -delete
	find . -name \*.out -type f -delete
	find . -name \*.bcf -type f -delete
	find . -name \*.nav -type f -delete
	find . -name \*.run.xml -type f -delete
	find . -name \*.snm -type f -delete
	find . -name \*.toc -type f -delete
	find . -name \*.vrb -type f -delete
	find . -name \*.synctex.gz -type f -delete
	rm -rf `biber --cache`

favicon:
	# https://graphicdesign.stackexchange.com/a/77466/
	inkscape -w 16 -h 16 -o 16.png img/icon-round.svg
	inkscape -w 32 -h 32 -o 32.png img/icon-round.svg
	inkscape -w 48 -h 48 -o 48.png img/icon-round.svg
	convert 16.png 32.png 48.png public/favicon.ico
	rm -rf 16.png 32.png 48.png
