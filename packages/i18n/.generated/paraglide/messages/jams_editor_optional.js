/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_OptionalInputs */

const en_jams_editor_optional = /** @type {(inputs: Jams_Editor_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`optional`)
};

const es_jams_editor_optional = /** @type {(inputs: Jams_Editor_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`opcional`)
};

const de_jams_editor_optional = /** @type {(inputs: Jams_Editor_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`optional`)
};

const fr_jams_editor_optional = /** @type {(inputs: Jams_Editor_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`facultatif`)
};

const it_jams_editor_optional = /** @type {(inputs: Jams_Editor_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`facoltativo`)
};

const nl_jams_editor_optional = /** @type {(inputs: Jams_Editor_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`optioneel`)
};

const pl_jams_editor_optional = /** @type {(inputs: Jams_Editor_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`opcjonalne`)
};

const pt_jams_editor_optional = /** @type {(inputs: Jams_Editor_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`opcional`)
};

const ru_jams_editor_optional = /** @type {(inputs: Jams_Editor_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`необязательно`)
};

const sv_jams_editor_optional = /** @type {(inputs: Jams_Editor_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`valfritt`)
};

const tr_jams_editor_optional = /** @type {(inputs: Jams_Editor_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`isteğe bağlı`)
};

const zh_jams_editor_optional = /** @type {(inputs: Jams_Editor_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可选`)
};

const ja_jams_editor_optional = /** @type {(inputs: Jams_Editor_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`任意`)
};

/**
* | output |
* | --- |
* | "optional" |
*
* @param {Jams_Editor_OptionalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_optional = /** @type {((inputs?: Jams_Editor_OptionalInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_OptionalInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_optional(inputs)
	if (locale === "de") return de_jams_editor_optional(inputs)
	if (locale === "fr") return fr_jams_editor_optional(inputs)
	if (locale === "it") return it_jams_editor_optional(inputs)
	if (locale === "nl") return nl_jams_editor_optional(inputs)
	if (locale === "pl") return pl_jams_editor_optional(inputs)
	if (locale === "pt") return pt_jams_editor_optional(inputs)
	if (locale === "ru") return ru_jams_editor_optional(inputs)
	if (locale === "sv") return sv_jams_editor_optional(inputs)
	if (locale === "tr") return tr_jams_editor_optional(inputs)
	if (locale === "zh") return zh_jams_editor_optional(inputs)
	if (locale === "ja") return ja_jams_editor_optional(inputs)
	return en_jams_editor_optional(inputs)
});
