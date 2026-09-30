/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Activity_Table_Active_DaysInputs */

const en_profile_activity_table_active_days = /** @type {(inputs: Profile_Activity_Table_Active_DaysInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Active days`)
};

const es_profile_activity_table_active_days = /** @type {(inputs: Profile_Activity_Table_Active_DaysInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Días activos`)
};

const de_profile_activity_table_active_days = /** @type {(inputs: Profile_Activity_Table_Active_DaysInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktive Tage`)
};

const fr_profile_activity_table_active_days = /** @type {(inputs: Profile_Activity_Table_Active_DaysInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jours actifs`)
};

const it_profile_activity_table_active_days = /** @type {(inputs: Profile_Activity_Table_Active_DaysInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Giorni attivi`)
};

const nl_profile_activity_table_active_days = /** @type {(inputs: Profile_Activity_Table_Active_DaysInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actieve dagen`)
};

const pl_profile_activity_table_active_days = /** @type {(inputs: Profile_Activity_Table_Active_DaysInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktywne dni`)
};

const pt_profile_activity_table_active_days = /** @type {(inputs: Profile_Activity_Table_Active_DaysInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dias ativos`)
};

const ru_profile_activity_table_active_days = /** @type {(inputs: Profile_Activity_Table_Active_DaysInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Активные дни`)
};

const sv_profile_activity_table_active_days = /** @type {(inputs: Profile_Activity_Table_Active_DaysInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktiva dagar`)
};

const tr_profile_activity_table_active_days = /** @type {(inputs: Profile_Activity_Table_Active_DaysInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktif günler`)
};

const zh_profile_activity_table_active_days = /** @type {(inputs: Profile_Activity_Table_Active_DaysInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`活跃天数`)
};

const ja_profile_activity_table_active_days = /** @type {(inputs: Profile_Activity_Table_Active_DaysInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`活動日数`)
};

/**
* | output |
* | --- |
* | "Active days" |
*
* @param {Profile_Activity_Table_Active_DaysInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_activity_table_active_days = /** @type {((inputs?: Profile_Activity_Table_Active_DaysInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Activity_Table_Active_DaysInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_activity_table_active_days(inputs)
	if (locale === "de") return de_profile_activity_table_active_days(inputs)
	if (locale === "fr") return fr_profile_activity_table_active_days(inputs)
	if (locale === "it") return it_profile_activity_table_active_days(inputs)
	if (locale === "nl") return nl_profile_activity_table_active_days(inputs)
	if (locale === "pl") return pl_profile_activity_table_active_days(inputs)
	if (locale === "pt") return pt_profile_activity_table_active_days(inputs)
	if (locale === "ru") return ru_profile_activity_table_active_days(inputs)
	if (locale === "sv") return sv_profile_activity_table_active_days(inputs)
	if (locale === "tr") return tr_profile_activity_table_active_days(inputs)
	if (locale === "zh") return zh_profile_activity_table_active_days(inputs)
	if (locale === "ja") return ja_profile_activity_table_active_days(inputs)
	return en_profile_activity_table_active_days(inputs)
});
