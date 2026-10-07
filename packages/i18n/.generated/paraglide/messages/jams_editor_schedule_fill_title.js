/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Schedule_Fill_TitleInputs */

const en_jams_editor_schedule_fill_title = /** @type {(inputs: Jams_Editor_Schedule_Fill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Standard schedule`)
};

const es_jams_editor_schedule_fill_title = /** @type {(inputs: Jams_Editor_Schedule_Fill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Calendario estándar`)
};

const de_jams_editor_schedule_fill_title = /** @type {(inputs: Jams_Editor_Schedule_Fill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Standardzeitplan`)
};

const fr_jams_editor_schedule_fill_title = /** @type {(inputs: Jams_Editor_Schedule_Fill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Calendrier standard`)
};

const it_jams_editor_schedule_fill_title = /** @type {(inputs: Jams_Editor_Schedule_Fill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Calendario standard`)
};

const nl_jams_editor_schedule_fill_title = /** @type {(inputs: Jams_Editor_Schedule_Fill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Standaardschema`)
};

const pl_jams_editor_schedule_fill_title = /** @type {(inputs: Jams_Editor_Schedule_Fill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Standardowy harmonogram`)
};

const pt_jams_editor_schedule_fill_title = /** @type {(inputs: Jams_Editor_Schedule_Fill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cronograma padrão`)
};

const ru_jams_editor_schedule_fill_title = /** @type {(inputs: Jams_Editor_Schedule_Fill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Стандартное расписание`)
};

const sv_jams_editor_schedule_fill_title = /** @type {(inputs: Jams_Editor_Schedule_Fill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Standardschema`)
};

const tr_jams_editor_schedule_fill_title = /** @type {(inputs: Jams_Editor_Schedule_Fill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Standart program`)
};

const zh_jams_editor_schedule_fill_title = /** @type {(inputs: Jams_Editor_Schedule_Fill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标准日程`)
};

const ja_jams_editor_schedule_fill_title = /** @type {(inputs: Jams_Editor_Schedule_Fill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`標準の日程`)
};

/**
* | output |
* | --- |
* | "Standard schedule" |
*
* @param {Jams_Editor_Schedule_Fill_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_schedule_fill_title = /** @type {((inputs?: Jams_Editor_Schedule_Fill_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Schedule_Fill_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_schedule_fill_title(inputs)
	if (locale === "de") return de_jams_editor_schedule_fill_title(inputs)
	if (locale === "fr") return fr_jams_editor_schedule_fill_title(inputs)
	if (locale === "it") return it_jams_editor_schedule_fill_title(inputs)
	if (locale === "nl") return nl_jams_editor_schedule_fill_title(inputs)
	if (locale === "pl") return pl_jams_editor_schedule_fill_title(inputs)
	if (locale === "pt") return pt_jams_editor_schedule_fill_title(inputs)
	if (locale === "ru") return ru_jams_editor_schedule_fill_title(inputs)
	if (locale === "sv") return sv_jams_editor_schedule_fill_title(inputs)
	if (locale === "tr") return tr_jams_editor_schedule_fill_title(inputs)
	if (locale === "zh") return zh_jams_editor_schedule_fill_title(inputs)
	if (locale === "ja") return ja_jams_editor_schedule_fill_title(inputs)
	return en_jams_editor_schedule_fill_title(inputs)
});
