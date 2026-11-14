/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Traffic_PageInputs */

const en_admin_traffic_page = /** @type {(inputs: Admin_Traffic_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Page`)
};

const es_admin_traffic_page = /** @type {(inputs: Admin_Traffic_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Página`)
};

const de_admin_traffic_page = /** @type {(inputs: Admin_Traffic_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seite`)
};

const fr_admin_traffic_page = /** @type {(inputs: Admin_Traffic_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Page`)
};

const it_admin_traffic_page = /** @type {(inputs: Admin_Traffic_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagina`)
};

const nl_admin_traffic_page = /** @type {(inputs: Admin_Traffic_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagina`)
};

const pl_admin_traffic_page = /** @type {(inputs: Admin_Traffic_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strona`)
};

const pt_admin_traffic_page = /** @type {(inputs: Admin_Traffic_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Página`)
};

const ru_admin_traffic_page = /** @type {(inputs: Admin_Traffic_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Страница`)
};

const sv_admin_traffic_page = /** @type {(inputs: Admin_Traffic_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sida`)
};

const tr_admin_traffic_page = /** @type {(inputs: Admin_Traffic_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfa`)
};

const zh_admin_traffic_page = /** @type {(inputs: Admin_Traffic_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`页面`)
};

const ja_admin_traffic_page = /** @type {(inputs: Admin_Traffic_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ページ`)
};

/**
* | output |
* | --- |
* | "Page" |
*
* @param {Admin_Traffic_PageInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_traffic_page = /** @type {((inputs?: Admin_Traffic_PageInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_PageInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_traffic_page(inputs)
	if (locale === "de") return de_admin_traffic_page(inputs)
	if (locale === "fr") return fr_admin_traffic_page(inputs)
	if (locale === "it") return it_admin_traffic_page(inputs)
	if (locale === "nl") return nl_admin_traffic_page(inputs)
	if (locale === "pl") return pl_admin_traffic_page(inputs)
	if (locale === "pt") return pt_admin_traffic_page(inputs)
	if (locale === "ru") return ru_admin_traffic_page(inputs)
	if (locale === "sv") return sv_admin_traffic_page(inputs)
	if (locale === "tr") return tr_admin_traffic_page(inputs)
	if (locale === "zh") return zh_admin_traffic_page(inputs)
	if (locale === "ja") return ja_admin_traffic_page(inputs)
	return en_admin_traffic_page(inputs)
});
