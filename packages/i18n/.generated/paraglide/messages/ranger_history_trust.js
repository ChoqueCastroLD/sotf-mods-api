/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_History_TrustInputs */

const en_ranger_history_trust = /** @type {(inputs: Ranger_History_TrustInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trust`)
};

const es_ranger_history_trust = /** @type {(inputs: Ranger_History_TrustInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confianza`)
};

const de_ranger_history_trust = /** @type {(inputs: Ranger_History_TrustInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertrauen`)
};

const fr_ranger_history_trust = /** @type {(inputs: Ranger_History_TrustInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confiance`)
};

const it_ranger_history_trust = /** @type {(inputs: Ranger_History_TrustInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fiducia`)
};

const nl_ranger_history_trust = /** @type {(inputs: Ranger_History_TrustInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertrouwen`)
};

const pl_ranger_history_trust = /** @type {(inputs: Ranger_History_TrustInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaufanie`)
};

const pt_ranger_history_trust = /** @type {(inputs: Ranger_History_TrustInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confiança`)
};

const ru_ranger_history_trust = /** @type {(inputs: Ranger_History_TrustInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Доверие`)
};

const sv_ranger_history_trust = /** @type {(inputs: Ranger_History_TrustInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Förtroende`)
};

const tr_ranger_history_trust = /** @type {(inputs: Ranger_History_TrustInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güven`)
};

const zh_ranger_history_trust = /** @type {(inputs: Ranger_History_TrustInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`信任`)
};

const ja_ranger_history_trust = /** @type {(inputs: Ranger_History_TrustInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`信頼`)
};

/**
* | output |
* | --- |
* | "Trust" |
*
* @param {Ranger_History_TrustInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_history_trust = /** @type {((inputs?: Ranger_History_TrustInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_History_TrustInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_history_trust(inputs)
	if (locale === "de") return de_ranger_history_trust(inputs)
	if (locale === "fr") return fr_ranger_history_trust(inputs)
	if (locale === "it") return it_ranger_history_trust(inputs)
	if (locale === "nl") return nl_ranger_history_trust(inputs)
	if (locale === "pl") return pl_ranger_history_trust(inputs)
	if (locale === "pt") return pt_ranger_history_trust(inputs)
	if (locale === "ru") return ru_ranger_history_trust(inputs)
	if (locale === "sv") return sv_ranger_history_trust(inputs)
	if (locale === "tr") return tr_ranger_history_trust(inputs)
	if (locale === "zh") return zh_ranger_history_trust(inputs)
	if (locale === "ja") return ja_ranger_history_trust(inputs)
	return en_ranger_history_trust(inputs)
});
