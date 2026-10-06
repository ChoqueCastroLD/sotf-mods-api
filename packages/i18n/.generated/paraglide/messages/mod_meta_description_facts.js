/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, kind: NonNullable<unknown>, author: NonNullable<unknown>, count: NonNullable<unknown>, downloads: NonNullable<unknown> }} Mod_Meta_Description_FactsInputs */

const en_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	if (i?.kind === "library" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} is a Sons of the Forest library by ${i?.author} for RedLoader. ${i?.downloads} download. Free to download.`);
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} is a Sons of the Forest library by ${i?.author} for RedLoader. ${i?.downloads} downloads. Free to download.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} is a Sons of the Forest mod by ${i?.author} for RedLoader. ${i?.downloads} download. Free to download.`);
	return /** @type {LocalizedString} */ (`${i?.name} is a Sons of the Forest mod by ${i?.author} for RedLoader. ${i?.downloads} downloads. Free to download.`)
	
};

const es_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	if (i?.kind === "library" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} es una librería de Sons of the Forest creado por ${i?.author} para RedLoader. ${i?.downloads} descarga. Descarga gratuita.`);
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} es una librería de Sons of the Forest creado por ${i?.author} para RedLoader. ${i?.downloads} descargas. Descarga gratuita.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} es un mod de Sons of the Forest creado por ${i?.author} para RedLoader. ${i?.downloads} descarga. Descarga gratuita.`);
	return /** @type {LocalizedString} */ (`${i?.name} es un mod de Sons of the Forest creado por ${i?.author} para RedLoader. ${i?.downloads} descargas. Descarga gratuita.`)
	
};

const de_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	if (i?.kind === "library" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} ist eine Bibliothek für Sons of the Forest von ${i?.author}, für RedLoader. ${i?.downloads} Download. Kostenloser Download.`);
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} ist eine Bibliothek für Sons of the Forest von ${i?.author}, für RedLoader. ${i?.downloads} Downloads. Kostenloser Download.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} ist ein Mod für Sons of the Forest von ${i?.author}, für RedLoader. ${i?.downloads} Download. Kostenloser Download.`);
	return /** @type {LocalizedString} */ (`${i?.name} ist ein Mod für Sons of the Forest von ${i?.author}, für RedLoader. ${i?.downloads} Downloads. Kostenloser Download.`)
	
};

const fr_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	if (i?.kind === "library" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} est une bibliothèque Sons of the Forest de ${i?.author} pour RedLoader. ${i?.downloads} téléchargement. Téléchargement gratuit.`);
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} est une bibliothèque Sons of the Forest de ${i?.author} pour RedLoader. ${i?.downloads} téléchargements. Téléchargement gratuit.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} est un mod Sons of the Forest de ${i?.author} pour RedLoader. ${i?.downloads} téléchargement. Téléchargement gratuit.`);
	return /** @type {LocalizedString} */ (`${i?.name} est un mod Sons of the Forest de ${i?.author} pour RedLoader. ${i?.downloads} téléchargements. Téléchargement gratuit.`)
	
};

const it_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	if (i?.kind === "library" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} è una libreria di Sons of the Forest creata da ${i?.author} per RedLoader. ${i?.downloads} download. Download gratuito.`);
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} è una libreria di Sons of the Forest creata da ${i?.author} per RedLoader. ${i?.downloads} download. Download gratuito.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} è una mod di Sons of the Forest creata da ${i?.author} per RedLoader. ${i?.downloads} download. Download gratuito.`);
	return /** @type {LocalizedString} */ (`${i?.name} è una mod di Sons of the Forest creata da ${i?.author} per RedLoader. ${i?.downloads} download. Download gratuito.`)
	
};

