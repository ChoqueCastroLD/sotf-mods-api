/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Consent_AcceptInputs */

const en_ui_domain_consent_accept = /** @type {(inputs: Ui_Domain_Consent_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accept`)
};

const es_ui_domain_consent_accept = /** @type {(inputs: Ui_Domain_Consent_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aceptar`)
};

const de_ui_domain_consent_accept = /** @type {(inputs: Ui_Domain_Consent_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Akzeptieren`)
};

const fr_ui_domain_consent_accept = /** @type {(inputs: Ui_Domain_Consent_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accepter`)
};

const it_ui_domain_consent_accept = /** @type {(inputs: Ui_Domain_Consent_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accetta`)
};

const nl_ui_domain_consent_accept = /** @type {(inputs: Ui_Domain_Consent_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accepteren`)
};

const pl_ui_domain_consent_accept = /** @type {(inputs: Ui_Domain_Consent_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Akceptuj`)
};

const pt_ui_domain_consent_accept = /** @type {(inputs: Ui_Domain_Consent_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aceitar`)
};

const ru_ui_domain_consent_accept = /** @type {(inputs: Ui_Domain_Consent_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Принять`)
};

const sv_ui_domain_consent_accept = /** @type {(inputs: Ui_Domain_Consent_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Godkänn`)
};

const tr_ui_domain_consent_accept = /** @type {(inputs: Ui_Domain_Consent_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kabul et`)
};

const zh_ui_domain_consent_accept = /** @type {(inputs: Ui_Domain_Consent_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`接受`)
};

const ja_ui_domain_consent_accept = /** @type {(inputs: Ui_Domain_Consent_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`同意する`)
};

/**
* | output |
* | --- |
* | "Accept" |
*
* @param {Ui_Domain_Consent_AcceptInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_consent_accept = /** @type {((inputs?: Ui_Domain_Consent_AcceptInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Consent_AcceptInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_consent_accept(inputs)
	if (locale === "de") return de_ui_domain_consent_accept(inputs)
	if (locale === "fr") return fr_ui_domain_consent_accept(inputs)
	if (locale === "it") return it_ui_domain_consent_accept(inputs)
	if (locale === "nl") return nl_ui_domain_consent_accept(inputs)
	if (locale === "pl") return pl_ui_domain_consent_accept(inputs)
	if (locale === "pt") return pt_ui_domain_consent_accept(inputs)
	if (locale === "ru") return ru_ui_domain_consent_accept(inputs)
	if (locale === "sv") return sv_ui_domain_consent_accept(inputs)
	if (locale === "tr") return tr_ui_domain_consent_accept(inputs)
	if (locale === "zh") return zh_ui_domain_consent_accept(inputs)
	if (locale === "ja") return ja_ui_domain_consent_accept(inputs)
	return en_ui_domain_consent_accept(inputs)
});
