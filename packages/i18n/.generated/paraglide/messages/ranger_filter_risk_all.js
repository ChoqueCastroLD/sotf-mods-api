/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Filter_Risk_AllInputs */

const en_ranger_filter_risk_all = /** @type {(inputs: Ranger_Filter_Risk_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Any risk`)
};

const es_ranger_filter_risk_all = /** @type {(inputs: Ranger_Filter_Risk_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cualquier riesgo`)
};

const de_ranger_filter_risk_all = /** @type {(inputs: Ranger_Filter_Risk_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jedes Risiko`)
};

const fr_ranger_filter_risk_all = /** @type {(inputs: Ranger_Filter_Risk_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tous les risques`)
};

const it_ranger_filter_risk_all = /** @type {(inputs: Ranger_Filter_Risk_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualsiasi rischio`)
};

const nl_ranger_filter_risk_all = /** @type {(inputs: Ranger_Filter_Risk_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elk risico`)
};

const pl_ranger_filter_risk_all = /** @type {(inputs: Ranger_Filter_Risk_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dowolne ryzyko`)
};

const pt_ranger_filter_risk_all = /** @type {(inputs: Ranger_Filter_Risk_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualquer risco`)
};

const ru_ranger_filter_risk_all = /** @type {(inputs: Ranger_Filter_Risk_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Любой риск`)
};

const sv_ranger_filter_risk_all = /** @type {(inputs: Ranger_Filter_Risk_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla risker`)
};

const tr_ranger_filter_risk_all = /** @type {(inputs: Ranger_Filter_Risk_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm riskler`)
};

const zh_ranger_filter_risk_all = /** @type {(inputs: Ranger_Filter_Risk_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`任意风险`)
};

const ja_ranger_filter_risk_all = /** @type {(inputs: Ranger_Filter_Risk_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべてのリスク`)
};

/**
* | output |
* | --- |
* | "Any risk" |
*
* @param {Ranger_Filter_Risk_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_filter_risk_all = /** @type {((inputs?: Ranger_Filter_Risk_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Filter_Risk_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_filter_risk_all(inputs)
	if (locale === "de") return de_ranger_filter_risk_all(inputs)
	if (locale === "fr") return fr_ranger_filter_risk_all(inputs)
	if (locale === "it") return it_ranger_filter_risk_all(inputs)
	if (locale === "nl") return nl_ranger_filter_risk_all(inputs)
	if (locale === "pl") return pl_ranger_filter_risk_all(inputs)
	if (locale === "pt") return pt_ranger_filter_risk_all(inputs)
	if (locale === "ru") return ru_ranger_filter_risk_all(inputs)
	if (locale === "sv") return sv_ranger_filter_risk_all(inputs)
	if (locale === "tr") return tr_ranger_filter_risk_all(inputs)
	if (locale === "zh") return zh_ranger_filter_risk_all(inputs)
	if (locale === "ja") return ja_ranger_filter_risk_all(inputs)
	return en_ranger_filter_risk_all(inputs)
});
