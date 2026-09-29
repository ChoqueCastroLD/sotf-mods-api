/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ page: NonNullable<unknown> }} Ui_Page_NumberInputs */

const en_ui_page_number = /** @type {(inputs: Ui_Page_NumberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Page ${i?.page}`)
};

const es_ui_page_number = /** @type {(inputs: Ui_Page_NumberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Página ${i?.page}`)
};

const de_ui_page_number = /** @type {(inputs: Ui_Page_NumberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Seite ${i?.page}`)
};

const fr_ui_page_number = /** @type {(inputs: Ui_Page_NumberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Page ${i?.page}`)
};

const it_ui_page_number = /** @type {(inputs: Ui_Page_NumberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pagina ${i?.page}`)
};

const nl_ui_page_number = /** @type {(inputs: Ui_Page_NumberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pagina ${i?.page}`)
};

const pl_ui_page_number = /** @type {(inputs: Ui_Page_NumberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Strona ${i?.page}`)
};

const pt_ui_page_number = /** @type {(inputs: Ui_Page_NumberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Página ${i?.page}`)
};

const ru_ui_page_number = /** @type {(inputs: Ui_Page_NumberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Страница ${i?.page}`)
};

const sv_ui_page_number = /** @type {(inputs: Ui_Page_NumberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sida ${i?.page}`)
};

const tr_ui_page_number = /** @type {(inputs: Ui_Page_NumberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sayfa ${i?.page}`)
};

const zh_ui_page_number = /** @type {(inputs: Ui_Page_NumberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`第 ${i?.page} 页`)
};

const ja_ui_page_number = /** @type {(inputs: Ui_Page_NumberInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.page} ページ`)
};

/**
* | output |
* | --- |
* | "Page {page}" |
*
* @param {Ui_Page_NumberInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_page_number = /** @type {((inputs: Ui_Page_NumberInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Page_NumberInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_page_number(inputs)
	if (locale === "de") return de_ui_page_number(inputs)
	if (locale === "fr") return fr_ui_page_number(inputs)
	if (locale === "it") return it_ui_page_number(inputs)
	if (locale === "nl") return nl_ui_page_number(inputs)
	if (locale === "pl") return pl_ui_page_number(inputs)
	if (locale === "pt") return pt_ui_page_number(inputs)
	if (locale === "ru") return ru_ui_page_number(inputs)
	if (locale === "sv") return sv_ui_page_number(inputs)
	if (locale === "tr") return tr_ui_page_number(inputs)
	if (locale === "zh") return zh_ui_page_number(inputs)
	if (locale === "ja") return ja_ui_page_number(inputs)
	return en_ui_page_number(inputs)
});
