//Auteur: Escatrag
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>
#define MAX_LENGHT_STR 1000

int		main(void);

int gen_random_number(int min, int max)
{
	srand(time(NULL));
	int generated_number = (rand() % (max - min + 1)) + min;
	return (generated_number);
}

void	save_score(int score)
{
	char	player_name[MAX_LENGHT_STR];
	FILE* file_score;

	file_score = NULL;
	printf("Rentre ton pseudo pour quu'il soit sauvegardé: ");
	scanf("%s", player_name);
	file_score = fopen("scores.txt", "a");
	fprintf(file_score, "%s:%d,", player_name, score);
	fclose(file_score);
	main();
}

void	best_scores(void)
{
	char scores_no_splited[MAX_LENGHT_STR];
	char scores_splited[MAX_LENGHT_STR];
	FILE* file_score = NULL;

	file_score = fopen("scores.txt", "r");
	fgets(scores_no_splited, MAX_LENGHT_STR,file_score);
	fclose(file_score);
	char * token = strtok(scores_no_splited, ",");
	while (token != NULL)
	{
		printf("%s\n\n", token);
		token = strtok(NULL, ",");
	}
	main();
}

void	play_alone(int random_number)
{
	int try_counter;
	int userInput;
	int replay;

	try_counter = 1;
	printf("Entrez un nombre: ");
	scanf("%d", &userInput);
	while (userInput != random_number)
	{
		if (userInput < random_number)
			printf("C'est +\n");
		else
			printf("C'est -\n");
		printf("Entrez un nombre: ");
		scanf("%d", &userInput);
		try_counter++;
	}
	printf("Bravo !! C'était bien %d ! Tu as trouvé en %d coups !\n\n", random_number, try_counter);
	save_score(try_counter);
}

void play_two(int random_number)
{
	int try_counter1;
	int try_counter2;
	int winner_score;
	int which_player_is_playing;
	int userInput;

	try_counter1 = 1;
	try_counter2 = 1;
	which_player_is_playing = 1;
	printf("Joueur %d: Entrez un nombre: ", which_player_is_playing);
	scanf("%d", &userInput);
	while (userInput != random_number)
	{
		if (userInput < random_number)
			printf("C'est +\n");
		else
			printf("C'est -\n");
		if (which_player_is_playing == 1)
		{
			try_counter1++;
			winner_score = try_counter1;
			which_player_is_playing++;
		}
		else
		{
			try_counter2++;
			winner_score = try_counter2;
			which_player_is_playing--;
		}
		printf("Joueur %d: Entrez un nombre: ", which_player_is_playing);
		scanf("%d", &userInput);
	}
	printf("Bravo player %d !! C'était bien %d ! Tu as trouvé en %d coups !\n\n",which_player_is_playing, random_number, winner_score);
	save_score(winner_score);
}

void	choose_difficultie(int gamemode)
{
	int		difficultie;
	int		random_number;
	printf("Choisir une difficultée :\n");
	printf("1: Entre 1 et 100\n2: Entre 1 et 1000\n3: Entre 1 et 10000\n");
	printf("Choisir une difficultée: ");
	scanf("%d", &difficultie);
	if (difficultie == 1)
	random_number = gen_random_number(1, 100);
	else if (difficultie == 2)
		random_number = gen_random_number(1, 1000);
	else if (difficultie == 3)
		random_number = gen_random_number(1, 10000);
	if (gamemode==1)
		play_alone(random_number);
	else
		play_two(random_number);
}

int		main(void)
{
	int		choice_menu;
	FILE*	file_score = NULL;
	if ((file_score = fopen("scores.txt", "r")) != NULL)
		fclose(file_score);
	else
	{
		file_score = fopen("scores.txt", "w");
		fclose(file_score);
	}
	printf("=====Jeu du + ou - !=====\n");
	printf("Menu:\n 1: Jouer Seul\n 2: Jouer a deux\n 3: Meilleurs scores\n 4: Sortir d'ici\nEntrez un choix: ");
	scanf("%d", &choice_menu);
	if (choice_menu == 1)
		choose_difficultie(1);
	else if (choice_menu == 2)
		choose_difficultie(2);
	else if (choice_menu == 3)
		best_scores();
	else
		exit(EXIT_SUCCESS);
	return (0);
}
