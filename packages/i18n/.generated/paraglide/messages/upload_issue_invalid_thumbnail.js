/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Issue_Invalid_ThumbnailInputs */

const en_upload_issue_invalid_thumbnail = /** @type {(inputs: Upload_Issue_Invalid_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The blueprint thumbnail is unreadable.`)
};

const es_upload_issue_invalid_thumbnail = /** @type {(inputs: Upload_Issue_Invalid_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La miniatura del plano no se puede leer.`)
};

const de_upload_issue_invalid_thumbnail = /** @type {(inputs: Upload_Issue_Invalid_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Vorschaubild des Bauplans ist nicht lesbar.`)
};

const fr_upload_issue_invalid_thumbnail = /** @type {(inputs: Upload_Issue_Invalid_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La miniature du plan est illisible.`)
};

const it_upload_issue_invalid_thumbnail = /** @type {(inputs: Upload_Issue_Invalid_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La miniatura del progetto non è leggibile.`)
};

const nl_upload_issue_invalid_thumbnail = /** @type {(inputs: Upload_Issue_Invalid_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De miniatuur van de bouwtekening is onleesbaar.`)
};

const pl_upload_issue_invalid_thumbnail = /** @type {(inputs: Upload_Issue_Invalid_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Miniatury planu nie da się odczytać.`)
};

const pt_upload_issue_invalid_thumbnail = /** @type {(inputs: Upload_Issue_Invalid_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A miniatura da planta não pode ser lida.`)
};

const ru_upload_issue_invalid_thumbnail = /** @type {(inputs: Upload_Issue_Invalid_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Миниатюру чертежа не удаётся прочитать.`)
};

const sv_upload_issue_invalid_thumbnail = /** @type {(inputs: Upload_Issue_Invalid_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ritningens miniatyr går inte att läsa.`)
};

const tr_upload_issue_invalid_thumbnail = /** @type {(inputs: Upload_Issue_Invalid_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Planın küçük resmi okunamıyor.`)
};

const zh_upload_issue_invalid_thumbnail = /** @type {(inputs: Upload_Issue_Invalid_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法读取蓝图缩略图。`)
};

const ja_upload_issue_invalid_thumbnail = /** @type {(inputs: Upload_Issue_Invalid_ThumbnailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設計図のサムネイルを読み込めません。`)
};

/**
* | output |
* | --- |
* | "The blueprint thumbnail is unreadable." |
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
