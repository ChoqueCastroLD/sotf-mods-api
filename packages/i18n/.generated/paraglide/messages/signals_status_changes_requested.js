/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown> }} Signals_Status_Changes_RequestedInputs */

const en_signals_status_changes_requested = /** @type {(inputs: Signals_Status_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`The moderators asked for changes to ${i?.mod}`)
};

const es_signals_status_changes_requested = /** @type {(inputs: Signals_Status_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Los moderadores piden cambios en ${i?.mod}`)
};

const de_signals_status_changes_requested = /** @type {(inputs: Signals_Status_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Die Moderatoren bitten um Änderungen an ${i?.mod}`)
};

const fr_signals_status_changes_requested = /** @type {(inputs: Signals_Status_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Les modérateurs demandent des modifications sur ${i?.mod}`)
};

const it_signals_status_changes_requested = /** @type {(inputs: Signals_Status_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`I moderatori chiedono modifiche a ${i?.mod}`)
};

const nl_signals_status_changes_requested = /** @type {(inputs: Signals_Status_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`De moderators vragen om wijzigingen aan ${i?.mod}`)
};

const pl_signals_status_changes_requested = /** @type {(inputs: Signals_Status_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Moderatorzy proszą o zmiany w ${i?.mod}`)
};

const pt_signals_status_changes_requested = /** @type {(inputs: Signals_Status_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Os moderadores pediram mudanças em ${i?.mod}`)
};

const ru_signals_status_changes_requested = /** @type {(inputs: Signals_Status_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Модераторы просят внести изменения в ${i?.mod}`)
};

const sv_signals_status_changes_requested = /** @type {(inputs: Signals_Status_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Moderatorerna vill att du ändrar ${i?.mod}`)
};

const tr_signals_status_changes_requested = /** @type {(inputs: Signals_Status_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Moderatörler ${i?.mod} için değişiklik istiyor`)
};

const zh_signals_status_changes_requested = /** @type {(inputs: Signals_Status_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`版主要求你修改 ${i?.mod}`)
};

const ja_signals_status_changes_requested = /** @type {(inputs: Signals_Status_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`モデレーターが ${i?.mod} の修正を求めています`)
};

/**
* | output |
* | --- |
* | "The moderators asked for changes to {mod}" |
*
* @param {Signals_Status_Changes_RequestedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_status_changes_requested = /** @type {((inputs: Signals_Status_Changes_RequestedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Status_Changes_RequestedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_status_changes_requested(inputs)
	if (locale === "de") return de_signals_status_changes_requested(inputs)
	if (locale === "fr") return fr_signals_status_changes_requested(inputs)
	if (locale === "it") return it_signals_status_changes_requested(inputs)
	if (locale === "nl") return nl_signals_status_changes_requested(inputs)
	if (locale === "pl") return pl_signals_status_changes_requested(inputs)
	if (locale === "pt") return pt_signals_status_changes_requested(inputs)
	if (locale === "ru") return ru_signals_status_changes_requested(inputs)
	if (locale === "sv") return sv_signals_status_changes_requested(inputs)
	if (locale === "tr") return tr_signals_status_changes_requested(inputs)
	if (locale === "zh") return zh_signals_status_changes_requested(inputs)
	if (locale === "ja") return ja_signals_status_changes_requested(inputs)
	return en_signals_status_changes_requested(inputs)
});
