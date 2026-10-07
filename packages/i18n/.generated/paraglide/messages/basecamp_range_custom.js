/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Range_CustomInputs */

const en_basecamp_range_custom = /** @type {(inputs: Basecamp_Range_CustomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Custom`)
};

const es_basecamp_range_custom = /** @type {(inputs: Basecamp_Range_CustomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Personalizado`)
};

const de_basecamp_range_custom = /** @type {(inputs: Basecamp_Range_CustomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eigener`)
};

const fr_basecamp_range_custom = /** @type {(inputs: Basecamp_Range_CustomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Personnalisée`)
};

const it_basecamp_range_custom = /** @type {(inputs: Basecamp_Range_CustomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Personalizzato`)
};

const nl_basecamp_range_custom = /** @type {(inputs: Basecamp_Range_CustomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aangepast`)
};

const pl_basecamp_range_custom = /** @type {(inputs: Basecamp_Range_CustomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Własny`)
};

const pt_basecamp_range_custom = /** @type {(inputs: Basecamp_Range_CustomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Personalizado`)
};

const ru_basecamp_range_custom = /** @type {(inputs: Basecamp_Range_CustomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Свой период`)
};

const sv_basecamp_range_custom = /** @type {(inputs: Basecamp_Range_CustomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eget`)
};

const tr_basecamp_range_custom = /** @type {(inputs: Basecamp_Range_CustomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Özel`)
};

const zh_basecamp_range_custom = /** @type {(inputs: Basecamp_Range_CustomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自定义`)
};

const ja_basecamp_range_custom = /** @type {(inputs: Basecamp_Range_CustomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`期間指定`)
};

/**
* | output |
* | --- |
* | "Custom" |
*
* @param {Basecamp_Range_CustomInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_range_custom = /** @type {((inputs?: Basecamp_Range_CustomInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Range_CustomInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_range_custom(inputs)
	if (locale === "de") return de_basecamp_range_custom(inputs)
	if (locale === "fr") return fr_basecamp_range_custom(inputs)
	if (locale === "it") return it_basecamp_range_custom(inputs)
	if (locale === "nl") return nl_basecamp_range_custom(inputs)
	if (locale === "pl") return pl_basecamp_range_custom(inputs)
	if (locale === "pt") return pt_basecamp_range_custom(inputs)
	if (locale === "ru") return ru_basecamp_range_custom(inputs)
	if (locale === "sv") return sv_basecamp_range_custom(inputs)
	if (locale === "tr") return tr_basecamp_range_custom(inputs)
	if (locale === "zh") return zh_basecamp_range_custom(inputs)
	if (locale === "ja") return ja_basecamp_range_custom(inputs)
	return en_basecamp_range_custom(inputs)
});
