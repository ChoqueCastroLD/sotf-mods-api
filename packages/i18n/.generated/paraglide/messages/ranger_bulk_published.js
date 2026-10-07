/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Ranger_Bulk_PublishedInputs */

const en_ranger_bulk_published = /** @type {(inputs: Ranger_Bulk_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Published: ${i?.count}`)
};

const es_ranger_bulk_published = /** @type {(inputs: Ranger_Bulk_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Publicados: ${i?.count}`)
};

const de_ranger_bulk_published = /** @type {(inputs: Ranger_Bulk_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Veröffentlicht: ${i?.count}`)
};

const fr_ranger_bulk_published = /** @type {(inputs: Ranger_Bulk_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Publiés : ${i?.count}`)
};

const it_ranger_bulk_published = /** @type {(inputs: Ranger_Bulk_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pubblicati: ${i?.count}`)
};

const nl_ranger_bulk_published = /** @type {(inputs: Ranger_Bulk_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gepubliceerd: ${i?.count}`)
};

const pl_ranger_bulk_published = /** @type {(inputs: Ranger_Bulk_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Opublikowano: ${i?.count}`)
};

const pt_ranger_bulk_published = /** @type {(inputs: Ranger_Bulk_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Publicados: ${i?.count}`)
};

const ru_ranger_bulk_published = /** @type {(inputs: Ranger_Bulk_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Опубликовано: ${i?.count}`)
};

const sv_ranger_bulk_published = /** @type {(inputs: Ranger_Bulk_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Publicerade: ${i?.count}`)
};

const tr_ranger_bulk_published = /** @type {(inputs: Ranger_Bulk_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Yayımlanan: ${i?.count}`)
};

const zh_ranger_bulk_published = /** @type {(inputs: Ranger_Bulk_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已发布：${i?.count}`)
};

const ja_ranger_bulk_published = /** @type {(inputs: Ranger_Bulk_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`公開しました: ${i?.count}`)
};

/**
* | output |
* | --- |
* | "Published: {count}" |
*
* @param {Ranger_Bulk_PublishedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_bulk_published = /** @type {((inputs: Ranger_Bulk_PublishedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Bulk_PublishedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_bulk_published(inputs)
	if (locale === "de") return de_ranger_bulk_published(inputs)
	if (locale === "fr") return fr_ranger_bulk_published(inputs)
	if (locale === "it") return it_ranger_bulk_published(inputs)
	if (locale === "nl") return nl_ranger_bulk_published(inputs)
	if (locale === "pl") return pl_ranger_bulk_published(inputs)
	if (locale === "pt") return pt_ranger_bulk_published(inputs)
	if (locale === "ru") return ru_ranger_bulk_published(inputs)
	if (locale === "sv") return sv_ranger_bulk_published(inputs)
	if (locale === "tr") return tr_ranger_bulk_published(inputs)
	if (locale === "zh") return zh_ranger_bulk_published(inputs)
	if (locale === "ja") return ja_ranger_bulk_published(inputs)
	return en_ranger_bulk_published(inputs)
});
