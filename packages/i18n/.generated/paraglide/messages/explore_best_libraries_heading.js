/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Best_Libraries_HeadingInputs */

const en_explore_best_libraries_heading = /** @type {(inputs: Explore_Best_Libraries_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Essential mod libraries`)
};

const es_explore_best_libraries_heading = /** @type {(inputs: Explore_Best_Libraries_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Librerías de mods imprescindibles`)
};

const de_explore_best_libraries_heading = /** @type {(inputs: Explore_Best_Libraries_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unverzichtbare Mod-Bibliotheken`)
};

const fr_explore_best_libraries_heading = /** @type {(inputs: Explore_Best_Libraries_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bibliothèques de mods indispensables`)
};

const it_explore_best_libraries_heading = /** @type {(inputs: Explore_Best_Libraries_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Librerie di mod indispensabili`)
};

const nl_explore_best_libraries_heading = /** @type {(inputs: Explore_Best_Libraries_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onmisbare modbibliotheken`)
};

const pl_explore_best_libraries_heading = /** @type {(inputs: Explore_Best_Libraries_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niezbędne biblioteki modów`)
};

const pt_explore_best_libraries_heading = /** @type {(inputs: Explore_Best_Libraries_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bibliotecas de mods essenciais`)
};

const ru_explore_best_libraries_heading = /** @type {(inputs: Explore_Best_Libraries_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Необходимые библиотеки модов`)
};

const sv_explore_best_libraries_heading = /** @type {(inputs: Explore_Best_Libraries_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nödvändiga moddbibliotek`)
};

const tr_explore_best_libraries_heading = /** @type {(inputs: Explore_Best_Libraries_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vazgeçilmez mod kütüphaneleri`)
};

const zh_explore_best_libraries_heading = /** @type {(inputs: Explore_Best_Libraries_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`必备模组前置库`)
};

const ja_explore_best_libraries_heading = /** @type {(inputs: Explore_Best_Libraries_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`必須の MOD ライブラリ`)
};

/**
* | output |
* | --- |
* | "Essential mod libraries" |
*
* @param {Explore_Best_Libraries_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_best_libraries_heading = /** @type {((inputs?: Explore_Best_Libraries_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Best_Libraries_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_best_libraries_heading(inputs)
	if (locale === "de") return de_explore_best_libraries_heading(inputs)
	if (locale === "fr") return fr_explore_best_libraries_heading(inputs)
	if (locale === "it") return it_explore_best_libraries_heading(inputs)
	if (locale === "nl") return nl_explore_best_libraries_heading(inputs)
	if (locale === "pl") return pl_explore_best_libraries_heading(inputs)
	if (locale === "pt") return pt_explore_best_libraries_heading(inputs)
	if (locale === "ru") return ru_explore_best_libraries_heading(inputs)
	if (locale === "sv") return sv_explore_best_libraries_heading(inputs)
	if (locale === "tr") return tr_explore_best_libraries_heading(inputs)
	if (locale === "zh") return zh_explore_best_libraries_heading(inputs)
	if (locale === "ja") return ja_explore_best_libraries_heading(inputs)
	return en_explore_best_libraries_heading(inputs)
});
