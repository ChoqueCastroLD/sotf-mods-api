/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Error_SteamInputs */

const en_admin_builds_error_steam = /** @type {(inputs: Admin_Builds_Error_SteamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Digits only, up to 12.`)
};

const es_admin_builds_error_steam = /** @type {(inputs: Admin_Builds_Error_SteamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo dígitos, hasta 12.`)
};

const de_admin_builds_error_steam = /** @type {(inputs: Admin_Builds_Error_SteamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur Ziffern, höchstens 12.`)
};

const fr_admin_builds_error_steam = /** @type {(inputs: Admin_Builds_Error_SteamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiffres uniquement, 12 au maximum.`)
};

const it_admin_builds_error_steam = /** @type {(inputs: Admin_Builds_Error_SteamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo cifre, al massimo 12.`)
};

const nl_admin_builds_error_steam = /** @type {(inputs: Admin_Builds_Error_SteamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen cijfers, maximaal 12.`)
};

const pl_admin_builds_error_steam = /** @type {(inputs: Admin_Builds_Error_SteamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Same cyfry, najwyżej 12.`)
};

const pt_admin_builds_error_steam = /** @type {(inputs: Admin_Builds_Error_SteamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Somente dígitos, até 12.`)
};

const ru_admin_builds_error_steam = /** @type {(inputs: Admin_Builds_Error_SteamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Только цифры, не больше 12.`)
};

const sv_admin_builds_error_steam = /** @type {(inputs: Admin_Builds_Error_SteamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bara siffror, högst 12.`)
};

const tr_admin_builds_error_steam = /** @type {(inputs: Admin_Builds_Error_SteamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca rakam, en fazla 12.`)
};

const zh_admin_builds_error_steam = /** @type {(inputs: Admin_Builds_Error_SteamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仅限数字，最多 12 位。`)
};

const ja_admin_builds_error_steam = /** @type {(inputs: Admin_Builds_Error_SteamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`数字のみ、12 桁以内。`)
};

/**
* | output |
* | --- |
* | "Digits only, up to 12." |
*
* @param {Admin_Builds_Error_SteamInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_error_steam = /** @type {((inputs?: Admin_Builds_Error_SteamInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Error_SteamInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_error_steam(inputs)
	if (locale === "de") return de_admin_builds_error_steam(inputs)
	if (locale === "fr") return fr_admin_builds_error_steam(inputs)
	if (locale === "it") return it_admin_builds_error_steam(inputs)
	if (locale === "nl") return nl_admin_builds_error_steam(inputs)
	if (locale === "pl") return pl_admin_builds_error_steam(inputs)
	if (locale === "pt") return pt_admin_builds_error_steam(inputs)
	if (locale === "ru") return ru_admin_builds_error_steam(inputs)
	if (locale === "sv") return sv_admin_builds_error_steam(inputs)
	if (locale === "tr") return tr_admin_builds_error_steam(inputs)
	if (locale === "zh") return zh_admin_builds_error_steam(inputs)
	if (locale === "ja") return ja_admin_builds_error_steam(inputs)
	return en_admin_builds_error_steam(inputs)
});
