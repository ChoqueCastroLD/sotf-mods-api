/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Admin_Kit_Picks_ToggleInputs */

const en_admin_kit_picks_toggle = /** @type {(inputs: Admin_Kit_Picks_ToggleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Staff pick: ${i?.name}`)
};

const es_admin_kit_picks_toggle = /** @type {(inputs: Admin_Kit_Picks_ToggleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Destacado: ${i?.name}`)
};

const de_admin_kit_picks_toggle = /** @type {(inputs: Admin_Kit_Picks_ToggleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Empfehlung: ${i?.name}`)
};

const fr_admin_kit_picks_toggle = /** @type {(inputs: Admin_Kit_Picks_ToggleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Choix de l’équipe : ${i?.name}`)
};

const it_admin_kit_picks_toggle = /** @type {(inputs: Admin_Kit_Picks_ToggleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Scelta dello staff: ${i?.name}`)
};

const nl_admin_kit_picks_toggle = /** @type {(inputs: Admin_Kit_Picks_ToggleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Teamkeuze: ${i?.name}`)
};

const pl_admin_kit_picks_toggle = /** @type {(inputs: Admin_Kit_Picks_ToggleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wybór ekipy: ${i?.name}`)
};

const pt_admin_kit_picks_toggle = /** @type {(inputs: Admin_Kit_Picks_ToggleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Escolha da equipe: ${i?.name}`)
};

const ru_admin_kit_picks_toggle = /** @type {(inputs: Admin_Kit_Picks_ToggleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Выбор команды: ${i?.name}`)
};

const sv_admin_kit_picks_toggle = /** @type {(inputs: Admin_Kit_Picks_ToggleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Teamets val: ${i?.name}`)
};

const tr_admin_kit_picks_toggle = /** @type {(inputs: Admin_Kit_Picks_ToggleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ekip seçimi: ${i?.name}`)
};

const zh_admin_kit_picks_toggle = /** @type {(inputs: Admin_Kit_Picks_ToggleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`精选：${i?.name}`)
};

const ja_admin_kit_picks_toggle = /** @type {(inputs: Admin_Kit_Picks_ToggleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`おすすめ: ${i?.name}`)
};

/**
* | output |
* | --- |
* | "Staff pick: {name}" |
*
* @param {Admin_Kit_Picks_ToggleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kit_picks_toggle = /** @type {((inputs: Admin_Kit_Picks_ToggleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kit_Picks_ToggleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kit_picks_toggle(inputs)
	if (locale === "de") return de_admin_kit_picks_toggle(inputs)
	if (locale === "fr") return fr_admin_kit_picks_toggle(inputs)
	if (locale === "it") return it_admin_kit_picks_toggle(inputs)
	if (locale === "nl") return nl_admin_kit_picks_toggle(inputs)
	if (locale === "pl") return pl_admin_kit_picks_toggle(inputs)
	if (locale === "pt") return pt_admin_kit_picks_toggle(inputs)
	if (locale === "ru") return ru_admin_kit_picks_toggle(inputs)
	if (locale === "sv") return sv_admin_kit_picks_toggle(inputs)
	if (locale === "tr") return tr_admin_kit_picks_toggle(inputs)
	if (locale === "zh") return zh_admin_kit_picks_toggle(inputs)
	if (locale === "ja") return ja_admin_kit_picks_toggle(inputs)
	return en_admin_kit_picks_toggle(inputs)
});
