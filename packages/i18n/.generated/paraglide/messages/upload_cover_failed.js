/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Cover_FailedInputs */

const en_upload_cover_failed = /** @type {(inputs: Upload_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The cover couldn’t be uploaded.`)
};

const es_upload_cover_failed = /** @type {(inputs: Upload_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo subir la portada.`)
};

const de_upload_cover_failed = /** @type {(inputs: Upload_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Titelbild konnte nicht hochgeladen werden.`)
};

const fr_upload_cover_failed = /** @type {(inputs: Upload_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La couverture n’a pas pu être envoyée.`)
};

const it_upload_cover_failed = /** @type {(inputs: Upload_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile caricare la copertina.`)
};

const nl_upload_cover_failed = /** @type {(inputs: Upload_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De omslag kon niet worden geüpload.`)
};

const pl_upload_cover_failed = /** @type {(inputs: Upload_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wysłać okładki.`)
};

const pt_upload_cover_failed = /** @type {(inputs: Upload_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível enviar a capa.`)
};

const ru_upload_cover_failed = /** @type {(inputs: Upload_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось загрузить обложку.`)
};

const sv_upload_cover_failed = /** @type {(inputs: Upload_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omslaget kunde inte laddas upp.`)
};

const tr_upload_cover_failed = /** @type {(inputs: Upload_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapak yüklenemedi.`)
};

const zh_upload_cover_failed = /** @type {(inputs: Upload_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`封面上传失败。`)
};

const ja_upload_cover_failed = /** @type {(inputs: Upload_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カバーをアップロードできませんでした。`)
};

/**
* | output |
* | --- |
* | "The cover couldn’t be uploaded." |
*
* @param {Upload_Cover_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_cover_failed = /** @type {((inputs?: Upload_Cover_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Cover_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_cover_failed(inputs)
	if (locale === "de") return de_upload_cover_failed(inputs)
	if (locale === "fr") return fr_upload_cover_failed(inputs)
	if (locale === "it") return it_upload_cover_failed(inputs)
	if (locale === "nl") return nl_upload_cover_failed(inputs)
	if (locale === "pl") return pl_upload_cover_failed(inputs)
	if (locale === "pt") return pt_upload_cover_failed(inputs)
	if (locale === "ru") return ru_upload_cover_failed(inputs)
	if (locale === "sv") return sv_upload_cover_failed(inputs)
	if (locale === "tr") return tr_upload_cover_failed(inputs)
	if (locale === "zh") return zh_upload_cover_failed(inputs)
	if (locale === "ja") return ja_upload_cover_failed(inputs)
	return en_upload_cover_failed(inputs)
});
