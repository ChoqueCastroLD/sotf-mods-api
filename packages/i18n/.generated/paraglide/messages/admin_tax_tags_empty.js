/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Tags_EmptyInputs */

const en_admin_tax_tags_empty = /** @type {(inputs: Admin_Tax_Tags_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No tags`)
};

const es_admin_tax_tags_empty = /** @type {(inputs: Admin_Tax_Tags_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay etiquetas`)
};

const de_admin_tax_tags_empty = /** @type {(inputs: Admin_Tax_Tags_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Tags`)
};

const fr_admin_tax_tags_empty = /** @type {(inputs: Admin_Tax_Tags_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun tag`)
};

const it_admin_tax_tags_empty = /** @type {(inputs: Admin_Tax_Tags_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun tag`)
};

const nl_admin_tax_tags_empty = /** @type {(inputs: Admin_Tax_Tags_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen tags`)
};

const pl_admin_tax_tags_empty = /** @type {(inputs: Admin_Tax_Tags_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak tagów`)
};

const pt_admin_tax_tags_empty = /** @type {(inputs: Admin_Tax_Tags_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma tag`)
};

const ru_admin_tax_tags_empty = /** @type {(inputs: Admin_Tax_Tags_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Тегов нет`)
};

const sv_admin_tax_tags_empty = /** @type {(inputs: Admin_Tax_Tags_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga taggar`)
};

const tr_admin_tax_tags_empty = /** @type {(inputs: Admin_Tax_Tags_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etiket yok`)
};

const zh_admin_tax_tags_empty = /** @type {(inputs: Admin_Tax_Tags_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有标签`)
};

const ja_admin_tax_tags_empty = /** @type {(inputs: Admin_Tax_Tags_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`タグがありません`)
};

/**
* | output |
* | --- |
* | "No tags" |
*
* @param {Admin_Tax_Tags_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_tags_empty = /** @type {((inputs?: Admin_Tax_Tags_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Tags_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_tags_empty(inputs)
	if (locale === "de") return de_admin_tax_tags_empty(inputs)
	if (locale === "fr") return fr_admin_tax_tags_empty(inputs)
	if (locale === "it") return it_admin_tax_tags_empty(inputs)
	if (locale === "nl") return nl_admin_tax_tags_empty(inputs)
	if (locale === "pl") return pl_admin_tax_tags_empty(inputs)
	if (locale === "pt") return pt_admin_tax_tags_empty(inputs)
	if (locale === "ru") return ru_admin_tax_tags_empty(inputs)
	if (locale === "sv") return sv_admin_tax_tags_empty(inputs)
	if (locale === "tr") return tr_admin_tax_tags_empty(inputs)
	if (locale === "zh") return zh_admin_tax_tags_empty(inputs)
	if (locale === "ja") return ja_admin_tax_tags_empty(inputs)
	return en_admin_tax_tags_empty(inputs)
});
