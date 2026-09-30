/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Countdown_Submissions_CloseInputs */

const en_jams_countdown_submissions_close = /** @type {(inputs: Jams_Countdown_Submissions_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Submissions close in`)
};

const es_jams_countdown_submissions_close = /** @type {(inputs: Jams_Countdown_Submissions_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las inscripciones cierran en`)
};

const de_jams_countdown_submissions_close = /** @type {(inputs: Jams_Countdown_Submissions_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einreichungen enden in`)
};

const fr_jams_countdown_submissions_close = /** @type {(inputs: Jams_Countdown_Submissions_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les participations ferment dans`)
};

const it_jams_countdown_submissions_close = /** @type {(inputs: Jams_Countdown_Submissions_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le iscrizioni chiudono tra`)
};

const nl_jams_countdown_submissions_close = /** @type {(inputs: Jams_Countdown_Submissions_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inzendingen sluiten over`)
};

const pl_jams_countdown_submissions_close = /** @type {(inputs: Jams_Countdown_Submissions_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoszenia kończą się za`)
};

const pt_jams_countdown_submissions_close = /** @type {(inputs: Jams_Countdown_Submissions_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As inscrições encerram em`)
};

const ru_jams_countdown_submissions_close = /** @type {(inputs: Jams_Countdown_Submissions_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Приём работ закроется через`)
};

const sv_jams_countdown_submissions_close = /** @type {(inputs: Jams_Countdown_Submissions_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bidragen stänger om`)
};

const tr_jams_countdown_submissions_close = /** @type {(inputs: Jams_Countdown_Submissions_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başvurular şu süre sonra kapanır`)
};

const zh_jams_countdown_submissions_close = /** @type {(inputs: Jams_Countdown_Submissions_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`距离投稿截止`)
};

const ja_jams_countdown_submissions_close = /** @type {(inputs: Jams_Countdown_Submissions_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`応募締め切りまで`)
};

/**
* | output |
* | --- |
* | "Submissions close in" |
*
* @param {Jams_Countdown_Submissions_CloseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_countdown_submissions_close = /** @type {((inputs?: Jams_Countdown_Submissions_CloseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Countdown_Submissions_CloseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_countdown_submissions_close(inputs)
	if (locale === "de") return de_jams_countdown_submissions_close(inputs)
	if (locale === "fr") return fr_jams_countdown_submissions_close(inputs)
	if (locale === "it") return it_jams_countdown_submissions_close(inputs)
	if (locale === "nl") return nl_jams_countdown_submissions_close(inputs)
	if (locale === "pl") return pl_jams_countdown_submissions_close(inputs)
	if (locale === "pt") return pt_jams_countdown_submissions_close(inputs)
	if (locale === "ru") return ru_jams_countdown_submissions_close(inputs)
	if (locale === "sv") return sv_jams_countdown_submissions_close(inputs)
	if (locale === "tr") return tr_jams_countdown_submissions_close(inputs)
	if (locale === "zh") return zh_jams_countdown_submissions_close(inputs)
	if (locale === "ja") return ja_jams_countdown_submissions_close(inputs)
	return en_jams_countdown_submissions_close(inputs)
});
