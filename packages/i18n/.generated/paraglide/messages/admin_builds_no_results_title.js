/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_No_Results_TitleInputs */

const en_admin_builds_no_results_title = /** @type {(inputs: Admin_Builds_No_Results_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No builds match`)
};

const es_admin_builds_no_results_title = /** @type {(inputs: Admin_Builds_No_Results_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ninguna build coincide`)
};

const de_admin_builds_no_results_title = /** @type {(inputs: Admin_Builds_No_Results_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kein Build gefunden`)
};

const fr_admin_builds_no_results_title = /** @type {(inputs: Admin_Builds_No_Results_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun build ne correspond`)
};

const it_admin_builds_no_results_title = /** @type {(inputs: Admin_Builds_No_Results_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna build corrisponde`)
};

const nl_admin_builds_no_results_title = /** @type {(inputs: Admin_Builds_No_Results_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen builds gevonden`)
};

const pl_admin_builds_no_results_title = /** @type {(inputs: Admin_Builds_No_Results_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Żaden build nie pasuje`)
};

const pt_admin_builds_no_results_title = /** @type {(inputs: Admin_Builds_No_Results_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum build encontrado`)
};

const ru_admin_builds_no_results_title = /** @type {(inputs: Admin_Builds_No_Results_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подходящих сборок нет`)
};

const sv_admin_builds_no_results_title = /** @type {(inputs: Admin_Builds_No_Results_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga byggen matchar`)
};

const tr_admin_builds_no_results_title = /** @type {(inputs: Admin_Builds_No_Results_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eşleşen sürüm yok`)
};

const zh_admin_builds_no_results_title = /** @type {(inputs: Admin_Builds_No_Results_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有匹配的版本`)
};

const ja_admin_builds_no_results_title = /** @type {(inputs: Admin_Builds_No_Results_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一致するビルドはありません`)
};

/**
* | output |
* | --- |
* | "No builds match" |
*
* @param {Admin_Builds_No_Results_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_no_results_title = /** @type {((inputs?: Admin_Builds_No_Results_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_No_Results_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_no_results_title(inputs)
	if (locale === "de") return de_admin_builds_no_results_title(inputs)
	if (locale === "fr") return fr_admin_builds_no_results_title(inputs)
	if (locale === "it") return it_admin_builds_no_results_title(inputs)
	if (locale === "nl") return nl_admin_builds_no_results_title(inputs)
	if (locale === "pl") return pl_admin_builds_no_results_title(inputs)
	if (locale === "pt") return pt_admin_builds_no_results_title(inputs)
	if (locale === "ru") return ru_admin_builds_no_results_title(inputs)
	if (locale === "sv") return sv_admin_builds_no_results_title(inputs)
	if (locale === "tr") return tr_admin_builds_no_results_title(inputs)
	if (locale === "zh") return zh_admin_builds_no_results_title(inputs)
	if (locale === "ja") return ja_admin_builds_no_results_title(inputs)
	return en_admin_builds_no_results_title(inputs)
});
