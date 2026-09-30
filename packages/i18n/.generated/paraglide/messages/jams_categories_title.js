/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Categories_TitleInputs */

const en_jams_categories_title = /** @type {(inputs: Jams_Categories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voting categories`)
};

const es_jams_categories_title = /** @type {(inputs: Jams_Categories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorías de votación`)
};

const de_jams_categories_title = /** @type {(inputs: Jams_Categories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wertungskategorien`)
};

const fr_jams_categories_title = /** @type {(inputs: Jams_Categories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Catégories de vote`)
};

const it_jams_categories_title = /** @type {(inputs: Jams_Categories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorie di voto`)
};

const nl_jams_categories_title = /** @type {(inputs: Jams_Categories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stemcategorieën`)
};

const pl_jams_categories_title = /** @type {(inputs: Jams_Categories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorie głosowania`)
};

const pt_jams_categories_title = /** @type {(inputs: Jams_Categories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorias de votação`)
};

const ru_jams_categories_title = /** @type {(inputs: Jams_Categories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Категории голосования`)
};

const sv_jams_categories_title = /** @type {(inputs: Jams_Categories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Röstningskategorier`)
};

const tr_jams_categories_title = /** @type {(inputs: Jams_Categories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oylama kategorileri`)
};

const zh_jams_categories_title = /** @type {(inputs: Jams_Categories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票类别`)
};

const ja_jams_categories_title = /** @type {(inputs: Jams_Categories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票カテゴリ`)
};

/**
* | output |
* | --- |
* | "Voting categories" |
*
* @param {Jams_Categories_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_categories_title = /** @type {((inputs?: Jams_Categories_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Categories_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_categories_title(inputs)
	if (locale === "de") return de_jams_categories_title(inputs)
	if (locale === "fr") return fr_jams_categories_title(inputs)
	if (locale === "it") return it_jams_categories_title(inputs)
	if (locale === "nl") return nl_jams_categories_title(inputs)
	if (locale === "pl") return pl_jams_categories_title(inputs)
	if (locale === "pt") return pt_jams_categories_title(inputs)
	if (locale === "ru") return ru_jams_categories_title(inputs)
	if (locale === "sv") return sv_jams_categories_title(inputs)
	if (locale === "tr") return tr_jams_categories_title(inputs)
	if (locale === "zh") return zh_jams_categories_title(inputs)
	if (locale === "ja") return ja_jams_categories_title(inputs)
	return en_jams_categories_title(inputs)
});
