/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown> }} Signals_Status_RejectedInputs */

const en_signals_status_rejected = /** @type {(inputs: Signals_Status_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Your mod ${i?.mod} was rejected`)
};

const es_signals_status_rejected = /** @type {(inputs: Signals_Status_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tu mod ${i?.mod} ha sido rechazado`)
};

const de_signals_status_rejected = /** @type {(inputs: Signals_Status_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dein Mod ${i?.mod} wurde abgelehnt`)
};

const fr_signals_status_rejected = /** @type {(inputs: Signals_Status_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Votre mod ${i?.mod} a été refusé`)
};

const it_signals_status_rejected = /** @type {(inputs: Signals_Status_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La tua mod ${i?.mod} è stata rifiutata`)
};

const nl_signals_status_rejected = /** @type {(inputs: Signals_Status_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Je mod ${i?.mod} is afgewezen`)
};

const pl_signals_status_rejected = /** @type {(inputs: Signals_Status_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Twój mod ${i?.mod} został odrzucony`)
};

const pt_signals_status_rejected = /** @type {(inputs: Signals_Status_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Seu mod ${i?.mod} foi rejeitado`)
};

const ru_signals_status_rejected = /** @type {(inputs: Signals_Status_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ваш мод ${i?.mod} отклонён`)
};

const sv_signals_status_rejected = /** @type {(inputs: Signals_Status_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Din modd ${i?.mod} har avvisats`)
};

const tr_signals_status_rejected = /** @type {(inputs: Signals_Status_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} modun reddedildi`)
};

const zh_signals_status_rejected = /** @type {(inputs: Signals_Status_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`你的模组 ${i?.mod} 未通过审核`)
};

const ja_signals_status_rejected = /** @type {(inputs: Signals_Status_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`あなたのMOD ${i?.mod} は却下されました`)
};

/**
* | output |
* | --- |
* | "Your mod {mod} was rejected" |
*
* @param {Signals_Status_RejectedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_status_rejected = /** @type {((inputs: Signals_Status_RejectedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Status_RejectedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_status_rejected(inputs)
	if (locale === "de") return de_signals_status_rejected(inputs)
	if (locale === "fr") return fr_signals_status_rejected(inputs)
	if (locale === "it") return it_signals_status_rejected(inputs)
	if (locale === "nl") return nl_signals_status_rejected(inputs)
	if (locale === "pl") return pl_signals_status_rejected(inputs)
	if (locale === "pt") return pt_signals_status_rejected(inputs)
	if (locale === "ru") return ru_signals_status_rejected(inputs)
	if (locale === "sv") return sv_signals_status_rejected(inputs)
	if (locale === "tr") return tr_signals_status_rejected(inputs)
	if (locale === "zh") return zh_signals_status_rejected(inputs)
	if (locale === "ja") return ja_signals_status_rejected(inputs)
	return en_signals_status_rejected(inputs)
});
