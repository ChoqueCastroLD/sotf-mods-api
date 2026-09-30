/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Dev_Link_Legacy_TitleInputs */

const en_content_dev_link_legacy_title = /** @type {(inputs: Content_Dev_Link_Legacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legacy API`)
};

const es_content_dev_link_legacy_title = /** @type {(inputs: Content_Dev_Link_Legacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API legacy`)
};

const de_content_dev_link_legacy_title = /** @type {(inputs: Content_Dev_Link_Legacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legacy-API`)
};

const fr_content_dev_link_legacy_title = /** @type {(inputs: Content_Dev_Link_Legacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API historique`)
};

const it_content_dev_link_legacy_title = /** @type {(inputs: Content_Dev_Link_Legacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API legacy`)
};

const nl_content_dev_link_legacy_title = /** @type {(inputs: Content_Dev_Link_Legacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legacy-API`)
};

const pl_content_dev_link_legacy_title = /** @type {(inputs: Content_Dev_Link_Legacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Starsze API`)
};

const pt_content_dev_link_legacy_title = /** @type {(inputs: Content_Dev_Link_Legacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API legada`)
};

const ru_content_dev_link_legacy_title = /** @type {(inputs: Content_Dev_Link_Legacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Старый API`)
};

const sv_content_dev_link_legacy_title = /** @type {(inputs: Content_Dev_Link_Legacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Äldre API`)
};

const tr_content_dev_link_legacy_title = /** @type {(inputs: Content_Dev_Link_Legacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eski API`)
};

const zh_content_dev_link_legacy_title = /** @type {(inputs: Content_Dev_Link_Legacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`旧版 API`)
};

const ja_content_dev_link_legacy_title = /** @type {(inputs: Content_Dev_Link_Legacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`旧 API`)
};

/**
* | output |
* | --- |
* | "Legacy API" |
*
* @param {Content_Dev_Link_Legacy_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_dev_link_legacy_title = /** @type {((inputs?: Content_Dev_Link_Legacy_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Link_Legacy_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_dev_link_legacy_title(inputs)
	if (locale === "de") return de_content_dev_link_legacy_title(inputs)
	if (locale === "fr") return fr_content_dev_link_legacy_title(inputs)
	if (locale === "it") return it_content_dev_link_legacy_title(inputs)
	if (locale === "nl") return nl_content_dev_link_legacy_title(inputs)
	if (locale === "pl") return pl_content_dev_link_legacy_title(inputs)
	if (locale === "pt") return pt_content_dev_link_legacy_title(inputs)
	if (locale === "ru") return ru_content_dev_link_legacy_title(inputs)
	if (locale === "sv") return sv_content_dev_link_legacy_title(inputs)
	if (locale === "tr") return tr_content_dev_link_legacy_title(inputs)
	if (locale === "zh") return zh_content_dev_link_legacy_title(inputs)
	if (locale === "ja") return ja_content_dev_link_legacy_title(inputs)
	return en_content_dev_link_legacy_title(inputs)
});