const nl_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	if (i?.kind === "library" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} is een bibliotheek voor Sons of the Forest van ${i?.author}, voor RedLoader. ${i?.downloads} download. Gratis te downloaden.`);
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} is een bibliotheek voor Sons of the Forest van ${i?.author}, voor RedLoader. ${i?.downloads} downloads. Gratis te downloaden.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} is een mod voor Sons of the Forest van ${i?.author}, voor RedLoader. ${i?.downloads} download. Gratis te downloaden.`);
	return /** @type {LocalizedString} */ (`${i?.name} is een mod voor Sons of the Forest van ${i?.author}, voor RedLoader. ${i?.downloads} downloads. Gratis te downloaden.`)
	
};

const pl_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	if (i?.kind === "library" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} to biblioteka do Sons of the Forest od ${i?.author} dla RedLoadera. ${i?.downloads} pobranie. Pobieranie za darmo.`);
	if (i?.kind === "library" && count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} to biblioteka do Sons of the Forest od ${i?.author} dla RedLoadera. ${i?.downloads} pobrania. Pobieranie za darmo.`);
	if (i?.kind === "library" && count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} to biblioteka do Sons of the Forest od ${i?.author} dla RedLoadera. ${i?.downloads} pobrań. Pobieranie za darmo.`);
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} to biblioteka do Sons of the Forest od ${i?.author} dla RedLoadera. ${i?.downloads} pobrania. Pobieranie za darmo.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} to mod do Sons of the Forest od ${i?.author} dla RedLoadera. ${i?.downloads} pobranie. Pobieranie za darmo.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} to mod do Sons of the Forest od ${i?.author} dla RedLoadera. ${i?.downloads} pobrania. Pobieranie za darmo.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} to mod do Sons of the Forest od ${i?.author} dla RedLoadera. ${i?.downloads} pobrań. Pobieranie za darmo.`);
	return /** @type {LocalizedString} */ (`${i?.name} to mod do Sons of the Forest od ${i?.author} dla RedLoadera. ${i?.downloads} pobrania. Pobieranie za darmo.`)
	
};

const pt_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	if (i?.kind === "library" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} é uma biblioteca de Sons of the Forest feito por ${i?.author} para o RedLoader. ${i?.downloads} download. Download gratuito.`);
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} é uma biblioteca de Sons of the Forest feito por ${i?.author} para o RedLoader. ${i?.downloads} downloads. Download gratuito.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} é um mod de Sons of the Forest feito por ${i?.author} para o RedLoader. ${i?.downloads} download. Download gratuito.`);
	return /** @type {LocalizedString} */ (`${i?.name} é um mod de Sons of the Forest feito por ${i?.author} para o RedLoader. ${i?.downloads} downloads. Download gratuito.`)
	
};

const ru_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	if (i?.kind === "library" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: библиотека для Sons of the Forest от ${i?.author} для RedLoader. ${i?.downloads} загрузка. Скачивание бесплатное.`);
	if (i?.kind === "library" && count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name}: библиотека для Sons of the Forest от ${i?.author} для RedLoader. ${i?.downloads} загрузки. Скачивание бесплатное.`);
	if (i?.kind === "library" && count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name}: библиотека для Sons of the Forest от ${i?.author} для RedLoader. ${i?.downloads} загрузок. Скачивание бесплатное.`);
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}: библиотека для Sons of the Forest от ${i?.author} для RedLoader. ${i?.downloads} загрузки. Скачивание бесплатное.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: мод для Sons of the Forest от ${i?.author} для RedLoader. ${i?.downloads} загрузка. Скачивание бесплатное.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name}: мод для Sons of the Forest от ${i?.author} для RedLoader. ${i?.downloads} загрузки. Скачивание бесплатное.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name}: мод для Sons of the Forest от ${i?.author} для RedLoader. ${i?.downloads} загрузок. Скачивание бесплатное.`);
	return /** @type {LocalizedString} */ (`${i?.name}: мод для Sons of the Forest от ${i?.author} для RedLoader. ${i?.downloads} загрузки. Скачивание бесплатное.`)
	
};

