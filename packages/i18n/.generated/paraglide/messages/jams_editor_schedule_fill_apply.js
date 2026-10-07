/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Schedule_Fill_ApplyInputs */

const en_jams_editor_schedule_fill_apply = /** @type {(inputs: Jams_Editor_Schedule_Fill_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fill in dates`)
};

const es_jams_editor_schedule_fill_apply = /** @type {(inputs: Jams_Editor_Schedule_Fill_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rellenar fechas`)
};

const de_jams_editor_schedule_fill_apply = /** @type {(inputs: Jams_Editor_Schedule_Fill_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Termine eintragen`)
};

const fr_jams_editor_schedule_fill_apply = /** @type {(inputs: Jams_Editor_Schedule_Fill_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remplir les dates`)
};

const it_jams_editor_schedule_fill_apply = /** @type {(inputs: Jams_Editor_Schedule_Fill_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compila le date`)
};

const nl_jams_editor_schedule_fill_apply = /** @type {(inputs: Jams_Editor_Schedule_Fill_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Data’s invullen`)
};

const pl_jams_editor_schedule_fill_apply = /** @type {(inputs: Jams_Editor_Schedule_Fill_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wstaw daty`)
};

const pt_jams_editor_schedule_fill_apply = /** @type {(inputs: Jams_Editor_Schedule_Fill_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preencher datas`)
};

const ru_jams_editor_schedule_fill_apply = /** @type {(inputs: Jams_Editor_Schedule_Fill_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Заполнить даты`)
};

const sv_jams_editor_schedule_fill_apply = /** @type {(inputs: Jams_Editor_Schedule_Fill_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fyll i datum`)
};

const tr_jams_editor_schedule_fill_apply = /** @type {(inputs: Jams_Editor_Schedule_Fill_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tarihleri doldur`)
};

const zh_jams_editor_schedule_fill_apply = /** @type {(inputs: Jams_Editor_Schedule_Fill_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`填入日期`)
};

const ja_jams_editor_schedule_fill_apply = /** @type {(inputs: Jams_Editor_Schedule_Fill_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日程を入力`)
};

/**
* | output |
* | --- |
* | "Fill in dates" |
*
* @param {Jams_Editor_Schedule_Fill_ApplyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_schedule_fill_apply = /** @type {((inputs?: Jams_Editor_Schedule_Fill_ApplyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Schedule_Fill_ApplyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_schedule_fill_apply(inputs)
	if (locale === "de") return de_jams_editor_schedule_fill_apply(inputs)
	if (locale === "fr") return fr_jams_editor_schedule_fill_apply(inputs)
	if (locale === "it") return it_jams_editor_schedule_fill_apply(inputs)
	if (locale === "nl") return nl_jams_editor_schedule_fill_apply(inputs)
	if (locale === "pl") return pl_jams_editor_schedule_fill_apply(inputs)
	if (locale === "pt") return pt_jams_editor_schedule_fill_apply(inputs)
	if (locale === "ru") return ru_jams_editor_schedule_fill_apply(inputs)
	if (locale === "sv") return sv_jams_editor_schedule_fill_apply(inputs)
	if (locale === "tr") return tr_jams_editor_schedule_fill_apply(inputs)
	if (locale === "zh") return zh_jams_editor_schedule_fill_apply(inputs)
	if (locale === "ja") return ja_jams_editor_schedule_fill_apply(inputs)
	return en_jams_editor_schedule_fill_apply(inputs)
});
