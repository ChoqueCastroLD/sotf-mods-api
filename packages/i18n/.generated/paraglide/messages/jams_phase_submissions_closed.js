/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Phase_Submissions_ClosedInputs */

const en_jams_phase_submissions_closed = /** @type {(inputs: Jams_Phase_Submissions_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Submissions closed`)
};

const es_jams_phase_submissions_closed = /** @type {(inputs: Jams_Phase_Submissions_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inscripciones cerradas`)
};

const de_jams_phase_submissions_closed = /** @type {(inputs: Jams_Phase_Submissions_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einreichungen geschlossen`)
};

const fr_jams_phase_submissions_closed = /** @type {(inputs: Jams_Phase_Submissions_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Participations clôturées`)
};

const it_jams_phase_submissions_closed = /** @type {(inputs: Jams_Phase_Submissions_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iscrizioni chiuse`)
};

const nl_jams_phase_submissions_closed = /** @type {(inputs: Jams_Phase_Submissions_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inzendingen gesloten`)
};

const pl_jams_phase_submissions_closed = /** @type {(inputs: Jams_Phase_Submissions_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoszenia zamknięte`)
};

const pt_jams_phase_submissions_closed = /** @type {(inputs: Jams_Phase_Submissions_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inscrições encerradas`)
};

const ru_jams_phase_submissions_closed = /** @type {(inputs: Jams_Phase_Submissions_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Приём закрыт`)
};

const sv_jams_phase_submissions_closed = /** @type {(inputs: Jams_Phase_Submissions_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bidrag stängda`)
};

const tr_jams_phase_submissions_closed = /** @type {(inputs: Jams_Phase_Submissions_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başvurular kapandı`)
};

const zh_jams_phase_submissions_closed = /** @type {(inputs: Jams_Phase_Submissions_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投稿已截止`)
};

const ja_jams_phase_submissions_closed = /** @type {(inputs: Jams_Phase_Submissions_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`応募終了`)
};

/**
* | output |
* | --- |
* | "Submissions closed" |
*
* @param {Jams_Phase_Submissions_ClosedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_phase_submissions_closed = /** @type {((inputs?: Jams_Phase_Submissions_ClosedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Phase_Submissions_ClosedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_phase_submissions_closed(inputs)
	if (locale === "de") return de_jams_phase_submissions_closed(inputs)
	if (locale === "fr") return fr_jams_phase_submissions_closed(inputs)
	if (locale === "it") return it_jams_phase_submissions_closed(inputs)
	if (locale === "nl") return nl_jams_phase_submissions_closed(inputs)
	if (locale === "pl") return pl_jams_phase_submissions_closed(inputs)
	if (locale === "pt") return pt_jams_phase_submissions_closed(inputs)
	if (locale === "ru") return ru_jams_phase_submissions_closed(inputs)
	if (locale === "sv") return sv_jams_phase_submissions_closed(inputs)
	if (locale === "tr") return tr_jams_phase_submissions_closed(inputs)
	if (locale === "zh") return zh_jams_phase_submissions_closed(inputs)
	if (locale === "ja") return ja_jams_phase_submissions_closed(inputs)
	return en_jams_phase_submissions_closed(inputs)
});
