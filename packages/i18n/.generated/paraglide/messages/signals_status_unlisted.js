/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown> }} Signals_Status_UnlistedInputs */

const en_signals_status_unlisted = /** @type {(inputs: Signals_Status_UnlistedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Your mod ${i?.mod} was unlisted`)
};

const es_signals_status_unlisted = /** @type {(inputs: Signals_Status_UnlistedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tu mod ${i?.mod} ya no aparece en los listados`)
};

const de_signals_status_unlisted = /** @type {(inputs: Signals_Status_UnlistedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dein Mod ${i?.mod} wurde aus den Listen genommen`)
};

const fr_signals_status_unlisted = /** @type {(inputs: Signals_Status_UnlistedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Votre mod ${i?.mod} a été retiré des listes`)
};

const it_signals_status_unlisted = /** @type {(inputs: Signals_Status_UnlistedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La tua mod ${i?.mod} è stata tolta dagli elenchi`)
};

const nl_signals_status_unlisted = /** @type {(inputs: Signals_Status_UnlistedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Je mod ${i?.mod} staat niet meer in de lijsten`)
};

const pl_signals_status_unlisted = /** @type {(inputs: Signals_Status_UnlistedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Twój mod ${i?.mod} został usunięty z list`)
};

const pt_signals_status_unlisted = /** @type {(inputs: Signals_Status_UnlistedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Seu mod ${i?.mod} saiu das listas`)
};

const ru_signals_status_unlisted = /** @type {(inputs: Signals_Status_UnlistedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ваш мод ${i?.mod} убран из списков`)
};

const sv_signals_status_unlisted = /** @type {(inputs: Signals_Status_UnlistedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Din modd ${i?.mod} har tagits bort från listorna`)
};

const tr_signals_status_unlisted = /** @type {(inputs: Signals_Status_UnlistedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} modun listelerden kaldırıldı`)
};

const zh_signals_status_unlisted = /** @type {(inputs: Signals_Status_UnlistedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`你的模组 ${i?.mod} 已从列表中移除`)
};

const ja_signals_status_unlisted = /** @type {(inputs: Signals_Status_UnlistedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`あなたのMOD ${i?.mod} は一覧から外されました`)
};

/**
* | output |
* | --- |
* | "Your mod {mod} was unlisted" |
*
* @param {Signals_Status_UnlistedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_status_unlisted = /** @type {((inputs: Signals_Status_UnlistedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Status_UnlistedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_status_unlisted(inputs)
	if (locale === "de") return de_signals_status_unlisted(inputs)
	if (locale === "fr") return fr_signals_status_unlisted(inputs)
	if (locale === "it") return it_signals_status_unlisted(inputs)
	if (locale === "nl") return nl_signals_status_unlisted(inputs)
	if (locale === "pl") return pl_signals_status_unlisted(inputs)
	if (locale === "pt") return pt_signals_status_unlisted(inputs)
	if (locale === "ru") return ru_signals_status_unlisted(inputs)
	if (locale === "sv") return sv_signals_status_unlisted(inputs)
	if (locale === "tr") return tr_signals_status_unlisted(inputs)
	if (locale === "zh") return zh_signals_status_unlisted(inputs)
	if (locale === "ja") return ja_signals_status_unlisted(inputs)
	return en_signals_status_unlisted(inputs)
});
