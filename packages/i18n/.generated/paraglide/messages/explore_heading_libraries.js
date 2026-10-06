/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Heading_LibrariesInputs */

const en_explore_heading_libraries = /** @type {(inputs: Explore_Heading_LibrariesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Libraries`)
};

const es_explore_heading_libraries = /** @type {(inputs: Explore_Heading_LibrariesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Librerías`)
};

const de_explore_heading_libraries = /** @type {(inputs: Explore_Heading_LibrariesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bibliotheken`)
};

const fr_explore_heading_libraries = /** @type {(inputs: Explore_Heading_LibrariesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bibliothèques`)
};

const it_explore_heading_libraries = /** @type {(inputs: Explore_Heading_LibrariesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Librerie`)
};

const nl_explore_heading_libraries = /** @type {(inputs: Explore_Heading_LibrariesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bibliotheken`)
};

const pl_explore_heading_libraries = /** @type {(inputs: Explore_Heading_LibrariesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Biblioteki`)
};

const pt_explore_heading_libraries = /** @type {(inputs: Explore_Heading_LibrariesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bibliotecas`)
};

const ru_explore_heading_libraries = /** @type {(inputs: Explore_Heading_LibrariesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Библиотеки`)
};

const sv_explore_heading_libraries = /** @type {(inputs: Explore_Heading_LibrariesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bibliotek`)
};

const tr_explore_heading_libraries = /** @type {(inputs: Explore_Heading_LibrariesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kütüphaneler`)
};

const zh_explore_heading_libraries = /** @type {(inputs: Explore_Heading_LibrariesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前置库`)
};

const ja_explore_heading_libraries = /** @type {(inputs: Explore_Heading_LibrariesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ライブラリ`)
};

/**
* | output |
* | --- |
* | "Libraries" |
*
* @param {Explore_Heading_LibrariesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_heading_libraries = /** @type {((inputs?: Explore_Heading_LibrariesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Heading_LibrariesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_heading_libraries(inputs)
	if (locale === "de") return de_explore_heading_libraries(inputs)
	if (locale === "fr") return fr_explore_heading_libraries(inputs)
	if (locale === "it") return it_explore_heading_libraries(inputs)
	if (locale === "nl") return nl_explore_heading_libraries(inputs)
	if (locale === "pl") return pl_explore_heading_libraries(inputs)
	if (locale === "pt") return pt_explore_heading_libraries(inputs)
	if (locale === "ru") return ru_explore_heading_libraries(inputs)
	if (locale === "sv") return sv_explore_heading_libraries(inputs)
	if (locale === "tr") return tr_explore_heading_libraries(inputs)
	if (locale === "zh") return zh_explore_heading_libraries(inputs)
	if (locale === "ja") return ja_explore_heading_libraries(inputs)
	return en_explore_heading_libraries(inputs)
});
