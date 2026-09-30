/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_About_Disclaimer_TitleInputs */

const en_content_about_disclaimer_title = /** @type {(inputs: Content_About_Disclaimer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unofficial fan community`)
};

const es_content_about_disclaimer_title = /** @type {(inputs: Content_About_Disclaimer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comunidad de fans no oficial`)
};

const de_content_about_disclaimer_title = /** @type {(inputs: Content_About_Disclaimer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inoffizielle Fan-Community`)
};

const fr_content_about_disclaimer_title = /** @type {(inputs: Content_About_Disclaimer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Communauté de fans non officielle`)
};

const it_content_about_disclaimer_title = /** @type {(inputs: Content_About_Disclaimer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comunità di fan non ufficiale`)
};

const nl_content_about_disclaimer_title = /** @type {(inputs: Content_About_Disclaimer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onofficiële fancommunity`)
};

const pl_content_about_disclaimer_title = /** @type {(inputs: Content_About_Disclaimer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieoficjalna społeczność fanów`)
};

const pt_content_about_disclaimer_title = /** @type {(inputs: Content_About_Disclaimer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comunidade de fãs não oficial`)
};

const ru_content_about_disclaimer_title = /** @type {(inputs: Content_About_Disclaimer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Неофициальное фан-сообщество`)
};

const sv_content_about_disclaimer_title = /** @type {(inputs: Content_About_Disclaimer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inofficiell fangemenskap`)
};

const tr_content_about_disclaimer_title = /** @type {(inputs: Content_About_Disclaimer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resmî olmayan hayran topluluğu`)
};

const zh_content_about_disclaimer_title = /** @type {(inputs: Content_About_Disclaimer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`非官方粉丝社区`)
};

const ja_content_about_disclaimer_title = /** @type {(inputs: Content_About_Disclaimer_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`非公式のファンコミュニティ`)
};

/**
* | output |
* | --- |
* | "Unofficial fan community" |
*
* @param {Content_About_Disclaimer_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_about_disclaimer_title = /** @type {((inputs?: Content_About_Disclaimer_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_About_Disclaimer_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_about_disclaimer_title(inputs)
	if (locale === "de") return de_content_about_disclaimer_title(inputs)
	if (locale === "fr") return fr_content_about_disclaimer_title(inputs)
	if (locale === "it") return it_content_about_disclaimer_title(inputs)
	if (locale === "nl") return nl_content_about_disclaimer_title(inputs)
	if (locale === "pl") return pl_content_about_disclaimer_title(inputs)
	if (locale === "pt") return pt_content_about_disclaimer_title(inputs)
	if (locale === "ru") return ru_content_about_disclaimer_title(inputs)
	if (locale === "sv") return sv_content_about_disclaimer_title(inputs)
	if (locale === "tr") return tr_content_about_disclaimer_title(inputs)
	if (locale === "zh") return zh_content_about_disclaimer_title(inputs)
	if (locale === "ja") return ja_content_about_disclaimer_title(inputs)
	return en_content_about_disclaimer_title(inputs)
});
