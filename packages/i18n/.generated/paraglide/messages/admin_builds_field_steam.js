/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Field_SteamInputs */

const en_admin_builds_field_steam = /** @type {(inputs: Admin_Builds_Field_SteamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam build ID`)
};

const es_admin_builds_field_steam = /** @type {(inputs: Admin_Builds_Field_SteamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID de build de Steam`)
};

const de_admin_builds_field_steam = /** @type {(inputs: Admin_Builds_Field_SteamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam-Build-ID`)
};

const fr_admin_builds_field_steam = /** @type {(inputs: Admin_Builds_Field_SteamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID de build Steam`)
};

const it_admin_builds_field_steam = /** @type {(inputs: Admin_Builds_Field_SteamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID build di Steam`)
};

const nl_admin_builds_field_steam = /** @type {(inputs: Admin_Builds_Field_SteamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam-build-ID`)
};

const pl_admin_builds_field_steam = /** @type {(inputs: Admin_Builds_Field_SteamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID buildu Steam`)
};

const pt_admin_builds_field_steam = /** @type {(inputs: Admin_Builds_Field_SteamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID do build na Steam`)
};

const ru_admin_builds_field_steam = /** @type {(inputs: Admin_Builds_Field_SteamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID сборки Steam`)
};

const sv_admin_builds_field_steam = /** @type {(inputs: Admin_Builds_Field_SteamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam-bygg-ID`)
};

const tr_admin_builds_field_steam = /** @type {(inputs: Admin_Builds_Field_SteamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam sürüm kimliği`)
};

const zh_admin_builds_field_steam = /** @type {(inputs: Admin_Builds_Field_SteamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam 版本 ID`)
};

const ja_admin_builds_field_steam = /** @type {(inputs: Admin_Builds_Field_SteamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam ビルド ID`)
};

/**
* | output |
* | --- |
* | "Steam build ID" |
*
* @param {Admin_Builds_Field_SteamInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_field_steam = /** @type {((inputs?: Admin_Builds_Field_SteamInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Field_SteamInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_field_steam(inputs)
	if (locale === "de") return de_admin_builds_field_steam(inputs)
	if (locale === "fr") return fr_admin_builds_field_steam(inputs)
	if (locale === "it") return it_admin_builds_field_steam(inputs)
	if (locale === "nl") return nl_admin_builds_field_steam(inputs)
	if (locale === "pl") return pl_admin_builds_field_steam(inputs)
	if (locale === "pt") return pt_admin_builds_field_steam(inputs)
	if (locale === "ru") return ru_admin_builds_field_steam(inputs)
	if (locale === "sv") return sv_admin_builds_field_steam(inputs)
	if (locale === "tr") return tr_admin_builds_field_steam(inputs)
	if (locale === "zh") return zh_admin_builds_field_steam(inputs)
	if (locale === "ja") return ja_admin_builds_field_steam(inputs)
	return en_admin_builds_field_steam(inputs)
});
