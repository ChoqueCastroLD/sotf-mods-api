/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Chart_Release_LegendInputs */

const en_basecamp_chart_release_legend = /** @type {(inputs: Basecamp_Chart_Release_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Release of a version`)
};

const es_basecamp_chart_release_legend = /** @type {(inputs: Basecamp_Chart_Release_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lanzamiento de una versión`)
};

const de_basecamp_chart_release_legend = /** @type {(inputs: Basecamp_Chart_Release_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veröffentlichung einer Version`)
};

const fr_basecamp_chart_release_legend = /** @type {(inputs: Basecamp_Chart_Release_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortie d’une version`)
};

const it_basecamp_chart_release_legend = /** @type {(inputs: Basecamp_Chart_Release_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uscita di una versione`)
};

const nl_basecamp_chart_release_legend = /** @type {(inputs: Basecamp_Chart_Release_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uitgave van een versie`)
};

const pl_basecamp_chart_release_legend = /** @type {(inputs: Basecamp_Chart_Release_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wydanie wersji`)
};

const pt_basecamp_chart_release_legend = /** @type {(inputs: Basecamp_Chart_Release_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lançamento de uma versão`)
};

const ru_basecamp_chart_release_legend = /** @type {(inputs: Basecamp_Chart_Release_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выход версии`)
};

const sv_basecamp_chart_release_legend = /** @type {(inputs: Basecamp_Chart_Release_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Släpp av en version`)
};

const tr_basecamp_chart_release_legend = /** @type {(inputs: Basecamp_Chart_Release_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm yayını`)
};

const zh_basecamp_chart_release_legend = /** @type {(inputs: Basecamp_Chart_Release_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本发布`)
};

const ja_basecamp_chart_release_legend = /** @type {(inputs: Basecamp_Chart_Release_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョンのリリース`)
};

/**
* | output |
* | --- |
* | "Release of a version" |
*
* @param {Basecamp_Chart_Release_LegendInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_chart_release_legend = /** @type {((inputs?: Basecamp_Chart_Release_LegendInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Chart_Release_LegendInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_chart_release_legend(inputs)
	if (locale === "de") return de_basecamp_chart_release_legend(inputs)
	if (locale === "fr") return fr_basecamp_chart_release_legend(inputs)
	if (locale === "it") return it_basecamp_chart_release_legend(inputs)
	if (locale === "nl") return nl_basecamp_chart_release_legend(inputs)
	if (locale === "pl") return pl_basecamp_chart_release_legend(inputs)
	if (locale === "pt") return pt_basecamp_chart_release_legend(inputs)
	if (locale === "ru") return ru_basecamp_chart_release_legend(inputs)
	if (locale === "sv") return sv_basecamp_chart_release_legend(inputs)
	if (locale === "tr") return tr_basecamp_chart_release_legend(inputs)
	if (locale === "zh") return zh_basecamp_chart_release_legend(inputs)
	if (locale === "ja") return ja_basecamp_chart_release_legend(inputs)
	return en_basecamp_chart_release_legend(inputs)
});
