/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Results_RecomputeInputs */

const en_jams_editor_results_recompute = /** @type {(inputs: Jams_Editor_Results_RecomputeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recompute results`)
};

const es_jams_editor_results_recompute = /** @type {(inputs: Jams_Editor_Results_RecomputeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recalcular resultados`)
};

const de_jams_editor_results_recompute = /** @type {(inputs: Jams_Editor_Results_RecomputeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ergebnisse neu berechnen`)
};

const fr_jams_editor_results_recompute = /** @type {(inputs: Jams_Editor_Results_RecomputeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recalculer les résultats`)
};

const it_jams_editor_results_recompute = /** @type {(inputs: Jams_Editor_Results_RecomputeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ricalcola i risultati`)
};

const nl_jams_editor_results_recompute = /** @type {(inputs: Jams_Editor_Results_RecomputeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resultaten herberekenen`)
};

const pl_jams_editor_results_recompute = /** @type {(inputs: Jams_Editor_Results_RecomputeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przelicz wyniki ponownie`)
};

const pt_jams_editor_results_recompute = /** @type {(inputs: Jams_Editor_Results_RecomputeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recalcular resultados`)
};

const ru_jams_editor_results_recompute = /** @type {(inputs: Jams_Editor_Results_RecomputeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пересчитать результаты`)
};

const sv_jams_editor_results_recompute = /** @type {(inputs: Jams_Editor_Results_RecomputeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beräkna om resultat`)
};

const tr_jams_editor_results_recompute = /** @type {(inputs: Jams_Editor_Results_RecomputeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sonuçları yeniden hesapla`)
};

const zh_jams_editor_results_recompute = /** @type {(inputs: Jams_Editor_Results_RecomputeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重新计算结果`)
};

const ja_jams_editor_results_recompute = /** @type {(inputs: Jams_Editor_Results_RecomputeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`結果を再集計`)
};

/**
* | output |
* | --- |
* | "Recompute results" |
*
* @param {Jams_Editor_Results_RecomputeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_results_recompute = /** @type {((inputs?: Jams_Editor_Results_RecomputeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Results_RecomputeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_results_recompute(inputs)
	if (locale === "de") return de_jams_editor_results_recompute(inputs)
	if (locale === "fr") return fr_jams_editor_results_recompute(inputs)
	if (locale === "it") return it_jams_editor_results_recompute(inputs)
	if (locale === "nl") return nl_jams_editor_results_recompute(inputs)
	if (locale === "pl") return pl_jams_editor_results_recompute(inputs)
	if (locale === "pt") return pt_jams_editor_results_recompute(inputs)
	if (locale === "ru") return ru_jams_editor_results_recompute(inputs)
	if (locale === "sv") return sv_jams_editor_results_recompute(inputs)
	if (locale === "tr") return tr_jams_editor_results_recompute(inputs)
	if (locale === "zh") return zh_jams_editor_results_recompute(inputs)
	if (locale === "ja") return ja_jams_editor_results_recompute(inputs)
	return en_jams_editor_results_recompute(inputs)
});
