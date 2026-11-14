/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Traffic_Top_PagesInputs */

const en_admin_traffic_top_pages = /** @type {(inputs: Admin_Traffic_Top_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Top pages`)
};

const es_admin_traffic_top_pages = /** @type {(inputs: Admin_Traffic_Top_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Páginas más vistas`)
};

const de_admin_traffic_top_pages = /** @type {(inputs: Admin_Traffic_Top_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meistbesuchte Seiten`)
};

const fr_admin_traffic_top_pages = /** @type {(inputs: Admin_Traffic_Top_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pages les plus vues`)
};

const it_admin_traffic_top_pages = /** @type {(inputs: Admin_Traffic_Top_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagine più viste`)
};

const nl_admin_traffic_top_pages = /** @type {(inputs: Admin_Traffic_Top_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meest bekeken pagina’s`)
};

const pl_admin_traffic_top_pages = /** @type {(inputs: Admin_Traffic_Top_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najczęściej oglądane strony`)
};

const pt_admin_traffic_top_pages = /** @type {(inputs: Admin_Traffic_Top_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Páginas mais vistas`)
};

const ru_admin_traffic_top_pages = /** @type {(inputs: Admin_Traffic_Top_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Популярные страницы`)
};

const sv_admin_traffic_top_pages = /** @type {(inputs: Admin_Traffic_Top_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mest visade sidor`)
};

const tr_admin_traffic_top_pages = /** @type {(inputs: Admin_Traffic_Top_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En çok görüntülenen sayfalar`)
};

const zh_admin_traffic_top_pages = /** @type {(inputs: Admin_Traffic_Top_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`热门页面`)
};

const ja_admin_traffic_top_pages = /** @type {(inputs: Admin_Traffic_Top_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`人気ページ`)
};

/**
* | output |
* | --- |
* | "Top pages" |
*
* @param {Admin_Traffic_Top_PagesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_traffic_top_pages = /** @type {((inputs?: Admin_Traffic_Top_PagesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_Top_PagesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_traffic_top_pages(inputs)
	if (locale === "de") return de_admin_traffic_top_pages(inputs)
	if (locale === "fr") return fr_admin_traffic_top_pages(inputs)
	if (locale === "it") return it_admin_traffic_top_pages(inputs)
	if (locale === "nl") return nl_admin_traffic_top_pages(inputs)
	if (locale === "pl") return pl_admin_traffic_top_pages(inputs)
	if (locale === "pt") return pt_admin_traffic_top_pages(inputs)
	if (locale === "ru") return ru_admin_traffic_top_pages(inputs)
	if (locale === "sv") return sv_admin_traffic_top_pages(inputs)
	if (locale === "tr") return tr_admin_traffic_top_pages(inputs)
	if (locale === "zh") return zh_admin_traffic_top_pages(inputs)
	if (locale === "ja") return ja_admin_traffic_top_pages(inputs)
	return en_admin_traffic_top_pages(inputs)
});
