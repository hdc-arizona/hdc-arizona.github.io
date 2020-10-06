#!/usr/bin/env python

import bibtexparser
import sys

with open(sys.argv[1]) as f:
    bib = bibtexparser.load(f)

output = []
for entry in bib.entries:
    keywords = list(s.strip() for s in entry.get('keywords','').split(', ')
                    if s.startswith('cscheid') or s.startswith('leibatt') or s.startswith('survey'))
    taggers = ["cscheid", "leibatt"]
    by_tagger = dict((tagger, set()) for tagger in taggers)
    for keyword in keywords:
        for tagger in taggers:
            if keyword.startswith(tagger):
                by_tagger[tagger].add(keyword[len(tagger)+1:])
    agreement = by_tagger["cscheid"].intersection(by_tagger["leibatt"])
    if "maybe" in by_tagger["cscheid"] or "maybe" in by_tagger["leibatt"]:
        continue
    # if "maybe" in agreement:
    #     continue
    # if len(agreement) == 0:
    #     continue
    def fix_tag(tag):
        if tag.startswith("interaction-"):
            return tag
        else:
            return "implementation-" + tag
    entry['keywords'] = ", ".join(list(fix_tag(tag) for tag in agreement))
    def remove(key):
        try:
            del entry[key]
        except KeyError:
            pass
    remove("keywords")
    remove("abstract")
    remove("shorttitle")
    remove("issn")
    remove("note")
    remove("url")
    remove("urldate")
    output.append(entry)

bib.entries = output
output_str = bibtexparser.dumps(bib)
print(output_str)
    
    
