# Anirudh's Site
My site (made without a website builder).
You should expect index files and other necessary files here.

## How to view entire site offline
If you want to view the entire site offline as if it was online, do this:
1. Download the source code by clicking the arrow on the "Code" button, then clicking "Download ZIP".
2. Open Terminal or Command Line, then use the `cd` command to change the directory to the one you downloaded and extracted the source code in.
3. Use (Node.js)[https://github.com/nodejs/node] (more complex), or type in:

`python3 -m http.server`

if you have Python 3 installed, or

`python -m simple-http-server`

if you have Python 2 or below installed (any version of Python is much easier).
You should be able to visit localhost:[portname] and view the site offline on your device, or other devices connected to the same network.

### Maintenance
If the site is going under heavy maintenance or repetitive changes that will disrupt deployment, you will see a message that says : "Site is going under maintenance", by using another Git branch as a publishing source. Why not just use the branch for the old, unchanged version of the site, you ask? That is a good choice, but I'll have to update both, and merging both may result in unwanted changes that I'd rather not do. So that's why.
Anyway, thanks!
