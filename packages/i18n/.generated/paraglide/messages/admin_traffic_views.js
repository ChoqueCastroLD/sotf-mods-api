/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Traffic_ViewsInputs */

const en_admin_traffic_views = /** @type {(inputs: Admin_Traffic_ViewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Page views`)
};

const es_admin_traffic_views = /** @type {(inputs: Admin_Traffic_ViewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Páginas vistas`)
};

const de_admin_traffic_views = /** @type {(inputs: Admin_Traffic_ViewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seitenaufrufe`)
};

const fr_admin_traffic_views = /** @type {(inputs: Admin_Traffic_ViewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pages vues`)
};

const it_admin_traffic_views = /** @type {(inputs: Admin_Traffic_ViewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagine viste`)
};

const nl_admin_traffic_views = /** @type {(inputs: Admin_Traffic_ViewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paginaweergaven`)
};

const pl_admin_traffic_views = /** @type {(inputs: Admin_Traffic_ViewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odsłony`)
};

const pt_admin_traffic_views = /** @type {(inputs: Admin_Traffic_ViewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visualizações de página`)
};

const ru_admin_traffic_views = /** @type {(inputs: Admin_Traffic_ViewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Просмотры страниц`)
};

const sv_admin_traffic_views = /** @type {(inputs: Admin_Traffic_ViewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sidvisningar`)
};

const tr_admin_traffic_views = /** @type {(inputs: Admin_Traffic_ViewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfa görüntüleme`)
};

const zh_admin_traffic_views = /** @type {(inputs: Admin_Traffic_ViewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`页面浏览`)
};

const ja_admin_traffic_views = /** @type {(inputs: Admin_Traffic_ViewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ページビュー`)
};

/**
* | output |
* | --- |
* | "Page views" |
*
* @param {Admin_Traffic_ViewsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_traffic_views = /** @type {((inputs?: Admin_Traffic_ViewsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_ViewsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_traffic_views(inputs)
	if (locale === "de") return de_admin_traffic_views(inputs)
	if (locale === "fr") return fr_admin_traffic_views(inputs)
	if (locale === "it") return it_admin_traffic_views(inputs)
	if (locale === "nl") return nl_admin_traffic_views(inputs)
	if (locale === "pl") return pl_admin_traffic_views(inputs)
	if (locale === "pt") return pt_admin_traffic_views(inputs)
	if (locale === "ru") return ru_admin_traffic_views(inputs)
	if (locale === "sv") return sv_admin_traffic_views(inputs)
	if (locale === "tr") return tr_admin_traffic_views(inputs)
	if (locale === "zh") return zh_admin_traffic_views(inputs)
	if (locale === "ja") return ja_admin_traffic_views(inputs)
	return en_admin_traffic_views(inputs)
});
