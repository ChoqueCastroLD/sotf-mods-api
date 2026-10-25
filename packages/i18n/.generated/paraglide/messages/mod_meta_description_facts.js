/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, game: NonNullable<unknown>, kind: NonNullable<unknown>, author: NonNullable<unknown>, loader: NonNullable<unknown>, count: NonNullable<unknown>, downloads: NonNullable<unknown> }} Mod_Meta_Description_FactsInputs */

const en_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	if (i?.kind === "library" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} is a ${i?.game} library by ${i?.author} for ${i?.loader}. ${i?.downloads} download. Free to download.`);
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} is a ${i?.game} library by ${i?.author} for ${i?.loader}. ${i?.downloads} downloads. Free to download.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} is a ${i?.game} mod by ${i?.author} for ${i?.loader}. ${i?.downloads} download. Free to download.`);
	return /** @type {LocalizedString} */ (`${i?.name} is a ${i?.game} mod by ${i?.author} for ${i?.loader}. ${i?.downloads} downloads. Free to download.`)
	
};

const es_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	if (i?.kind === "library" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} es una librería de ${i?.game} creado por ${i?.author} para ${i?.loader}. ${i?.downloads} descarga. Descarga gratuita.`);
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} es una librería de ${i?.game} creado por ${i?.author} para ${i?.loader}. ${i?.downloads} descargas. Descarga gratuita.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} es un mod de ${i?.game} creado por ${i?.author} para ${i?.loader}. ${i?.downloads} descarga. Descarga gratuita.`);
	return /** @type {LocalizedString} */ (`${i?.name} es un mod de ${i?.game} creado por ${i?.author} para ${i?.loader}. ${i?.downloads} descargas. Descarga gratuita.`)
	
};

const de_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	if (i?.kind === "library" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} ist eine Bibliothek für ${i?.game} von ${i?.author}, für ${i?.loader}. ${i?.downloads} Download. Kostenloser Download.`);
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} ist eine Bibliothek für ${i?.game} von ${i?.author}, für ${i?.loader}. ${i?.downloads} Downloads. Kostenloser Download.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} ist ein Mod für ${i?.game} von ${i?.author}, für ${i?.loader}. ${i?.downloads} Download. Kostenloser Download.`);
	return /** @type {LocalizedString} */ (`${i?.name} ist ein Mod für ${i?.game} von ${i?.author}, für ${i?.loader}. ${i?.downloads} Downloads. Kostenloser Download.`)
	
};

const fr_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	if (i?.kind === "library" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} est une bibliothèque ${i?.game} de ${i?.author} pour ${i?.loader}. ${i?.downloads} téléchargement. Téléchargement gratuit.`);
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} est une bibliothèque ${i?.game} de ${i?.author} pour ${i?.loader}. ${i?.downloads} téléchargements. Téléchargement gratuit.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} est un mod ${i?.game} de ${i?.author} pour ${i?.loader}. ${i?.downloads} téléchargement. Téléchargement gratuit.`);
	return /** @type {LocalizedString} */ (`${i?.name} est un mod ${i?.game} de ${i?.author} pour ${i?.loader}. ${i?.downloads} téléchargements. Téléchargement gratuit.`)
	
};

const it_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	if (i?.kind === "library" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} è una libreria di ${i?.game} creata da ${i?.author} per ${i?.loader}. ${i?.downloads} download. Download gratuito.`);
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} è una libreria di ${i?.game} creata da ${i?.author} per ${i?.loader}. ${i?.downloads} download. Download gratuito.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} è una mod di ${i?.game} creata da ${i?.author} per ${i?.loader}. ${i?.downloads} download. Download gratuito.`);
	return /** @type {LocalizedString} */ (`${i?.name} è una mod di ${i?.game} creata da ${i?.author} per ${i?.loader}. ${i?.downloads} download. Download gratuito.`)
	
};

const nl_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	if (i?.kind === "library" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} is een bibliotheek voor ${i?.game} van ${i?.author}, voor ${i?.loader}. ${i?.downloads} download. Gratis te downloaden.`);
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} is een bibliotheek voor ${i?.game} van ${i?.author}, voor ${i?.loader}. ${i?.downloads} downloads. Gratis te downloaden.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} is een mod voor ${i?.game} van ${i?.author}, voor ${i?.loader}. ${i?.downloads} download. Gratis te downloaden.`);
	return /** @type {LocalizedString} */ (`${i?.name} is een mod voor ${i?.game} van ${i?.author}, voor ${i?.loader}. ${i?.downloads} downloads. Gratis te downloaden.`)
	
};

const pl_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	if (i?.kind === "library" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} to biblioteka do ${i?.game} od ${i?.author} dla ${i?.loader}a. ${i?.downloads} pobranie. Pobieranie za darmo.`);
	if (i?.kind === "library" && count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} to biblioteka do ${i?.game} od ${i?.author} dla ${i?.loader}a. ${i?.downloads} pobrania. Pobieranie za darmo.`);
	if (i?.kind === "library" && count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} to biblioteka do ${i?.game} od ${i?.author} dla ${i?.loader}a. ${i?.downloads} pobrań. Pobieranie za darmo.`);
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} to biblioteka do ${i?.game} od ${i?.author} dla ${i?.loader}a. ${i?.downloads} pobrania. Pobieranie za darmo.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} to mod do ${i?.game} od ${i?.author} dla ${i?.loader}a. ${i?.downloads} pobranie. Pobieranie za darmo.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} to mod do ${i?.game} od ${i?.author} dla ${i?.loader}a. ${i?.downloads} pobrania. Pobieranie za darmo.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} to mod do ${i?.game} od ${i?.author} dla ${i?.loader}a. ${i?.downloads} pobrań. Pobieranie za darmo.`);
	return /** @type {LocalizedString} */ (`${i?.name} to mod do ${i?.game} od ${i?.author} dla ${i?.loader}a. ${i?.downloads} pobrania. Pobieranie za darmo.`)
	
};

