/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Limits_AddInputs */

const en_admin_limits_add = /** @type {(inputs: Admin_Limits_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add override`)
};

const es_admin_limits_add = /** @type {(inputs: Admin_Limits_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadir sustitución`)
};

const de_admin_limits_add = /** @type {(inputs: Admin_Limits_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abweichung hinzufügen`)
};

const fr_admin_limits_add = /** @type {(inputs: Admin_Limits_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouter un remplacement`)
};

const it_admin_limits_add = /** @type {(inputs: Admin_Limits_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiungi sostituzione`)
};

const nl_admin_limits_add = /** @type {(inputs: Admin_Limits_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afwijking toevoegen`)
};

const pl_admin_limits_add = /** @type {(inputs: Admin_Limits_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodaj zmianę`)
};

const pt_admin_limits_add = /** @type {(inputs: Admin_Limits_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionar substituição`)
};

const ru_admin_limits_add = /** @type {(inputs: Admin_Limits_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавить переопределение`)
};

const sv_admin_limits_add = /** @type {(inputs: Admin_Limits_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg till åsidosättning`)
};

const tr_admin_limits_add = /** @type {(inputs: Admin_Limits_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geçersiz kılma ekle`)
};

const zh_admin_limits_add = /** @type {(inputs: Admin_Limits_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加覆盖`)
};

const ja_admin_limits_add = /** @type {(inputs: Admin_Limits_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上書きを追加`)
};

/**
* | output |
* | --- |
* | "Add override" |
*
* @param {Admin_Limits_AddInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_limits_add = /** @type {((inputs?: Admin_Limits_AddInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Limits_AddInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_limits_add(inputs)
	if (locale === "de") return de_admin_limits_add(inputs)
	if (locale === "fr") return fr_admin_limits_add(inputs)
	if (locale === "it") return it_admin_limits_add(inputs)
	if (locale === "nl") return nl_admin_limits_add(inputs)
	if (locale === "pl") return pl_admin_limits_add(inputs)
	if (locale === "pt") return pt_admin_limits_add(inputs)
	if (locale === "ru") return ru_admin_limits_add(inputs)
	if (locale === "sv") return sv_admin_limits_add(inputs)
	if (locale === "tr") return tr_admin_limits_add(inputs)
	if (locale === "zh") return zh_admin_limits_add(inputs)
	if (locale === "ja") return ja_admin_limits_add(inputs)
	return en_admin_limits_add(inputs)
});
