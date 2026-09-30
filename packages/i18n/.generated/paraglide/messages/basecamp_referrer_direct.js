/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Referrer_DirectInputs */

const en_basecamp_referrer_direct = /** @type {(inputs: Basecamp_Referrer_DirectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Direct`)
};

const es_basecamp_referrer_direct = /** @type {(inputs: Basecamp_Referrer_DirectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Directo`)
};

const de_basecamp_referrer_direct = /** @type {(inputs: Basecamp_Referrer_DirectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Direkt`)
};

const fr_basecamp_referrer_direct = /** @type {(inputs: Basecamp_Referrer_DirectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Direct`)
};

const it_basecamp_referrer_direct = /** @type {(inputs: Basecamp_Referrer_DirectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diretto`)
};

const nl_basecamp_referrer_direct = /** @type {(inputs: Basecamp_Referrer_DirectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Direct`)
};

const pl_basecamp_referrer_direct = /** @type {(inputs: Basecamp_Referrer_DirectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bezpośrednio`)
};

const pt_basecamp_referrer_direct = /** @type {(inputs: Basecamp_Referrer_DirectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Direto`)
};

const ru_basecamp_referrer_direct = /** @type {(inputs: Basecamp_Referrer_DirectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Прямые заходы`)
};

const sv_basecamp_referrer_direct = /** @type {(inputs: Basecamp_Referrer_DirectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Direkt`)
};

const tr_basecamp_referrer_direct = /** @type {(inputs: Basecamp_Referrer_DirectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Doğrudan`)
};

const zh_basecamp_referrer_direct = /** @type {(inputs: Basecamp_Referrer_DirectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`直接访问`)
};

const ja_basecamp_referrer_direct = /** @type {(inputs: Basecamp_Referrer_DirectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`直接`)
};

/**
* | output |
* | --- |
* | "Direct" |
*
* @param {Basecamp_Referrer_DirectInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_referrer_direct = /** @type {((inputs?: Basecamp_Referrer_DirectInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Referrer_DirectInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_referrer_direct(inputs)
	if (locale === "de") return de_basecamp_referrer_direct(inputs)
	if (locale === "fr") return fr_basecamp_referrer_direct(inputs)
	if (locale === "it") return it_basecamp_referrer_direct(inputs)
	if (locale === "nl") return nl_basecamp_referrer_direct(inputs)
	if (locale === "pl") return pl_basecamp_referrer_direct(inputs)
	if (locale === "pt") return pt_basecamp_referrer_direct(inputs)
	if (locale === "ru") return ru_basecamp_referrer_direct(inputs)
	if (locale === "sv") return sv_basecamp_referrer_direct(inputs)
	if (locale === "tr") return tr_basecamp_referrer_direct(inputs)
	if (locale === "zh") return zh_basecamp_referrer_direct(inputs)
	if (locale === "ja") return ja_basecamp_referrer_direct(inputs)
	return en_basecamp_referrer_direct(inputs)
});
