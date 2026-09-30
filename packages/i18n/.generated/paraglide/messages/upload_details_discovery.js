/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Details_DiscoveryInputs */

const en_upload_details_discovery = /** @type {(inputs: Upload_Details_DiscoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Category and tags`)
};

const es_upload_details_discovery = /** @type {(inputs: Upload_Details_DiscoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoría y etiquetas`)
};

const de_upload_details_discovery = /** @type {(inputs: Upload_Details_DiscoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorie und Tags`)
};

const fr_upload_details_discovery = /** @type {(inputs: Upload_Details_DiscoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Catégorie et tags`)
};

const it_upload_details_discovery = /** @type {(inputs: Upload_Details_DiscoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoria e tag`)
};

const nl_upload_details_discovery = /** @type {(inputs: Upload_Details_DiscoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorie en tags`)
};

const pl_upload_details_discovery = /** @type {(inputs: Upload_Details_DiscoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategoria i tagi`)
};

const pt_upload_details_discovery = /** @type {(inputs: Upload_Details_DiscoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoria e tags`)
};

const ru_upload_details_discovery = /** @type {(inputs: Upload_Details_DiscoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Категория и теги`)
};

const sv_upload_details_discovery = /** @type {(inputs: Upload_Details_DiscoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategori och taggar`)
};

const tr_upload_details_discovery = /** @type {(inputs: Upload_Details_DiscoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategori ve etiketler`)
};

const zh_upload_details_discovery = /** @type {(inputs: Upload_Details_DiscoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分类和标签`)
};

const ja_upload_details_discovery = /** @type {(inputs: Upload_Details_DiscoveryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カテゴリーとタグ`)
};

/**
* | output |
* | --- |
* | "Category and tags" |
*
* @param {Upload_Details_DiscoveryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_details_discovery = /** @type {((inputs?: Upload_Details_DiscoveryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Details_DiscoveryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_details_discovery(inputs)
	if (locale === "de") return de_upload_details_discovery(inputs)
	if (locale === "fr") return fr_upload_details_discovery(inputs)
	if (locale === "it") return it_upload_details_discovery(inputs)
	if (locale === "nl") return nl_upload_details_discovery(inputs)
	if (locale === "pl") return pl_upload_details_discovery(inputs)
	if (locale === "pt") return pt_upload_details_discovery(inputs)
	if (locale === "ru") return ru_upload_details_discovery(inputs)
	if (locale === "sv") return sv_upload_details_discovery(inputs)
	if (locale === "tr") return tr_upload_details_discovery(inputs)
	if (locale === "zh") return zh_upload_details_discovery(inputs)
	if (locale === "ja") return ja_upload_details_discovery(inputs)
	return en_upload_details_discovery(inputs)
});
