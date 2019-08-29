# hdc-arizona.github.io
website for HDC

# Contributing
Before submitting a pull request, please build the site locally...

```
jekyll serve
```

...and inspect (go to localhost:4000) to make sure your changes look right.

If you need to install jekyll, you can use 

```
sudo gem install jekyll
```

## Adding a Paper

1. Add your paper PDF to the `/papers/` directory. The naming scheme is
   `venue_year_short_summary.pdf`.

2. Run `make-thumbnails.sh` in the `/papers/` directory to automatically
   create the thumbnail.

3. Edit `publications.md` with an entry for the paper, linking to the PDF and
   thumbnail.

4. Test!

5. Don't forget to `git add` the PDF and thumbnail (and `publications.md` of
   course) when committing the change.
