/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Filter_EscalatedInputs */

const en_ranger_filter_escalated = /** @type {(inputs: Ranger_Filter_EscalatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escalation`)
};

const es_ranger_filter_escalated = /** @type {(inputs: Ranger_Filter_EscalatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escalado`)
};

const de_ranger_filter_escalated = /** @type {(inputs: Ranger_Filter_EscalatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eskalation`)
};

const fr_ranger_filter_escalated = /** @type {(inputs: Ranger_Filter_EscalatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escalade`)
};

const it_ranger_filter_escalated = /** @type {(inputs: Ranger_Filter_EscalatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inoltro`)
};

const nl_ranger_filter_escalated = /** @type {(inputs: Ranger_Filter_EscalatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escalatie`)
};

const pl_ranger_filter_escalated = /** @type {(inputs: Ranger_Filter_EscalatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eskalacja`)
};

const pt_ranger_filter_escalated = /** @type {(inputs: Ranger_Filter_EscalatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escalonamento`)
};

const ru_ranger_filter_escalated = /** @type {(inputs: Ranger_Filter_EscalatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Эскалация`)
};

const sv_ranger_filter_escalated = /** @type {(inputs: Ranger_Filter_EscalatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eskalering`)
};

const tr_ranger_filter_escalated = /** @type {(inputs: Ranger_Filter_EscalatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yükseltme`)
};

const zh_ranger_filter_escalated = /** @type {(inputs: Ranger_Filter_EscalatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上报`)
};

const ja_ranger_filter_escalated = /** @type {(inputs: Ranger_Filter_EscalatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エスカレーション`)
};

/**
* | output |
* | --- |
* | "Escalation" |
*
* @param {Ranger_Filter_EscalatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_filter_escalated = /** @type {((inputs?: Ranger_Filter_EscalatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Filter_EscalatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_filter_escalated(inputs)
	if (locale === "de") return de_ranger_filter_escalated(inputs)
	if (locale === "fr") return fr_ranger_filter_escalated(inputs)
	if (locale === "it") return it_ranger_filter_escalated(inputs)
	if (locale === "nl") return nl_ranger_filter_escalated(inputs)
	if (locale === "pl") return pl_ranger_filter_escalated(inputs)
	if (locale === "pt") return pt_ranger_filter_escalated(inputs)
	if (locale === "ru") return ru_ranger_filter_escalated(inputs)
	if (locale === "sv") return sv_ranger_filter_escalated(inputs)
	if (locale === "tr") return tr_ranger_filter_escalated(inputs)
	if (locale === "zh") return zh_ranger_filter_escalated(inputs)
	if (locale === "ja") return ja_ranger_filter_escalated(inputs)
	return en_ranger_filter_escalated(inputs)
});
