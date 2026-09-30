/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Activity_Table_TotalInputs */

const en_profile_activity_table_total = /** @type {(inputs: Profile_Activity_Table_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Total`)
};

const es_profile_activity_table_total = /** @type {(inputs: Profile_Activity_Table_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Total`)
};

const de_profile_activity_table_total = /** @type {(inputs: Profile_Activity_Table_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gesamt`)
};

const fr_profile_activity_table_total = /** @type {(inputs: Profile_Activity_Table_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Total`)
};

const it_profile_activity_table_total = /** @type {(inputs: Profile_Activity_Table_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Totale`)
};

const nl_profile_activity_table_total = /** @type {(inputs: Profile_Activity_Table_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Totaal`)
};

const pl_profile_activity_table_total = /** @type {(inputs: Profile_Activity_Table_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Razem`)
};

const pt_profile_activity_table_total = /** @type {(inputs: Profile_Activity_Table_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Total`)
};

const ru_profile_activity_table_total = /** @type {(inputs: Profile_Activity_Table_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Всего`)
};

const sv_profile_activity_table_total = /** @type {(inputs: Profile_Activity_Table_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Totalt`)
};

const tr_profile_activity_table_total = /** @type {(inputs: Profile_Activity_Table_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toplam`)
};

const zh_profile_activity_table_total = /** @type {(inputs: Profile_Activity_Table_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`合计`)
};

const ja_profile_activity_table_total = /** @type {(inputs: Profile_Activity_Table_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`合計`)
};

/**
* | output |
* | --- |
* | "Total" |
*
* @param {Profile_Activity_Table_TotalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_activity_table_total = /** @type {((inputs?: Profile_Activity_Table_TotalInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Activity_Table_TotalInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_activity_table_total(inputs)
	if (locale === "de") return de_profile_activity_table_total(inputs)
	if (locale === "fr") return fr_profile_activity_table_total(inputs)
	if (locale === "it") return it_profile_activity_table_total(inputs)
	if (locale === "nl") return nl_profile_activity_table_total(inputs)
	if (locale === "pl") return pl_profile_activity_table_total(inputs)
	if (locale === "pt") return pt_profile_activity_table_total(inputs)
	if (locale === "ru") return ru_profile_activity_table_total(inputs)
	if (locale === "sv") return sv_profile_activity_table_total(inputs)
	if (locale === "tr") return tr_profile_activity_table_total(inputs)
	if (locale === "zh") return zh_profile_activity_table_total(inputs)
	if (locale === "ja") return ja_profile_activity_table_total(inputs)
	return en_profile_activity_table_total(inputs)
});
