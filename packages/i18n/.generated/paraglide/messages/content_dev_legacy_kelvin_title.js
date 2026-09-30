/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Dev_Legacy_Kelvin_TitleInputs */

const en_content_dev_legacy_kelvin_title = /** @type {(inputs: Content_Dev_Legacy_Kelvin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek fallback`)
};

const es_content_dev_legacy_kelvin_title = /** @type {(inputs: Content_Dev_Legacy_Kelvin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Respaldo de KelvinSeek`)
};

const de_content_dev_legacy_kelvin_title = /** @type {(inputs: Content_Dev_Legacy_Kelvin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek-Fallback`)
};

const fr_content_dev_legacy_kelvin_title = /** @type {(inputs: Content_Dev_Legacy_Kelvin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Repli de KelvinSeek`)
};

const it_content_dev_legacy_kelvin_title = /** @type {(inputs: Content_Dev_Legacy_Kelvin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fallback di KelvinSeek`)
};

const nl_content_dev_legacy_kelvin_title = /** @type {(inputs: Content_Dev_Legacy_Kelvin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek-fallback`)
};

const pl_content_dev_legacy_kelvin_title = /** @type {(inputs: Content_Dev_Legacy_Kelvin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tryb zastępczy KelvinSeek`)
};

const pt_content_dev_legacy_kelvin_title = /** @type {(inputs: Content_Dev_Legacy_Kelvin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alternativa do KelvinSeek`)
};

const ru_content_dev_legacy_kelvin_title = /** @type {(inputs: Content_Dev_Legacy_Kelvin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Резервный ответ KelvinSeek`)
};

const sv_content_dev_legacy_kelvin_title = /** @type {(inputs: Content_Dev_Legacy_Kelvin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek-reservsvar`)
};

const tr_content_dev_legacy_kelvin_title = /** @type {(inputs: Content_Dev_Legacy_Kelvin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek yedek yanıtı`)
};

const zh_content_dev_legacy_kelvin_title = /** @type {(inputs: Content_Dev_Legacy_Kelvin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek 回退`)
};

const ja_content_dev_legacy_kelvin_title = /** @type {(inputs: Content_Dev_Legacy_Kelvin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeekのフォールバック`)
};

/**
* | output |
* | --- |
* | "KelvinSeek fallback" |
*
* @param {Content_Dev_Legacy_Kelvin_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_dev_legacy_kelvin_title = /** @type {((inputs?: Content_Dev_Legacy_Kelvin_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Legacy_Kelvin_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_dev_legacy_kelvin_title(inputs)
	if (locale === "de") return de_content_dev_legacy_kelvin_title(inputs)
	if (locale === "fr") return fr_content_dev_legacy_kelvin_title(inputs)
	if (locale === "it") return it_content_dev_legacy_kelvin_title(inputs)
	if (locale === "nl") return nl_content_dev_legacy_kelvin_title(inputs)
	if (locale === "pl") return pl_content_dev_legacy_kelvin_title(inputs)
	if (locale === "pt") return pt_content_dev_legacy_kelvin_title(inputs)
	if (locale === "ru") return ru_content_dev_legacy_kelvin_title(inputs)
	if (locale === "sv") return sv_content_dev_legacy_kelvin_title(inputs)
	if (locale === "tr") return tr_content_dev_legacy_kelvin_title(inputs)
	if (locale === "zh") return zh_content_dev_legacy_kelvin_title(inputs)
	if (locale === "ja") return ja_content_dev_legacy_kelvin_title(inputs)
	return en_content_dev_legacy_kelvin_title(inputs)
});
