/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Console_Pager_Per_PageInputs */

const en_console_pager_per_page = /** @type {(inputs: Console_Pager_Per_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} per page`)
};

const es_console_pager_per_page = /** @type {(inputs: Console_Pager_Per_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} por página`)
};

const de_console_pager_per_page = /** @type {(inputs: Console_Pager_Per_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} pro Seite`)
};

const fr_console_pager_per_page = /** @type {(inputs: Console_Pager_Per_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} par page`)
};

const it_console_pager_per_page = /** @type {(inputs: Console_Pager_Per_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} per pagina`)
};

const nl_console_pager_per_page = /** @type {(inputs: Console_Pager_Per_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} per pagina`)
};

const pl_console_pager_per_page = /** @type {(inputs: Console_Pager_Per_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} na stronę`)
};

const pt_console_pager_per_page = /** @type {(inputs: Console_Pager_Per_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} por página`)
};

const ru_console_pager_per_page = /** @type {(inputs: Console_Pager_Per_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} на странице`)
};

const sv_console_pager_per_page = /** @type {(inputs: Console_Pager_Per_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} per sida`)
};

const tr_console_pager_per_page = /** @type {(inputs: Console_Pager_Per_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sayfada ${i?.count}`)
};

const zh_console_pager_per_page = /** @type {(inputs: Console_Pager_Per_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`每页 ${i?.count} 条`)
};

const ja_console_pager_per_page = /** @type {(inputs: Console_Pager_Per_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 件/ページ`)
};

/**
* | output |
* | --- |
* | "{count} per page" |
*
* @param {Console_Pager_Per_PageInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_pager_per_page = /** @type {((inputs: Console_Pager_Per_PageInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Pager_Per_PageInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_pager_per_page(inputs)
	if (locale === "de") return de_console_pager_per_page(inputs)
	if (locale === "fr") return fr_console_pager_per_page(inputs)
	if (locale === "it") return it_console_pager_per_page(inputs)
	if (locale === "nl") return nl_console_pager_per_page(inputs)
	if (locale === "pl") return pl_console_pager_per_page(inputs)
	if (locale === "pt") return pt_console_pager_per_page(inputs)
	if (locale === "ru") return ru_console_pager_per_page(inputs)
	if (locale === "sv") return sv_console_pager_per_page(inputs)
	if (locale === "tr") return tr_console_pager_per_page(inputs)
	if (locale === "zh") return zh_console_pager_per_page(inputs)
	if (locale === "ja") return ja_console_pager_per_page(inputs)
	return en_console_pager_per_page(inputs)
});
