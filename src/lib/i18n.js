const i18nTables = {
    en: {
        browse_passage_bible_reference: "Bible Reference",
        show_all_bibles: "Show all Bibles",
        show_verses: "Show verses",
        group_version_show_verses: "Group by version, show verses",
        group_verse: "Group by verse",
        show_paragraphs: "Show paragraphs",
        group_version_show_paragraphs: "Group by version, show paragraphs",
        books_in: "books in",
        bibles: "Bibles",
        search: "Search: ",
        show_blocks: "Show paragraphs:",
        enter_search_text: "Please enter some search text",
        no_text_found: "No text found",
        passage: "Passage",
        error_format: "Wrong format!",
        error_book: "Book not found!",
        error_verse: "Verse not found!",
        settings: "Settings",
        menu_search: "Search",
        menu_read: "Read",
        search_passage: "Search passage :",
        download: "Download...",
        language: "Language",
        organization: "Organization",
        abbreviation: "Abbreviation",
        title: "Title",
        versification: "Versification",
        download_actions: "Download Actions",
        menu_download: "Download",
        yes: "Yes",
        no: "No",
    },
    fr: {
        browse_passage_bible_reference: "Référence Biblique",
        show_all_bibles: "Toutes mes Bibles",
        show_verses: "Afficher par verset",
        group_version_show_verses: "Regrouper par version, afficher par verset",
        group_verse: "Regrouper par verset",
        show_paragraphs: "Afficher par paragraphe",
        group_version_show_paragraphs: "Regrouper par version, afficher par paragraphe",
        books_in: "livres dans",
        bibles: "Bibles",
        search: "Mots à chercher :",
        show_blocks: "Afficher paragraphes:",
        enter_search_text: "Taper un ou des mots à chercher",
        no_text_found: "Aucun contenu retrouvé",
        passage: "Passage",
        error_format: "Mauvais format !",
        error_book: "Livre non trouvé !",
        error_verse: "Verset non trouvé !",
        settings: "Paramètres",
        menu_search: "Recherche",
        menu_read: "Lire",
        search_passage: "Référence :",
        download: "Télécharger ...",
        language: "Langue",
        organization: "Organisation",
        abbreviation: "Abréviation",
        title: "Titre",
        versification: "Versification",
        download_actions: "Actions de téléchargement",
        menu_download: "Télécharger",
        yes: "Oui",
        no: "Non",
    },
    es: {
        browse_passage_bible_reference: "Referencia Bíblica",
        show_all_bibles: "Mostrar todas las Biblias",
        show_verses: "Mostrar versos",
        group_version_show_verses: "Agrupar por versión, mostrar versos",
        group_verse: "Agrupar por verso",
        show_paragraphs: "Mostrar párrafos",
        group_version_show_paragraphs: "Agrupar por versión, mostrar párrafos",
        books_in: "libros en",
        bibles: "Biblias",
        search: "Buscar: ",
        show_blocks: "Mostrar párrafos:",
        enter_search_text: "Por favor, ingrese el texto de búsqueda",
        no_text_found: "No se encontró ningún texto",
        passage: "Pasaje",
        error_format: "¡Formato incorrecto!",
        error_book: "¡No se encontró el libro!",
        error_verse: "¡No se encontró el versículo!",
        settings: "Configuración",
        menu_search: "Buscar",
        menu_read: "Leer",
        search_passage: "Buscar pasaje :",
        download: "Descargar...",
        language: "Lenguaje",
        organization: "Organización",
        abbreviation: "Abreviación",
        title: "Título",
        versification: "Versificación",
        download_actions: "Acciones de descarga",
        menu_download: "Descargar",
        yes: "Sí",
        no: "No",
    },
};

export default function i18n(lang, key) {
    if (!i18nTables[lang]) {
        return `NOLANG '${lang}'`
    }
    return i18nTables[lang][key] ||i18nTables['en'][key] || `??${key}??`;
}
