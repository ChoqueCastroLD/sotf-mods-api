/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Tag_Delete_FailedInputs */

const en_admin_tax_tag_delete_failed = /** @type {(inputs: Admin_Tax_Tag_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t delete the tag`)
};

const es_admin_tax_tag_delete_failed = /** @type {(inputs: Admin_Tax_Tag_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo eliminar la etiqueta`)
};

const de_admin_tax_tag_delete_failed = /** @type {(inputs: Admin_Tax_Tag_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tag konnte nicht gelöscht werden`)
};

const fr_admin_tax_tag_delete_failed = /** @type {(inputs: Admin_Tax_Tag_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de supprimer le tag`)
};

const it_admin_tax_tag_delete_failed = /** @type {(inputs: Admin_Tax_Tag_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile eliminare il tag`)
};

const nl_admin_tax_tag_delete_failed = /** @type {(inputs: Admin_Tax_Tag_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kon de tag niet verwijderen`)
};

const pl_admin_tax_tag_delete_failed = /** @type {(inputs: Admin_Tax_Tag_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się usunąć tagu`)
};

const pt_admin_tax_tag_delete_failed = /** @type {(inputs: Admin_Tax_Tag_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível excluir a tag`)
};

const ru_admin_tax_tag_delete_failed = /** @type {(inputs: Admin_Tax_Tag_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось удалить тег`)
};

const sv_admin_tax_tag_delete_failed = /** @type {(inputs: Admin_Tax_Tag_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunde inte ta bort taggen`)
};

const tr_admin_tax_tag_delete_failed = /** @type {(inputs: Admin_Tax_Tag_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etiket silinemedi`)
};

const zh_admin_tax_tag_delete_failed = /** @type {(inputs: Admin_Tax_Tag_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法删除标签`)
};

const ja_admin_tax_tag_delete_failed = /** @type {(inputs: Admin_Tax_Tag_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`タグを削除できませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn’t delete the tag" |
*
* @param {Admin_Tax_Tag_Delete_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_tag_delete_failed = /** @type {((inputs?: Admin_Tax_Tag_Delete_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Tag_Delete_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_tag_delete_failed(inputs)
	if (locale === "de") return de_admin_tax_tag_delete_failed(inputs)
	if (locale === "fr") return fr_admin_tax_tag_delete_failed(inputs)
	if (locale === "it") return it_admin_tax_tag_delete_failed(inputs)
	if (locale === "nl") return nl_admin_tax_tag_delete_failed(inputs)
	if (locale === "pl") return pl_admin_tax_tag_delete_failed(inputs)
	if (locale === "pt") return pt_admin_tax_tag_delete_failed(inputs)
	if (locale === "ru") return ru_admin_tax_tag_delete_failed(inputs)
	if (locale === "sv") return sv_admin_tax_tag_delete_failed(inputs)
	if (locale === "tr") return tr_admin_tax_tag_delete_failed(inputs)
	if (locale === "zh") return zh_admin_tax_tag_delete_failed(inputs)
	if (locale === "ja") return ja_admin_tax_tag_delete_failed(inputs)
	return en_admin_tax_tag_delete_failed(inputs)
});
