/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Markdown_ViewInputs */

const en_upload_markdown_view = /** @type {(inputs: Upload_Markdown_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editor view`)
};

const es_upload_markdown_view = /** @type {(inputs: Upload_Markdown_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vista del editor`)
};

const de_upload_markdown_view = /** @type {(inputs: Upload_Markdown_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editoransicht`)
};

const fr_upload_markdown_view = /** @type {(inputs: Upload_Markdown_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vue de l’éditeur`)
};

const it_upload_markdown_view = /** @type {(inputs: Upload_Markdown_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vista dell’editor`)
};

const nl_upload_markdown_view = /** @type {(inputs: Upload_Markdown_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editorweergave`)
};

const pl_upload_markdown_view = /** @type {(inputs: Upload_Markdown_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Widok edytora`)
};

const pt_upload_markdown_view = /** @type {(inputs: Upload_Markdown_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visualização do editor`)
};

const ru_upload_markdown_view = /** @type {(inputs: Upload_Markdown_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Режим редактора`)
};

const sv_upload_markdown_view = /** @type {(inputs: Upload_Markdown_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redigerarvy`)
};

const tr_upload_markdown_view = /** @type {(inputs: Upload_Markdown_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Düzenleyici görünümü`)
};

const zh_upload_markdown_view = /** @type {(inputs: Upload_Markdown_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑器视图`)
};

const ja_upload_markdown_view = /** @type {(inputs: Upload_Markdown_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エディターの表示`)
};

/**
* | output |
* | --- |
* | "Editor view" |
*
* @param {Upload_Markdown_ViewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_markdown_view = /** @type {((inputs?: Upload_Markdown_ViewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Markdown_ViewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_markdown_view(inputs)
	if (locale === "de") return de_upload_markdown_view(inputs)
	if (locale === "fr") return fr_upload_markdown_view(inputs)
	if (locale === "it") return it_upload_markdown_view(inputs)
	if (locale === "nl") return nl_upload_markdown_view(inputs)
	if (locale === "pl") return pl_upload_markdown_view(inputs)
	if (locale === "pt") return pt_upload_markdown_view(inputs)
	if (locale === "ru") return ru_upload_markdown_view(inputs)
	if (locale === "sv") return sv_upload_markdown_view(inputs)
	if (locale === "tr") return tr_upload_markdown_view(inputs)
	if (locale === "zh") return zh_upload_markdown_view(inputs)
	if (locale === "ja") return ja_upload_markdown_view(inputs)
	return en_upload_markdown_view(inputs)
});
