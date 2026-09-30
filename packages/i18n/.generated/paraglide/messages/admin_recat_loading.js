/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_LoadingInputs */

const en_admin_recat_loading = /** @type {(inputs: Admin_Recat_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scoring every mod…`)
};

const es_admin_recat_loading = /** @type {(inputs: Admin_Recat_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Puntuando todos los mods…`)
};

const de_admin_recat_loading = /** @type {(inputs: Admin_Recat_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Mods werden bewertet …`)
};

const fr_admin_recat_loading = /** @type {(inputs: Admin_Recat_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Évaluation de tous les mods…`)
};

const it_admin_recat_loading = /** @type {(inputs: Admin_Recat_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valutazione di tutte le mod…`)
};

const nl_admin_recat_loading = /** @type {(inputs: Admin_Recat_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle mods worden beoordeeld…`)
};

const pl_admin_recat_loading = /** @type {(inputs: Admin_Recat_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocenianie wszystkich modów…`)
};

const pt_admin_recat_loading = /** @type {(inputs: Admin_Recat_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avaliando todos os mods…`)
};

const ru_admin_recat_loading = /** @type {(inputs: Admin_Recat_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Оцениваем все моды…`)
};

const sv_admin_recat_loading = /** @type {(inputs: Admin_Recat_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poängsätter alla moddar …`)
};

const tr_admin_recat_loading = /** @type {(inputs: Admin_Recat_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm modlar puanlanıyor…`)
};

const zh_admin_recat_loading = /** @type {(inputs: Admin_Recat_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在为所有模组评分……`)
};

const ja_admin_recat_loading = /** @type {(inputs: Admin_Recat_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべての MOD を採点しています…`)
};

/**
* | output |
* | --- |
* | "Scoring every mod…" |
*
* @param {Admin_Recat_LoadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_loading = /** @type {((inputs?: Admin_Recat_LoadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_LoadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_loading(inputs)
	if (locale === "de") return de_admin_recat_loading(inputs)
	if (locale === "fr") return fr_admin_recat_loading(inputs)
	if (locale === "it") return it_admin_recat_loading(inputs)
	if (locale === "nl") return nl_admin_recat_loading(inputs)
	if (locale === "pl") return pl_admin_recat_loading(inputs)
	if (locale === "pt") return pt_admin_recat_loading(inputs)
	if (locale === "ru") return ru_admin_recat_loading(inputs)
	if (locale === "sv") return sv_admin_recat_loading(inputs)
	if (locale === "tr") return tr_admin_recat_loading(inputs)
	if (locale === "zh") return zh_admin_recat_loading(inputs)
	if (locale === "ja") return ja_admin_recat_loading(inputs)
	return en_admin_recat_loading(inputs)
});