const sv_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	if (i?.kind === "library" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} är ett bibliotek till Sons of the Forest av ${i?.author} för RedLoader. ${i?.downloads} nedladdning. Gratis nedladdning.`);
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} är ett bibliotek till Sons of the Forest av ${i?.author} för RedLoader. ${i?.downloads} nedladdningar. Gratis nedladdning.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} är en mod till Sons of the Forest av ${i?.author} för RedLoader. ${i?.downloads} nedladdning. Gratis nedladdning.`);
	return /** @type {LocalizedString} */ (`${i?.name} är en mod till Sons of the Forest av ${i?.author} för RedLoader. ${i?.downloads} nedladdningar. Gratis nedladdning.`)
	
};

const tr_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	if (i?.kind === "library" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}, ${i?.author} tarafından RedLoader için yapılmış bir Sons of the Forest kütüphanesi. ${i?.downloads} indirme. Ücretsiz indirme.`);
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}, ${i?.author} tarafından RedLoader için yapılmış bir Sons of the Forest kütüphanesi. ${i?.downloads} indirme. Ücretsiz indirme.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}, ${i?.author} tarafından RedLoader için yapılmış bir Sons of the Forest modu. ${i?.downloads} indirme. Ücretsiz indirme.`);
	return /** @type {LocalizedString} */ (`${i?.name}, ${i?.author} tarafından RedLoader için yapılmış bir Sons of the Forest modu. ${i?.downloads} indirme. Ücretsiz indirme.`)
	
};

const zh_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("zh", i?.count, {});
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} 是 ${i?.author} 为 RedLoader 制作的 Sons of the Forest 前置库。已下载 ${i?.downloads} 次。免费下载。`);
	return /** @type {LocalizedString} */ (`${i?.name} 是 ${i?.author} 为 RedLoader 制作的 Sons of the Forest 模组。已下载 ${i?.downloads} 次。免费下载。`)
	
};

const ja_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ja", i?.count, {});
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} は ${i?.author} が RedLoader 向けに作った Sons of the Forest ライブラリ です。${i?.downloads} ダウンロード。無料でダウンロードできます。`);
	return /** @type {LocalizedString} */ (`${i?.name} は ${i?.author} が RedLoader 向けに作った Sons of the Forest MOD です。${i?.downloads} ダウンロード。無料でダウンロードできます。`)
	
};

/**
* | kind | count__plural | output |
* | --- | --- | --- |
* | "library" | "one" | "{name} is a Sons of the Forest library by {author} for RedLoader. {downloads} download. Free to download." |
* | "library" | * | "{name} is a Sons of the Forest library by {author} for RedLoader. {downloads} downloads. Free to download." |
* | * | "one" | "{name} is a Sons of the Forest mod by {author} for RedLoader. {downloads} download. Free to download." |
* | * | * | "{name} is a Sons of the Forest mod by {author} for RedLoader. {downloads} downloads. Free to download." |
*
* @param {Mod_Meta_Description_FactsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_meta_description_facts = /** @type {((inputs: Mod_Meta_Description_FactsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Meta_Description_FactsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_meta_description_facts(inputs)
	if (locale === "de") return de_mod_meta_description_facts(inputs)
	if (locale === "fr") return fr_mod_meta_description_facts(inputs)
	if (locale === "it") return it_mod_meta_description_facts(inputs)
	if (locale === "nl") return nl_mod_meta_description_facts(inputs)
	if (locale === "pl") return pl_mod_meta_description_facts(inputs)
	if (locale === "pt") return pt_mod_meta_description_facts(inputs)
	if (locale === "ru") return ru_mod_meta_description_facts(inputs)
	if (locale === "sv") return sv_mod_meta_description_facts(inputs)
	if (locale === "tr") return tr_mod_meta_description_facts(inputs)
	if (locale === "zh") return zh_mod_meta_description_facts(inputs)
	if (locale === "ja") return ja_mod_meta_description_facts(inputs)
	return en_mod_meta_description_facts(inputs)
});
