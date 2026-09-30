/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Editor_ModeInputs */

const en_social_editor_mode = /** @type {(inputs: Social_Editor_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editor view`)
};

const es_social_editor_mode = /** @type {(inputs: Social_Editor_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vista del editor`)
};

const de_social_editor_mode = /** @type {(inputs: Social_Editor_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editoransicht`)
};

const fr_social_editor_mode = /** @type {(inputs: Social_Editor_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vue de l’éditeur`)
};

const it_social_editor_mode = /** @type {(inputs: Social_Editor_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vista dell’editor`)
};

const nl_social_editor_mode = /** @type {(inputs: Social_Editor_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editorweergave`)
};

const pl_social_editor_mode = /** @type {(inputs: Social_Editor_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Widok edytora`)
};

const pt_social_editor_mode = /** @type {(inputs: Social_Editor_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visualização do editor`)
};

const ru_social_editor_mode = /** @type {(inputs: Social_Editor_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Режим редактора`)
};

const sv_social_editor_mode = /** @type {(inputs: Social_Editor_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redigerarvy`)
};

const tr_social_editor_mode = /** @type {(inputs: Social_Editor_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Düzenleyici görünümü`)
};

const zh_social_editor_mode = /** @type {(inputs: Social_Editor_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑器视图`)
};

const ja_social_editor_mode = /** @type {(inputs: Social_Editor_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エディターの表示`)
};

/**
* | output |
* | --- |
* | "Editor view" |
*
* @param {Social_Editor_ModeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_editor_mode = /** @type {((inputs?: Social_Editor_ModeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Editor_ModeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_editor_mode(inputs)
	if (locale === "de") return de_social_editor_mode(inputs)
	if (locale === "fr") return fr_social_editor_mode(inputs)
	if (locale === "it") return it_social_editor_mode(inputs)
	if (locale === "nl") return nl_social_editor_mode(inputs)
	if (locale === "pl") return pl_social_editor_mode(inputs)
	if (locale === "pt") return pt_social_editor_mode(inputs)
	if (locale === "ru") return ru_social_editor_mode(inputs)
	if (locale === "sv") return sv_social_editor_mode(inputs)
	if (locale === "tr") return tr_social_editor_mode(inputs)
	if (locale === "zh") return zh_social_editor_mode(inputs)
	if (locale === "ja") return ja_social_editor_mode(inputs)
	return en_social_editor_mode(inputs)
});
