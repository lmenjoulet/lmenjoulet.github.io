---

layout: ../../layouts/MarkdownLayout.astro
title: Loup Menjoulet
description: Loup Menjoulet page accueil site personnel
draft: false

---

## Bienvenue !

Ce site est un petit projet personnel de développement web. Bien que cela n'ait pas été développé dans ma formation, un petit peu de pratique dans ce domaine ne fait de mal. 
Actuellement étudiant à l'ESIREM Dijon dans le but d'obtenir un diplôme en sécurité et qualité des réseaux (4ème année sur 5), mes centres d'intérêts dans le domaine sont la cybersécurité (j'héberge un relai tor intermédiaire [@section9lair.tk](https://metrics.torproject.org/rs.html#details/A7572A5090591E3D7E8027F34F5DF05756EFFE89)), et les environnements réseau et backend immuables et reproductibles (trop de mauvaises anecdotes de fichiers de configuration éparpillés rendant des migrations de sites ou de services impossibles alors que je suis à peine étudiant). Oui le DevOps m'intéresse, j'utilise [NixOS](https://nixos.org) en système d'exploitation pour les serveurs que j'héberge, et [Docker](https://docker.com) sur des applications spécifiques.

## Et ce site alors ?

La création de ce site étant un challenge personnel, quelques contraintes et objectifs techniques ont été choisis :

* __Pas de rendu côté client.__
	Il ne manquerait plus qu'on ne trouve pas ce site en tapant mon nom sur Google ou qu'il mette 30 secondes à charger. SSR Oblige, je dois soit créer un site statique, soit utiliser des serveurs gérant le SSR. Exit React ou Svelte nature, Next.js ou SvelteKit minimum.

* __Minimum un nouvel outil d'appris.__
	Le terme 'outil' est un peu vague, mais disons que remplacer Rollup par Snowpack pour bundler le JavaScript n'est pas suffisant, il faut que ce changement affecte le code que je produis.

Ca n'est pas un cahier des charges bien épais, mais bon je m'amuse, je ne fais pas ce projet sous la contrainte, je le jure.

Une première version de ce site avait été réalisée avec le framework [SvelteKit](https://kit.svelte.dev/), parce que j'avais bien aimé Svelte de base, mais j'ai rapidement abandonné cette idée pour une raison simple :

* __Pourquoi avoir besoin d'un backend ?__ Je veux dire, les quelques pages que mon site maigrichon auront à montrer pourront bien être rendues statiquement, non ? En plus un serveur NodeJS qui tourne consomme plus de ressources qu'un NGINX ou un Apache, pour pas grand chose dans mon cas, et on ne peut pas l'héberger n'importe ou contrairement à deux ou trois fichiers HTML (techniquement un serveur NGINX est un backend mais ne pinaillons pas).

Je me suis rapidement remis de ma déconfiture en découvrant [Astro](https://astro.build), un framework permettant de générer des sites statiques en pouvant utiliser plusieurs frameworks simultanément (On peut mélanger des composants React, Vue, Svelte, Angular, etc...). C'est sur ce framework qu'est bâti le site qui se présente devant vous, et vu que les chiffres ne mentent pas (enfin, pas trop) je vous invite à lancer [Chrome lighthouse](https://developers.google.com/web/tools/lighthouse#devtools) si vous êtes sur un navigateur basé sur Chromium. En plus de ça, j'utilise [Tailwind css](https://tailwindcss.com/) pour l'apparence du site, je l'ai d'ailleurs découvert avec plaisir à cette occasion.

Mon tech-stack complet pour ce projet est donc __AST__ :

* __A__ stro 
* __S__ velte
* __T__ ailwind CSS

Il me manque le __R__ et le __O__ pour avoir un acronyme récursif et ainsi révolutionner le milieu des développeurs web ( le meilleur acronyme de stack gagne toujours).
__R__ pour Redis peut-être 🤔? Je sèche pour le O. De toute manière c'est un projet fait pour le plaisir, il pourra être étendu selon les envies.

## F.A.Q

Bon j'ai imaginé quelques questions qui fâchent dans ma tête, voilà voilà.

* __Combien de temps pour faire le site ?__ Environ 3h pour structure de base, j'ai du apprendre Tailwind sur le tas. Le remplissage des pages à pris plus de temps que je n'accepte d'admettre par contre, je ne sais pas écrire. Les pages sont rédigées en markdown au passage.

* __Des tas de technologies sont mentionnées, lesquelles sont maîtrisées dans le tas ?__ Euh, pas React, sincèrement désolé, j'aurais du faire plus m'y intéresser vu l'importance qu'il prend aujourd'hui pour construire des front-end, mais j'ai pêché par paresse et Svelte est trop confortable.

* __Il n'est fait nulle part la mention de PHP sur cette page, est-ce que...__ A HA, euh, enfin... désolé mais je ne peux pas en parler, trop de souvenirs, trop d'émotions.


Spéciale dédicace [@Clément Ballot](https://fr.linkedin.com/in/clement-ballot), un jour je referais ce site sous Processing.





