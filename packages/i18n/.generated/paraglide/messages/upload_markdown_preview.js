/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Markdown_PreviewInputs */

const en_upload_markdown_preview = /** @type {(inputs: Upload_Markdown_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preview`)
};

const es_upload_markdown_preview = /** @type {(inputs: Upload_Markdown_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vista previa`)
};

const de_upload_markdown_preview = /** @type {(inputs: Upload_Markdown_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorschau`)
};

const fr_upload_markdown_preview = /** @type {(inputs: Upload_Markdown_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aperçu`)
};

const it_upload_markdown_preview = /** @type {(inputs: Upload_Markdown_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anteprima`)
};

const nl_upload_markdown_preview = /** @type {(inputs: Upload_Markdown_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voorbeeld`)
};

const pl_upload_markdown_preview = /** @type {(inputs: Upload_Markdown_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podgląd`)
};

const pt_upload_markdown_preview = /** @type {(inputs: Upload_Markdown_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prévia`)
};

const ru_upload_markdown_preview = /** @type {(inputs: Upload_Markdown_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Предпросмотр`)
};

const sv_upload_markdown_preview = /** @type {(inputs: Upload_Markdown_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Förhandsvisning`)
};

const tr_upload_markdown_preview = /** @type {(inputs: Upload_Markdown_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önizleme`)
};

const zh_upload_markdown_preview = /** @type {(inputs: Upload_Markdown_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`预览`)
};

const ja_upload_markdown_preview = /** @type {(inputs: Upload_Markdown_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プレビュー`)
};

/**
* | output |
* | --- |
* | "Preview" |
*
* @param {Upload_Markdown_PreviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_markdown_preview = /** @type {((inputs?: Upload_Markdown_PreviewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Markdown_PreviewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_markdown_preview(inputs)
	if (locale === "de") return de_upload_markdown_preview(inputs)
	if (locale === "fr") return fr_upload_markdown_preview(inputs)
	if (locale === "it") return it_upload_markdown_preview(inputs)
	if (locale === "nl") return nl_upload_markdown_preview(inputs)
	if (locale === "pl") return pl_upload_markdown_preview(inputs)
	if (locale === "pt") return pt_upload_markdown_preview(inputs)
	if (locale === "ru") return ru_upload_markdown_preview(inputs)
	if (locale === "sv") return sv_upload_markdown_preview(inputs)
	if (locale === "tr") return tr_upload_markdown_preview(inputs)
	if (locale === "zh") return zh_upload_markdown_preview(inputs)
	if (locale === "ja") return ja_upload_markdown_preview(inputs)
	return en_upload_markdown_preview(inputs)
});
