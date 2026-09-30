/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_DeletedInputs */

const en_admin_ann_deleted = /** @type {(inputs: Admin_Ann_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Announcement deleted`)
};

const es_admin_ann_deleted = /** @type {(inputs: Admin_Ann_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anuncio eliminado`)
};

const de_admin_ann_deleted = /** @type {(inputs: Admin_Ann_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ankündigung gelöscht`)
};

const fr_admin_ann_deleted = /** @type {(inputs: Admin_Ann_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annonce supprimée`)
};

const it_admin_ann_deleted = /** @type {(inputs: Admin_Ann_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuncio eliminato`)
};

const nl_admin_ann_deleted = /** @type {(inputs: Admin_Ann_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aankondiging verwijderd`)
};

const pl_admin_ann_deleted = /** @type {(inputs: Admin_Ann_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usunięto ogłoszenie`)
};

const pt_admin_ann_deleted = /** @type {(inputs: Admin_Ann_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aviso excluído`)
};

const ru_admin_ann_deleted = /** @type {(inputs: Admin_Ann_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Объявление удалено`)
};

const sv_admin_ann_deleted = /** @type {(inputs: Admin_Ann_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meddelandet borttaget`)
};

const tr_admin_ann_deleted = /** @type {(inputs: Admin_Ann_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duyuru silindi`)
};

const zh_admin_ann_deleted = /** @type {(inputs: Admin_Ann_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公告已删除`)
};

const ja_admin_ann_deleted = /** @type {(inputs: Admin_Ann_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`お知らせを削除しました`)
};

/**
* | output |
* | --- |
* | "Announcement deleted" |
*
* @param {Admin_Ann_DeletedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_deleted = /** @type {((inputs?: Admin_Ann_DeletedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_DeletedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_deleted(inputs)
	if (locale === "de") return de_admin_ann_deleted(inputs)
	if (locale === "fr") return fr_admin_ann_deleted(inputs)
	if (locale === "it") return it_admin_ann_deleted(inputs)
	if (locale === "nl") return nl_admin_ann_deleted(inputs)
	if (locale === "pl") return pl_admin_ann_deleted(inputs)
	if (locale === "pt") return pt_admin_ann_deleted(inputs)
	if (locale === "ru") return ru_admin_ann_deleted(inputs)
	if (locale === "sv") return sv_admin_ann_deleted(inputs)
	if (locale === "tr") return tr_admin_ann_deleted(inputs)
	if (locale === "zh") return zh_admin_ann_deleted(inputs)
	if (locale === "ja") return ja_admin_ann_deleted(inputs)
	return en_admin_ann_deleted(inputs)
});
