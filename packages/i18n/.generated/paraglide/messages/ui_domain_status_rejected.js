/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Status_RejectedInputs */

const en_ui_domain_status_rejected = /** @type {(inputs: Ui_Domain_Status_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rejected`)
};

const es_ui_domain_status_rejected = /** @type {(inputs: Ui_Domain_Status_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechazado`)
};

const de_ui_domain_status_rejected = /** @type {(inputs: Ui_Domain_Status_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abgelehnt`)
};

const fr_ui_domain_status_rejected = /** @type {(inputs: Ui_Domain_Status_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Refusé`)
};

const it_ui_domain_status_rejected = /** @type {(inputs: Ui_Domain_Status_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rifiutato`)
};

const nl_ui_domain_status_rejected = /** @type {(inputs: Ui_Domain_Status_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afgewezen`)
};

const pl_ui_domain_status_rejected = /** @type {(inputs: Ui_Domain_Status_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odrzucony`)
};

const pt_ui_domain_status_rejected = /** @type {(inputs: Ui_Domain_Status_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rejeitado`)
};

const ru_ui_domain_status_rejected = /** @type {(inputs: Ui_Domain_Status_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отклонён`)
};

const sv_ui_domain_status_rejected = /** @type {(inputs: Ui_Domain_Status_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avvisad`)
};

const tr_ui_domain_status_rejected = /** @type {(inputs: Ui_Domain_Status_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reddedildi`)
};

const zh_ui_domain_status_rejected = /** @type {(inputs: Ui_Domain_Status_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已拒绝`)
};

const ja_ui_domain_status_rejected = /** @type {(inputs: Ui_Domain_Status_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`却下`)
};

/**
* | output |
* | --- |
* | "Rejected" |
*
* @param {Ui_Domain_Status_RejectedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_status_rejected = /** @type {((inputs?: Ui_Domain_Status_RejectedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Status_RejectedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_status_rejected(inputs)
	if (locale === "de") return de_ui_domain_status_rejected(inputs)
	if (locale === "fr") return fr_ui_domain_status_rejected(inputs)
	if (locale === "it") return it_ui_domain_status_rejected(inputs)
	if (locale === "nl") return nl_ui_domain_status_rejected(inputs)
	if (locale === "pl") return pl_ui_domain_status_rejected(inputs)
	if (locale === "pt") return pt_ui_domain_status_rejected(inputs)
	if (locale === "ru") return ru_ui_domain_status_rejected(inputs)
	if (locale === "sv") return sv_ui_domain_status_rejected(inputs)
	if (locale === "tr") return tr_ui_domain_status_rejected(inputs)
	if (locale === "zh") return zh_ui_domain_status_rejected(inputs)
	if (locale === "ja") return ja_ui_domain_status_rejected(inputs)
	return en_ui_domain_status_rejected(inputs)
});