const pt_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	if (i?.kind === "library" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} é uma biblioteca de ${i?.game} feito por ${i?.author} para o ${i?.loader}. ${i?.downloads} download. Download gratuito.`);
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} é uma biblioteca de ${i?.game} feito por ${i?.author} para o ${i?.loader}. ${i?.downloads} downloads. Download gratuito.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} é um mod de ${i?.game} feito por ${i?.author} para o ${i?.loader}. ${i?.downloads} download. Download gratuito.`);
	return /** @type {LocalizedString} */ (`${i?.name} é um mod de ${i?.game} feito por ${i?.author} para o ${i?.loader}. ${i?.downloads} downloads. Download gratuito.`)
	
};

const ru_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	if (i?.kind === "library" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: библиотека для ${i?.game} от ${i?.author} для ${i?.loader}. ${i?.downloads} загрузка. Скачивание бесплатное.`);
	if (i?.kind === "library" && count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name}: библиотека для ${i?.game} от ${i?.author} для ${i?.loader}. ${i?.downloads} загрузки. Скачивание бесплатное.`);
	if (i?.kind === "library" && count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name}: библиотека для ${i?.game} от ${i?.author} для ${i?.loader}. ${i?.downloads} загрузок. Скачивание бесплатное.`);
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}: библиотека для ${i?.game} от ${i?.author} для ${i?.loader}. ${i?.downloads} загрузки. Скачивание бесплатное.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: мод для ${i?.game} от ${i?.author} для ${i?.loader}. ${i?.downloads} загрузка. Скачивание бесплатное.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name}: мод для ${i?.game} от ${i?.author} для ${i?.loader}. ${i?.downloads} загрузки. Скачивание бесплатное.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name}: мод для ${i?.game} от ${i?.author} для ${i?.loader}. ${i?.downloads} загрузок. Скачивание бесплатное.`);
	return /** @type {LocalizedString} */ (`${i?.name}: мод для ${i?.game} от ${i?.author} для ${i?.loader}. ${i?.downloads} загрузки. Скачивание бесплатное.`)
	
};

const sv_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	if (i?.kind === "library" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} är ett bibliotek till ${i?.game} av ${i?.author} för ${i?.loader}. ${i?.downloads} nedladdning. Gratis nedladdning.`);
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} är ett bibliotek till ${i?.game} av ${i?.author} för ${i?.loader}. ${i?.downloads} nedladdningar. Gratis nedladdning.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} är en mod till ${i?.game} av ${i?.author} för ${i?.loader}. ${i?.downloads} nedladdning. Gratis nedladdning.`);
	return /** @type {LocalizedString} */ (`${i?.name} är en mod till ${i?.game} av ${i?.author} för ${i?.loader}. ${i?.downloads} nedladdningar. Gratis nedladdning.`)
	
};

const tr_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	if (i?.kind === "library" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}, ${i?.author} tarafından ${i?.loader} için yapılmış bir ${i?.game} kütüphanesi. ${i?.downloads} indirme. Ücretsiz indirme.`);
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}, ${i?.author} tarafından ${i?.loader} için yapılmış bir ${i?.game} kütüphanesi. ${i?.downloads} indirme. Ücretsiz indirme.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}, ${i?.author} tarafından ${i?.loader} için yapılmış bir ${i?.game} modu. ${i?.downloads} indirme. Ücretsiz indirme.`);
	return /** @type {LocalizedString} */ (`${i?.name}, ${i?.author} tarafından ${i?.loader} için yapılmış bir ${i?.game} modu. ${i?.downloads} indirme. Ücretsiz indirme.`)
	
};

const zh_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("zh", i?.count, {});
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} 是 ${i?.author} 为 ${i?.loader} 制作的 ${i?.game} 前置库。已下载 ${i?.downloads} 次。免费下载。`);
	return /** @type {LocalizedString} */ (`${i?.name} 是 ${i?.author} 为 ${i?.loader} 制作的 ${i?.game} 模组。已下载 ${i?.downloads} 次。免费下载。`)
	
};

const ja_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ja", i?.count, {});
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} は ${i?.author} が ${i?.loader} 向けに作った ${i?.game} ライブラリ です。${i?.downloads} ダウンロード。無料でダウンロードできます。`);
	return /** @type {LocalizedString} */ (`${i?.name} は ${i?.author} が ${i?.loader} 向けに作った ${i?.game} MOD です。${i?.downloads} ダウンロード。無料でダウンロードできます。`)
	
};

/**
* | kind | count__plural | output |
* | --- | --- | --- |
* | "library" | "one" | "{name} is a {game} library by {author} for {loader}. {downloads} download. Free to download." |
* | "library" | * | "{name} is a {game} library by {author} for {loader}. {downloads} downloads. Free to download." |
* | * | "one" | "{name} is a {game} mod by {author} for {loader}. {downloads} download. Free to download." |
* | * | * | "{name} is a {game} mod by {author} for {loader}. {downloads} downloads. Free to download." |
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
