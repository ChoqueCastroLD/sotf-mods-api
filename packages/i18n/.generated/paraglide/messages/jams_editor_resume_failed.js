/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Resume_FailedInputs */

const en_jams_editor_resume_failed = /** @type {(inputs: Jams_Editor_Resume_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't resume the schedule`)
};

const es_jams_editor_resume_failed = /** @type {(inputs: Jams_Editor_Resume_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo reanudar el calendario`)
};

const de_jams_editor_resume_failed = /** @type {(inputs: Jams_Editor_Resume_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zeitplan konnte nicht fortgesetzt werden`)
};

const fr_jams_editor_resume_failed = /** @type {(inputs: Jams_Editor_Resume_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de reprendre le calendrier`)
};

const it_jams_editor_resume_failed = /** @type {(inputs: Jams_Editor_Resume_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile riprendere il calendario`)
};

const nl_jams_editor_resume_failed = /** @type {(inputs: Jams_Editor_Resume_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De planning kon niet worden hervat`)
};

const pl_jams_editor_resume_failed = /** @type {(inputs: Jams_Editor_Resume_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wznowić harmonogramu`)
};

const pt_jams_editor_resume_failed = /** @type {(inputs: Jams_Editor_Resume_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível retomar o cronograma`)
};

const ru_jams_editor_resume_failed = /** @type {(inputs: Jams_Editor_Resume_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось возобновить расписание`)
};

const sv_jams_editor_resume_failed = /** @type {(inputs: Jams_Editor_Resume_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunde inte återuppta schemat`)
};

const tr_jams_editor_resume_failed = /** @type {(inputs: Jams_Editor_Resume_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takvim sürdürülemedi`)
};

const zh_jams_editor_resume_failed = /** @type {(inputs: Jams_Editor_Resume_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法恢复日程`)
};

const ja_jams_editor_resume_failed = /** @type {(inputs: Jams_Editor_Resume_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スケジュールを再開できませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn't resume the schedule" |
*
* @param {Jams_Editor_Resume_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_resume_failed = /** @type {((inputs?: Jams_Editor_Resume_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Resume_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_resume_failed(inputs)
	if (locale === "de") return de_jams_editor_resume_failed(inputs)
	if (locale === "fr") return fr_jams_editor_resume_failed(inputs)
	if (locale === "it") return it_jams_editor_resume_failed(inputs)
	if (locale === "nl") return nl_jams_editor_resume_failed(inputs)
	if (locale === "pl") return pl_jams_editor_resume_failed(inputs)
	if (locale === "pt") return pt_jams_editor_resume_failed(inputs)
	if (locale === "ru") return ru_jams_editor_resume_failed(inputs)
	if (locale === "sv") return sv_jams_editor_resume_failed(inputs)
	if (locale === "tr") return tr_jams_editor_resume_failed(inputs)
	if (locale === "zh") return zh_jams_editor_resume_failed(inputs)
	if (locale === "ja") return ja_jams_editor_resume_failed(inputs)
	return en_jams_editor_resume_failed(inputs)
});
