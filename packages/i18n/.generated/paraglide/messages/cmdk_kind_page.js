/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Kind_PageInputs */

const en_cmdk_kind_page = /** @type {(inputs: Cmdk_Kind_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Page`)
};

const es_cmdk_kind_page = /** @type {(inputs: Cmdk_Kind_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Página`)
};

const de_cmdk_kind_page = /** @type {(inputs: Cmdk_Kind_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seite`)
};

const fr_cmdk_kind_page = /** @type {(inputs: Cmdk_Kind_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Page`)
};

const it_cmdk_kind_page = /** @type {(inputs: Cmdk_Kind_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagina`)
};

const nl_cmdk_kind_page = /** @type {(inputs: Cmdk_Kind_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagina`)
};

const pl_cmdk_kind_page = /** @type {(inputs: Cmdk_Kind_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strona`)
};

const pt_cmdk_kind_page = /** @type {(inputs: Cmdk_Kind_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Página`)
};

const ru_cmdk_kind_page = /** @type {(inputs: Cmdk_Kind_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Страница`)
};

const sv_cmdk_kind_page = /** @type {(inputs: Cmdk_Kind_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sida`)
};

const tr_cmdk_kind_page = /** @type {(inputs: Cmdk_Kind_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfa`)
};

const zh_cmdk_kind_page = /** @type {(inputs: Cmdk_Kind_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`页面`)
};

const ja_cmdk_kind_page = /** @type {(inputs: Cmdk_Kind_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ページ`)
};

/**
* | output |
* | --- |
* | "Page" |
*
* @param {Cmdk_Kind_PageInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_kind_page = /** @type {((inputs?: Cmdk_Kind_PageInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Kind_PageInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_kind_page(inputs)
	if (locale === "de") return de_cmdk_kind_page(inputs)
	if (locale === "fr") return fr_cmdk_kind_page(inputs)
	if (locale === "it") return it_cmdk_kind_page(inputs)
	if (locale === "nl") return nl_cmdk_kind_page(inputs)
	if (locale === "pl") return pl_cmdk_kind_page(inputs)
	if (locale === "pt") return pt_cmdk_kind_page(inputs)
	if (locale === "ru") return ru_cmdk_kind_page(inputs)
	if (locale === "sv") return sv_cmdk_kind_page(inputs)
	if (locale === "tr") return tr_cmdk_kind_page(inputs)
	if (locale === "zh") return zh_cmdk_kind_page(inputs)
	if (locale === "ja") return ja_cmdk_kind_page(inputs)
	return en_cmdk_kind_page(inputs)
});
