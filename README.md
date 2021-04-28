# Vaccine-app
---
## Style
Je me suis lancé comme défi de ne pas utiliser Bootstrap. Le style site a été construit en bonne partie *from scratch* à l'aide de quelques *components* d'Angular Material. Inspiré du TP1, le thème employé par Angular Material, dont les couleurs sont reprises partout dans le site, est entièrement personnalisé. Vous trouverez mon fichier de configuration `theme.scss` dans le dossier `/styles`.

Vous remarquerez la présence du module Angular Flex Layout. Je croyais initialement en avoir besoin pour remplacer le système de grille de Bootstrap, mais il n'a finalement été que peu utilisé.

### Adaptabilité
L'adaptabilité du site a été testé pour les écrans allant jusqu'à 360 pixels de large, ce qui correspond à la largeur d'un Moto G4. J'ai cru à tort qu'il s'agissait du plus petit format proposé par Chrome. Le iPhone 5 et le Galaxy Fold ont une navigation encore plus mince. Il est clair que, dans le monde réel, il faudrait prendre des décisions sur les appareils à cibler ainsi que les éléments à garder/modifier pour chacun d'eux.

## Navigation
Le logo de l'Hôpital Doux-Jésus dans la bar de navigation sert comme lien pour la page d'accueil. Cela me semblait être une approche plus conviviale pour l'utilisateur. En parlant du menu, la version bureau du menu principal a un effet *hover* lorsque l'on position son curseur sur un de ses élément. Cet effet a été programmé entièrement en TypeScript. J'avais envie d'un peu plus de fluidité. Inutile de dire que ça m'a pris beaucoup (trop) de temps.

## Contenu
Tel qu'autorisé par Johnny, j'ai ajouté un champs au formulaire de la page Vaccin. Vous verrez qu'il y a également quelques titres et paragraphes en plus. Tout cela a été fait dans le but de donner une touche de vraisemblabilité supplémentaire en rendant le site moins vide.

## Structure 
Quelques précisions: 
- Par soucis d'uniformité, j'ai mis le fichier `resultat.json` dans le dossier `assets/data/`
- Sur le même ordre d'idées, les fichiers de style générique sont contenus dans `/styles`
- La configuration a été faite de sorte qu'il est possible d'importer les variables d'un fichier `.scss` générique dans chaque feuille de style à l'aide de la ligne `@import "monFichier";`
- Tous les module d'Angular Material sont importés globalement par l'entremise du fichier `custom-material.module`

## Données
Le fichier `resultat.json` a été généré avec des noms de 100 localité en anglais. Ils ne sont pas traduits en français car cela aurait été contre-productif étant donné que ce n'est pas une exigeance pour le travail et que l'on utiliserait une base de données dans le monde réel.

## Programmation
La fonction `getTopEnfant()` fonctionne bien. Vous pouvez le tester en mettant le total de deux localités au même maximum.

Le carousel est lui aussi fait maison. L'apparition de ses éléments est dynamiquement générée avec une boucle `*ngFor`. C'est grâce à `$localize` qu'il a été possible de traduire ses données.

## i18n
J'ai opté d'ajouter la localité au langage de traduction par soucis d'extensibilité. Comme ça, advenant que l'Hôpital Doux-Jésus rayonne à l'international, le premier pas en terme de localité aura été fait. Les deux langues disponibles pour le site sont donc fr-CA (par défaut) et en-CA

Sujet à part, je n'ai pas trouvé la page du cours en version anglaise sur le site de l'UQAM.


