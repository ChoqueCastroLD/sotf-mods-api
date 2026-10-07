/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Schedule_StartInputs */

const en_jams_editor_schedule_start = /** @type {(inputs: Jams_Editor_Schedule_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start date`)
};

const es_jams_editor_schedule_start = /** @type {(inputs: Jams_Editor_Schedule_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fecha de inicio`)
};

const de_jams_editor_schedule_start = /** @type {(inputs: Jams_Editor_Schedule_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Startdatum`)
};

const fr_jams_editor_schedule_start = /** @type {(inputs: Jams_Editor_Schedule_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Date de début`)
};

const it_jams_editor_schedule_start = /** @type {(inputs: Jams_Editor_Schedule_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Data di inizio`)
};

const nl_jams_editor_schedule_start = /** @type {(inputs: Jams_Editor_Schedule_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Startdatum`)
};

const pl_jams_editor_schedule_start = /** @type {(inputs: Jams_Editor_Schedule_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Data startu`)
};

const pt_jams_editor_schedule_start = /** @type {(inputs: Jams_Editor_Schedule_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Data de início`)
};

const ru_jams_editor_schedule_start = /** @type {(inputs: Jams_Editor_Schedule_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Дата старта`)
};

const sv_jams_editor_schedule_start = /** @type {(inputs: Jams_Editor_Schedule_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Startdatum`)
};

const tr_jams_editor_schedule_start = /** @type {(inputs: Jams_Editor_Schedule_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başlangıç tarihi`)
};

const zh_jams_editor_schedule_start = /** @type {(inputs: Jams_Editor_Schedule_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开始日期`)
};

const ja_jams_editor_schedule_start = /** @type {(inputs: Jams_Editor_Schedule_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`開始日`)
};

/**
* | output |
* | --- |
* | "Start date" |
*
* @param {Jams_Editor_Schedule_StartInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_schedule_start = /** @type {((inputs?: Jams_Editor_Schedule_StartInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Schedule_StartInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_schedule_start(inputs)
	if (locale === "de") return de_jams_editor_schedule_start(inputs)
	if (locale === "fr") return fr_jams_editor_schedule_start(inputs)
	if (locale === "it") return it_jams_editor_schedule_start(inputs)
	if (locale === "nl") return nl_jams_editor_schedule_start(inputs)
	if (locale === "pl") return pl_jams_editor_schedule_start(inputs)
	if (locale === "pt") return pt_jams_editor_schedule_start(inputs)
	if (locale === "ru") return ru_jams_editor_schedule_start(inputs)
	if (locale === "sv") return sv_jams_editor_schedule_start(inputs)
	if (locale === "tr") return tr_jams_editor_schedule_start(inputs)
	if (locale === "zh") return zh_jams_editor_schedule_start(inputs)
	if (locale === "ja") return ja_jams_editor_schedule_start(inputs)
	return en_jams_editor_schedule_start(inputs)
});
