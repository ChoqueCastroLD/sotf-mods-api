/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Schedule_FillInputs */

const en_jams_editor_schedule_fill = /** @type {(inputs: Jams_Editor_Schedule_FillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fill in a standard schedule`)
};

const es_jams_editor_schedule_fill = /** @type {(inputs: Jams_Editor_Schedule_FillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rellenar un calendario estándar`)
};

const de_jams_editor_schedule_fill = /** @type {(inputs: Jams_Editor_Schedule_FillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Standardzeitplan eintragen`)
};

const fr_jams_editor_schedule_fill = /** @type {(inputs: Jams_Editor_Schedule_FillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remplir un calendrier standard`)
};

const it_jams_editor_schedule_fill = /** @type {(inputs: Jams_Editor_Schedule_FillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compila un calendario standard`)
};

const nl_jams_editor_schedule_fill = /** @type {(inputs: Jams_Editor_Schedule_FillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Standaardschema invullen`)
};

const pl_jams_editor_schedule_fill = /** @type {(inputs: Jams_Editor_Schedule_FillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wstaw standardowy harmonogram`)
};

const pt_jams_editor_schedule_fill = /** @type {(inputs: Jams_Editor_Schedule_FillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preencher um cronograma padrão`)
};

const ru_jams_editor_schedule_fill = /** @type {(inputs: Jams_Editor_Schedule_FillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Заполнить стандартное расписание`)
};

const sv_jams_editor_schedule_fill = /** @type {(inputs: Jams_Editor_Schedule_FillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fyll i ett standardschema`)
};

const tr_jams_editor_schedule_fill = /** @type {(inputs: Jams_Editor_Schedule_FillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Standart program doldur`)
};

const zh_jams_editor_schedule_fill = /** @type {(inputs: Jams_Editor_Schedule_FillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`填入标准日程`)
};

const ja_jams_editor_schedule_fill = /** @type {(inputs: Jams_Editor_Schedule_FillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`標準の日程を入力`)
};

/**
* | output |
* | --- |
* | "Fill in a standard schedule" |
*
* @param {Jams_Editor_Schedule_FillInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_schedule_fill = /** @type {((inputs?: Jams_Editor_Schedule_FillInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Schedule_FillInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_schedule_fill(inputs)
	if (locale === "de") return de_jams_editor_schedule_fill(inputs)
	if (locale === "fr") return fr_jams_editor_schedule_fill(inputs)
	if (locale === "it") return it_jams_editor_schedule_fill(inputs)
	if (locale === "nl") return nl_jams_editor_schedule_fill(inputs)
	if (locale === "pl") return pl_jams_editor_schedule_fill(inputs)
	if (locale === "pt") return pt_jams_editor_schedule_fill(inputs)
	if (locale === "ru") return ru_jams_editor_schedule_fill(inputs)
	if (locale === "sv") return sv_jams_editor_schedule_fill(inputs)
	if (locale === "tr") return tr_jams_editor_schedule_fill(inputs)
	if (locale === "zh") return zh_jams_editor_schedule_fill(inputs)
	if (locale === "ja") return ja_jams_editor_schedule_fill(inputs)
	return en_jams_editor_schedule_fill(inputs)
});
