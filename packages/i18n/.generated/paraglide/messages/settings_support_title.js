/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Support_TitleInputs */

const en_settings_support_title = /** @type {(inputs: Settings_Support_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Support links`)
};

const es_settings_support_title = /** @type {(inputs: Settings_Support_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enlaces de apoyo`)
};

const de_settings_support_title = /** @type {(inputs: Settings_Support_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unterstützer-Links`)
};

const fr_settings_support_title = /** @type {(inputs: Settings_Support_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liens de soutien`)
};

const it_settings_support_title = /** @type {(inputs: Settings_Support_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link di supporto`)
};

const nl_settings_support_title = /** @type {(inputs: Settings_Support_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steunlinks`)
};

const pl_settings_support_title = /** @type {(inputs: Settings_Support_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Linki wsparcia`)
};

const pt_settings_support_title = /** @type {(inputs: Settings_Support_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Links de apoio`)
};

const ru_settings_support_title = /** @type {(inputs: Settings_Support_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ссылки поддержки`)
};

const sv_settings_support_title = /** @type {(inputs: Settings_Support_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stödlänkar`)
};

const tr_settings_support_title = /** @type {(inputs: Settings_Support_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Destek bağlantıları`)
};

const zh_settings_support_title = /** @type {(inputs: Settings_Support_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`赞助链接`)
};

const ja_settings_support_title = /** @type {(inputs: Settings_Support_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`支援リンク`)
};

/**
* | output |
* | --- |
* | "Support links" |
*
* @param {Settings_Support_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_support_title = /** @type {((inputs?: Settings_Support_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Support_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_support_title(inputs)
	if (locale === "de") return de_settings_support_title(inputs)
	if (locale === "fr") return fr_settings_support_title(inputs)
	if (locale === "it") return it_settings_support_title(inputs)
	if (locale === "nl") return nl_settings_support_title(inputs)
	if (locale === "pl") return pl_settings_support_title(inputs)
	if (locale === "pt") return pt_settings_support_title(inputs)
	if (locale === "ru") return ru_settings_support_title(inputs)
	if (locale === "sv") return sv_settings_support_title(inputs)
	if (locale === "tr") return tr_settings_support_title(inputs)
	if (locale === "zh") return zh_settings_support_title(inputs)
	if (locale === "ja") return ja_settings_support_title(inputs)
	return en_settings_support_title(inputs)
});
