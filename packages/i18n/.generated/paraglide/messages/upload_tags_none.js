/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Tags_NoneInputs */

const en_upload_tags_none = /** @type {(inputs: Upload_Tags_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No tag matches.`)
};

const es_upload_tags_none = /** @type {(inputs: Upload_Tags_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ninguna etiqueta coincide.`)
};

const de_upload_tags_none = /** @type {(inputs: Upload_Tags_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kein Tag passt.`)
};

const fr_upload_tags_none = /** @type {(inputs: Upload_Tags_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun tag ne correspond.`)
};

const it_upload_tags_none = /** @type {(inputs: Upload_Tags_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun tag corrisponde.`)
};

const nl_upload_tags_none = /** @type {(inputs: Upload_Tags_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen tag komt overeen.`)
};

const pl_upload_tags_none = /** @type {(inputs: Upload_Tags_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Żaden tag nie pasuje.`)
};

const pt_upload_tags_none = /** @type {(inputs: Upload_Tags_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma tag corresponde.`)
};

const ru_upload_tags_none = /** @type {(inputs: Upload_Tags_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подходящих тегов нет.`)
};

const sv_upload_tags_none = /** @type {(inputs: Upload_Tags_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen tagg matchar.`)
};

const tr_upload_tags_none = /** @type {(inputs: Upload_Tags_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eşleşen etiket yok.`)
};

const zh_upload_tags_none = /** @type {(inputs: Upload_Tags_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有匹配的标签。`)
};

const ja_upload_tags_none = /** @type {(inputs: Upload_Tags_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一致するタグはありません。`)
};

/**
* | output |
* | --- |
* | "No tag matches." |
*
* @param {Upload_Tags_NoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_tags_none = /** @type {((inputs?: Upload_Tags_NoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Tags_NoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_tags_none(inputs)
	if (locale === "de") return de_upload_tags_none(inputs)
	if (locale === "fr") return fr_upload_tags_none(inputs)
	if (locale === "it") return it_upload_tags_none(inputs)
	if (locale === "nl") return nl_upload_tags_none(inputs)
	if (locale === "pl") return pl_upload_tags_none(inputs)
	if (locale === "pt") return pt_upload_tags_none(inputs)
	if (locale === "ru") return ru_upload_tags_none(inputs)
	if (locale === "sv") return sv_upload_tags_none(inputs)
	if (locale === "tr") return tr_upload_tags_none(inputs)
	if (locale === "zh") return zh_upload_tags_none(inputs)
	if (locale === "ja") return ja_upload_tags_none(inputs)
	return en_upload_tags_none(inputs)
});
