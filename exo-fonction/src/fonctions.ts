//Exercice 1
console.log("\nEXERCICE UN\n");

function additionDepenses(a: number, b: number) : number {
  return a + b ;
};

console.log("la somme est de: " + additionDepenses(3, 6) + "€");
// console.log("la somme est de: " + additionDepenses(3, "6") + "€");

function toKilometers(v: number | `${number}km`): string {
  return typeof v === "number" ? `${v}km` : v; 
};

console.log("la vitesse est de: " + toKilometers(250));
console.log("la vitesse est de: " + toKilometers("350km"));

function totalPanier(...prix: number[]): number {
  return prix.reduce((total, prix) => total + prix, 0);
};

console.log("le total du panier est de:", totalPanier());
console.log("le total du panier est de:", totalPanier(10, 20, 5));

//Exercice 2

console.log("\nEXERCICE DEUX\n");

function saluer (prenom = "Anonyme"): string {
  return `Bonjour, ${prenom} !`;
};

console.log(saluer());
console.log(saluer("Benoit"));
console.log(saluer("<prenom>"));

function prixTTC(prixHT: number, tauxTVA: number = 0.2): number {
  return prixHT * (1 + tauxTVA);
};

console.log("prix TTC: " + prixTTC(10)); 
console.log("prix TTC: " + prixTTC(10, 0.5));

function ajouterPourboire(total: number, tip?: number): number {
  return total + (tip ?? 0);
};

console.log("Je suis radin: " + ajouterPourboire(50) + "€");
console.log("Je suis toujours radin: " + ajouterPourboire(50, 0) + "€");
console.log("Je suis généreux avec le serveur: ", ajouterPourboire(50, 5)+ "€");

function formatContact(opts: { nom?: string; ville?: string }): string {
  const { nom = "Inconnu", ville = "N/A" } = opts;
  return `${nom} — ${ville}`;
};

console.log("fonction formatContact vide: " + formatContact({}));
console.log("fonction formatContact juste le nom: " + formatContact({nom: "Benoit"}));
console.log("fonction formatContact juste la ville: " + formatContact({ville: "Lille"})); 
console.log("fonction formatContact complète: " + formatContact({nom: "Benoit", ville: "Lille"}));

//Exercice 3

console.log("\nEXERCICE TROIS\n");

const arrondirAuCentime = function (n: number): number {
  return Math.round(n * 100) / 100;
};

console.log("J'arrondi pi:" + arrondirAuCentime(3.14159));

const appliquerReduction = (prix: number): number => prix * 0.9;

console.log("Application d'une reduction de 10% sur un produit à 100€ et ça donne " + appliquerReduction(100) + "€"); 


const upperProduits = (liste: string[]): string[] => liste.map(produit => produit.toUpperCase());

console.log("J'hurle les produits: " + upperProduits(["café", "pain"]));


const creerContact = (nom: string): { id: string; nom: string } => ({
  id: Date.now().toString(),
  nom
});

console.log("Oh Marie, si tu savais ...", creerContact("Marie")); 

//Exercice 4

console.log("\nEXERCICE QUATRE\n");

const podometre = {
  pas: 0,
  increment(): void {this.pas++;},
  reset(): void {this.pas = 0;},
  incrementArrow: (() => {let pasSimule = 0; return (): number => {pasSimule++; return pasSimule;};})()
};

/* Explication: ouais ouais ouais ! je dirais que les fonctions fléchées n'ont pas leur propre "this".
C'est surement une histoire de contexte et de dynamisme. */

//Exercice 5

console.log("\nEXERCICE CINQ\n");

function logAction(message: string): void {
  console.log(`Action: ${message}`);
}

logAction("sortie courir 5km"); 

function erreurFatale(message: string): never {
  throw new Error(`Erreur fatale de la mort qui tue: ${message}`);
}

try {
  erreurFatale("Données corrompues");
} catch (e) {
  console.log("ALERTE UNE ERREUR !!!", (e as Error).message);
}

async function getMeteo(ville: string): Promise<{ ville: string; degres: number }> {
  return Promise.resolve({ ville, degres: 21 });
}

getMeteo("Lyon").then(result => {
  console.log("JE SUIS DE L'EXO 5 (et je me suis perdu à la fin des exo a cause de l'async) Météo async:", result);
});

//"`getMeteo("Lyon")` doit fournir un objet typé (pas de `any`)." A mon plus grand regret pour le any :p 

//Exercice 6

console.log("\nEXERCICE SIX\n");

type Critere<T> = (v: T) => boolean;

