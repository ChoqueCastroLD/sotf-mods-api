/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ label: NonNullable<unknown> }} Admin_Builds_DeletedInputs */

const en_admin_builds_deleted = /** @type {(inputs: Admin_Builds_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} deleted`)
};

const es_admin_builds_deleted = /** @type {(inputs: Admin_Builds_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} eliminada`)
};

const de_admin_builds_deleted = /** @type {(inputs: Admin_Builds_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} gelöscht`)
};

const fr_admin_builds_deleted = /** @type {(inputs: Admin_Builds_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} supprimé`)
};

const it_admin_builds_deleted = /** @type {(inputs: Admin_Builds_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} eliminata`)
};

const nl_admin_builds_deleted = /** @type {(inputs: Admin_Builds_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} verwijderd`)
};

const pl_admin_builds_deleted = /** @type {(inputs: Admin_Builds_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Usunięto ${i?.label}`)
};

const pt_admin_builds_deleted = /** @type {(inputs: Admin_Builds_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} excluído`)
};

const ru_admin_builds_deleted = /** @type {(inputs: Admin_Builds_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} удалена`)
};

const sv_admin_builds_deleted = /** @type {(inputs: Admin_Builds_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} borttaget`)
};

const tr_admin_builds_deleted = /** @type {(inputs: Admin_Builds_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} silindi`)
};

const zh_admin_builds_deleted = /** @type {(inputs: Admin_Builds_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} 已删除`)
};

const ja_admin_builds_deleted = /** @type {(inputs: Admin_Builds_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} を削除しました`)
};

/**
* | output |
* | --- |
* | "{label} deleted" |
*
* @param {Admin_Builds_DeletedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_deleted = /** @type {((inputs: Admin_Builds_DeletedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_DeletedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_deleted(inputs)
	if (locale === "de") return de_admin_builds_deleted(inputs)
	if (locale === "fr") return fr_admin_builds_deleted(inputs)
	if (locale === "it") return it_admin_builds_deleted(inputs)
	if (locale === "nl") return nl_admin_builds_deleted(inputs)
	if (locale === "pl") return pl_admin_builds_deleted(inputs)
	if (locale === "pt") return pt_admin_builds_deleted(inputs)
	if (locale === "ru") return ru_admin_builds_deleted(inputs)
	if (locale === "sv") return sv_admin_builds_deleted(inputs)
	if (locale === "tr") return tr_admin_builds_deleted(inputs)
	if (locale === "zh") return zh_admin_builds_deleted(inputs)
	if (locale === "ja") return ja_admin_builds_deleted(inputs)
	return en_admin_builds_deleted(inputs)
});
