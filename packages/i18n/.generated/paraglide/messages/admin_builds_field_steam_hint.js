/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Field_Steam_HintInputs */

const en_admin_builds_field_steam_hint = /** @type {(inputs: Admin_Builds_Field_Steam_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`From SteamDB, digits only.`)
};

const es_admin_builds_field_steam_hint = /** @type {(inputs: Admin_Builds_Field_Steam_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De SteamDB, solo dígitos.`)
};

const de_admin_builds_field_steam_hint = /** @type {(inputs: Admin_Builds_Field_Steam_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aus SteamDB, nur Ziffern.`)
};

const fr_admin_builds_field_steam_hint = /** @type {(inputs: Admin_Builds_Field_Steam_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Depuis SteamDB, chiffres uniquement.`)
};

const it_admin_builds_field_steam_hint = /** @type {(inputs: Admin_Builds_Field_Steam_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Da SteamDB, solo cifre.`)
};

const nl_admin_builds_field_steam_hint = /** @type {(inputs: Admin_Builds_Field_Steam_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Van SteamDB, alleen cijfers.`)
};

const pl_admin_builds_field_steam_hint = /** @type {(inputs: Admin_Builds_Field_Steam_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Z SteamDB, same cyfry.`)
};

const pt_admin_builds_field_steam_hint = /** @type {(inputs: Admin_Builds_Field_Steam_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do SteamDB, somente dígitos.`)
};

const ru_admin_builds_field_steam_hint = /** @type {(inputs: Admin_Builds_Field_Steam_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`С SteamDB, только цифры.`)
};

const sv_admin_builds_field_steam_hint = /** @type {(inputs: Admin_Builds_Field_Steam_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Från SteamDB, bara siffror.`)
};

const tr_admin_builds_field_steam_hint = /** @type {(inputs: Admin_Builds_Field_Steam_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SteamDB’den, yalnızca rakam.`)
};

const zh_admin_builds_field_steam_hint = /** @type {(inputs: Admin_Builds_Field_Steam_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`来自 SteamDB，仅限数字。`)
};

const ja_admin_builds_field_steam_hint = /** @type {(inputs: Admin_Builds_Field_Steam_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SteamDB の値。数字のみ。`)
};

/**
* | output |
* | --- |
* | "From SteamDB, digits only." |
*
* @param {Admin_Builds_Field_Steam_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_field_steam_hint = /** @type {((inputs?: Admin_Builds_Field_Steam_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Field_Steam_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_field_steam_hint(inputs)
	if (locale === "de") return de_admin_builds_field_steam_hint(inputs)
	if (locale === "fr") return fr_admin_builds_field_steam_hint(inputs)
	if (locale === "it") return it_admin_builds_field_steam_hint(inputs)
	if (locale === "nl") return nl_admin_builds_field_steam_hint(inputs)
	if (locale === "pl") return pl_admin_builds_field_steam_hint(inputs)
	if (locale === "pt") return pt_admin_builds_field_steam_hint(inputs)
	if (locale === "ru") return ru_admin_builds_field_steam_hint(inputs)
	if (locale === "sv") return sv_admin_builds_field_steam_hint(inputs)
	if (locale === "tr") return tr_admin_builds_field_steam_hint(inputs)
	if (locale === "zh") return zh_admin_builds_field_steam_hint(inputs)
	if (locale === "ja") return ja_admin_builds_field_steam_hint(inputs)
	return en_admin_builds_field_steam_hint(inputs)
});
