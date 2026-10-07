/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Sort_RiskInputs */

const en_ranger_sort_risk = /** @type {(inputs: Ranger_Sort_RiskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Highest risk first`)
};

const es_ranger_sort_risk = /** @type {(inputs: Ranger_Sort_RiskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mayor riesgo primero`)
};

const de_ranger_sort_risk = /** @type {(inputs: Ranger_Sort_RiskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Höchstes Risiko zuerst`)
};

const fr_ranger_sort_risk = /** @type {(inputs: Ranger_Sort_RiskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risque le plus élevé d’abord`)
};

const it_ranger_sort_risk = /** @type {(inputs: Ranger_Sort_RiskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prima il rischio più alto`)
};

const nl_ranger_sort_risk = /** @type {(inputs: Ranger_Sort_RiskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hoogste risico eerst`)
};

const pl_ranger_sort_risk = /** @type {(inputs: Ranger_Sort_RiskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najwyższe ryzyko najpierw`)
};

const pt_ranger_sort_risk = /** @type {(inputs: Ranger_Sort_RiskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maior risco primeiro`)
};

const ru_ranger_sort_risk = /** @type {(inputs: Ranger_Sort_RiskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сначала с высоким риском`)
};

const sv_ranger_sort_risk = /** @type {(inputs: Ranger_Sort_RiskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Högst risk först`)
};

const tr_ranger_sort_risk = /** @type {(inputs: Ranger_Sort_RiskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önce en yüksek risk`)
};

const zh_ranger_sort_risk = /** @type {(inputs: Ranger_Sort_RiskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`风险最高的在前`)
};

const ja_ranger_sort_risk = /** @type {(inputs: Ranger_Sort_RiskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リスクの高い順`)
};

/**
* | output |
* | --- |
* | "Highest risk first" |
*
* @param {Ranger_Sort_RiskInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sort_risk = /** @type {((inputs?: Ranger_Sort_RiskInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sort_RiskInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sort_risk(inputs)
	if (locale === "de") return de_ranger_sort_risk(inputs)
	if (locale === "fr") return fr_ranger_sort_risk(inputs)
	if (locale === "it") return it_ranger_sort_risk(inputs)
	if (locale === "nl") return nl_ranger_sort_risk(inputs)
	if (locale === "pl") return pl_ranger_sort_risk(inputs)
	if (locale === "pt") return pt_ranger_sort_risk(inputs)
	if (locale === "ru") return ru_ranger_sort_risk(inputs)
	if (locale === "sv") return sv_ranger_sort_risk(inputs)
	if (locale === "tr") return tr_ranger_sort_risk(inputs)
	if (locale === "zh") return zh_ranger_sort_risk(inputs)
	if (locale === "ja") return ja_ranger_sort_risk(inputs)
	return en_ranger_sort_risk(inputs)
});
