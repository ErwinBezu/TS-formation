# Exercices - Tableaux, Tuples, Enums

## Exercice 1: Tableaux simples

```ts
let nombres: number[] = [10, 20, 30];
nombres.push(40);
nombres.push("cinquante"); // pas bon c'est pas un number

for (const nombre of nombres) {
  console.log(`${nombre}² = ${nombre * nombre}`);
}
```

## Exercice 2: Tableaux avec unions

```ts
let mixte: (number | string)[] = [];
mixte.push(1);
mixte.push("deux");
mixte.push(3);

for (const element of elements) {
  if (typeof element === "number") {
    console.log(`nombre : ${element}`);
  } else {
    console.log(`texte : ${element}`);
  }
}
```

## Exercice 3: Tuples

```ts
let utilisateur: [number, string, boolean];

utilisateur = [1, "Alice", true];

utilisateur = [true, 1, "Alice"]; //ça ne fonctionne pas

function afficherUtilisateur(utilisateur: [number, string, boolean]): void {
  const [id, nom, actif] = utilisateur;
  console.log(`ID: ${id}, Nom: ${nom}, Actif: ${actif}`);
}

afficherUtilisateur(utilisateur);
```

## Exercice 4: Fonctions et tuples

```ts
function calculerStats(nombres: number[]): [number, number, number] {
  const min = Math.min(...nombres);
  const max = Math.max(...nombres);
  const moyenne = nombres.reduce((a, b) => a + b, 0) / nombres.length;
  return [min, max, moyenne];
}

const [min, max, moyenne] = calculerStats([3, 7, 10, 2, 8]);
console.log(`Min = ${min}, Max = ${max}, Moyenne = ${moyenne}`);
```

## Exercice 5: Enums numériques

```ts
enum Niveau {
  Debutant,
  Intermediaire,
  Avance,
}

let niveauActuel: Niveau = Niveau.Intermediaire;

console.log(niveauActuel); // Affiche 1
console.log(Niveau[niveauActuel]);
```

## Exercice 6: Enums de chaînes

```ts
enum Statut {
  TODO = "TODO",
  EN_COURS = "EN_COURS",
  TERMINE = "TERMINE",
}

let tache: { titre: string; statut: Statut } = {
  titre: "Apprendre TypeScript",
  statut: Statut.TODO,
};

tache.statut = Statut.TERMINE;

console.log(`Tâche: ${tache.titre} [${tache.statut}]`);
```

## Exercice 7: Mini-projet

```ts
enum StatutTache {
  TODO = "TODO",
  EN_COURS = "EN_COURS",
  TERMINE = "TERMINE",
}

type Tache = {
  id: number;
  titre: string;
  statut: StatutTache;
};

const taches: Tache[] = [
  { id: 1, titre: "Ne plus utiliser any de partout", statut: StatutTache.TODO },
  { id: 2, titre: "Ne pas s'endormir", statut: StatutTache.EN_COURS },
  { id: 3, titre: "Arrêter de traumatiser Benoit", statut: StatutTache.TODO },
];

function afficherTachesParStatut(statut: StatutTache): void {
  const tachesFiltrees = taches.filter((tache) => tache.statut === statut);

  if (tachesFiltrees.length === 0) {
    console.log(
      "Aucune tache trouvé pour ce statut, sauf celle ... oh wait c'est pas gentil !"
    );
    return;
  }
  tachesFiltrees.forEach((tache) => {
    console.log(`ID : ${tache.id} ${tache.titre}`);
  });
}

afficherTachesParStatut(StatutTache.TODO);
afficherTachesParStatut(StatutTache.TERMINE);
```
