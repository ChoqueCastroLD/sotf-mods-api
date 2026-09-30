/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Settings_Template_Text_ErrorInputs */

const en_settings_template_text_error = /** @type {(inputs: Settings_Template_Text_ErrorInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("en", i?.max, {});return /** @type {LocalizedString} */ (`Write the text (up to ${max__number} characters).`)
};

const es_settings_template_text_error = /** @type {(inputs: Settings_Template_Text_ErrorInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("es", i?.max, {});return /** @type {LocalizedString} */ (`Escribe el texto (hasta ${max__number} caracteres).`)
};

const de_settings_template_text_error = /** @type {(inputs: Settings_Template_Text_ErrorInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("de", i?.max, {});return /** @type {LocalizedString} */ (`Schreib den Text (bis zu ${max__number} Zeichen).`)
};

const fr_settings_template_text_error = /** @type {(inputs: Settings_Template_Text_ErrorInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("fr", i?.max, {});return /** @type {LocalizedString} */ (`Rédigez le texte (jusqu’à ${max__number} caractères).`)
};

const it_settings_template_text_error = /** @type {(inputs: Settings_Template_Text_ErrorInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("it", i?.max, {});return /** @type {LocalizedString} */ (`Scrivi il testo (fino a ${max__number} caratteri).`)
};

const nl_settings_template_text_error = /** @type {(inputs: Settings_Template_Text_ErrorInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("nl", i?.max, {});return /** @type {LocalizedString} */ (`Schrijf de tekst (tot ${max__number} tekens).`)
};

const pl_settings_template_text_error = /** @type {(inputs: Settings_Template_Text_ErrorInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("pl", i?.max, {});return /** @type {LocalizedString} */ (`Wpisz treść (do ${max__number} znaków).`)
};

const pt_settings_template_text_error = /** @type {(inputs: Settings_Template_Text_ErrorInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("pt", i?.max, {});return /** @type {LocalizedString} */ (`Escreva o texto (até ${max__number} caracteres).`)
};

const ru_settings_template_text_error = /** @type {(inputs: Settings_Template_Text_ErrorInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("ru", i?.max, {});return /** @type {LocalizedString} */ (`Напишите текст (до ${max__number} символов).`)
};

const sv_settings_template_text_error = /** @type {(inputs: Settings_Template_Text_ErrorInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("sv", i?.max, {});return /** @type {LocalizedString} */ (`Skriv texten (upp till ${max__number} tecken).`)
};

const tr_settings_template_text_error = /** @type {(inputs: Settings_Template_Text_ErrorInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("tr", i?.max, {});return /** @type {LocalizedString} */ (`Metni yaz (en fazla ${max__number} karakter).`)
};

const zh_settings_template_text_error = /** @type {(inputs: Settings_Template_Text_ErrorInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("zh", i?.max, {});return /** @type {LocalizedString} */ (`请填写内容（最多 ${max__number} 个字符）。`)
};

const ja_settings_template_text_error = /** @type {(inputs: Settings_Template_Text_ErrorInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("ja", i?.max, {});return /** @type {LocalizedString} */ (`本文を入力してください（最大 ${max__number} 文字）。`)
};

/**
* | output |
* | --- |
* | "Write the text (up to {max__number} characters)." |
*
* @param {Settings_Template_Text_ErrorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_template_text_error = /** @type {((inputs: Settings_Template_Text_ErrorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Template_Text_ErrorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_template_text_error(inputs)
	if (locale === "de") return de_settings_template_text_error(inputs)
	if (locale === "fr") return fr_settings_template_text_error(inputs)
	if (locale === "it") return it_settings_template_text_error(inputs)
	if (locale === "nl") return nl_settings_template_text_error(inputs)
	if (locale === "pl") return pl_settings_template_text_error(inputs)
	if (locale === "pt") return pt_settings_template_text_error(inputs)
	if (locale === "ru") return ru_settings_template_text_error(inputs)
	if (locale === "sv") return sv_settings_template_text_error(inputs)
	if (locale === "tr") return tr_settings_template_text_error(inputs)
	if (locale === "zh") return zh_settings_template_text_error(inputs)
	if (locale === "ja") return ja_settings_template_text_error(inputs)
	return en_settings_template_text_error(inputs)
});
