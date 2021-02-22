---
layout: post 
title: Switch theme in Jekyll 
date:   21-02-21 13:24:59 +0100 
categories: coding 
tags: jekyll
---

Switching a theme in Jekyll is straight forward.

## Setup

1. Add the theme to the Gemfile
    * `gem "jekyll-theme-midnight"`
2. Execute `bundle install`
3. Set the theme in the *_config.yml*
    * `theme: jekyll-theme-midnight`
4. Execute `bundle exec jekyll serve`

## Troubleshooting

#### Theme not displayed

* Make sure, to remove the *default.html* in the *_layouts* folder. The file overrides the default layout from the
  installed theme.
* Set the layout of your posts/pages according to your installed theme. For instance, the *midnight* theme does not have
  any post or page layout per default. 
