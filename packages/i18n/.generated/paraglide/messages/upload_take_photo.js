/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Take_PhotoInputs */

const en_upload_take_photo = /** @type {(inputs: Upload_Take_PhotoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Take a photo`)
};

const es_upload_take_photo = /** @type {(inputs: Upload_Take_PhotoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hacer una foto`)
};

const de_upload_take_photo = /** @type {(inputs: Upload_Take_PhotoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Foto aufnehmen`)
};

const fr_upload_take_photo = /** @type {(inputs: Upload_Take_PhotoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prendre une photo`)
};

const it_upload_take_photo = /** @type {(inputs: Upload_Take_PhotoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scatta una foto`)
};

const nl_upload_take_photo = /** @type {(inputs: Upload_Take_PhotoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Foto maken`)
};

const pl_upload_take_photo = /** @type {(inputs: Upload_Take_PhotoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zrób zdjęcie`)
};

const pt_upload_take_photo = /** @type {(inputs: Upload_Take_PhotoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tirar uma foto`)
};

const ru_upload_take_photo = /** @type {(inputs: Upload_Take_PhotoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сделать фото`)
};

const sv_upload_take_photo = /** @type {(inputs: Upload_Take_PhotoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta ett foto`)
};

const tr_upload_take_photo = /** @type {(inputs: Upload_Take_PhotoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fotoğraf çek`)
};

const zh_upload_take_photo = /** @type {(inputs: Upload_Take_PhotoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`拍照`)
};

const ja_upload_take_photo = /** @type {(inputs: Upload_Take_PhotoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`写真を撮る`)
};

/**
* | output |
* | --- |
* | "Take a photo" |
*
* @param {Upload_Take_PhotoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_take_photo = /** @type {((inputs?: Upload_Take_PhotoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Take_PhotoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_take_photo(inputs)
	if (locale === "de") return de_upload_take_photo(inputs)
	if (locale === "fr") return fr_upload_take_photo(inputs)
	if (locale === "it") return it_upload_take_photo(inputs)
	if (locale === "nl") return nl_upload_take_photo(inputs)
	if (locale === "pl") return pl_upload_take_photo(inputs)
	if (locale === "pt") return pt_upload_take_photo(inputs)
	if (locale === "ru") return ru_upload_take_photo(inputs)
	if (locale === "sv") return sv_upload_take_photo(inputs)
	if (locale === "tr") return tr_upload_take_photo(inputs)
	if (locale === "zh") return zh_upload_take_photo(inputs)
	if (locale === "ja") return ja_upload_take_photo(inputs)
	return en_upload_take_photo(inputs)
});
