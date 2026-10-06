/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Explore_Meta_Libraries_DescriptionInputs */

const en_explore_meta_libraries_description = /** @type {(inputs: Explore_Meta_Libraries_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} library that other Sons of the Forest mods depend on. Install them before the mods that need them.`);
	return /** @type {LocalizedString} */ (`${count__number} libraries that other Sons of the Forest mods depend on. Install them before the mods that need them.`)
	
};

const es_explore_meta_libraries_description = /** @type {(inputs: Explore_Meta_Libraries_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} librería de las que dependen otros mods de Sons of the Forest. Instálalas antes que los mods que las necesitan.`);
	return /** @type {LocalizedString} */ (`${count__number} librerías de las que dependen otros mods de Sons of the Forest. Instálalas antes que los mods que las necesitan.`)
	
};

const de_explore_meta_libraries_description = /** @type {(inputs: Explore_Meta_Libraries_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Bibliothek, auf die andere Sons-of-the-Forest-Mods angewiesen sind. Installiere sie vor den Mods, die sie benötigen.`);
	return /** @type {LocalizedString} */ (`${count__number} Bibliotheken, auf die andere Sons-of-the-Forest-Mods angewiesen sind. Installiere sie vor den Mods, die sie benötigen.`)
	
};

const fr_explore_meta_libraries_description = /** @type {(inputs: Explore_Meta_Libraries_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} bibliothèque dont dépendent d’autres mods Sons of the Forest. Installez-les avant les mods qui en ont besoin.`);
	return /** @type {LocalizedString} */ (`${count__number} bibliothèques dont dépendent d’autres mods Sons of the Forest. Installez-les avant les mods qui en ont besoin.`)
	
};

const it_explore_meta_libraries_description = /** @type {(inputs: Explore_Meta_Libraries_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} libreria da cui dipendono altre mod di Sons of the Forest. Installale prima delle mod che le richiedono.`);
	return /** @type {LocalizedString} */ (`${count__number} librerie da cui dipendono altre mod di Sons of the Forest. Installale prima delle mod che le richiedono.`)
	
};

const nl_explore_meta_libraries_description = /** @type {(inputs: Explore_Meta_Libraries_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} bibliotheek waar andere Sons of the Forest-mods op leunen. Installeer ze vóór de mods die ze nodig hebben.`);
	return /** @type {LocalizedString} */ (`${count__number} bibliotheken waar andere Sons of the Forest-mods op leunen. Installeer ze vóór de mods die ze nodig hebben.`)
	
};

const pl_explore_meta_libraries_description = /** @type {(inputs: Explore_Meta_Libraries_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} biblioteka, od której zależą inne mody do Sons of the Forest. Zainstaluj je przed modami, które ich wymagają.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} biblioteki, od których zależą inne mody do Sons of the Forest. Zainstaluj je przed modami, które ich wymagają.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} bibliotek, od których zależą inne mody do Sons of the Forest. Zainstaluj je przed modami, które ich wymagają.`);
	return /** @type {LocalizedString} */ (`${count__number} biblioteki, od których zależą inne mody do Sons of the Forest. Zainstaluj je przed modami, które ich wymagają.`)
	
};

const pt_explore_meta_libraries_description = /** @type {(inputs: Explore_Meta_Libraries_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} biblioteca das quais outros mods de Sons of the Forest dependem. Instale-as antes dos mods que precisam delas.`);
	return /** @type {LocalizedString} */ (`${count__number} bibliotecas das quais outros mods de Sons of the Forest dependem. Instale-as antes dos mods que precisam delas.`)
	
};

const ru_explore_meta_libraries_description = /** @type {(inputs: Explore_Meta_Libraries_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} библиотека, от которой зависят другие моды для Sons of the Forest. Устанавливайте их до модов, которым они нужны.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} библиотеки, от которых зависят другие моды для Sons of the Forest. Устанавливайте их до модов, которым они нужны.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} библиотек, от которых зависят другие моды для Sons of the Forest. Устанавливайте их до модов, которым они нужны.`);
	return /** @type {LocalizedString} */ (`${count__number} библиотеки, от которых зависят другие моды для Sons of the Forest. Устанавливайте их до модов, которым они нужны.`)
	
};

const sv_explore_meta_libraries_description = /** @type {(inputs: Explore_Meta_Libraries_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} bibliotek som andra moddar till Sons of the Forest bygger på. Installera dem före de moddar som behöver dem.`);
	return /** @type {LocalizedString} */ (`${count__number} bibliotek som andra moddar till Sons of the Forest bygger på. Installera dem före de moddar som behöver dem.`)
	
};

const tr_explore_meta_libraries_description = /** @type {(inputs: Explore_Meta_Libraries_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Diğer Sons of the Forest modlarının ihtiyaç duyduğu ${count__number} kütüphane. Onlara ihtiyaç duyan modlardan önce kur.`);
	return /** @type {LocalizedString} */ (`Diğer Sons of the Forest modlarının ihtiyaç duyduğu ${count__number} kütüphane. Onlara ihtiyaç duyan modlardan önce kur.`)
	
};

const zh_explore_meta_libraries_description = /** @type {(inputs: Explore_Meta_Libraries_DescriptionInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 个其他 Sons of the Forest 模组所依赖的前置库。请在安装需要它们的模组之前先安装。`)
};

const ja_explore_meta_libraries_description = /** @type {(inputs: Explore_Meta_Libraries_DescriptionInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`ほかの Sons of the Forest MOD が必要とするライブラリ ${count__number} 件。それを使う MOD より先にインストールしてください。`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} library that other Sons of the Forest mods depend on. Install them before the mods that need them." |
* | * | "{count__number} libraries that other Sons of the Forest mods depend on. Install them before the mods that need them." |
*
* @param {Explore_Meta_Libraries_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_meta_libraries_description = /** @type {((inputs: Explore_Meta_Libraries_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Meta_Libraries_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_meta_libraries_description(inputs)
	if (locale === "de") return de_explore_meta_libraries_description(inputs)
	if (locale === "fr") return fr_explore_meta_libraries_description(inputs)
	if (locale === "it") return it_explore_meta_libraries_description(inputs)
	if (locale === "nl") return nl_explore_meta_libraries_description(inputs)
	if (locale === "pl") return pl_explore_meta_libraries_description(inputs)
	if (locale === "pt") return pt_explore_meta_libraries_description(inputs)
	if (locale === "ru") return ru_explore_meta_libraries_description(inputs)
	if (locale === "sv") return sv_explore_meta_libraries_description(inputs)
	if (locale === "tr") return tr_explore_meta_libraries_description(inputs)
	if (locale === "zh") return zh_explore_meta_libraries_description(inputs)
	if (locale === "ja") return ja_explore_meta_libraries_description(inputs)
	return en_explore_meta_libraries_description(inputs)
});
