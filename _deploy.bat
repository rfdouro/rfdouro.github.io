if exist .git\ (
 echo Ok
) else (
 git init
)

call npm run build

@echo off
set /p messComit=Qual a mensagem de commit?: 
echo ok %dmessComit%

git add -A
git commit -m "codigo: PUSH %messComit%"
git push -f https://<TOKEN>@github.com/<USER>/<REPO>.git master

::vai até o diretório de saída
cd src/.vuepress/dist

git init
git add -A
git commit -m "codigo: PUSH %messComit%"
git push -f https://<TOKEN>@github.com/<USER>/<REPO>.git master:gh-pages

cd ..
cd ..
cd ..


