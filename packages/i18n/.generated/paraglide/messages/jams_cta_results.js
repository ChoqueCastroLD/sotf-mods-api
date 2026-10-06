/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Cta_ResultsInputs */

const en_jams_cta_results = /** @type {(inputs: Jams_Cta_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`See the results`)
};

const es_jams_cta_results = /** @type {(inputs: Jams_Cta_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver los resultados`)
};

const de_jams_cta_results = /** @type {(inputs: Jams_Cta_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ergebnisse ansehen`)
};

const fr_jams_cta_results = /** @type {(inputs: Jams_Cta_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voir les résultats`)
};

const it_jams_cta_results = /** @type {(inputs: Jams_Cta_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vedi i risultati`)
};

const nl_jams_cta_results = /** @type {(inputs: Jams_Cta_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekijk de resultaten`)
};

const pl_jams_cta_results = /** @type {(inputs: Jams_Cta_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zobacz wyniki`)
};

const pt_jams_cta_results = /** @type {(inputs: Jams_Cta_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver os resultados`)
};

const ru_jams_cta_results = /** @type {(inputs: Jams_Cta_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Смотреть результаты`)
};

const sv_jams_cta_results = /** @type {(inputs: Jams_Cta_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa resultaten`)
};

const tr_jams_cta_results = /** @type {(inputs: Jams_Cta_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sonuçları gör`)
};

const zh_jams_cta_results = /** @type {(inputs: Jams_Cta_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看结果`)
};

const ja_jams_cta_results = /** @type {(inputs: Jams_Cta_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`結果を見る`)
};

/**
* | output |
* | --- |
* | "See the results" |
*
* @param {Jams_Cta_ResultsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_cta_results = /** @type {((inputs?: Jams_Cta_ResultsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Cta_ResultsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_cta_results(inputs)
	if (locale === "de") return de_jams_cta_results(inputs)
	if (locale === "fr") return fr_jams_cta_results(inputs)
	if (locale === "it") return it_jams_cta_results(inputs)
	if (locale === "nl") return nl_jams_cta_results(inputs)
	if (locale === "pl") return pl_jams_cta_results(inputs)
	if (locale === "pt") return pt_jams_cta_results(inputs)
	if (locale === "ru") return ru_jams_cta_results(inputs)
	if (locale === "sv") return sv_jams_cta_results(inputs)
	if (locale === "tr") return tr_jams_cta_results(inputs)
	if (locale === "zh") return zh_jams_cta_results(inputs)
	if (locale === "ja") return ja_jams_cta_results(inputs)
	return en_jams_cta_results(inputs)
});
