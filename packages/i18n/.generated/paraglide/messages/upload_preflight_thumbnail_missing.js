/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Thumbnail_MissingInputs */

const en_upload_preflight_thumbnail_missing = /** @type {(inputs: Upload_Preflight_Thumbnail_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No cover image.`)
};

const es_upload_preflight_thumbnail_missing = /** @type {(inputs: Upload_Preflight_Thumbnail_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin imagen de portada.`)
};

const de_upload_preflight_thumbnail_missing = /** @type {(inputs: Upload_Preflight_Thumbnail_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kein Titelbild.`)
};

const fr_upload_preflight_thumbnail_missing = /** @type {(inputs: Upload_Preflight_Thumbnail_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas d’image de couverture.`)
};

const it_upload_preflight_thumbnail_missing = /** @type {(inputs: Upload_Preflight_Thumbnail_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna immagine di copertina.`)
};

const nl_upload_preflight_thumbnail_missing = /** @type {(inputs: Upload_Preflight_Thumbnail_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen omslagafbeelding.`)
};

const pl_upload_preflight_thumbnail_missing = /** @type {(inputs: Upload_Preflight_Thumbnail_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak obrazu okładki.`)
};

const pt_upload_preflight_thumbnail_missing = /** @type {(inputs: Upload_Preflight_Thumbnail_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem imagem de capa.`)
};

const ru_upload_preflight_thumbnail_missing = /** @type {(inputs: Upload_Preflight_Thumbnail_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет обложки.`)
};

const sv_upload_preflight_thumbnail_missing = /** @type {(inputs: Upload_Preflight_Thumbnail_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen omslagsbild.`)
};

const tr_upload_preflight_thumbnail_missing = /** @type {(inputs: Upload_Preflight_Thumbnail_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapak görseli yok.`)
};

const zh_upload_preflight_thumbnail_missing = /** @type {(inputs: Upload_Preflight_Thumbnail_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有封面图片。`)
};

const ja_upload_preflight_thumbnail_missing = /** @type {(inputs: Upload_Preflight_Thumbnail_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カバー画像がありません。`)
};

/**
* | output |
* | --- |
* | "No cover image." |
*
* @param {Upload_Preflight_Thumbnail_MissingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_thumbnail_missing = /** @type {((inputs?: Upload_Preflight_Thumbnail_MissingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Thumbnail_MissingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_thumbnail_missing(inputs)
	if (locale === "de") return de_upload_preflight_thumbnail_missing(inputs)
	if (locale === "fr") return fr_upload_preflight_thumbnail_missing(inputs)
	if (locale === "it") return it_upload_preflight_thumbnail_missing(inputs)
	if (locale === "nl") return nl_upload_preflight_thumbnail_missing(inputs)
	if (locale === "pl") return pl_upload_preflight_thumbnail_missing(inputs)
	if (locale === "pt") return pt_upload_preflight_thumbnail_missing(inputs)
	if (locale === "ru") return ru_upload_preflight_thumbnail_missing(inputs)
	if (locale === "sv") return sv_upload_preflight_thumbnail_missing(inputs)
	if (locale === "tr") return tr_upload_preflight_thumbnail_missing(inputs)
	if (locale === "zh") return zh_upload_preflight_thumbnail_missing(inputs)
	if (locale === "ja") return ja_upload_preflight_thumbnail_missing(inputs)
	return en_upload_preflight_thumbnail_missing(inputs)
});
