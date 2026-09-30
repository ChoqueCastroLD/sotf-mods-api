/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Install_Kit_TitleInputs */

const en_content_install_kit_title = /** @type {(inputs: Content_Install_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Starter Kit`)
};

const es_content_install_kit_title = /** @type {(inputs: Content_Install_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit de inicio`)
};

const de_content_install_kit_title = /** @type {(inputs: Content_Install_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Starter-Kit`)
};

const fr_content_install_kit_title = /** @type {(inputs: Content_Install_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit de départ`)
};

const it_content_install_kit_title = /** @type {(inputs: Content_Install_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit iniziale`)
};

const nl_content_install_kit_title = /** @type {(inputs: Content_Install_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Starterskit`)
};

const pl_content_install_kit_title = /** @type {(inputs: Content_Install_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit startowy`)
};

const pt_content_install_kit_title = /** @type {(inputs: Content_Install_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit inicial`)
};

const ru_content_install_kit_title = /** @type {(inputs: Content_Install_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Стартовый кит`)
};

const sv_content_install_kit_title = /** @type {(inputs: Content_Install_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Startkit`)
};

const tr_content_install_kit_title = /** @type {(inputs: Content_Install_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başlangıç Kiti`)
};

const zh_content_install_kit_title = /** @type {(inputs: Content_Install_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新手 Kit`)
};

const ja_content_install_kit_title = /** @type {(inputs: Content_Install_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スターター Kit`)
};

/**
* | output |
* | --- |
* | "Starter Kit" |
*
* @param {Content_Install_Kit_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_install_kit_title = /** @type {((inputs?: Content_Install_Kit_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Install_Kit_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_install_kit_title(inputs)
	if (locale === "de") return de_content_install_kit_title(inputs)
	if (locale === "fr") return fr_content_install_kit_title(inputs)
	if (locale === "it") return it_content_install_kit_title(inputs)
	if (locale === "nl") return nl_content_install_kit_title(inputs)
	if (locale === "pl") return pl_content_install_kit_title(inputs)
	if (locale === "pt") return pt_content_install_kit_title(inputs)
	if (locale === "ru") return ru_content_install_kit_title(inputs)
	if (locale === "sv") return sv_content_install_kit_title(inputs)
	if (locale === "tr") return tr_content_install_kit_title(inputs)
	if (locale === "zh") return zh_content_install_kit_title(inputs)
	if (locale === "ja") return ja_content_install_kit_title(inputs)
	return en_content_install_kit_title(inputs)
});
