/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ min: NonNullable<unknown>, max: NonNullable<unknown> }} Settings_Display_Name_LengthInputs */

const en_settings_display_name_length = /** @type {(inputs: Settings_Display_Name_LengthInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("en", i?.min, {});
	const max__number = registry.number("en", i?.max, {});return /** @type {LocalizedString} */ (`Use between ${min__number} and ${max__number} characters.`)
};

const es_settings_display_name_length = /** @type {(inputs: Settings_Display_Name_LengthInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("es", i?.min, {});
	const max__number = registry.number("es", i?.max, {});return /** @type {LocalizedString} */ (`Usa entre ${min__number} y ${max__number} caracteres.`)
};

const de_settings_display_name_length = /** @type {(inputs: Settings_Display_Name_LengthInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("de", i?.min, {});
	const max__number = registry.number("de", i?.max, {});return /** @type {LocalizedString} */ (`Verwende ${min__number} bis ${max__number} Zeichen.`)
};

const fr_settings_display_name_length = /** @type {(inputs: Settings_Display_Name_LengthInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("fr", i?.min, {});
	const max__number = registry.number("fr", i?.max, {});return /** @type {LocalizedString} */ (`Utilisez entre ${min__number} et ${max__number} caractères.`)
};

const it_settings_display_name_length = /** @type {(inputs: Settings_Display_Name_LengthInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("it", i?.min, {});
	const max__number = registry.number("it", i?.max, {});return /** @type {LocalizedString} */ (`Usa tra ${min__number} e ${max__number} caratteri.`)
};

const nl_settings_display_name_length = /** @type {(inputs: Settings_Display_Name_LengthInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("nl", i?.min, {});
	const max__number = registry.number("nl", i?.max, {});return /** @type {LocalizedString} */ (`Gebruik tussen ${min__number} en ${max__number} tekens.`)
};

const pl_settings_display_name_length = /** @type {(inputs: Settings_Display_Name_LengthInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("pl", i?.min, {});
	const max__number = registry.number("pl", i?.max, {});return /** @type {LocalizedString} */ (`Użyj od ${min__number} do ${max__number} znaków.`)
};

const pt_settings_display_name_length = /** @type {(inputs: Settings_Display_Name_LengthInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("pt", i?.min, {});
	const max__number = registry.number("pt", i?.max, {});return /** @type {LocalizedString} */ (`Use entre ${min__number} e ${max__number} caracteres.`)
};

const ru_settings_display_name_length = /** @type {(inputs: Settings_Display_Name_LengthInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("ru", i?.min, {});
	const max__number = registry.number("ru", i?.max, {});return /** @type {LocalizedString} */ (`Используйте от ${min__number} до ${max__number} символов.`)
};

const sv_settings_display_name_length = /** @type {(inputs: Settings_Display_Name_LengthInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("sv", i?.min, {});
	const max__number = registry.number("sv", i?.max, {});return /** @type {LocalizedString} */ (`Använd mellan ${min__number} och ${max__number} tecken.`)
};

const tr_settings_display_name_length = /** @type {(inputs: Settings_Display_Name_LengthInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("tr", i?.min, {});
	const max__number = registry.number("tr", i?.max, {});return /** @type {LocalizedString} */ (`${min__number} ile ${max__number} karakter arasında kullan.`)
};

const zh_settings_display_name_length = /** @type {(inputs: Settings_Display_Name_LengthInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("zh", i?.min, {});
	const max__number = registry.number("zh", i?.max, {});return /** @type {LocalizedString} */ (`请使用 ${min__number} 到 ${max__number} 个字符。`)
};

const ja_settings_display_name_length = /** @type {(inputs: Settings_Display_Name_LengthInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("ja", i?.min, {});
	const max__number = registry.number("ja", i?.max, {});return /** @type {LocalizedString} */ (`${min__number}〜${max__number} 文字で入力してください。`)
};

/**
* | output |
* | --- |
* | "Use between {min__number} and {max__number} characters." |
*
* @param {Settings_Display_Name_LengthInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_display_name_length = /** @type {((inputs: Settings_Display_Name_LengthInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Display_Name_LengthInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_display_name_length(inputs)
	if (locale === "de") return de_settings_display_name_length(inputs)
	if (locale === "fr") return fr_settings_display_name_length(inputs)
	if (locale === "it") return it_settings_display_name_length(inputs)
	if (locale === "nl") return nl_settings_display_name_length(inputs)
	if (locale === "pl") return pl_settings_display_name_length(inputs)
	if (locale === "pt") return pt_settings_display_name_length(inputs)
	if (locale === "ru") return ru_settings_display_name_length(inputs)
	if (locale === "sv") return sv_settings_display_name_length(inputs)
	if (locale === "tr") return tr_settings_display_name_length(inputs)
	if (locale === "zh") return zh_settings_display_name_length(inputs)
	if (locale === "ja") return ja_settings_display_name_length(inputs)
	return en_settings_display_name_length(inputs)
});
