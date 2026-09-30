/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_Delete_TitleInputs */

const en_admin_ann_delete_title = /** @type {(inputs: Admin_Ann_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete this announcement?`)
};

const es_admin_ann_delete_title = /** @type {(inputs: Admin_Ann_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Eliminar este anuncio?`)
};

const de_admin_ann_delete_title = /** @type {(inputs: Admin_Ann_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Ankündigung löschen?`)
};

const fr_admin_ann_delete_title = /** @type {(inputs: Admin_Ann_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer cette annonce ?`)
};

const it_admin_ann_delete_title = /** @type {(inputs: Admin_Ann_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminare questo annuncio?`)
};

const nl_admin_ann_delete_title = /** @type {(inputs: Admin_Ann_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze aankondiging verwijderen?`)
};

const pl_admin_ann_delete_title = /** @type {(inputs: Admin_Ann_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usunąć to ogłoszenie?`)
};

const pt_admin_ann_delete_title = /** @type {(inputs: Admin_Ann_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir este aviso?`)
};

const ru_admin_ann_delete_title = /** @type {(inputs: Admin_Ann_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить это объявление?`)
};

const sv_admin_ann_delete_title = /** @type {(inputs: Admin_Ann_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort det här meddelandet?`)
};

const tr_admin_ann_delete_title = /** @type {(inputs: Admin_Ann_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu duyuru silinsin mi?`)
};

const zh_admin_ann_delete_title = /** @type {(inputs: Admin_Ann_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除这条公告？`)
};

const ja_admin_ann_delete_title = /** @type {(inputs: Admin_Ann_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このお知らせを削除しますか？`)
};

/**
* | output |
* | --- |
* | "Delete this announcement?" |
*
* @param {Admin_Ann_Delete_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_delete_title = /** @type {((inputs?: Admin_Ann_Delete_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_Delete_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_delete_title(inputs)
	if (locale === "de") return de_admin_ann_delete_title(inputs)
	if (locale === "fr") return fr_admin_ann_delete_title(inputs)
	if (locale === "it") return it_admin_ann_delete_title(inputs)
	if (locale === "nl") return nl_admin_ann_delete_title(inputs)
	if (locale === "pl") return pl_admin_ann_delete_title(inputs)
	if (locale === "pt") return pt_admin_ann_delete_title(inputs)
	if (locale === "ru") return ru_admin_ann_delete_title(inputs)
	if (locale === "sv") return sv_admin_ann_delete_title(inputs)
	if (locale === "tr") return tr_admin_ann_delete_title(inputs)
	if (locale === "zh") return zh_admin_ann_delete_title(inputs)
	if (locale === "ja") return ja_admin_ann_delete_title(inputs)
	return en_admin_ann_delete_title(inputs)
});
