/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Jams_Editor_Results_AtInputs */

const en_jams_editor_results_at = /** @type {(inputs: Jams_Editor_Results_AtInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Last computed ${i?.date}.`)
};

const es_jams_editor_results_at = /** @type {(inputs: Jams_Editor_Results_AtInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Último cálculo: ${i?.date}.`)
};

const de_jams_editor_results_at = /** @type {(inputs: Jams_Editor_Results_AtInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zuletzt berechnet: ${i?.date}.`)
};

const fr_jams_editor_results_at = /** @type {(inputs: Jams_Editor_Results_AtInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dernier calcul : ${i?.date}.`)
};

const it_jams_editor_results_at = /** @type {(inputs: Jams_Editor_Results_AtInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ultimo calcolo: ${i?.date}.`)
};

const nl_jams_editor_results_at = /** @type {(inputs: Jams_Editor_Results_AtInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Laatst berekend: ${i?.date}.`)
};

const pl_jams_editor_results_at = /** @type {(inputs: Jams_Editor_Results_AtInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ostatnio obliczono: ${i?.date}.`)
};

const pt_jams_editor_results_at = /** @type {(inputs: Jams_Editor_Results_AtInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Último cálculo: ${i?.date}.`)
};

const ru_jams_editor_results_at = /** @type {(inputs: Jams_Editor_Results_AtInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Последний подсчёт: ${i?.date}.`)
};

const sv_jams_editor_results_at = /** @type {(inputs: Jams_Editor_Results_AtInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Senast beräknat: ${i?.date}.`)
};

const tr_jams_editor_results_at = /** @type {(inputs: Jams_Editor_Results_AtInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Son hesaplama: ${i?.date}.`)
};

const zh_jams_editor_results_at = /** @type {(inputs: Jams_Editor_Results_AtInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`上次计算：${i?.date}。`)
};

const ja_jams_editor_results_at = /** @type {(inputs: Jams_Editor_Results_AtInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最終集計：${i?.date}。`)
};

/**
* | output |
* | --- |
* | "Last computed {date}." |
*
* @param {Jams_Editor_Results_AtInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_results_at = /** @type {((inputs: Jams_Editor_Results_AtInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Results_AtInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_results_at(inputs)
	if (locale === "de") return de_jams_editor_results_at(inputs)
	if (locale === "fr") return fr_jams_editor_results_at(inputs)
	if (locale === "it") return it_jams_editor_results_at(inputs)
	if (locale === "nl") return nl_jams_editor_results_at(inputs)
	if (locale === "pl") return pl_jams_editor_results_at(inputs)
	if (locale === "pt") return pt_jams_editor_results_at(inputs)
	if (locale === "ru") return ru_jams_editor_results_at(inputs)
	if (locale === "sv") return sv_jams_editor_results_at(inputs)
	if (locale === "tr") return tr_jams_editor_results_at(inputs)
	if (locale === "zh") return zh_jams_editor_results_at(inputs)
	if (locale === "ja") return ja_jams_editor_results_at(inputs)
	return en_jams_editor_results_at(inputs)
});
