/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Report_Result_LegendInputs */

const en_me_report_result_legend = /** @type {(inputs: Me_Report_Result_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How did it go?`)
};

const es_me_report_result_legend = /** @type {(inputs: Me_Report_Result_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Qué tal fue?`)
};

const de_me_report_result_legend = /** @type {(inputs: Me_Report_Result_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wie lief es?`)
};

const fr_me_report_result_legend = /** @type {(inputs: Me_Report_Result_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment ça s’est passé ?`)
};

const it_me_report_result_legend = /** @type {(inputs: Me_Report_Result_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Com’è andata?`)
};

const nl_me_report_result_legend = /** @type {(inputs: Me_Report_Result_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hoe ging het?`)
};

const pl_me_report_result_legend = /** @type {(inputs: Me_Report_Result_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jak poszło?`)
};

const pt_me_report_result_legend = /** @type {(inputs: Me_Report_Result_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Como foi?`)
};

const ru_me_report_result_legend = /** @type {(inputs: Me_Report_Result_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Как прошло?`)
};

const sv_me_report_result_legend = /** @type {(inputs: Me_Report_Result_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hur gick det?`)
};

const tr_me_report_result_legend = /** @type {(inputs: Me_Report_Result_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nasıl gitti?`)
};

const zh_me_report_result_legend = /** @type {(inputs: Me_Report_Result_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`情况如何？`)
};

const ja_me_report_result_legend = /** @type {(inputs: Me_Report_Result_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`結果はどうでしたか？`)
};

/**
* | output |
* | --- |
* | "How did it go?" |
*
* @param {Me_Report_Result_LegendInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_report_result_legend = /** @type {((inputs?: Me_Report_Result_LegendInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Report_Result_LegendInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_report_result_legend(inputs)
	if (locale === "de") return de_me_report_result_legend(inputs)
	if (locale === "fr") return fr_me_report_result_legend(inputs)
	if (locale === "it") return it_me_report_result_legend(inputs)
	if (locale === "nl") return nl_me_report_result_legend(inputs)
	if (locale === "pl") return pl_me_report_result_legend(inputs)
	if (locale === "pt") return pt_me_report_result_legend(inputs)
	if (locale === "ru") return ru_me_report_result_legend(inputs)
	if (locale === "sv") return sv_me_report_result_legend(inputs)
	if (locale === "tr") return tr_me_report_result_legend(inputs)
	if (locale === "zh") return zh_me_report_result_legend(inputs)
	if (locale === "ja") return ja_me_report_result_legend(inputs)
	return en_me_report_result_legend(inputs)
});
