/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Explore_Meta_Libraries_DescriptionInputs */

const en_explore_meta_libraries_description = /** @type {(inputs: Explore_Meta_Libraries_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} library that other Sons of the Forest mods depend on. Install them once and every mod that needs them just works.`);
	return /** @type {LocalizedString} */ (`${count__number} libraries that other Sons of the Forest mods depend on. Install them once and every mod that needs them just works.`)
	
};

const es_explore_meta_libraries_description = /** @type {(inputs: Explore_Meta_Libraries_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} librería de las que dependen otros mods de Sons of the Forest. Instálalas una vez y todos los mods que las necesitan funcionarán.`);
	return /** @type {LocalizedString} */ (`${count__number} librerías de las que dependen otros mods de Sons of the Forest. Instálalas una vez y todos los mods que las necesitan funcionarán.`)
	
};

const de_explore_meta_libraries_description = /** @type {(inputs: Explore_Meta_Libraries_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Bibliothek, auf die andere Sons-of-the-Forest-Mods angewiesen sind. Einmal installieren, und jede Mod, die sie braucht, läuft.`);
	return /** @type {LocalizedString} */ (`${count__number} Bibliotheken, auf die andere Sons-of-the-Forest-Mods angewiesen sind. Einmal installieren, und jede Mod, die sie braucht, läuft.`)
	
};

const fr_explore_meta_libraries_description = /** @type {(inputs: Explore_Meta_Libraries_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} bibliothèque dont dépendent d’autres mods Sons of the Forest. Installez-les une fois et chaque mod qui en a besoin fonctionne.`);
	return /** @type {LocalizedString} */ (`${count__number} bibliothèques dont dépendent d’autres mods Sons of the Forest. Installez-les une fois et chaque mod qui en a besoin fonctionne.`)
	
};

const it_explore_meta_libraries_description = /** @type {(inputs: Explore_Meta_Libraries_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} libreria da cui dipendono altre mod di Sons of the Forest. Installale una volta e ogni mod che le richiede funziona.`);
	return /** @type {LocalizedString} */ (`${count__number} librerie da cui dipendono altre mod di Sons of the Forest. Installale una volta e ogni mod che le richiede funziona.`)
	
};

const nl_explore_meta_libraries_description = /** @type {(inputs: Explore_Meta_Libraries_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} bibliotheek waar andere Sons of the Forest-mods op leunen. Eén keer installeren en elke mod die ze nodig heeft, werkt.`);
	return /** @type {LocalizedString} */ (`${count__number} bibliotheken waar andere Sons of the Forest-mods op leunen. Eén keer installeren en elke mod die ze nodig heeft, werkt.`)
	
};

const pl_explore_meta_libraries_description = /** @type {(inputs: Explore_Meta_Libraries_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} biblioteka, od której zależą inne mody do Sons of the Forest. Zainstaluj je raz, a każdy mod, który ich potrzebuje, zadziała.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} biblioteki, od których zależą inne mody do Sons of the Forest. Zainstaluj je raz, a każdy mod, który ich potrzebuje, zadziała.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} bibliotek, od których zależą inne mody do Sons of the Forest. Zainstaluj je raz, a każdy mod, który ich potrzebuje, zadziała.`);
	return /** @type {LocalizedString} */ (`${count__number} biblioteki, od których zależą inne mody do Sons of the Forest. Zainstaluj je raz, a każdy mod, który ich potrzebuje, zadziała.`)
	
};

const pt_explore_meta_libraries_description = /** @type {(inputs: Explore_Meta_Libraries_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} biblioteca das quais outros mods de Sons of the Forest dependem. Instale uma vez e todo mod que precisar delas vai funcionar.`);
	return /** @type {LocalizedString} */ (`${count__number} bibliotecas das quais outros mods de Sons of the Forest dependem. Instale uma vez e todo mod que precisar delas vai funcionar.`)
	
};

const ru_explore_meta_libraries_description = /** @type {(inputs: Explore_Meta_Libraries_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} библиотека, от которой зависят другие моды для Sons of the Forest. Установите их один раз — и все моды, которым они нужны, заработают.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} библиотеки, от которых зависят другие моды для Sons of the Forest. Установите их один раз — и все моды, которым они нужны, заработают.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} библиотек, от которых зависят другие моды для Sons of the Forest. Установите их один раз — и все моды, которым они нужны, заработают.`);
	return /** @type {LocalizedString} */ (`${count__number} библиотеки, от которых зависят другие моды для Sons of the Forest. Установите их один раз — и все моды, которым они нужны, заработают.`)
	
};

const sv_explore_meta_libraries_description = /** @type {(inputs: Explore_Meta_Libraries_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} bibliotek som andra moddar till Sons of the Forest bygger på. Installera dem en gång så fungerar alla moddar som behöver dem.`);
	return /** @type {LocalizedString} */ (`${count__number} bibliotek som andra moddar till Sons of the Forest bygger på. Installera dem en gång så fungerar alla moddar som behöver dem.`)
	
};

const tr_explore_meta_libraries_description = /** @type {(inputs: Explore_Meta_Libraries_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Diğer Sons of the Forest modlarının ihtiyaç duyduğu ${count__number} kütüphane. Bir kez kur, onlara ihtiyaç duyan her mod çalışsın.`);
	return /** @type {LocalizedString} */ (`Diğer Sons of the Forest modlarının ihtiyaç duyduğu ${count__number} kütüphane. Bir kez kur, onlara ihtiyaç duyan her mod çalışsın.`)
	
};

const zh_explore_meta_libraries_description = /** @type {(inputs: Explore_Meta_Libraries_DescriptionInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 个其他 Sons of the Forest 模组所依赖的前置库。只需安装一次，所有需要它们的模组都能正常运行。`)
};

const ja_explore_meta_libraries_description = /** @type {(inputs: Explore_Meta_Libraries_DescriptionInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`ほかの Sons of the Forest MOD が必要とするライブラリ ${count__number} 件。一度入れておけば、それを使う MOD がすべて動きます。`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} library that other Sons of the Forest mods depend on. Install them once and every mod that needs them just works." |
* | * | "{count__number} libraries that other Sons of the Forest mods depend on. Install them once and every mod that needs them just works." |
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
