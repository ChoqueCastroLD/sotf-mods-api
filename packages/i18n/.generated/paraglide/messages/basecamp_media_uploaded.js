/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Basecamp_Media_UploadedInputs */

const en_basecamp_media_uploaded = /** @type {(inputs: Basecamp_Media_UploadedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} uploaded`)
};

const es_basecamp_media_uploaded = /** @type {(inputs: Basecamp_Media_UploadedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} subida`)
};

const de_basecamp_media_uploaded = /** @type {(inputs: Basecamp_Media_UploadedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} hochgeladen`)
};

const fr_basecamp_media_uploaded = /** @type {(inputs: Basecamp_Media_UploadedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} envoyée`)
};

const it_basecamp_media_uploaded = /** @type {(inputs: Basecamp_Media_UploadedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} caricata`)
};

const nl_basecamp_media_uploaded = /** @type {(inputs: Basecamp_Media_UploadedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} geüpload`)
};

const pl_basecamp_media_uploaded = /** @type {(inputs: Basecamp_Media_UploadedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wysłano: ${i?.name}`)
};

const pt_basecamp_media_uploaded = /** @type {(inputs: Basecamp_Media_UploadedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} enviada`)
};

const ru_basecamp_media_uploaded = /** @type {(inputs: Basecamp_Media_UploadedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Загружено: ${i?.name}`)
};

const sv_basecamp_media_uploaded = /** @type {(inputs: Basecamp_Media_UploadedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} uppladdad`)
};

const tr_basecamp_media_uploaded = /** @type {(inputs: Basecamp_Media_UploadedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} yüklendi`)
};

const zh_basecamp_media_uploaded = /** @type {(inputs: Basecamp_Media_UploadedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 已上传`)
};

const ja_basecamp_media_uploaded = /** @type {(inputs: Basecamp_Media_UploadedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} をアップロードしました`)
};

/**
* | output |
* | --- |
* | "{name} uploaded" |
*
* @param {Basecamp_Media_UploadedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_media_uploaded = /** @type {((inputs: Basecamp_Media_UploadedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_UploadedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_media_uploaded(inputs)
	if (locale === "de") return de_basecamp_media_uploaded(inputs)
	if (locale === "fr") return fr_basecamp_media_uploaded(inputs)
	if (locale === "it") return it_basecamp_media_uploaded(inputs)
	if (locale === "nl") return nl_basecamp_media_uploaded(inputs)
	if (locale === "pl") return pl_basecamp_media_uploaded(inputs)
	if (locale === "pt") return pt_basecamp_media_uploaded(inputs)
	if (locale === "ru") return ru_basecamp_media_uploaded(inputs)
	if (locale === "sv") return sv_basecamp_media_uploaded(inputs)
	if (locale === "tr") return tr_basecamp_media_uploaded(inputs)
	if (locale === "zh") return zh_basecamp_media_uploaded(inputs)
	if (locale === "ja") return ja_basecamp_media_uploaded(inputs)
	return en_basecamp_media_uploaded(inputs)
});
