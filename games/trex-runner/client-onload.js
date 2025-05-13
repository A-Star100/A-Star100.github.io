function isChrome() {
    const ua = navigator.userAgent;
    return /Chrome/.test(ua) && !/Edg|OPR|Brave/.test(ua);
  }

  function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }

  function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
  }

  if (!isChrome() && !getCookie("ChromeWarned")) {
    alert("This game works best in Google Chrome. Some features may not work properly in other browsers.");
    setCookie("ChromeWarned", "1", 30);
  }