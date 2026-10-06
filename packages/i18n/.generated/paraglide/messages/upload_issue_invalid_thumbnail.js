/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Issue_Invalid_ThumbnailInputs */

const en_upload_issue_invalid_thumbnail = /** @type {(inputs: Upload_Issue_Invalid_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The build thumbnail is unreadable.`)
};

const es_upload_issue_invalid_thumbnail = /** @type {(inputs: Upload_Issue_Invalid_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La miniatura de la build no se puede leer.`)
};

const de_upload_issue_invalid_thumbnail = /** @type {(inputs: Upload_Issue_Invalid_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Vorschaubild des Builds ist nicht lesbar.`)
};

const fr_upload_issue_invalid_thumbnail = /** @type {(inputs: Upload_Issue_Invalid_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La miniature du build est illisible.`)
};

const it_upload_issue_invalid_thumbnail = /** @type {(inputs: Upload_Issue_Invalid_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La miniatura della build non è leggibile.`)
};

const nl_upload_issue_invalid_thumbnail = /** @type {(inputs: Upload_Issue_Invalid_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De miniatuur van de build is onleesbaar.`)
};

const pl_upload_issue_invalid_thumbnail = /** @type {(inputs: Upload_Issue_Invalid_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Miniatury builda nie da się odczytać.`)
};

const pt_upload_issue_invalid_thumbnail = /** @type {(inputs: Upload_Issue_Invalid_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A miniatura da build não pode ser lida.`)
};

const ru_upload_issue_invalid_thumbnail = /** @type {(inputs: Upload_Issue_Invalid_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Миниатюру постройки не удаётся прочитать.`)
};

const sv_upload_issue_invalid_thumbnail = /** @type {(inputs: Upload_Issue_Invalid_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Byggets miniatyr går inte att läsa.`)
};

const tr_upload_issue_invalid_thumbnail = /** @type {(inputs: Upload_Issue_Invalid_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapının küçük resmi okunamıyor.`)
};

const zh_upload_issue_invalid_thumbnail = /** @type {(inputs: Upload_Issue_Invalid_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法读取建筑缩略图。`)
};

const ja_upload_issue_invalid_thumbnail = /** @type {(inputs: Upload_Issue_Invalid_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建築のサムネイルを読み込めません。`)
};

/**
* | output |
* | --- |
* | "The build thumbnail is unreadable." |
*
* @param {Upload_Issue_Invalid_ThumbnailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_issue_invalid_thumbnail = /** @type {((inputs?: Upload_Issue_Invalid_ThumbnailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Issue_Invalid_ThumbnailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_issue_invalid_thumbnail(inputs)
	if (locale === "de") return de_upload_issue_invalid_thumbnail(inputs)
	if (locale === "fr") return fr_upload_issue_invalid_thumbnail(inputs)
	if (locale === "it") return it_upload_issue_invalid_thumbnail(inputs)
	if (locale === "nl") return nl_upload_issue_invalid_thumbnail(inputs)
	if (locale === "pl") return pl_upload_issue_invalid_thumbnail(inputs)
	if (locale === "pt") return pt_upload_issue_invalid_thumbnail(inputs)
	if (locale === "ru") return ru_upload_issue_invalid_thumbnail(inputs)
	if (locale === "sv") return sv_upload_issue_invalid_thumbnail(inputs)
	if (locale === "tr") return tr_upload_issue_invalid_thumbnail(inputs)
	if (locale === "zh") return zh_upload_issue_invalid_thumbnail(inputs)
	if (locale === "ja") return ja_upload_issue_invalid_thumbnail(inputs)
	return en_upload_issue_invalid_thumbnail(inputs)
});
