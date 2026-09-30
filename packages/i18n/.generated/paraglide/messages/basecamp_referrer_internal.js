/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Referrer_InternalInputs */

const en_basecamp_referrer_internal = /** @type {(inputs: Basecamp_Referrer_InternalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Within SOTF Mods`)
};

const es_basecamp_referrer_internal = /** @type {(inputs: Basecamp_Referrer_InternalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dentro de SOTF Mods`)
};

const de_basecamp_referrer_internal = /** @type {(inputs: Basecamp_Referrer_InternalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Innerhalb von SOTF Mods`)
};

const fr_basecamp_referrer_internal = /** @type {(inputs: Basecamp_Referrer_InternalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Depuis SOTF Mods`)
};

const it_basecamp_referrer_internal = /** @type {(inputs: Basecamp_Referrer_InternalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Da SOTF Mods`)
};

const nl_basecamp_referrer_internal = /** @type {(inputs: Basecamp_Referrer_InternalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Binnen SOTF Mods`)
};

const pl_basecamp_referrer_internal = /** @type {(inputs: Basecamp_Referrer_InternalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Z SOTF Mods`)
};

const pt_basecamp_referrer_internal = /** @type {(inputs: Basecamp_Referrer_InternalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dentro do SOTF Mods`)
};

const ru_basecamp_referrer_internal = /** @type {(inputs: Basecamp_Referrer_InternalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`С SOTF Mods`)
};

const sv_basecamp_referrer_internal = /** @type {(inputs: Basecamp_Referrer_InternalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inom SOTF Mods`)
};

const tr_basecamp_referrer_internal = /** @type {(inputs: Basecamp_Referrer_InternalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods içinden`)
};

const zh_basecamp_referrer_internal = /** @type {(inputs: Basecamp_Referrer_InternalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods 站内`)
};

const ja_basecamp_referrer_internal = /** @type {(inputs: Basecamp_Referrer_InternalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods 内`)
};

/**
* | output |
* | --- |
* | "Within SOTF Mods" |
*
* @param {Basecamp_Referrer_InternalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_referrer_internal = /** @type {((inputs?: Basecamp_Referrer_InternalInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Referrer_InternalInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_referrer_internal(inputs)
	if (locale === "de") return de_basecamp_referrer_internal(inputs)
	if (locale === "fr") return fr_basecamp_referrer_internal(inputs)
	if (locale === "it") return it_basecamp_referrer_internal(inputs)
	if (locale === "nl") return nl_basecamp_referrer_internal(inputs)
	if (locale === "pl") return pl_basecamp_referrer_internal(inputs)
	if (locale === "pt") return pt_basecamp_referrer_internal(inputs)
	if (locale === "ru") return ru_basecamp_referrer_internal(inputs)
	if (locale === "sv") return sv_basecamp_referrer_internal(inputs)
	if (locale === "tr") return tr_basecamp_referrer_internal(inputs)
	if (locale === "zh") return zh_basecamp_referrer_internal(inputs)
	if (locale === "ja") return ja_basecamp_referrer_internal(inputs)
	return en_basecamp_referrer_internal(inputs)
});
