/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_PaginationInputs */

const en_ui_pagination = /** @type {(inputs: Ui_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagination`)
};

const es_ui_pagination = /** @type {(inputs: Ui_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paginación`)
};

const de_ui_pagination = /** @type {(inputs: Ui_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seitennavigation`)
};

const fr_ui_pagination = /** @type {(inputs: Ui_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagination`)
};

const it_ui_pagination = /** @type {(inputs: Ui_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paginazione`)
};

const nl_ui_pagination = /** @type {(inputs: Ui_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paginering`)
};

const pl_ui_pagination = /** @type {(inputs: Ui_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paginacja`)
};

const pt_ui_pagination = /** @type {(inputs: Ui_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paginação`)
};

const ru_ui_pagination = /** @type {(inputs: Ui_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Страницы`)
};

const sv_ui_pagination = /** @type {(inputs: Ui_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sidnumrering`)
};

const tr_ui_pagination = /** @type {(inputs: Ui_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfalama`)
};

const zh_ui_pagination = /** @type {(inputs: Ui_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分页`)
};

const ja_ui_pagination = /** @type {(inputs: Ui_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ページ送り`)
};

/**
* | output |
* | --- |
* | "Pagination" |
*
* @param {Ui_PaginationInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_pagination = /** @type {((inputs?: Ui_PaginationInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_PaginationInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_pagination(inputs)
	if (locale === "de") return de_ui_pagination(inputs)
	if (locale === "fr") return fr_ui_pagination(inputs)
	if (locale === "it") return it_ui_pagination(inputs)
	if (locale === "nl") return nl_ui_pagination(inputs)
	if (locale === "pl") return pl_ui_pagination(inputs)
	if (locale === "pt") return pt_ui_pagination(inputs)
	if (locale === "ru") return ru_ui_pagination(inputs)
	if (locale === "sv") return sv_ui_pagination(inputs)
	if (locale === "tr") return tr_ui_pagination(inputs)
	if (locale === "zh") return zh_ui_pagination(inputs)
	if (locale === "ja") return ja_ui_pagination(inputs)
	return en_ui_pagination(inputs)
});
