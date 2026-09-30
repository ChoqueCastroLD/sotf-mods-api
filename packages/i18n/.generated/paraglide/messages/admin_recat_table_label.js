/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Table_LabelInputs */

const en_admin_recat_table_label = /** @type {(inputs: Admin_Recat_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suggested categories`)
};

const es_admin_recat_table_label = /** @type {(inputs: Admin_Recat_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorías sugeridas`)
};

const de_admin_recat_table_label = /** @type {(inputs: Admin_Recat_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorgeschlagene Kategorien`)
};

const fr_admin_recat_table_label = /** @type {(inputs: Admin_Recat_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Catégories suggérées`)
};

const it_admin_recat_table_label = /** @type {(inputs: Admin_Recat_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorie suggerite`)
};

const nl_admin_recat_table_label = /** @type {(inputs: Admin_Recat_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voorgestelde categorieën`)
};

const pl_admin_recat_table_label = /** @type {(inputs: Admin_Recat_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sugerowane kategorie`)
};

const pt_admin_recat_table_label = /** @type {(inputs: Admin_Recat_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorias sugeridas`)
};

const ru_admin_recat_table_label = /** @type {(inputs: Admin_Recat_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Предложенные категории`)
};

const sv_admin_recat_table_label = /** @type {(inputs: Admin_Recat_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Föreslagna kategorier`)
};

const tr_admin_recat_table_label = /** @type {(inputs: Admin_Recat_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önerilen kategoriler`)
};

const zh_admin_recat_table_label = /** @type {(inputs: Admin_Recat_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建议的分类`)
};

const ja_admin_recat_table_label = /** @type {(inputs: Admin_Recat_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提案されたカテゴリー`)
};

/**
* | output |
* | --- |
* | "Suggested categories" |
*
* @param {Admin_Recat_Table_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_table_label = /** @type {((inputs?: Admin_Recat_Table_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Table_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_table_label(inputs)
	if (locale === "de") return de_admin_recat_table_label(inputs)
	if (locale === "fr") return fr_admin_recat_table_label(inputs)
	if (locale === "it") return it_admin_recat_table_label(inputs)
	if (locale === "nl") return nl_admin_recat_table_label(inputs)
	if (locale === "pl") return pl_admin_recat_table_label(inputs)
	if (locale === "pt") return pt_admin_recat_table_label(inputs)
	if (locale === "ru") return ru_admin_recat_table_label(inputs)
	if (locale === "sv") return sv_admin_recat_table_label(inputs)
	if (locale === "tr") return tr_admin_recat_table_label(inputs)
	if (locale === "zh") return zh_admin_recat_table_label(inputs)
	if (locale === "ja") return ja_admin_recat_table_label(inputs)
	return en_admin_recat_table_label(inputs)
});
