/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_PartialInputs */

const en_basecamp_compat_partial = /** @type {(inputs: Basecamp_Compat_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partial`)
};

const es_basecamp_compat_partial = /** @type {(inputs: Basecamp_Compat_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parcial`)
};

const de_basecamp_compat_partial = /** @type {(inputs: Basecamp_Compat_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teilweise`)
};

const fr_basecamp_compat_partial = /** @type {(inputs: Basecamp_Compat_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partiel`)
};

const it_basecamp_compat_partial = /** @type {(inputs: Basecamp_Compat_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parziale`)
};

const nl_basecamp_compat_partial = /** @type {(inputs: Basecamp_Compat_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gedeeltelijk`)
};

const pl_basecamp_compat_partial = /** @type {(inputs: Basecamp_Compat_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Częściowo`)
};

const pt_basecamp_compat_partial = /** @type {(inputs: Basecamp_Compat_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parcial`)
};

const ru_basecamp_compat_partial = /** @type {(inputs: Basecamp_Compat_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Частично`)
};

const sv_basecamp_compat_partial = /** @type {(inputs: Basecamp_Compat_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delvis`)
};

const tr_basecamp_compat_partial = /** @type {(inputs: Basecamp_Compat_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kısmen`)
};

const zh_basecamp_compat_partial = /** @type {(inputs: Basecamp_Compat_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`部分可用`)
};

const ja_basecamp_compat_partial = /** @type {(inputs: Basecamp_Compat_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一部動作`)
};

/**
* | output |
* | --- |
* | "Partial" |
*
* @param {Basecamp_Compat_PartialInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_partial = /** @type {((inputs?: Basecamp_Compat_PartialInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_PartialInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_partial(inputs)
	if (locale === "de") return de_basecamp_compat_partial(inputs)
	if (locale === "fr") return fr_basecamp_compat_partial(inputs)
	if (locale === "it") return it_basecamp_compat_partial(inputs)
	if (locale === "nl") return nl_basecamp_compat_partial(inputs)
	if (locale === "pl") return pl_basecamp_compat_partial(inputs)
	if (locale === "pt") return pt_basecamp_compat_partial(inputs)
	if (locale === "ru") return ru_basecamp_compat_partial(inputs)
	if (locale === "sv") return sv_basecamp_compat_partial(inputs)
	if (locale === "tr") return tr_basecamp_compat_partial(inputs)
	if (locale === "zh") return zh_basecamp_compat_partial(inputs)
	if (locale === "ja") return ja_basecamp_compat_partial(inputs)
	return en_basecamp_compat_partial(inputs)
});
