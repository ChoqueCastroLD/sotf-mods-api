/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Editor_PreviewInputs */

const en_social_editor_preview = /** @type {(inputs: Social_Editor_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preview`)
};

const es_social_editor_preview = /** @type {(inputs: Social_Editor_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vista previa`)
};

const de_social_editor_preview = /** @type {(inputs: Social_Editor_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorschau`)
};

const fr_social_editor_preview = /** @type {(inputs: Social_Editor_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aperçu`)
};

const it_social_editor_preview = /** @type {(inputs: Social_Editor_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anteprima`)
};

const nl_social_editor_preview = /** @type {(inputs: Social_Editor_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voorbeeld`)
};

const pl_social_editor_preview = /** @type {(inputs: Social_Editor_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podgląd`)
};

const pt_social_editor_preview = /** @type {(inputs: Social_Editor_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pré-visualizar`)
};

const ru_social_editor_preview = /** @type {(inputs: Social_Editor_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Предпросмотр`)
};

const sv_social_editor_preview = /** @type {(inputs: Social_Editor_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Förhandsgranska`)
};

const tr_social_editor_preview = /** @type {(inputs: Social_Editor_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önizleme`)
};

const zh_social_editor_preview = /** @type {(inputs: Social_Editor_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`预览`)
};

const ja_social_editor_preview = /** @type {(inputs: Social_Editor_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プレビュー`)
};

/**
* | output |
* | --- |
* | "Preview" |
*
* @param {Social_Editor_PreviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_editor_preview = /** @type {((inputs?: Social_Editor_PreviewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Editor_PreviewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_editor_preview(inputs)
	if (locale === "de") return de_social_editor_preview(inputs)
	if (locale === "fr") return fr_social_editor_preview(inputs)
	if (locale === "it") return it_social_editor_preview(inputs)
	if (locale === "nl") return nl_social_editor_preview(inputs)
	if (locale === "pl") return pl_social_editor_preview(inputs)
	if (locale === "pt") return pt_social_editor_preview(inputs)
	if (locale === "ru") return ru_social_editor_preview(inputs)
	if (locale === "sv") return sv_social_editor_preview(inputs)
	if (locale === "tr") return tr_social_editor_preview(inputs)
	if (locale === "zh") return zh_social_editor_preview(inputs)
	if (locale === "ja") return ja_social_editor_preview(inputs)
	return en_social_editor_preview(inputs)
});
