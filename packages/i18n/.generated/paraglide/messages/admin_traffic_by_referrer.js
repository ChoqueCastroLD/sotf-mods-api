/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Traffic_By_ReferrerInputs */

const en_admin_traffic_by_referrer = /** @type {(inputs: Admin_Traffic_By_ReferrerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Source`)
};

const es_admin_traffic_by_referrer = /** @type {(inputs: Admin_Traffic_By_ReferrerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Origen`)
};

const de_admin_traffic_by_referrer = /** @type {(inputs: Admin_Traffic_By_ReferrerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quelle`)
};

const fr_admin_traffic_by_referrer = /** @type {(inputs: Admin_Traffic_By_ReferrerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Source`)
};

const it_admin_traffic_by_referrer = /** @type {(inputs: Admin_Traffic_By_ReferrerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fonte`)
};

const nl_admin_traffic_by_referrer = /** @type {(inputs: Admin_Traffic_By_ReferrerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bron`)
};

const pl_admin_traffic_by_referrer = /** @type {(inputs: Admin_Traffic_By_ReferrerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Źródło`)
};

const pt_admin_traffic_by_referrer = /** @type {(inputs: Admin_Traffic_By_ReferrerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Origem`)
};

const ru_admin_traffic_by_referrer = /** @type {(inputs: Admin_Traffic_By_ReferrerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Источник`)
};

const sv_admin_traffic_by_referrer = /** @type {(inputs: Admin_Traffic_By_ReferrerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Källa`)
};

const tr_admin_traffic_by_referrer = /** @type {(inputs: Admin_Traffic_By_ReferrerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaynak`)
};

const zh_admin_traffic_by_referrer = /** @type {(inputs: Admin_Traffic_By_ReferrerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`来源`)
};

const ja_admin_traffic_by_referrer = /** @type {(inputs: Admin_Traffic_By_ReferrerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`流入元`)
};

/**
* | output |
* | --- |
* | "Source" |
*
* @param {Admin_Traffic_By_ReferrerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_traffic_by_referrer = /** @type {((inputs?: Admin_Traffic_By_ReferrerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_By_ReferrerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_traffic_by_referrer(inputs)
	if (locale === "de") return de_admin_traffic_by_referrer(inputs)
	if (locale === "fr") return fr_admin_traffic_by_referrer(inputs)
	if (locale === "it") return it_admin_traffic_by_referrer(inputs)
	if (locale === "nl") return nl_admin_traffic_by_referrer(inputs)
	if (locale === "pl") return pl_admin_traffic_by_referrer(inputs)
	if (locale === "pt") return pt_admin_traffic_by_referrer(inputs)
	if (locale === "ru") return ru_admin_traffic_by_referrer(inputs)
	if (locale === "sv") return sv_admin_traffic_by_referrer(inputs)
	if (locale === "tr") return tr_admin_traffic_by_referrer(inputs)
	if (locale === "zh") return zh_admin_traffic_by_referrer(inputs)
	if (locale === "ja") return ja_admin_traffic_by_referrer(inputs)
	return en_admin_traffic_by_referrer(inputs)
});
