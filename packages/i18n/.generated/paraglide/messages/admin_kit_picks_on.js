/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Admin_Kit_Picks_OnInputs */

const en_admin_kit_picks_on = /** @type {(inputs: Admin_Kit_Picks_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} is now a staff pick.`)
};

const es_admin_kit_picks_on = /** @type {(inputs: Admin_Kit_Picks_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ahora es un destacado.`)
};

const de_admin_kit_picks_on = /** @type {(inputs: Admin_Kit_Picks_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ist jetzt eine Empfehlung.`)
};

const fr_admin_kit_picks_on = /** @type {(inputs: Admin_Kit_Picks_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} est maintenant un choix de l’équipe.`)
};

const it_admin_kit_picks_on = /** @type {(inputs: Admin_Kit_Picks_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ora è una scelta dello staff.`)
};

const nl_admin_kit_picks_on = /** @type {(inputs: Admin_Kit_Picks_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} is nu een teamkeuze.`)
};

const pl_admin_kit_picks_on = /** @type {(inputs: Admin_Kit_Picks_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} jest teraz wyborem ekipy.`)
};

const pt_admin_kit_picks_on = /** @type {(inputs: Admin_Kit_Picks_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} agora é uma escolha da equipe.`)
};

const ru_admin_kit_picks_on = /** @type {(inputs: Admin_Kit_Picks_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} теперь в выборе команды.`)
};

const sv_admin_kit_picks_on = /** @type {(inputs: Admin_Kit_Picks_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} är nu teamets val.`)
};

const tr_admin_kit_picks_on = /** @type {(inputs: Admin_Kit_Picks_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} artık bir ekip seçimi.`)
};

const zh_admin_kit_picks_on = /** @type {(inputs: Admin_Kit_Picks_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 已设为精选。`)
};

const ja_admin_kit_picks_on = /** @type {(inputs: Admin_Kit_Picks_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} をおすすめにしました。`)
};

/**
* | output |
* | --- |
* | "{name} is now a staff pick." |
*
* @param {Admin_Kit_Picks_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kit_picks_on = /** @type {((inputs: Admin_Kit_Picks_OnInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kit_Picks_OnInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kit_picks_on(inputs)
	if (locale === "de") return de_admin_kit_picks_on(inputs)
	if (locale === "fr") return fr_admin_kit_picks_on(inputs)
	if (locale === "it") return it_admin_kit_picks_on(inputs)
	if (locale === "nl") return nl_admin_kit_picks_on(inputs)
	if (locale === "pl") return pl_admin_kit_picks_on(inputs)
	if (locale === "pt") return pt_admin_kit_picks_on(inputs)
	if (locale === "ru") return ru_admin_kit_picks_on(inputs)
	if (locale === "sv") return sv_admin_kit_picks_on(inputs)
	if (locale === "tr") return tr_admin_kit_picks_on(inputs)
	if (locale === "zh") return zh_admin_kit_picks_on(inputs)
	if (locale === "ja") return ja_admin_kit_picks_on(inputs)
	return en_admin_kit_picks_on(inputs)
});
