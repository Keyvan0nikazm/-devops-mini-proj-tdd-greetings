# DevOps Mini-Projet 2
Travail de recherche , mettre en place de l'integration continue avec les GitHub Actions

## Informations
- N° de groupe : 11
- Membres du groupe : Keyvan Nikazm, Eklou Steven, Barry Mamadou


## Énoncé

### Pré-requis :
- Sur base de votre mini-projet 1 (TDD)
- Usage de [JEST](https://jestjs.io/docs/getting-started) obligatoire
- Utilisation pulls requests


### Ajouter ce fichier MD à votre mini-projet-1
Compléter les informations concernant votre numéro de groupe et membres du groupe

### Mettre en place une intégration continue
L'intégration continue doit se composer des étapes obligatoires suivantes (non-exhaustif):

    - Les dépendances doivent être installées
    - Une première étape indiquant l'heure de commencement de la pipeline doit être affichée
    - Le code doit être "formatté" correctement (Prettier)
    - Le code doit être "linté" correctement (Lint)
    - Le code doit être "testé" correctement ET le coverage doit être au-dessus de 80% (Jest)
    - Le code doit être "buildé" correctement
    - Une étape indiquant l'heure de fin de la pipeline doit être affichée
    - Une étape indiquant le string suivant "PIPELINE SUCCESS WITHOUT ERRORS" doit être affichée

### Enclencher l'intégration continue lors d'une Pull Request / Merge Request
Ouvrez une Pull Request / Merge Request 
Lors de l'ouverture et/ou de la modification de votre PR/MR vers la branche principale, l'intégration continue doit s'enclencher et les étapes doivent être respectées.
Merci de laisser une PR / MR ouverte afin que l'on puisse évaluer.


Liens utiles:
[GitHub Actions](https://docs.github.com/fr/actions)
[Jest coverage](https://www.valentinog.com/blog/jest-coverage/)

## Questions

- Décrivez brièvement ce que fait votre fichier YML.  
```bash

< "Le fichier YAML décrit une pipeline d'intégration continue à l'aide de GitHub Actions. La pipeline s'exécute sur les événements de push (sauf sur la branche principale) et de pull request sur la branche principale. Les étapes comprennent la configuration de l'environnement, l'affichage de l'heure de début et de fin, l'installation des dépendances, le formattage du code avec Prettier, le linting du code, les tests avec Jest (avec un seuil de couverture de 80%), la construction du code, et enfin l'affichage d'un message de succès si la pipeline est réussie.">
```
- En particulier : à quoi sert le “on” ? dans votre fichier YML ?  Quelle est la différence entre “on push” et “on pull request”. Que conseilleriez-vous comme option parmi ces 2 options à un groupe de développeurs junior ? Pourquoi ? 
```bash

<"Le 'on' spécifie les événements déclencheurs de la pipeline. 'on push' déclenche la pipeline lorsqu'un commit est poussé (sauf sur la branche principale), tandis que 'on pull_request' déclenche la pipeline lorsqu'une pull request est ouverte ou mise à jour sur la branche principale. Pour les développeurs juniors, il est recommandé d'utiliser 'on pull_request' car cela permet de tester le code avant qu'il ne soit fusionné dans la branche principale, aidant ainsi à détecter les erreurs plus tôt dans le processus de développement.">
```

- Quelle est la différence entre run et run_on ?  Expliquez par rapport à votre pipeline.  
```bash

<"1) runs-on: La clé 'runs-on' est utilisée pour spécifier l'environnement d'exécution global pour toutes les étapes d'une job. Dans votre pipeline, 'runs-on: ubuntu-latest' indique que toutes les étapes de la job s'exécuteront sur une machine virtuelle avec le système d'exploitation Ubuntu de la dernière version disponible.

  2) run: La clé 'run' est utilisée à l'intérieur d'une étape spécifique pour spécifier les commandes à exécuter. Chaque occurrence de la commande 'run' représente une étape individuelle de la job. Dans votre pipeline, chaque bloc - name avec une commande run représente une étape particulière où les commandes spécifiées seront exécutées.

En résumé, 'runs-on' détermine l'environnement global de l'ensemble de la job, tandis que 'run' spécifie les commandes à exécuter à l'intérieur d'une étape spécifique de cette job.">
```

- Quelle est la différence entre “use” et “run”. Expliquez par rapport à votre pipeline. 
```bash
<"Dans le contexte de GitHub Actions, 'uses' est utilisé pour spécifier une action GitHub ou un script personnalisé à exécuter, tandis que 'run' est utilisé pour exécuter une commande directement dans le shell de la machine virtuelle. Dans la pipeline fournie, 'uses' est utilisé pour inclure des actions préexistantes telles que 'actions/checkout' et 'actions/setup-node', tandis que 'run' est utilisé pour les commandes spécifiques à exécuter, comme l'affichage de l'heure, l'installation des dépendances, etc.">
```

- Peut-on intervertir différentes étapes dans votre pipeline ? Que votre réponse soit oui ou non, expliquez par rapport à votre pipeline. 
```bash
<"Oui, les étapes peuvent être réorganisées dans la pipeline, mais cela doit être fait avec précaution. Par exemple, le formattage du code et le linting du code peuvent généralement être intervertis sans problème, car ce sont des tâches indépendantes. Cependant, certaines étapes, comme les tests, doivent être exécutées après le formattage et le linting pour garantir que le code testé est bien formaté et linté.">
```

- Je veux ajouter un test de sécurité sur mon pipeline en exécutant le programme secure_app. Que devrais-je faire ?  Quelles questions devriez-vous vous poser ? 
```bash
<"Pour ajouter un test de sécurité, vous pouvez créer une nouvelle étape dans votre pipeline qui exécute le programme secure_app. Voici ce que vous pouvez faire :

1) Ajoutez une nouvelle étape après les étapes existantes.
2) Utilisez la commande 'run' pour exécuter le programme secure_app.
3) Assurez-vous que les dépendances nécessaires pour exécuter secure_app sont installées dans l'étape appropriée (peut-être dans l'étape 'Installation de npm' si elles sont basées sur Node.js).">