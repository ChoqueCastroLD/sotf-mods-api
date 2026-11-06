/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown> }} Signals_Status_UnapprovedInputs */

const en_signals_status_unapproved = /** @type {(inputs: Signals_Status_UnapprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Your mod ${i?.mod} is pending approval again`)
};

const es_signals_status_unapproved = /** @type {(inputs: Signals_Status_UnapprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tu mod ${i?.mod} vuelve a estar pendiente de aprobación`)
};

const de_signals_status_unapproved = /** @type {(inputs: Signals_Status_UnapprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Deine Mod ${i?.mod} wartet wieder auf Freigabe`)
};

const fr_signals_status_unapproved = /** @type {(inputs: Signals_Status_UnapprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Votre mod ${i?.mod} est de nouveau en attente d’approbation`)
};

const it_signals_status_unapproved = /** @type {(inputs: Signals_Status_UnapprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La tua mod ${i?.mod} è di nuovo in attesa di approvazione`)
};

const nl_signals_status_unapproved = /** @type {(inputs: Signals_Status_UnapprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Je mod ${i?.mod} wacht weer op goedkeuring`)
};

const pl_signals_status_unapproved = /** @type {(inputs: Signals_Status_UnapprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Twój mod ${i?.mod} znów czeka na zatwierdzenie`)
};

const pt_signals_status_unapproved = /** @type {(inputs: Signals_Status_UnapprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Seu mod ${i?.mod} voltou a aguardar aprovação`)
};

const ru_signals_status_unapproved = /** @type {(inputs: Signals_Status_UnapprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ваш мод ${i?.mod} снова ожидает одобрения`)
};

const sv_signals_status_unapproved = /** @type {(inputs: Signals_Status_UnapprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Din modd ${i?.mod} väntar på godkännande igen`)
};

const tr_signals_status_unapproved = /** @type {(inputs: Signals_Status_UnapprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} modun yeniden onay bekliyor`)
};

const zh_signals_status_unapproved = /** @type {(inputs: Signals_Status_UnapprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`你的模组 ${i?.mod} 已重新变为待批准`)
};

const ja_signals_status_unapproved = /** @type {(inputs: Signals_Status_UnapprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`あなたのMOD ${i?.mod} は再び承認待ちになりました`)
};

/**
* | output |
* | --- |
* | "Your mod {mod} is pending approval again" |
*
* @param {Signals_Status_UnapprovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_status_unapproved = /** @type {((inputs: Signals_Status_UnapprovedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Status_UnapprovedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_status_unapproved(inputs)
	if (locale === "de") return de_signals_status_unapproved(inputs)
	if (locale === "fr") return fr_signals_status_unapproved(inputs)
	if (locale === "it") return it_signals_status_unapproved(inputs)
	if (locale === "nl") return nl_signals_status_unapproved(inputs)
	if (locale === "pl") return pl_signals_status_unapproved(inputs)
	if (locale === "pt") return pt_signals_status_unapproved(inputs)
	if (locale === "ru") return ru_signals_status_unapproved(inputs)
	if (locale === "sv") return sv_signals_status_unapproved(inputs)
	if (locale === "tr") return tr_signals_status_unapproved(inputs)
	if (locale === "zh") return zh_signals_status_unapproved(inputs)
	if (locale === "ja") return ja_signals_status_unapproved(inputs)
	return en_signals_status_unapproved(inputs)
});
