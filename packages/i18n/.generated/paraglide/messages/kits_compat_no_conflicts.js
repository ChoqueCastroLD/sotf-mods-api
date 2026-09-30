/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Compat_No_ConflictsInputs */

const en_kits_compat_no_conflicts = /** @type {(inputs: Kits_Compat_No_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No conflicts detected`)
};

const es_kits_compat_no_conflicts = /** @type {(inputs: Kits_Compat_No_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin conflictos detectados`)
};

const de_kits_compat_no_conflicts = /** @type {(inputs: Kits_Compat_No_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Konflikte erkannt`)
};

const fr_kits_compat_no_conflicts = /** @type {(inputs: Kits_Compat_No_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun conflit détecté`)
};

const it_kits_compat_no_conflicts = /** @type {(inputs: Kits_Compat_No_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun conflitto rilevato`)
};

const nl_kits_compat_no_conflicts = /** @type {(inputs: Kits_Compat_No_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen conflicten gevonden`)
};

const pl_kits_compat_no_conflicts = /** @type {(inputs: Kits_Compat_No_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie wykryto konfliktów`)
};

const pt_kits_compat_no_conflicts = /** @type {(inputs: Kits_Compat_No_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum conflito detectado`)
};

const ru_kits_compat_no_conflicts = /** @type {(inputs: Kits_Compat_No_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Конфликтов не найдено`)
};

const sv_kits_compat_no_conflicts = /** @type {(inputs: Kits_Compat_No_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga konflikter hittade`)
};

const tr_kits_compat_no_conflicts = /** @type {(inputs: Kits_Compat_No_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çakışma bulunmadı`)
};

const zh_kits_compat_no_conflicts = /** @type {(inputs: Kits_Compat_No_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未检测到冲突`)
};

const ja_kits_compat_no_conflicts = /** @type {(inputs: Kits_Compat_No_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`競合は検出されていません`)
};

/**
* | output |
* | --- |
* | "No conflicts detected" |
*
* @param {Kits_Compat_No_ConflictsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_compat_no_conflicts = /** @type {((inputs?: Kits_Compat_No_ConflictsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Compat_No_ConflictsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_compat_no_conflicts(inputs)
	if (locale === "de") return de_kits_compat_no_conflicts(inputs)
	if (locale === "fr") return fr_kits_compat_no_conflicts(inputs)
	if (locale === "it") return it_kits_compat_no_conflicts(inputs)
	if (locale === "nl") return nl_kits_compat_no_conflicts(inputs)
	if (locale === "pl") return pl_kits_compat_no_conflicts(inputs)
	if (locale === "pt") return pt_kits_compat_no_conflicts(inputs)
	if (locale === "ru") return ru_kits_compat_no_conflicts(inputs)
	if (locale === "sv") return sv_kits_compat_no_conflicts(inputs)
	if (locale === "tr") return tr_kits_compat_no_conflicts(inputs)
	if (locale === "zh") return zh_kits_compat_no_conflicts(inputs)
	if (locale === "ja") return ja_kits_compat_no_conflicts(inputs)
	return en_kits_compat_no_conflicts(inputs)
});
