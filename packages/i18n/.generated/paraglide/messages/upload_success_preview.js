/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Success_PreviewInputs */

const en_upload_success_preview = /** @type {(inputs: Upload_Success_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preview the page`)
};

const es_upload_success_preview = /** @type {(inputs: Upload_Success_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver la vista previa`)
};

const de_upload_success_preview = /** @type {(inputs: Upload_Success_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorschau der Seite`)
};

const fr_upload_success_preview = /** @type {(inputs: Upload_Success_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aperçu de la page`)
};

const it_upload_success_preview = /** @type {(inputs: Upload_Success_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anteprima della pagina`)
};

const nl_upload_success_preview = /** @type {(inputs: Upload_Success_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voorbeeld van de pagina`)
};

const pl_upload_success_preview = /** @type {(inputs: Upload_Success_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podgląd strony`)
};

const pt_upload_success_preview = /** @type {(inputs: Upload_Success_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver a prévia da página`)
};

const ru_upload_success_preview = /** @type {(inputs: Upload_Success_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Предпросмотр страницы`)
};

const sv_upload_success_preview = /** @type {(inputs: Upload_Success_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Förhandsvisa sidan`)
};

const tr_upload_success_preview = /** @type {(inputs: Upload_Success_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfayı önizle`)
};

const zh_upload_success_preview = /** @type {(inputs: Upload_Success_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`预览页面`)
};

const ja_upload_success_preview = /** @type {(inputs: Upload_Success_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ページをプレビュー`)
};

/**
* | output |
* | --- |
* | "Preview the page" |
*
* @param {Upload_Success_PreviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_success_preview = /** @type {((inputs?: Upload_Success_PreviewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Success_PreviewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_success_preview(inputs)
	if (locale === "de") return de_upload_success_preview(inputs)
	if (locale === "fr") return fr_upload_success_preview(inputs)
	if (locale === "it") return it_upload_success_preview(inputs)
	if (locale === "nl") return nl_upload_success_preview(inputs)
	if (locale === "pl") return pl_upload_success_preview(inputs)
	if (locale === "pt") return pt_upload_success_preview(inputs)
	if (locale === "ru") return ru_upload_success_preview(inputs)
	if (locale === "sv") return sv_upload_success_preview(inputs)
	if (locale === "tr") return tr_upload_success_preview(inputs)
	if (locale === "zh") return zh_upload_success_preview(inputs)
	if (locale === "ja") return ja_upload_success_preview(inputs)
	return en_upload_success_preview(inputs)
});
