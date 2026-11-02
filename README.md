# ARROW website

Static website for ARROW, the ACL Reconstruction Rehabilitation Outcomes Workgroup, hosted on GitHub Pages. No build step: plain HTML, CSS and JavaScript.

## Put it online

1. Create a GitHub repository (for example `arrow-acl/arrow-acl.github.io` for a site at the root of the account, or any repo name for a site at `username.github.io/repo-name`).
2. Upload everything in this folder, including the hidden `.nojekyll` file.
3. In the repo, go to **Settings → Pages**, set **Source** to "Deploy from a branch", choose `main` and `/ (root)`, and save.
4. The site goes live at the URL shown on that page within a minute or two.

To use a custom domain (for example `arrowacl.org`), enter it under **Settings → Pages → Custom domain** and add the DNS records GitHub lists there.

## Add headshots

From the repo root, run once:

```
bash scripts/fetch-photos.sh
```

This copies the headshots from the Wix mockup into `assets/people/`. Commit those files. Anyone without a photo shows their initials.

For new people, add a square image (at least 400×400) to `assets/people/` and set `photo` in their entry to the file name.

## Update content

Everything editable lives in **`assets/js/data.js`**:

| To change | Edit |
|---|---|
| Contact email, DART link, participant count | `site` |
| Member sites (list and map on the home page) | `sites` — each needs a name, city, and lat/lon for its map marker |
| Director and steering committee | `leadership` |
| Workgroup members (grouped by institution automatically) | `workgroup` |
| Papers | `publications` |
| Conference abstracts and posters | `abstracts` |

Copy an existing entry, change the values, and keep the commas between entries. You can edit the file directly on github.com with the pencil icon; the site updates after you commit.

Page text (the About, goals, and DART descriptions) is in `index.html`.

## Preview locally

Open `index.html` in a browser. No server needed.

## Files

```
index.html          Home: about, goals, DART, member sites, recent papers, contact
people.html         Leadership and workgroup
publications.html   Papers and abstracts
404.html            Not-found page
assets/js/data.js   All editable content
assets/js/site.js   Renders content from data.js
assets/css/style.css
assets/img/         Logo (light and dark versions), header mark, favicon
assets/js/us-map.js US state outlines for the sites map (generated; don't edit)
assets/people/      Headshots
scripts/fetch-photos.sh
```
