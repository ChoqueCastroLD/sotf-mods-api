/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Award_Mod_Of_WeekInputs */

const en_ui_domain_award_mod_of_week = /** @type {(inputs: Ui_Domain_Award_Mod_Of_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod of the Week`)
};

const es_ui_domain_award_mod_of_week = /** @type {(inputs: Ui_Domain_Award_Mod_Of_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod de la semana`)
};

const de_ui_domain_award_mod_of_week = /** @type {(inputs: Ui_Domain_Award_Mod_Of_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod der Woche`)
};

const fr_ui_domain_award_mod_of_week = /** @type {(inputs: Ui_Domain_Award_Mod_Of_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod de la semaine`)
};

const it_ui_domain_award_mod_of_week = /** @type {(inputs: Ui_Domain_Award_Mod_Of_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod della settimana`)
};

const nl_ui_domain_award_mod_of_week = /** @type {(inputs: Ui_Domain_Award_Mod_Of_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod van de week`)
};

const pl_ui_domain_award_mod_of_week = /** @type {(inputs: Ui_Domain_Award_Mod_Of_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod tygodnia`)
};

const pt_ui_domain_award_mod_of_week = /** @type {(inputs: Ui_Domain_Award_Mod_Of_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod da semana`)
};

const ru_ui_domain_award_mod_of_week = /** @type {(inputs: Ui_Domain_Award_Mod_Of_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мод недели`)
};

const sv_ui_domain_award_mod_of_week = /** @type {(inputs: Ui_Domain_Award_Mod_Of_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veckans modd`)
};

const tr_ui_domain_award_mod_of_week = /** @type {(inputs: Ui_Domain_Award_Mod_Of_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Haftanın Modu`)
};

const zh_ui_domain_award_mod_of_week = /** @type {(inputs: Ui_Domain_Award_Mod_Of_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每周模组`)
};

const ja_ui_domain_award_mod_of_week = /** @type {(inputs: Ui_Domain_Award_Mod_Of_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今週の MOD`)
};

/**
* | output |
* | --- |
* | "Mod of the Week" |
*
* @param {Ui_Domain_Award_Mod_Of_WeekInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_award_mod_of_week = /** @type {((inputs?: Ui_Domain_Award_Mod_Of_WeekInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Award_Mod_Of_WeekInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_award_mod_of_week(inputs)
	if (locale === "de") return de_ui_domain_award_mod_of_week(inputs)
	if (locale === "fr") return fr_ui_domain_award_mod_of_week(inputs)
	if (locale === "it") return it_ui_domain_award_mod_of_week(inputs)
	if (locale === "nl") return nl_ui_domain_award_mod_of_week(inputs)
	if (locale === "pl") return pl_ui_domain_award_mod_of_week(inputs)
	if (locale === "pt") return pt_ui_domain_award_mod_of_week(inputs)
	if (locale === "ru") return ru_ui_domain_award_mod_of_week(inputs)
	if (locale === "sv") return sv_ui_domain_award_mod_of_week(inputs)
	if (locale === "tr") return tr_ui_domain_award_mod_of_week(inputs)
	if (locale === "zh") return zh_ui_domain_award_mod_of_week(inputs)
	if (locale === "ja") return ja_ui_domain_award_mod_of_week(inputs)
	return en_ui_domain_award_mod_of_week(inputs)
});
