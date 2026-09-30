/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_No_Current_TitleInputs */

const en_admin_builds_no_current_title = /** @type {(inputs: Admin_Builds_No_Current_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No current build`)
};

const es_admin_builds_no_current_title = /** @type {(inputs: Admin_Builds_No_Current_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay build actual`)
};

const de_admin_builds_no_current_title = /** @type {(inputs: Admin_Builds_No_Current_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kein aktueller Build`)
};

const fr_admin_builds_no_current_title = /** @type {(inputs: Admin_Builds_No_Current_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun build actuel`)
};

const it_admin_builds_no_current_title = /** @type {(inputs: Admin_Builds_No_Current_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna build attuale`)
};

const nl_admin_builds_no_current_title = /** @type {(inputs: Admin_Builds_No_Current_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen huidige build`)
};

const pl_admin_builds_no_current_title = /** @type {(inputs: Admin_Builds_No_Current_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak aktualnego buildu`)
};

const pt_admin_builds_no_current_title = /** @type {(inputs: Admin_Builds_No_Current_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum build atual`)
};

const ru_admin_builds_no_current_title = /** @type {(inputs: Admin_Builds_No_Current_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет текущей сборки`)
};

const sv_admin_builds_no_current_title = /** @type {(inputs: Admin_Builds_No_Current_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inget aktuellt bygge`)
};

const tr_admin_builds_no_current_title = /** @type {(inputs: Admin_Builds_No_Current_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncel sürüm yok`)
};

const zh_admin_builds_no_current_title = /** @type {(inputs: Admin_Builds_No_Current_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有当前版本`)
};

const ja_admin_builds_no_current_title = /** @type {(inputs: Admin_Builds_No_Current_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在のビルドがありません`)
};

/**
* | output |
* | --- |
* | "No current build" |
*
* @param {Admin_Builds_No_Current_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_no_current_title = /** @type {((inputs?: Admin_Builds_No_Current_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_No_Current_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_no_current_title(inputs)
	if (locale === "de") return de_admin_builds_no_current_title(inputs)
	if (locale === "fr") return fr_admin_builds_no_current_title(inputs)
	if (locale === "it") return it_admin_builds_no_current_title(inputs)
	if (locale === "nl") return nl_admin_builds_no_current_title(inputs)
	if (locale === "pl") return pl_admin_builds_no_current_title(inputs)
	if (locale === "pt") return pt_admin_builds_no_current_title(inputs)
	if (locale === "ru") return ru_admin_builds_no_current_title(inputs)
	if (locale === "sv") return sv_admin_builds_no_current_title(inputs)
	if (locale === "tr") return tr_admin_builds_no_current_title(inputs)
	if (locale === "zh") return zh_admin_builds_no_current_title(inputs)
	if (locale === "ja") return ja_admin_builds_no_current_title(inputs)
	return en_admin_builds_no_current_title(inputs)
});
