---
icon: question
description: >-
  How to edit and work with the MathWiki. Including tools, suggestions, and a
  whole lot more.
---

# Wiki how?

{% code overflow="wrap" %}
```markdown
This wiki is primarily composed in markdown. To keep with this style and to stay compatible
with Gitbook I highly recommend writing documentation in markdown or markdown adjacent languages.
The list of languages that you should limit use is as follows:

```
{% endcode %}

* Markdown + math based variants
* Tex + popular and math based variants
* Mermaid + adoptions for diagrams and similar
* HTML + variants for web
* JS for scripting
* YML or Json for configs
* Git files for Git

When creating and editing pages and documentation their are a few things you need to consider first, most importantly, assume good will; most likely someone is not trying to mess something up, if someone makes a mistake you can fix it or let the original editor know of the problem with their documentation on the wiki.

## Standardization

Linting for markdown will be done using the Markdownlint extension with a custom config:

Any IDE is welcome to be used while developing, however whichever IDE you pick should support the following features (or have a method of getting these features through 3rd party extensions or etc): git integration, Markdown lint config and linting support, Markdown preview, Gitbook style markdown preview.
