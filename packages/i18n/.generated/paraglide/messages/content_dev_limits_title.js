/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Dev_Limits_TitleInputs */

const en_content_dev_limits_title = /** @type {(inputs: Content_Dev_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rate limits`)
};

const es_content_dev_limits_title = /** @type {(inputs: Content_Dev_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Límites de uso`)
};

const de_content_dev_limits_title = /** @type {(inputs: Content_Dev_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rate-Limits`)
};

const fr_content_dev_limits_title = /** @type {(inputs: Content_Dev_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limites de débit`)
};

const it_content_dev_limits_title = /** @type {(inputs: Content_Dev_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limiti di utilizzo`)
};

const nl_content_dev_limits_title = /** @type {(inputs: Content_Dev_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rate limits`)
};

const pl_content_dev_limits_title = /** @type {(inputs: Content_Dev_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limity zapytań`)
};

const pt_content_dev_limits_title = /** @type {(inputs: Content_Dev_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limites de uso`)
};

const ru_content_dev_limits_title = /** @type {(inputs: Content_Dev_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ограничения частоты запросов`)
};

const sv_content_dev_limits_title = /** @type {(inputs: Content_Dev_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hastighetsgränser`)
};

const tr_content_dev_limits_title = /** @type {(inputs: Content_Dev_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hız sınırları`)
};

const zh_content_dev_limits_title = /** @type {(inputs: Content_Dev_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`速率限制`)
};

const ja_content_dev_limits_title = /** @type {(inputs: Content_Dev_Limits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レート制限`)
};

/**
* | output |
* | --- |
* | "Rate limits" |
*
* @param {Content_Dev_Limits_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_dev_limits_title = /** @type {((inputs?: Content_Dev_Limits_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Limits_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_dev_limits_title(inputs)
	if (locale === "de") return de_content_dev_limits_title(inputs)
	if (locale === "fr") return fr_content_dev_limits_title(inputs)
	if (locale === "it") return it_content_dev_limits_title(inputs)
	if (locale === "nl") return nl_content_dev_limits_title(inputs)
	if (locale === "pl") return pl_content_dev_limits_title(inputs)
	if (locale === "pt") return pt_content_dev_limits_title(inputs)
	if (locale === "ru") return ru_content_dev_limits_title(inputs)
	if (locale === "sv") return sv_content_dev_limits_title(inputs)
	if (locale === "tr") return tr_content_dev_limits_title(inputs)
	if (locale === "zh") return zh_content_dev_limits_title(inputs)
	if (locale === "ja") return ja_content_dev_limits_title(inputs)
	return en_content_dev_limits_title(inputs)
});
