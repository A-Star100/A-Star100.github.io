# Anirudh's Site
My site (made without a website builder).
You should expect index files and other necessary files here.

## Revamping
If you noticed (all of you would've but of you didn't it's fine), the site got revamped. My website has always used [W3.CSS](https://www.w3schools.com/w3css/defaulT.asp) (and the slightly newer one used a W3.CSS template), which was plain. My website now looks more clear and relaxing, and most importantly, less cluttered (but still relies HEAVILY on W3.CSS). If you were **SUPER** attentive, the site always used W3.CSS (but it didn't heavily rely on it until now), but the revamp also has its own custom styles (obvi). 

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

## How to set up Microsoft Clarity
Because I deleted my Microsoft Clarity project (but left everything **you need** to set it up), I will give you a tutorial.

1. Go to [Microsoft Clarity's website](https://clarity.microsoft.com), then log-in/sign up, *then* set up a project with your desired URL. For example, "*myusername*.github.io" or a different URL. (replace *myusername* with your GitHub username)
2. Copy-paste the installation code you were given into the file "msclarity.js" in the "with-ms-clarity-tracking" branch. The file was added for ease-of-use and faster recreation of tracking.
**Make sure to add a cookie consent banner to apply with cookie laws on your site.**

## How to use this site's source code as a reference
You can reference the site's source code in many ways.
 #### Using GitHub 
 If you can read this README, you're already on the GitHub repo. From here, click on the HTML file containing the code you want to copy, then you can copy-paste the source code into 
 your [IDE](https://en.wikipedia.org/wiki/Integrated_development_environment) or programming playground.
 #### Using DevTools
 Most if not all browsers have a feature where if you right-click and click "Inspect" you can see the website's source code. In [Chrome](https://www.google.com/chrome/), it is called 
 [DevTools](https://developer.chrome.com/docs/devtools). You can copy-paste parts of code you want and view where they are in real-time.

## Maintenance
If the site is going under heavy maintenance or repetitive changes that will disrupt deployment, you will see a message that says: "Site is going under maintenance", by using another Git branch as a publishing source. This is only for **HEAVY** maintenance, where repetitive changes will occur, and as you know, multiple deployments can't occur in GitHub, so I have to switch the publishing branch.
