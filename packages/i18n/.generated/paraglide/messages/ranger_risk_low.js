/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Risk_LowInputs */

const en_ranger_risk_low = /** @type {(inputs: Ranger_Risk_LowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Low risk`)
};

const es_ranger_risk_low = /** @type {(inputs: Ranger_Risk_LowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riesgo bajo`)
};

const de_ranger_risk_low = /** @type {(inputs: Ranger_Risk_LowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geringes Risiko`)
};

const fr_ranger_risk_low = /** @type {(inputs: Ranger_Risk_LowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risque faible`)
};

const it_ranger_risk_low = /** @type {(inputs: Ranger_Risk_LowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rischio basso`)
};

const nl_ranger_risk_low = /** @type {(inputs: Ranger_Risk_LowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laag risico`)
};

const pl_ranger_risk_low = /** @type {(inputs: Ranger_Risk_LowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niskie ryzyko`)
};

const pt_ranger_risk_low = /** @type {(inputs: Ranger_Risk_LowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risco baixo`)
};

const ru_ranger_risk_low = /** @type {(inputs: Ranger_Risk_LowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Низкий риск`)
};

const sv_ranger_risk_low = /** @type {(inputs: Ranger_Risk_LowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Låg risk`)
};

const tr_ranger_risk_low = /** @type {(inputs: Ranger_Risk_LowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Düşük risk`)
};

const zh_ranger_risk_low = /** @type {(inputs: Ranger_Risk_LowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`低风险`)
};

const ja_ranger_risk_low = /** @type {(inputs: Ranger_Risk_LowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`低リスク`)
};

/**
* | output |
* | --- |
* | "Low risk" |
*
* @param {Ranger_Risk_LowInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_risk_low = /** @type {((inputs?: Ranger_Risk_LowInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Risk_LowInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_risk_low(inputs)
	if (locale === "de") return de_ranger_risk_low(inputs)
	if (locale === "fr") return fr_ranger_risk_low(inputs)
	if (locale === "it") return it_ranger_risk_low(inputs)
	if (locale === "nl") return nl_ranger_risk_low(inputs)
	if (locale === "pl") return pl_ranger_risk_low(inputs)
	if (locale === "pt") return pt_ranger_risk_low(inputs)
	if (locale === "ru") return ru_ranger_risk_low(inputs)
	if (locale === "sv") return sv_ranger_risk_low(inputs)
	if (locale === "tr") return tr_ranger_risk_low(inputs)
	if (locale === "zh") return zh_ranger_risk_low(inputs)
	if (locale === "ja") return ja_ranger_risk_low(inputs)
	return en_ranger_risk_low(inputs)
});
