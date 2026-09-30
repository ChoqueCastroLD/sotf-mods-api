/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Results_FailedInputs */

const en_jams_editor_results_failed = /** @type {(inputs: Jams_Editor_Results_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't compute the results`)
};

const es_jams_editor_results_failed = /** @type {(inputs: Jams_Editor_Results_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudieron calcular los resultados`)
};

const de_jams_editor_results_failed = /** @type {(inputs: Jams_Editor_Results_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ergebnisse konnten nicht berechnet werden`)
};

const fr_jams_editor_results_failed = /** @type {(inputs: Jams_Editor_Results_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de calculer les résultats`)
};

const it_jams_editor_results_failed = /** @type {(inputs: Jams_Editor_Results_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile calcolare i risultati`)
};

const nl_jams_editor_results_failed = /** @type {(inputs: Jams_Editor_Results_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De resultaten konden niet worden berekend`)
};

const pl_jams_editor_results_failed = /** @type {(inputs: Jams_Editor_Results_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się obliczyć wyników`)
};

const pt_jams_editor_results_failed = /** @type {(inputs: Jams_Editor_Results_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível calcular os resultados`)
};

const ru_jams_editor_results_failed = /** @type {(inputs: Jams_Editor_Results_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось подсчитать результаты`)
};

const sv_jams_editor_results_failed = /** @type {(inputs: Jams_Editor_Results_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunde inte beräkna resultaten`)
};

const tr_jams_editor_results_failed = /** @type {(inputs: Jams_Editor_Results_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sonuçlar hesaplanamadı`)
};

const zh_jams_editor_results_failed = /** @type {(inputs: Jams_Editor_Results_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法计算结果`)
};

const ja_jams_editor_results_failed = /** @type {(inputs: Jams_Editor_Results_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`結果を集計できませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn't compute the results" |
*
* @param {Jams_Editor_Results_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_results_failed = /** @type {((inputs?: Jams_Editor_Results_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Results_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_results_failed(inputs)
	if (locale === "de") return de_jams_editor_results_failed(inputs)
	if (locale === "fr") return fr_jams_editor_results_failed(inputs)
	if (locale === "it") return it_jams_editor_results_failed(inputs)
	if (locale === "nl") return nl_jams_editor_results_failed(inputs)
	if (locale === "pl") return pl_jams_editor_results_failed(inputs)
	if (locale === "pt") return pt_jams_editor_results_failed(inputs)
	if (locale === "ru") return ru_jams_editor_results_failed(inputs)
	if (locale === "sv") return sv_jams_editor_results_failed(inputs)
	if (locale === "tr") return tr_jams_editor_results_failed(inputs)
	if (locale === "zh") return zh_jams_editor_results_failed(inputs)
	if (locale === "ja") return ja_jams_editor_results_failed(inputs)
	return en_jams_editor_results_failed(inputs)
});
