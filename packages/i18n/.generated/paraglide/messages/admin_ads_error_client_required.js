/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ads_Error_Client_RequiredInputs */

const en_admin_ads_error_client_required = /** @type {(inputs: Admin_Ads_Error_Client_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ads need a publisher ID.`)
};

const es_admin_ads_error_client_required = /** @type {(inputs: Admin_Ads_Error_Client_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La publicidad necesita un ID de editor.`)
};

const de_admin_ads_error_client_required = /** @type {(inputs: Admin_Ads_Error_Client_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Werbung braucht eine Publisher-ID.`)
};

const fr_admin_ads_error_client_required = /** @type {(inputs: Admin_Ads_Error_Client_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La publicité nécessite un ID d’éditeur.`)
};

const it_admin_ads_error_client_required = /** @type {(inputs: Admin_Ads_Error_Client_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La pubblicità richiede un ID publisher.`)
};

const nl_admin_ads_error_client_required = /** @type {(inputs: Admin_Ads_Error_Client_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Advertenties vereisen een uitgevers-ID.`)
};

const pl_admin_ads_error_client_required = /** @type {(inputs: Admin_Ads_Error_Client_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reklamy wymagają ID wydawcy.`)
};

const pt_admin_ads_error_client_required = /** @type {(inputs: Admin_Ads_Error_Client_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anúncios precisam de um ID de editor.`)
};

const ru_admin_ads_error_client_required = /** @type {(inputs: Admin_Ads_Error_Client_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Для рекламы нужен ID издателя.`)
};

const sv_admin_ads_error_client_required = /** @type {(inputs: Admin_Ads_Error_Client_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annonser kräver ett utgivar-ID.`)
};

const tr_admin_ads_error_client_required = /** @type {(inputs: Admin_Ads_Error_Client_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reklamlar için bir yayıncı kimliği gerekir.`)
};

const zh_admin_ads_error_client_required = /** @type {(inputs: Admin_Ads_Error_Client_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示广告需要发布商 ID。`)
};

const ja_admin_ads_error_client_required = /** @type {(inputs: Admin_Ads_Error_Client_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`広告にはサイト運営者 ID が必要です。`)
};

/**
* | output |
* | --- |
* | "Ads need a publisher ID." |
*
* @param {Admin_Ads_Error_Client_RequiredInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ads_error_client_required = /** @type {((inputs?: Admin_Ads_Error_Client_RequiredInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ads_Error_Client_RequiredInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ads_error_client_required(inputs)
	if (locale === "de") return de_admin_ads_error_client_required(inputs)
	if (locale === "fr") return fr_admin_ads_error_client_required(inputs)
	if (locale === "it") return it_admin_ads_error_client_required(inputs)
	if (locale === "nl") return nl_admin_ads_error_client_required(inputs)
	if (locale === "pl") return pl_admin_ads_error_client_required(inputs)
	if (locale === "pt") return pt_admin_ads_error_client_required(inputs)
	if (locale === "ru") return ru_admin_ads_error_client_required(inputs)
	if (locale === "sv") return sv_admin_ads_error_client_required(inputs)
	if (locale === "tr") return tr_admin_ads_error_client_required(inputs)
	if (locale === "zh") return zh_admin_ads_error_client_required(inputs)
	if (locale === "ja") return ja_admin_ads_error_client_required(inputs)
	return en_admin_ads_error_client_required(inputs)
});
