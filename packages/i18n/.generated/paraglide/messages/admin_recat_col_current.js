/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Col_CurrentInputs */

const en_admin_recat_col_current = /** @type {(inputs: Admin_Recat_Col_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Now`)
};

const es_admin_recat_col_current = /** @type {(inputs: Admin_Recat_Col_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ahora`)
};

const de_admin_recat_col_current = /** @type {(inputs: Admin_Recat_Col_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jetzt`)
};

const fr_admin_recat_col_current = /** @type {(inputs: Admin_Recat_Col_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actuelle`)
};

const it_admin_recat_col_current = /** @type {(inputs: Admin_Recat_Col_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ora`)
};

const nl_admin_recat_col_current = /** @type {(inputs: Admin_Recat_Col_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nu`)
};

const pl_admin_recat_col_current = /** @type {(inputs: Admin_Recat_Col_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teraz`)
};

const pt_admin_recat_col_current = /** @type {(inputs: Admin_Recat_Col_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agora`)
};

const ru_admin_recat_col_current = /** @type {(inputs: Admin_Recat_Col_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сейчас`)
};

const sv_admin_recat_col_current = /** @type {(inputs: Admin_Recat_Col_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nu`)
};

const tr_admin_recat_col_current = /** @type {(inputs: Admin_Recat_Col_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şu an`)
};

const zh_admin_recat_col_current = /** @type {(inputs: Admin_Recat_Col_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`当前`)
};

const ja_admin_recat_col_current = /** @type {(inputs: Admin_Recat_Col_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在`)
};

/**
* | output |
* | --- |
* | "Now" |
*
* @param {Admin_Recat_Col_CurrentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_col_current = /** @type {((inputs?: Admin_Recat_Col_CurrentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Col_CurrentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_col_current(inputs)
	if (locale === "de") return de_admin_recat_col_current(inputs)
	if (locale === "fr") return fr_admin_recat_col_current(inputs)
	if (locale === "it") return it_admin_recat_col_current(inputs)
	if (locale === "nl") return nl_admin_recat_col_current(inputs)
	if (locale === "pl") return pl_admin_recat_col_current(inputs)
	if (locale === "pt") return pt_admin_recat_col_current(inputs)
	if (locale === "ru") return ru_admin_recat_col_current(inputs)
	if (locale === "sv") return sv_admin_recat_col_current(inputs)
	if (locale === "tr") return tr_admin_recat_col_current(inputs)
	if (locale === "zh") return zh_admin_recat_col_current(inputs)
	if (locale === "ja") return ja_admin_recat_col_current(inputs)
	return en_admin_recat_col_current(inputs)
});
