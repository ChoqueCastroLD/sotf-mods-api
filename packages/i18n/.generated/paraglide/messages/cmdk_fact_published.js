/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Fact_PublishedInputs */

const en_cmdk_fact_published = /** @type {(inputs: Cmdk_Fact_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Published`)
};

const es_cmdk_fact_published = /** @type {(inputs: Cmdk_Fact_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicados`)
};

const de_cmdk_fact_published = /** @type {(inputs: Cmdk_Fact_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veröffentlicht`)
};

const fr_cmdk_fact_published = /** @type {(inputs: Cmdk_Fact_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publiés`)
};

const it_cmdk_fact_published = /** @type {(inputs: Cmdk_Fact_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblicate`)
};

const nl_cmdk_fact_published = /** @type {(inputs: Cmdk_Fact_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gepubliceerd`)
};

const pl_cmdk_fact_published = /** @type {(inputs: Cmdk_Fact_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opublikowane`)
};

const pt_cmdk_fact_published = /** @type {(inputs: Cmdk_Fact_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicados`)
};

const ru_cmdk_fact_published = /** @type {(inputs: Cmdk_Fact_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опубликовано`)
};

const sv_cmdk_fact_published = /** @type {(inputs: Cmdk_Fact_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicerade`)
};

const tr_cmdk_fact_published = /** @type {(inputs: Cmdk_Fact_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yayımlanan`)
};

const zh_cmdk_fact_published = /** @type {(inputs: Cmdk_Fact_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已发布`)
};

const ja_cmdk_fact_published = /** @type {(inputs: Cmdk_Fact_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開数`)
};

/**
* | output |
* | --- |
* | "Published" |
*
* @param {Cmdk_Fact_PublishedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_fact_published = /** @type {((inputs?: Cmdk_Fact_PublishedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Fact_PublishedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_fact_published(inputs)
	if (locale === "de") return de_cmdk_fact_published(inputs)
	if (locale === "fr") return fr_cmdk_fact_published(inputs)
	if (locale === "it") return it_cmdk_fact_published(inputs)
	if (locale === "nl") return nl_cmdk_fact_published(inputs)
	if (locale === "pl") return pl_cmdk_fact_published(inputs)
	if (locale === "pt") return pt_cmdk_fact_published(inputs)
	if (locale === "ru") return ru_cmdk_fact_published(inputs)
	if (locale === "sv") return sv_cmdk_fact_published(inputs)
	if (locale === "tr") return tr_cmdk_fact_published(inputs)
	if (locale === "zh") return zh_cmdk_fact_published(inputs)
	if (locale === "ja") return ja_cmdk_fact_published(inputs)
	return en_cmdk_fact_published(inputs)
});
