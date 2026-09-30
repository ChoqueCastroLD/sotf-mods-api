/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Tags_FilterInputs */

const en_upload_tags_filter = /** @type {(inputs: Upload_Tags_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter tags`)
};

const es_upload_tags_filter = /** @type {(inputs: Upload_Tags_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrar etiquetas`)
};

const de_upload_tags_filter = /** @type {(inputs: Upload_Tags_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags filtern`)
};

const fr_upload_tags_filter = /** @type {(inputs: Upload_Tags_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrer les tags`)
};

const it_upload_tags_filter = /** @type {(inputs: Upload_Tags_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtra i tag`)
};

const nl_upload_tags_filter = /** @type {(inputs: Upload_Tags_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags filteren`)
};

const pl_upload_tags_filter = /** @type {(inputs: Upload_Tags_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtruj tagi`)
};

const pt_upload_tags_filter = /** @type {(inputs: Upload_Tags_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrar tags`)
};

const ru_upload_tags_filter = /** @type {(inputs: Upload_Tags_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Фильтр тегов`)
};

const sv_upload_tags_filter = /** @type {(inputs: Upload_Tags_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrera taggar`)
};

const tr_upload_tags_filter = /** @type {(inputs: Upload_Tags_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etiketleri filtrele`)
};

const zh_upload_tags_filter = /** @type {(inputs: Upload_Tags_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`筛选标签`)
};

const ja_upload_tags_filter = /** @type {(inputs: Upload_Tags_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`タグを絞り込む`)
};

/**
* | output |
* | --- |
* | "Filter tags" |
*
* @param {Upload_Tags_FilterInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_tags_filter = /** @type {((inputs?: Upload_Tags_FilterInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Tags_FilterInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_tags_filter(inputs)
	if (locale === "de") return de_upload_tags_filter(inputs)
	if (locale === "fr") return fr_upload_tags_filter(inputs)
	if (locale === "it") return it_upload_tags_filter(inputs)
	if (locale === "nl") return nl_upload_tags_filter(inputs)
	if (locale === "pl") return pl_upload_tags_filter(inputs)
	if (locale === "pt") return pt_upload_tags_filter(inputs)
	if (locale === "ru") return ru_upload_tags_filter(inputs)
	if (locale === "sv") return sv_upload_tags_filter(inputs)
	if (locale === "tr") return tr_upload_tags_filter(inputs)
	if (locale === "zh") return zh_upload_tags_filter(inputs)
	if (locale === "ja") return ja_upload_tags_filter(inputs)
	return en_upload_tags_filter(inputs)
});
