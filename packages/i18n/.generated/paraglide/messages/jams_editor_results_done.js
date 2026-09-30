/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Results_DoneInputs */

const en_jams_editor_results_done = /** @type {(inputs: Jams_Editor_Results_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Results computed.`)
};

const es_jams_editor_results_done = /** @type {(inputs: Jams_Editor_Results_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resultados calculados.`)
};

const de_jams_editor_results_done = /** @type {(inputs: Jams_Editor_Results_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ergebnisse berechnet.`)
};

const fr_jams_editor_results_done = /** @type {(inputs: Jams_Editor_Results_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Résultats calculés.`)
};

const it_jams_editor_results_done = /** @type {(inputs: Jams_Editor_Results_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risultati calcolati.`)
};

const nl_jams_editor_results_done = /** @type {(inputs: Jams_Editor_Results_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resultaten berekend.`)
};

const pl_jams_editor_results_done = /** @type {(inputs: Jams_Editor_Results_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyniki obliczone.`)
};

const pt_jams_editor_results_done = /** @type {(inputs: Jams_Editor_Results_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resultados calculados.`)
};

const ru_jams_editor_results_done = /** @type {(inputs: Jams_Editor_Results_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Результаты подсчитаны.`)
};

const sv_jams_editor_results_done = /** @type {(inputs: Jams_Editor_Results_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resultat beräknade.`)
};

const tr_jams_editor_results_done = /** @type {(inputs: Jams_Editor_Results_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sonuçlar hesaplandı.`)
};

const zh_jams_editor_results_done = /** @type {(inputs: Jams_Editor_Results_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`结果已计算。`)
};

const ja_jams_editor_results_done = /** @type {(inputs: Jams_Editor_Results_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`結果を集計しました。`)
};

/**
* | output |
* | --- |
* | "Results computed." |
*
* @param {Jams_Editor_Results_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_results_done = /** @type {((inputs?: Jams_Editor_Results_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Results_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_results_done(inputs)
	if (locale === "de") return de_jams_editor_results_done(inputs)
	if (locale === "fr") return fr_jams_editor_results_done(inputs)
	if (locale === "it") return it_jams_editor_results_done(inputs)
	if (locale === "nl") return nl_jams_editor_results_done(inputs)
	if (locale === "pl") return pl_jams_editor_results_done(inputs)
	if (locale === "pt") return pt_jams_editor_results_done(inputs)
	if (locale === "ru") return ru_jams_editor_results_done(inputs)
	if (locale === "sv") return sv_jams_editor_results_done(inputs)
	if (locale === "tr") return tr_jams_editor_results_done(inputs)
	if (locale === "zh") return zh_jams_editor_results_done(inputs)
	if (locale === "ja") return ja_jams_editor_results_done(inputs)
	return en_jams_editor_results_done(inputs)
});
