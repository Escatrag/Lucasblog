#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#define TAILLE_MAX 30
#include <ctype.h>
#include <string.h>
/*
Lien de l'exercice: https://openclassrooms.com/courses/19980-apprenez-a-programmer-en-c/16828-tp-realisation-dun-pendu
*/

int jeu(char motChoisi[]);

int jaigagner(char motADecouvrir[], int longueurMot)
{
    int nbrEtoiles = 0;
    for (int i=0; i<longueurMot; i++)
    {
        if (motADecouvrir[i] == '*')
        {
            nbrEtoiles ++;
        }
    }
    if (nbrEtoiles == 0)
    {
        return 0;
    }
    else
    {
        return 1;
    }

}

void lireLigne(int nbrAleat)
{
    int nbrLigne;
    char motChoisi[TAILLE_MAX];
    FILE* dico = NULL;
    dico = fopen("dico.txt", "r");
    if (dico != NULL)
    {
        char caractereLu = fgetc(dico);
        /*
        On parcours le fichier texte pour atteindrela ligne choisie aleatoirement
        */
        for (nbrLigne = 0; nbrLigne < nbrAleat;)
        {
            caractereLu = fgetc(dico);
            if (caractereLu == '\n')
            {
                nbrLigne += 1;
            }
        }
        fgets(motChoisi, TAILLE_MAX, dico);
        jeu(motChoisi);
        fclose(dico);
    }
    else
    {
        /*
        Si on arrive pas a lire le fichier
        */
        printf("Erreur lors de l'ouverture du fichier dico.txt \n");
    }
}

int lireFichier()
{
    int nbrLigneDico = 0;
    /*
    On initialise l'ouverture du fichier
    */
    FILE* dico = NULL;
    dico = fopen("dico.txt", "r");
    if (dico != NULL)
    {
        printf("Lecture du fichier... \n \n");
        char caractereLu = fgetc(dico);
        /*
        On parcours le fichier texte pour en compter toutes les lignes
        */
        while (caractereLu != EOF)
        {
            caractereLu = fgetc(dico);
            if (caractereLu == '\n')
            {
                nbrLigneDico += 1;
            }
        }
        return nbrLigneDico;
        fclose(dico);
    }
    else
    {
        /*
        Si on arrive pas a lire le fichier
        */
        printf("Erreur lors de l'ouverture du fichier dico.txt \n");
    }
    return 0;
}

char choisirMot()
{
    srand(time(NULL));
    int nbrAleat;
    int nbrLigneDico = lireFichier();

    for(int i=0; i<5; i++)
    {
        nbrAleat = rand()%(nbrLigneDico-1) +1;
    }
    lireLigne(nbrAleat);
    return 0;
}

char lireCaractere()
{
    char caractere = 0;
    caractere = getchar(); // On lit le premier caractère
    caractere = tolower(caractere); // On met la lettre en majuscule si elle ne l'est pas déjà
    // On lit les autres caractères mémorisés un à un jusqu'au \n (pour les effacer)
    while (getchar() != '\n') ;
    return caractere; // On retourne le premier caractère qu'on a lu
}

int jeu(char motChoisi[])
{
    int jeu = 0;
    /*
    Si on retire 1, c'est car il compte le retour a la ligne comme un caractere
    */
    int longueurMot = strlen(motChoisi) -1;
    int nbrCoupsrestants = 10;
    char maLettre;
    char motAdecouvrir[longueurMot];
    for (int i=0; i<longueurMot;i++)
    {
        motAdecouvrir[i] = '*';
    }

    while (jeu == 0) {
        printf("Il vous reste %d coups restants !\n", nbrCoupsrestants);
        printf("Quel est le mot secret ? ");
        for(int i=0; i<longueurMot; i++)
        {
            printf("%c", motAdecouvrir[i]);
        }
        printf("\n");
        maLettre = lireCaractere();
        printf("Lettre selectionnée: %c \n\n", maLettre);
        int occurence;
        /*
        On verifie si la lettre est dans le mot
        */
        for (int e = 0; e<longueurMot; e++)
        {
            if (maLettre == motChoisi[e])
            {
                occurence = 1;
                motAdecouvrir[e] = maLettre;
            }
        }
        if (occurence == 0)
        {
            if (nbrCoupsrestants <= 0 )
            {
                jeu = 2;
            }
            else
            {
                nbrCoupsrestants --;
            }
        }
        if (occurence == 1)
        {
            occurence = 0;
        }
        if (jaigagner(motAdecouvrir, longueurMot) == 0)
        {
            jeu = 1;
        }
    }
    if (jeu == 1)
    {
        printf("Bravo, vous avez gagné ! Le mot était bien: %s ", motChoisi);
    }
    else
    {
        printf("Loose, perduuuuuu, le mot était: %s", motChoisi);
    }
    return 0;
}

int main()
{
    printf("Bienvenue dans le pendu ! \n");
    printf("Tirage au sort d'un mot.... \n");
    choisirMot();
    return 0;
}
