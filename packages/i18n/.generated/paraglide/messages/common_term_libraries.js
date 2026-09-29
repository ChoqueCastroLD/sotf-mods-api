/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Term_LibrariesInputs */

const en_common_term_libraries = /** @type {(inputs: Common_Term_LibrariesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Libraries`)
};

const es_common_term_libraries = /** @type {(inputs: Common_Term_LibrariesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Librerías`)
};

const de_common_term_libraries = /** @type {(inputs: Common_Term_LibrariesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bibliotheken`)
};

const fr_common_term_libraries = /** @type {(inputs: Common_Term_LibrariesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bibliothèques`)
};

const it_common_term_libraries = /** @type {(inputs: Common_Term_LibrariesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Librerie`)
};

const nl_common_term_libraries = /** @type {(inputs: Common_Term_LibrariesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bibliotheken`)
};

const pl_common_term_libraries = /** @type {(inputs: Common_Term_LibrariesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Biblioteki`)
};

const pt_common_term_libraries = /** @type {(inputs: Common_Term_LibrariesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bibliotecas`)
};

const ru_common_term_libraries = /** @type {(inputs: Common_Term_LibrariesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Библиотеки`)
};

const sv_common_term_libraries = /** @type {(inputs: Common_Term_LibrariesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bibliotek`)
};

const tr_common_term_libraries = /** @type {(inputs: Common_Term_LibrariesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kütüphaneler`)
};

const zh_common_term_libraries = /** @type {(inputs: Common_Term_LibrariesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前置库`)
};

const ja_common_term_libraries = /** @type {(inputs: Common_Term_LibrariesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ライブラリ`)
};

/**
* | output |
* | --- |
* | "Libraries" |
*
* @param {Common_Term_LibrariesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_term_libraries = /** @type {((inputs?: Common_Term_LibrariesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Term_LibrariesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_term_libraries(inputs)
	if (locale === "de") return de_common_term_libraries(inputs)
	if (locale === "fr") return fr_common_term_libraries(inputs)
	if (locale === "it") return it_common_term_libraries(inputs)
	if (locale === "nl") return nl_common_term_libraries(inputs)
	if (locale === "pl") return pl_common_term_libraries(inputs)
	if (locale === "pt") return pt_common_term_libraries(inputs)
	if (locale === "ru") return ru_common_term_libraries(inputs)
	if (locale === "sv") return sv_common_term_libraries(inputs)
	if (locale === "tr") return tr_common_term_libraries(inputs)
	if (locale === "zh") return zh_common_term_libraries(inputs)
	if (locale === "ja") return ja_common_term_libraries(inputs)
	return en_common_term_libraries(inputs)
});
