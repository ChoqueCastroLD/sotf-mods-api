/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Media_Wrong_TypeInputs */

const en_basecamp_media_wrong_type = /** @type {(inputs: Basecamp_Media_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`That file is not a supported image.`)
};

const es_basecamp_media_wrong_type = /** @type {(inputs: Basecamp_Media_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ese archivo no es una imagen compatible.`)
};

const de_basecamp_media_wrong_type = /** @type {(inputs: Basecamp_Media_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Datei ist kein unterstütztes Bild.`)
};

const fr_basecamp_media_wrong_type = /** @type {(inputs: Basecamp_Media_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce fichier n’est pas une image prise en charge.`)
};

const it_basecamp_media_wrong_type = /** @type {(inputs: Basecamp_Media_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo file non è un’immagine supportata.`)
};

const nl_basecamp_media_wrong_type = /** @type {(inputs: Basecamp_Media_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dat bestand is geen ondersteunde afbeelding.`)
};

const pl_basecamp_media_wrong_type = /** @type {(inputs: Basecamp_Media_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten plik nie jest obsługiwanym obrazem.`)
};

const pt_basecamp_media_wrong_type = /** @type {(inputs: Basecamp_Media_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esse arquivo não é uma imagem compatível.`)
};

const ru_basecamp_media_wrong_type = /** @type {(inputs: Basecamp_Media_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этот файл не поддерживаемое изображение.`)
};

const sv_basecamp_media_wrong_type = /** @type {(inputs: Basecamp_Media_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den filen är ingen bild som stöds.`)
};

const tr_basecamp_media_wrong_type = /** @type {(inputs: Basecamp_Media_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu dosya desteklenen bir görsel değil.`)
};

const zh_basecamp_media_wrong_type = /** @type {(inputs: Basecamp_Media_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该文件不是受支持的图片。`)
};

const ja_basecamp_media_wrong_type = /** @type {(inputs: Basecamp_Media_Wrong_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このファイルは対応している画像ではありません。`)
};

/**
* | output |
* | --- |
* | "That file is not a supported image." |
*
* @param {Basecamp_Media_Wrong_TypeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_media_wrong_type = /** @type {((inputs?: Basecamp_Media_Wrong_TypeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_Wrong_TypeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_media_wrong_type(inputs)
	if (locale === "de") return de_basecamp_media_wrong_type(inputs)
	if (locale === "fr") return fr_basecamp_media_wrong_type(inputs)
	if (locale === "it") return it_basecamp_media_wrong_type(inputs)
	if (locale === "nl") return nl_basecamp_media_wrong_type(inputs)
	if (locale === "pl") return pl_basecamp_media_wrong_type(inputs)
	if (locale === "pt") return pt_basecamp_media_wrong_type(inputs)
	if (locale === "ru") return ru_basecamp_media_wrong_type(inputs)
	if (locale === "sv") return sv_basecamp_media_wrong_type(inputs)
	if (locale === "tr") return tr_basecamp_media_wrong_type(inputs)
	if (locale === "zh") return zh_basecamp_media_wrong_type(inputs)
	if (locale === "ja") return ja_basecamp_media_wrong_type(inputs)
	return en_basecamp_media_wrong_type(inputs)
});
