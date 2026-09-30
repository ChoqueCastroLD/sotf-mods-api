/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Eco_Status_WorksInputs */

const en_admin_eco_status_works = /** @type {(inputs: Admin_Eco_Status_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Works`)
};

const es_admin_eco_status_works = /** @type {(inputs: Admin_Eco_Status_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funciona`)
};

const de_admin_eco_status_works = /** @type {(inputs: Admin_Eco_Status_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funktioniert`)
};

const fr_admin_eco_status_works = /** @type {(inputs: Admin_Eco_Status_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fonctionne`)
};

const it_admin_eco_status_works = /** @type {(inputs: Admin_Eco_Status_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funziona`)
};

const nl_admin_eco_status_works = /** @type {(inputs: Admin_Eco_Status_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Werkt`)
};

const pl_admin_eco_status_works = /** @type {(inputs: Admin_Eco_Status_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Działa`)
};

const pt_admin_eco_status_works = /** @type {(inputs: Admin_Eco_Status_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funciona`)
};

const ru_admin_eco_status_works = /** @type {(inputs: Admin_Eco_Status_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Работает`)
};

const sv_admin_eco_status_works = /** @type {(inputs: Admin_Eco_Status_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fungerar`)
};

const tr_admin_eco_status_works = /** @type {(inputs: Admin_Eco_Status_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çalışıyor`)
};

const zh_admin_eco_status_works = /** @type {(inputs: Admin_Eco_Status_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可用`)
};

const ja_admin_eco_status_works = /** @type {(inputs: Admin_Eco_Status_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`動作する`)
};

/**
* | output |
* | --- |
* | "Works" |
*
* @param {Admin_Eco_Status_WorksInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_eco_status_works = /** @type {((inputs?: Admin_Eco_Status_WorksInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Eco_Status_WorksInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_eco_status_works(inputs)
	if (locale === "de") return de_admin_eco_status_works(inputs)
	if (locale === "fr") return fr_admin_eco_status_works(inputs)
	if (locale === "it") return it_admin_eco_status_works(inputs)
	if (locale === "nl") return nl_admin_eco_status_works(inputs)
	if (locale === "pl") return pl_admin_eco_status_works(inputs)
	if (locale === "pt") return pt_admin_eco_status_works(inputs)
	if (locale === "ru") return ru_admin_eco_status_works(inputs)
	if (locale === "sv") return sv_admin_eco_status_works(inputs)
	if (locale === "tr") return tr_admin_eco_status_works(inputs)
	if (locale === "zh") return zh_admin_eco_status_works(inputs)
	if (locale === "ja") return ja_admin_eco_status_works(inputs)
	return en_admin_eco_status_works(inputs)
});
