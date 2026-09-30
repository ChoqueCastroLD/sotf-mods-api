/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_AddInputs */

const en_admin_builds_add = /** @type {(inputs: Admin_Builds_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Register build`)
};

const es_admin_builds_add = /** @type {(inputs: Admin_Builds_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registrar build`)
};

const de_admin_builds_add = /** @type {(inputs: Admin_Builds_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build registrieren`)
};

const fr_admin_builds_add = /** @type {(inputs: Admin_Builds_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrer un build`)
};

const it_admin_builds_add = /** @type {(inputs: Admin_Builds_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registra build`)
};

const nl_admin_builds_add = /** @type {(inputs: Admin_Builds_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build registreren`)
};

const pl_admin_builds_add = /** @type {(inputs: Admin_Builds_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zarejestruj build`)
};

const pt_admin_builds_add = /** @type {(inputs: Admin_Builds_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registrar build`)
};

const ru_admin_builds_add = /** @type {(inputs: Admin_Builds_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавить сборку`)
};

const sv_admin_builds_add = /** @type {(inputs: Admin_Builds_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registrera bygge`)
};

const tr_admin_builds_add = /** @type {(inputs: Admin_Builds_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm kaydet`)
};

const zh_admin_builds_add = /** @type {(inputs: Admin_Builds_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登记版本`)
};

const ja_admin_builds_add = /** @type {(inputs: Admin_Builds_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ビルドを登録`)
};

/**
* | output |
* | --- |
* | "Register build" |
*
* @param {Admin_Builds_AddInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_add = /** @type {((inputs?: Admin_Builds_AddInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_AddInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_add(inputs)
	if (locale === "de") return de_admin_builds_add(inputs)
	if (locale === "fr") return fr_admin_builds_add(inputs)
	if (locale === "it") return it_admin_builds_add(inputs)
	if (locale === "nl") return nl_admin_builds_add(inputs)
	if (locale === "pl") return pl_admin_builds_add(inputs)
	if (locale === "pt") return pt_admin_builds_add(inputs)
	if (locale === "ru") return ru_admin_builds_add(inputs)
	if (locale === "sv") return sv_admin_builds_add(inputs)
	if (locale === "tr") return tr_admin_builds_add(inputs)
	if (locale === "zh") return zh_admin_builds_add(inputs)
	if (locale === "ja") return ja_admin_builds_add(inputs)
	return en_admin_builds_add(inputs)
});
