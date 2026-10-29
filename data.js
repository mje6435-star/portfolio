/* ==========================================================================
   CONTENU DU PORTFOLIO — c'est ici que tu modifies tes textes.

   - profile   : infos générales (GitHub, LinkedIn, lien vers ton CV…)
   - ui        : textes fixes du site (FR / EN)
   - projects  : une entrée = une carte de projet
   - skills    : groupes de compétences
   - modules   : modules CFC
   - education / work : parcours

   Les textes sont écrits en { fr: "…", en: "…" }.
   Pour ajouter un lien sur un projet :  links: [{ label: "Code", href: "https://…" }]
   Pour mettre une vraie capture d'écran : image: "assets/mon-projet.png"
   ========================================================================== */

window.PORTFOLIO = {
  profile: {
    name: "Diogo Vala Alves",
    // L'adresse est assemblée par le script pour éviter les robots à spam.
    emailUser: "diogovala",
    emailDomain: "outlook.com",
    // Laisse vide ("") pour masquer le bouton correspondant.
    github: "",
    linkedin: "",
    cv: "",
  },

  /* ------------------------------------------------------------------ */
  ui: {
    fr: {
      "meta.title": "Diogo Vala Alves — Portfolio",
      "meta.description":
        "Portfolio de Diogo Vala Alves, apprenti informaticien CFC : domotique, réseau, serveurs, IA en local et scripts.",
      "skip": "Aller au contenu",
      "nav.projects": "Projets",
      "nav.skills": "Compétences",
      "nav.path": "Parcours",
      "nav.about": "À propos",
      "nav.contact": "Contact",
      "nav.menu": "Menu",
      "nav.label": "Navigation principale",
      "lang.label": "Switch to English",
      "lang.short": "EN",
      "hero.badge": "Recherche un stage en informatique",
      "hero.title": "Je <span class=\"grad\">construis, j'héberge</span> et j'automatise.",
      "hero.sub":
        "<strong>Diogo Vala Alves</strong> — apprenti informaticien CFC · exploitation &amp; infrastructure",
      "hero.cta1": "Voir mes projets",
      "hero.cta2": "Me contacter",
      "hero.stat.projects": "projets",
      "hero.stat.modules": "modules CFC",
      "hero.stat.since": "CFC depuis 2025",
      "projects.title": "Projets sélectionnés",
      "projects.lead":
        "Labos d'école, projets perso et petits sites : ce que j'ai construit, testé et documenté.",
      "filter.label": "Filtrer les projets",
      "filter.all": "Tous",
      "filter.iot": "Domotique & IoT",
      "filter.network": "Réseau & sécurité",
      "filter.systems": "Systèmes & scripts",
      "filter.ai": "IA & vision",
      "filter.web": "Web",
      "card.open": "Voir le détail",
      "modal.close": "Fermer",
      "modal.points": "Ce que j'ai fait",
      "modal.tools": "Outils & notions",
      "skills.title": "Compétences",
      "skills.lead": "Ce que je pratique vraiment — pas une liste de mots à la mode.",
      "path.title": "Parcours",
      "path.education": "Formation",
      "path.work": "Stages",
      "path.modules": "Modules CFC",
      "path.modules.lead":
        "Les modules du CFC informaticien que j'ai suivis. Un point cyan signale ceux qui ont donné un projet présenté plus haut.",
      "about.title": "À propos",
      "about.p1":
        "Apprenti informaticien CFC à l'École des Arches (Lausanne), je cherche un stage en <strong>exploitation et infrastructure</strong>. Ce qui me motive : comprendre comment une chose fonctionne de bout en bout, du câble réseau au service qui répond.",
      "about.p2":
        "À la maison, je fais tourner Home Assistant, un serveur de photos, des modèles d'IA en local et un filtre publicitaire sur Raspberry Pi. Je documente ce que je fais — plans de test, documentation technique, journaux de travail — et je teste ce que j'installe, même quand un test échoue.",
      "about.interests": "Hors écran",
      "about.languages": "Langues",
      "contact.title": "Parlons-en",
      "contact.text":
        "Je cherche un stage en informatique (exploitation et infrastructure). Une question, une opportunité ? Écris-moi, je réponds volontiers.",
      "contact.mail": "Écrire un e-mail",
      "contact.copy": "Copier l'adresse",
      "contact.copied": "Adresse copiée !",
      "contact.cv": "Télécharger mon CV",
      "contact.location": "Vaud, Suisse",
      "footer.rights": "© 2026 Diogo Vala Alves",
      "footer.top": "Haut de page",
      "noscript": "Ce site a besoin de JavaScript pour afficher les projets.",
    },
    en: {
      "meta.title": "Diogo Vala Alves — Portfolio",
      "meta.description":
        "Portfolio of Diogo Vala Alves, IT apprentice (CFC): home automation, networking, servers, local AI and scripting.",
      "skip": "Skip to content",
      "nav.projects": "Projects",
      "nav.skills": "Skills",
      "nav.path": "Background",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.menu": "Menu",
      "nav.label": "Main navigation",
      "lang.label": "Passer en français",
      "lang.short": "FR",
      "hero.badge": "Looking for an IT internship",
      "hero.title": "I <span class=\"grad\">build, host</span> and automate.",
      "hero.sub":
        "<strong>Diogo Vala Alves</strong> — IT apprentice (CFC) · operations &amp; infrastructure",
      "hero.cta1": "See my work",
      "hero.cta2": "Get in touch",
      "hero.stat.projects": "projects",
      "hero.stat.modules": "CFC modules",
      "hero.stat.since": "CFC since 2025",
      "projects.title": "Selected projects",
      "projects.lead":
        "School labs, personal projects and small sites: what I built, tested and documented.",
      "filter.label": "Filter projects",
      "filter.all": "All",
      "filter.iot": "Home automation & IoT",
      "filter.network": "Network & security",
      "filter.systems": "Systems & scripts",
      "filter.ai": "AI & vision",
      "filter.web": "Web",
      "card.open": "View details",
      "modal.close": "Close",
      "modal.points": "What I did",
      "modal.tools": "Tools & concepts",
      "skills.title": "Skills",
      "skills.lead": "What I actually use — not a buzzword list.",
      "path.title": "Background",
      "path.education": "Education",
      "path.work": "Work experience",
      "path.modules": "CFC modules",
      "path.modules.lead":
        "The modules of the IT apprenticeship (CFC) I have taken. A cyan dot marks those that led to a project shown above.",
      "about.title": "About me",
      "about.p1":
        "I'm an IT apprentice (CFC) at École des Arches in Lausanne, looking for an internship in <strong>operations and infrastructure</strong>. What drives me is understanding how something works end to end, from the network cable to the service answering.",
      "about.p2":
        "At home I run Home Assistant, a photo server, local AI models and an ad filter on a Raspberry Pi. I document what I do — test plans, technical documentation, work logs — and I test what I install, even when a test fails.",
      "about.interests": "Off screen",
      "about.languages": "Languages",
      "contact.title": "Let's talk",
      "contact.text":
        "I'm looking for an IT internship (operations and infrastructure). A question, an opportunity? Drop me a line — I'm happy to reply.",
      "contact.mail": "Send an email",
      "contact.copy": "Copy address",
      "contact.copied": "Address copied!",
      "contact.cv": "Download my CV",
      "contact.location": "Vaud, Switzerland",
      "footer.rights": "© 2026 Diogo Vala Alves",
      "footer.top": "Back to top",
      "noscript": "This site needs JavaScript to display the projects.",
    },
  },

  /* ------------------------------------------------------------------ */
  // Palette des couvertures : mint, blue, violet, amber, pink, cyan
  projects: [
    {
      id: "home-assistant",
      cat: "iot",
      icon: "home",
      c1: "#34e6b4",
      c2: "#5b8cff",
      meta: { fr: "Projet perso · en continu", en: "Personal · ongoing" },
      title: { fr: "Maison connectée sous Home Assistant", en: "Smart home with Home Assistant" },
      summary: {
        fr: "Domotique installée à la maison : relais Shelly, caméras Tapo et automatisations, le tout piloté depuis Home Assistant.",
        en: "Home automation running at home: Shelly relays, Tapo cameras and automations, all driven from Home Assistant.",
      },
      points: {
        fr: [
          "Intégration d'appareils Shelly et de caméras Tapo dans un seul tableau de bord.",
          "Automatisations déclenchées par l'heure, des capteurs ou des événements.",
          "Home Assistant OS aussi testé en machine virtuelle pour les labos d'école.",
        ],
        en: [
          "Shelly devices and Tapo cameras brought together in a single dashboard.",
          "Automations triggered by time, sensors or events.",
          "Home Assistant OS also tested in a virtual machine for school labs.",
        ],
      },
      tags: ["Home Assistant", "Shelly", "Tapo", { fr: "Automatisations", en: "Automations" }],
    },
    {
      id: "face-recognition",
      cat: "ai",
      icon: "scan",
      c1: "#ff6bb5",
      c2: "#a66bff",
      meta: { fr: "Projet perso", en: "Personal" },
      title: { fr: "Reconnaissance faciale sur caméras Tapo", en: "Face recognition on Tapo cameras" },
      summary: {
        fr: "Détection et reconnaissance de visages à partir du flux vidéo RTSP des caméras de la maison.",
        en: "Face detection and recognition from the RTSP video stream of the home cameras.",
      },
      points: {
        fr: [
          "Récupération du flux RTSP des caméras Tapo.",
          "Détection puis reconnaissance faciale grâce à la vision par ordinateur.",
          "Une application concrète de l'IA sur du matériel grand public.",
        ],
        en: [
          "Pulling the RTSP stream from the Tapo cameras.",
          "Face detection, then recognition, using computer vision.",
          "A hands-on use of AI on consumer hardware.",
        ],
      },
      tags: ["RTSP", "Tapo", { fr: "Vision par ordinateur", en: "Computer vision" }],
    },
    {
      id: "local-ai",
      cat: "ai",
      icon: "cpu",
      c1: "#a66bff",
      c2: "#5b8cff",
      meta: { fr: "Projet perso", en: "Personal" },
      title: { fr: "IA en local : Ollama & LM Studio", en: "Local AI: Ollama & LM Studio" },
      summary: {
        fr: "Un serveur maison qui exécute des modèles d'IA sans passer par le cloud, avec des bases MySQL à côté.",
        en: "A home server running AI models without going through the cloud, with MySQL databases alongside.",
      },
      points: {
        fr: [
          "Modèles de langage exécutés en local avec Ollama et LM Studio.",
          "Serveur local pour héberger les modèles : mes requêtes restent sur ma machine.",
          "Bases de données MySQL pour stocker et interroger des données.",
        ],
        en: [
          "Language models run locally with Ollama and LM Studio.",
          "A local server hosts the models: my prompts stay on my own machine.",
          "MySQL databases to store and query data.",
        ],
      },
      tags: ["Ollama", "LM Studio", "MySQL"],
    },
    {
      id: "network-test-plan",
      cat: "network",
      icon: "shield",
      c1: "#5b8cff",
      c2: "#38d4ff",
      meta: { fr: "Module 184 · binôme · sept. 2026", en: "Module 184 · pair work · Sept 2026" },
      title: { fr: "Plan de test d'un réseau d'entreprise", en: "Test plan for a company network" },
      summary: {
        fr: "Dossier de 16 scénarios pour valider un réseau avant sa mise en service : fonctionnalité, performance et sécurité.",
        en: "A 16-scenario test plan to validate a network before it goes live: functionality, performance and security.",
      },
      points: {
        fr: [
          "Fonctionnalité (6 tests) : DHCP avec et sans réservation, DNS direct et inverse, serveur web IIS en HTTP et HTTPS.",
          "Performance (4 tests) : latence et chemin vers le serveur de fichiers et vers Internet (ping, tracert).",
          "Sécurité (6 tests) : scan de ports nmap, réseau invité, isolation des VLAN, liste blanche MAC, verrouillage de compte AD, droits sur un partage.",
          "Pour chaque test : l'outil, les étapes et le résultat attendu — réutilisable après chaque modification du réseau.",
        ],
        en: [
          "Functionality (6 tests): DHCP with and without reservation, forward and reverse DNS, IIS web server over HTTP and HTTPS.",
          "Performance (4 tests): latency and path to the file server and to the Internet (ping, tracert).",
          "Security (6 tests): nmap port scan, guest network, VLAN isolation, MAC whitelist, AD account lockout, share permissions.",
          "Each test lists the tool, the steps and the expected result — reusable after every network change.",
        ],
      },
      tags: ["DHCP", "DNS", "IIS", "nmap", "VLAN", "Active Directory"],
    },
    {
      id: "windows-server",
      cat: "systems",
      icon: "server",
      c1: "#5b8cff",
      c2: "#a66bff",
      meta: { fr: "Module 123 · labo", en: "Module 123 · lab" },
      title: { fr: "Windows Server 2025 & intranet d'entreprise", en: "Windows Server 2025 & company intranet" },
      summary: {
        fr: "Services serveur sur un Windows Server 2025 virtualisé, avec un portail intranet pour l'entreprise fictive « ChâtaignesPro ».",
        en: "Server services on a virtualised Windows Server 2025, with an intranet portal for the fictional company “ChâtaignesPro”.",
      },
      points: {
        fr: [
          "Installation et configuration de Windows Server 2025 en machine virtuelle, documentées pas à pas.",
          "Structure Active Directory pensée pour l'entreprise.",
          "Portail intranet en HTML/CSS/JS : actualités, statistiques de production, accès rapides, anniversaires du mois (deux versions).",
        ],
        en: [
          "Windows Server 2025 installed and configured in a virtual machine, documented step by step.",
          "An Active Directory structure designed for the company.",
          "Intranet portal in HTML/CSS/JS: company news, production statistics, quick links, birthdays of the month (two versions).",
        ],
      },
      tags: ["Windows Server 2025", "Active Directory", "HTML / CSS / JS", { fr: "Machine virtuelle", en: "Virtual machine" }],
    },
    {
      id: "adblock-pi",
      cat: "network",
      icon: "filter",
      c1: "#34e6b4",
      c2: "#38d4ff",
      meta: { fr: "Projet perso", en: "Personal" },
      title: { fr: "Filtre publicitaire réseau sur Raspberry Pi", en: "Network-wide ad filter on a Raspberry Pi" },
      summary: {
        fr: "Un proxy de filtrage installé sur un Raspberry Pi qui bloque les publicités pour tous les appareils de la maison.",
        en: "A filtering proxy on a Raspberry Pi that blocks ads for every device in the house.",
      },
      points: {
        fr: [
          "Filtrage à l'échelle du réseau, sans rien installer sur chaque appareil.",
          "Règles de pare-feu pour contrôler ce qui passe.",
          "Administration à distance en SSH, sans écran ni clavier.",
        ],
        en: [
          "Network-wide filtering, with nothing to install on each device.",
          "Firewall rules to control what goes through.",
          "Remote administration over SSH, no screen or keyboard needed.",
        ],
      },
      tags: ["Raspberry Pi", "Proxy", { fr: "Pare-feu", en: "Firewall" }, "SSH"],
    },
    {
      id: "weather-lorawan",
      cat: "iot",
      icon: "radio",
      c1: "#38d4ff",
      c2: "#34e6b4",
      meta: { fr: "Module 216 · examen", en: "Module 216 · exam" },
      title: { fr: "Station météo LoRaWAN (SenseCap S2120)", en: "LoRaWAN weather station (SenseCap S2120)" },
      summary: {
        fr: "Analyse complète d'un objet connecté : comment il communique, comment on s'y connecte, ce qu'on peut automatiser et comment le tester.",
        en: "A full study of a connected device: how it communicates, how to connect to it, what can be automated and how to test it.",
      },
      points: {
        fr: [
          "LoRaWAN en bande EU868 : faible débit (250 bps à 5,47 kbps), 10 à 15 km en zone rurale, environ 2 ans d'autonomie.",
          "Mise en service : piles, Bluetooth, application SenseCap Mate, lecture des mesures (température, humidité, vent, pluie, UV, pression).",
          "Sécurité : chiffrement AES-128 de bout en bout, mais code Bluetooth par défaut « 000000 » à changer.",
          "5 scénarios d'automatisation et de test (pluie, vent à plus de 60 km/h, indice UV, précision de la température…).",
        ],
        en: [
          "LoRaWAN on the EU868 band: low data rate (250 bps to 5.47 kbps), 10–15 km in rural areas, about 2 years of battery life.",
          "Setup: batteries, Bluetooth, SenseCap Mate app, reading the measurements (temperature, humidity, wind, rain, UV, pressure).",
          "Security: end-to-end AES-128 encryption, but a default Bluetooth code of “000000” that should be changed.",
          "5 automation and test scenarios (rain, wind above 60 km/h, UV index, temperature accuracy…).",
        ],
      },
      tags: ["LoRaWAN", "IoE", "Bluetooth", "JSON / API"],
    },
    {
      id: "smart-bulb",
      cat: "iot",
      icon: "bulb",
      c1: "#ffb454",
      c2: "#ff6bb5",
      meta: { fr: "Module 216 · binôme · mai 2026", en: "Module 216 · pair work · May 2026" },
      title: { fr: "Ampoule connectée Matter ↔ Home Assistant", en: "Matter smart bulb ↔ Home Assistant" },
      summary: {
        fr: "Intégration d'une ampoule OSRAM SMART+ multicolore dans Home Assistant et série de tests fonctionnels, avec un échec documenté.",
        en: "Integrating an OSRAM SMART+ colour bulb into Home Assistant, with a series of functional tests — including one documented failure.",
      },
      points: {
        fr: [
          "Appairage en Matter par QR code, puis ajout dans Home Assistant exécuté sur une machine virtuelle.",
          "Tests : ambiances prédéfinies ✔, drapeau d'un pays ✔, synchro sur la musique ✔, alarme lumineuse à heure fixe ✘.",
          "Pistes d'automatisation : horaires, capteur de porte, température ambiante, store connecté.",
          "Résultats consignés tels quels, y compris l'échec.",
        ],
        en: [
          "Pairing over Matter with a QR code, then adding it to Home Assistant running in a virtual machine.",
          "Tests: preset moods ✔, a country's flag ✔, syncing to music ✔, light alarm at a set time ✘.",
          "Automation ideas: schedules, door sensor, room temperature, smart blinds.",
          "Results recorded as they were, failure included.",
        ],
      },
      tags: ["Matter", "Home Assistant", "OSRAM SMART+", { fr: "Tests", en: "Testing" }],
    },
    {
      id: "motion-alarm",
      cat: "iot",
      icon: "bell",
      c1: "#ff6bb5",
      c2: "#ffb454",
      meta: { fr: "Module 431 · binôme", en: "Module 431 · pair work" },
      title: { fr: "Alarme à détection de mouvement", en: "Motion-detection alarm" },
      summary: {
        fr: "Un Raspberry Pi mesure une distance, fait sonner un buzzer et envoie un e-mail d'alerte dès qu'un mouvement est détecté.",
        en: "A Raspberry Pi measures a distance, sounds a buzzer and sends an alert email as soon as movement is detected.",
      },
      points: {
        fr: [
          "Capteur de distance (TRIG / ECHO) et buzzer pilotés en Python via les broches GPIO.",
          "Alerte par e-mail (SMTP) avec la date et la distance mesurée.",
          "Plusieurs versions successives du détecteur, de la V1 aux versions de test.",
          "Dossier complet : documentation technique, manuel utilisateur, planification Excel et journaux de travail.",
        ],
        en: [
          "Distance sensor (TRIG / ECHO) and buzzer driven from Python through the GPIO pins.",
          "Email alert (SMTP) with the date and the measured distance.",
          "Several successive versions of the detector, from V1 to the test builds.",
          "Complete file: technical documentation, user manual, Excel planning and work logs.",
        ],
      },
      tags: ["Raspberry Pi", "Python", "GPIO", "SMTP"],
    },
    {
      id: "virtualization-lab",
      cat: "systems",
      icon: "layers",
      c1: "#a66bff",
      c2: "#38d4ff",
      meta: { fr: "Module 190 · labo perso", en: "Module 190 · personal lab" },
      title: { fr: "Laboratoire de virtualisation", en: "Virtualisation lab" },
      summary: {
        fr: "Un petit labo de machines virtuelles pour tester des systèmes et des services sans rien casser.",
        en: "A small virtual machine lab to try out systems and services without breaking anything.",
      },
      points: {
        fr: [
          "VirtualBox et VMware avec Ubuntu, Windows 10, Windows Server 2025 et Home Assistant OS.",
          "Cisco Packet Tracer pour simuler et dessiner des réseaux.",
          "Machines recréées à volonté depuis une ISO — c'est aussi pourquoi elles sont exclues de ma sauvegarde.",
        ],
        en: [
          "VirtualBox and VMware running Ubuntu, Windows 10, Windows Server 2025 and Home Assistant OS.",
          "Cisco Packet Tracer to simulate and draw networks.",
          "Machines rebuilt at will from an ISO — which is also why they are left out of my backup.",
        ],
      },
      tags: ["VirtualBox", "VMware", "Packet Tracer", "Windows Server", "Ubuntu"],
    },
    {
      id: "backup-script",
      cat: "systems",
      icon: "backup",
      c1: "#ffb454",
      c2: "#34e6b4",
      meta: { fr: "Projet perso · PowerShell", en: "Personal · PowerShell" },
      title: { fr: "Script de sauvegarde automatisé", en: "Automated backup script" },
      summary: {
        fr: "Un script PowerShell qui sauvegarde mon PC vers un deuxième ordinateur du réseau via un partage SMB, avec journaux.",
        en: "A PowerShell script that backs up my PC to a second computer on the network over an SMB share, with logs.",
      },
      points: {
        fr: [
          "Vérifie que le PC de sauvegarde répond avant de commencer, puis monte le partage réseau.",
          "Copie Bureau, Documents, Images et Vidéos avec robocopy (sous-dossiers, reprise après coupure).",
          "Exclut les machines virtuelles et images disque (~75 Go) qui se recréent depuis une ISO.",
          "Journal horodaté à chaque exécution pour savoir ce qui a été copié ou ignoré.",
        ],
        en: [
          "Checks that the backup PC is reachable before starting, then mounts the network share.",
          "Copies Desktop, Documents, Pictures and Videos with robocopy (subfolders, resume after interruption).",
          "Skips virtual machines and disk images (~75 GB) that can be rebuilt from an ISO.",
          "Timestamped log on every run to see what was copied or skipped.",
        ],
      },
      tags: ["PowerShell", "robocopy", "SMB", { fr: "Sauvegarde", en: "Backup" }],
    },
    {
      id: "photo-server",
      cat: "systems",
      icon: "image",
      c1: "#38d4ff",
      c2: "#5b8cff",
      meta: { fr: "Projet perso", en: "Personal" },
      title: { fr: "Serveur web de photos auto-hébergé", en: "Self-hosted photo web server" },
      summary: {
        fr: "Un serveur web local sur le réseau de la maison pour déposer et consulter des photos, sans cloud tiers.",
        en: "A local web server on the home network to upload and browse photos, with no third-party cloud.",
      },
      points: {
        fr: [
          "Dépôt et consultation des photos depuis n'importe quel appareil du réseau.",
          "Hébergé à la maison : les photos restent chez moi.",
        ],
        en: [
          "Upload and browse photos from any device on the network.",
          "Hosted at home: the photos stay with me.",
        ],
      },
      tags: [{ fr: "Auto-hébergement", en: "Self-hosting" }, { fr: "Serveur web", en: "Web server" }, { fr: "Réseau local", en: "LAN" }],
    },
    {
      id: "linux-journey",
      cat: "systems",
      icon: "terminal",
      c1: "#a66bff",
      c2: "#34e6b4",
      meta: { fr: "Projet perso", en: "Personal" },
      title: { fr: "Mon parcours Linux : de Kali au dual boot", en: "My Linux journey: from Kali to dual boot" },
      summary: {
        fr: "Une migration progressive de Windows vers Linux, étape par étape.",
        en: "A gradual move from Windows to Linux, one step at a time.",
      },
      points: {
        fr: [
          "Découverte de Linux avec Kali, puis Ubuntu, en machine virtuelle.",
          "Passage complet à Zorin OS.",
          "Aujourd'hui : dual boot Windows / Linux Mint.",
        ],
        en: [
          "First steps with Kali, then Ubuntu, in a virtual machine.",
          "Full switch to Zorin OS.",
          "Today: Windows / Linux Mint dual boot.",
        ],
      },
      tags: ["Linux Mint", "Zorin OS", "Ubuntu", "Kali", "Dual boot"],
    },
    {
      id: "hypnose-site",
      cat: "web",
      icon: "globe",
      c1: "#ff6bb5",
      c2: "#a66bff",
      meta: { fr: "Site vitrine", en: "Showcase website" },
      title: { fr: "Site vitrine : centre d'hypnothérapie", en: "Showcase site: hypnotherapy centre" },
      summary: {
        fr: "Site de deux pages (accueil et actualités) pour un centre d'hypnothérapie de Clarens-Montreux.",
        en: "A two-page site (home and news) for a hypnotherapy centre in Clarens-Montreux.",
      },
      points: {
        fr: [
          "Page d'accueil et page d'actualités : conférences, stages et ateliers.",
          "Balises SEO (titre, description) et icône intégrée directement au fichier.",
          "HTML et CSS écrits à la main, sans framework.",
        ],
        en: [
          "Home page and news page: talks, courses and workshops.",
          "SEO tags (title, description) and the icon embedded directly in the file.",
          "Hand-written HTML and CSS, no framework.",
        ],
      },
      tags: ["HTML", "CSS", "SEO"],
    },
    {
      id: "duel-app",
      cat: "web",
      icon: "trophy",
      c1: "#ffb454",
      c2: "#ff6bb5",
      meta: { fr: "Mini-application web", en: "Mini web app" },
      title: { fr: "Duel d'ordinateurs — ton top 3", en: "Computer duels — your top 3" },
      summary: {
        fr: "Une mini-application qui oppose des ordinateurs deux à deux pour établir ton top 3.",
        en: "A mini web app that pits computers against each other, two at a time, to build your top 3.",
      },
      points: {
        fr: [
          "60 duels : on clique sur l'ordinateur qu'on préfère.",
          "Navigation au clavier (flèches ← et →) et glissement de carte sur téléphone.",
          "Récapitulatif des choix en fin de partie.",
        ],
        en: [
          "60 duels: click the computer you prefer.",
          "Keyboard navigation (← and → arrows) and card swiping on phones.",
          "A recap of your choices at the end.",
        ],
      },
      tags: ["HTML", "CSS", "JavaScript"],
    },
  ],

  /* ------------------------------------------------------------------ */
  skills: [
    {
      icon: "server",
      title: { fr: "Systèmes & virtualisation", en: "Systems & virtualisation" },
      items: ["Windows Server 2025", "Windows 10 / 11", "Linux Mint", "Ubuntu", "Zorin OS", "VirtualBox", "VMware", "Docker"],
    },
    {
      icon: "shield",
      title: { fr: "Réseau & sécurité", en: "Network & security" },
      items: [
        { fr: "Sous-réseaux & routage", en: "Subnetting & routing" },
        "VLAN",
        "DHCP / DNS",
        { fr: "Pare-feu", en: "Firewalls" },
        "nmap",
        "Cisco Packet Tracer",
        "SSH",
      ],
    },
    {
      icon: "radio",
      title: { fr: "Domotique & IoT", en: "Home automation & IoT" },
      items: ["Home Assistant", "Matter", "Shelly", "Tapo (RTSP)", "LoRaWAN", "Raspberry Pi", "GPIO"],
    },
    {
      icon: "terminal",
      title: { fr: "Scripts & développement", en: "Scripting & development" },
      items: ["Python", "Bash", "PowerShell", "HTML / CSS / JS", "SQL", "Git"],
    },
    {
      icon: "database",
      title: { fr: "Données", en: "Data" },
      items: ["MySQL / MariaDB", "MongoDB", "DBeaver", { fr: "Modélisation (Looping)", en: "Modelling (Looping)" }],
    },
    {
      icon: "cpu",
      title: { fr: "IA & outils", en: "AI & tools" },
      items: [
        "Ollama",
        "LM Studio",
        { fr: "Vision par ordinateur", en: "Computer vision" },
        "Obsidian",
        "Duplicati",
        { fr: "Veille technologique", en: "Tech watch" },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  // project : id du projet à ouvrir quand on clique sur le module
  modules: [
    { n: "106", title: { fr: "Bases de données", en: "Databases" } },
    { n: "114", title: { fr: "Codage, compression & chiffrement", en: "Encoding, compression & encryption" } },
    { n: "117", title: { fr: "Infrastructure d'une petite entreprise", en: "Small-business infrastructure" } },
    { n: "122", title: { fr: "Automatisation par scripts", en: "Scripting & automation" } },
    { n: "123", title: { fr: "Services d'un serveur", en: "Server services" }, project: "windows-server" },
    { n: "129", title: { fr: "Réseau : sous-réseaux & routage", en: "Networking: subnets & routing" } },
    { n: "141", title: { fr: "Installer des bases de données", en: "Installing database systems" } },
    { n: "143", title: { fr: "Sauvegarde & restauration", en: "Backup & restore" } },
    { n: "162", title: { fr: "Analyser & modéliser les données", en: "Data analysis & modelling" } },
    { n: "164", title: { fr: "Créer des bases de données", en: "Creating databases" } },
    { n: "184", title: { fr: "Sécurité réseau", en: "Network security" }, project: "network-test-plan" },
    { n: "187", title: { fr: "Poste de travail ICT", en: "ICT workstation" } },
    { n: "190", title: { fr: "Virtualisation", en: "Virtualisation" }, project: "virtualization-lab" },
    { n: "216", title: { fr: "IoE / objets connectés", en: "IoE / connected devices" }, project: "weather-lorawan" },
    { n: "231", title: { fr: "Protection des données", en: "Data protection" } },
    { n: "254", title: { fr: "Processus métier (BPMN)", en: "Business processes (BPMN)" } },
    { n: "260", title: { fr: "Bureautique", en: "Office tools" } },
    { n: "319", title: { fr: "Applications (Python)", en: "Applications (Python)" } },
    { n: "431", title: { fr: "Mandats autonomes", en: "Autonomous assignments" }, project: "motion-alarm" },
  ],

  education: [
    {
      period: { fr: "2025 → aujourd'hui", en: "2025 → today" },
      title: { fr: "CFC en informatique", en: "IT apprenticeship (CFC)" },
      place: { fr: "École des Arches, Lausanne", en: "École des Arches, Lausanne" },
    },
    {
      period: { fr: "2022 – 2025", en: "2022 – 2025" },
      title: { fr: "OCOM informatique", en: "OCOM IT option" },
      place: { fr: "Collège de Montreux-Ouest, Montreux", en: "Collège de Montreux-Ouest, Montreux" },
    },
  ],

  work: [
    {
      period: { fr: "Mars 2024", en: "March 2024" },
      title: { fr: "Stage — Aéroport de Sion (1 semaine)", en: "Internship — Sion Airport (1 week)" },
      points: {
        fr: [
          "AIS : gestion des plans de vol et de l'assistance au sol",
          "Service du feu : contrôle de piste, ravitaillement, dégivrage",
          "Tour de contrôle Skyguide : suivi du trafic aérien",
          "Safety Office : analyse des risques, coordination avec l'OFAC",
        ],
        en: [
          "AIS: flight plan and ground-handling management",
          "Fire service: runway checks, refuelling, de-icing",
          "Skyguide control tower: air traffic monitoring",
          "Safety Office: risk analysis, coordination with the FOCA",
        ],
      },
    },
    {
      period: { fr: "2023", en: "2023" },
      title: { fr: "Stage — J. Fasero Sàrl (3 semaines)", en: "Internship — J. Fasero Sàrl (3 weeks)" },
      points: {
        fr: ["Pose d'isolation thermique en toiture", "Montage de cloisons en plaques de plâtre", "Travaux de peinture intérieure"],
        en: ["Roof thermal insulation", "Plasterboard partition walls", "Interior painting"],
      },
    },
  ],

  interests: [
    { fr: "Cyclisme sur route (compétition)", en: "Road cycling (racing)" },
    { fr: "VTT descente", en: "Downhill mountain biking" },
    { fr: "Basketball (compétition)", en: "Basketball (competitive)" },
    { fr: "Randonnée en montagne", en: "Mountain hiking" },
    { fr: "Ski depuis l'enfance", en: "Skiing since childhood" },
    { fr: "Veille technologique", en: "Tech watch" },
  ],

  languages: [
    { name: { fr: "Français", en: "French" }, level: { fr: "maternelle", en: "native" } },
    { name: { fr: "Portugais", en: "Portuguese" }, level: { fr: "maternelle", en: "native" } },
    { name: { fr: "Espagnol", en: "Spanish" }, level: { fr: "A2", en: "A2" } },
    { name: { fr: "Anglais", en: "English" }, level: { fr: "niveau scolaire", en: "school level" } },
    { name: { fr: "Allemand", en: "German" }, level: { fr: "niveau scolaire", en: "school level" } },
  ],
};
