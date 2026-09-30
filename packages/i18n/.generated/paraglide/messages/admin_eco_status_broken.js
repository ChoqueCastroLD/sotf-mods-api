/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Eco_Status_BrokenInputs */

const en_admin_eco_status_broken = /** @type {(inputs: Admin_Eco_Status_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Broken`)
};

const es_admin_eco_status_broken = /** @type {(inputs: Admin_Eco_Status_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Roto`)
};

const de_admin_eco_status_broken = /** @type {(inputs: Admin_Eco_Status_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaputt`)
};

const fr_admin_eco_status_broken = /** @type {(inputs: Admin_Eco_Status_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cassé`)
};

const it_admin_eco_status_broken = /** @type {(inputs: Admin_Eco_Status_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non funziona`)
};

const nl_admin_eco_status_broken = /** @type {(inputs: Admin_Eco_Status_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapot`)
};

const pl_admin_eco_status_broken = /** @type {(inputs: Admin_Eco_Status_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie działa`)
};

const pt_admin_eco_status_broken = /** @type {(inputs: Admin_Eco_Status_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quebrado`)
};

const ru_admin_eco_status_broken = /** @type {(inputs: Admin_Eco_Status_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не работает`)
};

const sv_admin_eco_status_broken = /** @type {(inputs: Admin_Eco_Status_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trasig`)
};

const tr_admin_eco_status_broken = /** @type {(inputs: Admin_Eco_Status_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bozuk`)
};

const zh_admin_eco_status_broken = /** @type {(inputs: Admin_Eco_Status_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不可用`)
};

const ja_admin_eco_status_broken = /** @type {(inputs: Admin_Eco_Status_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`動作しない`)
};

/**
* | output |
* | --- |
* | "Broken" |
*
* @param {Admin_Eco_Status_BrokenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_eco_status_broken = /** @type {((inputs?: Admin_Eco_Status_BrokenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Eco_Status_BrokenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_eco_status_broken(inputs)
	if (locale === "de") return de_admin_eco_status_broken(inputs)
	if (locale === "fr") return fr_admin_eco_status_broken(inputs)
	if (locale === "it") return it_admin_eco_status_broken(inputs)
	if (locale === "nl") return nl_admin_eco_status_broken(inputs)
	if (locale === "pl") return pl_admin_eco_status_broken(inputs)
	if (locale === "pt") return pt_admin_eco_status_broken(inputs)
	if (locale === "ru") return ru_admin_eco_status_broken(inputs)
	if (locale === "sv") return sv_admin_eco_status_broken(inputs)
	if (locale === "tr") return tr_admin_eco_status_broken(inputs)
	if (locale === "zh") return zh_admin_eco_status_broken(inputs)
	if (locale === "ja") return ja_admin_eco_status_broken(inputs)
	return en_admin_eco_status_broken(inputs)
});
