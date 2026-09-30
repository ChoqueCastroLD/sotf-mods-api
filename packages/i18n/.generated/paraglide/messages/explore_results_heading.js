/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Results_HeadingInputs */

const en_explore_results_heading = /** @type {(inputs: Explore_Results_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Results`)
};

const es_explore_results_heading = /** @type {(inputs: Explore_Results_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resultados`)
};

const de_explore_results_heading = /** @type {(inputs: Explore_Results_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ergebnisse`)
};

const fr_explore_results_heading = /** @type {(inputs: Explore_Results_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Résultats`)
};

const it_explore_results_heading = /** @type {(inputs: Explore_Results_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risultati`)
};

const nl_explore_results_heading = /** @type {(inputs: Explore_Results_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resultaten`)
};

const pl_explore_results_heading = /** @type {(inputs: Explore_Results_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyniki`)
};

const pt_explore_results_heading = /** @type {(inputs: Explore_Results_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resultados`)
};

const ru_explore_results_heading = /** @type {(inputs: Explore_Results_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Результаты`)
};

const sv_explore_results_heading = /** @type {(inputs: Explore_Results_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resultat`)
};

const tr_explore_results_heading = /** @type {(inputs: Explore_Results_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sonuçlar`)
};

const zh_explore_results_heading = /** @type {(inputs: Explore_Results_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`结果`)
};

const ja_explore_results_heading = /** @type {(inputs: Explore_Results_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`結果`)
};

/**
* | output |
* | --- |
* | "Results" |
*
* @param {Explore_Results_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_results_heading = /** @type {((inputs?: Explore_Results_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Results_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_results_heading(inputs)
	if (locale === "de") return de_explore_results_heading(inputs)
	if (locale === "fr") return fr_explore_results_heading(inputs)
	if (locale === "it") return it_explore_results_heading(inputs)
	if (locale === "nl") return nl_explore_results_heading(inputs)
	if (locale === "pl") return pl_explore_results_heading(inputs)
	if (locale === "pt") return pt_explore_results_heading(inputs)
	if (locale === "ru") return ru_explore_results_heading(inputs)
	if (locale === "sv") return sv_explore_results_heading(inputs)
	if (locale === "tr") return tr_explore_results_heading(inputs)
	if (locale === "zh") return zh_explore_results_heading(inputs)
	if (locale === "ja") return ja_explore_results_heading(inputs)
	return en_explore_results_heading(inputs)
});
