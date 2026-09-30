/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Admin_Tax_Tag_DeletedInputs */

const en_admin_tax_tag_deleted = /** @type {(inputs: Admin_Tax_Tag_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} deleted`)
};

const es_admin_tax_tag_deleted = /** @type {(inputs: Admin_Tax_Tag_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} eliminada`)
};

const de_admin_tax_tag_deleted = /** @type {(inputs: Admin_Tax_Tag_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} gelöscht`)
};

const fr_admin_tax_tag_deleted = /** @type {(inputs: Admin_Tax_Tag_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} supprimé`)
};

const it_admin_tax_tag_deleted = /** @type {(inputs: Admin_Tax_Tag_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} eliminato`)
};

const nl_admin_tax_tag_deleted = /** @type {(inputs: Admin_Tax_Tag_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} verwijderd`)
};

const pl_admin_tax_tag_deleted = /** @type {(inputs: Admin_Tax_Tag_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Usunięto ${i?.name}`)
};

const pt_admin_tax_tag_deleted = /** @type {(inputs: Admin_Tax_Tag_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} excluída`)
};

const ru_admin_tax_tag_deleted = /** @type {(inputs: Admin_Tax_Tag_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} удалён`)
};

const sv_admin_tax_tag_deleted = /** @type {(inputs: Admin_Tax_Tag_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} borttagen`)
};

const tr_admin_tax_tag_deleted = /** @type {(inputs: Admin_Tax_Tag_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} silindi`)
};

const zh_admin_tax_tag_deleted = /** @type {(inputs: Admin_Tax_Tag_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 已删除`)
};

const ja_admin_tax_tag_deleted = /** @type {(inputs: Admin_Tax_Tag_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を削除しました`)
};

/**
* | output |
* | --- |
* | "{name} deleted" |
*
* @param {Admin_Tax_Tag_DeletedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_tag_deleted = /** @type {((inputs: Admin_Tax_Tag_DeletedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Tag_DeletedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_tag_deleted(inputs)
	if (locale === "de") return de_admin_tax_tag_deleted(inputs)
	if (locale === "fr") return fr_admin_tax_tag_deleted(inputs)
	if (locale === "it") return it_admin_tax_tag_deleted(inputs)
	if (locale === "nl") return nl_admin_tax_tag_deleted(inputs)
	if (locale === "pl") return pl_admin_tax_tag_deleted(inputs)
	if (locale === "pt") return pt_admin_tax_tag_deleted(inputs)
	if (locale === "ru") return ru_admin_tax_tag_deleted(inputs)
	if (locale === "sv") return sv_admin_tax_tag_deleted(inputs)
	if (locale === "tr") return tr_admin_tax_tag_deleted(inputs)
	if (locale === "zh") return zh_admin_tax_tag_deleted(inputs)
	if (locale === "ja") return ja_admin_tax_tag_deleted(inputs)
	return en_admin_tax_tag_deleted(inputs)
});
