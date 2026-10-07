/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Sync_CheckingInputs */

const en_admin_builds_sync_checking = /** @type {(inputs: Admin_Builds_Sync_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Checking Steam`)
};

const es_admin_builds_sync_checking = /** @type {(inputs: Admin_Builds_Sync_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consultando Steam`)
};

const de_admin_builds_sync_checking = /** @type {(inputs: Admin_Builds_Sync_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam wird geprüft`)
};

const fr_admin_builds_sync_checking = /** @type {(inputs: Admin_Builds_Sync_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consultation de Steam`)
};

const it_admin_builds_sync_checking = /** @type {(inputs: Admin_Builds_Sync_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controllo di Steam`)
};

const nl_admin_builds_sync_checking = /** @type {(inputs: Admin_Builds_Sync_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam controleren`)
};

const pl_admin_builds_sync_checking = /** @type {(inputs: Admin_Builds_Sync_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprawdzanie Steama`)
};

const pt_admin_builds_sync_checking = /** @type {(inputs: Admin_Builds_Sync_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consultando a Steam`)
};

const ru_admin_builds_sync_checking = /** @type {(inputs: Admin_Builds_Sync_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверяем Steam`)
};

const sv_admin_builds_sync_checking = /** @type {(inputs: Admin_Builds_Sync_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontrollerar Steam`)
};

const tr_admin_builds_sync_checking = /** @type {(inputs: Admin_Builds_Sync_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam kontrol ediliyor`)
};

const zh_admin_builds_sync_checking = /** @type {(inputs: Admin_Builds_Sync_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在检查 Steam`)
};

const ja_admin_builds_sync_checking = /** @type {(inputs: Admin_Builds_Sync_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam を確認中`)
};

/**
* | output |
* | --- |
* | "Checking Steam" |
*
* @param {Admin_Builds_Sync_CheckingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_sync_checking = /** @type {((inputs?: Admin_Builds_Sync_CheckingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Sync_CheckingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_sync_checking(inputs)
	if (locale === "de") return de_admin_builds_sync_checking(inputs)
	if (locale === "fr") return fr_admin_builds_sync_checking(inputs)
	if (locale === "it") return it_admin_builds_sync_checking(inputs)
	if (locale === "nl") return nl_admin_builds_sync_checking(inputs)
	if (locale === "pl") return pl_admin_builds_sync_checking(inputs)
	if (locale === "pt") return pt_admin_builds_sync_checking(inputs)
	if (locale === "ru") return ru_admin_builds_sync_checking(inputs)
	if (locale === "sv") return sv_admin_builds_sync_checking(inputs)
	if (locale === "tr") return tr_admin_builds_sync_checking(inputs)
	if (locale === "zh") return zh_admin_builds_sync_checking(inputs)
	if (locale === "ja") return ja_admin_builds_sync_checking(inputs)
	return en_admin_builds_sync_checking(inputs)
});
