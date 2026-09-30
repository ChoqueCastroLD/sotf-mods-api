/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown> }} Signals_Status_RepublishedInputs */

const en_signals_status_republished = /** @type {(inputs: Signals_Status_RepublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Your mod ${i?.mod} is public again`)
};

const es_signals_status_republished = /** @type {(inputs: Signals_Status_RepublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tu mod ${i?.mod} vuelve a ser público`)
};

const de_signals_status_republished = /** @type {(inputs: Signals_Status_RepublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dein Mod ${i?.mod} ist wieder öffentlich`)
};

const fr_signals_status_republished = /** @type {(inputs: Signals_Status_RepublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Votre mod ${i?.mod} est de nouveau public`)
};

const it_signals_status_republished = /** @type {(inputs: Signals_Status_RepublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La tua mod ${i?.mod} è di nuovo pubblica`)
};

const nl_signals_status_republished = /** @type {(inputs: Signals_Status_RepublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Je mod ${i?.mod} is weer openbaar`)
};

const pl_signals_status_republished = /** @type {(inputs: Signals_Status_RepublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Twój mod ${i?.mod} jest znów publiczny`)
};

const pt_signals_status_republished = /** @type {(inputs: Signals_Status_RepublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Seu mod ${i?.mod} está público de novo`)
};

const ru_signals_status_republished = /** @type {(inputs: Signals_Status_RepublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ваш мод ${i?.mod} снова публичный`)
};

const sv_signals_status_republished = /** @type {(inputs: Signals_Status_RepublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Din modd ${i?.mod} är offentlig igen`)
};

const tr_signals_status_republished = /** @type {(inputs: Signals_Status_RepublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} modun yeniden herkese açık`)
};

const zh_signals_status_republished = /** @type {(inputs: Signals_Status_RepublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`你的模组 ${i?.mod} 已重新公开`)
};

const ja_signals_status_republished = /** @type {(inputs: Signals_Status_RepublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`あなたのMOD ${i?.mod} が再び公開されました`)
};

/**
* | output |
* | --- |
* | "Your mod {mod} is public again" |
*
* @param {Signals_Status_RepublishedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_status_republished = /** @type {((inputs: Signals_Status_RepublishedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Status_RepublishedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_status_republished(inputs)
	if (locale === "de") return de_signals_status_republished(inputs)
	if (locale === "fr") return fr_signals_status_republished(inputs)
	if (locale === "it") return it_signals_status_republished(inputs)
	if (locale === "nl") return nl_signals_status_republished(inputs)
	if (locale === "pl") return pl_signals_status_republished(inputs)
	if (locale === "pt") return pt_signals_status_republished(inputs)
	if (locale === "ru") return ru_signals_status_republished(inputs)
	if (locale === "sv") return sv_signals_status_republished(inputs)
	if (locale === "tr") return tr_signals_status_republished(inputs)
	if (locale === "zh") return zh_signals_status_republished(inputs)
	if (locale === "ja") return ja_signals_status_republished(inputs)
	return en_signals_status_republished(inputs)
});
