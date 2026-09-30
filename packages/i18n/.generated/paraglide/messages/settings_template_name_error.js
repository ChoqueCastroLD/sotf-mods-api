/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Settings_Template_Name_ErrorInputs */

const en_settings_template_name_error = /** @type {(inputs: Settings_Template_Name_ErrorInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("en", i?.max, {});return /** @type {LocalizedString} */ (`Give it a name (up to ${max__number} characters).`)
};

const es_settings_template_name_error = /** @type {(inputs: Settings_Template_Name_ErrorInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("es", i?.max, {});return /** @type {LocalizedString} */ (`Ponle un nombre (hasta ${max__number} caracteres).`)
};

const de_settings_template_name_error = /** @type {(inputs: Settings_Template_Name_ErrorInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("de", i?.max, {});return /** @type {LocalizedString} */ (`Gib ihr einen Namen (bis zu ${max__number} Zeichen).`)
};

const fr_settings_template_name_error = /** @type {(inputs: Settings_Template_Name_ErrorInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("fr", i?.max, {});return /** @type {LocalizedString} */ (`Donnez-lui un nom (jusqu’à ${max__number} caractères).`)
};

const it_settings_template_name_error = /** @type {(inputs: Settings_Template_Name_ErrorInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("it", i?.max, {});return /** @type {LocalizedString} */ (`Dagli un nome (fino a ${max__number} caratteri).`)
};

const nl_settings_template_name_error = /** @type {(inputs: Settings_Template_Name_ErrorInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("nl", i?.max, {});return /** @type {LocalizedString} */ (`Geef het een naam (tot ${max__number} tekens).`)
};

const pl_settings_template_name_error = /** @type {(inputs: Settings_Template_Name_ErrorInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("pl", i?.max, {});return /** @type {LocalizedString} */ (`Nadaj mu nazwę (do ${max__number} znaków).`)
};

const pt_settings_template_name_error = /** @type {(inputs: Settings_Template_Name_ErrorInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("pt", i?.max, {});return /** @type {LocalizedString} */ (`Dê um nome (até ${max__number} caracteres).`)
};

const ru_settings_template_name_error = /** @type {(inputs: Settings_Template_Name_ErrorInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("ru", i?.max, {});return /** @type {LocalizedString} */ (`Дайте ему название (до ${max__number} символов).`)
};

const sv_settings_template_name_error = /** @type {(inputs: Settings_Template_Name_ErrorInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("sv", i?.max, {});return /** @type {LocalizedString} */ (`Ge den ett namn (upp till ${max__number} tecken).`)
};

const tr_settings_template_name_error = /** @type {(inputs: Settings_Template_Name_ErrorInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("tr", i?.max, {});return /** @type {LocalizedString} */ (`Bir ad ver (en fazla ${max__number} karakter).`)
};

const zh_settings_template_name_error = /** @type {(inputs: Settings_Template_Name_ErrorInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("zh", i?.max, {});return /** @type {LocalizedString} */ (`请起个名字（最多 ${max__number} 个字符）。`)
};

const ja_settings_template_name_error = /** @type {(inputs: Settings_Template_Name_ErrorInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("ja", i?.max, {});return /** @type {LocalizedString} */ (`名前を入力してください（最大 ${max__number} 文字）。`)
};

/**
* | output |
* | --- |
* | "Give it a name (up to {max__number} characters)." |
*
* @param {Settings_Template_Name_ErrorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_template_name_error = /** @type {((inputs: Settings_Template_Name_ErrorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Template_Name_ErrorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_template_name_error(inputs)
	if (locale === "de") return de_settings_template_name_error(inputs)
	if (locale === "fr") return fr_settings_template_name_error(inputs)
	if (locale === "it") return it_settings_template_name_error(inputs)
	if (locale === "nl") return nl_settings_template_name_error(inputs)
	if (locale === "pl") return pl_settings_template_name_error(inputs)
	if (locale === "pt") return pt_settings_template_name_error(inputs)
	if (locale === "ru") return ru_settings_template_name_error(inputs)
	if (locale === "sv") return sv_settings_template_name_error(inputs)
	if (locale === "tr") return tr_settings_template_name_error(inputs)
	if (locale === "zh") return zh_settings_template_name_error(inputs)
	if (locale === "ja") return ja_settings_template_name_error(inputs)
	return en_settings_template_name_error(inputs)
});
