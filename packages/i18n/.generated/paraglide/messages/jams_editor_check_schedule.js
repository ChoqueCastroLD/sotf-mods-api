/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Check_ScheduleInputs */

const en_jams_editor_check_schedule = /** @type {(inputs: Jams_Editor_Check_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dates for submissions and voting`)
};

const es_jams_editor_check_schedule = /** @type {(inputs: Jams_Editor_Check_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fechas de inscripción y votación`)
};

const de_jams_editor_check_schedule = /** @type {(inputs: Jams_Editor_Check_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Termine für Einreichung und Abstimmung`)
};

const fr_jams_editor_check_schedule = /** @type {(inputs: Jams_Editor_Check_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dates des inscriptions et du vote`)
};

const it_jams_editor_check_schedule = /** @type {(inputs: Jams_Editor_Check_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Date di iscrizione e di voto`)
};

const nl_jams_editor_check_schedule = /** @type {(inputs: Jams_Editor_Check_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Data voor inzendingen en stemmen`)
};

const pl_jams_editor_check_schedule = /** @type {(inputs: Jams_Editor_Check_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daty zgłoszeń i głosowania`)
};

const pt_jams_editor_check_schedule = /** @type {(inputs: Jams_Editor_Check_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Datas de inscrição e votação`)
};

const ru_jams_editor_check_schedule = /** @type {(inputs: Jams_Editor_Check_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Даты приёма работ и голосования`)
};

const sv_jams_editor_check_schedule = /** @type {(inputs: Jams_Editor_Check_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Datum för bidrag och röstning`)
};

const tr_jams_editor_check_schedule = /** @type {(inputs: Jams_Editor_Check_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gönderim ve oylama tarihleri`)
};

const zh_jams_editor_check_schedule = /** @type {(inputs: Jams_Editor_Check_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投稿和投票的日期`)
};

const ja_jams_editor_check_schedule = /** @type {(inputs: Jams_Editor_Check_ScheduleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`応募と投票の日程`)
};

/**
* | output |
* | --- |
* | "Dates for submissions and voting" |
*
* @param {Jams_Editor_Check_ScheduleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_check_schedule = /** @type {((inputs?: Jams_Editor_Check_ScheduleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Check_ScheduleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_check_schedule(inputs)
	if (locale === "de") return de_jams_editor_check_schedule(inputs)
	if (locale === "fr") return fr_jams_editor_check_schedule(inputs)
	if (locale === "it") return it_jams_editor_check_schedule(inputs)
	if (locale === "nl") return nl_jams_editor_check_schedule(inputs)
	if (locale === "pl") return pl_jams_editor_check_schedule(inputs)
	if (locale === "pt") return pt_jams_editor_check_schedule(inputs)
	if (locale === "ru") return ru_jams_editor_check_schedule(inputs)
	if (locale === "sv") return sv_jams_editor_check_schedule(inputs)
	if (locale === "tr") return tr_jams_editor_check_schedule(inputs)
	if (locale === "zh") return zh_jams_editor_check_schedule(inputs)
	if (locale === "ja") return ja_jams_editor_check_schedule(inputs)
	return en_jams_editor_check_schedule(inputs)
});
