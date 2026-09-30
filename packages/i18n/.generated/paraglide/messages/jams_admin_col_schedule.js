/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Admin_Col_ScheduleInputs */

const en_jams_admin_col_schedule = /** @type {(inputs: Jams_Admin_Col_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schedule`)
};

const es_jams_admin_col_schedule = /** @type {(inputs: Jams_Admin_Col_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Calendario`)
};

const de_jams_admin_col_schedule = /** @type {(inputs: Jams_Admin_Col_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zeitplan`)
};

const fr_jams_admin_col_schedule = /** @type {(inputs: Jams_Admin_Col_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Calendrier`)
};

const it_jams_admin_col_schedule = /** @type {(inputs: Jams_Admin_Col_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Calendario`)
};

const nl_jams_admin_col_schedule = /** @type {(inputs: Jams_Admin_Col_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Planning`)
};

const pl_jams_admin_col_schedule = /** @type {(inputs: Jams_Admin_Col_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Harmonogram`)
};

const pt_jams_admin_col_schedule = /** @type {(inputs: Jams_Admin_Col_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cronograma`)
};

const ru_jams_admin_col_schedule = /** @type {(inputs: Jams_Admin_Col_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Расписание`)
};

const sv_jams_admin_col_schedule = /** @type {(inputs: Jams_Admin_Col_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schema`)
};

const tr_jams_admin_col_schedule = /** @type {(inputs: Jams_Admin_Col_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takvim`)
};

const zh_jams_admin_col_schedule = /** @type {(inputs: Jams_Admin_Col_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日程`)
};

const ja_jams_admin_col_schedule = /** @type {(inputs: Jams_Admin_Col_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スケジュール`)
};

/**
* | output |
* | --- |
* | "Schedule" |
*
* @param {Jams_Admin_Col_ScheduleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_admin_col_schedule = /** @type {((inputs?: Jams_Admin_Col_ScheduleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Admin_Col_ScheduleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_admin_col_schedule(inputs)
	if (locale === "de") return de_jams_admin_col_schedule(inputs)
	if (locale === "fr") return fr_jams_admin_col_schedule(inputs)
	if (locale === "it") return it_jams_admin_col_schedule(inputs)
	if (locale === "nl") return nl_jams_admin_col_schedule(inputs)
	if (locale === "pl") return pl_jams_admin_col_schedule(inputs)
	if (locale === "pt") return pt_jams_admin_col_schedule(inputs)
	if (locale === "ru") return ru_jams_admin_col_schedule(inputs)
	if (locale === "sv") return sv_jams_admin_col_schedule(inputs)
	if (locale === "tr") return tr_jams_admin_col_schedule(inputs)
	if (locale === "zh") return zh_jams_admin_col_schedule(inputs)
	if (locale === "ja") return ja_jams_admin_col_schedule(inputs)
	return en_jams_admin_col_schedule(inputs)
});
