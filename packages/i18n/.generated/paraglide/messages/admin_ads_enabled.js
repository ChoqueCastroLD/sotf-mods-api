/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ads_EnabledInputs */

const en_admin_ads_enabled = /** @type {(inputs: Admin_Ads_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show ads`)
};

const es_admin_ads_enabled = /** @type {(inputs: Admin_Ads_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar publicidad`)
};

const de_admin_ads_enabled = /** @type {(inputs: Admin_Ads_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Werbung anzeigen`)
};

const fr_admin_ads_enabled = /** @type {(inputs: Admin_Ads_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afficher la publicité`)
};

const it_admin_ads_enabled = /** @type {(inputs: Admin_Ads_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostra pubblicità`)
};

const nl_admin_ads_enabled = /** @type {(inputs: Admin_Ads_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Advertenties tonen`)
};

const pl_admin_ads_enabled = /** @type {(inputs: Admin_Ads_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pokazuj reklamy`)
};

const pt_admin_ads_enabled = /** @type {(inputs: Admin_Ads_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar anúncios`)
};

const ru_admin_ads_enabled = /** @type {(inputs: Admin_Ads_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Показывать рекламу`)
};

const sv_admin_ads_enabled = /** @type {(inputs: Admin_Ads_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa annonser`)
};

const tr_admin_ads_enabled = /** @type {(inputs: Admin_Ads_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reklam göster`)
};

const zh_admin_ads_enabled = /** @type {(inputs: Admin_Ads_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示广告`)
};

const ja_admin_ads_enabled = /** @type {(inputs: Admin_Ads_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`広告を表示`)
};

/**
* | output |
* | --- |
* | "Show ads" |
*
* @param {Admin_Ads_EnabledInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ads_enabled = /** @type {((inputs?: Admin_Ads_EnabledInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ads_EnabledInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ads_enabled(inputs)
	if (locale === "de") return de_admin_ads_enabled(inputs)
	if (locale === "fr") return fr_admin_ads_enabled(inputs)
	if (locale === "it") return it_admin_ads_enabled(inputs)
	if (locale === "nl") return nl_admin_ads_enabled(inputs)
	if (locale === "pl") return pl_admin_ads_enabled(inputs)
	if (locale === "pt") return pt_admin_ads_enabled(inputs)
	if (locale === "ru") return ru_admin_ads_enabled(inputs)
	if (locale === "sv") return sv_admin_ads_enabled(inputs)
	if (locale === "tr") return tr_admin_ads_enabled(inputs)
	if (locale === "zh") return zh_admin_ads_enabled(inputs)
	if (locale === "ja") return ja_admin_ads_enabled(inputs)
	return en_admin_ads_enabled(inputs)
});
