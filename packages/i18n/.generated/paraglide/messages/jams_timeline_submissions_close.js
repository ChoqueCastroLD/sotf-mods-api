/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Timeline_Submissions_CloseInputs */

const en_jams_timeline_submissions_close = /** @type {(inputs: Jams_Timeline_Submissions_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Submissions close`)
};

const es_jams_timeline_submissions_close = /** @type {(inputs: Jams_Timeline_Submissions_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cierran las inscripciones`)
};

const de_jams_timeline_submissions_close = /** @type {(inputs: Jams_Timeline_Submissions_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einreichungen enden`)
};

const fr_jams_timeline_submissions_close = /** @type {(inputs: Jams_Timeline_Submissions_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clôture des participations`)
};

const it_jams_timeline_submissions_close = /** @type {(inputs: Jams_Timeline_Submissions_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiusura iscrizioni`)
};

const nl_jams_timeline_submissions_close = /** @type {(inputs: Jams_Timeline_Submissions_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inzendingen sluiten`)
};

const pl_jams_timeline_submissions_close = /** @type {(inputs: Jams_Timeline_Submissions_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Koniec zgłoszeń`)
};

const pt_jams_timeline_submissions_close = /** @type {(inputs: Jams_Timeline_Submissions_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Encerramento das inscrições`)
};

const ru_jams_timeline_submissions_close = /** @type {(inputs: Jams_Timeline_Submissions_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Конец приёма работ`)
};

const sv_jams_timeline_submissions_close = /** @type {(inputs: Jams_Timeline_Submissions_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bidragen stänger`)
};

const tr_jams_timeline_submissions_close = /** @type {(inputs: Jams_Timeline_Submissions_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başvurular kapanır`)
};

const zh_jams_timeline_submissions_close = /** @type {(inputs: Jams_Timeline_Submissions_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投稿截止`)
};

const ja_jams_timeline_submissions_close = /** @type {(inputs: Jams_Timeline_Submissions_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`応募締め切り`)
};

/**
* | output |
* | --- |
* | "Submissions close" |
*
* @param {Jams_Timeline_Submissions_CloseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_timeline_submissions_close = /** @type {((inputs?: Jams_Timeline_Submissions_CloseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Timeline_Submissions_CloseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_timeline_submissions_close(inputs)
	if (locale === "de") return de_jams_timeline_submissions_close(inputs)
	if (locale === "fr") return fr_jams_timeline_submissions_close(inputs)
	if (locale === "it") return it_jams_timeline_submissions_close(inputs)
	if (locale === "nl") return nl_jams_timeline_submissions_close(inputs)
	if (locale === "pl") return pl_jams_timeline_submissions_close(inputs)
	if (locale === "pt") return pt_jams_timeline_submissions_close(inputs)
	if (locale === "ru") return ru_jams_timeline_submissions_close(inputs)
	if (locale === "sv") return sv_jams_timeline_submissions_close(inputs)
	if (locale === "tr") return tr_jams_timeline_submissions_close(inputs)
	if (locale === "zh") return zh_jams_timeline_submissions_close(inputs)
	if (locale === "ja") return ja_jams_timeline_submissions_close(inputs)
	return en_jams_timeline_submissions_close(inputs)
});
