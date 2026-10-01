/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Entries_Empty_Open_TitleInputs */

const en_jams_entries_empty_open_title = /** @type {(inputs: Jams_Entries_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Be the first on the map`)
};

const es_jams_entries_empty_open_title = /** @type {(inputs: Jams_Entries_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sé el primero en el mapa`)
};

const de_jams_entries_empty_open_title = /** @type {(inputs: Jams_Entries_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sei der Erste auf der Karte`)
};

const fr_jams_entries_empty_open_title = /** @type {(inputs: Jams_Entries_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Soyez le premier sur la carte`)
};

const it_jams_entries_empty_open_title = /** @type {(inputs: Jams_Entries_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sii il primo sulla mappa`)
};

const nl_jams_entries_empty_open_title = /** @type {(inputs: Jams_Entries_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wees de eerste op de kaart`)
};

const pl_jams_entries_empty_open_title = /** @type {(inputs: Jams_Entries_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bądź pierwszy na mapie`)
};

const pt_jams_entries_empty_open_title = /** @type {(inputs: Jams_Entries_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seja o primeiro no mapa`)
};

const ru_jams_entries_empty_open_title = /** @type {(inputs: Jams_Entries_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Станьте первым на карте`)
};

const sv_jams_entries_empty_open_title = /** @type {(inputs: Jams_Entries_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bli först på kartan`)
};

const tr_jams_entries_empty_open_title = /** @type {(inputs: Jams_Entries_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Haritadaki ilk sen ol`)
};

const zh_jams_entries_empty_open_title = /** @type {(inputs: Jams_Entries_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`成为地图上的第一个`)
};

const ja_jams_entries_empty_open_title = /** @type {(inputs: Jams_Entries_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最初の一人になろう`)
};

/**
* | output |
* | --- |
* | "Be the first on the map" |
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
