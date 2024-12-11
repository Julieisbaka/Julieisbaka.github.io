---
icon: book
description: >-
  A set of tools designed to be interactive and to be used without having to
  leave the wiki.
---

# Wiki notebook.

```markup
<script>
window.DocsBotAI = window.DocsBotAI || {};
DocsBotAI.init = function(e){
  return new Promise((t, r) => {
    var n = document.createElement("script");
    n.type = "text/javascript", n.async = !0, n.src = "https://widget.docsbot.ai/chat.js";
    let o = document.getElementsByTagName("script")[0];
    o.parentNode.insertBefore(n, o), n.addEventListener("load", () => {
      let n;
      Promise.all([
        new Promise((t, r) => {
          window.DocsBotAI.mount(Object.assign({}, e)).then(t).catch(r)
        }),
        (n = function e(t){
          return new Promise(e => {
            if (document.querySelector(t))
              return e(document.querySelector(t));
            let r = new MutationObserver(n => {
              if (document.querySelector(t))
                return e(document.querySelector(t)), r.disconnect()
            });
            r.observe(document.body, {childList: !0, subtree: !0})
          })
        })("#docsbotai-root"),
      ]).then(() => t()).catch(r)
    }), n.addEventListener("error", e => {
      r(e.message)
    });
  });
};

DocsBotAI.init({id: "89WYBDeNDeQNHQ99Rg1T/obP4bnNXLkHYTJnHPoDG"});
document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('actionButton');
  const output = document.getElementById('output');

  button.addEventListener('click', function() {
    output.textContent = 'Button clicked!';
  });
});
</script>

<button id="actionButton">Click Me</button>
<p id="output"></p>
```
