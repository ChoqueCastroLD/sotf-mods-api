/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Kit_Picks_OnlyInputs */

const en_admin_kit_picks_only = /** @type {(inputs: Admin_Kit_Picks_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Only staff picks`)
};

const es_admin_kit_picks_only = /** @type {(inputs: Admin_Kit_Picks_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo destacados`)
};

const de_admin_kit_picks_only = /** @type {(inputs: Admin_Kit_Picks_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur Empfehlungen`)
};

const fr_admin_kit_picks_only = /** @type {(inputs: Admin_Kit_Picks_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seulement les choix de l’équipe`)
};

const it_admin_kit_picks_only = /** @type {(inputs: Admin_Kit_Picks_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo scelte dello staff`)
};

const nl_admin_kit_picks_only = /** @type {(inputs: Admin_Kit_Picks_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen teamkeuzes`)
};

const pl_admin_kit_picks_only = /** @type {(inputs: Admin_Kit_Picks_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tylko wybrane przez ekipę`)
};

const pt_admin_kit_picks_only = /** @type {(inputs: Admin_Kit_Picks_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Só escolhas da equipe`)
};

const ru_admin_kit_picks_only = /** @type {(inputs: Admin_Kit_Picks_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Только выбор команды`)
};

const sv_admin_kit_picks_only = /** @type {(inputs: Admin_Kit_Picks_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bara teamets val`)
};

const tr_admin_kit_picks_only = /** @type {(inputs: Admin_Kit_Picks_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca ekip seçimleri`)
};

const zh_admin_kit_picks_only = /** @type {(inputs: Admin_Kit_Picks_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仅精选`)
};

const ja_admin_kit_picks_only = /** @type {(inputs: Admin_Kit_Picks_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`おすすめのみ`)
};

/**
* | output |
* | --- |
* | "Only staff picks" |
*
* @param {Admin_Kit_Picks_OnlyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kit_picks_only = /** @type {((inputs?: Admin_Kit_Picks_OnlyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kit_Picks_OnlyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kit_picks_only(inputs)
	if (locale === "de") return de_admin_kit_picks_only(inputs)
	if (locale === "fr") return fr_admin_kit_picks_only(inputs)
	if (locale === "it") return it_admin_kit_picks_only(inputs)
	if (locale === "nl") return nl_admin_kit_picks_only(inputs)
	if (locale === "pl") return pl_admin_kit_picks_only(inputs)
	if (locale === "pt") return pt_admin_kit_picks_only(inputs)
	if (locale === "ru") return ru_admin_kit_picks_only(inputs)
	if (locale === "sv") return sv_admin_kit_picks_only(inputs)
	if (locale === "tr") return tr_admin_kit_picks_only(inputs)
	if (locale === "zh") return zh_admin_kit_picks_only(inputs)
	if (locale === "ja") return ja_admin_kit_picks_only(inputs)
	return en_admin_kit_picks_only(inputs)
});
