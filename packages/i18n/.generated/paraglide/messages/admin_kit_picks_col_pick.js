/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Kit_Picks_Col_PickInputs */

const en_admin_kit_picks_col_pick = /** @type {(inputs: Admin_Kit_Picks_Col_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Staff pick`)
};

const es_admin_kit_picks_col_pick = /** @type {(inputs: Admin_Kit_Picks_Col_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Destacado`)
};

const de_admin_kit_picks_col_pick = /** @type {(inputs: Admin_Kit_Picks_Col_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Empfehlung`)
};

const fr_admin_kit_picks_col_pick = /** @type {(inputs: Admin_Kit_Picks_Col_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choix de l’équipe`)
};

const it_admin_kit_picks_col_pick = /** @type {(inputs: Admin_Kit_Picks_Col_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scelta dello staff`)
};

const nl_admin_kit_picks_col_pick = /** @type {(inputs: Admin_Kit_Picks_Col_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teamkeuze`)
};

const pl_admin_kit_picks_col_pick = /** @type {(inputs: Admin_Kit_Picks_Col_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybór ekipy`)
};

const pt_admin_kit_picks_col_pick = /** @type {(inputs: Admin_Kit_Picks_Col_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha da equipe`)
};

const ru_admin_kit_picks_col_pick = /** @type {(inputs: Admin_Kit_Picks_Col_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выбор команды`)
};

const sv_admin_kit_picks_col_pick = /** @type {(inputs: Admin_Kit_Picks_Col_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teamets val`)
};

const tr_admin_kit_picks_col_pick = /** @type {(inputs: Admin_Kit_Picks_Col_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ekip seçimi`)
};

const zh_admin_kit_picks_col_pick = /** @type {(inputs: Admin_Kit_Picks_Col_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`精选`)
};

const ja_admin_kit_picks_col_pick = /** @type {(inputs: Admin_Kit_Picks_Col_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`おすすめ`)
};

/**
* | output |
* | --- |
* | "Staff pick" |
*
* @param {Admin_Kit_Picks_Col_PickInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kit_picks_col_pick = /** @type {((inputs?: Admin_Kit_Picks_Col_PickInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kit_Picks_Col_PickInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kit_picks_col_pick(inputs)
	if (locale === "de") return de_admin_kit_picks_col_pick(inputs)
	if (locale === "fr") return fr_admin_kit_picks_col_pick(inputs)
	if (locale === "it") return it_admin_kit_picks_col_pick(inputs)
	if (locale === "nl") return nl_admin_kit_picks_col_pick(inputs)
	if (locale === "pl") return pl_admin_kit_picks_col_pick(inputs)
	if (locale === "pt") return pt_admin_kit_picks_col_pick(inputs)
	if (locale === "ru") return ru_admin_kit_picks_col_pick(inputs)
	if (locale === "sv") return sv_admin_kit_picks_col_pick(inputs)
	if (locale === "tr") return tr_admin_kit_picks_col_pick(inputs)
	if (locale === "zh") return zh_admin_kit_picks_col_pick(inputs)
	if (locale === "ja") return ja_admin_kit_picks_col_pick(inputs)
	return en_admin_kit_picks_col_pick(inputs)
});
