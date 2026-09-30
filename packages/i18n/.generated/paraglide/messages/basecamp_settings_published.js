/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Settings_PublishedInputs */

const en_basecamp_settings_published = /** @type {(inputs: Basecamp_Settings_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Public and listed in Explore and search.`)
};

const es_basecamp_settings_published = /** @type {(inputs: Basecamp_Settings_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Público y listado en Explorar y en la búsqueda.`)
};

const de_basecamp_settings_published = /** @type {(inputs: Basecamp_Settings_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öffentlich und in Entdecken und der Suche gelistet.`)
};

const fr_basecamp_settings_published = /** @type {(inputs: Basecamp_Settings_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Public et listé dans Explorer et la recherche.`)
};

const it_basecamp_settings_published = /** @type {(inputs: Basecamp_Settings_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblica e presente in Esplora e nella ricerca.`)
};

const nl_basecamp_settings_published = /** @type {(inputs: Basecamp_Settings_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Openbaar en vermeld in Ontdekken en zoeken.`)
};

const pl_basecamp_settings_published = /** @type {(inputs: Basecamp_Settings_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publiczny i widoczny w Odkrywaniu i wyszukiwaniu.`)
};

const pt_basecamp_settings_published = /** @type {(inputs: Basecamp_Settings_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Público e listado em Explorar e na pesquisa.`)
};

const ru_basecamp_settings_published = /** @type {(inputs: Basecamp_Settings_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Публичный, есть в «Обзоре» и поиске.`)
};

const sv_basecamp_settings_published = /** @type {(inputs: Basecamp_Settings_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Offentlig och listad i Utforska och sökningen.`)
};

const tr_basecamp_settings_published = /** @type {(inputs: Basecamp_Settings_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herkese açık; Keşfet'te ve aramada listeleniyor.`)
};

const zh_basecamp_settings_published = /** @type {(inputs: Basecamp_Settings_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公开，并显示在“探索”和搜索中。`)
};

const ja_basecamp_settings_published = /** @type {(inputs: Basecamp_Settings_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開中で、「探す」と検索に表示されます。`)
};

/**
* | output |
* | --- |
* | "Public and listed in Explore and search." |
*
* @param {Basecamp_Settings_PublishedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_settings_published = /** @type {((inputs?: Basecamp_Settings_PublishedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_PublishedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_settings_published(inputs)
	if (locale === "de") return de_basecamp_settings_published(inputs)
	if (locale === "fr") return fr_basecamp_settings_published(inputs)
	if (locale === "it") return it_basecamp_settings_published(inputs)
	if (locale === "nl") return nl_basecamp_settings_published(inputs)
	if (locale === "pl") return pl_basecamp_settings_published(inputs)
	if (locale === "pt") return pt_basecamp_settings_published(inputs)
	if (locale === "ru") return ru_basecamp_settings_published(inputs)
	if (locale === "sv") return sv_basecamp_settings_published(inputs)
	if (locale === "tr") return tr_basecamp_settings_published(inputs)
	if (locale === "zh") return zh_basecamp_settings_published(inputs)
	if (locale === "ja") return ja_basecamp_settings_published(inputs)
	return en_basecamp_settings_published(inputs)
});
