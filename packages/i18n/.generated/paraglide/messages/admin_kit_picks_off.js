/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Admin_Kit_Picks_OffInputs */

const en_admin_kit_picks_off = /** @type {(inputs: Admin_Kit_Picks_OffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} is no longer a staff pick.`)
};

const es_admin_kit_picks_off = /** @type {(inputs: Admin_Kit_Picks_OffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ya no es un destacado.`)
};

const de_admin_kit_picks_off = /** @type {(inputs: Admin_Kit_Picks_OffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ist keine Empfehlung mehr.`)
};

const fr_admin_kit_picks_off = /** @type {(inputs: Admin_Kit_Picks_OffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} n’est plus un choix de l’équipe.`)
};

const it_admin_kit_picks_off = /** @type {(inputs: Admin_Kit_Picks_OffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} non è più una scelta dello staff.`)
};

const nl_admin_kit_picks_off = /** @type {(inputs: Admin_Kit_Picks_OffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} is geen teamkeuze meer.`)
};

const pl_admin_kit_picks_off = /** @type {(inputs: Admin_Kit_Picks_OffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} nie jest już wyborem ekipy.`)
};

const pt_admin_kit_picks_off = /** @type {(inputs: Admin_Kit_Picks_OffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} não é mais uma escolha da equipe.`)
};

const ru_admin_kit_picks_off = /** @type {(inputs: Admin_Kit_Picks_OffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} больше не в выборе команды.`)
};

const sv_admin_kit_picks_off = /** @type {(inputs: Admin_Kit_Picks_OffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} är inte längre teamets val.`)
};

const tr_admin_kit_picks_off = /** @type {(inputs: Admin_Kit_Picks_OffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} artık bir ekip seçimi değil.`)
};

const zh_admin_kit_picks_off = /** @type {(inputs: Admin_Kit_Picks_OffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 已取消精选。`)
};

const ja_admin_kit_picks_off = /** @type {(inputs: Admin_Kit_Picks_OffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} をおすすめから外しました。`)
};

/**
* | output |
* | --- |
* | "{name} is no longer a staff pick." |
*
* @param {Admin_Kit_Picks_OffInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kit_picks_off = /** @type {((inputs: Admin_Kit_Picks_OffInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kit_Picks_OffInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kit_picks_off(inputs)
	if (locale === "de") return de_admin_kit_picks_off(inputs)
	if (locale === "fr") return fr_admin_kit_picks_off(inputs)
	if (locale === "it") return it_admin_kit_picks_off(inputs)
	if (locale === "nl") return nl_admin_kit_picks_off(inputs)
	if (locale === "pl") return pl_admin_kit_picks_off(inputs)
	if (locale === "pt") return pt_admin_kit_picks_off(inputs)
	if (locale === "ru") return ru_admin_kit_picks_off(inputs)
	if (locale === "sv") return sv_admin_kit_picks_off(inputs)
	if (locale === "tr") return tr_admin_kit_picks_off(inputs)
	if (locale === "zh") return zh_admin_kit_picks_off(inputs)
	if (locale === "ja") return ja_admin_kit_picks_off(inputs)
	return en_admin_kit_picks_off(inputs)
});
