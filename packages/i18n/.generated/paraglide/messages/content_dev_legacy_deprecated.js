/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Dev_Legacy_DeprecatedInputs */

const en_content_dev_legacy_deprecated = /** @type {(inputs: Content_Dev_Legacy_DeprecatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frozen and deprecated`)
};

const es_content_dev_legacy_deprecated = /** @type {(inputs: Content_Dev_Legacy_DeprecatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Congeladas y deprecadas`)
};

const de_content_dev_legacy_deprecated = /** @type {(inputs: Content_Dev_Legacy_DeprecatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eingefroren und abgekündigt`)
};

const fr_content_dev_legacy_deprecated = /** @type {(inputs: Content_Dev_Legacy_DeprecatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gelées et dépréciées`)
};

const it_content_dev_legacy_deprecated = /** @type {(inputs: Content_Dev_Legacy_DeprecatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Congelate e deprecate`)
};

const nl_content_dev_legacy_deprecated = /** @type {(inputs: Content_Dev_Legacy_DeprecatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bevroren en uitgefaseerd`)
};

const pl_content_dev_legacy_deprecated = /** @type {(inputs: Content_Dev_Legacy_DeprecatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zamrożone i wycofywane`)
};

const pt_content_dev_legacy_deprecated = /** @type {(inputs: Content_Dev_Legacy_DeprecatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Congeladas e descontinuadas`)
};

const ru_content_dev_legacy_deprecated = /** @type {(inputs: Content_Dev_Legacy_DeprecatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Заморожены и устарели`)
};

const sv_content_dev_legacy_deprecated = /** @type {(inputs: Content_Dev_Legacy_DeprecatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frysta och utfasade`)
};

const tr_content_dev_legacy_deprecated = /** @type {(inputs: Content_Dev_Legacy_DeprecatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dondurulmuş ve kullanımdan kalkıyor`)
};

const zh_content_dev_legacy_deprecated = /** @type {(inputs: Content_Dev_Legacy_DeprecatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已冻结并弃用`)
};

const ja_content_dev_legacy_deprecated = /** @type {(inputs: Content_Dev_Legacy_DeprecatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`凍結・非推奨`)
};

/**
* | output |
* | --- |
* | "Frozen and deprecated" |
*
* @param {Content_Dev_Legacy_DeprecatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_dev_legacy_deprecated = /** @type {((inputs?: Content_Dev_Legacy_DeprecatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Legacy_DeprecatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_dev_legacy_deprecated(inputs)
	if (locale === "de") return de_content_dev_legacy_deprecated(inputs)
	if (locale === "fr") return fr_content_dev_legacy_deprecated(inputs)
	if (locale === "it") return it_content_dev_legacy_deprecated(inputs)
	if (locale === "nl") return nl_content_dev_legacy_deprecated(inputs)
	if (locale === "pl") return pl_content_dev_legacy_deprecated(inputs)
	if (locale === "pt") return pt_content_dev_legacy_deprecated(inputs)
	if (locale === "ru") return ru_content_dev_legacy_deprecated(inputs)
	if (locale === "sv") return sv_content_dev_legacy_deprecated(inputs)
	if (locale === "tr") return tr_content_dev_legacy_deprecated(inputs)
	if (locale === "zh") return zh_content_dev_legacy_deprecated(inputs)
	if (locale === "ja") return ja_content_dev_legacy_deprecated(inputs)
	return en_content_dev_legacy_deprecated(inputs)
});
