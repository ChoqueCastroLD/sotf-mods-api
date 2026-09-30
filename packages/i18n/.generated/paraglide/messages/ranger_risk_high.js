/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Risk_HighInputs */

const en_ranger_risk_high = /** @type {(inputs: Ranger_Risk_HighInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`High risk`)
};

const es_ranger_risk_high = /** @type {(inputs: Ranger_Risk_HighInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riesgo alto`)
};

const de_ranger_risk_high = /** @type {(inputs: Ranger_Risk_HighInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hohes Risiko`)
};

const fr_ranger_risk_high = /** @type {(inputs: Ranger_Risk_HighInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risque élevé`)
};

const it_ranger_risk_high = /** @type {(inputs: Ranger_Risk_HighInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rischio alto`)
};

const nl_ranger_risk_high = /** @type {(inputs: Ranger_Risk_HighInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hoog risico`)
};

const pl_ranger_risk_high = /** @type {(inputs: Ranger_Risk_HighInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wysokie ryzyko`)
};

const pt_ranger_risk_high = /** @type {(inputs: Ranger_Risk_HighInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risco alto`)
};

const ru_ranger_risk_high = /** @type {(inputs: Ranger_Risk_HighInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Высокий риск`)
};

const sv_ranger_risk_high = /** @type {(inputs: Ranger_Risk_HighInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hög risk`)
};

const tr_ranger_risk_high = /** @type {(inputs: Ranger_Risk_HighInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yüksek risk`)
};

const zh_ranger_risk_high = /** @type {(inputs: Ranger_Risk_HighInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`高风险`)
};

const ja_ranger_risk_high = /** @type {(inputs: Ranger_Risk_HighInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`高リスク`)
};

/**
* | output |
* | --- |
* | "High risk" |
*
* @param {Ranger_Risk_HighInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_risk_high = /** @type {((inputs?: Ranger_Risk_HighInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Risk_HighInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_risk_high(inputs)
	if (locale === "de") return de_ranger_risk_high(inputs)
	if (locale === "fr") return fr_ranger_risk_high(inputs)
	if (locale === "it") return it_ranger_risk_high(inputs)
	if (locale === "nl") return nl_ranger_risk_high(inputs)
	if (locale === "pl") return pl_ranger_risk_high(inputs)
	if (locale === "pt") return pt_ranger_risk_high(inputs)
	if (locale === "ru") return ru_ranger_risk_high(inputs)
	if (locale === "sv") return sv_ranger_risk_high(inputs)
	if (locale === "tr") return tr_ranger_risk_high(inputs)
	if (locale === "zh") return zh_ranger_risk_high(inputs)
	if (locale === "ja") return ja_ranger_risk_high(inputs)
	return en_ranger_risk_high(inputs)
});
