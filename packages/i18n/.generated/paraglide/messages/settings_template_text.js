/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Template_TextInputs */

const en_settings_template_text = /** @type {(inputs: Settings_Template_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Text`)
};

const es_settings_template_text = /** @type {(inputs: Settings_Template_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Texto`)
};

const de_settings_template_text = /** @type {(inputs: Settings_Template_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Text`)
};

const fr_settings_template_text = /** @type {(inputs: Settings_Template_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Texte`)
};

const it_settings_template_text = /** @type {(inputs: Settings_Template_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Testo`)
};

const nl_settings_template_text = /** @type {(inputs: Settings_Template_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tekst`)
};

const pl_settings_template_text = /** @type {(inputs: Settings_Template_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Treść`)
};

const pt_settings_template_text = /** @type {(inputs: Settings_Template_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Texto`)
};

const ru_settings_template_text = /** @type {(inputs: Settings_Template_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Текст`)
};

const sv_settings_template_text = /** @type {(inputs: Settings_Template_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Text`)
};

const tr_settings_template_text = /** @type {(inputs: Settings_Template_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Metin`)
};

const zh_settings_template_text = /** @type {(inputs: Settings_Template_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`内容`)
};

const ja_settings_template_text = /** @type {(inputs: Settings_Template_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`本文`)
};

/**
* | output |
* | --- |
* | "Text" |
*
* @param {Settings_Template_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_template_text = /** @type {((inputs?: Settings_Template_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Template_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_template_text(inputs)
	if (locale === "de") return de_settings_template_text(inputs)
	if (locale === "fr") return fr_settings_template_text(inputs)
	if (locale === "it") return it_settings_template_text(inputs)
	if (locale === "nl") return nl_settings_template_text(inputs)
	if (locale === "pl") return pl_settings_template_text(inputs)
	if (locale === "pt") return pt_settings_template_text(inputs)
	if (locale === "ru") return ru_settings_template_text(inputs)
	if (locale === "sv") return sv_settings_template_text(inputs)
	if (locale === "tr") return tr_settings_template_text(inputs)
	if (locale === "zh") return zh_settings_template_text(inputs)
	if (locale === "ja") return ja_settings_template_text(inputs)
	return en_settings_template_text(inputs)
});
