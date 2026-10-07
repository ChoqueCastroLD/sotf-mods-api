/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Filter_RiskInputs */

const en_ranger_filter_risk = /** @type {(inputs: Ranger_Filter_RiskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risk`)
};

const es_ranger_filter_risk = /** @type {(inputs: Ranger_Filter_RiskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riesgo`)
};

const de_ranger_filter_risk = /** @type {(inputs: Ranger_Filter_RiskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risiko`)
};

const fr_ranger_filter_risk = /** @type {(inputs: Ranger_Filter_RiskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risque`)
};

const it_ranger_filter_risk = /** @type {(inputs: Ranger_Filter_RiskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rischio`)
};

const nl_ranger_filter_risk = /** @type {(inputs: Ranger_Filter_RiskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risico`)
};

const pl_ranger_filter_risk = /** @type {(inputs: Ranger_Filter_RiskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ryzyko`)
};

const pt_ranger_filter_risk = /** @type {(inputs: Ranger_Filter_RiskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risco`)
};

const ru_ranger_filter_risk = /** @type {(inputs: Ranger_Filter_RiskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Риск`)
};

const sv_ranger_filter_risk = /** @type {(inputs: Ranger_Filter_RiskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risk`)
};

const tr_ranger_filter_risk = /** @type {(inputs: Ranger_Filter_RiskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risk`)
};

const zh_ranger_filter_risk = /** @type {(inputs: Ranger_Filter_RiskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`风险`)
};

const ja_ranger_filter_risk = /** @type {(inputs: Ranger_Filter_RiskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リスク`)
};

/**
* | output |
* | --- |
* | "Risk" |
*
* @param {Ranger_Filter_RiskInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_filter_risk = /** @type {((inputs?: Ranger_Filter_RiskInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Filter_RiskInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_filter_risk(inputs)
	if (locale === "de") return de_ranger_filter_risk(inputs)
	if (locale === "fr") return fr_ranger_filter_risk(inputs)
	if (locale === "it") return it_ranger_filter_risk(inputs)
	if (locale === "nl") return nl_ranger_filter_risk(inputs)
	if (locale === "pl") return pl_ranger_filter_risk(inputs)
	if (locale === "pt") return pt_ranger_filter_risk(inputs)
	if (locale === "ru") return ru_ranger_filter_risk(inputs)
	if (locale === "sv") return sv_ranger_filter_risk(inputs)
	if (locale === "tr") return tr_ranger_filter_risk(inputs)
	if (locale === "zh") return zh_ranger_filter_risk(inputs)
	if (locale === "ja") return ja_ranger_filter_risk(inputs)
	return en_ranger_filter_risk(inputs)
});
