/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Bulk_Clear_TagsInputs */

const en_admin_recat_bulk_clear_tags = /** @type {(inputs: Admin_Recat_Bulk_Clear_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clear tags`)
};

const es_admin_recat_bulk_clear_tags = /** @type {(inputs: Admin_Recat_Bulk_Clear_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitar etiquetas`)
};

const de_admin_recat_bulk_clear_tags = /** @type {(inputs: Admin_Recat_Bulk_Clear_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags leeren`)
};

const fr_admin_recat_bulk_clear_tags = /** @type {(inputs: Admin_Recat_Bulk_Clear_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vider les tags`)
};

const it_admin_recat_bulk_clear_tags = /** @type {(inputs: Admin_Recat_Bulk_Clear_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Svuota i tag`)
};

const nl_admin_recat_bulk_clear_tags = /** @type {(inputs: Admin_Recat_Bulk_Clear_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags wissen`)
};

const pl_admin_recat_bulk_clear_tags = /** @type {(inputs: Admin_Recat_Bulk_Clear_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyczyść tagi`)
};

const pt_admin_recat_bulk_clear_tags = /** @type {(inputs: Admin_Recat_Bulk_Clear_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limpar tags`)
};

const ru_admin_recat_bulk_clear_tags = /** @type {(inputs: Admin_Recat_Bulk_Clear_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Очистить теги`)
};

const sv_admin_recat_bulk_clear_tags = /** @type {(inputs: Admin_Recat_Bulk_Clear_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rensa taggar`)
};

const tr_admin_recat_bulk_clear_tags = /** @type {(inputs: Admin_Recat_Bulk_Clear_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etiketleri temizle`)
};

const zh_admin_recat_bulk_clear_tags = /** @type {(inputs: Admin_Recat_Bulk_Clear_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清空标签`)
};

const ja_admin_recat_bulk_clear_tags = /** @type {(inputs: Admin_Recat_Bulk_Clear_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`タグをクリア`)
};

/**
* | output |
* | --- |
* | "Clear tags" |
*
* @param {Admin_Recat_Bulk_Clear_TagsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_bulk_clear_tags = /** @type {((inputs?: Admin_Recat_Bulk_Clear_TagsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Bulk_Clear_TagsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_bulk_clear_tags(inputs)
	if (locale === "de") return de_admin_recat_bulk_clear_tags(inputs)
	if (locale === "fr") return fr_admin_recat_bulk_clear_tags(inputs)
	if (locale === "it") return it_admin_recat_bulk_clear_tags(inputs)
	if (locale === "nl") return nl_admin_recat_bulk_clear_tags(inputs)
	if (locale === "pl") return pl_admin_recat_bulk_clear_tags(inputs)
	if (locale === "pt") return pt_admin_recat_bulk_clear_tags(inputs)
	if (locale === "ru") return ru_admin_recat_bulk_clear_tags(inputs)
	if (locale === "sv") return sv_admin_recat_bulk_clear_tags(inputs)
	if (locale === "tr") return tr_admin_recat_bulk_clear_tags(inputs)
	if (locale === "zh") return zh_admin_recat_bulk_clear_tags(inputs)
	if (locale === "ja") return ja_admin_recat_bulk_clear_tags(inputs)
	return en_admin_recat_bulk_clear_tags(inputs)
});
