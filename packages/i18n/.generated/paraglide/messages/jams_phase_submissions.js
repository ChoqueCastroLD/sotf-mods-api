/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Phase_SubmissionsInputs */

const en_jams_phase_submissions = /** @type {(inputs: Jams_Phase_SubmissionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Submissions open`)
};

const es_jams_phase_submissions = /** @type {(inputs: Jams_Phase_SubmissionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inscripciones abiertas`)
};

const de_jams_phase_submissions = /** @type {(inputs: Jams_Phase_SubmissionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einreichungen offen`)
};

const fr_jams_phase_submissions = /** @type {(inputs: Jams_Phase_SubmissionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Participations ouvertes`)
};

const it_jams_phase_submissions = /** @type {(inputs: Jams_Phase_SubmissionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iscrizioni aperte`)
};

const nl_jams_phase_submissions = /** @type {(inputs: Jams_Phase_SubmissionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inzendingen open`)
};

const pl_jams_phase_submissions = /** @type {(inputs: Jams_Phase_SubmissionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoszenia otwarte`)
};

const pt_jams_phase_submissions = /** @type {(inputs: Jams_Phase_SubmissionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inscrições abertas`)
};

const ru_jams_phase_submissions = /** @type {(inputs: Jams_Phase_SubmissionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Приём работ`)
};

const sv_jams_phase_submissions = /** @type {(inputs: Jams_Phase_SubmissionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bidrag öppna`)
};

const tr_jams_phase_submissions = /** @type {(inputs: Jams_Phase_SubmissionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başvurular açık`)
};

const zh_jams_phase_submissions = /** @type {(inputs: Jams_Phase_SubmissionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`接受投稿`)
};

const ja_jams_phase_submissions = /** @type {(inputs: Jams_Phase_SubmissionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`応募受付中`)
};

/**
* | output |
* | --- |
* | "Submissions open" |
*
* @param {Jams_Phase_SubmissionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_phase_submissions = /** @type {((inputs?: Jams_Phase_SubmissionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Phase_SubmissionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_phase_submissions(inputs)
	if (locale === "de") return de_jams_phase_submissions(inputs)
	if (locale === "fr") return fr_jams_phase_submissions(inputs)
	if (locale === "it") return it_jams_phase_submissions(inputs)
	if (locale === "nl") return nl_jams_phase_submissions(inputs)
	if (locale === "pl") return pl_jams_phase_submissions(inputs)
	if (locale === "pt") return pt_jams_phase_submissions(inputs)
	if (locale === "ru") return ru_jams_phase_submissions(inputs)
	if (locale === "sv") return sv_jams_phase_submissions(inputs)
	if (locale === "tr") return tr_jams_phase_submissions(inputs)
	if (locale === "zh") return zh_jams_phase_submissions(inputs)
	if (locale === "ja") return ja_jams_phase_submissions(inputs)
	return en_jams_phase_submissions(inputs)
});
