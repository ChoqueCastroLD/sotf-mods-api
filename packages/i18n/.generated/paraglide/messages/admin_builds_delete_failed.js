/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Delete_FailedInputs */

const en_admin_builds_delete_failed = /** @type {(inputs: Admin_Builds_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t delete the build`)
};

const es_admin_builds_delete_failed = /** @type {(inputs: Admin_Builds_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo eliminar la build`)
};

const de_admin_builds_delete_failed = /** @type {(inputs: Admin_Builds_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build konnte nicht gelöscht werden`)
};

const fr_admin_builds_delete_failed = /** @type {(inputs: Admin_Builds_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de supprimer le build`)
};

const it_admin_builds_delete_failed = /** @type {(inputs: Admin_Builds_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile eliminare la build`)
};

const nl_admin_builds_delete_failed = /** @type {(inputs: Admin_Builds_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kon de build niet verwijderen`)
};

const pl_admin_builds_delete_failed = /** @type {(inputs: Admin_Builds_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się usunąć buildu`)
};

const pt_admin_builds_delete_failed = /** @type {(inputs: Admin_Builds_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível excluir o build`)
};

const ru_admin_builds_delete_failed = /** @type {(inputs: Admin_Builds_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось удалить сборку`)
};

const sv_admin_builds_delete_failed = /** @type {(inputs: Admin_Builds_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunde inte ta bort bygget`)
};

const tr_admin_builds_delete_failed = /** @type {(inputs: Admin_Builds_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm silinemedi`)
};

const zh_admin_builds_delete_failed = /** @type {(inputs: Admin_Builds_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法删除版本`)
};

const ja_admin_builds_delete_failed = /** @type {(inputs: Admin_Builds_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ビルドを削除できませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn’t delete the build" |
*
* @param {Admin_Builds_Delete_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_delete_failed = /** @type {((inputs?: Admin_Builds_Delete_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Delete_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_delete_failed(inputs)
	if (locale === "de") return de_admin_builds_delete_failed(inputs)
	if (locale === "fr") return fr_admin_builds_delete_failed(inputs)
	if (locale === "it") return it_admin_builds_delete_failed(inputs)
	if (locale === "nl") return nl_admin_builds_delete_failed(inputs)
	if (locale === "pl") return pl_admin_builds_delete_failed(inputs)
	if (locale === "pt") return pt_admin_builds_delete_failed(inputs)
	if (locale === "ru") return ru_admin_builds_delete_failed(inputs)
	if (locale === "sv") return sv_admin_builds_delete_failed(inputs)
	if (locale === "tr") return tr_admin_builds_delete_failed(inputs)
	if (locale === "zh") return zh_admin_builds_delete_failed(inputs)
	if (locale === "ja") return ja_admin_builds_delete_failed(inputs)
	return en_admin_builds_delete_failed(inputs)
});
