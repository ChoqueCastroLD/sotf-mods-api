/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Schedule_TbaInputs */

const en_jams_schedule_tba = /** @type {(inputs: Jams_Schedule_TbaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To be announced`)
};

const es_jams_schedule_tba = /** @type {(inputs: Jams_Schedule_TbaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Por anunciar`)
};

const de_jams_schedule_tba = /** @type {(inputs: Jams_Schedule_TbaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wird noch bekanntgegeben`)
};

const fr_jams_schedule_tba = /** @type {(inputs: Jams_Schedule_TbaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`À annoncer`)
};

const it_jams_schedule_tba = /** @type {(inputs: Jams_Schedule_TbaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Da annunciare`)
};

const nl_jams_schedule_tba = /** @type {(inputs: Jams_Schedule_TbaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog te melden`)
};

const pl_jams_schedule_tba = /** @type {(inputs: Jams_Schedule_TbaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wkrótce`)
};

const pt_jams_schedule_tba = /** @type {(inputs: Jams_Schedule_TbaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A anunciar`)
};

const ru_jams_schedule_tba = /** @type {(inputs: Jams_Schedule_TbaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Будет объявлено`)
};

const sv_jams_schedule_tba = /** @type {(inputs: Jams_Schedule_TbaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meddelas senare`)
};

const tr_jams_schedule_tba = /** @type {(inputs: Jams_Schedule_TbaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yakında duyurulacak`)
};

const zh_jams_schedule_tba = /** @type {(inputs: Jams_Schedule_TbaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`待公布`)
};

const ja_jams_schedule_tba = /** @type {(inputs: Jams_Schedule_TbaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`発表予定`)
};

/**
* | output |
* | --- |
* | "To be announced" |
*
* @param {Jams_Schedule_TbaInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_schedule_tba = /** @type {((inputs?: Jams_Schedule_TbaInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Schedule_TbaInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_schedule_tba(inputs)
	if (locale === "de") return de_jams_schedule_tba(inputs)
	if (locale === "fr") return fr_jams_schedule_tba(inputs)
	if (locale === "it") return it_jams_schedule_tba(inputs)
	if (locale === "nl") return nl_jams_schedule_tba(inputs)
	if (locale === "pl") return pl_jams_schedule_tba(inputs)
	if (locale === "pt") return pt_jams_schedule_tba(inputs)
	if (locale === "ru") return ru_jams_schedule_tba(inputs)
	if (locale === "sv") return sv_jams_schedule_tba(inputs)
	if (locale === "tr") return tr_jams_schedule_tba(inputs)
	if (locale === "zh") return zh_jams_schedule_tba(inputs)
	if (locale === "ja") return ja_jams_schedule_tba(inputs)
	return en_jams_schedule_tba(inputs)
});
