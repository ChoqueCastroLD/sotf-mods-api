/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Risk_MediumInputs */

const en_ranger_risk_medium = /** @type {(inputs: Ranger_Risk_MediumInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Medium risk`)
};

const es_ranger_risk_medium = /** @type {(inputs: Ranger_Risk_MediumInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riesgo medio`)
};

const de_ranger_risk_medium = /** @type {(inputs: Ranger_Risk_MediumInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mittleres Risiko`)
};

const fr_ranger_risk_medium = /** @type {(inputs: Ranger_Risk_MediumInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risque moyen`)
};

const it_ranger_risk_medium = /** @type {(inputs: Ranger_Risk_MediumInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rischio medio`)
};

const nl_ranger_risk_medium = /** @type {(inputs: Ranger_Risk_MediumInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gemiddeld risico`)
};

const pl_ranger_risk_medium = /** @type {(inputs: Ranger_Risk_MediumInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Średnie ryzyko`)
};

const pt_ranger_risk_medium = /** @type {(inputs: Ranger_Risk_MediumInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risco médio`)
};

const ru_ranger_risk_medium = /** @type {(inputs: Ranger_Risk_MediumInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Средний риск`)
};

const sv_ranger_risk_medium = /** @type {(inputs: Ranger_Risk_MediumInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Medelhög risk`)
};

const tr_ranger_risk_medium = /** @type {(inputs: Ranger_Risk_MediumInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Orta risk`)
};

const zh_ranger_risk_medium = /** @type {(inputs: Ranger_Risk_MediumInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`中风险`)
};

const ja_ranger_risk_medium = /** @type {(inputs: Ranger_Risk_MediumInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`中リスク`)
};

/**
* | output |
* | --- |
* | "Medium risk" |
*
* @param {Ranger_Risk_MediumInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_risk_medium = /** @type {((inputs?: Ranger_Risk_MediumInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Risk_MediumInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_risk_medium(inputs)
	if (locale === "de") return de_ranger_risk_medium(inputs)
	if (locale === "fr") return fr_ranger_risk_medium(inputs)
	if (locale === "it") return it_ranger_risk_medium(inputs)
	if (locale === "nl") return nl_ranger_risk_medium(inputs)
	if (locale === "pl") return pl_ranger_risk_medium(inputs)
	if (locale === "pt") return pt_ranger_risk_medium(inputs)
	if (locale === "ru") return ru_ranger_risk_medium(inputs)
	if (locale === "sv") return sv_ranger_risk_medium(inputs)
	if (locale === "tr") return tr_ranger_risk_medium(inputs)
	if (locale === "zh") return zh_ranger_risk_medium(inputs)
	if (locale === "ja") return ja_ranger_risk_medium(inputs)
	return en_ranger_risk_medium(inputs)
});
