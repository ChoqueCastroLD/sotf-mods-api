/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Fact_PublishedInputs */

const en_mod_fact_published = /** @type {(inputs: Mod_Fact_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Published`)
};

const es_mod_fact_published = /** @type {(inputs: Mod_Fact_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicado`)
};

const de_mod_fact_published = /** @type {(inputs: Mod_Fact_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veröffentlicht`)
};

const fr_mod_fact_published = /** @type {(inputs: Mod_Fact_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publié`)
};

const it_mod_fact_published = /** @type {(inputs: Mod_Fact_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblicata`)
};

const nl_mod_fact_published = /** @type {(inputs: Mod_Fact_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gepubliceerd`)
};

const pl_mod_fact_published = /** @type {(inputs: Mod_Fact_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opublikowano`)
};

const pt_mod_fact_published = /** @type {(inputs: Mod_Fact_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicado`)
};

const ru_mod_fact_published = /** @type {(inputs: Mod_Fact_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опубликован`)
};

const sv_mod_fact_published = /** @type {(inputs: Mod_Fact_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicerad`)
};

const tr_mod_fact_published = /** @type {(inputs: Mod_Fact_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yayımlandı`)
};

const zh_mod_fact_published = /** @type {(inputs: Mod_Fact_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布于`)
};

const ja_mod_fact_published = /** @type {(inputs: Mod_Fact_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開日`)
};

/**
* | output |
* | --- |
* | "Published" |
*
* @param {Mod_Fact_PublishedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_fact_published = /** @type {((inputs?: Mod_Fact_PublishedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Fact_PublishedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_fact_published(inputs)
	if (locale === "de") return de_mod_fact_published(inputs)
	if (locale === "fr") return fr_mod_fact_published(inputs)
	if (locale === "it") return it_mod_fact_published(inputs)
	if (locale === "nl") return nl_mod_fact_published(inputs)
	if (locale === "pl") return pl_mod_fact_published(inputs)
	if (locale === "pt") return pt_mod_fact_published(inputs)
	if (locale === "ru") return ru_mod_fact_published(inputs)
	if (locale === "sv") return sv_mod_fact_published(inputs)
	if (locale === "tr") return tr_mod_fact_published(inputs)
	if (locale === "zh") return zh_mod_fact_published(inputs)
	if (locale === "ja") return ja_mod_fact_published(inputs)
	return en_mod_fact_published(inputs)
});
