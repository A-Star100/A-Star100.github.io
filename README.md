# Anirudh's Site
My site.
You should expect index files and other necessary files here.

## Revamping
If you noticed the site got revamped. My website has always used [W3.CSS](https://www.w3schools.com/w3css/defaulT.asp) (and the slightly newer one used a W3.CSS template), which was plain. My website now looks more clear and relaxing, and most importantly, less cluttered (but still relies HEAVILY on W3.CSS). If you were **SUPER** attentive, the site always used W3.CSS (but it didn't heavily rely on it until now), but the revamp also has its own custom styles (obvi). 

Hope you like the revamped site!

## How to view entire site offline
If you want to view the entire site offline as if it was online, do this:
1. Download the source code by clicking the arrow on the "Code" button, then clicking "Download ZIP", extract the ZIP.

For styles, add the HTML snippet given: `<link rel="stylesheet" href="style.css">`. You can modify this to modify your local websites styling. If you do this, remove any pre-existing `<style>` tags in older HTML pages in the source.

3. Open Terminal or Command Line, then use the `cd` command to change the directory to the one the source code is in. 
4. Use [Node.js](https://nodejs.org), or if you have Python, type in:

```shell
python3 -m http.server
```

if you have Python 3 installed, or:

```shell
python -m simple-http-server
```

if you have Python 2 or below installed.

For Node.js, type in:

```shell
npx http-server
```

and you should be ready to go.

You should be able to visit [localhost:8000](http://localhost:8000/) (or a custom port number if you decided to do so) and view the site offline on your device, or other devices connected to the same network.

## Maintenance
If the site is going under heavy maintenance or repetitive changes that will disrupt deployment, you will see a message that says: "Site is going under maintenance", by using another Git branch as a publishing source. This is only for **HEAVY** maintenance, where repetitive changes will occur, and as you know, multiple deployments can't occur in GitHub, so I have to switch the publishing branch.
