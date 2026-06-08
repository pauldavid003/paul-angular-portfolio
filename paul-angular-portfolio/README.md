# Paul David Panthagani - Angular Portfolio

Angular portfolio website inspired by the reference structure: Home, About, Professional Experience, Portfolio, and Contact.

## Run locally
```bash
npm install
npm start
```
Open `http://localhost:4200`.

## Build
```bash
npm run build
```

## Push to GitHub
```bash
git init
git add .
git commit -m "Initial Angular portfolio website"
git branch -M main
git remote add origin https://github.com/<your-username>/paul-angular-portfolio.git
git push -u origin main
```

## Deploy to GitHub Pages
```bash
npm install -g angular-cli-ghpages
ng build --configuration production --base-href=/paul-angular-portfolio/
npx angular-cli-ghpages --dir=dist/paul-angular-portfolio/browser
```
