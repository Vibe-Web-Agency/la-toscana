export type Badge = "signature" | "coup_de_coeur"

export type MenuItem = {
    name: string
    price: number
    category: string
    badges?: Badge[]
}

export const menu: MenuItem[] = [
    // =========================
    // Entrées froides
    // =========================
    { name: "Salade verte", price: 4.5, category: "Entrées froides" },
    { name: "Salade tomates", price: 4.5, category: "Entrées froides" },
    { name: "Œuf dur mayonnaise", price: 5, category: "Entrées froides" },
    { name: "Salade mixte", price: 6, category: "Entrées froides" },
    { name: "Avocat vinaigrette", price: 7, category: "Entrées froides" },
    { name: "Melon nature", price: 8, category: "Entrées froides" },
    { name: "Tomates palermitaine", price: 9, category: "Entrées froides" },
    { name: "Avocat aux crevettes", price: 9, category: "Entrées froides" },
    { name: "Tomates / mozzarella", price: 9.5, category: "Entrées froides" },
    { name: "Melon au porto", price: 12, category: "Entrées froides" },
    { name: "Carpaccio de bœuf", price: 14, category: "Entrées froides" },
    { name: "Melon / jambon de Parme", price: 15, category: "Entrées froides" },
    { name: "Assiette de saumon fumé", price: 15, category: "Entrées froides" },

    // =========================
    // Entrées
    // =========================
    { name: "Salade de gésiers", price: 9, category: "Entrées" },
    { name: "Salade au chèvre chaud", price: 9, category: "Entrées" },
    { name: "6 escargots de Bourgogne", price: 8, category: "Entrées" },
    { name: "12 escargots de Bourgogne", price: 12, category: "Entrées" },

    // =========================
    // Bruschettas
    // =========================
    { name: "Bruschetta jambon de Parme", price: 14, category: "Bruschettas" },
    { name: "Bruschetta saumon crème fraîche", price: 14, category: "Bruschettas" },
    { name: "Bruschetta chèvre miel", price: 14, category: "Bruschettas" },
    { name: "Bruschetta jambon de Paris", price: 14, category: "Bruschettas" },

    // =========================
    // Salades gourmandes
    // =========================
    { name: "Burrata", price: 12, category: "Salades gourmandes" },
    { name: "Bufala", price: 12, category: "Salades gourmandes" },
    { name: "Salade italienne", price: 13, category: "Salades gourmandes" },
    { name: "Salade de poulet", price: 13, category: "Salades gourmandes" },
    {
        name: "Salade La Toscana",
        price: 15,
        category: "Salades gourmandes",
        badges: ["signature"]
    },
    { name: "Salade exotique", price: 16, category: "Salades gourmandes" },
    { name: "Salade du chef", price: 17, category: "Salades gourmandes" },

    // =========================
    // Omelettes
    // =========================
    { name: "Omelette nature", price: 10, category: "Omelettes" },
    { name: "Omelette champignons jambon", price: 12, category: "Omelettes" },

    // =========================
    // Charcuteries
    // =========================
    { name: "Mortadelle", price: 6, category: "Charcuteries" },
    { name: "Salami", price: 6, category: "Charcuteries" },
    { name: "Coppa", price: 6, category: "Charcuteries" },
    { name: "Jambon de Parme", price: 12, category: "Charcuteries" },
    { name: "Assiette charcuterie", price: 14, category: "Charcuteries" },

    // =========================
    // Soupes
    // =========================
    { name: "Soupe minestrone", price: 8, category: "Soupes" },
    { name: "Soupe à l’oignons", price: 8, category: "Soupes" },


    // =========================
    // Viandes – Escalopes de veau
    // =========================
    { name: "Escalope de veau milanaise panée", price: 16, category: "Viandes" },
    { name: "Escalope de veau marsala", price: 18, category: "Viandes" },
    { name: "Escalope de veau pizzaiola", price: 18, category: "Viandes" },
    { name: "Escalope de veau citron", price: 18, category: "Viandes" },
    { name: "Escalope de veau carbonara", price: 18, category: "Viandes" },
    { name: "Escalope de veau 4 fromages", price: 18, category: "Viandes" },
    { name: "Escalope de veau bolognaise", price: 20, category: "Viandes" },
    { name: "Escalope de veau Val d’Aoste", price: 20, category: "Viandes" },
    { name: "Escalope de veau saltimbocca", price: 20, category: "Viandes" },
    { name: "Escalope de veau parmigiana", price: 20, category: "Viandes" },

    // =========================
    // Viandes – Grillades
    // =========================
    { name: "Filet de poulet", price: 12, category: "Viandes" },
    { name: "Pavé de bœuf", price: 18, category: "Viandes" },
    { name: "Entrecôte", price: 20, category: "Viandes" },
    { name: "Magret de canard", price: 20, category: "Viandes" },

    // =========================
    // Poissons
    // =========================
    { name: "Calamari fritti", price: 15, category: "Poissons" },
    { name: "Scampi fritti", price: 17, category: "Poissons" },
    { name: "Scampi fritto misto", price: 17, category: "Poissons" },
    { name: "Pavé de saumon grillé", price: 17, category: "Poissons" },
    { name: "Pavé de saumon sauce citron", price: 18, category: "Poissons" },
    { name: "Pavé de saumon sauce du chef", price: 18, category: "Poissons" },
    { name: "Gambas grillées", price: 20, category: "Poissons" },
    { name: "Gambas flambées au cognac", price: 21, category: "Poissons" },

    // =========================
    // Pizzas
    // =========================
    { name: "Margherita", price: 11, category: "Pizzas" },
    { name: "Tonara", price: 13, category: "Pizzas" },
    { name: "Regina", price: 13, category: "Pizzas" },
    { name: "Calzone", price: 13, category: "Pizzas" },
    { name: "Napolitana", price: 13, category: "Pizzas" },
    { name: "Poulet", price: 13, category: "Pizzas" },
    { name: "Orientale", price: 13, category: "Pizzas" },
    { name: "Chorizo", price: 13, category: "Pizzas" },
    { name: "Hawai", price: 13, category: "Pizzas" },
    { name: "Végétarienne", price: 14, category: "Pizzas" },
    { name: "Campione", price: 14, category: "Pizzas" },
    { name: "Lardons", price: 14, category: "Pizzas" },
    { name: "Parmigiana", price: 14, category: "Pizzas" },
    { name: "Capricciosa", price: 14, category: "Pizzas" },
    { name: "Royale", price: 14, category: "Pizzas" },
    { name: "4 saisons", price: 14, category: "Pizzas" },
    { name: "Chèvre miel", price: 14, category: "Pizzas" },
    { name: "Miel roquette", price: 15, category: "Pizzas" },
    { name: "Chef", price: 15, category: "Pizzas" },
    { name: "3 jambons", price: 15, category: "Pizzas" },
    { name: "4 fromages", price: 15, category: "Pizzas" },
    {
        name: "Toscana",
        price: 15,
        category: "Pizzas",
        badges: ["signature"]
    },
    { name: "Bresaola", price: 17, category: "Pizzas" },
    { name: "Parma", price: 17, category: "Pizzas" },
    { name: "Buffalo", price: 17, category: "Pizzas" },
    { name: "Pescatore", price: 17, category: "Pizzas" },
    { name: "Salmone", price: 17, category: "Pizzas" },
    { name: "Burrata", price: 17, category: "Pizzas" },


    // =========================
    // Pâtes
    // =========================
    { name: "Pâtes ail, huile d’olive, champignons", price: 11, category: "Pâtes" },
    { name: "Pâtes napolitaine", price: 11, category: "Pâtes" },
    { name: "Pâtes bolognaise", price: 11, category: "Pâtes" },
    { name: "Pâtes pistou", price: 11, category: "Pâtes" },
    { name: "Pâtes arrabiata", price: 11, category: "Pâtes" },
    { name: "Pâtes gorgonzola", price: 12, category: "Pâtes" },
    { name: "Pâtes carbonara", price: 12, category: "Pâtes" },
    { name: "Pâtes matriciana", price: 12, category: "Pâtes" },
    { name: "Pâtes 4 fromages", price: 12, category: "Pâtes" },
    { name: "Pâtes végétarienne", price: 12, category: "Pâtes" },
    { name: "Pâtes poulet", price: 12, category: "Pâtes" },
    { name: "Pâtes thon", price: 12, category: "Pâtes" },
    {
        name: "Pâtes Toscana",
        price: 13,
        category: "Pâtes",
        badges: ["signature"]
    },
    { name: "Pâtes fruits de mer", price: 13, category: "Pâtes" },
    { name: "Pâtes salmone", price: 13, category: "Pâtes" },
    { name: "Cocktail de pâtes", price: 18, category: "Pâtes" },

    // =========================
    // Lasagne
    // =========================
    { name: "Lasagne bolognaise", price: 12, category: "Lasagnes" },

    // =========================
    // Aubergines au four
    // =========================
    { name: "Aubergines au four viande hachée", price: 12, category: "Aubergines" },
    { name: "Aubergines au four jambon", price: 12, category: "Aubergines" },

    // =========================
    // Menus
    // =========================
    { name: "Menu midi entrée + plat", price: 14, category: "Menus" },
    { name: "Menu midi plat + dessert", price: 14, category: "Menus" },
    { name: "Menu midi entrée + plat + dessert", price: 16, category: "Menus" },
    { name: "Menu midi entrée + plat + dessert + boisson", price: 18, category: "Menus" },

    { name: "Menu entrée + plat + dessert", price: 28, category: "Menus" },

    { name: "Menu bambino", price: 10, category: "Menus" },

    // =========================
    // Fromages
    // =========================
    { name: "Camembert ou chèvre", price: 6, category: "Fromages" },
    { name: "Fromage blanc", price: 6, category: "Fromages" },
    { name: "Mozzarella", price: 6, category: "Fromages" },
    { name: "Gorgonzola", price: 6, category: "Fromages" },
    { name: "Assortiment de 4 fromages", price: 12, category: "Fromages" },


    // =========================
    // Apéritifs
    // =========================
    { name: "Kir", price: 5, category: "Apéritifs" },
    { name: "Pastis / Ricard", price: 5, category: "Apéritifs" },
    { name: "Vodka", price: 7, category: "Apéritifs" },
    { name: "Vodka orange", price: 8, category: "Apéritifs" },
    { name: "Marsala", price: 5, category: "Apéritifs" },
    { name: "Martini / Porto / Suze", price: 5, category: "Apéritifs" },
    { name: "Americano", price: 6, category: "Apéritifs" },
    { name: "Campari", price: 6, category: "Apéritifs" },
    { name: "Whisky JB", price: 7, category: "Apéritifs" },
    { name: "Whisky Jack Daniel’s", price: 8, category: "Apéritifs" },
    { name: "Gin tonic / Gin fizz", price: 8, category: "Apéritifs" },
    { name: "Coupe de champagne", price: 10, category: "Apéritifs" },
    { name: "Kir royal", price: 10, category: "Apéritifs" },

    // =========================
    // Cocktails (avec alcool)
    // =========================
    { name: "Princess", price: 8, category: "Cocktails" },
    { name: "Blue Lagoon", price: 8, category: "Cocktails" },
    { name: "Spritz", price: 8, category: "Cocktails" },
    { name: "Tequila sunrise", price: 8, category: "Cocktails" },
    { name: "Malibu ananas / orange", price: 8, category: "Cocktails" },
    { name: "Cocktail maison", price: 8, category: "Cocktails" },

    // =========================
    // Cocktails sans alcool
    // =========================
    { name: "Chantaco", price: 7, category: "Sans alcool" },
    {
        name: "Toscana",
        price: 7,
        category: "Sans alcool",
        badges: ["signature"]
    },

    // =========================
    // Bières pression
    // =========================
    { name: "Stella ou panaché 25cl", price: 4.5, category: "Bières" },
    { name: "Stella 50cl", price: 8, category: "Bières" },
    { name: "Bière sans alcool 25cl", price: 4.5, category: "Bières" },

    // =========================
    // Bières bouteille
    // =========================
    { name: "Kronenbourg 25cl", price: 5, category: "Bières" },
    { name: "1664 25cl", price: 5, category: "Bières" },
    { name: "Heineken 25cl", price: 5, category: "Bières" },
    { name: "Carlsberg 25cl", price: 5, category: "Bières" },
    { name: "Nastro Azzurro 33cl", price: 5.5, category: "Bières" },

    // =========================
    // Boissons fraîches
    // =========================
    { name: "Coca-Cola / Zéro / Light", price: 4.5, category: "Boissons fraîches" },
    { name: "Orangina / Schweppes", price: 4.5, category: "Boissons fraîches" },
    { name: "Jus de fruits", price: 4.5, category: "Boissons fraîches" },
    { name: "Limonade", price: 4.5, category: "Boissons fraîches" },
    { name: "Ice tea", price: 4.5, category: "Boissons fraîches" },
    { name: "Fanta orange", price: 4.5, category: "Boissons fraîches" },
    { name: "Sprite", price: 4.5, category: "Boissons fraîches" },

    // =========================
    // Eaux minérales
    // =========================
    { name: "Vittel", price: 4.5, category: "Eaux" },
    { name: "San Pellegrino 50cl", price: 4.5, category: "Eaux" },
    { name: "San Pellegrino 1L", price: 6.5, category: "Eaux" },
    { name: "Perrier", price: 4.5, category: "Eaux" },

    // =========================
    // Boissons chaudes
    // =========================
    { name: "Café", price: 2.5, category: "Boissons chaudes" },
    { name: "Café crème / Cappuccino", price: 3.5, category: "Boissons chaudes" },
    { name: "Thé / Tilleul / Verveine", price: 3.5, category: "Boissons chaudes" },
    { name: "Irish coffee", price: 10, category: "Boissons chaudes" },

    // =========================
    // Vins français (bouteille 75cl)
    // =========================
    { name: "Côtes du Rhône", price: 24, category: "Vins français" },
    { name: "Bordeaux", price: 24, category: "Vins français" },
    { name: "Brouilly", price: 26, category: "Vins français" },
    { name: "Saint-Émilion", price: 26, category: "Vins français" },
    { name: "Côtes de Provence", price: 24, category: "Vins français" },
    { name: "Tavel", price: 26, category: "Vins français" },

    // =========================
    // Vins italiens (bouteille 75cl)
    // =========================
    { name: "Valpolicella", price: 24, category: "Vins italiens" },
    { name: "Lambrusco sec", price: 24, category: "Vins italiens" },
    { name: "Chianti DOC", price: 24, category: "Vins italiens" },
    { name: "Bardolino Chiaretto", price: 24, category: "Vins italiens" },
    { name: "Lacrima Christi", price: 26, category: "Vins italiens" },
    { name: "Orvieto", price: 26, category: "Vins italiens" },
    { name: "Prosecco", price: 22, category: "Vins italiens" },

    // =========================
    // Champagne
    // =========================
    { name: "Champagne bouteille", price: 60, category: "Champagne" },

    // =========================
    // Digestifs
    // =========================
    { name: "Rhum / Get 27 / Get 31 / Cognac / Cointreau", price: 7, category: "Digestifs" },
    { name: "Calvados / Marie Brizard / Poire Williams", price: 7, category: "Digestifs" },
    { name: "Grappa / Armagnac / Amaretto / Sambuca", price: 7, category: "Digestifs" },
    { name: "Baileys / Mirabelle / Limoncello", price: 7, category: "Digestifs" },


    // =========================
    // Glaces – Boules
    // =========================
    { name: "Glace 2 boules au choix", price: 5, category: "Desserts - Glaces" },
    { name: "Glace 3 boules au choix", price: 6, category: "Desserts - Glaces" },

    // =========================
    // Desserts glacés
    // =========================
    { name: "Le Mystérieux", price: 7, category: "Desserts glacés" },
    { name: "Coco givrée", price: 7, category: "Desserts glacés" },
    { name: "Nougat glacé", price: 7, category: "Desserts glacés" },
    { name: "Profiteroles", price: 7, category: "Desserts glacés" },
    { name: "Pêche Melba", price: 7, category: "Desserts glacés" },
    { name: "Poire Belle Hélène", price: 7, category: "Desserts glacés" },
    { name: "Dame Blanche", price: 7, category: "Desserts glacés" },
    { name: "Chocolat liégeois", price: 7, category: "Desserts glacés" },
    { name: "Café liégeois", price: 7, category: "Desserts glacés" },
    { name: "Amarena", price: 7, category: "Desserts glacés" },
    { name: "Menthe choc", price: 7, category: "Desserts glacés" },
    { name: "Banana split", price: 7, category: "Desserts glacés" },
    { name: "Colonel", price: 8, category: "Desserts glacés" },

    // =========================
    // Pâtisseries
    // =========================
    { name: "Tarte Tatin", price: 7, category: "Desserts - Pâtisseries" },
    { name: "Gâteau au chocolat", price: 7, category: "Desserts - Pâtisseries" },
    { name: "Tiramisu maison", price: 7, category: "Desserts - Pâtisseries" },
    { name: "Crème brûlée", price: 7, category: "Desserts - Pâtisseries" },
    { name: "Panna cotta", price: 7, category: "Desserts - Pâtisseries" }
]
