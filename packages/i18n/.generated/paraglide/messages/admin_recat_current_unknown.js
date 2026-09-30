/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Current_UnknownInputs */

const en_admin_recat_current_unknown = /** @type {(inputs: Admin_Recat_Current_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not loaded`)
};

const es_admin_recat_current_unknown = /** @type {(inputs: Admin_Recat_Current_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin cargar`)
};

const de_admin_recat_current_unknown = /** @type {(inputs: Admin_Recat_Current_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht geladen`)
};

const fr_admin_recat_current_unknown = /** @type {(inputs: Admin_Recat_Current_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non chargée`)
};

const it_admin_recat_current_unknown = /** @type {(inputs: Admin_Recat_Current_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non caricata`)
};

const nl_admin_recat_current_unknown = /** @type {(inputs: Admin_Recat_Current_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet geladen`)
};

const pl_admin_recat_current_unknown = /** @type {(inputs: Admin_Recat_Current_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niewczytana`)
};

const pt_admin_recat_current_unknown = /** @type {(inputs: Admin_Recat_Current_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não carregada`)
};

const ru_admin_recat_current_unknown = /** @type {(inputs: Admin_Recat_Current_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не загружена`)
};

const sv_admin_recat_current_unknown = /** @type {(inputs: Admin_Recat_Current_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inte laddad`)
};

const tr_admin_recat_current_unknown = /** @type {(inputs: Admin_Recat_Current_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yüklenmedi`)
};

const zh_admin_recat_current_unknown = /** @type {(inputs: Admin_Recat_Current_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未加载`)
};

const ja_admin_recat_current_unknown = /** @type {(inputs: Admin_Recat_Current_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未読み込み`)
};

/**
* | output |
* | --- |
* | "Not loaded" |
*
* @param {Admin_Recat_Current_UnknownInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_current_unknown = /** @type {((inputs?: Admin_Recat_Current_UnknownInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Current_UnknownInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_current_unknown(inputs)
	if (locale === "de") return de_admin_recat_current_unknown(inputs)
	if (locale === "fr") return fr_admin_recat_current_unknown(inputs)
	if (locale === "it") return it_admin_recat_current_unknown(inputs)
	if (locale === "nl") return nl_admin_recat_current_unknown(inputs)
	if (locale === "pl") return pl_admin_recat_current_unknown(inputs)
	if (locale === "pt") return pt_admin_recat_current_unknown(inputs)
	if (locale === "ru") return ru_admin_recat_current_unknown(inputs)
	if (locale === "sv") return sv_admin_recat_current_unknown(inputs)
	if (locale === "tr") return tr_admin_recat_current_unknown(inputs)
	if (locale === "zh") return zh_admin_recat_current_unknown(inputs)
	if (locale === "ja") return ja_admin_recat_current_unknown(inputs)
	return en_admin_recat_current_unknown(inputs)
});
