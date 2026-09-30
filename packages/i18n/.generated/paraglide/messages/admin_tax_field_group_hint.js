/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Field_Group_HintInputs */

const en_admin_tax_field_group_hint = /** @type {(inputs: Admin_Tax_Field_Group_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Groups tags in the filters, e.g. gameplay.`)
};

const es_admin_tax_field_group_hint = /** @type {(inputs: Admin_Tax_Field_Group_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agrupa las etiquetas en los filtros, p. ej. gameplay.`)
};

const de_admin_tax_field_group_hint = /** @type {(inputs: Admin_Tax_Field_Group_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gruppiert Tags in den Filtern, z. B. gameplay.`)
};

const fr_admin_tax_field_group_hint = /** @type {(inputs: Admin_Tax_Field_Group_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regroupe les tags dans les filtres, par ex. gameplay.`)
};

const it_admin_tax_field_group_hint = /** @type {(inputs: Admin_Tax_Field_Group_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raggruppa i tag nei filtri, ad es. gameplay.`)
};

const nl_admin_tax_field_group_hint = /** @type {(inputs: Admin_Tax_Field_Group_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Groepeert tags in de filters, bijv. gameplay.`)
};

const pl_admin_tax_field_group_hint = /** @type {(inputs: Admin_Tax_Field_Group_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grupuje tagi w filtrach, np. gameplay.`)
};

const pt_admin_tax_field_group_hint = /** @type {(inputs: Admin_Tax_Field_Group_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agrupa as tags nos filtros, ex.: gameplay.`)
};

const ru_admin_tax_field_group_hint = /** @type {(inputs: Admin_Tax_Field_Group_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Группирует теги в фильтрах, например gameplay.`)
};

const sv_admin_tax_field_group_hint = /** @type {(inputs: Admin_Tax_Field_Group_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grupperar taggar i filtren, t.ex. gameplay.`)
};

const tr_admin_tax_field_group_hint = /** @type {(inputs: Admin_Tax_Field_Group_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etiketleri filtrelerde gruplar, ör. gameplay.`)
};

const zh_admin_tax_field_group_hint = /** @type {(inputs: Admin_Tax_Field_Group_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在筛选器中对标签分组，例如 gameplay。`)
};

const ja_admin_tax_field_group_hint = /** @type {(inputs: Admin_Tax_Field_Group_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィルターでタグをまとめます（例：gameplay）。`)
};

/**
* | output |
* | --- |
* | "Groups tags in the filters, e.g. gameplay." |
*
* @param {Admin_Tax_Field_Group_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_field_group_hint = /** @type {((inputs?: Admin_Tax_Field_Group_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Field_Group_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_field_group_hint(inputs)
	if (locale === "de") return de_admin_tax_field_group_hint(inputs)
	if (locale === "fr") return fr_admin_tax_field_group_hint(inputs)
	if (locale === "it") return it_admin_tax_field_group_hint(inputs)
	if (locale === "nl") return nl_admin_tax_field_group_hint(inputs)
	if (locale === "pl") return pl_admin_tax_field_group_hint(inputs)
	if (locale === "pt") return pt_admin_tax_field_group_hint(inputs)
	if (locale === "ru") return ru_admin_tax_field_group_hint(inputs)
	if (locale === "sv") return sv_admin_tax_field_group_hint(inputs)
	if (locale === "tr") return tr_admin_tax_field_group_hint(inputs)
	if (locale === "zh") return zh_admin_tax_field_group_hint(inputs)
	if (locale === "ja") return ja_admin_tax_field_group_hint(inputs)
	return en_admin_tax_field_group_hint(inputs)
});
