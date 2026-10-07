/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Pager_Page_SizeInputs */

const en_console_pager_page_size = /** @type {(inputs: Console_Pager_Page_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Items per page`)
};

const es_console_pager_page_size = /** @type {(inputs: Console_Pager_Page_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elementos por página`)
};

const de_console_pager_page_size = /** @type {(inputs: Console_Pager_Page_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einträge pro Seite`)
};

const fr_console_pager_page_size = /** @type {(inputs: Console_Pager_Page_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Éléments par page`)
};

const it_console_pager_page_size = /** @type {(inputs: Console_Pager_Page_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elementi per pagina`)
};

const nl_console_pager_page_size = /** @type {(inputs: Console_Pager_Page_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Items per pagina`)
};

const pl_console_pager_page_size = /** @type {(inputs: Console_Pager_Page_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pozycji na stronę`)
};

const pt_console_pager_page_size = /** @type {(inputs: Console_Pager_Page_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Itens por página`)
};

const ru_console_pager_page_size = /** @type {(inputs: Console_Pager_Page_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Элементов на странице`)
};

const sv_console_pager_page_size = /** @type {(inputs: Console_Pager_Page_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poster per sida`)
};

const tr_console_pager_page_size = /** @type {(inputs: Console_Pager_Page_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfa başına öğe`)
};

const zh_console_pager_page_size = /** @type {(inputs: Console_Pager_Page_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每页条数`)
};

const ja_console_pager_page_size = /** @type {(inputs: Console_Pager_Page_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 ページあたりの件数`)
};

/**
* | output |
* | --- |
* | "Items per page" |
*
* @param {Console_Pager_Page_SizeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_pager_page_size = /** @type {((inputs?: Console_Pager_Page_SizeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Pager_Page_SizeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_pager_page_size(inputs)
	if (locale === "de") return de_console_pager_page_size(inputs)
	if (locale === "fr") return fr_console_pager_page_size(inputs)
	if (locale === "it") return it_console_pager_page_size(inputs)
	if (locale === "nl") return nl_console_pager_page_size(inputs)
	if (locale === "pl") return pl_console_pager_page_size(inputs)
	if (locale === "pt") return pt_console_pager_page_size(inputs)
	if (locale === "ru") return ru_console_pager_page_size(inputs)
	if (locale === "sv") return sv_console_pager_page_size(inputs)
	if (locale === "tr") return tr_console_pager_page_size(inputs)
	if (locale === "zh") return zh_console_pager_page_size(inputs)
	if (locale === "ja") return ja_console_pager_page_size(inputs)
	return en_console_pager_page_size(inputs)
});
