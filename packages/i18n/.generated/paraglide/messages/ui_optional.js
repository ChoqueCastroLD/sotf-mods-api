/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_OptionalInputs */

const en_ui_optional = /** @type {(inputs: Ui_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Optional`)
};

const es_ui_optional = /** @type {(inputs: Ui_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opcional`)
};

const de_ui_optional = /** @type {(inputs: Ui_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Optional`)
};

const fr_ui_optional = /** @type {(inputs: Ui_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Facultatif`)
};

const it_ui_optional = /** @type {(inputs: Ui_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Facoltativo`)
};

const nl_ui_optional = /** @type {(inputs: Ui_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Optioneel`)
};

const pl_ui_optional = /** @type {(inputs: Ui_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opcjonalnie`)
};

const pt_ui_optional = /** @type {(inputs: Ui_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opcional`)
};

const ru_ui_optional = /** @type {(inputs: Ui_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Необязательно`)
};

const sv_ui_optional = /** @type {(inputs: Ui_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valfritt`)
};

const tr_ui_optional = /** @type {(inputs: Ui_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İsteğe bağlı`)
};

const zh_ui_optional = /** @type {(inputs: Ui_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可选`)
};

const ja_ui_optional = /** @type {(inputs: Ui_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`任意`)
};

/**
* | output |
* | --- |
* | "Optional" |
*
* @param {Ui_OptionalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_optional = /** @type {((inputs?: Ui_OptionalInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_OptionalInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_optional(inputs)
	if (locale === "de") return de_ui_optional(inputs)
	if (locale === "fr") return fr_ui_optional(inputs)
	if (locale === "it") return it_ui_optional(inputs)
	if (locale === "nl") return nl_ui_optional(inputs)
	if (locale === "pl") return pl_ui_optional(inputs)
	if (locale === "pt") return pt_ui_optional(inputs)
	if (locale === "ru") return ru_ui_optional(inputs)
	if (locale === "sv") return sv_ui_optional(inputs)
	if (locale === "tr") return tr_ui_optional(inputs)
	if (locale === "zh") return zh_ui_optional(inputs)
	if (locale === "ja") return ja_ui_optional(inputs)
	return en_ui_optional(inputs)
});
