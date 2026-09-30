/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_About_TitleInputs */

const en_settings_about_title = /** @type {(inputs: Settings_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`About you`)
};

const es_settings_about_title = /** @type {(inputs: Settings_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sobre ti`)
};

const de_settings_about_title = /** @type {(inputs: Settings_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Über dich`)
};

const fr_settings_about_title = /** @type {(inputs: Settings_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`À propos de vous`)
};

const it_settings_about_title = /** @type {(inputs: Settings_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Su di te`)
};

const nl_settings_about_title = /** @type {(inputs: Settings_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Over jou`)
};

const pl_settings_about_title = /** @type {(inputs: Settings_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O tobie`)
};

const pt_settings_about_title = /** @type {(inputs: Settings_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sobre você`)
};

const ru_settings_about_title = /** @type {(inputs: Settings_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`О вас`)
};

const sv_settings_about_title = /** @type {(inputs: Settings_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Om dig`)
};

const tr_settings_about_title = /** @type {(inputs: Settings_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hakkında`)
};

const zh_settings_about_title = /** @type {(inputs: Settings_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关于你`)
};

const ja_settings_about_title = /** @type {(inputs: Settings_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたについて`)
};

/**
* | output |
* | --- |
* | "About you" |
*
* @param {Settings_About_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_about_title = /** @type {((inputs?: Settings_About_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_About_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_about_title(inputs)
	if (locale === "de") return de_settings_about_title(inputs)
	if (locale === "fr") return fr_settings_about_title(inputs)
	if (locale === "it") return it_settings_about_title(inputs)
	if (locale === "nl") return nl_settings_about_title(inputs)
	if (locale === "pl") return pl_settings_about_title(inputs)
	if (locale === "pt") return pt_settings_about_title(inputs)
	if (locale === "ru") return ru_settings_about_title(inputs)
	if (locale === "sv") return sv_settings_about_title(inputs)
	if (locale === "tr") return tr_settings_about_title(inputs)
	if (locale === "zh") return zh_settings_about_title(inputs)
	if (locale === "ja") return ja_settings_about_title(inputs)
	return en_settings_about_title(inputs)
});
