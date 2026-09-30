/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Eco_Add_Release_DescriptionInputs */

const en_admin_eco_add_release_description = /** @type {(inputs: Admin_Eco_Add_Release_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A new RedLoader or RedManager version.`)
};

const es_admin_eco_add_release_description = /** @type {(inputs: Admin_Eco_Add_Release_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una nueva versión de RedLoader o RedManager.`)
};

const de_admin_eco_add_release_description = /** @type {(inputs: Admin_Eco_Add_Release_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eine neue Version von RedLoader oder RedManager.`)
};

const fr_admin_eco_add_release_description = /** @type {(inputs: Admin_Eco_Add_Release_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Une nouvelle version de RedLoader ou RedManager.`)
};

const it_admin_eco_add_release_description = /** @type {(inputs: Admin_Eco_Add_Release_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una nuova versione di RedLoader o RedManager.`)
};

const nl_admin_eco_add_release_description = /** @type {(inputs: Admin_Eco_Add_Release_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een nieuwe versie van RedLoader of RedManager.`)
};

const pl_admin_eco_add_release_description = /** @type {(inputs: Admin_Eco_Add_Release_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowa wersja RedLoadera lub RedManagera.`)
};

const pt_admin_eco_add_release_description = /** @type {(inputs: Admin_Eco_Add_Release_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uma nova versão do RedLoader ou do RedManager.`)
};

const ru_admin_eco_add_release_description = /** @type {(inputs: Admin_Eco_Add_Release_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новая версия RedLoader или RedManager.`)
};

const sv_admin_eco_add_release_description = /** @type {(inputs: Admin_Eco_Add_Release_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En ny version av RedLoader eller RedManager.`)
};

const tr_admin_eco_add_release_description = /** @type {(inputs: Admin_Eco_Add_Release_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni bir RedLoader veya RedManager sürümü.`)
};

const zh_admin_eco_add_release_description = /** @type {(inputs: Admin_Eco_Add_Release_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader 或 RedManager 的新版本。`)
};

const ja_admin_eco_add_release_description = /** @type {(inputs: Admin_Eco_Add_Release_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader または RedManager の新しいバージョン。`)
};

/**
* | output |
* | --- |
* | "A new RedLoader or RedManager version." |
*
* @param {Admin_Eco_Add_Release_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_eco_add_release_description = /** @type {((inputs?: Admin_Eco_Add_Release_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Eco_Add_Release_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_eco_add_release_description(inputs)
	if (locale === "de") return de_admin_eco_add_release_description(inputs)
	if (locale === "fr") return fr_admin_eco_add_release_description(inputs)
	if (locale === "it") return it_admin_eco_add_release_description(inputs)
	if (locale === "nl") return nl_admin_eco_add_release_description(inputs)
	if (locale === "pl") return pl_admin_eco_add_release_description(inputs)
	if (locale === "pt") return pt_admin_eco_add_release_description(inputs)
	if (locale === "ru") return ru_admin_eco_add_release_description(inputs)
	if (locale === "sv") return sv_admin_eco_add_release_description(inputs)
	if (locale === "tr") return tr_admin_eco_add_release_description(inputs)
	if (locale === "zh") return zh_admin_eco_add_release_description(inputs)
	if (locale === "ja") return ja_admin_eco_add_release_description(inputs)
	return en_admin_eco_add_release_description(inputs)
});
