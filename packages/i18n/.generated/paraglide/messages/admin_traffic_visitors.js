/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Traffic_VisitorsInputs */

const en_admin_traffic_visitors = /** @type {(inputs: Admin_Traffic_VisitorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visitors`)
};

const es_admin_traffic_visitors = /** @type {(inputs: Admin_Traffic_VisitorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visitantes`)
};

const de_admin_traffic_visitors = /** @type {(inputs: Admin_Traffic_VisitorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Besucher`)
};

const fr_admin_traffic_visitors = /** @type {(inputs: Admin_Traffic_VisitorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visiteurs`)
};

const it_admin_traffic_visitors = /** @type {(inputs: Admin_Traffic_VisitorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visitatori`)
};

const nl_admin_traffic_visitors = /** @type {(inputs: Admin_Traffic_VisitorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bezoekers`)
};

const pl_admin_traffic_visitors = /** @type {(inputs: Admin_Traffic_VisitorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odwiedzający`)
};

const pt_admin_traffic_visitors = /** @type {(inputs: Admin_Traffic_VisitorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visitantes`)
};

const ru_admin_traffic_visitors = /** @type {(inputs: Admin_Traffic_VisitorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Посетители`)
};

const sv_admin_traffic_visitors = /** @type {(inputs: Admin_Traffic_VisitorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Besökare`)
};

const tr_admin_traffic_visitors = /** @type {(inputs: Admin_Traffic_VisitorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ziyaretçi`)
};

const zh_admin_traffic_visitors = /** @type {(inputs: Admin_Traffic_VisitorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`访客`)
};

const ja_admin_traffic_visitors = /** @type {(inputs: Admin_Traffic_VisitorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`訪問者`)
};

/**
* | output |
* | --- |
* | "Visitors" |
*
* @param {Admin_Traffic_VisitorsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_traffic_visitors = /** @type {((inputs?: Admin_Traffic_VisitorsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_VisitorsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_traffic_visitors(inputs)
	if (locale === "de") return de_admin_traffic_visitors(inputs)
	if (locale === "fr") return fr_admin_traffic_visitors(inputs)
	if (locale === "it") return it_admin_traffic_visitors(inputs)
	if (locale === "nl") return nl_admin_traffic_visitors(inputs)
	if (locale === "pl") return pl_admin_traffic_visitors(inputs)
	if (locale === "pt") return pt_admin_traffic_visitors(inputs)
	if (locale === "ru") return ru_admin_traffic_visitors(inputs)
	if (locale === "sv") return sv_admin_traffic_visitors(inputs)
	if (locale === "tr") return tr_admin_traffic_visitors(inputs)
	if (locale === "zh") return zh_admin_traffic_visitors(inputs)
	if (locale === "ja") return ja_admin_traffic_visitors(inputs)
	return en_admin_traffic_visitors(inputs)
});
