/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Eco_Save_FailedInputs */

const en_admin_eco_save_failed = /** @type {(inputs: Admin_Eco_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t save the status`)
};

const es_admin_eco_save_failed = /** @type {(inputs: Admin_Eco_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo guardar el estado`)
};

const de_admin_eco_save_failed = /** @type {(inputs: Admin_Eco_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status konnte nicht gespeichert werden`)
};

const fr_admin_eco_save_failed = /** @type {(inputs: Admin_Eco_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible d’enregistrer l’état`)
};

const it_admin_eco_save_failed = /** @type {(inputs: Admin_Eco_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile salvare lo stato`)
};

const nl_admin_eco_save_failed = /** @type {(inputs: Admin_Eco_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kon de status niet opslaan`)
};

const pl_admin_eco_save_failed = /** @type {(inputs: Admin_Eco_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zapisać stanu`)
};

const pt_admin_eco_save_failed = /** @type {(inputs: Admin_Eco_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível salvar o status`)
};

const ru_admin_eco_save_failed = /** @type {(inputs: Admin_Eco_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось сохранить статус`)
};

const sv_admin_eco_save_failed = /** @type {(inputs: Admin_Eco_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunde inte spara statusen`)
};

const tr_admin_eco_save_failed = /** @type {(inputs: Admin_Eco_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Durum kaydedilemedi`)
};

const zh_admin_eco_save_failed = /** @type {(inputs: Admin_Eco_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法保存状态`)
};

const ja_admin_eco_save_failed = /** @type {(inputs: Admin_Eco_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`状況を保存できませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn’t save the status" |
*
* @param {Admin_Eco_Save_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_eco_save_failed = /** @type {((inputs?: Admin_Eco_Save_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Eco_Save_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_eco_save_failed(inputs)
	if (locale === "de") return de_admin_eco_save_failed(inputs)
	if (locale === "fr") return fr_admin_eco_save_failed(inputs)
	if (locale === "it") return it_admin_eco_save_failed(inputs)
	if (locale === "nl") return nl_admin_eco_save_failed(inputs)
	if (locale === "pl") return pl_admin_eco_save_failed(inputs)
	if (locale === "pt") return pt_admin_eco_save_failed(inputs)
	if (locale === "ru") return ru_admin_eco_save_failed(inputs)
	if (locale === "sv") return sv_admin_eco_save_failed(inputs)
	if (locale === "tr") return tr_admin_eco_save_failed(inputs)
	if (locale === "zh") return zh_admin_eco_save_failed(inputs)
	if (locale === "ja") return ja_admin_eco_save_failed(inputs)
	return en_admin_eco_save_failed(inputs)
});
