/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Spec_PublishedInputs */

const en_builds_spec_published = /** @type {(inputs: Builds_Spec_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Published`)
};

const es_builds_spec_published = /** @type {(inputs: Builds_Spec_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicada`)
};

const de_builds_spec_published = /** @type {(inputs: Builds_Spec_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veröffentlicht`)
};

const fr_builds_spec_published = /** @type {(inputs: Builds_Spec_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publiée`)
};

const it_builds_spec_published = /** @type {(inputs: Builds_Spec_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblicata`)
};

const nl_builds_spec_published = /** @type {(inputs: Builds_Spec_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gepubliceerd`)
};

const pl_builds_spec_published = /** @type {(inputs: Builds_Spec_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opublikowano`)
};

const pt_builds_spec_published = /** @type {(inputs: Builds_Spec_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicada`)
};

const ru_builds_spec_published = /** @type {(inputs: Builds_Spec_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опубликовано`)
};

const sv_builds_spec_published = /** @type {(inputs: Builds_Spec_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicerat`)
};

const tr_builds_spec_published = /** @type {(inputs: Builds_Spec_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yayınlandı`)
};

const zh_builds_spec_published = /** @type {(inputs: Builds_Spec_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布于`)
};

const ja_builds_spec_published = /** @type {(inputs: Builds_Spec_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開日`)
};

/**
* | output |
* | --- |
* | "Published" |
*
* @param {Builds_Spec_PublishedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_spec_published = /** @type {((inputs?: Builds_Spec_PublishedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Spec_PublishedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_spec_published(inputs)
	if (locale === "de") return de_builds_spec_published(inputs)
	if (locale === "fr") return fr_builds_spec_published(inputs)
	if (locale === "it") return it_builds_spec_published(inputs)
	if (locale === "nl") return nl_builds_spec_published(inputs)
	if (locale === "pl") return pl_builds_spec_published(inputs)
	if (locale === "pt") return pt_builds_spec_published(inputs)
	if (locale === "ru") return ru_builds_spec_published(inputs)
	if (locale === "sv") return sv_builds_spec_published(inputs)
	if (locale === "tr") return tr_builds_spec_published(inputs)
	if (locale === "zh") return zh_builds_spec_published(inputs)
	if (locale === "ja") return ja_builds_spec_published(inputs)
	return en_builds_spec_published(inputs)
});
