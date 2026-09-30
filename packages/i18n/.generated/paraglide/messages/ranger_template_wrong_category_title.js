/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Template_Wrong_Category_TitleInputs */

const en_ranger_template_wrong_category_title = /** @type {(inputs: Ranger_Template_Wrong_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wrong category`)
};

const es_ranger_template_wrong_category_title = /** @type {(inputs: Ranger_Template_Wrong_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoría incorrecta`)
};

const de_ranger_template_wrong_category_title = /** @type {(inputs: Ranger_Template_Wrong_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falsche Kategorie`)
};

const fr_ranger_template_wrong_category_title = /** @type {(inputs: Ranger_Template_Wrong_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mauvaise catégorie`)
};

const it_ranger_template_wrong_category_title = /** @type {(inputs: Ranger_Template_Wrong_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoria sbagliata`)
};

const nl_ranger_template_wrong_category_title = /** @type {(inputs: Ranger_Template_Wrong_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verkeerde categorie`)
};

const pl_ranger_template_wrong_category_title = /** @type {(inputs: Ranger_Template_Wrong_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zła kategoria`)
};

const pt_ranger_template_wrong_category_title = /** @type {(inputs: Ranger_Template_Wrong_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoria errada`)
};

const ru_ranger_template_wrong_category_title = /** @type {(inputs: Ranger_Template_Wrong_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не та категория`)
};

const sv_ranger_template_wrong_category_title = /** @type {(inputs: Ranger_Template_Wrong_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fel kategori`)
};

const tr_ranger_template_wrong_category_title = /** @type {(inputs: Ranger_Template_Wrong_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yanlış kategori`)
};

const zh_ranger_template_wrong_category_title = /** @type {(inputs: Ranger_Template_Wrong_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分类错误`)
};

const ja_ranger_template_wrong_category_title = /** @type {(inputs: Ranger_Template_Wrong_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カテゴリーが違う`)
};

/**
* | output |
* | --- |
* | "Wrong category" |
*
* @param {Ranger_Template_Wrong_Category_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_template_wrong_category_title = /** @type {((inputs?: Ranger_Template_Wrong_Category_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Template_Wrong_Category_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_template_wrong_category_title(inputs)
	if (locale === "de") return de_ranger_template_wrong_category_title(inputs)
	if (locale === "fr") return fr_ranger_template_wrong_category_title(inputs)
	if (locale === "it") return it_ranger_template_wrong_category_title(inputs)
	if (locale === "nl") return nl_ranger_template_wrong_category_title(inputs)
	if (locale === "pl") return pl_ranger_template_wrong_category_title(inputs)
	if (locale === "pt") return pt_ranger_template_wrong_category_title(inputs)
	if (locale === "ru") return ru_ranger_template_wrong_category_title(inputs)
	if (locale === "sv") return sv_ranger_template_wrong_category_title(inputs)
	if (locale === "tr") return tr_ranger_template_wrong_category_title(inputs)
	if (locale === "zh") return zh_ranger_template_wrong_category_title(inputs)
	if (locale === "ja") return ja_ranger_template_wrong_category_title(inputs)
	return en_ranger_template_wrong_category_title(inputs)
});
