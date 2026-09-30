/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Countdown_Submissions_OpenInputs */

const en_jams_countdown_submissions_open = /** @type {(inputs: Jams_Countdown_Submissions_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Submissions open in`)
};

const es_jams_countdown_submissions_open = /** @type {(inputs: Jams_Countdown_Submissions_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las inscripciones abren en`)
};

const de_jams_countdown_submissions_open = /** @type {(inputs: Jams_Countdown_Submissions_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einreichungen starten in`)
};

const fr_jams_countdown_submissions_open = /** @type {(inputs: Jams_Countdown_Submissions_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les participations ouvrent dans`)
};

const it_jams_countdown_submissions_open = /** @type {(inputs: Jams_Countdown_Submissions_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le iscrizioni aprono tra`)
};

const nl_jams_countdown_submissions_open = /** @type {(inputs: Jams_Countdown_Submissions_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inzendingen openen over`)
};

const pl_jams_countdown_submissions_open = /** @type {(inputs: Jams_Countdown_Submissions_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoszenia ruszają za`)
};

const pt_jams_countdown_submissions_open = /** @type {(inputs: Jams_Countdown_Submissions_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As inscrições abrem em`)
};

const ru_jams_countdown_submissions_open = /** @type {(inputs: Jams_Countdown_Submissions_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Приём работ начнётся через`)
};

const sv_jams_countdown_submissions_open = /** @type {(inputs: Jams_Countdown_Submissions_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bidragen öppnar om`)
};

const tr_jams_countdown_submissions_open = /** @type {(inputs: Jams_Countdown_Submissions_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başvurular şu süre sonra açılır`)
};

const zh_jams_countdown_submissions_open = /** @type {(inputs: Jams_Countdown_Submissions_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`距离开始投稿`)
};

const ja_jams_countdown_submissions_open = /** @type {(inputs: Jams_Countdown_Submissions_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`応募開始まで`)
};

/**
* | output |
* | --- |
* | "Submissions open in" |
*
* @param {Jams_Countdown_Submissions_OpenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_countdown_submissions_open = /** @type {((inputs?: Jams_Countdown_Submissions_OpenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Countdown_Submissions_OpenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_countdown_submissions_open(inputs)
	if (locale === "de") return de_jams_countdown_submissions_open(inputs)
	if (locale === "fr") return fr_jams_countdown_submissions_open(inputs)
	if (locale === "it") return it_jams_countdown_submissions_open(inputs)
	if (locale === "nl") return nl_jams_countdown_submissions_open(inputs)
	if (locale === "pl") return pl_jams_countdown_submissions_open(inputs)
	if (locale === "pt") return pt_jams_countdown_submissions_open(inputs)
	if (locale === "ru") return ru_jams_countdown_submissions_open(inputs)
	if (locale === "sv") return sv_jams_countdown_submissions_open(inputs)
	if (locale === "tr") return tr_jams_countdown_submissions_open(inputs)
	if (locale === "zh") return zh_jams_countdown_submissions_open(inputs)
	if (locale === "ja") return ja_jams_countdown_submissions_open(inputs)
	return en_jams_countdown_submissions_open(inputs)
});
