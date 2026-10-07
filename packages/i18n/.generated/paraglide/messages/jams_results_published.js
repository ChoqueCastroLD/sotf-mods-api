/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Jams_Results_PublishedInputs */

const en_jams_results_published = /** @type {(inputs: Jams_Results_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Published ${i?.date}.`)
};

const es_jams_results_published = /** @type {(inputs: Jams_Results_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Publicado el ${i?.date}.`)
};

const de_jams_results_published = /** @type {(inputs: Jams_Results_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Veröffentlicht am ${i?.date}.`)
};

const fr_jams_results_published = /** @type {(inputs: Jams_Results_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Publié le ${i?.date}.`)
};

const it_jams_results_published = /** @type {(inputs: Jams_Results_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pubblicato il ${i?.date}.`)
};

const nl_jams_results_published = /** @type {(inputs: Jams_Results_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gepubliceerd op ${i?.date}.`)
};

const pl_jams_results_published = /** @type {(inputs: Jams_Results_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Opublikowano ${i?.date}.`)
};

const pt_jams_results_published = /** @type {(inputs: Jams_Results_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Publicado em ${i?.date}.`)
};

const ru_jams_results_published = /** @type {(inputs: Jams_Results_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Опубликовано ${i?.date}.`)
};

const sv_jams_results_published = /** @type {(inputs: Jams_Results_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Publicerad ${i?.date}.`)
};

const tr_jams_results_published = /** @type {(inputs: Jams_Results_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} tarihinde yayımlandı.`)
};

const zh_jams_results_published = /** @type {(inputs: Jams_Results_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`发布于 ${i?.date}。`)
};

const ja_jams_results_published = /** @type {(inputs: Jams_Results_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} に公開しました。`)
};

/**
* | output |
* | --- |
* | "Published {date}." |
*
* @param {Jams_Results_PublishedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_results_published = /** @type {((inputs: Jams_Results_PublishedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Results_PublishedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_results_published(inputs)
	if (locale === "de") return de_jams_results_published(inputs)
	if (locale === "fr") return fr_jams_results_published(inputs)
	if (locale === "it") return it_jams_results_published(inputs)
	if (locale === "nl") return nl_jams_results_published(inputs)
	if (locale === "pl") return pl_jams_results_published(inputs)
	if (locale === "pt") return pt_jams_results_published(inputs)
	if (locale === "ru") return ru_jams_results_published(inputs)
	if (locale === "sv") return sv_jams_results_published(inputs)
	if (locale === "tr") return tr_jams_results_published(inputs)
	if (locale === "zh") return zh_jams_results_published(inputs)
	if (locale === "ja") return ja_jams_results_published(inputs)
	return en_jams_results_published(inputs)
});
