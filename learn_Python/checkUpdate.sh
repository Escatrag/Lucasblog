#!/bin/bash
version=$(sed '' version.txt)
if [ -f 'lastversion.txt' ]
then
	rm -f lastversion.txt
fi
wget -q lucasblog.net23.net/cours_python/lastversion.txt
lastversion=$(sed '' lastversion.txt)
if [ ${lastversion} -gt ${version} ]
then
	echo "Nouvelle version trouvée, voulez vous télécharger ? Y/N"
	read choixTelechargement
	if [ ${choixTelechargement} == "Y" ]||[ ${choixTelechargement} == "y" ]
	then
		wget -Pq /home/$USER lucasblog.net23.net/cours_python/cours_python.$lastversion.py
		echo "Téléchargement terminé"
		echo "Mise en place de la nouvelle version..."
		rm -f cours_python.$version.py
		mv /home/cours_python.$lastversion.py $pwd
		echo "Mise a jour installée, lancement"
		$version = $lastversion
	else
		echo "Abandon, lancement"
	fi
	rm -f lastversion.txt
	echo "0" > update.txt
	python3 cours_python.$version.py
else
	rm -f lastversion.txt
	echo "0" > update.txt
	python3 cours_python.$version.py
fi
