/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Badge_Name_Survived_Day_OneInputs */

const en_signals_badge_name_survived_day_one = /** @type {(inputs: Signals_Badge_Name_Survived_Day_OneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Survived Day One`)
};

const es_signals_badge_name_survived_day_one = /** @type {(inputs: Signals_Badge_Name_Survived_Day_OneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sobreviviste al día 1`)
};

const de_signals_badge_name_survived_day_one = /** @type {(inputs: Signals_Badge_Name_Survived_Day_OneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tag 1 überlebt`)
};

const fr_signals_badge_name_survived_day_one = /** @type {(inputs: Signals_Badge_Name_Survived_Day_OneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Survivant du jour 1`)
};

const it_signals_badge_name_survived_day_one = /** @type {(inputs: Signals_Badge_Name_Survived_Day_OneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sopravvissuto al giorno 1`)
};

const nl_signals_badge_name_survived_day_one = /** @type {(inputs: Signals_Badge_Name_Survived_Day_OneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dag 1 overleefd`)
};

const pl_signals_badge_name_survived_day_one = /** @type {(inputs: Signals_Badge_Name_Survived_Day_OneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przetrwałeś dzień 1`)
};

const pt_signals_badge_name_survived_day_one = /** @type {(inputs: Signals_Badge_Name_Survived_Day_OneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sobreviveu ao dia 1`)
};

const ru_signals_badge_name_survived_day_one = /** @type {(inputs: Signals_Badge_Name_Survived_Day_OneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пережил первый день`)
};

const sv_signals_badge_name_survived_day_one = /** @type {(inputs: Signals_Badge_Name_Survived_Day_OneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Överlevde dag 1`)
};

const tr_signals_badge_name_survived_day_one = /** @type {(inputs: Signals_Badge_Name_Survived_Day_OneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk Günü Atlattın`)
};

const zh_signals_badge_name_survived_day_one = /** @type {(inputs: Signals_Badge_Name_Survived_Day_OneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`熬过第一天`)
};

const ja_signals_badge_name_survived_day_one = /** @type {(inputs: Signals_Badge_Name_Survived_Day_OneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 日目を生き延びた`)
};

/**
* | output |
* | --- |
* | "Survived Day One" |
*
* @param {Signals_Badge_Name_Survived_Day_OneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_badge_name_survived_day_one = /** @type {((inputs?: Signals_Badge_Name_Survived_Day_OneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Badge_Name_Survived_Day_OneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_badge_name_survived_day_one(inputs)
	if (locale === "de") return de_signals_badge_name_survived_day_one(inputs)
	if (locale === "fr") return fr_signals_badge_name_survived_day_one(inputs)
	if (locale === "it") return it_signals_badge_name_survived_day_one(inputs)
	if (locale === "nl") return nl_signals_badge_name_survived_day_one(inputs)
	if (locale === "pl") return pl_signals_badge_name_survived_day_one(inputs)
	if (locale === "pt") return pt_signals_badge_name_survived_day_one(inputs)
	if (locale === "ru") return ru_signals_badge_name_survived_day_one(inputs)
	if (locale === "sv") return sv_signals_badge_name_survived_day_one(inputs)
	if (locale === "tr") return tr_signals_badge_name_survived_day_one(inputs)
	if (locale === "zh") return zh_signals_badge_name_survived_day_one(inputs)
	if (locale === "ja") return ja_signals_badge_name_survived_day_one(inputs)
	return en_signals_badge_name_survived_day_one(inputs)
});
