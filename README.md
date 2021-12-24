# Introduction
Ce projet a été réalisé dans le cadre d'un test technique. J'ai intégré le composant tooltip demandé dans une app pour pouvoir le tester.

## Installation
Pour le tester sur votre ordinateur:
- cloner le repository
- ```cd tooltip-unkle```
- ```npm install```
- puis ```npm start``` pour démarrer l'app

## Difficultés
Malgré mes nombreuses tentatives, je n'arrive pas à faire en sorte que le tooltip se positionne correctement. Il fait bouger l'élément auquel il est lié (l'input, le texte...), je n'ai pas réussi à maintenir celui-ci à sa place. Vous pourrez voir que j'ai essayé de récupérer la position de l'élément auquel le tooltip est lié avec .getBoundingClientRect() mais bien que ça récupère les bonnes informations, ça ne se place pas là où je le voudrais. J'ai essayé avec une grid mais ce n'est pas mieux.

## Alternatives
Ce serait peut-être plus efficace avec styled-components, comme je l'ai vu dans certains tutoriels, mais je n'ai que des bases pour le moment et j'ai préféré m'en tenir à ce que je connais.