/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ads_ClientInputs */

const en_admin_ads_client = /** @type {(inputs: Admin_Ads_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publisher ID`)
};

const es_admin_ads_client = /** @type {(inputs: Admin_Ads_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID de editor`)
};

const de_admin_ads_client = /** @type {(inputs: Admin_Ads_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publisher-ID`)
};

const fr_admin_ads_client = /** @type {(inputs: Admin_Ads_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID d’éditeur`)
};

const it_admin_ads_client = /** @type {(inputs: Admin_Ads_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID publisher`)
};

const nl_admin_ads_client = /** @type {(inputs: Admin_Ads_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uitgevers-ID`)
};

const pl_admin_ads_client = /** @type {(inputs: Admin_Ads_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID wydawcy`)
};

const pt_admin_ads_client = /** @type {(inputs: Admin_Ads_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID de editor`)
};

const ru_admin_ads_client = /** @type {(inputs: Admin_Ads_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID издателя`)
};

const sv_admin_ads_client = /** @type {(inputs: Admin_Ads_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utgivar-ID`)
};

const tr_admin_ads_client = /** @type {(inputs: Admin_Ads_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yayıncı kimliği`)
};

const zh_admin_ads_client = /** @type {(inputs: Admin_Ads_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布商 ID`)
};

const ja_admin_ads_client = /** @type {(inputs: Admin_Ads_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サイト運営者 ID`)
};

/**
* | output |
* | --- |
* | "Publisher ID" |
*
* @param {Admin_Ads_ClientInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ads_client = /** @type {((inputs?: Admin_Ads_ClientInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ads_ClientInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ads_client(inputs)
	if (locale === "de") return de_admin_ads_client(inputs)
	if (locale === "fr") return fr_admin_ads_client(inputs)
	if (locale === "it") return it_admin_ads_client(inputs)
	if (locale === "nl") return nl_admin_ads_client(inputs)
	if (locale === "pl") return pl_admin_ads_client(inputs)
	if (locale === "pt") return pt_admin_ads_client(inputs)
	if (locale === "ru") return ru_admin_ads_client(inputs)
	if (locale === "sv") return sv_admin_ads_client(inputs)
	if (locale === "tr") return tr_admin_ads_client(inputs)
	if (locale === "zh") return zh_admin_ads_client(inputs)
	if (locale === "ja") return ja_admin_ads_client(inputs)
	return en_admin_ads_client(inputs)
});
