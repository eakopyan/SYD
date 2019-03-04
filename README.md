# Tutoriel Blockchain : de zéro vers ...

## Je valide !

Maintenant que l'on peut vérifier si un block est valide, vérifions que notre Blockchain l'est aussi. Faisons-le ! J'ai rajouté un nouveau fichier `Blockchain.js` et modifié `index.js`. Dans `Blockchain.js`, écrivez la fonction `isValid`. Pour chaque block, elle doit faire deux choses : vérifier que le block est valide et que l'identifiant du block précédent correspond bien.

Bon, vous êtes en mesure de vérifier que la chaîne est valide, bravo !

## Je ne suis pas seul

Maintenant, quand vous utilisez une Blockchain, vous n'êtes pas tout seul. Vous êtes dans une application distribuée avec tous les problèmes qui peuvent être dûs au réseau ou à plusieurs personnes qui créent un block en même temps. Il faut un algorithme pour savoir quels blocks sont ajoutés dans la chaîne. Avez-vous une idée de comment faire ?

La solution s'appelle la preuve de travail. Cette technique consiste à faire dépenser à la personne qui veut ajouter un block beaucoup de puissance de calcul et donc du temps et de l'argent pour avoir une chance aléatoire d'ajouter le block. Le but dans le cas de Bitcoin est d'ajouter un block toutes les 10 min. Cela crée un ordonnancement sur l'ajout des blocks sans tiers de confiance.

## Minons du hash

Comment faire pour qu'un block prenne du temps à ajouter à la chaine ?

Indice : ça a un rapport avec la fonction de hachage.

Les fonctions de hachage comme SHA ont une propriété très intéressante, on ne peut pas prédire l'empreinte qu'une donnée va produire avant d'avoir exécuter la fonction. L'astuce consiste donc à mettre une contrainte sur la forme que doit avoir l'empreinte pour être un identifiant valide de block. Par exemple, on peut contraindre l'empreinte à avoir 5 zéros au début.

Maintenant, il faut trouver une empreinte qui commence par 5 zéros pour que ce soit un identifiant valide. Oui mais l'empreinte de mes blocks n'a pas 5 zéros, comment je fais pour produire une nouvelle empreinte ?

Indice : c'est une question de bruit.

On rajoute du bruit tout simplement ! Pour cela, on ajoute au block un élément appelé `nonce` initialisé à 0 et incrémenté de 1 après chaque essai invalide. Cette opération de recherche d'un hash valide s'appelle le minage.

Dans la class Block, ajoutez une propriété `nonce` et une fonction `miner` qui prend en paramètre le nombre de zéros qu'il faut en début d'empreinte. N'oubliez pas de modifier la fonction `getHash` pour qu'elle prenne en compte le `nonce`. Et je suis sympa, je vous donne le lien vers deux fonctions utiles en JS :

* repeat : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/repeat
* startsWith : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/startsWith

Modifiez `index.js` pour miner les trois premiers blocks avec une difficulté de 5.

Ça met un peu de temps ? Parfait ! Sinon augmentez la difficulté.

Modifier la fonction de vérification pour qu'elle vérifie que la difficulté est bien respectée.

Maintenant, votre Blockchain est beaucoup plus difficile à attaquer !

## Trouvons le bon rythme

Une difficulté de 5, c'est bien mais ça semble un peu arbitraire comme valeur. Pour notre blockchain, j'aimerai qu'il y ai un block toutes les 10 secondes qui soit ajouté à la blockchain. Autre contrainte, si tous les participants ont la même puissance de calcule, que le participant soit tiré aléatoirement.

J'ai ajouté un fichier `rythme.js` qui contient un code permettant de simuler une blockchain avec 5 participants ayant la même puissance de calcule. Essayer de comprendre ce que fait ce code. Vérifier que votre code fonctionne correctement en exécutant le fichier : `node rythme.js`.

###### Observez la simulation. Que pouvez-vous dire sur le temps de calcule d'un block ?

###### Essayez de changer la difficulté, que ce passe-t'il sur le temps de calcule ?

###### Quand vous exécutez `index.js` combien de temps il faut pour miner un block ? Y-a-t'il une différence ? Pourquoi ?

###### Sur votre machine, quelle est la bonne valeur de la difficulté ?

## Suite

Mettre du texte, c'est bien. Échanger de la valeur, c'est mieux : `git checkout etape-3`.
