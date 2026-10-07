/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Status_PublishedInputs */

const en_basecamp_status_published = /** @type {(inputs: Basecamp_Status_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Published`)
};

const es_basecamp_status_published = /** @type {(inputs: Basecamp_Status_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicado`)
};

const de_basecamp_status_published = /** @type {(inputs: Basecamp_Status_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veröffentlicht`)
};

const fr_basecamp_status_published = /** @type {(inputs: Basecamp_Status_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publié`)
};

const it_basecamp_status_published = /** @type {(inputs: Basecamp_Status_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblicato`)
};

const nl_basecamp_status_published = /** @type {(inputs: Basecamp_Status_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gepubliceerd`)
};

const pl_basecamp_status_published = /** @type {(inputs: Basecamp_Status_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opublikowany`)
};

const pt_basecamp_status_published = /** @type {(inputs: Basecamp_Status_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicado`)
};

const ru_basecamp_status_published = /** @type {(inputs: Basecamp_Status_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опубликован`)
};

const sv_basecamp_status_published = /** @type {(inputs: Basecamp_Status_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicerad`)
};

const tr_basecamp_status_published = /** @type {(inputs: Basecamp_Status_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yayında`)
};

const zh_basecamp_status_published = /** @type {(inputs: Basecamp_Status_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已发布`)
};

const ja_basecamp_status_published = /** @type {(inputs: Basecamp_Status_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開中`)
};

/**
* | output |
* | --- |
* | "Published" |
*
* @param {Basecamp_Status_PublishedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_status_published = /** @type {((inputs?: Basecamp_Status_PublishedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Status_PublishedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_status_published(inputs)
	if (locale === "de") return de_basecamp_status_published(inputs)
	if (locale === "fr") return fr_basecamp_status_published(inputs)
	if (locale === "it") return it_basecamp_status_published(inputs)
	if (locale === "nl") return nl_basecamp_status_published(inputs)
	if (locale === "pl") return pl_basecamp_status_published(inputs)
	if (locale === "pt") return pt_basecamp_status_published(inputs)
	if (locale === "ru") return ru_basecamp_status_published(inputs)
	if (locale === "sv") return sv_basecamp_status_published(inputs)
	if (locale === "tr") return tr_basecamp_status_published(inputs)
	if (locale === "zh") return zh_basecamp_status_published(inputs)
	if (locale === "ja") return ja_basecamp_status_published(inputs)
	return en_basecamp_status_published(inputs)
});
