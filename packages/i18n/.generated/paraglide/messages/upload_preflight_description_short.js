/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Description_ShortInputs */

const en_upload_preflight_description_short = /** @type {(inputs: Upload_Preflight_Description_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The description is short (300 characters or more recommended).`)
};

const es_upload_preflight_description_short = /** @type {(inputs: Upload_Preflight_Description_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La descripción es corta (se recomiendan 300 caracteres o más).`)
};

const de_upload_preflight_description_short = /** @type {(inputs: Upload_Preflight_Description_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Beschreibung ist kurz (300 Zeichen oder mehr empfohlen).`)
};

const fr_upload_preflight_description_short = /** @type {(inputs: Upload_Preflight_Description_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La description est courte (300 caractères ou plus recommandés).`)
};

const it_upload_preflight_description_short = /** @type {(inputs: Upload_Preflight_Description_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La descrizione è breve (consigliati almeno 300 caratteri).`)
};

const nl_upload_preflight_description_short = /** @type {(inputs: Upload_Preflight_Description_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De beschrijving is kort (300 tekens of meer aanbevolen).`)
};

const pl_upload_preflight_description_short = /** @type {(inputs: Upload_Preflight_Description_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opis jest krótki (zalecane co najmniej 300 znaków).`)
};

const pt_upload_preflight_description_short = /** @type {(inputs: Upload_Preflight_Description_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A descrição é curta (recomendam-se 300 caracteres ou mais).`)
};

const ru_upload_preflight_description_short = /** @type {(inputs: Upload_Preflight_Description_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Описание короткое (рекомендуется от 300 символов).`)
};

const sv_upload_preflight_description_short = /** @type {(inputs: Upload_Preflight_Description_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beskrivningen är kort (300 tecken eller mer rekommenderas).`)
};

const tr_upload_preflight_description_short = /** @type {(inputs: Upload_Preflight_Description_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Açıklama kısa (300 karakter veya daha fazlası önerilir).`)
};

const zh_upload_preflight_description_short = /** @type {(inputs: Upload_Preflight_Description_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`描述较短（建议 300 字以上）。`)
};

const ja_upload_preflight_description_short = /** @type {(inputs: Upload_Preflight_Description_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`説明が短めです（300文字以上を推奨）。`)
};

/**
* | output |
* | --- |
* | "The description is short (300 characters or more recommended)." |
*
* @param {Upload_Preflight_Description_ShortInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_description_short = /** @type {((inputs?: Upload_Preflight_Description_ShortInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Description_ShortInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_description_short(inputs)
	if (locale === "de") return de_upload_preflight_description_short(inputs)
	if (locale === "fr") return fr_upload_preflight_description_short(inputs)
	if (locale === "it") return it_upload_preflight_description_short(inputs)
	if (locale === "nl") return nl_upload_preflight_description_short(inputs)
	if (locale === "pl") return pl_upload_preflight_description_short(inputs)
	if (locale === "pt") return pt_upload_preflight_description_short(inputs)
	if (locale === "ru") return ru_upload_preflight_description_short(inputs)
	if (locale === "sv") return sv_upload_preflight_description_short(inputs)
	if (locale === "tr") return tr_upload_preflight_description_short(inputs)
	if (locale === "zh") return zh_upload_preflight_description_short(inputs)
	if (locale === "ja") return ja_upload_preflight_description_short(inputs)
	return en_upload_preflight_description_short(inputs)
});
