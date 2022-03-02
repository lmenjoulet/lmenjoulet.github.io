---
layout: ../../layouts/MarkdownLayout.astro
title: Loup Menjoulet
description: Loup Menjoulet personnal website landing page
draft: false
---

## Welcome !

This website is a little personal project of web development. Even if it isn't really part of my curriculum, a little bit of practice can't hurt.
I'm currently studying at ESIREM in France to get a degree in security and quality of networks (year 4 out of 5). My subjects of interest in this field are cybersecurity (I'm hosting at Tor relay [@section9lair.tk](https://metrics.torproject.org/rs.html#details/A7572A5090591E3D7E8027F34F5DF05756EFFE89)) and immutable and reproducible network and backend environments (I've spent too much time gathering scattered config files and fixing config quirks and migrating websites and services while I'm only a student). So, yes, DevOps interests me a lot. I use [NixOS](https://nixos.org) as my operating system for servers and [Docker](https://docker.com) to manage specific apps.

## What about this website ?

The website in itself being a challenge, I've brought some rules and objectives :

* __No client side rendering.__

Imagine not finding this website when searching my name online or having it loading for 30 plus seconds. As SSR is mandatory, I have to choose between dynamic page builders like SvelteKit or Next.js, or static sites generators, exit vanilla Svelte or React.

* __One new technology learnt minimum__

The word "technology" is a bit vague, but let's say that replacing Rollup by Snowpack to bundle my javascript doesn't count. the technology has to impact the code I'm producing.

These specifications are not heavy, but it's ok I'm having fun, I'm not doing this project under pressure I swear. 

to do a brief history of this project, I did build a first version with [SvelteKit](https://kit.svelte.dev/), because I liked Svelte, but I quickly dropped this idea for a simple reason :

* __Why would I need a backend ?__ I mean, the few pages generated for my site could easily be rendered statically, right ? Moreover, a NodeJS server consumes more power than a mere Apache or NGINX server, and it's a bit less convenient to host than static webpages.

I quickly went back on track after discovering [Astro](https://astro.build), a static website generator allowing use of components from different frameworks at the same time (React, Vue, Angular, Svelte, etc...). I built the website you're seeing using Astro and svelte components, but what is it worth ? Well numbers don't lie and you can open [Chrome lighthouse](https://developers.google.com/web/tools/lighthouse#devtools) if you're on a chromium based website.

A few side notes : I use [Tailwind css](https://tailwindcss.com/) for styling, I've discovered it during the project and it's neat ! Also the website is hosted using github pages and it has an Github Action on each commit on the main branch to build it.

My tech-stack for this project is __AST__ :

* __A__ stro

* __S__ velte

* __T__ ailwind CSS

Only the __R__ and the __O__ are missing to complete my recursive acronym and win the Web development game (The best tech stack name always wins).
__R__ for Redis maybe 🤔? Still have no clue for the O. It's a hobby project anyway, I can extend it how I want.

## F.A.Q

I've imagined a few annoying questions, here goes nothing.

* __How much time spent to make this website__ 20 hours maybe ? I made it in 4 days after my quarantine in Korea, it took me a bit of time to learn Tailwind, make the Github CI work and fill all of these pages (still haven't finished though).

* __A lot of technologies are mentionned, which ones are mastered ?__ Well, not React, sincerely sorry. I should have done this project using a React framework seing how much it is important in frontend WebDev nowadays but I sinned out of laziness and Svelte is just too comfortable.

* __I can't see PHP mentionned anywhere on this page, do you by any chance ...__ A HA, well, ehm... sorry but I can't talk about it, too many memories, too much emotion.

Sup' [@Clément Ballot](https://fr.linkedin.com/in/clement-ballot), one day i'll remake this website using Processing.