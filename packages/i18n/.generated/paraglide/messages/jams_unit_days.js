/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Unit_DaysInputs */

const en_jams_unit_days = /** @type {(inputs: Jams_Unit_DaysInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Days`)
};

const es_jams_unit_days = /** @type {(inputs: Jams_Unit_DaysInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Días`)
};

const de_jams_unit_days = /** @type {(inputs: Jams_Unit_DaysInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tage`)
};

const fr_jams_unit_days = /** @type {(inputs: Jams_Unit_DaysInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jours`)
};

const it_jams_unit_days = /** @type {(inputs: Jams_Unit_DaysInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Giorni`)
};

const nl_jams_unit_days = /** @type {(inputs: Jams_Unit_DaysInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dagen`)
};

const pl_jams_unit_days = /** @type {(inputs: Jams_Unit_DaysInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dni`)
};

const pt_jams_unit_days = /** @type {(inputs: Jams_Unit_DaysInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dias`)
};

const ru_jams_unit_days = /** @type {(inputs: Jams_Unit_DaysInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Дни`)
};

const sv_jams_unit_days = /** @type {(inputs: Jams_Unit_DaysInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dagar`)
};

const tr_jams_unit_days = /** @type {(inputs: Jams_Unit_DaysInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gün`)
};

const zh_jams_unit_days = /** @type {(inputs: Jams_Unit_DaysInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`天`)
};

const ja_jams_unit_days = /** @type {(inputs: Jams_Unit_DaysInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日`)
};

/**
* | output |
* | --- |
* | "Days" |
*
* @param {Jams_Unit_DaysInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_unit_days = /** @type {((inputs?: Jams_Unit_DaysInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Unit_DaysInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_unit_days(inputs)
	if (locale === "de") return de_jams_unit_days(inputs)
	if (locale === "fr") return fr_jams_unit_days(inputs)
	if (locale === "it") return it_jams_unit_days(inputs)
	if (locale === "nl") return nl_jams_unit_days(inputs)
	if (locale === "pl") return pl_jams_unit_days(inputs)
	if (locale === "pt") return pt_jams_unit_days(inputs)
	if (locale === "ru") return ru_jams_unit_days(inputs)
	if (locale === "sv") return sv_jams_unit_days(inputs)
	if (locale === "tr") return tr_jams_unit_days(inputs)
	if (locale === "zh") return zh_jams_unit_days(inputs)
	if (locale === "ja") return ja_jams_unit_days(inputs)
	return en_jams_unit_days(inputs)
});
