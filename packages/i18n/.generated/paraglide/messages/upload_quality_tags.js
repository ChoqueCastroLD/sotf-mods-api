/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Quality_TagsInputs */

const en_upload_quality_tags = /** @type {(inputs: Upload_Quality_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags`)
};

const es_upload_quality_tags = /** @type {(inputs: Upload_Quality_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etiquetas`)
};

const de_upload_quality_tags = /** @type {(inputs: Upload_Quality_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags`)
};

const fr_upload_quality_tags = /** @type {(inputs: Upload_Quality_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags`)
};

const it_upload_quality_tags = /** @type {(inputs: Upload_Quality_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tag`)
};

const nl_upload_quality_tags = /** @type {(inputs: Upload_Quality_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags`)
};

const pl_upload_quality_tags = /** @type {(inputs: Upload_Quality_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tagi`)
};

const pt_upload_quality_tags = /** @type {(inputs: Upload_Quality_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags`)
};

const ru_upload_quality_tags = /** @type {(inputs: Upload_Quality_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Теги`)
};

const sv_upload_quality_tags = /** @type {(inputs: Upload_Quality_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taggar`)
};

const tr_upload_quality_tags = /** @type {(inputs: Upload_Quality_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etiketler`)
};

const zh_upload_quality_tags = /** @type {(inputs: Upload_Quality_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标签`)
};

const ja_upload_quality_tags = /** @type {(inputs: Upload_Quality_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`タグ`)
};

/**
* | output |
* | --- |
* | "Tags" |
*
* @param {Upload_Quality_TagsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_quality_tags = /** @type {((inputs?: Upload_Quality_TagsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Quality_TagsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_quality_tags(inputs)
	if (locale === "de") return de_upload_quality_tags(inputs)
	if (locale === "fr") return fr_upload_quality_tags(inputs)
	if (locale === "it") return it_upload_quality_tags(inputs)
	if (locale === "nl") return nl_upload_quality_tags(inputs)
	if (locale === "pl") return pl_upload_quality_tags(inputs)
	if (locale === "pt") return pt_upload_quality_tags(inputs)
	if (locale === "ru") return ru_upload_quality_tags(inputs)
	if (locale === "sv") return sv_upload_quality_tags(inputs)
	if (locale === "tr") return tr_upload_quality_tags(inputs)
	if (locale === "zh") return zh_upload_quality_tags(inputs)
	if (locale === "ja") return ja_upload_quality_tags(inputs)
	return en_upload_quality_tags(inputs)
});
