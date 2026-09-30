/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ min: NonNullable<unknown> }} Settings_Password_ShortInputs */

const en_settings_password_short = /** @type {(inputs: Settings_Password_ShortInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("en", i?.min, {});return /** @type {LocalizedString} */ (`Use at least ${min__number} characters.`)
};

const es_settings_password_short = /** @type {(inputs: Settings_Password_ShortInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("es", i?.min, {});return /** @type {LocalizedString} */ (`Usa al menos ${min__number} caracteres.`)
};

const de_settings_password_short = /** @type {(inputs: Settings_Password_ShortInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("de", i?.min, {});return /** @type {LocalizedString} */ (`Verwende mindestens ${min__number} Zeichen.`)
};

const fr_settings_password_short = /** @type {(inputs: Settings_Password_ShortInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("fr", i?.min, {});return /** @type {LocalizedString} */ (`Utilisez au moins ${min__number} caractères.`)
};

const it_settings_password_short = /** @type {(inputs: Settings_Password_ShortInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("it", i?.min, {});return /** @type {LocalizedString} */ (`Usa almeno ${min__number} caratteri.`)
};

const nl_settings_password_short = /** @type {(inputs: Settings_Password_ShortInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("nl", i?.min, {});return /** @type {LocalizedString} */ (`Gebruik minstens ${min__number} tekens.`)
};

const pl_settings_password_short = /** @type {(inputs: Settings_Password_ShortInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("pl", i?.min, {});return /** @type {LocalizedString} */ (`Użyj co najmniej ${min__number} znaków.`)
};

const pt_settings_password_short = /** @type {(inputs: Settings_Password_ShortInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("pt", i?.min, {});return /** @type {LocalizedString} */ (`Use pelo menos ${min__number} caracteres.`)
};

const ru_settings_password_short = /** @type {(inputs: Settings_Password_ShortInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("ru", i?.min, {});return /** @type {LocalizedString} */ (`Используйте не менее ${min__number} символов.`)
};

const sv_settings_password_short = /** @type {(inputs: Settings_Password_ShortInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("sv", i?.min, {});return /** @type {LocalizedString} */ (`Använd minst ${min__number} tecken.`)
};

const tr_settings_password_short = /** @type {(inputs: Settings_Password_ShortInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("tr", i?.min, {});return /** @type {LocalizedString} */ (`En az ${min__number} karakter kullan.`)
};

const zh_settings_password_short = /** @type {(inputs: Settings_Password_ShortInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("zh", i?.min, {});return /** @type {LocalizedString} */ (`请至少使用 ${min__number} 个字符。`)
};

const ja_settings_password_short = /** @type {(inputs: Settings_Password_ShortInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("ja", i?.min, {});return /** @type {LocalizedString} */ (`${min__number} 文字以上にしてください。`)
};

/**
* | output |
* | --- |
* | "Use at least {min__number} characters." |
*
* @param {Settings_Password_ShortInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_password_short = /** @type {((inputs: Settings_Password_ShortInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Password_ShortInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_password_short(inputs)
	if (locale === "de") return de_settings_password_short(inputs)
	if (locale === "fr") return fr_settings_password_short(inputs)
	if (locale === "it") return it_settings_password_short(inputs)
	if (locale === "nl") return nl_settings_password_short(inputs)
	if (locale === "pl") return pl_settings_password_short(inputs)
	if (locale === "pt") return pt_settings_password_short(inputs)
	if (locale === "ru") return ru_settings_password_short(inputs)
	if (locale === "sv") return sv_settings_password_short(inputs)
	if (locale === "tr") return tr_settings_password_short(inputs)
	if (locale === "zh") return zh_settings_password_short(inputs)
	if (locale === "ja") return ja_settings_password_short(inputs)
	return en_settings_password_short(inputs)
});
