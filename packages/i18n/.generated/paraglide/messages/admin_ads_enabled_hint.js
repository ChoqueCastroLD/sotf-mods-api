/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ads_Enabled_HintInputs */

const en_admin_ads_enabled_hint = /** @type {(inputs: Admin_Ads_Enabled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Needs the publisher ID below.`)
};

const es_admin_ads_enabled_hint = /** @type {(inputs: Admin_Ads_Enabled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Necesita el ID de editor de abajo.`)
};

const de_admin_ads_enabled_hint = /** @type {(inputs: Admin_Ads_Enabled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Braucht die Publisher-ID unten.`)
};

const fr_admin_ads_enabled_hint = /** @type {(inputs: Admin_Ads_Enabled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nécessite l’ID d’éditeur ci-dessous.`)
};

const it_admin_ads_enabled_hint = /** @type {(inputs: Admin_Ads_Enabled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Richiede l’ID publisher qui sotto.`)
};

const nl_admin_ads_enabled_hint = /** @type {(inputs: Admin_Ads_Enabled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vereist de uitgevers-ID hieronder.`)
};

const pl_admin_ads_enabled_hint = /** @type {(inputs: Admin_Ads_Enabled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wymaga poniższego ID wydawcy.`)
};

const pt_admin_ads_enabled_hint = /** @type {(inputs: Admin_Ads_Enabled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Precisa do ID de editor abaixo.`)
};

const ru_admin_ads_enabled_hint = /** @type {(inputs: Admin_Ads_Enabled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нужен ID издателя ниже.`)
};

const sv_admin_ads_enabled_hint = /** @type {(inputs: Admin_Ads_Enabled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kräver utgivar-ID:t nedan.`)
};

const tr_admin_ads_enabled_hint = /** @type {(inputs: Admin_Ads_Enabled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aşağıdaki yayıncı kimliği gerekir.`)
};

const zh_admin_ads_enabled_hint = /** @type {(inputs: Admin_Ads_Enabled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`需要下方的发布商 ID。`)
};

const ja_admin_ads_enabled_hint = /** @type {(inputs: Admin_Ads_Enabled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下のサイト運営者 ID が必要です。`)
};

/**
* | output |
* | --- |
* | "Needs the publisher ID below." |
*
* @param {Admin_Ads_Enabled_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ads_enabled_hint = /** @type {((inputs?: Admin_Ads_Enabled_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ads_Enabled_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ads_enabled_hint(inputs)
	if (locale === "de") return de_admin_ads_enabled_hint(inputs)
	if (locale === "fr") return fr_admin_ads_enabled_hint(inputs)
	if (locale === "it") return it_admin_ads_enabled_hint(inputs)
	if (locale === "nl") return nl_admin_ads_enabled_hint(inputs)
	if (locale === "pl") return pl_admin_ads_enabled_hint(inputs)
	if (locale === "pt") return pt_admin_ads_enabled_hint(inputs)
	if (locale === "ru") return ru_admin_ads_enabled_hint(inputs)
	if (locale === "sv") return sv_admin_ads_enabled_hint(inputs)
	if (locale === "tr") return tr_admin_ads_enabled_hint(inputs)
	if (locale === "zh") return zh_admin_ads_enabled_hint(inputs)
	if (locale === "ja") return ja_admin_ads_enabled_hint(inputs)
	return en_admin_ads_enabled_hint(inputs)
});
