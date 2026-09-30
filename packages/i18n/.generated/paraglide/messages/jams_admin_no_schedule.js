/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Admin_No_ScheduleInputs */

const en_jams_admin_no_schedule = /** @type {(inputs: Jams_Admin_No_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No schedule yet`)
};

const es_jams_admin_no_schedule = /** @type {(inputs: Jams_Admin_No_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin calendario todavía`)
};

const de_jams_admin_no_schedule = /** @type {(inputs: Jams_Admin_No_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch kein Zeitplan`)
};

const fr_jams_admin_no_schedule = /** @type {(inputs: Jams_Admin_No_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas encore de calendrier`)
};

const it_jams_admin_no_schedule = /** @type {(inputs: Jams_Admin_No_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun calendario ancora`)
};

const nl_jams_admin_no_schedule = /** @type {(inputs: Jams_Admin_No_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen planning`)
};

const pl_jams_admin_no_schedule = /** @type {(inputs: Jams_Admin_No_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak harmonogramu`)
};

const pt_jams_admin_no_schedule = /** @type {(inputs: Jams_Admin_No_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem cronograma ainda`)
};

const ru_jams_admin_no_schedule = /** @type {(inputs: Jams_Admin_No_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Расписания пока нет`)
};

const sv_jams_admin_no_schedule = /** @type {(inputs: Jams_Admin_No_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inget schema ännu`)
};

const tr_jams_admin_no_schedule = /** @type {(inputs: Jams_Admin_No_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz takvim yok`)
};

const zh_jams_admin_no_schedule = /** @type {(inputs: Jams_Admin_No_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无日程`)
};

const ja_jams_admin_no_schedule = /** @type {(inputs: Jams_Admin_No_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スケジュール未設定`)
};

/**
* | output |
* | --- |
* | "No schedule yet" |
*
* @param {Jams_Admin_No_ScheduleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_admin_no_schedule = /** @type {((inputs?: Jams_Admin_No_ScheduleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Admin_No_ScheduleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_admin_no_schedule(inputs)
	if (locale === "de") return de_jams_admin_no_schedule(inputs)
	if (locale === "fr") return fr_jams_admin_no_schedule(inputs)
	if (locale === "it") return it_jams_admin_no_schedule(inputs)
	if (locale === "nl") return nl_jams_admin_no_schedule(inputs)
	if (locale === "pl") return pl_jams_admin_no_schedule(inputs)
	if (locale === "pt") return pt_jams_admin_no_schedule(inputs)
	if (locale === "ru") return ru_jams_admin_no_schedule(inputs)
	if (locale === "sv") return sv_jams_admin_no_schedule(inputs)
	if (locale === "tr") return tr_jams_admin_no_schedule(inputs)
	if (locale === "zh") return zh_jams_admin_no_schedule(inputs)
	if (locale === "ja") return ja_jams_admin_no_schedule(inputs)
	return en_jams_admin_no_schedule(inputs)
});
