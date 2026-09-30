/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown> }} Signals_Status_ApprovedInputs */

const en_signals_status_approved = /** @type {(inputs: Signals_Status_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Your mod ${i?.mod} was approved and is live`)
};

const es_signals_status_approved = /** @type {(inputs: Signals_Status_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tu mod ${i?.mod} ha sido aprobado y ya está publicado`)
};

const de_signals_status_approved = /** @type {(inputs: Signals_Status_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dein Mod ${i?.mod} wurde freigegeben und ist online`)
};

const fr_signals_status_approved = /** @type {(inputs: Signals_Status_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Votre mod ${i?.mod} a été approuvé et est en ligne`)
};

const it_signals_status_approved = /** @type {(inputs: Signals_Status_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La tua mod ${i?.mod} è stata approvata ed è online`)
};

const nl_signals_status_approved = /** @type {(inputs: Signals_Status_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Je mod ${i?.mod} is goedgekeurd en staat online`)
};

const pl_signals_status_approved = /** @type {(inputs: Signals_Status_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Twój mod ${i?.mod} został zatwierdzony i jest opublikowany`)
};

const pt_signals_status_approved = /** @type {(inputs: Signals_Status_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Seu mod ${i?.mod} foi aprovado e está no ar`)
};

const ru_signals_status_approved = /** @type {(inputs: Signals_Status_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ваш мод ${i?.mod} одобрен и опубликован`)
};

const sv_signals_status_approved = /** @type {(inputs: Signals_Status_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Din modd ${i?.mod} har godkänts och är publicerad`)
};

const tr_signals_status_approved = /** @type {(inputs: Signals_Status_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} modun onaylandı ve yayında`)
};

const zh_signals_status_approved = /** @type {(inputs: Signals_Status_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`你的模组 ${i?.mod} 已通过审核并上线`)
};

const ja_signals_status_approved = /** @type {(inputs: Signals_Status_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`あなたのMOD ${i?.mod} が承認され、公開されました`)
};

/**
* | output |
* | --- |
* | "Your mod {mod} was approved and is live" |
*
* @param {Signals_Status_ApprovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_status_approved = /** @type {((inputs: Signals_Status_ApprovedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Status_ApprovedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_status_approved(inputs)
	if (locale === "de") return de_signals_status_approved(inputs)
	if (locale === "fr") return fr_signals_status_approved(inputs)
	if (locale === "it") return it_signals_status_approved(inputs)
	if (locale === "nl") return nl_signals_status_approved(inputs)
	if (locale === "pl") return pl_signals_status_approved(inputs)
	if (locale === "pt") return pt_signals_status_approved(inputs)
	if (locale === "ru") return ru_signals_status_approved(inputs)
	if (locale === "sv") return sv_signals_status_approved(inputs)
	if (locale === "tr") return tr_signals_status_approved(inputs)
	if (locale === "zh") return zh_signals_status_approved(inputs)
	if (locale === "ja") return ja_signals_status_approved(inputs)
	return en_signals_status_approved(inputs)
});
