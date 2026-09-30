/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Locked_TitleInputs */

const en_jams_editor_locked_title = /** @type {(inputs: Jams_Editor_Locked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schedule paused`)
};

const es_jams_editor_locked_title = /** @type {(inputs: Jams_Editor_Locked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Calendario en pausa`)
};

const de_jams_editor_locked_title = /** @type {(inputs: Jams_Editor_Locked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zeitplan pausiert`)
};

const fr_jams_editor_locked_title = /** @type {(inputs: Jams_Editor_Locked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Calendrier en pause`)
};

const it_jams_editor_locked_title = /** @type {(inputs: Jams_Editor_Locked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Calendario in pausa`)
};

const nl_jams_editor_locked_title = /** @type {(inputs: Jams_Editor_Locked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Planning gepauzeerd`)
};

const pl_jams_editor_locked_title = /** @type {(inputs: Jams_Editor_Locked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Harmonogram wstrzymany`)
};

const pt_jams_editor_locked_title = /** @type {(inputs: Jams_Editor_Locked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cronograma pausado`)
};

const ru_jams_editor_locked_title = /** @type {(inputs: Jams_Editor_Locked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Расписание приостановлено`)
};

const sv_jams_editor_locked_title = /** @type {(inputs: Jams_Editor_Locked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schemat pausat`)
};

const tr_jams_editor_locked_title = /** @type {(inputs: Jams_Editor_Locked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takvim duraklatıldı`)
};

const zh_jams_editor_locked_title = /** @type {(inputs: Jams_Editor_Locked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日程已暂停`)
};

const ja_jams_editor_locked_title = /** @type {(inputs: Jams_Editor_Locked_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スケジュール停止中`)
};

/**
* | output |
* | --- |
* | "Schedule paused" |
*
* @param {Jams_Editor_Locked_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_locked_title = /** @type {((inputs?: Jams_Editor_Locked_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Locked_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_locked_title(inputs)
	if (locale === "de") return de_jams_editor_locked_title(inputs)
	if (locale === "fr") return fr_jams_editor_locked_title(inputs)
	if (locale === "it") return it_jams_editor_locked_title(inputs)
	if (locale === "nl") return nl_jams_editor_locked_title(inputs)
	if (locale === "pl") return pl_jams_editor_locked_title(inputs)
	if (locale === "pt") return pt_jams_editor_locked_title(inputs)
	if (locale === "ru") return ru_jams_editor_locked_title(inputs)
	if (locale === "sv") return sv_jams_editor_locked_title(inputs)
	if (locale === "tr") return tr_jams_editor_locked_title(inputs)
	if (locale === "zh") return zh_jams_editor_locked_title(inputs)
	if (locale === "ja") return ja_jams_editor_locked_title(inputs)
	return en_jams_editor_locked_title(inputs)
});
