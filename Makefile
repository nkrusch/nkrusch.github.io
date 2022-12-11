SHELL := /bin/bash
all: cv

.PHONY: cv
cv:
	cd ./cv && ls main.tex ../data/cv.bib | entr latexmk -pdf -bibtex -f

cv_update:
	cd ./cv && latexmk -pdf -bibtex -f main.tex && cp main.pdf ../site/public/cv.pdf

build_website:
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