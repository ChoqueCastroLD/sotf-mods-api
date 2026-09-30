/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Consent_LabelInputs */

const en_ui_domain_consent_label = /** @type {(inputs: Ui_Domain_Consent_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cookie consent`)
};

const es_ui_domain_consent_label = /** @type {(inputs: Ui_Domain_Consent_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consentimiento de cookies`)
};

const de_ui_domain_consent_label = /** @type {(inputs: Ui_Domain_Consent_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cookie-Einwilligung`)
};

const fr_ui_domain_consent_label = /** @type {(inputs: Ui_Domain_Consent_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consentement aux cookies`)
};

const it_ui_domain_consent_label = /** @type {(inputs: Ui_Domain_Consent_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consenso ai cookie`)
};

const nl_ui_domain_consent_label = /** @type {(inputs: Ui_Domain_Consent_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cookietoestemming`)
};

const pl_ui_domain_consent_label = /** @type {(inputs: Ui_Domain_Consent_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgoda na pliki cookie`)
};

const pt_ui_domain_consent_label = /** @type {(inputs: Ui_Domain_Consent_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consentimento de cookies`)
};

const ru_ui_domain_consent_label = /** @type {(inputs: Ui_Domain_Consent_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Согласие на cookie`)
};

const sv_ui_domain_consent_label = /** @type {(inputs: Ui_Domain_Consent_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Samtycke till cookies`)
};

const tr_ui_domain_consent_label = /** @type {(inputs: Ui_Domain_Consent_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çerez onayı`)
};

const zh_ui_domain_consent_label = /** @type {(inputs: Ui_Domain_Consent_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cookie 同意`)
};

const ja_ui_domain_consent_label = /** @type {(inputs: Ui_Domain_Consent_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cookie の同意`)
};

/**
* | output |
* | --- |
* | "Cookie consent" |
*
* @param {Ui_Domain_Consent_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_consent_label = /** @type {((inputs?: Ui_Domain_Consent_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Consent_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_consent_label(inputs)
	if (locale === "de") return de_ui_domain_consent_label(inputs)
	if (locale === "fr") return fr_ui_domain_consent_label(inputs)
	if (locale === "it") return it_ui_domain_consent_label(inputs)
	if (locale === "nl") return nl_ui_domain_consent_label(inputs)
	if (locale === "pl") return pl_ui_domain_consent_label(inputs)
	if (locale === "pt") return pt_ui_domain_consent_label(inputs)
	if (locale === "ru") return ru_ui_domain_consent_label(inputs)
	if (locale === "sv") return sv_ui_domain_consent_label(inputs)
	if (locale === "tr") return tr_ui_domain_consent_label(inputs)
	if (locale === "zh") return zh_ui_domain_consent_label(inputs)
	if (locale === "ja") return ja_ui_domain_consent_label(inputs)
	return en_ui_domain_consent_label(inputs)
});
