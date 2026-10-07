/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ page: NonNullable<unknown> }} Ranger_Page_NInputs */

const en_ranger_page_n = /** @type {(inputs: Ranger_Page_NInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Page ${i?.page}`)
};

const es_ranger_page_n = /** @type {(inputs: Ranger_Page_NInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Página ${i?.page}`)
};

const de_ranger_page_n = /** @type {(inputs: Ranger_Page_NInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Seite ${i?.page}`)
};

const fr_ranger_page_n = /** @type {(inputs: Ranger_Page_NInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Page ${i?.page}`)
};

const it_ranger_page_n = /** @type {(inputs: Ranger_Page_NInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pagina ${i?.page}`)
};

const nl_ranger_page_n = /** @type {(inputs: Ranger_Page_NInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pagina ${i?.page}`)
};

const pl_ranger_page_n = /** @type {(inputs: Ranger_Page_NInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Strona ${i?.page}`)
};

const pt_ranger_page_n = /** @type {(inputs: Ranger_Page_NInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Página ${i?.page}`)
};

const ru_ranger_page_n = /** @type {(inputs: Ranger_Page_NInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Страница ${i?.page}`)
};

const sv_ranger_page_n = /** @type {(inputs: Ranger_Page_NInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sida ${i?.page}`)
};

const tr_ranger_page_n = /** @type {(inputs: Ranger_Page_NInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sayfa ${i?.page}`)
};

const zh_ranger_page_n = /** @type {(inputs: Ranger_Page_NInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`第 ${i?.page} 页`)
};

const ja_ranger_page_n = /** @type {(inputs: Ranger_Page_NInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.page} ページ目`)
};

/**
* | output |
* | --- |
* | "Page {page}" |
*
* @param {Ranger_Page_NInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_page_n = /** @type {((inputs: Ranger_Page_NInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Page_NInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_page_n(inputs)
	if (locale === "de") return de_ranger_page_n(inputs)
	if (locale === "fr") return fr_ranger_page_n(inputs)
	if (locale === "it") return it_ranger_page_n(inputs)
	if (locale === "nl") return nl_ranger_page_n(inputs)
	if (locale === "pl") return pl_ranger_page_n(inputs)
	if (locale === "pt") return pt_ranger_page_n(inputs)
	if (locale === "ru") return ru_ranger_page_n(inputs)
	if (locale === "sv") return sv_ranger_page_n(inputs)
	if (locale === "tr") return tr_ranger_page_n(inputs)
	if (locale === "zh") return zh_ranger_page_n(inputs)
	if (locale === "ja") return ja_ranger_page_n(inputs)
	return en_ranger_page_n(inputs)
});
