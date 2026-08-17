const juegos = [
  {
    consola: "Arcade",
    lista: [
      { titulo: "Golden Axe", duracion: "35 min", anio: 1989, genero: "Beat 'em up / Fantasía", desarrolladora: "SEGA" },
      { titulo: "Strider", duracion: "35 min", anio: 1989, genero: "Hack and Slash / Acción", desarrolladora: "Capcom" },
      { titulo: "Ikari Warriors", duracion: "45 min", anio: 1986, genero: "Run and Gun", desarrolladora: "SNK" },
      { titulo: "Jackal", duracion: "35 min", anio: 1986, genero: "Run and Gun", desarrolladora: "Konami" },
      { titulo: "Rolling Thunder 2", duracion: "45 min", anio: 1990, genero: "Run and Gun / Acción", desarrolladora: "Namco" },
      { titulo: "Sunset Riders", duracion: "40 min", anio: 1991, genero: "Run and Gun / Western", desarrolladora: "Konami" },
      { titulo: "Time Crisis", duracion: "40 min", anio: 1995, genero: "Rail Shooter", desarrolladora: "Namco" },
      { titulo: "Shadow Warriors (Ninja Gaiden)", duracion: "35 min", anio: 1988, genero: "Beat 'em up / Acción", desarrolladora: "Tecmo" },
      { titulo: "Alien Storm", duracion: "30 min", anio: 1990, genero: "Beat 'em up / Ciencia Ficción", desarrolladora: "SEGA" },
      { titulo: "Blood Bros.", duracion: "35 min", anio: 1990, genero: "Shooter / Western", desarrolladora: "TAD Corporation" },
      { titulo: "The Simpsons Arcade Game", duracion: "35 min", anio: 1991, genero: "Beat 'em up", desarrolladora: "Konami" },
      { titulo: "Captain Commando", duracion: "40 min", anio: 1991, genero: "Beat 'em up / Ciencia Ficción", desarrolladora: "Capcom" },
      { titulo: "X-Men (1992)", duracion: "40 min", anio: 1992, genero: "Beat 'em up / Superhéroes", desarrolladora: "Konami" },
      { titulo: "Samurai Shodown", duracion: "35 min", anio: 1993, genero: "Lucha", desarrolladora: "SNK" },
      { titulo: "Shock Troopers", duracion: "45 min", anio: 1997, genero: "Run and Gun", desarrolladora: "Saurus / SNK" },
      { titulo: "Knights of the Round", duracion: "45 min", anio: 1991, genero: "Beat 'em up / Hack and Slash", desarrolladora: "Capcom" },
      { titulo: "The Punisher", duracion: "45 min", anio: 1993, genero: "Beat 'em up", desarrolladora: "Capcom" },
      { titulo: "The King of Dragons", duracion: "40 min", anio: 1991, genero: "Beat 'em up / Fantasía", desarrolladora: "Capcom" },
      { titulo: "Dungeons & Dragons: Tower of Doom", duracion: "50 min", anio: 1993, genero: "Beat 'em up / RPG", desarrolladora: "Capcom" },
      { titulo: "Cadillacs and Dinosaurs", duracion: "45 min", anio: 1993, genero: "Beat 'em up", desarrolladora: "Capcom" },
      { titulo: "Alien vs. Predator", duracion: "45 min", anio: 1994, genero: "Beat 'em up / Ciencia Ficción", desarrolladora: "Capcom" }
    ]
  },
  {
    consola: "NES",
    lista: [
      { titulo: "The Legend of Zelda", duracion: "8.5 hrs", anio: 1986, genero: "Acción / Aventura", desarrolladora: "Nintendo" },
      { titulo: "Little Samson", duracion: "1.5 hrs", anio: 1992, genero: "Plataformas / Acción", desarrolladora: "Taito" },
      { titulo: "Mike Tyson's Punch-Out!!", duracion: "3 hrs", anio: 1987, genero: "Deportes / Lucha", desarrolladora: "Nintendo" },
      { titulo: "Bucky O'Hare", duracion: "2.5 hrs", anio: 1992, genero: "Plataformas / Run and Gun", desarrolladora: "Konami" },
      { titulo: "Double Dragon II: The Revenge", duracion: "1 hr", anio: 1989, genero: "Beat 'em up", desarrolladora: "Technōs Japan" },
      { titulo: "TMNT III: The Manhattan Project", duracion: "2 hrs", anio: 1991, genero: "Beat 'em up", desarrolladora: "Konami" },
      { titulo: "Batman: The Video Game", duracion: "1.5 hrs", anio: 1989, genero: "Plataformas / Acción", desarrolladora: "Sunsoft" },
      { titulo: "Vice: Project Doom", duracion: "1.5 hrs", anio: 1991, genero: "Acción / Plataformas", desarrolladora: "Aicom" },
      { titulo: "Kyattou Ninden Teyandee", duracion: "1.5 hrs", anio: 1991, genero: "Plataformas / Acción", desarrolladora: "Tecmo" },
      { titulo: "Disney's Chip 'n Dale: Rescue Rangers", duracion: "1 hr", anio: 1990, genero: "Plataformas", desarrolladora: "Capcom" },
      { titulo: "Solstice: Quest for the Staff of Demnos", duracion: "2.5 hrs", anio: 1990, genero: "Puzle / Aventura", desarrolladora: "Software Creations" },
      { titulo: "Mitsume ga Tōru", duracion: "1 hr", anio: 1992, genero: "Plataformas / Acción", desarrolladora: "Natsume" },
      { titulo: "Blaster Master", duracion: "5.5 hrs", anio: 1988, genero: "Plataformas / Metroidvania", desarrolladora: "Sunsoft" },
      { titulo: "Bomberman II", duracion: "1.5 hrs", anio: 1991, genero: "Puzle / Acción", desarrolladora: "Hudson Soft" },
      { titulo: "Kid Dracula", duracion: "1.5 hrs", anio: 1990, genero: "Plataformas / Comedia", desarrolladora: "Konami" },
      { titulo: "Crystalis", duracion: "9.5 hrs", anio: 1990, genero: "ARPG / Aventura", desarrolladora: "SNK" }
    ]
  },
  {
    consola: "SNES",
    lista: [
      { titulo: "Super Metroid", duracion: "7 hrs", anio: 1994, genero: "Metroidvania / Acción", desarrolladora: "Nintendo" },
      { titulo: "Super Castlevania IV", duracion: "3.5 hrs", anio: 1991, genero: "Plataformas / Acción", desarrolladora: "Konami" },
      { titulo: "EarthBound", duracion: "28 hrs", anio: 1994, genero: "RPG", desarrolladora: "Ape / HAL Laboratory" },
      { titulo: "Ganbare Goemon 2", duracion: "3.5 hrs", anio: 1993, genero: "Plataformas / Acción", desarrolladora: "Konami" },
      { titulo: "Secret of Mana", duracion: "17.5 hrs", anio: 1993, genero: "ARPG / Aventura", desarrolladora: "Square" },
      { titulo: "Super Mario RPG", duracion: "12.5 hrs", anio: 1996, genero: "RPG / Plataformas", desarrolladora: "Square / Nintendo" },
      { titulo: "Terranigma", duracion: "15.5 hrs", anio: 1995, genero: "ARPG", desarrolladora: "Quintet" },
      { titulo: "Equinox", duracion: "8.5 hrs", anio: 1993, genero: "Puzle / Aventura", desarrolladora: "Software Creations" },
      { titulo: "Demon's Crest", duracion: "3.5 hrs", anio: 1994, genero: "Plataformas / Acción", desarrolladora: "Capcom" },
      { titulo: "Ogre Battle: March of the Black Queen", duracion: "30 hrs", anio: 1993, genero: "Estrategia / RPG", desarrolladora: "Quest" },
      { titulo: "Cybernator", duracion: "2.5 hrs", anio: 1992, genero: "Mecha / Run and Gun", desarrolladora: "NCS Corp / Masaya" },
      { titulo: "Skyblazer", duracion: "2.5 hrs", anio: 1994, genero: "Plataformas / Acción", desarrolladora: "Umanosuke / Sony" },
      { titulo: "The Smurfs", duracion: "2 hrs", anio: 1994, genero: "Plataformas", desarrolladora: "Infogrames" },
      { titulo: "Alfred Chicken", duracion: "2 hrs", anio: 1993, genero: "Plataformas", desarrolladora: "Twilight" }
    ]
  },
  {
    consola: "Sega Mega Drive / Genesis",
    lista: [
      { titulo: "Ristar", duracion: "2.5 hrs", anio: 1995, genero: "Plataformas", desarrolladora: "Sonic Team / SEGA" },
      { titulo: "Streets of Rage", duracion: "1 hr", anio: 1991, genero: "Beat 'em up", desarrolladora: "SEGA" },
      { titulo: "Sonic 3 & Knuckles", duracion: "4.5 hrs", anio: 1994, genero: "Plataformas", desarrolladora: "Sonic Team / SEGA" },
      { titulo: "Tiny Toon Adventures: Buster's Hidden Treasure", duracion: "2.5 hrs", anio: 1993, genero: "Plataformas", desarrolladora: "Konami" },
      { titulo: "Landstalker", duracion: "17 hrs", anio: 1992, genero: "ARPG / Aventura", desarrolladora: "Climax Entertainment" },
      { titulo: "Alien Soldier", duracion: "2 hrs", anio: 1995, genero: "Run and Gun / Acción", desarrolladora: "Treasure" },
      { titulo: "Jungle Strike", duracion: "6.5 hrs", anio: 1993, genero: "Acción / Estrategia", desarrolladora: "Electronic Arts" },
      { titulo: "Disney's The Jungle Book", duracion: "2 hrs", anio: 1994, genero: "Plataformas", desarrolladora: "Eurocom / Virgin Interactive" },
      { titulo: "Castlevania: Bloodlines", duracion: "2.5 hrs", anio: 1994, genero: "Plataformas / Acción", desarrolladora: "Konami" },
      { titulo: "Gauntlet IV", duracion: "5.5 hrs", anio: 1993, genero: "Acción / ARPG", desarrolladora: "M2 / SEGA" }
    ]
  },
  {
    consola: "Sega CD / Mega-CD",
    lista: [
      { titulo: "Flashback: The Quest for Identity", duracion: "6.5 hrs", anio: 1993, genero: "Plataformas Cinematográfico / Ciencia Ficción", desarrolladora: "Delphine Software" },
      { titulo: "Snatcher", duracion: "9.5 hrs", anio: 1994, genero: "Novela Visual / Aventura Gráfica", desarrolladora: "Konami" },
      { titulo: "Sonic CD", duracion: "1.5 hrs", anio: 1993, genero: "Plataformas", desarrolladora: "Sonic Team / SEGA" },
      { titulo: "Popful Mail", duracion: "13.5 hrs", anio: 1994, genero: "ARPG / Plataformas", desarrolladora: "Nihon Falcom / Working Designs" },
      { titulo: "Final Fight CD", duracion: "1 hr", anio: 1993, genero: "Beat 'em up", desarrolladora: "Capcom / SEGA" },
      { titulo: "Jurassic Park", duracion: "3.5 hrs", anio: 1993, genero: "Aventura Point-and-Click", desarrolladora: "SEGA" },
      { titulo: "Lunar: The Silver Star", duracion: "21 hrs", anio: 1992, genero: "JRPG", desarrolladora: "Game Arts" },
      { titulo: "Dracula Unleashed", duracion: "4.5 hrs", anio: 1993, genero: "FMV / Película Interactiva", desarrolladora: "Viacom New Media" }
    ]
  },
  {
   
  consola: "Game Boy",
  lista: [
    {
      titulo: "Avenging Spirit",
      duracion: "1h",
      anio: "1992",
      genero: "Acción / Plataformas",
      desarrolladora: "Jaleco"
    },
    {
      titulo: "Mole Mania",
      duracion: "4.5h",
      anio: "1996",
      genero: "Puzle / Acción",
      desarrolladora: "Nintendo EAD / Pax Softnica"
    },
    {
      titulo: "Monster Max",
      duracion: "8.5h",
      anio: "1994",
      genero: "Aventura / Puzle",
      desarrolladora: "Rare"
    },
    {
      titulo: "Kirby's Dream Land 2",
      duracion: "2h",
      anio: "1995",
      genero: "Plataformas",
      desarrolladora: "HAL Laboratory"
    },
    {
      titulo: "Tiny Toon Adventures: Babs' Big Break",
      duracion: "1h",
      anio: "1992",
      genero: "Plataformas",
      desarrolladora: "Konami"
    },
    {
      titulo: "Gargoyle's Quest",
      duracion: "3.5h",
      anio: "1990",
      genero: "Acción / Plataformas",
      desarrolladora: "Capcom"
    },
    {
      titulo: "Amazing Tater",
      duracion: "4h",
      anio: "1991",
      genero: "Puzle",
      desarrolladora: "Atlus"
    },
    {
      titulo: "Super Mario Land 2: 6 Golden Coins",
      duracion: "1.5h",
      anio: "1992",
      genero: "Plataformas",
      desarrolladora: "Nintendo R&D1"
    }
  ]
},
  {
  consola: "Sega Saturn",
  lista: [
    {
      titulo: "Earthworm Jim 2",
      duracion: "2.5h",
      anio: "1995",
      genero: "Plataformas / Acción",
      desarrolladora: "Shiny Entertainment"
    },
    {
      titulo: "NiGHTS into Dreams",
      duracion: "2h",
      anio: "1996",
      genero: "Plataformas / Acción 3D",
      desarrolladora: "Sonic Team"
    },
    {
      titulo: "Guardian Heroes",
      duracion: "2.5h",
      anio: "1996",
      genero: "Beat 'em up / RPG",
      desarrolladora: "Treasure"
    },
    {
      titulo: "Radiant Silvergun",
      duracion: "2.5h",
      anio: "1998",
      genero: "Shoot 'em up",
      desarrolladora: "Treasure"
    },
    {
      titulo: "Burning Rangers",
      duracion: "3.5h",
      anio: "1998",
      genero: "Acción 3D",
      desarrolladora: "Sonic Team"
    },
    {
      titulo: "Panzer Dragoon",
      duracion: "2h",
      anio: "1995",
      genero: "Rail Shooter",
      desarrolladora: "Team Andromeda"
    },
    {
      titulo: "Panzer Dragoon II Zwei",
      duracion: "2.5h",
      anio: "1996",
      genero: "Rail Shooter",
      desarrolladora: "Team Andromeda"
    },
    {
      titulo: "Fighters Megamix",
      duracion: "1h",
      anio: "1996",
      genero: "Lucha",
      desarrolladora: "Sega AM2"
    },
    {
      titulo: "Die Hard Arcade",
      duracion: "45m",
      anio: "1996",
      genero: "Beat 'em up",
      desarrolladora: "Sega AM1"
    },
    {
      titulo: "Astal",
      duracion: "1.5h",
      anio: "1995",
      genero: "Plataformas",
      desarrolladora: "SEGA"
    },
    {
      titulo: "Clockwork Knight",
      duracion: "1.5h",
      anio: "1994",
      genero: "Plataformas",
      desarrolladora: "SEGA"
    },
    {
      titulo: "Clockwork Knight 2",
      duracion: "1.5h",
      anio: "1995",
      genero: "Plataformas",
      desarrolladora: "SEGA"
    },
    {
      titulo: "Deep Fear",
      duracion: "7.5h",
      anio: "1998",
      genero: "Survival Horror",
      desarrolladora: "SEGA"
    },
    {
      titulo: "Enemy Zero",
      duracion: "10.5h",
      anio: "1996",
      genero: "Survival Horror / Aventura",
      desarrolladora: "WARP"
    }
  ]
},
  {
  consola: "PlayStation",
  lista: [
    {
      titulo: "Suikoden",
      duracion: "21.5h",
      anio: "1995",
      genero: "JRPG",
      desarrolladora: "Konami"
    },
    {
      titulo: "Silent Hill",
      duracion: "7h",
      anio: "1999",
      genero: "Survival Horror",
      desarrolladora: "Team Silent / Konami"
    },
    {
      titulo: "Crash Bandicoot 2: Cortex Strikes Back",
      duracion: "5.5h",
      anio: "1997",
      genero: "Plataformas",
      desarrolladora: "Naughty Dog"
    },
    {
      titulo: "Driver 2",
      duracion: "11.5h",
      anio: "2000",
      genero: "Acción / Conducción",
      desarrolladora: "Reflections Interactive"
    },
    {
      titulo: "Crash Team Racing",
      duracion: "3.5h",
      anio: "1999",
      genero: "Carreras / Karting",
      desarrolladora: "Naughty Dog"
    },
    {
      titulo: "Dino Crisis",
      duracion: "6.5h",
      anio: "1999",
      genero: "Survival Horror",
      desarrolladora: "Capcom"
    },
    {
      titulo: "Syphon Filter",
      duracion: "10.5h",
      anio: "1999",
      genero: "Acción / Sigilo",
      desarrolladora: "Eidetic"
    },
    {
      titulo: "Fear Effect",
      duracion: "9h",
      anio: "2000",
      genero: "Acción / Survival Horror",
      desarrolladora: "Kronos Digital Entertainment"
    },
    {
      titulo: "Heart of Darkness",
      duracion: "5.5h",
      anio: "1998",
      genero: "Plataformas / Aventura",
      desarrolladora: "Amazing Studio"
    },
    {
      titulo: "Vagrant Story",
      duracion: "24.5h",
      anio: "2000",
      genero: "JRPG / Acción",
      desarrolladora: "Square"
    },
    {
      titulo: "Spyro: Year of the Dragon",
      duracion: "7h",
      anio: "2000",
      genero: "Plataformas 3D",
      desarrolladora: "Insomniac Games"
    },
    {
      titulo: "Koudelka",
      duracion: "10.5h",
      anio: "1999",
      genero: "JRPG / Survival Horror",
      desarrolladora: "Sacnoth"
    },
    {
      titulo: "Galerians",
      duracion: "7.5h",
      anio: "1999",
      genero: "Survival Horror",
      desarrolladora: "Polygon Magic"
    },
    {
      titulo: "The Jungle Book: Mowgli's Wild Adventure",
      duracion: "2h",
      anio: "2000",
      genero: "Plataformas",
      desarrolladora: "Ubi Soft"
    }
  ]
},
  {
  consola: "Nintendo 64",
  lista: [
    {
      titulo: "Paper Mario",
      duracion: "23.5h",
      anio: "2000",
      genero: "RPG",
      desarrolladora: "Intelligent Systems"
    },
    {
      titulo: "GoldenEye 007",
      duracion: "9h",
      anio: "1997",
      genero: "FPS / Acción",
      desarrolladora: "Rare"
    },
    {
      titulo: "Banjo-Kazooie",
      duracion: "11.5h",
      anio: "1998",
      genero: "Plataformas 3D",
      desarrolladora: "Rare"
    },
    {
      titulo: "Conker's Bad Fur Day",
      duracion: "12h",
      anio: "2001",
      genero: "Plataformas 3D / Acción",
      desarrolladora: "Rare"
    },
    {
      titulo: "Ogre Battle 64",
      duracion: "41h",
      anio: "1999",
      genero: "RPG Táctico",
      desarrolladora: "Quest"
    },
    {
      titulo: "Donkey Kong 64",
      duracion: "22.5h",
      anio: "1999",
      genero: "Plataformas 3D",
      desarrolladora: "Rare"
    },
    {
      titulo: "Turok 2: Seeds of Evil",
      duracion: "14h",
      anio: "1998",
      genero: "FPS / Acción",
      desarrolladora: "Iguana Entertainment"
    },
    {
      titulo: "Star Wars: Rogue Squadron",
      duracion: "8.5h",
      anio: "1998",
      genero: "Acción / Combate Vehicular",
      desarrolladora: "Factor 5"
    },
    {
      titulo: "Blast Corps",
      duracion: "8.5h",
      anio: "1997",
      genero: "Acción / Puzle",
      desarrolladora: "Rare"
    },
    {
      titulo: "Sin and Punishment",
      duracion: "1.5h",
      anio: "2000",
      genero: "Rail Shooter",
      desarrolladora: "Treasure"
    },
    {
      titulo: "Excitebike 64",
      duracion: "6h",
      anio: "2000",
      genero: "Carreras / Deportes",
      desarrolladora: "Left Field Productions"
    },
    {
      titulo: "Shadow Man",
      duracion: "17.5h",
      anio: "1999",
      genero: "Acción / Aventura",
      desarrolladora: "Acclaim Studios Teesside"
    },
    {
      titulo: "Mario Tennis",
      duracion: "4h",
      anio: "2000",
      genero: "Deportes",
      desarrolladora: "Camelot Software Planning"
    }
  ]
},
  {
  consola: "Game Boy Color",
  lista: [
    {
      titulo: "Magi Nation",
      duracion: "24.5h",
      anio: "2001",
      genero: "JRPG",
      desarrolladora: "Interactive Imagination"
    },
    {
      titulo: "Dragonyhm",
      duracion: "5.5h",
      anio: "2020",
      genero: "RPG / Aventura",
      desarrolladora: "Spacebot Interactive"
    },
    {
      titulo: "The Legend of Zelda: Link's Awakening DX",
      duracion: "14h",
      anio: "1998",
      genero: "Acción / Aventura",
      desarrolladora: "Nintendo EAD"
    },
    {
      titulo: "Metal Gear Ghost Babel",
      duracion: "8.5h",
      anio: "2000",
      genero: "Acción / Sigilo",
      desarrolladora: "KCEJ / Konami"
    },
    {
      titulo: "Mario Tennis (GB)",
      duracion: "11.5h",
      anio: "2000",
      genero: "Deportes / RPG",
      desarrolladora: "Camelot Software Planning"
    },
    {
      titulo: "Wario Land 3",
      duracion: "10.5h",
      anio: "2000",
      genero: "Plataformas",
      desarrolladora: "Nintendo R&D1"
    },
    {
      titulo: "Warlocked",
      duracion: "5.5h",
      anio: "2000",
      genero: "Estrategia (RTS)",
      desarrolladora: "Bits Studios"
    },
    {
      titulo: "Survival Kids",
      duracion: "8h",
      anio: "1999",
      genero: "RPG / Supervivencia",
      desarrolladora: "Konami"
    },
    {
      titulo: "Looney Tunes: Marvin Strikes Back!",
      duracion: "4h",
      anio: "2000",
      genero: "Acción / Aventura",
      desarrolladora: "Warthog Games"
    },
    {
      titulo: "Shantae",
      duracion: "8.5h",
      anio: "2002",
      genero: "Plataformas / Metroidvania",
      desarrolladora: "WayForward"
    },
    {
      titulo: "Tomb Raider Starring Lara Croft",
      duracion: "6h",
      anio: "2000",
      genero: "Acción / Plataformas",
      desarrolladora: "Core Design"
    },
    {
      titulo: "Spy vs. Spy",
      duracion: "2.5h",
      anio: "1999",
      genero: "Estrategia / Acción",
      desarrolladora: "Kemco"
    }
  ]
},
  {
  consola: "PlayStation 2",
  lista: [
    {
      titulo: "Kingdom Hearts",
      duracion: "28.5h",
      anio: "2002",
      genero: "JRPG / Acción",
      desarrolladora: "Square"
    },
    {
      titulo: "Final Fantasy X",
      duracion: "45.5h",
      anio: "2001",
      genero: "JRPG",
      desarrolladora: "Square"
    },
    {
      titulo: "Spyro: Enter the Dragonfly",
      duracion: "3.5h",
      anio: "2002",
      genero: "Plataformas 3D",
      desarrolladora: "Check Five Games"
    },
    {
      titulo: "Sly Cooper and the Thievius Raccoonus",
      duracion: "6h",
      anio: "2002",
      genero: "Plataformas / Sigilo",
      desarrolladora: "Sucker Punch Productions"
    },
    {
      titulo: "Evil Dead: Regeneration",
      duracion: "6.5h",
      anio: "2005",
      genero: "Acción / Hack and Slash",
      desarrolladora: "Cranky Pants Games"
    },
    {
      titulo: "God of War",
      duracion: "9h",
      anio: "2005",
      genero: "Hack and Slash / Acción",
      desarrolladora: "Santa Monica Studio"
    },
    {
      titulo: "Metal Gear Solid 2: Substance",
      duracion: "13h",
      anio: "2002",
      genero: "Acción / Sigilo",
      desarrolladora: "Konami"
    },
    {
      titulo: "Ico",
      duracion: "6h",
      anio: "2001",
      genero: "Aventura / Puzle",
      desarrolladora: "Team Ico"
    },
    {
      titulo: "Ratchet & Clank",
      duracion: "9.5h",
      anio: "2002",
      genero: "Plataformas / Acción",
      desarrolladora: "Insomniac Games"
    },
    {
      titulo: "Katamari Damacy",
      duracion: "4.5h",
      anio: "2004",
      genero: "Puzle / Acción",
      desarrolladora: "Namco"
    },
    {
      titulo: "The Warriors",
      duracion: "12h",
      anio: "2005",
      genero: "Beat 'em up / Acción",
      desarrolladora: "Rockstar Toronto"
    },
    {
      titulo: "Def Jam: Fight for NY",
      duracion: "8h",
      anio: "2004",
      genero: "Lucha",
      desarrolladora: "AKI Corporation"
    },
    {
      titulo: "WWE SmackDown! Here Comes the Pain",
      duracion: "6h",
      anio: "2003",
      genero: "Lucha Libre / Deportes",
      desarrolladora: "Yuke's"
    },
    {
      titulo: "Jak and Daxter: The Precursor Legacy",
      duracion: "8h",
      anio: "2001",
      genero: "Plataformas 3D",
      desarrolladora: "Naughty Dog"
    },
    {
      titulo: "Rule of Rose",
      duracion: "10.5h",
      anio: "2006",
      genero: "Survival Horror",
      desarrolladora: "Punchline"
    },
    {
      titulo: "Haunting Ground",
      duracion: "10h",
      anio: "2005",
      genero: "Survival Horror",
      desarrolladora: "Capcom"
    },
    {
      titulo: "SMT: Digital Devil Saga",
      duracion: "39h",
      anio: "2004",
      genero: "JRPG",
      desarrolladora: "Atlus"
    },
    {
      titulo: "Mortal Kombat: Shaolin Monks",
      duracion: "8.5h",
      anio: "2005",
      genero: "Beat 'em up / Acción",
      desarrolladora: "Midway"
    },
    {
      titulo: "Downhill Domination",
      duracion: "6h",
      anio: "2003",
      genero: "Carreras / Deportes",
      desarrolladora: "Incognito Entertainment"
    },
    {
      titulo: "Burnout 3: Takedown",
      duracion: "12.5h",
      anio: "2004",
      genero: "Carreras / Arcade",
      desarrolladora: "Criterion Games"
    },
    {
      titulo: "Rogue Galaxy",
      duracion: "57h",
      anio: "2005",
      genero: "JRPG / Acción",
      desarrolladora: "Level-5"
    },
    {
      titulo: "Dark Chronicle / Dark Cloud 2",
      duracion: "61.5h",
      anio: "2002",
      genero: "JRPG / Acción",
      desarrolladora: "Level-5"
    },
    {
      titulo: "Dirge of Cerberus: FFVII",
      duracion: "11.5h",
      anio: "2006",
      genero: "Shooter / Acción",
      desarrolladora: "Square Enix"
    },
    {
      titulo: "Onimusha 3: Demon Siege",
      duracion: "10h",
      anio: "2004",
      genero: "Hack and Slash / Acción",
      desarrolladora: "Capcom"
    },
    {
      titulo: "Shadow of Rome",
      duracion: "14.5h",
      anio: "2005",
      genero: "Hack and Slash / Acción",
      desarrolladora: "Capcom"
    },
    {
      titulo: "Urban Chaos: Riot Response",
      duracion: "7.5h",
      anio: "2006",
      genero: "FPS / Acción",
      desarrolladora: "Rocksteady Studios"
    },
    {
      titulo: "Disaster Report",
      duracion: "5.5h",
      anio: "2002",
      genero: "Aventura / Supervivencia",
      desarrolladora: "Irem"
    },
    {
      titulo: "Rise to Honor",
      duracion: "5h",
      anio: "2004",
      genero: "Beat 'em up / Acción",
      desarrolladora: "Foster City Studio"
    },
    {
      titulo: "Forbidden Siren 2",
      duracion: "18.5h",
      anio: "2006",
      genero: "Survival Horror",
      desarrolladora: "Project Siren"
    },
    {
      titulo: "Gregory Horror Show",
      duracion: "6h",
      anio: "2003",
      genero: "Aventura / Survival Horror",
      desarrolladora: "Capcom"
    },
    {
      titulo: "Clock Tower 3",
      duracion: "7h",
      anio: "2002",
      genero: "Survival Horror",
      desarrolladora: "Capcom / Sunsoft"
    },
    {
      titulo: "Spider-Man 2",
      duracion: "7.5h",
      anio: "2004",
      genero: "Acción / Mundo Abierto",
      desarrolladora: "Treyarch"
    },
    {
      titulo: "Dragon Ball Z: Budokai 3",
      duracion: "8.5h",
      anio: "2004",
      genero: "Lucha",
      desarrolladora: "Dimps"
    },
    {
      titulo: "Shinobi",
      duracion: "8h",
      anio: "2002",
      genero: "Hack and Slash / Acción",
      desarrolladora: "Overworks"
    },
    {
      titulo: "Urban Reign",
      duracion: "6.5h",
      anio: "2005",
      genero: "Beat 'em up",
      desarrolladora: "Namco"
    },
    {
      titulo: "Call of Duty 3",
      duracion: "8h",
      anio: "2006",
      genero: "FPS",
      desarrolladora: "Treyarch"
    },
    {
      titulo: "Metal Gear Solid 3: Subsistence",
      duracion: "16h",
      anio: "2005",
      genero: "Acción / Sigilo",
      desarrolladora: "Konami"
    },
    {
      titulo: "Guilty Gear X Plus",
      duracion: "2h",
      anio: "2001",
      genero: "Lucha",
      desarrolladora: "Arc System Works"
    },
    {
      titulo: "God Hand",
      duracion: "10.5h",
      anio: "2006",
      genero: "Beat 'em up",
      desarrolladora: "Clover Studio"
    },
    {
      titulo: "Peter Jackson's King Kong",
      duracion: "6h",
      anio: "2005",
      genero: "Acción / FPS",
      desarrolladora: "Ubisoft Montpellier"
    },
    {
      titulo: "Psychonauts",
      duracion: "11.5h",
      anio: "2005",
      genero: "Plataformas 3D",
      desarrolladora: "Double Fine Productions"
    }
  ]
},
  {
  consola: "Sega Dreamcast",
  lista: [
    {
      titulo: "Shenmue",
      duracion: "18h",
      anio: "1999",
      genero: "Aventura / Mundo Abierto",
      desarrolladora: "SEGA AM2"
    },
    {
      titulo: "Resident Evil 2",
      duracion: "6h",
      anio: "1999",
      genero: "Survival Horror",
      desarrolladora: "Capcom"
    },
    {
      titulo: "Dead or Alive 2",
      duracion: "1h",
      anio: "2000",
      genero: "Lucha",
      desarrolladora: "Team Ninja"
    },
    {
      titulo: "Marvel vs. Capcom 2",
      duracion: "1h",
      anio: "2000",
      genero: "Lucha",
      desarrolladora: "Capcom"
    },
    {
      titulo: "Rez",
      duracion: "1.5h",
      anio: "2001",
      genero: "Rail Shooter / Rítmico",
      desarrolladora: "United Game Artists"
    },
    {
      titulo: "Headhunter",
      duracion: "11.5h",
      anio: "2001",
      genero: "Acción / Sigilo",
      desarrolladora: "Amuze"
    },
    {
      titulo: "Sturmwind",
      duracion: "2h",
      anio: "2013",
      genero: "Shoot 'em up",
      desarrolladora: "Duranik"
    },
    {
      titulo: "Giga Wing",
      duracion: "45m",
      anio: "1999",
      genero: "Shoot 'em up",
      desarrolladora: "Takumi"
    },
    {
      titulo: "The House of the Dead 2",
      duracion: "45m",
      anio: "1999",
      genero: "Rail Shooter",
      desarrolladora: "Sega AM1"
    },
    {
      titulo: "Spider-Man",
      duracion: "4.5h",
      anio: "2000",
      genero: "Acción / Aventura",
      desarrolladora: "Neversoft"
    }
  ]
},
  {
  consola: "Nintendo GameCube",
  lista: [
    {
      titulo: "The Legend of Zelda: The Wind Waker",
      duracion: "29h",
      anio: "2002",
      genero: "Acción / Aventura",
      desarrolladora: "Nintendo EAD"
    },
    {
      titulo: "Super Mario Sunshine",
      duracion: "15h",
      anio: "2002",
      genero: "Plataformas 3D",
      desarrolladora: "Nintendo EAD"
    },
    {
      titulo: "Resident Evil 4",
      duracion: "15.5h",
      anio: "2005",
      genero: "Survival Horror / Acción",
      desarrolladora: "Capcom"
    },
    {
      titulo: "Paper Mario: The Thousand-Year Door",
      duracion: "31h",
      anio: "2004",
      genero: "RPG",
      desarrolladora: "Intelligent Systems"
    },
    {
      titulo: "Fire Emblem: Path of Radiance",
      duracion: "34.5h",
      anio: "2005",
      genero: "RPG Táctico",
      desarrolladora: "Intelligent Systems"
    },
    {
      titulo: "Metroid Prime",
      duracion: "14h",
      anio: "2002",
      genero: "FPS / Aventura",
      desarrolladora: "Retro Studios"
    },
    {
      titulo: "Pikmin 2",
      duracion: "11.5h",
      anio: "2004",
      genero: "Estrategia / Puzle",
      desarrolladora: "Nintendo EAD"
    },
    {
      titulo: "Viewtiful Joe",
      duracion: "8h",
      anio: "2003",
      genero: "Beat 'em up / Acción",
      desarrolladora: "Clover Studio"
    },
    {
      titulo: "SoulCalibur II",
      duracion: "3.5h",
      anio: "2003",
      genero: "Lucha",
      desarrolladora: "Project Soul / Namco"
    },
    {
      titulo: "Super Smash Bros. Melee",
      duracion: "4.5h",
      anio: "2001",
      genero: "Lucha / Plataformas",
      desarrolladora: "HAL Laboratory"
    },
    {
      titulo: "Eternal Darkness: Sanity's Requiem",
      duracion: "13.5h",
      anio: "2002",
      genero: "Survival Horror",
      desarrolladora: "Silicon Knights"
    },
    {
      titulo: "TimeSplitters 2",
      duracion: "8h",
      anio: "2002",
      genero: "FPS",
      desarrolladora: "Free Radical Design"
    },
    {
      titulo: "Star Wars Rogue Squadron II: Rogue Leader",
      duracion: "6.5h",
      anio: "2001",
      genero: "Acción / Combate Vehicular",
      desarrolladora: "Factor 5"
    },
    {
      titulo: "The Incredible Hulk: Ultimate Destruction",
      duracion: "8.5h",
      anio: "2005",
      genero: "Acción / Mundo Abierto",
      desarrolladora: "Radical Entertainment"
    },
    {
      titulo: "X-Men Legends",
      duracion: "17.5h",
      anio: "2004",
      genero: "ARPG / Acción",
      desarrolladora: "Raven Software"
    },
    {
      titulo: "Tom and Jerry in War of the Whiskers",
      duracion: "2h",
      anio: "2002",
      genero: "Lucha / Party",
      desarrolladora: "VIS Entertainment"
    },
    {
      titulo: "Skies of Arcadia Legends",
      duracion: "46h",
      anio: "2002",
      genero: "JRPG",
      desarrolladora: "Overworks"
    },
    {
      titulo: "Pikmin",
      duracion: "7.5h",
      anio: "2001",
      genero: "Estrategia / Puzle",
      desarrolladora: "Nintendo EAD"
    },
    {
      titulo: "Prince of Persia: Warrior Within",
      duracion: "12h",
      anio: "2004",
      genero: "Acción / Plataformas",
      desarrolladora: "Ubisoft Montreal"
    },
    {
      titulo: "Prince of Persia: The Two Thrones",
      duracion: "9.5h",
      anio: "2005",
      genero: "Acción / Plataformas",
      desarrolladora: "Ubisoft Montreal"
    }
  ]
},
  {
  consola: "Game Boy Advance",
  lista: [
    {
      titulo: "The Legend of Zelda: The Minish Cap",
      duracion: "11.5h",
      anio: "2004",
      genero: "Acción / Aventura",
      desarrolladora: "Capcom / Flagship"
    },
    {
      titulo: "Metroid Fusion",
      duracion: "5h",
      anio: "2002",
      genero: "Metroidvania / Acción",
      desarrolladora: "Nintendo R&D1"
    },
    {
      titulo: "Final Fantasy Tactics Advance",
      duracion: "43h",
      anio: "2003",
      genero: "RPG Táctico",
      desarrolladora: "Square Enix"
    },
    {
      titulo: "Golden Sun: The Lost Age",
      duracion: "33.5h",
      anio: "2002",
      genero: "JRPG",
      desarrolladora: "Camelot Software Planning"
    },
    {
      titulo: "Mario & Luigi: Superstar Saga",
      duracion: "18.5h",
      anio: "2003",
      genero: "JRPG / Acción",
      desarrolladora: "AlphaDream"
    },
    {
      titulo: "Wario Land 4",
      duracion: "5.5h",
      anio: "2001",
      genero: "Plataformas",
      desarrolladora: "Nintendo R&D1"
    },
    {
      titulo: "Mother 3",
      duracion: "27h",
      anio: "2006",
      genero: "JRPG",
      desarrolladora: "HAL Laboratory / Brownie Brown"
    },
    {
      titulo: "Tactics Ogre: The Knight of Lodis",
      duracion: "30h",
      anio: "2001",
      genero: "RPG Táctico",
      desarrolladora: "Quest"
    },
    {
      titulo: "Fire Emblem: The Sacred Stones",
      duracion: "22h",
      anio: "2004",
      genero: "RPG Táctico",
      desarrolladora: "Intelligent Systems"
    },
    {
      titulo: "Super Robot Taisen: Original Generation 2",
      duracion: "29.5h",
      anio: "2005",
      genero: "RPG Táctico",
      desarrolladora: "Banpresto"
    },
    {
      titulo: "Rhythm Tengoku",
      duracion: "4h",
      anio: "2006",
      genero: "Rítmico",
      desarrolladora: "Nintendo SPD"
    },
    {
      titulo: "Klonoa: Empire of Dreams",
      duracion: "5h",
      anio: "2001",
      genero: "Plataformas / Puzle",
      desarrolladora: "Namco"
    },
    {
      titulo: "Sonic Advance 2",
      duracion: "3h",
      anio: "2002",
      genero: "Plataformas",
      desarrolladora: "Dimps / Sonic Team"
    },
    {
      titulo: "Shining Force: Resurrection of the Dark Dragon",
      duracion: "18.5h",
      anio: "2004",
      genero: "RPG Táctico",
      desarrolladora: "Amusement Vision"
    },
    {
      titulo: "Castlevania: Circle of the Moon",
      duracion: "8.5h",
      anio: "2001",
      genero: "Metroidvania / Acción",
      desarrolladora: "Konami"
    },
    {
      titulo: "Super Mario Advance 4: Super Mario Bros. 3",
      duracion: "5h",
      anio: "2003",
      genero: "Plataformas",
      desarrolladora: "Nintendo EAD"
    }
  ]
},
  {
  consola: "Nintendo Wii",
  lista: [
    {
      titulo: "New Super Mario Bros. Wii",
      duracion: "7h",
      anio: "2009",
      genero: "Plataformas",
      desarrolladora: "Nintendo EAD"
    },
    {
      titulo: "Super Smash Bros. Brawl",
      duracion: "11.5h",
      anio: "2008",
      genero: "Lucha / Plataformas",
      desarrolladora: "Sora Ltd. / Game Arts"
    },
    {
      titulo: "Kirby's Return to Dream Land",
      duracion: "6.5h",
      anio: "2011",
      genero: "Plataformas",
      desarrolladora: "HAL Laboratory"
    },
    {
      titulo: "Donkey Kong Country Returns",
      duracion: "11h",
      anio: "2010",
      genero: "Plataformas",
      desarrolladora: "Retro Studios"
    },
    {
      titulo: "Super Mario Galaxy",
      duracion: "13.5h",
      anio: "2007",
      genero: "Plataformas 3D",
      desarrolladora: "Nintendo EAD Tokyo"
    },
    {
      titulo: "Xenoblade Chronicles",
      duracion: "67.5h",
      anio: "2010",
      genero: "JRPG / Acción",
      desarrolladora: "Monolith Soft"
    },
    {
      titulo: "No More Heroes",
      duracion: "11h",
      anio: "2007",
      genero: "Acción / Hack and Slash",
      desarrolladora: "Grasshopper Manufacture"
    },
    {
      titulo: "Super Paper Mario",
      duracion: "18.5h",
      anio: "2007",
      genero: "RPG / Plataformas",
      desarrolladora: "Intelligent Systems"
    },
    {
      titulo: "Klonoa",
      duracion: "4.5h",
      anio: "2008",
      genero: "Plataformas",
      desarrolladora: "Paon"
    },
    {
      titulo: "Muramasa: The Demon Blade",
      duracion: "10.5h",
      anio: "2009",
      genero: "Hack and Slash / Action RPG",
      desarrolladora: "Vanillaware"
    },
    {
      titulo: "Transformers Prime: The Game",
      duracion: "4h",
      anio: "2012",
      genero: "Acción / Beat 'em up",
      desarrolladora: "Now Production"
    },
    {
      titulo: "Mega Man 9",
      duracion: "3.5h",
      anio: "2008",
      genero: "Plataformas / Acción",
      desarrolladora: "Inti Creates / Capcom"
    },
    {
      titulo: "Rhythm Heaven Fever",
      duracion: "6.5h",
      anio: "2011",
      genero: "Rítmico",
      desarrolladora: "Nintendo SPD / TNX"
    },
    {
      titulo: "Endless Ocean: Blue World",
      duracion: "15h",
     anio: "2009",
      genero: "Aventura / Simulación",
      desarrolladora: "Arika"
    }
  ]
},
{
  consola: "Nintendo DS",
  lista: [
    {
      titulo: "The Legend of Zelda: Phantom Hourglass",
      duracion: "13.5h",
      año: "2007",
        genero: "Acción / Aventura",
        desarrolladora: "Nintendo EAD"
      },
      {
        titulo: "New Super Mario Bros.",
        duracion: "7h",
        anio: "2006",
        genero: "Plataformas",
        desarrolladora: "Nintendo EAD"
      },
      {
        titulo: "Castlevania: Portrait of Ruin",
        duracion: "10h",
        anio: "2006",
        genero: "Metroidvania / Acción",
        desarrolladora: "Konami"
      },
      {
        titulo: "Dragon Quest V: Hand of the Heavenly Bride",
        duracion: "30.5h",
        anio: "2008",
        genero: "JRPG",
        desarrolladora: "ArtePiazza / Square Enix"
      },
      {
        titulo: "GTA: Chinatown Wars",
        duracion: "11h",
        anio: "2009",
        genero: "Acción / Mundo Abierto",
        desarrolladora: "Rockstar Leeds"
      },
      {
        titulo: "Elite Beat Agents",
        duracion: "7h",
        anio: "2006",
        genero: "Rítmico",
        desarrolladora: "iNiS / Nintendo"
      },
      {
        titulo: "Mario & Luigi: Bowser's Inside Story",
        duracion: "22.5h",
        anio: "2009",
        genero: "JRPG / Acción",
        desarrolladora: "AlphaDream"
      },
      {
        titulo: "Ace Attorney - Trials and Tribulations",
        duracion: "20h",
        anio: "2007",
        genero: "Aventura Visual / Misterio",
        desarrolladora: "Capcom"
      },
      {
        titulo: "Professor Layton and the Curious Village",
        duracion: "12h",
        anio: "2007",
        genero: "Puzle / Aventura",
        desarrolladora: "Level-5"
      },
      {
        titulo: "Jump Ultimate Stars",
        duracion: "9.5h",
        anio: "2006",
        genero: "Lucha",
        desarrolladora: "Ganbarion"
      },
      {
        titulo: "SMT: Devil Survivor",
        duracion: "31.5h",
        anio: "2009",
        genero: "RPG Táctico",
        desarrolladora: "Atlus"
      },
      {
        titulo: "Ninja Gaiden: Dragon Sword",
        duracion: "6h",
        anio: "2008",
        genero: "Acción / Hack and Slash",
        desarrolladora: "Team Ninja"
      },
      {
        titulo: "Trauma Center: Under the Knife 2",
        duracion: "9.5h",
        anio: "2008",
        genero: "Simulación / Puzle",
        desarrolladora: "Vanguard Works / Atlus"
      },
      {
        titulo: "Lock's Quest",
        duracion: "13.5h",
        anio: "2008",
        genero: "Estrategia / Tower Defense",
        desarrolladora: "5th Cell"
      },
      {
        titulo: "Sonic Colors",
        duracion: "4.5h",
        anio: "2010",
        genero: "Plataformas",
        desarrolladora: "Dimps / Sonic Team"
      },
      {
        titulo: "Age of Empires: The Age of Kings",
        duracion: "18h",
        anio: "2006",
        genero: "Estrategia por Turnos",
        desarrolladora: "Backbone Entertainment"
      },
      {
        titulo: "Yoshi's Island DS",
        duracion: "9.5h",
      anio: "2006",
      genero: "Plataformas",
      desarrolladora: "Artoon"
    },
    {
      titulo: "Diddy Kong Racing DS",
      duracion: "6.5h",
      anio: "2007",
        genero: "Carreras",
        desarrolladora: "Rare"
      },
      {
        titulo: "Kirby: Squeak Squad",
        duracion: "5h",
        anio: "2006",
        genero: "Plataformas",
        desarrolladora: "Flagship / HAL Laboratory"
      }
  ]
},
{
  consola: "PSP",
  lista: [
    {
      titulo: "Metal Gear Solid: Peace Walker",
      duracion: "15.5h",
      anio: "2010",
      genero: "Acción / Sigilo",
      desarrolladora: "Kojima Productions"
    },
    {
      titulo: "Jeanne d'Arc",
      duracion: "33.5h",
      anio: "2006",
      genero: "RPG Táctico",
      desarrolladora: "Level-5"
    },
    {
      titulo: "Secret Agent Clank",
      duracion: "7h",
      anio: "2008",
      genero: "Plataformas / Acción",
      desarrolladora: "High Impact Games"
    },
    {
      titulo: "Killzone: Liberation",
      duracion: "6.5h",
      anio: "2006",
      genero: "Shooter Táctico / Acción",
      desarrolladora: "Guerrilla Games"
    },
    {
      titulo: "Gurumin: A Monstrous Adventure",
      duracion: "11.5h",
      anio: "2004",
      genero: "Action RPG / Plataformas",
      desarrolladora: "Nihon Falcom"
    },
    {
      titulo: "Persona 3 Portable",
      duracion: "65.5h",
      anio: "2009",
      genero: "JRPG",
      desarrolladora: "Atlus"
    },
    {
      titulo: "Tactics Ogre: Let Us Cling Together",
      duracion: "56.5h",
      anio: "2010",
      genero: "RPG Táctico",
      desarrolladora: "Square Enix"
    },
    {
      titulo: "Monster Hunter Freedom Unite",
      duracion: "78.5h",
      anio: "2008",
      genero: "Action RPG",
      desarrolladora: "Capcom"
    },
    {
      titulo: "Kingdom Hearts: Birth by Sleep",
      duracion: "26.5h",
      anio: "2010",
      genero: "Action RPG",
      desarrolladora: "Square Enix"
    },
    {
      titulo: "Final Fantasy Tactics: War of the Lions",
      duracion: "38.5h",
      anio: "2007",
      genero: "RPG Táctico",
      desarrolladora: "Square Enix"
    },
    {
      titulo: "Disgaea 2: Dark Hero Days",
      duracion: "41.5h",
      anio: "2009",
      genero: "RPG Táctico",
      desarrolladora: "Nippon Ichi Software"
    },
    {
      titulo: "Ghost Rider",
      duracion: "4.5h",
      anio: "2007",
      genero: "Hack and Slash / Acción",
      desarrolladora: "Climax Group"
    },
    {
      titulo: "The Legend of Heroes: Trails in the Sky",
      duracion: "50.5h",
      anio: "2004",
      genero: "JRPG",
      desarrolladora: "Nihon Falcom"
    },
    {
      titulo: "Phantasy Star Portable 2",
      duracion: "26.5h",
      anio: "2009",
      genero: "Action RPG",
      desarrolladora: "Alfa System / Sega"
    },
    {
      titulo: "Patapon",
      duracion: "13.5h",
      anio: "2007",
      genero: "Rítmico / Estrategia",
      desarrolladora: "Pyramid / Japan Studio"
    },
    {
      titulo: "LittleBigPlanet",
      duracion: "5.5h",
      anio: "2009",
      genero: "Plataformas",
      desarrolladora: "SCE Cambridge Studio"
    },
    {
      titulo: "Kenka Bancho: Badass Rumble",
      duracion: "6.5h",
      anio: "2008",
      genero: "Beat 'em up / Acción",
      desarrolladora: "Spike"
    },
    {
      titulo: "Dante's Inferno",
      duracion: "6h",
      anio: "2010",
      genero: "Hack and Slash / Acción",
      desarrolladora: "A2M"
    },
    {
      titulo: "Resistance: Retribution",
      duracion: "8h",
      anio: "2009",
      genero: "TPS / Acción",
      desarrolladora: "Bend Studio"
    },
    {
      titulo: "Tenchu: Shadow Assassins",
      duracion: "7.5h",
      anio: "2009",
      genero: "Sigilo / Acción",
      desarrolladora: "Acquire"
    },
    {
      titulo: "Silent Hill: Origins",
      duracion: "6h",
      anio: "2007",
      genero: "Survival Horror",
      desarrolladora: "Climax Action"
    },
    {
      titulo: "Corpse Party",
      duracion: "11h",
      anio: "2010",
      genero: "Survival Horror / Aventura",
      desarrolladora: "Team GrisGris / 5pb."
    },
    {
      titulo: "Class of Heroes",
      duracion: "38.5h",
      anio: "2008",
      genero: "Dungeon Crawler / RPG",
      desarrolladora: "ZeroDiv"
    },
    {
      titulo: "Crisis Core: Final Fantasy VII",
      duracion: "18h",
      anio: "2007",
      genero: "Action RPG",
      desarrolladora: "Square Enix"
    },
    {
      titulo: "PixelJunk Monsters Deluxe",
      duracion: "15.5h",
      anio: "2009",
      genero: "Tower Defense / Estrategia",
      desarrolladora: "Q-Games"
    },
    {
      titulo: "Syphon Filter: Dark Mirror",
      duracion: "7.5h",
      anio: "2006",
      genero: "TPS / Sigilo",
      desarrolladora: "Bend Studio"
    },
    {
      titulo: "Tekken 5: Dark Resurrection",
      duracion: "1.5h",
      anio: "2006",
      genero: "Lucha",
      desarrolladora: "Bandai Namco Games"
    },
    {
      titulo: "Monster Hunter Portable 3rd",
      duracion: "63.5h",
      anio: "2010",
      genero: "Action RPG",
      desarrolladora: "Capcom"
    },
    {
      titulo: "Persona 1",
      duracion: "31.5h",
      anio: "2009",
      genero: "JRPG",
      desarrolladora: "Atlus"
    }
  ]
},
  {
  consola: "Nintendo 3DS",
  lista: [
    {
      titulo: "3D Shinobi III",
      duracion: "2h",
      anio: "2013",
      genero: "Acción / Plataformas",
      desarrolladora: "M2 / SEGA"
    },
    {
      titulo: "Dragon Quest Monsters: Terry's Wonderland 3D",
      duracion: "27h",
      anio: "2012",
      genero: "JRPG / Captura de Monstruos",
      desarrolladora: "Square Enix"
    },
    {
      titulo: "Dragon Quest VIII",
      duracion: "61.5h",
      anio: "2015",
      genero: "JRPG",
      desarrolladora: "Level-5 / Square Enix"
    },
    {
      titulo: "The Legend of Zelda: A Link Between Worlds",
      duracion: "13.5h",
      anio: "2013",
      genero: "Acción / Aventura",
      desarrolladora: "Nintendo EAD"
    },
    {
      titulo: "Super Mario 3D Land",
      duracion: "7h",
      anio: "2011",
      genero: "Plataformas 3D",
      desarrolladora: "Nintendo EAD Tokyo"
    },
    {
      titulo: "Fire Emblem: Awakening",
      duracion: "28h",
      anio: "2012",
      genero: "RPG Táctico",
      desarrolladora: "Intelligent Systems"
    },
    {
      titulo: "Shovel Knight",
      duracion: "7h",
      anio: "2014",
      genero: "Plataformas / Acción",
      desarrolladora: "Yacht Club Games"
    },
    {
      titulo: "Super Smash Bros. for 3DS",
      duracion: "2.5h",
      anio: "2014",
      genero: "Lucha / Plataformas",
      desarrolladora: "Bandai Namco Studios / Sora Ltd."
    },
    {
      titulo: "Pushmo",
      duracion: "10h",
      anio: "2011",
      genero: "Puzle",
      desarrolladora: "Intelligent Systems"
    },
    {
      titulo: "Metroid: Samus Returns",
      duracion: "11h",
      anio: "2017",
      genero: "Metroidvania / Acción",
      desarrolladora: "MercurySteam / Nintendo"
    },
    {
      titulo: "Mutant Mudds: Super Challenge",
      duracion: "4h",
      anio: "2016",
      genero: "Plataformas",
      desarrolladora: "Renegade Kid"
    },
    {
      titulo: "Pokémon Sun",
      duracion: "32.5h",
      anio: "2016",
      genero: "JRPG / Captura de Monstruos",
      desarrolladora: "Game Freak"
    },
    {
      titulo: "Mario Kart 7",
      duracion: "3.5h",
      anio: "2011",
      genero: "Carreras",
      desarrolladora: "Nintendo EAD / Retro Studios"
    },
    {
      titulo: "Kid Icarus: Uprising",
      duracion: "9.5h",
      anio: "2012",
      genero: "TPS / Rail Shooter",
      desarrolladora: "Project Sora"
    }
  ]
},
  {
  consola: "PC / Windows",
  lista: [
    {
      titulo: "Half-Life",
      duracion: "11.5h",
      anio: "1998",
      genero: "FPS / Ciencia Ficción",
      desarrolladora: "Valve"
    },
    {
      titulo: "Ship of Harkinian (Ocarina of Time)",
      duracion: "26.5h",
      anio: "2022",
      genero: "Acción / Aventura",
      desarrolladora: "Harbour Masters"
    },
    {
      titulo: "Battlefield 1942",
      duracion: "12h",
      anio: "2002",
      genero: "FPS / Bélico",
      desarrolladora: "DICE"
    },
    {
      titulo: "Borderlands",
      duracion: "22.5h",
      anio: "2009",
      genero: "FPS / Looter Shooter",
      desarrolladora: "Gearbox Software"
    },
    {
      titulo: "Naruto Shippuden: Ultimate Ninja Storm",
      duracion: "10.5h",
      anio: "2008",
      genero: "Lucha / Acción",
      desarrolladora: "CyberConnect2"
    },
    {
      titulo: "Naruto Shippuden: Ultimate Ninja Storm 2",
      duracion: "15h",
      anio: "2010",
      genero: "Lucha / Acción",
      desarrolladora: "CyberConnect2"
    },
    {
      titulo: "Naruto Shippuden: Ultimate Ninja Storm 3",
      duracion: "11.5h",
      anio: "2013",
      genero: "Lucha / Acción",
      desarrolladora: "CyberConnect2"
    },
    {
      titulo: "Naruto Shippuden: Ultimate Ninja Storm 4",
      duracion: "9h",
      anio: "2016",
      genero: "Lucha / Acción",
      desarrolladora: "CyberConnect2"
    },
    {
      titulo: "Dragon Ball Xenoverse",
      duracion: "17h",
      anio: "2015",
      genero: "Lucha / Action RPG",
      desarrolladora: "Dimps"
    },
    {
      titulo: "Dragon Ball Xenoverse 2",
      duracion: "19.5h",
      anio: "2016",
      genero: "Lucha / Action RPG",
      desarrolladora: "Dimps"
    },
    {
      titulo: "Celeste",
      duracion: "8h",
      anio: "2018",
      genero: "Plataformas",
      desarrolladora: "Maddy Makes Games"
    },
    {
      titulo: "Cuphead",
      duracion: "10.5h",
      anio: "2017",
      genero: "Run and Gun / Acción",
      desarrolladora: "Studio MDHR"
    },
    {
      titulo: "Pariah",
      duracion: "6.5h",
      anio: "2005",
      genero: "FPS",
      desarrolladora: "Digital Extremes"
    },
    {
      titulo: "Max Payne 1",
      duracion: "8h",
      anio: "2001",
      genero: "TPS / Acción",
      desarrolladora: "Remedy Entertainment"
    },
    {
      titulo: "Medal of Honor: Allied Assault",
      duracion: "7.5h",
      anio: "2002",
      genero: "FPS / Bélico",
      desarrolladora: "2015, Inc."
    },
    {
      titulo: "Beyond Good & Evil",
      duracion: "10h",
      anio: "2003",
      genero: "Acción / Aventura",
      desarrolladora: "Ubisoft Pictures"
    },
    {
      titulo: "Doom 3",
      duracion: "11h",
      anio: "2004",
      genero: "FPS / Survival Horror",
      desarrolladora: "id Software"
    },
    {
      titulo: "F.E.A.R.",
      duracion: "8h",
      anio: "2005",
      genero: "FPS / Terror",
      desarrolladora: "Monolith Productions"
    },
    {
      titulo: "TES IV: Oblivion",
      duracion: "27.5h",
      anio: "2006",
      genero: "ARPG / Mundo Abierto",
      desarrolladora: "Bethesda Game Studios"
    },
    {
      titulo: "Company of Heroes 1",
      duracion: "15.5h",
      anio: "2006",
      genero: "Estrategia (RTS)",
      desarrolladora: "Relic Entertainment"
    },
    {
      titulo: "Hitman: Blood Money",
      duracion: "13h",
      anio: "2006",
      genero: "Sigilo / Acción",
      desarrolladora: "IO Interactive"
    },
    {
      titulo: "Yakuza 0",
      duracion: "31.5h",
      anio: "2015",
      genero: "Acción / Beat 'em up",
      desarrolladora: "Ryu Ga Gotoku Studio"
    },
    {
      titulo: "2 Ship 2 Harkinian (Majora's Mask)",
      duracion: "20.5h",
      anio: "2024",
      genero: "Acción / Aventura",
      desarrolladora: "Harbour Masters"
    },
    {
      titulo: "Perfect Dark",
      duracion: "9.5h",
      anio: "2000",
      genero: "FPS / Sigilo",
      desarrolladora: "Rare"
    },
    {
      titulo: "The Binding of Isaac: Rebirth",
      duracion: "11.5h",
      anio: "2014",
      genero: "Roguelike / Puzle",
      desarrolladora: "Nicalis / Edmund McMillen"
    },
    {
      titulo: "Left 4 Dead 1",
      duracion: "6h",
      anio: "2008",
      genero: "FPS / Supervivencia",
      desarrolladora: "Valve / Turtle Rock Studios"
    },
    {
      titulo: "Transformers: Fall of Cybertron",
      duracion: "8.5h",
      anio: "2012",
      genero: "TPS / Acción",
      desarrolladora: "High Moon Studios"
    },
    {
      titulo: "PAC-MAN WORLD Re-PAC",
      duracion: "5h",
      anio: "2022",
      genero: "Plataformas 3D",
      desarrolladora: "NOW Production"
    },
    {
      titulo: "Blasphemous 2",
      duracion: "14h",
      anio: "2023",
      genero: "Metroidvania / Hack and Slash",
      desarrolladora: "The Game Kitchen"
    },
    {
      titulo: "Tomb Raider (2013)",
      duracion: "11.5h",
      anio: "2013",
      genero: "Acción / Aventura",
      desarrolladora: "Crystal Dynamics"
    },
    {
      titulo: "Sleeping Dogs",
      duracion: "14.5h",
      anio: "2012",
      genero: "Acción / Mundo Abierto",
      desarrolladora: "United Front Games"
    },
    {
      titulo: "Assassin's Creed Brotherhood",
      duracion: "15h",
      anio: "2010",
      genero: "Acción / Sigilo",
      desarrolladora: "Ubisoft Montreal"
    },
    {
      titulo: "Mafia II",
      duracion: "12h",
      anio: "2010",
      genero: "Acción / Mundo Abierto",
      desarrolladora: "2K Czech"
    },
    {
      titulo: "Just Cause 2",
      duracion: "18h",
      anio: "2010",
      genero: "Acción / Mundo Abierto",
      desarrolladora: "Avalanche Studios"
    },
    {
      titulo: "Mirror's Edge",
      duracion: "6h",
      anio: "2008",
      genero: "Plataformas / FPS",
      desarrolladora: "DICE"
    },
    {
      titulo: "Dead Space",
      duracion: "11h",
      anio: "2008",
      genero: "Survival Horror / TPS",
      desarrolladora: "EA Redwood Shores"
    },
    {
      titulo: "Dead Cells",
      duracion: "14.5h",
      anio: "2018",
      genero: "Roguelite / Metroidvania",
      desarrolladora: "Motion Twin"
    },
    {
      titulo: "Shovel Knight",
      duracion: "7h",
      anio: "2014",
      genero: "Plataformas / Acción",
      desarrolladora: "Yacht Club Games"
    },
    {
      titulo: "Inside",
      duracion: "3.5h",
      anio: "2016",
      genero: "Plataformas / Puzle",
      desarrolladora: "Playdead"
    },
    {
      titulo: "Call of Duty 4: Modern Warfare",
      duracion: "7h",
      anio: "2007",
      genero: "FPS",
      desarrolladora: "Infinity Ward"
    },
    {
      titulo: "Deus Ex: Human Revolution",
      duracion: "21.5h",
      anio: "2011",
      genero: "Action RPG / Sigilo",
      desarrolladora: "Eidos-Montréal"
    },
    {
      titulo: "Crysis",
      duracion: "10h",
      anio: "2007",
      genero: "FPS / Ciencia Ficción",
      desarrolladora: "Crytek"
    },
    {
      titulo: "Animal Well",
      duracion: "7.5h",
      anio: "2024",
      genero: "Metroidvania / Puzle",
      desarrolladora: "Shared Memory"
    },
    {
      titulo: "Ori and the Blind Forest: Definitive Edition",
      duracion: "8h",
      anio: "2016",
      genero: "Metroidvania / Plataformas",
      desarrolladora: "Moon Studios"
    },
    {
      titulo: "Katana ZERO",
      duracion: "4.5h",
      anio: "2019",
      genero: "Acción / Hack and Slash",
      desarrolladora: "Askiソフト"
    },
    {
      titulo: "Rayman Legends",
      duracion: "10h",
      anio: "2013",
      genero: "Plataformas",
      desarrolladora: "Ubisoft Montpellier"
    },
    {
      titulo: "Ōkami HD",
      duracion: "33.5h",
      anio: "2012",
      genero: "Acción / Aventura",
      desarrolladora: "Clover Studio / HexaDrive"
    },
    {
      titulo: "Max Payne 3",
      duracion: "12h",
      anio: "2012",
      genero: "TPS / Acción",
      desarrolladora: "Rockstar Studios"
    },
    {
      titulo: "Sonic Colors: Ultimate",
      duracion: "4.5h",
      anio: "2021",
      genero: "Plataformas",
      desarrolladora: "Blind Squirrel Games"
    },
    {
      titulo: "Assassin's Creed III",
      duracion: "16h",
      anio: "2012",
      genero: "Acción / Aventura",
      desarrolladora: "Ubisoft Montreal"
    },
    {
      titulo: "Assassin's Creed IV: Black Flag",
      duracion: "23.5h",
      anio: "2013",
      genero: "Acción / Mundo Abierto",
      desarrolladora: "Ubisoft Montreal"
    },
    {
      titulo: "TMNT: Shredder's Revenge",
      duracion: "2.5h",
      anio: "2022",
      genero: "Beat 'em up",
      desarrolladora: "Tribute Games"
    },
    {
      titulo: "StarCraft II: Wings of Liberty",
      duracion: "15h",
      anio: "2010",
      genero: "Estrategia (RTS)",
      desarrolladora: "Blizzard Entertainment"
    },
    {
      titulo: "Fallout: New Vegas",
      duracion: "27.5h",
      anio: "2010",
      genero: "Action RPG / Mundo Abierto",
      desarrolladora: "Obsidian Entertainment"
    },
    {
      titulo: "Metro 2033",
      duracion: "9h",
      anio: "2010",
      genero: "FPS / Survival Horror",
      desarrolladora: "4A Games"
    },
    {
      titulo: "Limbo",
      duracion: "3.5h",
      anio: "2010",
      genero: "Plataformas / Puzle",
      desarrolladora: "Playdead"
    },
    {
      titulo: "The Thing Remastered",
      duracion: "7.5h",
      anio: "2024",
      genero: "Survival Horror / TPS",
      desarrolladora: "Nightdive Studios"
    },
    {
      titulo: "GTA Vice City",
      duracion: "18.5h",
      anio: "2002",
      genero: "Acción / Mundo Abierto",
      desarrolladora: "Rockstar North"
    },
    {
      titulo: "Call of Duty (Deluxe)",
      duracion: "6.5h",
      anio: "2003",
      genero: "FPS",
      desarrolladora: "Infinity Ward"
    },
    {
      titulo: "Call of Duty: World at War",
      duracion: "7.5h",
      anio: "2008",
      genero: "FPS",
      desarrolladora: "Treyarch"
    },
    {
      titulo: "Call of Duty: Modern Warfare 2",
      duracion: "6.5h",
      anio: "2009",
      genero: "FPS",
      desarrolladora: "Infinity Ward"
    },
    {
      titulo: "Battlefield 3",
      duracion: "6h",
      anio: "2011",
      genero: "FPS",
      desarrolladora: "DICE"
    },
    {
      titulo: "Transformers: Devastation",
      duracion: "6h",
      anio: "2015",
      genero: "Hack and Slash / Acción",
      desarrolladora: "PlatinumGames"
    },
    {
      titulo: "Battlefield: Bad Company 2",
      duracion: "7h",
      anio: "2010",
      genero: "FPS",
      desarrolladora: "DICE"
    },
    {
      titulo: "Amnesia: The Dark Descent",
      duracion: "8h",
      anio: "2010",
      genero: "Survival Horror",
      desarrolladora: "Frictional Games"
    },
    {
      titulo: "Enslaved: Odyssey to the West",
      duracion: "9.5h",
      anio: "2010",
      genero: "Acción / Aventura",
      desarrolladora: "Ninja Theory"
    },
    {
      titulo: "TES V: Skyrim",
      duracion: "34.5h",
      anio: "2011",
      genero: "ARPG / Mundo Abierto",
      desarrolladora: "Bethesda Game Studios"
    },
    {
      titulo: "Dark Souls: Remastered",
      duracion: "41.5h",
      anio: "2018",
      genero: "Action RPG",
      desarrolladora: "QLOC / FromSoftware"
    },
    {
      titulo: "L.A. Noire",
      duracion: "21.5h",
      anio: "2011",
      genero: "Aventura / Misterio",
      desarrolladora: "Team Bondi"
    },
    {
      titulo: "Saints Row: The Third",
      duracion: "14.5h",
      anio: "2011",
      genero: "Acción / Mundo Abierto",
      desarrolladora: "Volition"
    },
    {
      titulo: "Alice: Madness Returns",
      duracion: "13.5h",
      anio: "2011",
      genero: "Plataformas / Acción",
      desarrolladora: "Spicy Horse"
    },
    {
      titulo: "The Walking Dead",
      duracion: "11.5h",
      anio: "2012",
      genero: "Aventura Gráfica",
      desarrolladora: "Telltale Games"
    },
    {
      titulo: "Call of Duty: Black Ops 2",
      duracion: "7h",
      anio: "2012",
      genero: "FPS",
      desarrolladora: "Treyarch"
    },
    {
      titulo: "Spec Ops: The Line",
      duracion: "6h",
      anio: "2012",
      genero: "TPS / Acción",
      desarrolladora: "Yager Development"
    },
    {
      titulo: "BioShock Infinite",
      duracion: "11.5h",
      anio: "2013",
      genero: "FPS / Ciencia Ficción",
      desarrolladora: "Irrational Games"
    },
    {
      titulo: "Metro: Last Light",
      duracion: "10h",
      anio: "2013",
      genero: "FPS / Survival Horror",
      desarrolladora: "4A Games"
    },
    {
      titulo: "Battlefield 4",
      duracion: "6h",
      anio: "2013",
      genero: "FPS",
      desarrolladora: "DICE"
    },
    {
      titulo: "Outlast",
      duracion: "5h",
      anio: "2013",
      genero: "Survival Horror",
      desarrolladora: "Red Barrels"
    },
    {
      titulo: "The Stanley Parable",
      duracion: "1.5h",
      anio: "2013",
      genero: "Aventura / Narrativo",
      desarrolladora: "Galactic Cafe"
    },
    {
      titulo: "Assassin's Creed 2",
      duracion: "19h",
      anio: "2009",
      genero: "Acción / Aventura",
      desarrolladora: "Ubisoft Montreal"
    },
    {
      titulo: "Mega Man 3 (Legacy Collection)",
      duracion: "2.5h",
      anio: "2015",
      genero: "Plataformas / Acción",
      desarrolladora: "Digital Eclipse"
    },
    {
      titulo: "Final Fantasy VI Pixel Remaster",
      duracion: "35h",
      anio: "2022",
      genero: "JRPG",
      desarrolladora: "Square Enix"
    },
    {
      titulo: "Wild Guns Reloaded",
      duracion: "1h",
      anio: "2017",
      genero: "Shoot 'em up / Arcade",
      desarrolladora: "NatsumeAtari"
    },
    {
      titulo: "PAC-MAN WORLD 2 Re-PAC",
      duracion: "6.5h",
      anio: "2025",
      genero: "Plataformas 3D",
      desarrolladora: "Bandai Namco Studios"
    },
    {
      titulo: "Legacy of Kain: Soul Reaver 1 Remastered",
      duracion: "13.5h",
      anio: "2024",
      genero: "Acción / Aventura",
      desarrolladora: "Aspyr / Crystal Dynamics"
    },
    {
      titulo: "Turok 2 Remastered",
      duracion: "12.5h",
      anio: "2015",
      genero: "FPS / Acción",
      desarrolladora: "Nightdive Studios"
    },
    {
      titulo: "Shadow Man Remastered",
      duracion: "17.5h",
      anio: "2021",
      genero: "Acción / Aventura",
      desarrolladora: "Nightdive Studios"
    },
    {
      titulo: "Silent Hill 2 Enhanced Edition",
      duracion: "8h",
      anio: "2018",
      genero: "Survival Horror",
      desarrolladora: "Townfall Team"
    },
    {
      titulo: "LEGO Indiana Jones: The Original Adventures",
      duracion: "27h",
      anio: "2008",
      genero: "Acción / Aventura",
      desarrolladora: "TT Games"
    },
    {
      titulo: "DMC HD Collection (DMC 1)",
      duracion: "6h",
      anio: "2018",
      genero: "Hack and Slash",
      desarrolladora: "Capcom"
    },
    {
      titulo: "GTA III",
      duracion: "15.5h",
      anio: "2001",
      genero: "Acción / Mundo Abierto",
      desarrolladora: "DMA Design"
    },
    {
      titulo: "The Simpsons: Hit & Run",
      duracion: "10h",
      anio: "2003",
      genero: "Acción / Conducción",
      desarrolladora: "Radical Entertainment"
    },
    {
      titulo: "Manhunt 2",
      duracion: "6.5h",
      anio: "2007",
      genero: "Sigilo / Survival Horror",
      desarrolladora: "Rockstar Vienna"
    },
    {
      titulo: "Sonic Adventure 2",
      duracion: "9.5h",
      anio: "2012",
      genero: "Plataformas 3D",
      desarrolladora: "Sonic Team"
    },
    {
      titulo: "Prince of Persia: The Sands of Time",
      duracion: "9h",
      anio: "2003",
      genero: "Acción / Plataformas",
      desarrolladora: "Ubisoft Montreal"
    },
    {
      titulo: "Bayonetta",
      duracion: "11.5h",
      anio: "2017",
      genero: "Hack and Slash",
      desarrolladora: "PlatinumGames"
    },
    {
      titulo: "Vanquish",
      duracion: "6h",
      anio: "2017",
      genero: "TPS / Acción",
      desarrolladora: "PlatinumGames"
    },
    {
      titulo: "The Wonderful 101",
      duracion: "18h",
      anio: "2020",
      genero: "Acción / Hack and Slash",
      desarrolladora: "PlatinumGames"
    },
    {
      titulo: "Dragon's Dogma: Dark Arisen",
      duracion: "32.5h",
      anio: "2016",
      genero: "Action RPG",
      desarrolladora: "Capcom"
    },
    {
      titulo: "Sea of Stars",
      duracion: "30.5h",
      anio: "2023",
      genero: "JRPG",
      desarrolladora: "Sabotage Studio"
    },
    {
      titulo: "Super Meat Boy",
      duracion: "10h",
      anio: "2010",
      genero: "Plataformas",
      desarrolladora: "Team Meat"
    },
    {
      titulo: "Quake Enhanced Edition",
      duracion: "5.5h",
      anio: "2021",
      genero: "FPS",
      desarrolladora: "Nightdive Studios / id Software"
    },
    {
      titulo: "Spongebob Battle for Bikini Bottom Rehydrated",
      duracion: "7.5h",
      anio: "2020",
      genero: "Plataformas 3D",
      desarrolladora: "Purple Lamp Studios"
    },
    {
      titulo: "Half-Life 2",
      duracion: "13h",
      anio: "2004",
      genero: "FPS / Ciencia Ficción",
      desarrolladora: "Valve"
    },
    {
      titulo: "Portal 2",
      duracion: "8.5h",
      anio: "2011",
      genero: "Puzle / FPS",
      desarrolladora: "Valve"
    },
    {
      titulo: "Batman: Arkham City",
      duracion: "12.5h",
      anio: "2011",
      genero: "Acción / Aventura",
      desarrolladora: "Rocksteady Studios"
    },
    {
      titulo: "Alien: Isolation",
      duracion: "18.5h",
      anio: "2014",
      genero: "Survival Horror / Sigilo",
      desarrolladora: "Creative Assembly"
    },
    {
      titulo: "Outlast 2",
      duracion: "7.5h",
      anio: "2017",
      genero: "Survival Horror",
      desarrolladora: "Red Barrels"
    },
    {
      titulo: "Darksiders",
      duracion: "15h",
      anio: "2010",
      genero: "Hack and Slash / Aventura",
      desarrolladora: "Vigil Games"
    },
    {
      titulo: "Kingdoms of Amalur: Reckoning",
      duracion: "31.5h",
      anio: "2012",
      genero: "Action RPG",
      desarrolladora: "38 Studios / Big Huge Games"
    },
    {
      titulo: "Bully: Scholarship Edition",
      duracion: "13h",
      anio: "2008",
      genero: "Acción / Mundo Abierto",
      desarrolladora: "Mad Doc Software / Rockstar"
    },
    {
      titulo: "Prototype",
      duracion: "15.5h",
      anio: "2009",
      genero: "Acción / Mundo Abierto",
      desarrolladora: "Radical Entertainment"
    },
    {
      titulo: "Mark of the Ninja: Remastered",
      duracion: "7.5h",
      anio: "2018",
      genero: "Sigilo / Plataformas",
      desarrolladora: "Klei Entertainment"
    },
    {
      titulo: "The Wolf Among Us",
      duracion: "6.5h",
      anio: "2013",
      genero: "Aventura Gráfica",
      desarrolladora: "Telltale Games"
    },
    {
      titulo: "Bastion",
      duracion: "6h",
      anio: "2011",
      genero: "Action RPG",
      desarrolladora: "Supergiant Games"
    },
    {
      titulo: "Remember Me",
      duracion: "9h",
      anio: "2013",
      genero: "Acción / Aventura",
      desarrolladora: "DONTNOD Entertainment"
    },
    {
      titulo: "Left 4 Dead 2",
      duracion: "8h",
      anio: "2009",
      genero: "FPS / Supervivencia",
      desarrolladora: "Valve"
    },
    {
      titulo: "Ninja Gaiden Ragebound",
      duracion: "3h",
      anio: "2025",
      genero: "Acción / Hack and Slash",
      desarrolladora: "Koei Tecmo"
    },
    {
      titulo: "Far Cry 2",
      duracion: "16.5h",
      anio: "2008",
      genero: "FPS / Mundo Abierto",
      desarrolladora: "Ubisoft Montreal"
    },
    {
      titulo: "Driver: San Francisco",
      duracion: "10.5h",
      anio: "2011",
      genero: "Acción / Conducción",
      desarrolladora: "Ubisoft Reflections"
    },
    {
      titulo: "Broforce",
      duracion: "4h",
      anio: "2015",
      genero: "Run and Gun / Acción",
      desarrolladora: "Free Lives"
    },
    {
      titulo: "Sonic Adventure DX",
      duracion: "4.5h",
      anio: "2004",
      genero: "Plataformas 3D",
      desarrolladora: "Sonic Team"
    },
    {
      titulo: "JoJo’s Bizarre Adventure: All-Star Battle R",
      duracion: "5.5h",
      anio: "2022",
      genero: "Lucha",
      desarrolladora: "CyberConnect2"
    },
    {
      titulo: "Binary Domain",
      duracion: "9h",
      anio: "2012",
      genero: "TPS / Acción",
      desarrolladora: "Devil's Details / Ryu Ga Gotoku Studio"
    },
    {
      titulo: "LEGO Marvel Super Heroes",
      duracion: "42.5h",
      anio: "2013",
      genero: "Acción / Aventura",
      desarrolladora: "TT Games"
    },
    {
      titulo: "LEGO Marvel Super Heroes 2",
      duracion: "57.5h",
      anio: "2017",
      genero: "Acción / Aventura",
      desarrolladora: "TT Games"
    },
    {
      titulo: "GTA San Andreas (+ Mods)",
      duracion: "30.5h",
      anio: "2004",
      genero: "Acción / Mundo Abierto",
      desarrolladora: "Rockstar North"
    },
    {
      titulo: "Batman: Arkham Asylum",
      duracion: "11.5h",
      anio: "2009",
      genero: "Acción / Aventura",
      desarrolladora: "Rocksteady Studios"
    }
  ]
},
];