## Exercice 1 — QCM rapides

1- b
2- b
3- b

## Exercice 2 — Typage explicite vs inférence

```ts
let prenom = "Alice";
let age: number;

age = 30; // c'est bon
age = "trente"; // c'est pas bon
```

## Exercice 3 — Erreurs de typage

```ts
let actif: boolean = true;
actif = "oui"; // ❌

let valeur: number;
valeur = 10;
valeur = "texte"; // ❌ devrait être interdit
```

## Exercice 4 — Null et Undefined

null n'est pas assignable à un string

```ts
let message: string | null = null;
```

## Exercice 5 — Fonctions

```ts
function bonjour(nom: string): string {
  return "Bonjour " + nom.toUpperCase();
}
```

## Exercice 6 — Bonus (réflexion)

le premier avec const ne pourra jamais changer alors que le second on pourra toujours faire pi2=3.14159265359
