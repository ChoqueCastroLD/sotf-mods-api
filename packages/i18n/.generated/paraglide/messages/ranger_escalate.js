/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_EscalateInputs */

const en_ranger_escalate = /** @type {(inputs: Ranger_EscalateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escalate`)
};

const es_ranger_escalate = /** @type {(inputs: Ranger_EscalateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escalar`)
};

const de_ranger_escalate = /** @type {(inputs: Ranger_EscalateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eskalieren`)
};

const fr_ranger_escalate = /** @type {(inputs: Ranger_EscalateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escalader`)
};

const it_ranger_escalate = /** @type {(inputs: Ranger_EscalateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inoltra agli admin`)
};

const nl_ranger_escalate = /** @type {(inputs: Ranger_EscalateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escaleren`)
};

const pl_ranger_escalate = /** @type {(inputs: Ranger_EscalateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eskaluj`)
};

const pt_ranger_escalate = /** @type {(inputs: Ranger_EscalateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escalar`)
};

const ru_ranger_escalate = /** @type {(inputs: Ranger_EscalateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Передать админам`)
};

const sv_ranger_escalate = /** @type {(inputs: Ranger_EscalateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eskalera`)
};

const tr_ranger_escalate = /** @type {(inputs: Ranger_EscalateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yükselt`)
};

const zh_ranger_escalate = /** @type {(inputs: Ranger_EscalateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上报`)
};

const ja_ranger_escalate = /** @type {(inputs: Ranger_EscalateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エスカレーション`)
};

/**
* | output |
* | --- |
* | "Escalate" |
*
* @param {Ranger_EscalateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_escalate = /** @type {((inputs?: Ranger_EscalateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_EscalateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_escalate(inputs)
	if (locale === "de") return de_ranger_escalate(inputs)
	if (locale === "fr") return fr_ranger_escalate(inputs)
	if (locale === "it") return it_ranger_escalate(inputs)
	if (locale === "nl") return nl_ranger_escalate(inputs)
	if (locale === "pl") return pl_ranger_escalate(inputs)
	if (locale === "pt") return pt_ranger_escalate(inputs)
	if (locale === "ru") return ru_ranger_escalate(inputs)
	if (locale === "sv") return sv_ranger_escalate(inputs)
	if (locale === "tr") return tr_ranger_escalate(inputs)
	if (locale === "zh") return zh_ranger_escalate(inputs)
	if (locale === "ja") return ja_ranger_escalate(inputs)
	return en_ranger_escalate(inputs)
});
