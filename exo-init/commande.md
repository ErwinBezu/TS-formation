## 1) Mise en place du projet

```bash
npm init -y
npm install -D typescript
```

## 2) Utilisation de `npx`

```bash
npx tsc --init
npx tsc
node dist/index.js
```

## 3) Nettoyage avec `rimraf`

```bash
npm install -D rimraf
npm run clean
```

## 4) Questions de réflexion

### Pourquoi installer TypeScript comme dépendance de développement ?

Typescript n'est là que pendant le développement afin de compiler. Le code final est exécuté en JS donc pas besoin de TS en prod.

### Quelle est l'utilité de `npx` ?

npx permet le contrôle du projet localement sans installation globale. ça évite aussi les conflits entre les différents projets.

### Pourquoi ne pas utiliser `rm -rf` ?

rm -rf n'existe pas sur windows alors que rimraf permet d'être utilisé sur tout les OS donc pour une équipe de dev qui bosse sur différent OS ça permet de ne pas avoir de problème de ce côté là et d'avoir tous le même fonctionnement.

## 5) Challenge bonus

```bash
npm install -D ts-node
npm run dev
```
