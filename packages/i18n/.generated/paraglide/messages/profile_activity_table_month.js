/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Activity_Table_MonthInputs */

const en_profile_activity_table_month = /** @type {(inputs: Profile_Activity_Table_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Month`)
};

const es_profile_activity_table_month = /** @type {(inputs: Profile_Activity_Table_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mes`)
};

const de_profile_activity_table_month = /** @type {(inputs: Profile_Activity_Table_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Monat`)
};

const fr_profile_activity_table_month = /** @type {(inputs: Profile_Activity_Table_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mois`)
};

const it_profile_activity_table_month = /** @type {(inputs: Profile_Activity_Table_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mese`)
};

const nl_profile_activity_table_month = /** @type {(inputs: Profile_Activity_Table_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maand`)
};

const pl_profile_activity_table_month = /** @type {(inputs: Profile_Activity_Table_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Miesiąc`)
};

const pt_profile_activity_table_month = /** @type {(inputs: Profile_Activity_Table_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mês`)
};

const ru_profile_activity_table_month = /** @type {(inputs: Profile_Activity_Table_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Месяц`)
};

const sv_profile_activity_table_month = /** @type {(inputs: Profile_Activity_Table_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Månad`)
};

const tr_profile_activity_table_month = /** @type {(inputs: Profile_Activity_Table_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ay`)
};

const zh_profile_activity_table_month = /** @type {(inputs: Profile_Activity_Table_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`月份`)
};

const ja_profile_activity_table_month = /** @type {(inputs: Profile_Activity_Table_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`月`)
};

/**
* | output |
* | --- |
* | "Month" |
*
* @param {Profile_Activity_Table_MonthInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_activity_table_month = /** @type {((inputs?: Profile_Activity_Table_MonthInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Activity_Table_MonthInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_activity_table_month(inputs)
	if (locale === "de") return de_profile_activity_table_month(inputs)
	if (locale === "fr") return fr_profile_activity_table_month(inputs)
	if (locale === "it") return it_profile_activity_table_month(inputs)
	if (locale === "nl") return nl_profile_activity_table_month(inputs)
	if (locale === "pl") return pl_profile_activity_table_month(inputs)
	if (locale === "pt") return pt_profile_activity_table_month(inputs)
	if (locale === "ru") return ru_profile_activity_table_month(inputs)
	if (locale === "sv") return sv_profile_activity_table_month(inputs)
	if (locale === "tr") return tr_profile_activity_table_month(inputs)
	if (locale === "zh") return zh_profile_activity_table_month(inputs)
	if (locale === "ja") return ja_profile_activity_table_month(inputs)
	return en_profile_activity_table_month(inputs)
});