function filtrer<T>(arr: T[], crit: Critere<T>): T[] {
  const resultat: T[] = [];
  for (const element of arr) {
    if (crit(element)) {
      resultat.push(element);
    }
  }
  return resultat;
}

function depenseEstGrande(n: number): boolean {
  return n >= 100;
}

function minLongueur(min: number): (s: string) => boolean {
  return (s: string) => s.length >= min;
}

console.log("un bordel à tester mais doit rester que 120", filtrer([50, 120, 30], depenseEstGrande));
console.log("un bordel à tester mais doit rester que épicerie", filtrer(["café", "épicerie"], minLongueur(7))); // ["épicerie"]


//Exercice 7

console.log("\nEXERCICE SEPT\n");

interface Transformeur {
  (v: string): string;
  locale?: string;
}

const titreCase: Transformeur = (s: string) => {
  return s
    .split(" ")
    .map(mot => mot.charAt(0).toLocaleUpperCase(titreCase.locale ?? "fr-FR") + mot.slice(1))
    .join(" ");
};

titreCase.locale = "fr-FR";

function appliquerTransformeur(textes: string[], t: Transformeur): string[] {
  return textes.map(texte => t(texte));
}

console.log("Je mets des maj à chaque première lettre " + titreCase("bonjour le monde"));
console.log("Je teste le locale " + titreCase.locale);
console.log("Bon là je mets des majuscule sur plusieurs mots comme: " + appliquerTransformeur(["la plage", "le marché"], titreCase));

//Exercice 8

console.log("\nEXERCICE HUIT\n");

function convertirHeure(hhmm: string): number;
function convertirHeure(minutes: number): string;
function convertirHeure(v: number | string): number | string {
  if (typeof v === "string") {
    const [hhStr = "", mmStr = ""] = v.split(":");
    let heures = parseInt(hhStr, 10);
    let minutes = parseInt(mmStr, 10);

    if (isNaN(heures) || heures < 0 || heures > 23) heures = 0;
    if (isNaN(minutes) || minutes < 0 || minutes > 59) minutes = 0;

    return heures * 60 + minutes;
  } else {
    let totalMinutes = Math.floor(v);
    if (totalMinutes < 0) totalMinutes = 0;

    const heures = Math.floor(totalMinutes / 60) % 24;
    const minutes = totalMinutes % 60;

    return `${heures.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  }
};

console.log(convertirHeure("13:45"));
console.log(convertirHeure(825));

console.log(convertirHeure("07:05"));
console.log(convertirHeure(425));

console.log(convertirHeure("25:99"));
console.log(convertirHeure(-10));  

//Exercice 9

console.log("\nEXERCICE NEUF\n");

type Tache = { 
  id: string; 
  titre: string; 
  faite: boolean; 
  priorite?: 1|2|3|4|5 
};

function creerTache(titre: string, priorite: 1|2|3|4|5 = 3): Tache {
  return {
    id: crypto.randomUUID(),
    titre,
    faite: false,
    priorite
  };
}

function majTache(
  t: Tache,
  maj: { titre?: string; faite?: boolean; priorite?: 1 | 2 | 3 | 4 | 5 } = {}
): Tache {
  return {
    ...t,
    ...maj,
  };
}

function basculerFaite(t: Tache): Tache {
  return {
    ...t,
    faite: !t.faite,
  };
}

function statTaches(ts: Tache[]): { total: number; faites: number; restantes: number } {
  const total = ts.length;
  const faites = ts.filter(t => t.faite).length;
  const restantes = total - faites;
  return { total, faites, restantes };
}

const tache1 = creerTache("Je suis un test");
const tache2 = creerTache("Je ne sais pas", 5);

const tache1Faite = basculerFaite(tache1);
const tache2Maj = majTache(tache2, { titre: "Je ne sais toujours pas", priorite: 4 });

console.log(tache1, tache2, tache1Faite, tache2Maj);
console.log(statTaches([tache1Faite, tache2Maj]));

//Exercice 10

console.log("\nEXERCICE DIX\n");
/* 1 - "Strict"
- C'est le mode dictature de Typescript, il laisse rien passer. Aucun changement pour moi, il était activé de base

2 - "noImplicitOverride"
- Le seul qui n'était pas activé de base, mais aucun changement après son activation visiblement. 
Mais sert à utiliser le mot clé override pour la surcharge de méthode

3 - "noUncheckedIndexedAccess"
- activé de base aussi. ça force à vérifier si la propriété existe avant son utlisation.

4 - "exactOptionalPropertyTypes"
- activé de base. ça différencie les propriété optionnelles des valeurs undifined si je me trompe pas. 
*/
