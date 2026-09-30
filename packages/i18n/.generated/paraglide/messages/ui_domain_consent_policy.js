/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Consent_PolicyInputs */

const en_ui_domain_consent_policy = /** @type {(inputs: Ui_Domain_Consent_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cookie policy`)
};

const es_ui_domain_consent_policy = /** @type {(inputs: Ui_Domain_Consent_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Política de cookies`)
};

const de_ui_domain_consent_policy = /** @type {(inputs: Ui_Domain_Consent_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cookie-Richtlinie`)
};

const fr_ui_domain_consent_policy = /** @type {(inputs: Ui_Domain_Consent_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Politique relative aux cookies`)
};

const it_ui_domain_consent_policy = /** @type {(inputs: Ui_Domain_Consent_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Informativa sui cookie`)
};

const nl_ui_domain_consent_policy = /** @type {(inputs: Ui_Domain_Consent_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cookiebeleid`)
};

const pl_ui_domain_consent_policy = /** @type {(inputs: Ui_Domain_Consent_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Polityka plików cookie`)
};

const pt_ui_domain_consent_policy = /** @type {(inputs: Ui_Domain_Consent_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Política de cookies`)
};

const ru_ui_domain_consent_policy = /** @type {(inputs: Ui_Domain_Consent_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Политика cookie`)
};

const sv_ui_domain_consent_policy = /** @type {(inputs: Ui_Domain_Consent_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cookiepolicy`)
};

const tr_ui_domain_consent_policy = /** @type {(inputs: Ui_Domain_Consent_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çerez politikası`)
};

const zh_ui_domain_consent_policy = /** @type {(inputs: Ui_Domain_Consent_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cookie 政策`)
};

const ja_ui_domain_consent_policy = /** @type {(inputs: Ui_Domain_Consent_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cookie ポリシー`)
};

/**
* | output |
* | --- |
* | "Cookie policy" |
*
* @param {Ui_Domain_Consent_PolicyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_consent_policy = /** @type {((inputs?: Ui_Domain_Consent_PolicyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Consent_PolicyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_consent_policy(inputs)
	if (locale === "de") return de_ui_domain_consent_policy(inputs)
	if (locale === "fr") return fr_ui_domain_consent_policy(inputs)
	if (locale === "it") return it_ui_domain_consent_policy(inputs)
	if (locale === "nl") return nl_ui_domain_consent_policy(inputs)
	if (locale === "pl") return pl_ui_domain_consent_policy(inputs)
	if (locale === "pt") return pt_ui_domain_consent_policy(inputs)
	if (locale === "ru") return ru_ui_domain_consent_policy(inputs)
	if (locale === "sv") return sv_ui_domain_consent_policy(inputs)
	if (locale === "tr") return tr_ui_domain_consent_policy(inputs)
	if (locale === "zh") return zh_ui_domain_consent_policy(inputs)
	if (locale === "ja") return ja_ui_domain_consent_policy(inputs)
	return en_ui_domain_consent_policy(inputs)
});
