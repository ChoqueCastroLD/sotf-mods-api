/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Tags_UnknownInputs */

const en_upload_preflight_tags_unknown = /** @type {(inputs: Upload_Preflight_Tags_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Some tags don’t exist any more.`)
};

const es_upload_preflight_tags_unknown = /** @type {(inputs: Upload_Preflight_Tags_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Algunas etiquetas ya no existen.`)
};

const de_upload_preflight_tags_unknown = /** @type {(inputs: Upload_Preflight_Tags_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einige Tags gibt es nicht mehr.`)
};

const fr_upload_preflight_tags_unknown = /** @type {(inputs: Upload_Preflight_Tags_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Certains tags n’existent plus.`)
};

const it_upload_preflight_tags_unknown = /** @type {(inputs: Upload_Preflight_Tags_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alcuni tag non esistono più.`)
};

const nl_upload_preflight_tags_unknown = /** @type {(inputs: Upload_Preflight_Tags_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sommige tags bestaan niet meer.`)
};

const pl_upload_preflight_tags_unknown = /** @type {(inputs: Upload_Preflight_Tags_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niektóre tagi już nie istnieją.`)
};

const pt_upload_preflight_tags_unknown = /** @type {(inputs: Upload_Preflight_Tags_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Algumas tags não existem mais.`)
};

const ru_upload_preflight_tags_unknown = /** @type {(inputs: Upload_Preflight_Tags_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Некоторых тегов больше нет.`)
};

const sv_upload_preflight_tags_unknown = /** @type {(inputs: Upload_Preflight_Tags_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vissa taggar finns inte längre.`)
};

const tr_upload_preflight_tags_unknown = /** @type {(inputs: Upload_Preflight_Tags_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bazı etiketler artık yok.`)
};

const zh_upload_preflight_tags_unknown = /** @type {(inputs: Upload_Preflight_Tags_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`部分标签已不存在。`)
};

const ja_upload_preflight_tags_unknown = /** @type {(inputs: Upload_Preflight_Tags_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一部のタグはもう存在しません。`)
};

/**
* | output |
* | --- |
* | "Some tags don’t exist any more." |
*
* @param {Upload_Preflight_Tags_UnknownInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_tags_unknown = /** @type {((inputs?: Upload_Preflight_Tags_UnknownInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Tags_UnknownInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_tags_unknown(inputs)
	if (locale === "de") return de_upload_preflight_tags_unknown(inputs)
	if (locale === "fr") return fr_upload_preflight_tags_unknown(inputs)
	if (locale === "it") return it_upload_preflight_tags_unknown(inputs)
	if (locale === "nl") return nl_upload_preflight_tags_unknown(inputs)
	if (locale === "pl") return pl_upload_preflight_tags_unknown(inputs)
	if (locale === "pt") return pt_upload_preflight_tags_unknown(inputs)
	if (locale === "ru") return ru_upload_preflight_tags_unknown(inputs)
	if (locale === "sv") return sv_upload_preflight_tags_unknown(inputs)
	if (locale === "tr") return tr_upload_preflight_tags_unknown(inputs)
	if (locale === "zh") return zh_upload_preflight_tags_unknown(inputs)
	if (locale === "ja") return ja_upload_preflight_tags_unknown(inputs)
	return en_upload_preflight_tags_unknown(inputs)
});
