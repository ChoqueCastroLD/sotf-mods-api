/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Upload_Links_FullInputs */

const en_upload_links_full = /** @type {(inputs: Upload_Links_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.max} links is the maximum.`)
};

const es_upload_links_full = /** @type {(inputs: Upload_Links_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`El máximo son ${i?.max} enlaces.`)
};

const de_upload_links_full = /** @type {(inputs: Upload_Links_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Höchstens ${i?.max} Links.`)
};

const fr_upload_links_full = /** @type {(inputs: Upload_Links_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.max} liens au maximum.`)
};

const it_upload_links_full = /** @type {(inputs: Upload_Links_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Massimo ${i?.max} link.`)
};

const nl_upload_links_full = /** @type {(inputs: Upload_Links_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Maximaal ${i?.max} links.`)
};

const pl_upload_links_full = /** @type {(inputs: Upload_Links_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Maksymalnie ${i?.max} linków.`)
};

const pt_upload_links_full = /** @type {(inputs: Upload_Links_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`No máximo ${i?.max} links.`)
};

const ru_upload_links_full = /** @type {(inputs: Upload_Links_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Не больше ${i?.max} ссылок.`)
};

const sv_upload_links_full = /** @type {(inputs: Upload_Links_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Högst ${i?.max} länkar.`)
};

const tr_upload_links_full = /** @type {(inputs: Upload_Links_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`En fazla ${i?.max} bağlantı.`)
};

const zh_upload_links_full = /** @type {(inputs: Upload_Links_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最多 ${i?.max} 个链接。`)
};

const ja_upload_links_full = /** @type {(inputs: Upload_Links_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`リンクは最大 ${i?.max} 件です。`)
};

/**
* | output |
* | --- |
* | "{max} links is the maximum." |
*
* @param {Upload_Links_FullInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_links_full = /** @type {((inputs: Upload_Links_FullInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Links_FullInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_links_full(inputs)
	if (locale === "de") return de_upload_links_full(inputs)
	if (locale === "fr") return fr_upload_links_full(inputs)
	if (locale === "it") return it_upload_links_full(inputs)
	if (locale === "nl") return nl_upload_links_full(inputs)
	if (locale === "pl") return pl_upload_links_full(inputs)
	if (locale === "pt") return pt_upload_links_full(inputs)
	if (locale === "ru") return ru_upload_links_full(inputs)
	if (locale === "sv") return sv_upload_links_full(inputs)
	if (locale === "tr") return tr_upload_links_full(inputs)
	if (locale === "zh") return zh_upload_links_full(inputs)
	if (locale === "ja") return ja_upload_links_full(inputs)
	return en_upload_links_full(inputs)
});
