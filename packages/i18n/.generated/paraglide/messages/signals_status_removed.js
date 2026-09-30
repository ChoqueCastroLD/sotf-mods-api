/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown> }} Signals_Status_RemovedInputs */

const en_signals_status_removed = /** @type {(inputs: Signals_Status_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Your mod ${i?.mod} was removed`)
};

const es_signals_status_removed = /** @type {(inputs: Signals_Status_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tu mod ${i?.mod} ha sido retirado`)
};

const de_signals_status_removed = /** @type {(inputs: Signals_Status_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dein Mod ${i?.mod} wurde entfernt`)
};

const fr_signals_status_removed = /** @type {(inputs: Signals_Status_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Votre mod ${i?.mod} a été supprimé`)
};

const it_signals_status_removed = /** @type {(inputs: Signals_Status_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La tua mod ${i?.mod} è stata rimossa`)
};

const nl_signals_status_removed = /** @type {(inputs: Signals_Status_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Je mod ${i?.mod} is verwijderd`)
};

const pl_signals_status_removed = /** @type {(inputs: Signals_Status_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Twój mod ${i?.mod} został usunięty`)
};

const pt_signals_status_removed = /** @type {(inputs: Signals_Status_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Seu mod ${i?.mod} foi removido`)
};

const ru_signals_status_removed = /** @type {(inputs: Signals_Status_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ваш мод ${i?.mod} удалён`)
};

const sv_signals_status_removed = /** @type {(inputs: Signals_Status_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Din modd ${i?.mod} har tagits bort`)
};

const tr_signals_status_removed = /** @type {(inputs: Signals_Status_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} modun kaldırıldı`)
};

const zh_signals_status_removed = /** @type {(inputs: Signals_Status_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`你的模组 ${i?.mod} 已被删除`)
};

const ja_signals_status_removed = /** @type {(inputs: Signals_Status_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`あなたのMOD ${i?.mod} は削除されました`)
};

/**
* | output |
* | --- |
* | "Your mod {mod} was removed" |
*
* @param {Signals_Status_RemovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_status_removed = /** @type {((inputs: Signals_Status_RemovedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Status_RemovedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_status_removed(inputs)
	if (locale === "de") return de_signals_status_removed(inputs)
	if (locale === "fr") return fr_signals_status_removed(inputs)
	if (locale === "it") return it_signals_status_removed(inputs)
	if (locale === "nl") return nl_signals_status_removed(inputs)
	if (locale === "pl") return pl_signals_status_removed(inputs)
	if (locale === "pt") return pt_signals_status_removed(inputs)
	if (locale === "ru") return ru_signals_status_removed(inputs)
	if (locale === "sv") return sv_signals_status_removed(inputs)
	if (locale === "tr") return tr_signals_status_removed(inputs)
	if (locale === "zh") return zh_signals_status_removed(inputs)
	if (locale === "ja") return ja_signals_status_removed(inputs)
	return en_signals_status_removed(inputs)
});
