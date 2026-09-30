/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_AddInputs */

const en_admin_ann_add = /** @type {(inputs: Admin_Ann_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New announcement`)
};

const es_admin_ann_add = /** @type {(inputs: Admin_Ann_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuevo anuncio`)
};

const de_admin_ann_add = /** @type {(inputs: Admin_Ann_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neue Ankündigung`)
};

const fr_admin_ann_add = /** @type {(inputs: Admin_Ann_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouvelle annonce`)
};

const it_admin_ann_add = /** @type {(inputs: Admin_Ann_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuovo annuncio`)
};

const nl_admin_ann_add = /** @type {(inputs: Admin_Ann_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe aankondiging`)
};

const pl_admin_ann_add = /** @type {(inputs: Admin_Ann_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowe ogłoszenie`)
};

const pt_admin_ann_add = /** @type {(inputs: Admin_Ann_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novo aviso`)
};

const ru_admin_ann_add = /** @type {(inputs: Admin_Ann_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новое объявление`)
};

const sv_admin_ann_add = /** @type {(inputs: Admin_Ann_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nytt meddelande`)
};

const tr_admin_ann_add = /** @type {(inputs: Admin_Ann_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni duyuru`)
};

const zh_admin_ann_add = /** @type {(inputs: Admin_Ann_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新建公告`)
};

const ja_admin_ann_add = /** @type {(inputs: Admin_Ann_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいお知らせ`)
};

/**
* | output |
* | --- |
* | "New announcement" |
*
* @param {Admin_Ann_AddInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_add = /** @type {((inputs?: Admin_Ann_AddInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_AddInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_add(inputs)
	if (locale === "de") return de_admin_ann_add(inputs)
	if (locale === "fr") return fr_admin_ann_add(inputs)
	if (locale === "it") return it_admin_ann_add(inputs)
	if (locale === "nl") return nl_admin_ann_add(inputs)
	if (locale === "pl") return pl_admin_ann_add(inputs)
	if (locale === "pt") return pt_admin_ann_add(inputs)
	if (locale === "ru") return ru_admin_ann_add(inputs)
	if (locale === "sv") return sv_admin_ann_add(inputs)
	if (locale === "tr") return tr_admin_ann_add(inputs)
	if (locale === "zh") return zh_admin_ann_add(inputs)
	if (locale === "ja") return ja_admin_ann_add(inputs)
	return en_admin_ann_add(inputs)
});
