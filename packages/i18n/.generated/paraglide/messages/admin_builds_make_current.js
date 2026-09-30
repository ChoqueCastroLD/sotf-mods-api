/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Make_CurrentInputs */

const en_admin_builds_make_current = /** @type {(inputs: Admin_Builds_Make_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Make current`)
};

const es_admin_builds_make_current = /** @type {(inputs: Admin_Builds_Make_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcar como actual`)
};

const de_admin_builds_make_current = /** @type {(inputs: Admin_Builds_Make_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Als aktuell markieren`)
};

const fr_admin_builds_make_current = /** @type {(inputs: Admin_Builds_Make_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Définir comme actuel`)
};

const it_admin_builds_make_current = /** @type {(inputs: Admin_Builds_Make_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Imposta come attuale`)
};

const nl_admin_builds_make_current = /** @type {(inputs: Admin_Builds_Make_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Als huidig instellen`)
};

const pl_admin_builds_make_current = /** @type {(inputs: Admin_Builds_Make_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ustaw jako aktualny`)
};

const pt_admin_builds_make_current = /** @type {(inputs: Admin_Builds_Make_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tornar atual`)
};

const ru_admin_builds_make_current = /** @type {(inputs: Admin_Builds_Make_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сделать текущей`)
};

const sv_admin_builds_make_current = /** @type {(inputs: Admin_Builds_Make_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gör aktuell`)
};

const tr_admin_builds_make_current = /** @type {(inputs: Admin_Builds_Make_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncel yap`)
};

const zh_admin_builds_make_current = /** @type {(inputs: Admin_Builds_Make_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`设为当前`)
};

const ja_admin_builds_make_current = /** @type {(inputs: Admin_Builds_Make_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在のビルドにする`)
};

/**
* | output |
* | --- |
* | "Make current" |
*
* @param {Admin_Builds_Make_CurrentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_make_current = /** @type {((inputs?: Admin_Builds_Make_CurrentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Make_CurrentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_make_current(inputs)
	if (locale === "de") return de_admin_builds_make_current(inputs)
	if (locale === "fr") return fr_admin_builds_make_current(inputs)
	if (locale === "it") return it_admin_builds_make_current(inputs)
	if (locale === "nl") return nl_admin_builds_make_current(inputs)
	if (locale === "pl") return pl_admin_builds_make_current(inputs)
	if (locale === "pt") return pt_admin_builds_make_current(inputs)
	if (locale === "ru") return ru_admin_builds_make_current(inputs)
	if (locale === "sv") return sv_admin_builds_make_current(inputs)
	if (locale === "tr") return tr_admin_builds_make_current(inputs)
	if (locale === "zh") return zh_admin_builds_make_current(inputs)
	if (locale === "ja") return ja_admin_builds_make_current(inputs)
	return en_admin_builds_make_current(inputs)
});
