/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_OptionalInputs */

const en_upload_optional = /** @type {(inputs: Upload_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Optional`)
};

const es_upload_optional = /** @type {(inputs: Upload_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opcional`)
};

const de_upload_optional = /** @type {(inputs: Upload_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Optional`)
};

const fr_upload_optional = /** @type {(inputs: Upload_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Facultatif`)
};

const it_upload_optional = /** @type {(inputs: Upload_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Facoltativo`)
};

const nl_upload_optional = /** @type {(inputs: Upload_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Optioneel`)
};

const pl_upload_optional = /** @type {(inputs: Upload_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opcjonalne`)
};

const pt_upload_optional = /** @type {(inputs: Upload_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opcional`)
};

const ru_upload_optional = /** @type {(inputs: Upload_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Необязательно`)
};

const sv_upload_optional = /** @type {(inputs: Upload_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valfritt`)
};

const tr_upload_optional = /** @type {(inputs: Upload_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İsteğe bağlı`)
};

const zh_upload_optional = /** @type {(inputs: Upload_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可选`)
};

const ja_upload_optional = /** @type {(inputs: Upload_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`任意`)
};

/**
* | output |
* | --- |
* | "Optional" |
*
* @param {Upload_OptionalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_optional = /** @type {((inputs?: Upload_OptionalInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_OptionalInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_optional(inputs)
	if (locale === "de") return de_upload_optional(inputs)
	if (locale === "fr") return fr_upload_optional(inputs)
	if (locale === "it") return it_upload_optional(inputs)
	if (locale === "nl") return nl_upload_optional(inputs)
	if (locale === "pl") return pl_upload_optional(inputs)
	if (locale === "pt") return pt_upload_optional(inputs)
	if (locale === "ru") return ru_upload_optional(inputs)
	if (locale === "sv") return sv_upload_optional(inputs)
	if (locale === "tr") return tr_upload_optional(inputs)
	if (locale === "zh") return zh_upload_optional(inputs)
	if (locale === "ja") return ja_upload_optional(inputs)
	return en_upload_optional(inputs)
});
