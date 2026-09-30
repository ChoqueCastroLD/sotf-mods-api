/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Consent_RejectInputs */

const en_ui_domain_consent_reject = /** @type {(inputs: Ui_Domain_Consent_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reject`)
};

const es_ui_domain_consent_reject = /** @type {(inputs: Ui_Domain_Consent_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechazar`)
};

const de_ui_domain_consent_reject = /** @type {(inputs: Ui_Domain_Consent_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ablehnen`)
};

const fr_ui_domain_consent_reject = /** @type {(inputs: Ui_Domain_Consent_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Refuser`)
};

const it_ui_domain_consent_reject = /** @type {(inputs: Ui_Domain_Consent_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rifiuta`)
};

const nl_ui_domain_consent_reject = /** @type {(inputs: Ui_Domain_Consent_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weigeren`)
};

const pl_ui_domain_consent_reject = /** @type {(inputs: Ui_Domain_Consent_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odrzuć`)
};

const pt_ui_domain_consent_reject = /** @type {(inputs: Ui_Domain_Consent_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recusar`)
};

const ru_ui_domain_consent_reject = /** @type {(inputs: Ui_Domain_Consent_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отклонить`)
};

const sv_ui_domain_consent_reject = /** @type {(inputs: Ui_Domain_Consent_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avvisa`)
};

const tr_ui_domain_consent_reject = /** @type {(inputs: Ui_Domain_Consent_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reddet`)
};

const zh_ui_domain_consent_reject = /** @type {(inputs: Ui_Domain_Consent_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`拒绝`)
};

const ja_ui_domain_consent_reject = /** @type {(inputs: Ui_Domain_Consent_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`拒否する`)
};

/**
* | output |
* | --- |
* | "Reject" |
*
* @param {Ui_Domain_Consent_RejectInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_consent_reject = /** @type {((inputs?: Ui_Domain_Consent_RejectInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Consent_RejectInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_consent_reject(inputs)
	if (locale === "de") return de_ui_domain_consent_reject(inputs)
	if (locale === "fr") return fr_ui_domain_consent_reject(inputs)
	if (locale === "it") return it_ui_domain_consent_reject(inputs)
	if (locale === "nl") return nl_ui_domain_consent_reject(inputs)
	if (locale === "pl") return pl_ui_domain_consent_reject(inputs)
	if (locale === "pt") return pt_ui_domain_consent_reject(inputs)
	if (locale === "ru") return ru_ui_domain_consent_reject(inputs)
	if (locale === "sv") return sv_ui_domain_consent_reject(inputs)
	if (locale === "tr") return tr_ui_domain_consent_reject(inputs)
	if (locale === "zh") return zh_ui_domain_consent_reject(inputs)
	if (locale === "ja") return ja_ui_domain_consent_reject(inputs)
	return en_ui_domain_consent_reject(inputs)
});
