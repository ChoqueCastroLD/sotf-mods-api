/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Editor_Preview_EmptyInputs */

const en_social_editor_preview_empty = /** @type {(inputs: Social_Editor_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nothing to preview yet.`)
};

const es_social_editor_preview_empty = /** @type {(inputs: Social_Editor_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay nada que previsualizar.`)
};

const de_social_editor_preview_empty = /** @type {(inputs: Social_Editor_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch nichts für die Vorschau.`)
};

const fr_social_editor_preview_empty = /** @type {(inputs: Social_Editor_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rien à prévisualiser pour l’instant.`)
};

const it_social_editor_preview_empty = /** @type {(inputs: Social_Editor_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora niente da mostrare.`)
};

const nl_social_editor_preview_empty = /** @type {(inputs: Social_Editor_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog niets om te tonen.`)
};

const pl_social_editor_preview_empty = /** @type {(inputs: Social_Editor_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na razie nie ma czego podglądać.`)
};

const pt_social_editor_preview_empty = /** @type {(inputs: Social_Editor_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há nada para pré-visualizar.`)
};

const ru_social_editor_preview_empty = /** @type {(inputs: Social_Editor_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пока нечего показать.`)
};

const sv_social_editor_preview_empty = /** @type {(inputs: Social_Editor_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inget att förhandsgranska än.`)
};

const tr_social_editor_preview_empty = /** @type {(inputs: Social_Editor_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz önizlenecek bir şey yok.`)
};

const zh_social_editor_preview_empty = /** @type {(inputs: Social_Editor_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有可预览的内容。`)
};

const ja_social_editor_preview_empty = /** @type {(inputs: Social_Editor_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プレビューする内容がまだありません。`)
};

/**
* | output |
* | --- |
* | "Nothing to preview yet." |
*
* @param {Social_Editor_Preview_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_editor_preview_empty = /** @type {((inputs?: Social_Editor_Preview_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Editor_Preview_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_editor_preview_empty(inputs)
	if (locale === "de") return de_social_editor_preview_empty(inputs)
	if (locale === "fr") return fr_social_editor_preview_empty(inputs)
	if (locale === "it") return it_social_editor_preview_empty(inputs)
	if (locale === "nl") return nl_social_editor_preview_empty(inputs)
	if (locale === "pl") return pl_social_editor_preview_empty(inputs)
	if (locale === "pt") return pt_social_editor_preview_empty(inputs)
	if (locale === "ru") return ru_social_editor_preview_empty(inputs)
	if (locale === "sv") return sv_social_editor_preview_empty(inputs)
	if (locale === "tr") return tr_social_editor_preview_empty(inputs)
	if (locale === "zh") return zh_social_editor_preview_empty(inputs)
	if (locale === "ja") return ja_social_editor_preview_empty(inputs)
	return en_social_editor_preview_empty(inputs)
});
