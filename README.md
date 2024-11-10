# Anirudh's Site
My site (made without a website builder).
You should expect index files and other necessary files here.

## How to view entire site offline
If you want to view the entire site offline as if it was online, do this:
1. Download the source code by clicking the arrow on the "Code" button, then clicking "Download ZIP", extract the ZIP.

For styles, add the HTML snippet given: `<link rel="stylesheet" href="style.css">`. You can modify this to modify your local websites styling. If you do this, remove any pre-existing `<style>` tags in older HTML pages in the source.

3. Open Terminal or Command Line, then use the `cd` command to change the directory to the one the source code is in. 
4. Use [Node.js](https://github.com/nodejs/node) and use [npm](https://www.npmjs.com/) to install Node.js if you want to, or if you have Python, type in:

`python3 -m http.server`

if you have Python 3 installed, or:

`python -m simple-http-server`

if you have Python 2 or below installed (any version of Python is much easier).
You should be able to visit [localhost:8000](http://localhost:8000/) (or a custom port number if you decided to do so) and view the site offline on your device, or other devices connected to the same network.

## How to set up Microsoft Clarity
Because I deleted my Microsoft Clarity project (but left everything **you need** to set it up), I will give you a tutorial.

1. Go [here](https://clarity.microsoft.com), then log-in/sign up, *then* set up a project with your desired URL. For example, "*myusername*.github.io" or a different URL. (replace *myusername* with your GitHub username)
2. Copy-paste the installation code you were given into the file "msclarity.js" in the "with-ms-clarity-tracking" branch. The file was added for ease-of-use and faster recreation of tracking.
**Make sure to add a cookie consent banner to apply with cookie laws on your site.**

## How to use this site's source code as a reference
You can reference the site's source code in many ways.
 **Using GitHub**
 If you can read this README, you're already on the GitHub repo. From here, click on the HTML file containing the code you want to copy, then you can copy-paste the source code into 
 your [IDE](https://en.wikipedia.org/wiki/Integrated_development_environment) or programming playground.
 **Using DevTools**
 Most if not all browsers have a feature where if you right-click and click "Inspect" you can see the website's source code. In [Chrome](https://www.google.com/chrome/), it is called 
 [DevTools](https://developer.chrome.com/docs/devtools). You can copy-paste parts of code you want and view where they are in real-time.

### Maintenance
If the site is going under heavy maintenance or repetitive changes that will disrupt deployment, you will see a message that says: "Site is going under maintenance", by using another Git branch as a publishing source. Why not just use the branch for the old, unchanged version of the site, you ask? That is a good choice, but I'll have to update both, and merging both may result in unwanted changes that I'd rather not do. So that's why.
Also, it'll be annoying for users when they get comfortable with a new layout and an old one comes up. It is better to just tell them the site is under maintenance :)
Anyway, thanks!
