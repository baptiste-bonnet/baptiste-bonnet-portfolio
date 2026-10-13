# Portfolio — Baptiste Bonnet

Portfolio Data Scientist, Machine Learning et MLOps.

## Contenu

- quatre projets sélectionnés ;
- projet personnel AgriTrust ;
- rapport d'audit AgriTrust ;
- carte conceptuelle du parcours ;
- compétences, autoévaluation et axes d'amélioration.

## Publication avec GitHub Pages

Créer sur GitHub un dépôt public vide nommé exactement :

```text
baptiste-bonnet-portfolio
```

Ne pas ajouter automatiquement de README, de licence ou de `.gitignore` lors de
la création, puisque ces fichiers sont déjà présents ici.

Depuis Git Bash, dans ce dossier :

```bash
git init
git add .
git commit -m "feat: publish data portfolio"
git branch -M main
git remote add origin https://github.com/baptiste-bonnet/baptiste-bonnet-portfolio.git
git push -u origin main
```

Puis, sur GitHub :

1. ouvrir `Settings` ;
2. ouvrir `Pages` ;
3. dans `Build and deployment`, choisir `Deploy from a branch` ;
4. sélectionner la branche `main` et le dossier `/(root)` ;
5. cliquer sur `Save`.

Après quelques minutes, le portfolio sera disponible à l'adresse :

```text
https://baptiste-bonnet.github.io/baptiste-bonnet-portfolio/
```

## Vérification locale facultative

```bash
python -m http.server 8000
```

Ouvrir ensuite <http://localhost:8000>.
