/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Consent_AcceptInputs */

const en_common_consent_accept = /** @type {(inputs: Common_Consent_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accept`)
};

const es_common_consent_accept = /** @type {(inputs: Common_Consent_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aceptar`)
};

const de_common_consent_accept = /** @type {(inputs: Common_Consent_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Akzeptieren`)
};

const fr_common_consent_accept = /** @type {(inputs: Common_Consent_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accepter`)
};

const it_common_consent_accept = /** @type {(inputs: Common_Consent_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accetta`)
};

const nl_common_consent_accept = /** @type {(inputs: Common_Consent_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accepteren`)
};

const pl_common_consent_accept = /** @type {(inputs: Common_Consent_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Akceptuj`)
};

const pt_common_consent_accept = /** @type {(inputs: Common_Consent_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aceitar`)
};

const ru_common_consent_accept = /** @type {(inputs: Common_Consent_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Принять`)
};

const sv_common_consent_accept = /** @type {(inputs: Common_Consent_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Godkänn`)
};

const tr_common_consent_accept = /** @type {(inputs: Common_Consent_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kabul et`)
};

const zh_common_consent_accept = /** @type {(inputs: Common_Consent_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`接受`)
};

const ja_common_consent_accept = /** @type {(inputs: Common_Consent_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`同意する`)
};

/**
* | output |
* | --- |
* | "Accept" |
*
* @param {Common_Consent_AcceptInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_consent_accept = /** @type {((inputs?: Common_Consent_AcceptInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Consent_AcceptInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_consent_accept(inputs)
	if (locale === "de") return de_common_consent_accept(inputs)
	if (locale === "fr") return fr_common_consent_accept(inputs)
	if (locale === "it") return it_common_consent_accept(inputs)
	if (locale === "nl") return nl_common_consent_accept(inputs)
	if (locale === "pl") return pl_common_consent_accept(inputs)
	if (locale === "pt") return pt_common_consent_accept(inputs)
	if (locale === "ru") return ru_common_consent_accept(inputs)
	if (locale === "sv") return sv_common_consent_accept(inputs)
	if (locale === "tr") return tr_common_consent_accept(inputs)
	if (locale === "zh") return zh_common_consent_accept(inputs)
	if (locale === "ja") return ja_common_consent_accept(inputs)
	return en_common_consent_accept(inputs)
});
