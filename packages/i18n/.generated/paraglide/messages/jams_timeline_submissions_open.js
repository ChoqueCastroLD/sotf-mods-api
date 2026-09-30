/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Timeline_Submissions_OpenInputs */

const en_jams_timeline_submissions_open = /** @type {(inputs: Jams_Timeline_Submissions_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Submissions open`)
};

const es_jams_timeline_submissions_open = /** @type {(inputs: Jams_Timeline_Submissions_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abren las inscripciones`)
};

const de_jams_timeline_submissions_open = /** @type {(inputs: Jams_Timeline_Submissions_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einreichungen starten`)
};

const fr_jams_timeline_submissions_open = /** @type {(inputs: Jams_Timeline_Submissions_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouverture des participations`)
};

const it_jams_timeline_submissions_open = /** @type {(inputs: Jams_Timeline_Submissions_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apertura iscrizioni`)
};

const nl_jams_timeline_submissions_open = /** @type {(inputs: Jams_Timeline_Submissions_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inzendingen openen`)
};

const pl_jams_timeline_submissions_open = /** @type {(inputs: Jams_Timeline_Submissions_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start zgłoszeń`)
};

const pt_jams_timeline_submissions_open = /** @type {(inputs: Jams_Timeline_Submissions_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abertura das inscrições`)
};

const ru_jams_timeline_submissions_open = /** @type {(inputs: Jams_Timeline_Submissions_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Начало приёма работ`)
};

const sv_jams_timeline_submissions_open = /** @type {(inputs: Jams_Timeline_Submissions_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bidragen öppnar`)
};

const tr_jams_timeline_submissions_open = /** @type {(inputs: Jams_Timeline_Submissions_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başvurular açılır`)
};

const zh_jams_timeline_submissions_open = /** @type {(inputs: Jams_Timeline_Submissions_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开始投稿`)
};

const ja_jams_timeline_submissions_open = /** @type {(inputs: Jams_Timeline_Submissions_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`応募開始`)
};

/**
* | output |
* | --- |
* | "Submissions open" |
*
* @param {Jams_Timeline_Submissions_OpenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_timeline_submissions_open = /** @type {((inputs?: Jams_Timeline_Submissions_OpenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Timeline_Submissions_OpenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_timeline_submissions_open(inputs)
	if (locale === "de") return de_jams_timeline_submissions_open(inputs)
	if (locale === "fr") return fr_jams_timeline_submissions_open(inputs)
	if (locale === "it") return it_jams_timeline_submissions_open(inputs)
	if (locale === "nl") return nl_jams_timeline_submissions_open(inputs)
	if (locale === "pl") return pl_jams_timeline_submissions_open(inputs)
	if (locale === "pt") return pt_jams_timeline_submissions_open(inputs)
	if (locale === "ru") return ru_jams_timeline_submissions_open(inputs)
	if (locale === "sv") return sv_jams_timeline_submissions_open(inputs)
	if (locale === "tr") return tr_jams_timeline_submissions_open(inputs)
	if (locale === "zh") return zh_jams_timeline_submissions_open(inputs)
	if (locale === "ja") return ja_jams_timeline_submissions_open(inputs)
	return en_jams_timeline_submissions_open(inputs)
});
