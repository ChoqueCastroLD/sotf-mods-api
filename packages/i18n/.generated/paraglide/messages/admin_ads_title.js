/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ads_TitleInputs */

const en_admin_ads_title = /** @type {(inputs: Admin_Ads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ads`)
};

const es_admin_ads_title = /** @type {(inputs: Admin_Ads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicidad`)
};

const de_admin_ads_title = /** @type {(inputs: Admin_Ads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Werbung`)
};

const fr_admin_ads_title = /** @type {(inputs: Admin_Ads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicité`)
};

const it_admin_ads_title = /** @type {(inputs: Admin_Ads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblicità`)
};

const nl_admin_ads_title = /** @type {(inputs: Admin_Ads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Advertenties`)
};

const pl_admin_ads_title = /** @type {(inputs: Admin_Ads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reklamy`)
};

const pt_admin_ads_title = /** @type {(inputs: Admin_Ads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anúncios`)
};

const ru_admin_ads_title = /** @type {(inputs: Admin_Ads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Реклама`)
};

const sv_admin_ads_title = /** @type {(inputs: Admin_Ads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annonser`)
};

const tr_admin_ads_title = /** @type {(inputs: Admin_Ads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reklamlar`)
};

const zh_admin_ads_title = /** @type {(inputs: Admin_Ads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`广告`)
};

const ja_admin_ads_title = /** @type {(inputs: Admin_Ads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`広告`)
};

/**
* | output |
* | --- |
* | "Ads" |
*
* @param {Admin_Ads_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ads_title = /** @type {((inputs?: Admin_Ads_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ads_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ads_title(inputs)
	if (locale === "de") return de_admin_ads_title(inputs)
	if (locale === "fr") return fr_admin_ads_title(inputs)
	if (locale === "it") return it_admin_ads_title(inputs)
	if (locale === "nl") return nl_admin_ads_title(inputs)
	if (locale === "pl") return pl_admin_ads_title(inputs)
	if (locale === "pt") return pt_admin_ads_title(inputs)
	if (locale === "ru") return ru_admin_ads_title(inputs)
	if (locale === "sv") return sv_admin_ads_title(inputs)
	if (locale === "tr") return tr_admin_ads_title(inputs)
	if (locale === "zh") return zh_admin_ads_title(inputs)
	if (locale === "ja") return ja_admin_ads_title(inputs)
	return en_admin_ads_title(inputs)
});
