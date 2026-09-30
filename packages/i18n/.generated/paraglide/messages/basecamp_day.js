/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ day: NonNullable<unknown> }} Basecamp_DayInputs */

const en_basecamp_day = /** @type {(inputs: Basecamp_DayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Day ${i?.day} on the island`)
};

const es_basecamp_day = /** @type {(inputs: Basecamp_DayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Día ${i?.day} en la isla`)
};

const de_basecamp_day = /** @type {(inputs: Basecamp_DayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tag ${i?.day} auf der Insel`)
};

const fr_basecamp_day = /** @type {(inputs: Basecamp_DayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jour ${i?.day} sur l’île`)
};

const it_basecamp_day = /** @type {(inputs: Basecamp_DayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Giorno ${i?.day} sull’isola`)
};

const nl_basecamp_day = /** @type {(inputs: Basecamp_DayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dag ${i?.day} op het eiland`)
};

const pl_basecamp_day = /** @type {(inputs: Basecamp_DayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dzień ${i?.day} na wyspie`)
};

const pt_basecamp_day = /** @type {(inputs: Basecamp_DayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dia ${i?.day} na ilha`)
};

const ru_basecamp_day = /** @type {(inputs: Basecamp_DayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`День ${i?.day} на острове`)
};

const sv_basecamp_day = /** @type {(inputs: Basecamp_DayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dag ${i?.day} på ön`)
};

const tr_basecamp_day = /** @type {(inputs: Basecamp_DayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Adadaki ${i?.day}. gün`)
};

const zh_basecamp_day = /** @type {(inputs: Basecamp_DayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`登岛第 ${i?.day} 天`)
};

const ja_basecamp_day = /** @type {(inputs: Basecamp_DayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`島での ${i?.day} 日目`)
};

/**
* | output |
* | --- |
* | "Day {day} on the island" |
*
* @param {Basecamp_DayInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_day = /** @type {((inputs: Basecamp_DayInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_DayInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_day(inputs)
	if (locale === "de") return de_basecamp_day(inputs)
	if (locale === "fr") return fr_basecamp_day(inputs)
	if (locale === "it") return it_basecamp_day(inputs)
	if (locale === "nl") return nl_basecamp_day(inputs)
	if (locale === "pl") return pl_basecamp_day(inputs)
	if (locale === "pt") return pt_basecamp_day(inputs)
	if (locale === "ru") return ru_basecamp_day(inputs)
	if (locale === "sv") return sv_basecamp_day(inputs)
	if (locale === "tr") return tr_basecamp_day(inputs)
	if (locale === "zh") return zh_basecamp_day(inputs)
	if (locale === "ja") return ja_basecamp_day(inputs)
	return en_basecamp_day(inputs)
});
