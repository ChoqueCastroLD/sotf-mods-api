/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ label: NonNullable<unknown> }} Admin_Builds_Delete_TitleInputs */

const en_admin_builds_delete_title = /** @type {(inputs: Admin_Builds_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Delete ${i?.label}?`)
};

const es_admin_builds_delete_title = /** @type {(inputs: Admin_Builds_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`¿Eliminar ${i?.label}?`)
};

const de_admin_builds_delete_title = /** @type {(inputs: Admin_Builds_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} löschen?`)
};

const fr_admin_builds_delete_title = /** @type {(inputs: Admin_Builds_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Supprimer ${i?.label} ?`)
};

const it_admin_builds_delete_title = /** @type {(inputs: Admin_Builds_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Eliminare ${i?.label}?`)
};

const nl_admin_builds_delete_title = /** @type {(inputs: Admin_Builds_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} verwijderen?`)
};

const pl_admin_builds_delete_title = /** @type {(inputs: Admin_Builds_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Usunąć ${i?.label}?`)
};

const pt_admin_builds_delete_title = /** @type {(inputs: Admin_Builds_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Excluir ${i?.label}?`)
};

const ru_admin_builds_delete_title = /** @type {(inputs: Admin_Builds_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Удалить ${i?.label}?`)
};

const sv_admin_builds_delete_title = /** @type {(inputs: Admin_Builds_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ta bort ${i?.label}?`)
};

const tr_admin_builds_delete_title = /** @type {(inputs: Admin_Builds_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} silinsin mi?`)
};

const zh_admin_builds_delete_title = /** @type {(inputs: Admin_Builds_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`删除 ${i?.label}？`)
};

const ja_admin_builds_delete_title = /** @type {(inputs: Admin_Builds_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} を削除しますか？`)
};

/**
* | output |
* | --- |
* | "Delete {label}?" |
*
* @param {Admin_Builds_Delete_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_delete_title = /** @type {((inputs: Admin_Builds_Delete_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Delete_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_delete_title(inputs)
	if (locale === "de") return de_admin_builds_delete_title(inputs)
	if (locale === "fr") return fr_admin_builds_delete_title(inputs)
	if (locale === "it") return it_admin_builds_delete_title(inputs)
	if (locale === "nl") return nl_admin_builds_delete_title(inputs)
	if (locale === "pl") return pl_admin_builds_delete_title(inputs)
	if (locale === "pt") return pt_admin_builds_delete_title(inputs)
	if (locale === "ru") return ru_admin_builds_delete_title(inputs)
	if (locale === "sv") return sv_admin_builds_delete_title(inputs)
	if (locale === "tr") return tr_admin_builds_delete_title(inputs)
	if (locale === "zh") return zh_admin_builds_delete_title(inputs)
	if (locale === "ja") return ja_admin_builds_delete_title(inputs)
	return en_admin_builds_delete_title(inputs)
});
