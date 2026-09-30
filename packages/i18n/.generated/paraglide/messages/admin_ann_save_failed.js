/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_Save_FailedInputs */

const en_admin_ann_save_failed = /** @type {(inputs: Admin_Ann_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t save the announcement`)
};

const es_admin_ann_save_failed = /** @type {(inputs: Admin_Ann_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo guardar el anuncio`)
};

const de_admin_ann_save_failed = /** @type {(inputs: Admin_Ann_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ankündigung konnte nicht gespeichert werden`)
};

const fr_admin_ann_save_failed = /** @type {(inputs: Admin_Ann_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible d’enregistrer l’annonce`)
};

const it_admin_ann_save_failed = /** @type {(inputs: Admin_Ann_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile salvare l’annuncio`)
};

const nl_admin_ann_save_failed = /** @type {(inputs: Admin_Ann_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kon de aankondiging niet opslaan`)
};

const pl_admin_ann_save_failed = /** @type {(inputs: Admin_Ann_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zapisać ogłoszenia`)
};

const pt_admin_ann_save_failed = /** @type {(inputs: Admin_Ann_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível salvar o aviso`)
};

const ru_admin_ann_save_failed = /** @type {(inputs: Admin_Ann_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось сохранить объявление`)
};

const sv_admin_ann_save_failed = /** @type {(inputs: Admin_Ann_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunde inte spara meddelandet`)
};

const tr_admin_ann_save_failed = /** @type {(inputs: Admin_Ann_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duyuru kaydedilemedi`)
};

const zh_admin_ann_save_failed = /** @type {(inputs: Admin_Ann_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法保存公告`)
};

const ja_admin_ann_save_failed = /** @type {(inputs: Admin_Ann_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`お知らせを保存できませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn’t save the announcement" |
*
* @param {Admin_Ann_Save_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_save_failed = /** @type {((inputs?: Admin_Ann_Save_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_Save_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_save_failed(inputs)
	if (locale === "de") return de_admin_ann_save_failed(inputs)
	if (locale === "fr") return fr_admin_ann_save_failed(inputs)
	if (locale === "it") return it_admin_ann_save_failed(inputs)
	if (locale === "nl") return nl_admin_ann_save_failed(inputs)
	if (locale === "pl") return pl_admin_ann_save_failed(inputs)
	if (locale === "pt") return pt_admin_ann_save_failed(inputs)
	if (locale === "ru") return ru_admin_ann_save_failed(inputs)
	if (locale === "sv") return sv_admin_ann_save_failed(inputs)
	if (locale === "tr") return tr_admin_ann_save_failed(inputs)
	if (locale === "zh") return zh_admin_ann_save_failed(inputs)
	if (locale === "ja") return ja_admin_ann_save_failed(inputs)
	return en_admin_ann_save_failed(inputs)
});
