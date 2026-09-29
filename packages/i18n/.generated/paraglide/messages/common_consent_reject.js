/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Consent_RejectInputs */

const en_common_consent_reject = /** @type {(inputs: Common_Consent_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reject`)
};

const es_common_consent_reject = /** @type {(inputs: Common_Consent_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechazar`)
};

const de_common_consent_reject = /** @type {(inputs: Common_Consent_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ablehnen`)
};

const fr_common_consent_reject = /** @type {(inputs: Common_Consent_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Refuser`)
};

const it_common_consent_reject = /** @type {(inputs: Common_Consent_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rifiuta`)
};

const nl_common_consent_reject = /** @type {(inputs: Common_Consent_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weigeren`)
};

const pl_common_consent_reject = /** @type {(inputs: Common_Consent_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odrzuć`)
};

const pt_common_consent_reject = /** @type {(inputs: Common_Consent_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recusar`)
};

const ru_common_consent_reject = /** @type {(inputs: Common_Consent_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отклонить`)
};

const sv_common_consent_reject = /** @type {(inputs: Common_Consent_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avvisa`)
};

const tr_common_consent_reject = /** @type {(inputs: Common_Consent_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reddet`)
};

const zh_common_consent_reject = /** @type {(inputs: Common_Consent_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`拒绝`)
};

const ja_common_consent_reject = /** @type {(inputs: Common_Consent_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`拒否する`)
};

/**
* | output |
* | --- |
* | "Reject" |
*
* @param {Common_Consent_RejectInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_consent_reject = /** @type {((inputs?: Common_Consent_RejectInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Consent_RejectInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_consent_reject(inputs)
	if (locale === "de") return de_common_consent_reject(inputs)
	if (locale === "fr") return fr_common_consent_reject(inputs)
	if (locale === "it") return it_common_consent_reject(inputs)
	if (locale === "nl") return nl_common_consent_reject(inputs)
	if (locale === "pl") return pl_common_consent_reject(inputs)
	if (locale === "pt") return pt_common_consent_reject(inputs)
	if (locale === "ru") return ru_common_consent_reject(inputs)
	if (locale === "sv") return sv_common_consent_reject(inputs)
	if (locale === "tr") return tr_common_consent_reject(inputs)
	if (locale === "zh") return zh_common_consent_reject(inputs)
	if (locale === "ja") return ja_common_consent_reject(inputs)
	return en_common_consent_reject(inputs)
});
