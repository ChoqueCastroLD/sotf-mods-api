/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Pagination_PreviousInputs */

const en_common_pagination_previous = /** @type {(inputs: Common_Pagination_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Previous page`)
};

const es_common_pagination_previous = /** @type {(inputs: Common_Pagination_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Página anterior`)
};

const de_common_pagination_previous = /** @type {(inputs: Common_Pagination_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorherige Seite`)
};

const fr_common_pagination_previous = /** @type {(inputs: Common_Pagination_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Page précédente`)
};

const it_common_pagination_previous = /** @type {(inputs: Common_Pagination_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagina precedente`)
};

const nl_common_pagination_previous = /** @type {(inputs: Common_Pagination_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorige pagina`)
};

const pl_common_pagination_previous = /** @type {(inputs: Common_Pagination_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poprzednia strona`)
};

const pt_common_pagination_previous = /** @type {(inputs: Common_Pagination_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Página anterior`)
};

const ru_common_pagination_previous = /** @type {(inputs: Common_Pagination_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Предыдущая страница`)
};

const sv_common_pagination_previous = /** @type {(inputs: Common_Pagination_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Föregående sida`)
};

const tr_common_pagination_previous = /** @type {(inputs: Common_Pagination_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önceki sayfa`)
};

const zh_common_pagination_previous = /** @type {(inputs: Common_Pagination_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上一页`)
};

const ja_common_pagination_previous = /** @type {(inputs: Common_Pagination_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前のページ`)
};

/**
* | output |
* | --- |
* | "Previous page" |
*
* @param {Common_Pagination_PreviousInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_pagination_previous = /** @type {((inputs?: Common_Pagination_PreviousInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Pagination_PreviousInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_pagination_previous(inputs)
	if (locale === "de") return de_common_pagination_previous(inputs)
	if (locale === "fr") return fr_common_pagination_previous(inputs)
	if (locale === "it") return it_common_pagination_previous(inputs)
	if (locale === "nl") return nl_common_pagination_previous(inputs)
	if (locale === "pl") return pl_common_pagination_previous(inputs)
	if (locale === "pt") return pt_common_pagination_previous(inputs)
	if (locale === "ru") return ru_common_pagination_previous(inputs)
	if (locale === "sv") return sv_common_pagination_previous(inputs)
	if (locale === "tr") return tr_common_pagination_previous(inputs)
	if (locale === "zh") return zh_common_pagination_previous(inputs)
	if (locale === "ja") return ja_common_pagination_previous(inputs)
	return en_common_pagination_previous(inputs)
});
