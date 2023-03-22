# Docker a Express
V tomto repositáři najdete kód, který s pomocí aplikace Docker a webovým JS frameworkem Express vytvoří webovou stránku.

![Snímek obrazovky 2023-03-22 190604](https://user-images.githubusercontent.com/92738343/227000652-7421db39-cf56-4421-8a10-8385e7c3c3b4.png)

Docker, container a image sprovozníme pomocí několika kroků. 

## Instalace Docker

https://www.docker.com/

![Snímek obrazovky 2023-03-22 175708](https://user-images.githubusercontent.com/92738343/227002223-dbe7b3ad-a60c-4eb0-b990-18bbd4c90b86.png)

![Snímek obrazovky 2023-03-22 192929](https://user-images.githubusercontent.com/92738343/227003025-5884b8eb-8885-47bc-ab3e-d95c060a2924.png)

![Snímek obrazovky 2023-03-22 193012](https://user-images.githubusercontent.com/92738343/227003038-69187c33-7316-4b95-9c2b-e9c14f2509ee.png)

![Snímek obrazovky 2023-03-22 183037](https://user-images.githubusercontent.com/92738343/227003063-56abc75c-e233-4ea5-806a-845494ae9ccb.png)

![Snímek obrazovky 2023-03-22 182223](https://user-images.githubusercontent.com/92738343/227003206-266a7d57-660c-4d33-b8a7-af049552f6f9.png)

![Snímek obrazovky 2023-03-22 183055](https://user-images.githubusercontent.com/92738343/227003236-c735d215-a637-4fdb-9fb5-ca20478bd11c.png)

![Snímek obrazovky 2023-03-22 181925](https://user-images.githubusercontent.com/92738343/227003309-e6d22788-1c0c-4f14-8abc-4826c6d05384.png)

![Snímek obrazovky 2023-03-22 182011](https://user-images.githubusercontent.com/92738343/227003318-9d990b63-0186-4735-ae06-65a1db874f6b.png)

Poté otevřeme samotný container ve VSCode.

## Visual Studio Code

Zde pomocí příkazu `npm init` nainstalujeme `package.json`, poté pomocí `npm install express` nainstalujeme samotné moduly:
1. node_modules
2. package-lock.json 

Následně vytvoříme server.js ("můžete si tento soubor pojmenovat jak chcete") a napíšeme tento kód:

![Snímek obrazovky 2023-03-22 193806](https://user-images.githubusercontent.com/92738343/227004823-aec180da-6a63-410b-92b2-91e4a8f5330b.png)

Na obrázku můžete vydět že využívám mimo expressu také "ejs" což je šablonovací framework pro JS.
Samotný ejs soubor vypadá následovně:

![Snímek obrazovky 2023-03-22 194204](https://user-images.githubusercontent.com/92738343/227005709-fcff68f6-296c-4820-a3ad-6119fb09acc1.png)

Pokud budeme chtít zobrazit obsah jako webovou stránku, použijeme příkaz `node název_souboru.js`
Následně v prohlížeči zadáme `localhost:8080` ("8080 znamená číslo portu na, kerém bude web poslouchat, kdykoliv ho můžete změnit v js souboru")

![Snímek obrazovky 2023-03-22 190604](https://user-images.githubusercontent.com/92738343/227000652-7421db39-cf56-4421-8a10-8385e7c3c3b4.png)
