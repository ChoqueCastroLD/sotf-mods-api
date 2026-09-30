/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_Delete_FailedInputs */

const en_admin_ann_delete_failed = /** @type {(inputs: Admin_Ann_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t delete the announcement`)
};

const es_admin_ann_delete_failed = /** @type {(inputs: Admin_Ann_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo eliminar el anuncio`)
};

const de_admin_ann_delete_failed = /** @type {(inputs: Admin_Ann_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ankündigung konnte nicht gelöscht werden`)
};

const fr_admin_ann_delete_failed = /** @type {(inputs: Admin_Ann_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de supprimer l’annonce`)
};

const it_admin_ann_delete_failed = /** @type {(inputs: Admin_Ann_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile eliminare l’annuncio`)
};

const nl_admin_ann_delete_failed = /** @type {(inputs: Admin_Ann_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kon de aankondiging niet verwijderen`)
};

const pl_admin_ann_delete_failed = /** @type {(inputs: Admin_Ann_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się usunąć ogłoszenia`)
};

const pt_admin_ann_delete_failed = /** @type {(inputs: Admin_Ann_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível excluir o aviso`)
};

const ru_admin_ann_delete_failed = /** @type {(inputs: Admin_Ann_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось удалить объявление`)
};

const sv_admin_ann_delete_failed = /** @type {(inputs: Admin_Ann_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunde inte ta bort meddelandet`)
};

const tr_admin_ann_delete_failed = /** @type {(inputs: Admin_Ann_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duyuru silinemedi`)
};

const zh_admin_ann_delete_failed = /** @type {(inputs: Admin_Ann_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法删除公告`)
};

const ja_admin_ann_delete_failed = /** @type {(inputs: Admin_Ann_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`お知らせを削除できませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn’t delete the announcement" |
*
* @param {Admin_Ann_Delete_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_delete_failed = /** @type {((inputs?: Admin_Ann_Delete_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_Delete_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_delete_failed(inputs)
	if (locale === "de") return de_admin_ann_delete_failed(inputs)
	if (locale === "fr") return fr_admin_ann_delete_failed(inputs)
	if (locale === "it") return it_admin_ann_delete_failed(inputs)
	if (locale === "nl") return nl_admin_ann_delete_failed(inputs)
	if (locale === "pl") return pl_admin_ann_delete_failed(inputs)
	if (locale === "pt") return pt_admin_ann_delete_failed(inputs)
	if (locale === "ru") return ru_admin_ann_delete_failed(inputs)
	if (locale === "sv") return sv_admin_ann_delete_failed(inputs)
	if (locale === "tr") return tr_admin_ann_delete_failed(inputs)
	if (locale === "zh") return zh_admin_ann_delete_failed(inputs)
	if (locale === "ja") return ja_admin_ann_delete_failed(inputs)
	return en_admin_ann_delete_failed(inputs)
});
