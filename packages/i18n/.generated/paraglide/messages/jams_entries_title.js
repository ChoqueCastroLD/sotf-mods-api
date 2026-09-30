/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Entries_TitleInputs */

const en_jams_entries_title = /** @type {(inputs: Jams_Entries_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entries`)
};

const es_jams_entries_title = /** @type {(inputs: Jams_Entries_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Participaciones`)
};

const de_jams_entries_title = /** @type {(inputs: Jams_Entries_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beiträge`)
};

const fr_jams_entries_title = /** @type {(inputs: Jams_Entries_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Participations`)
};

const it_jams_entries_title = /** @type {(inputs: Jams_Entries_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iscrizioni`)
};

const nl_jams_entries_title = /** @type {(inputs: Jams_Entries_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inzendingen`)
};

const pl_jams_entries_title = /** @type {(inputs: Jams_Entries_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoszenia`)
};

const pt_jams_entries_title = /** @type {(inputs: Jams_Entries_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inscrições`)
};

const ru_jams_entries_title = /** @type {(inputs: Jams_Entries_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Работы`)
};

const sv_jams_entries_title = /** @type {(inputs: Jams_Entries_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bidrag`)
};

const tr_jams_entries_title = /** @type {(inputs: Jams_Entries_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başvurular`)
};

const zh_jams_entries_title = /** @type {(inputs: Jams_Entries_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`参赛作品`)
};

const ja_jams_entries_title = /** @type {(inputs: Jams_Entries_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`応募作品`)
};

/**
* | output |
* | --- |
* | "Entries" |
*
* @param {Jams_Entries_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_entries_title = /** @type {((inputs?: Jams_Entries_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entries_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_entries_title(inputs)
	if (locale === "de") return de_jams_entries_title(inputs)
	if (locale === "fr") return fr_jams_entries_title(inputs)
	if (locale === "it") return it_jams_entries_title(inputs)
	if (locale === "nl") return nl_jams_entries_title(inputs)
	if (locale === "pl") return pl_jams_entries_title(inputs)
	if (locale === "pt") return pt_jams_entries_title(inputs)
	if (locale === "ru") return ru_jams_entries_title(inputs)
	if (locale === "sv") return sv_jams_entries_title(inputs)
	if (locale === "tr") return tr_jams_entries_title(inputs)
	if (locale === "zh") return zh_jams_entries_title(inputs)
	if (locale === "ja") return ja_jams_entries_title(inputs)
	return en_jams_entries_title(inputs)
});
