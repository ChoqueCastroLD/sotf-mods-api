/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Editor_ListInputs */

const en_social_editor_list = /** @type {(inputs: Social_Editor_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`List`)
};

const es_social_editor_list = /** @type {(inputs: Social_Editor_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lista`)
};

const de_social_editor_list = /** @type {(inputs: Social_Editor_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liste`)
};

const fr_social_editor_list = /** @type {(inputs: Social_Editor_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liste`)
};

const it_social_editor_list = /** @type {(inputs: Social_Editor_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elenco`)
};

const nl_social_editor_list = /** @type {(inputs: Social_Editor_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lijst`)
};

const pl_social_editor_list = /** @type {(inputs: Social_Editor_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lista`)
};

const pt_social_editor_list = /** @type {(inputs: Social_Editor_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lista`)
};

const ru_social_editor_list = /** @type {(inputs: Social_Editor_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Список`)
};

const sv_social_editor_list = /** @type {(inputs: Social_Editor_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lista`)
};

const tr_social_editor_list = /** @type {(inputs: Social_Editor_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liste`)
};

const zh_social_editor_list = /** @type {(inputs: Social_Editor_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`列表`)
};

const ja_social_editor_list = /** @type {(inputs: Social_Editor_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リスト`)
};

/**
* | output |
* | --- |
* | "List" |
*
* @param {Social_Editor_ListInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_editor_list = /** @type {((inputs?: Social_Editor_ListInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Editor_ListInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_editor_list(inputs)
	if (locale === "de") return de_social_editor_list(inputs)
	if (locale === "fr") return fr_social_editor_list(inputs)
	if (locale === "it") return it_social_editor_list(inputs)
	if (locale === "nl") return nl_social_editor_list(inputs)
	if (locale === "pl") return pl_social_editor_list(inputs)
	if (locale === "pt") return pt_social_editor_list(inputs)
	if (locale === "ru") return ru_social_editor_list(inputs)
	if (locale === "sv") return sv_social_editor_list(inputs)
	if (locale === "tr") return tr_social_editor_list(inputs)
	if (locale === "zh") return zh_social_editor_list(inputs)
	if (locale === "ja") return ja_social_editor_list(inputs)
	return en_social_editor_list(inputs)
});
