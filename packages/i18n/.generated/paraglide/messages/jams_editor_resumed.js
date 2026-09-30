/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_ResumedInputs */

const en_jams_editor_resumed = /** @type {(inputs: Jams_Editor_ResumedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schedule resumed.`)
};

const es_jams_editor_resumed = /** @type {(inputs: Jams_Editor_ResumedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Calendario reanudado.`)
};

const de_jams_editor_resumed = /** @type {(inputs: Jams_Editor_ResumedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zeitplan fortgesetzt.`)
};

const fr_jams_editor_resumed = /** @type {(inputs: Jams_Editor_ResumedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Calendrier repris.`)
};

const it_jams_editor_resumed = /** @type {(inputs: Jams_Editor_ResumedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Calendario ripreso.`)
};

const nl_jams_editor_resumed = /** @type {(inputs: Jams_Editor_ResumedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Planning hervat.`)
};

const pl_jams_editor_resumed = /** @type {(inputs: Jams_Editor_ResumedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Harmonogram wznowiony.`)
};

const pt_jams_editor_resumed = /** @type {(inputs: Jams_Editor_ResumedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cronograma retomado.`)
};

const ru_jams_editor_resumed = /** @type {(inputs: Jams_Editor_ResumedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Расписание возобновлено.`)
};

const sv_jams_editor_resumed = /** @type {(inputs: Jams_Editor_ResumedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schemat återupptaget.`)
};

const tr_jams_editor_resumed = /** @type {(inputs: Jams_Editor_ResumedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takvim sürdürüldü.`)
};

const zh_jams_editor_resumed = /** @type {(inputs: Jams_Editor_ResumedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日程已恢复。`)
};

const ja_jams_editor_resumed = /** @type {(inputs: Jams_Editor_ResumedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スケジュールを再開しました。`)
};

/**
* | output |
* | --- |
* | "Schedule resumed." |
*
* @param {Jams_Editor_ResumedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_resumed = /** @type {((inputs?: Jams_Editor_ResumedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_ResumedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_resumed(inputs)
	if (locale === "de") return de_jams_editor_resumed(inputs)
	if (locale === "fr") return fr_jams_editor_resumed(inputs)
	if (locale === "it") return it_jams_editor_resumed(inputs)
	if (locale === "nl") return nl_jams_editor_resumed(inputs)
	if (locale === "pl") return pl_jams_editor_resumed(inputs)
	if (locale === "pt") return pt_jams_editor_resumed(inputs)
	if (locale === "ru") return ru_jams_editor_resumed(inputs)
	if (locale === "sv") return sv_jams_editor_resumed(inputs)
	if (locale === "tr") return tr_jams_editor_resumed(inputs)
	if (locale === "zh") return zh_jams_editor_resumed(inputs)
	if (locale === "ja") return ja_jams_editor_resumed(inputs)
	return en_jams_editor_resumed(inputs)
});
