/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Award_Mod_Of_MonthInputs */

const en_ui_domain_award_mod_of_month = /** @type {(inputs: Ui_Domain_Award_Mod_Of_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod of the Month`)
};

const es_ui_domain_award_mod_of_month = /** @type {(inputs: Ui_Domain_Award_Mod_Of_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod del mes`)
};

const de_ui_domain_award_mod_of_month = /** @type {(inputs: Ui_Domain_Award_Mod_Of_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod des Monats`)
};

const fr_ui_domain_award_mod_of_month = /** @type {(inputs: Ui_Domain_Award_Mod_Of_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod du mois`)
};

const it_ui_domain_award_mod_of_month = /** @type {(inputs: Ui_Domain_Award_Mod_Of_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod del mese`)
};

const nl_ui_domain_award_mod_of_month = /** @type {(inputs: Ui_Domain_Award_Mod_Of_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod van de maand`)
};

const pl_ui_domain_award_mod_of_month = /** @type {(inputs: Ui_Domain_Award_Mod_Of_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod miesiąca`)
};

const pt_ui_domain_award_mod_of_month = /** @type {(inputs: Ui_Domain_Award_Mod_Of_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod do mês`)
};

const ru_ui_domain_award_mod_of_month = /** @type {(inputs: Ui_Domain_Award_Mod_Of_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мод месяца`)
};

const sv_ui_domain_award_mod_of_month = /** @type {(inputs: Ui_Domain_Award_Mod_Of_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Månadens modd`)
};

const tr_ui_domain_award_mod_of_month = /** @type {(inputs: Ui_Domain_Award_Mod_Of_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ayın Modu`)
};

const zh_ui_domain_award_mod_of_month = /** @type {(inputs: Ui_Domain_Award_Mod_Of_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`月度模组`)
};

const ja_ui_domain_award_mod_of_month = /** @type {(inputs: Ui_Domain_Award_Mod_Of_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今月の MOD`)
};

/**
* | output |
* | --- |
* | "Mod of the Month" |
*
* @param {Ui_Domain_Award_Mod_Of_MonthInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_award_mod_of_month = /** @type {((inputs?: Ui_Domain_Award_Mod_Of_MonthInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Award_Mod_Of_MonthInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_award_mod_of_month(inputs)
	if (locale === "de") return de_ui_domain_award_mod_of_month(inputs)
	if (locale === "fr") return fr_ui_domain_award_mod_of_month(inputs)
	if (locale === "it") return it_ui_domain_award_mod_of_month(inputs)
	if (locale === "nl") return nl_ui_domain_award_mod_of_month(inputs)
	if (locale === "pl") return pl_ui_domain_award_mod_of_month(inputs)
	if (locale === "pt") return pt_ui_domain_award_mod_of_month(inputs)
	if (locale === "ru") return ru_ui_domain_award_mod_of_month(inputs)
	if (locale === "sv") return sv_ui_domain_award_mod_of_month(inputs)
	if (locale === "tr") return tr_ui_domain_award_mod_of_month(inputs)
	if (locale === "zh") return zh_ui_domain_award_mod_of_month(inputs)
	if (locale === "ja") return ja_ui_domain_award_mod_of_month(inputs)
	return en_ui_domain_award_mod_of_month(inputs)
});
