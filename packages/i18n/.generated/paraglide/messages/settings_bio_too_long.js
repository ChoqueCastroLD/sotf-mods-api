/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Settings_Bio_Too_LongInputs */

const en_settings_bio_too_long = /** @type {(inputs: Settings_Bio_Too_LongInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("en", i?.max, {});return /** @type {LocalizedString} */ (`Keep your bio under ${max__number} characters.`)
};

const es_settings_bio_too_long = /** @type {(inputs: Settings_Bio_Too_LongInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("es", i?.max, {});return /** @type {LocalizedString} */ (`La biografía no puede superar ${max__number} caracteres.`)
};

const de_settings_bio_too_long = /** @type {(inputs: Settings_Bio_Too_LongInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("de", i?.max, {});return /** @type {LocalizedString} */ (`Halte deine Bio unter ${max__number} Zeichen.`)
};

const fr_settings_bio_too_long = /** @type {(inputs: Settings_Bio_Too_LongInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("fr", i?.max, {});return /** @type {LocalizedString} */ (`Votre bio doit faire moins de ${max__number} caractères.`)
};

const it_settings_bio_too_long = /** @type {(inputs: Settings_Bio_Too_LongInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("it", i?.max, {});return /** @type {LocalizedString} */ (`La bio deve restare sotto i ${max__number} caratteri.`)
};

const nl_settings_bio_too_long = /** @type {(inputs: Settings_Bio_Too_LongInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("nl", i?.max, {});return /** @type {LocalizedString} */ (`Houd je bio onder de ${max__number} tekens.`)
};

const pl_settings_bio_too_long = /** @type {(inputs: Settings_Bio_Too_LongInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("pl", i?.max, {});return /** @type {LocalizedString} */ (`Bio może mieć najwyżej ${max__number} znaków.`)
};

const pt_settings_bio_too_long = /** @type {(inputs: Settings_Bio_Too_LongInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("pt", i?.max, {});return /** @type {LocalizedString} */ (`Mantenha sua bio com menos de ${max__number} caracteres.`)
};

const ru_settings_bio_too_long = /** @type {(inputs: Settings_Bio_Too_LongInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("ru", i?.max, {});return /** @type {LocalizedString} */ (`Текст «О себе» должен быть короче ${max__number} символов.`)
};

const sv_settings_bio_too_long = /** @type {(inputs: Settings_Bio_Too_LongInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("sv", i?.max, {});return /** @type {LocalizedString} */ (`Håll din bio under ${max__number} tecken.`)
};

const tr_settings_bio_too_long = /** @type {(inputs: Settings_Bio_Too_LongInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("tr", i?.max, {});return /** @type {LocalizedString} */ (`Biyografin ${max__number} karakterin altında olsun.`)
};

const zh_settings_bio_too_long = /** @type {(inputs: Settings_Bio_Too_LongInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("zh", i?.max, {});return /** @type {LocalizedString} */ (`简介请控制在 ${max__number} 个字符以内。`)
};

const ja_settings_bio_too_long = /** @type {(inputs: Settings_Bio_Too_LongInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("ja", i?.max, {});return /** @type {LocalizedString} */ (`自己紹介は ${max__number} 文字以内にしてください。`)
};

/**
* | output |
* | --- |
* | "Keep your bio under {max__number} characters." |
*
* @param {Settings_Bio_Too_LongInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_bio_too_long = /** @type {((inputs: Settings_Bio_Too_LongInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Bio_Too_LongInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_bio_too_long(inputs)
	if (locale === "de") return de_settings_bio_too_long(inputs)
	if (locale === "fr") return fr_settings_bio_too_long(inputs)
	if (locale === "it") return it_settings_bio_too_long(inputs)
	if (locale === "nl") return nl_settings_bio_too_long(inputs)
	if (locale === "pl") return pl_settings_bio_too_long(inputs)
	if (locale === "pt") return pt_settings_bio_too_long(inputs)
	if (locale === "ru") return ru_settings_bio_too_long(inputs)
	if (locale === "sv") return sv_settings_bio_too_long(inputs)
	if (locale === "tr") return tr_settings_bio_too_long(inputs)
	if (locale === "zh") return zh_settings_bio_too_long(inputs)
	if (locale === "ja") return ja_settings_bio_too_long(inputs)
	return en_settings_bio_too_long(inputs)
});
