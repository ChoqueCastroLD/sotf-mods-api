/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Image_Failed_ShortInputs */

const en_social_image_failed_short = /** @type {(inputs: Social_Image_Failed_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed`)
};

const es_social_image_failed_short = /** @type {(inputs: Social_Image_Failed_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error`)
};

const de_social_image_failed_short = /** @type {(inputs: Social_Image_Failed_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fehler`)
};

const fr_social_image_failed_short = /** @type {(inputs: Social_Image_Failed_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Échec`)
};

const it_social_image_failed_short = /** @type {(inputs: Social_Image_Failed_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Errore`)
};

const nl_social_image_failed_short = /** @type {(inputs: Social_Image_Failed_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mislukt`)
};

const pl_social_image_failed_short = /** @type {(inputs: Social_Image_Failed_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Błąd`)
};

const pt_social_image_failed_short = /** @type {(inputs: Social_Image_Failed_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falhou`)
};

const ru_social_image_failed_short = /** @type {(inputs: Social_Image_Failed_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ошибка`)
};

const sv_social_image_failed_short = /** @type {(inputs: Social_Image_Failed_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Misslyckades`)
};

const tr_social_image_failed_short = /** @type {(inputs: Social_Image_Failed_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başarısız`)
};

const zh_social_image_failed_short = /** @type {(inputs: Social_Image_Failed_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`失败`)
};

const ja_social_image_failed_short = /** @type {(inputs: Social_Image_Failed_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`失敗`)
};

/**
* | output |
* | --- |
* | "Failed" |
*
* @param {Social_Image_Failed_ShortInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_image_failed_short = /** @type {((inputs?: Social_Image_Failed_ShortInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Image_Failed_ShortInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_image_failed_short(inputs)
	if (locale === "de") return de_social_image_failed_short(inputs)
	if (locale === "fr") return fr_social_image_failed_short(inputs)
	if (locale === "it") return it_social_image_failed_short(inputs)
	if (locale === "nl") return nl_social_image_failed_short(inputs)
	if (locale === "pl") return pl_social_image_failed_short(inputs)
	if (locale === "pt") return pt_social_image_failed_short(inputs)
	if (locale === "ru") return ru_social_image_failed_short(inputs)
	if (locale === "sv") return sv_social_image_failed_short(inputs)
	if (locale === "tr") return tr_social_image_failed_short(inputs)
	if (locale === "zh") return zh_social_image_failed_short(inputs)
	if (locale === "ja") return ja_social_image_failed_short(inputs)
	return en_social_image_failed_short(inputs)
});
