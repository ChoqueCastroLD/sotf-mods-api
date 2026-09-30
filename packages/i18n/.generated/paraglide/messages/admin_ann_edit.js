/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_EditInputs */

const en_admin_ann_edit = /** @type {(inputs: Admin_Ann_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit announcement`)
};

const es_admin_ann_edit = /** @type {(inputs: Admin_Ann_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar anuncio`)
};

const de_admin_ann_edit = /** @type {(inputs: Admin_Ann_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ankündigung bearbeiten`)
};

const fr_admin_ann_edit = /** @type {(inputs: Admin_Ann_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifier l’annonce`)
};

const it_admin_ann_edit = /** @type {(inputs: Admin_Ann_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifica annuncio`)
};

const nl_admin_ann_edit = /** @type {(inputs: Admin_Ann_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aankondiging bewerken`)
};

const pl_admin_ann_edit = /** @type {(inputs: Admin_Ann_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edytuj ogłoszenie`)
};

const pt_admin_ann_edit = /** @type {(inputs: Admin_Ann_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar aviso`)
};

const ru_admin_ann_edit = /** @type {(inputs: Admin_Ann_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изменить объявление`)
};

const sv_admin_ann_edit = /** @type {(inputs: Admin_Ann_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redigera meddelande`)
};

const tr_admin_ann_edit = /** @type {(inputs: Admin_Ann_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duyuruyu düzenle`)
};

const zh_admin_ann_edit = /** @type {(inputs: Admin_Ann_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑公告`)
};

const ja_admin_ann_edit = /** @type {(inputs: Admin_Ann_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`お知らせを編集`)
};

/**
* | output |
* | --- |
* | "Edit announcement" |
*
* @param {Admin_Ann_EditInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_edit = /** @type {((inputs?: Admin_Ann_EditInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_EditInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_edit(inputs)
	if (locale === "de") return de_admin_ann_edit(inputs)
	if (locale === "fr") return fr_admin_ann_edit(inputs)
	if (locale === "it") return it_admin_ann_edit(inputs)
	if (locale === "nl") return nl_admin_ann_edit(inputs)
	if (locale === "pl") return pl_admin_ann_edit(inputs)
	if (locale === "pt") return pt_admin_ann_edit(inputs)
	if (locale === "ru") return ru_admin_ann_edit(inputs)
	if (locale === "sv") return sv_admin_ann_edit(inputs)
	if (locale === "tr") return tr_admin_ann_edit(inputs)
	if (locale === "zh") return zh_admin_ann_edit(inputs)
	if (locale === "ja") return ja_admin_ann_edit(inputs)
	return en_admin_ann_edit(inputs)
});
