/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Bulk_Category_PlaceholderInputs */

const en_admin_recat_bulk_category_placeholder = /** @type {(inputs: Admin_Recat_Bulk_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose…`)
};

const es_admin_recat_bulk_category_placeholder = /** @type {(inputs: Admin_Recat_Bulk_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige…`)
};

const de_admin_recat_bulk_category_placeholder = /** @type {(inputs: Admin_Recat_Bulk_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wählen …`)
};

const fr_admin_recat_bulk_category_placeholder = /** @type {(inputs: Admin_Recat_Bulk_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisir…`)
};

const it_admin_recat_bulk_category_placeholder = /** @type {(inputs: Admin_Recat_Bulk_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli…`)
};

const nl_admin_recat_bulk_category_placeholder = /** @type {(inputs: Admin_Recat_Bulk_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies…`)
};

const pl_admin_recat_bulk_category_placeholder = /** @type {(inputs: Admin_Recat_Bulk_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz…`)
};

const pt_admin_recat_bulk_category_placeholder = /** @type {(inputs: Admin_Recat_Bulk_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha…`)
};

const ru_admin_recat_bulk_category_placeholder = /** @type {(inputs: Admin_Recat_Bulk_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите…`)
};

const sv_admin_recat_bulk_category_placeholder = /** @type {(inputs: Admin_Recat_Bulk_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj …`)
};

const tr_admin_recat_bulk_category_placeholder = /** @type {(inputs: Admin_Recat_Bulk_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seç…`)
};

const zh_admin_recat_bulk_category_placeholder = /** @type {(inputs: Admin_Recat_Bulk_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择……`)
};

const ja_admin_recat_bulk_category_placeholder = /** @type {(inputs: Admin_Recat_Bulk_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`選択…`)
};

/**
* | output |
* | --- |
* | "Choose…" |
*
* @param {Admin_Recat_Bulk_Category_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_bulk_category_placeholder = /** @type {((inputs?: Admin_Recat_Bulk_Category_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Bulk_Category_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_bulk_category_placeholder(inputs)
	if (locale === "de") return de_admin_recat_bulk_category_placeholder(inputs)
	if (locale === "fr") return fr_admin_recat_bulk_category_placeholder(inputs)
	if (locale === "it") return it_admin_recat_bulk_category_placeholder(inputs)
	if (locale === "nl") return nl_admin_recat_bulk_category_placeholder(inputs)
	if (locale === "pl") return pl_admin_recat_bulk_category_placeholder(inputs)
	if (locale === "pt") return pt_admin_recat_bulk_category_placeholder(inputs)
	if (locale === "ru") return ru_admin_recat_bulk_category_placeholder(inputs)
	if (locale === "sv") return sv_admin_recat_bulk_category_placeholder(inputs)
	if (locale === "tr") return tr_admin_recat_bulk_category_placeholder(inputs)
	if (locale === "zh") return zh_admin_recat_bulk_category_placeholder(inputs)
	if (locale === "ja") return ja_admin_recat_bulk_category_placeholder(inputs)
	return en_admin_recat_bulk_category_placeholder(inputs)
});
