/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_EscalatedInputs */

const en_ranger_escalated = /** @type {(inputs: Ranger_EscalatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escalated`)
};

const es_ranger_escalated = /** @type {(inputs: Ranger_EscalatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escalado`)
};

const de_ranger_escalated = /** @type {(inputs: Ranger_EscalatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eskaliert`)
};

const fr_ranger_escalated = /** @type {(inputs: Ranger_EscalatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escaladé`)
};

const it_ranger_escalated = /** @type {(inputs: Ranger_EscalatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inoltrato`)
};

const nl_ranger_escalated = /** @type {(inputs: Ranger_EscalatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geëscaleerd`)
};

const pl_ranger_escalated = /** @type {(inputs: Ranger_EscalatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eskalowane`)
};

const pt_ranger_escalated = /** @type {(inputs: Ranger_EscalatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escalado`)
};

const ru_ranger_escalated = /** @type {(inputs: Ranger_EscalatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`У админов`)
};

const sv_ranger_escalated = /** @type {(inputs: Ranger_EscalatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eskalerad`)
};

const tr_ranger_escalated = /** @type {(inputs: Ranger_EscalatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yükseltildi`)
};

const zh_ranger_escalated = /** @type {(inputs: Ranger_EscalatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已上报`)
};

const ja_ranger_escalated = /** @type {(inputs: Ranger_EscalatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エスカレーション済み`)
};

/**
* | output |
* | --- |
* | "Escalated" |
*
* @param {Ranger_EscalatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_escalated = /** @type {((inputs?: Ranger_EscalatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_EscalatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_escalated(inputs)
	if (locale === "de") return de_ranger_escalated(inputs)
	if (locale === "fr") return fr_ranger_escalated(inputs)
	if (locale === "it") return it_ranger_escalated(inputs)
	if (locale === "nl") return nl_ranger_escalated(inputs)
	if (locale === "pl") return pl_ranger_escalated(inputs)
	if (locale === "pt") return pt_ranger_escalated(inputs)
	if (locale === "ru") return ru_ranger_escalated(inputs)
	if (locale === "sv") return sv_ranger_escalated(inputs)
	if (locale === "tr") return tr_ranger_escalated(inputs)
	if (locale === "zh") return zh_ranger_escalated(inputs)
	if (locale === "ja") return ja_ranger_escalated(inputs)
	return en_ranger_escalated(inputs)
});
