/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Entries_Empty_Open_TitleInputs */

const en_jams_entries_empty_open_title = /** @type {(inputs: Jams_Entries_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Be the first to enter`)
};

const es_jams_entries_empty_open_title = /** @type {(inputs: Jams_Entries_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sé el primero en participar`)
};

const de_jams_entries_empty_open_title = /** @type {(inputs: Jams_Entries_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sei der Erste, der teilnimmt`)
};

const fr_jams_entries_empty_open_title = /** @type {(inputs: Jams_Entries_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Soyez le premier à participer`)
};

const it_jams_entries_empty_open_title = /** @type {(inputs: Jams_Entries_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sii il primo a partecipare`)
};

const nl_jams_entries_empty_open_title = /** @type {(inputs: Jams_Entries_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wees de eerste die meedoet`)
};

const pl_jams_entries_empty_open_title = /** @type {(inputs: Jams_Entries_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bądź pierwszy, który weźmie udział`)
};

const pt_jams_entries_empty_open_title = /** @type {(inputs: Jams_Entries_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seja o primeiro a participar`)
};

const ru_jams_entries_empty_open_title = /** @type {(inputs: Jams_Entries_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Станьте первым участником`)
};

const sv_jams_entries_empty_open_title = /** @type {(inputs: Jams_Entries_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bli först att delta`)
};

const tr_jams_entries_empty_open_title = /** @type {(inputs: Jams_Entries_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk katılan sen ol`)
};

const zh_jams_entries_empty_open_title = /** @type {(inputs: Jams_Entries_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`成为第一个参赛者`)
};

const ja_jams_entries_empty_open_title = /** @type {(inputs: Jams_Entries_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最初の応募者になりましょう`)
};

/**
* | output |
* | --- |
* | "Be the first to enter" |
*
* @param {Jams_Entries_Empty_Open_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_entries_empty_open_title = /** @type {((inputs?: Jams_Entries_Empty_Open_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entries_Empty_Open_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_entries_empty_open_title(inputs)
	if (locale === "de") return de_jams_entries_empty_open_title(inputs)
	if (locale === "fr") return fr_jams_entries_empty_open_title(inputs)
	if (locale === "it") return it_jams_entries_empty_open_title(inputs)
	if (locale === "nl") return nl_jams_entries_empty_open_title(inputs)
	if (locale === "pl") return pl_jams_entries_empty_open_title(inputs)
	if (locale === "pt") return pt_jams_entries_empty_open_title(inputs)
	if (locale === "ru") return ru_jams_entries_empty_open_title(inputs)
	if (locale === "sv") return sv_jams_entries_empty_open_title(inputs)
	if (locale === "tr") return tr_jams_entries_empty_open_title(inputs)
	if (locale === "zh") return zh_jams_entries_empty_open_title(inputs)
	if (locale === "ja") return ja_jams_entries_empty_open_title(inputs)
	return en_jams_entries_empty_open_title(inputs)
});
