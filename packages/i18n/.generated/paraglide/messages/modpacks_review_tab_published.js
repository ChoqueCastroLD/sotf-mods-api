/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Review_Tab_PublishedInputs */

const en_modpacks_review_tab_published = /** @type {(inputs: Modpacks_Review_Tab_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Published`)
};

const es_modpacks_review_tab_published = /** @type {(inputs: Modpacks_Review_Tab_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicados`)
};

const de_modpacks_review_tab_published = /** @type {(inputs: Modpacks_Review_Tab_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veröffentlicht`)
};

const fr_modpacks_review_tab_published = /** @type {(inputs: Modpacks_Review_Tab_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publiés`)
};

const it_modpacks_review_tab_published = /** @type {(inputs: Modpacks_Review_Tab_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblicati`)
};

const nl_modpacks_review_tab_published = /** @type {(inputs: Modpacks_Review_Tab_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gepubliceerd`)
};

const pl_modpacks_review_tab_published = /** @type {(inputs: Modpacks_Review_Tab_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opublikowane`)
};

const pt_modpacks_review_tab_published = /** @type {(inputs: Modpacks_Review_Tab_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicados`)
};

const ru_modpacks_review_tab_published = /** @type {(inputs: Modpacks_Review_Tab_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опубликованные`)
};

const sv_modpacks_review_tab_published = /** @type {(inputs: Modpacks_Review_Tab_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicerade`)
};

const tr_modpacks_review_tab_published = /** @type {(inputs: Modpacks_Review_Tab_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yayında`)
};

const zh_modpacks_review_tab_published = /** @type {(inputs: Modpacks_Review_Tab_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已发布`)
};

const ja_modpacks_review_tab_published = /** @type {(inputs: Modpacks_Review_Tab_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開中`)
};

/**
* | output |
* | --- |
* | "Published" |
*
* @param {Modpacks_Review_Tab_PublishedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_review_tab_published = /** @type {((inputs?: Modpacks_Review_Tab_PublishedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Review_Tab_PublishedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_review_tab_published(inputs)
	if (locale === "de") return de_modpacks_review_tab_published(inputs)
	if (locale === "fr") return fr_modpacks_review_tab_published(inputs)
	if (locale === "it") return it_modpacks_review_tab_published(inputs)
	if (locale === "nl") return nl_modpacks_review_tab_published(inputs)
	if (locale === "pl") return pl_modpacks_review_tab_published(inputs)
	if (locale === "pt") return pt_modpacks_review_tab_published(inputs)
	if (locale === "ru") return ru_modpacks_review_tab_published(inputs)
	if (locale === "sv") return sv_modpacks_review_tab_published(inputs)
	if (locale === "tr") return tr_modpacks_review_tab_published(inputs)
	if (locale === "zh") return zh_modpacks_review_tab_published(inputs)
	if (locale === "ja") return ja_modpacks_review_tab_published(inputs)
	return en_modpacks_review_tab_published(inputs)
});
