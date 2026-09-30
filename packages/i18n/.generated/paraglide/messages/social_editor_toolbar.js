/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Editor_ToolbarInputs */

const en_social_editor_toolbar = /** @type {(inputs: Social_Editor_ToolbarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Formatting`)
};

const es_social_editor_toolbar = /** @type {(inputs: Social_Editor_ToolbarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Formato`)
};

const de_social_editor_toolbar = /** @type {(inputs: Social_Editor_ToolbarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Formatierung`)
};

const fr_social_editor_toolbar = /** @type {(inputs: Social_Editor_ToolbarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mise en forme`)
};

const it_social_editor_toolbar = /** @type {(inputs: Social_Editor_ToolbarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Formattazione`)
};

const nl_social_editor_toolbar = /** @type {(inputs: Social_Editor_ToolbarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opmaak`)
};

const pl_social_editor_toolbar = /** @type {(inputs: Social_Editor_ToolbarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Formatowanie`)
};

const pt_social_editor_toolbar = /** @type {(inputs: Social_Editor_ToolbarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Formatação`)
};

const ru_social_editor_toolbar = /** @type {(inputs: Social_Editor_ToolbarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Форматирование`)
};

const sv_social_editor_toolbar = /** @type {(inputs: Social_Editor_ToolbarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Formatering`)
};

const tr_social_editor_toolbar = /** @type {(inputs: Social_Editor_ToolbarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Biçimlendirme`)
};

const zh_social_editor_toolbar = /** @type {(inputs: Social_Editor_ToolbarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`格式`)
};

const ja_social_editor_toolbar = /** @type {(inputs: Social_Editor_ToolbarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`書式`)
};

/**
* | output |
* | --- |
* | "Formatting" |
*
* @param {Social_Editor_ToolbarInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_editor_toolbar = /** @type {((inputs?: Social_Editor_ToolbarInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Editor_ToolbarInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_editor_toolbar(inputs)
	if (locale === "de") return de_social_editor_toolbar(inputs)
	if (locale === "fr") return fr_social_editor_toolbar(inputs)
	if (locale === "it") return it_social_editor_toolbar(inputs)
	if (locale === "nl") return nl_social_editor_toolbar(inputs)
	if (locale === "pl") return pl_social_editor_toolbar(inputs)
	if (locale === "pt") return pt_social_editor_toolbar(inputs)
	if (locale === "ru") return ru_social_editor_toolbar(inputs)
	if (locale === "sv") return sv_social_editor_toolbar(inputs)
	if (locale === "tr") return tr_social_editor_toolbar(inputs)
	if (locale === "zh") return zh_social_editor_toolbar(inputs)
	if (locale === "ja") return ja_social_editor_toolbar(inputs)
	return en_social_editor_toolbar(inputs)
});
