/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_ResumeInputs */

const en_jams_editor_resume = /** @type {(inputs: Jams_Editor_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resume schedule`)
};

const es_jams_editor_resume = /** @type {(inputs: Jams_Editor_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reanudar calendario`)
};

const de_jams_editor_resume = /** @type {(inputs: Jams_Editor_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zeitplan fortsetzen`)
};

const fr_jams_editor_resume = /** @type {(inputs: Jams_Editor_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reprendre le calendrier`)
};

const it_jams_editor_resume = /** @type {(inputs: Jams_Editor_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riprendi calendario`)
};

const nl_jams_editor_resume = /** @type {(inputs: Jams_Editor_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Planning hervatten`)
};

const pl_jams_editor_resume = /** @type {(inputs: Jams_Editor_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wznów harmonogram`)
};

const pt_jams_editor_resume = /** @type {(inputs: Jams_Editor_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retomar cronograma`)
};

const ru_jams_editor_resume = /** @type {(inputs: Jams_Editor_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Возобновить расписание`)
};

const sv_jams_editor_resume = /** @type {(inputs: Jams_Editor_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Återuppta schema`)
};

const tr_jams_editor_resume = /** @type {(inputs: Jams_Editor_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takvimi sürdür`)
};

const zh_jams_editor_resume = /** @type {(inputs: Jams_Editor_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`恢复日程`)
};

const ja_jams_editor_resume = /** @type {(inputs: Jams_Editor_ResumeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スケジュールを再開`)
};

/**
* | output |
* | --- |
* | "Resume schedule" |
*
* @param {Jams_Editor_ResumeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_resume = /** @type {((inputs?: Jams_Editor_ResumeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_ResumeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_resume(inputs)
	if (locale === "de") return de_jams_editor_resume(inputs)
	if (locale === "fr") return fr_jams_editor_resume(inputs)
	if (locale === "it") return it_jams_editor_resume(inputs)
	if (locale === "nl") return nl_jams_editor_resume(inputs)
	if (locale === "pl") return pl_jams_editor_resume(inputs)
	if (locale === "pt") return pt_jams_editor_resume(inputs)
	if (locale === "ru") return ru_jams_editor_resume(inputs)
	if (locale === "sv") return sv_jams_editor_resume(inputs)
	if (locale === "tr") return tr_jams_editor_resume(inputs)
	if (locale === "zh") return zh_jams_editor_resume(inputs)
	if (locale === "ja") return ja_jams_editor_resume(inputs)
	return en_jams_editor_resume(inputs)
});
