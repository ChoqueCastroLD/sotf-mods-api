/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Admin_Actions_ForInputs */

const en_admin_actions_for = /** @type {(inputs: Admin_Actions_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Actions for ${i?.name}`)
};

const es_admin_actions_for = /** @type {(inputs: Admin_Actions_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Acciones de ${i?.name}`)
};

const de_admin_actions_for = /** @type {(inputs: Admin_Actions_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aktionen für ${i?.name}`)
};

const fr_admin_actions_for = /** @type {(inputs: Admin_Actions_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Actions pour ${i?.name}`)
};

const it_admin_actions_for = /** @type {(inputs: Admin_Actions_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Azioni per ${i?.name}`)
};

const nl_admin_actions_for = /** @type {(inputs: Admin_Actions_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Acties voor ${i?.name}`)
};

const pl_admin_actions_for = /** @type {(inputs: Admin_Actions_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Działania dla ${i?.name}`)
};

const pt_admin_actions_for = /** @type {(inputs: Admin_Actions_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ações de ${i?.name}`)
};

const ru_admin_actions_for = /** @type {(inputs: Admin_Actions_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Действия для ${i?.name}`)
};

const sv_admin_actions_for = /** @type {(inputs: Admin_Actions_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Åtgärder för ${i?.name}`)
};

const tr_admin_actions_for = /** @type {(inputs: Admin_Actions_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} için işlemler`)
};

const zh_admin_actions_for = /** @type {(inputs: Admin_Actions_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 的操作`)
};

const ja_admin_actions_for = /** @type {(inputs: Admin_Actions_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} の操作`)
};

/**
* | output |
* | --- |
* | "Actions for {name}" |
*
* @param {Admin_Actions_ForInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_actions_for = /** @type {((inputs: Admin_Actions_ForInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Actions_ForInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_actions_for(inputs)
	if (locale === "de") return de_admin_actions_for(inputs)
	if (locale === "fr") return fr_admin_actions_for(inputs)
	if (locale === "it") return it_admin_actions_for(inputs)
	if (locale === "nl") return nl_admin_actions_for(inputs)
	if (locale === "pl") return pl_admin_actions_for(inputs)
	if (locale === "pt") return pt_admin_actions_for(inputs)
	if (locale === "ru") return ru_admin_actions_for(inputs)
	if (locale === "sv") return sv_admin_actions_for(inputs)
	if (locale === "tr") return tr_admin_actions_for(inputs)
	if (locale === "zh") return zh_admin_actions_for(inputs)
	if (locale === "ja") return ja_admin_actions_for(inputs)
	return en_admin_actions_for(inputs)
});
