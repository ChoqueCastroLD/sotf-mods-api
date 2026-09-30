/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Basecamp_Media_UploadingInputs */

const en_basecamp_media_uploading = /** @type {(inputs: Basecamp_Media_UploadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Uploading ${i?.name}`)
};

const es_basecamp_media_uploading = /** @type {(inputs: Basecamp_Media_UploadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Subiendo ${i?.name}`)
};

const de_basecamp_media_uploading = /** @type {(inputs: Basecamp_Media_UploadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} wird hochgeladen`)
};

const fr_basecamp_media_uploading = /** @type {(inputs: Basecamp_Media_UploadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Envoi de ${i?.name}`)
};

const it_basecamp_media_uploading = /** @type {(inputs: Basecamp_Media_UploadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Caricamento di ${i?.name}`)
};

const nl_basecamp_media_uploading = /** @type {(inputs: Basecamp_Media_UploadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} uploaden`)
};

const pl_basecamp_media_uploading = /** @type {(inputs: Basecamp_Media_UploadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wysyłanie: ${i?.name}`)
};

const pt_basecamp_media_uploading = /** @type {(inputs: Basecamp_Media_UploadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Enviando ${i?.name}`)
};

const ru_basecamp_media_uploading = /** @type {(inputs: Basecamp_Media_UploadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Загрузка: ${i?.name}`)
};

const sv_basecamp_media_uploading = /** @type {(inputs: Basecamp_Media_UploadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Laddar upp ${i?.name}`)
};

const tr_basecamp_media_uploading = /** @type {(inputs: Basecamp_Media_UploadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} yükleniyor`)
};

const zh_basecamp_media_uploading = /** @type {(inputs: Basecamp_Media_UploadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`正在上传 ${i?.name}`)
};

const ja_basecamp_media_uploading = /** @type {(inputs: Basecamp_Media_UploadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} をアップロード中`)
};

/**
* | output |
* | --- |
* | "Uploading {name}" |
*
* @param {Basecamp_Media_UploadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_media_uploading = /** @type {((inputs: Basecamp_Media_UploadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_UploadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_media_uploading(inputs)
	if (locale === "de") return de_basecamp_media_uploading(inputs)
	if (locale === "fr") return fr_basecamp_media_uploading(inputs)
	if (locale === "it") return it_basecamp_media_uploading(inputs)
	if (locale === "nl") return nl_basecamp_media_uploading(inputs)
	if (locale === "pl") return pl_basecamp_media_uploading(inputs)
	if (locale === "pt") return pt_basecamp_media_uploading(inputs)
	if (locale === "ru") return ru_basecamp_media_uploading(inputs)
	if (locale === "sv") return sv_basecamp_media_uploading(inputs)
	if (locale === "tr") return tr_basecamp_media_uploading(inputs)
	if (locale === "zh") return zh_basecamp_media_uploading(inputs)
	if (locale === "ja") return ja_basecamp_media_uploading(inputs)
	return en_basecamp_media_uploading(inputs)
});
