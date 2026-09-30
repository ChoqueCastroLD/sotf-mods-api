/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Editor_CodeInputs */

const en_social_editor_code = /** @type {(inputs: Social_Editor_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code`)
};

const es_social_editor_code = /** @type {(inputs: Social_Editor_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Código`)
};

const de_social_editor_code = /** @type {(inputs: Social_Editor_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code`)
};

const fr_social_editor_code = /** @type {(inputs: Social_Editor_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code`)
};

const it_social_editor_code = /** @type {(inputs: Social_Editor_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Codice`)
};

const nl_social_editor_code = /** @type {(inputs: Social_Editor_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code`)
};

const pl_social_editor_code = /** @type {(inputs: Social_Editor_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kod`)
};

const pt_social_editor_code = /** @type {(inputs: Social_Editor_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Código`)
};

const ru_social_editor_code = /** @type {(inputs: Social_Editor_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Код`)
};

const sv_social_editor_code = /** @type {(inputs: Social_Editor_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kod`)
};

const tr_social_editor_code = /** @type {(inputs: Social_Editor_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kod`)
};

const zh_social_editor_code = /** @type {(inputs: Social_Editor_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`代码`)
};

const ja_social_editor_code = /** @type {(inputs: Social_Editor_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コード`)
};

/**
* | output |
* | --- |
* | "Code" |
*
* @param {Social_Editor_CodeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_editor_code = /** @type {((inputs?: Social_Editor_CodeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Editor_CodeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_editor_code(inputs)
	if (locale === "de") return de_social_editor_code(inputs)
	if (locale === "fr") return fr_social_editor_code(inputs)
	if (locale === "it") return it_social_editor_code(inputs)
	if (locale === "nl") return nl_social_editor_code(inputs)
	if (locale === "pl") return pl_social_editor_code(inputs)
	if (locale === "pt") return pt_social_editor_code(inputs)
	if (locale === "ru") return ru_social_editor_code(inputs)
	if (locale === "sv") return sv_social_editor_code(inputs)
	if (locale === "tr") return tr_social_editor_code(inputs)
	if (locale === "zh") return zh_social_editor_code(inputs)
	if (locale === "ja") return ja_social_editor_code(inputs)
	return en_social_editor_code(inputs)
});
