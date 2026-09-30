/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ year: NonNullable<unknown> }} Signals_Badge_Name_Original_SurvivorInputs */

const en_signals_badge_name_original_survivor = /** @type {(inputs: Signals_Badge_Name_Original_SurvivorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Original Survivor ${i?.year}`)
};

const es_signals_badge_name_original_survivor = /** @type {(inputs: Signals_Badge_Name_Original_SurvivorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Superviviente original ${i?.year}`)
};

const de_signals_badge_name_original_survivor = /** @type {(inputs: Signals_Badge_Name_Original_SurvivorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ursprünglicher Überlebender ${i?.year}`)
};

const fr_signals_badge_name_original_survivor = /** @type {(inputs: Signals_Badge_Name_Original_SurvivorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Survivant d’origine ${i?.year}`)
};

const it_signals_badge_name_original_survivor = /** @type {(inputs: Signals_Badge_Name_Original_SurvivorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sopravvissuto originale ${i?.year}`)
};

const nl_signals_badge_name_original_survivor = /** @type {(inputs: Signals_Badge_Name_Original_SurvivorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Oorspronkelijke overlevende ${i?.year}`)
};

const pl_signals_badge_name_original_survivor = /** @type {(inputs: Signals_Badge_Name_Original_SurvivorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pierwszy ocalały ${i?.year}`)
};

const pt_signals_badge_name_original_survivor = /** @type {(inputs: Signals_Badge_Name_Original_SurvivorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sobrevivente original ${i?.year}`)
};

const ru_signals_badge_name_original_survivor = /** @type {(inputs: Signals_Badge_Name_Original_SurvivorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Первый выживший ${i?.year}`)
};

const sv_signals_badge_name_original_survivor = /** @type {(inputs: Signals_Badge_Name_Original_SurvivorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ursprunglig överlevare ${i?.year}`)
};

const tr_signals_badge_name_original_survivor = /** @type {(inputs: Signals_Badge_Name_Original_SurvivorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`İlk Hayatta Kalan ${i?.year}`)
};

const zh_signals_badge_name_original_survivor = /** @type {(inputs: Signals_Badge_Name_Original_SurvivorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.year} 元老幸存者`)
};

const ja_signals_badge_name_original_survivor = /** @type {(inputs: Signals_Badge_Name_Original_SurvivorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`初期サバイバー ${i?.year}`)
};

/**
* | output |
* | --- |
* | "Original Survivor {year}" |
*
* @param {Signals_Badge_Name_Original_SurvivorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_badge_name_original_survivor = /** @type {((inputs: Signals_Badge_Name_Original_SurvivorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Badge_Name_Original_SurvivorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_badge_name_original_survivor(inputs)
	if (locale === "de") return de_signals_badge_name_original_survivor(inputs)
	if (locale === "fr") return fr_signals_badge_name_original_survivor(inputs)
	if (locale === "it") return it_signals_badge_name_original_survivor(inputs)
	if (locale === "nl") return nl_signals_badge_name_original_survivor(inputs)
	if (locale === "pl") return pl_signals_badge_name_original_survivor(inputs)
	if (locale === "pt") return pt_signals_badge_name_original_survivor(inputs)
	if (locale === "ru") return ru_signals_badge_name_original_survivor(inputs)
	if (locale === "sv") return sv_signals_badge_name_original_survivor(inputs)
	if (locale === "tr") return tr_signals_badge_name_original_survivor(inputs)
	if (locale === "zh") return zh_signals_badge_name_original_survivor(inputs)
	if (locale === "ja") return ja_signals_badge_name_original_survivor(inputs)
	return en_signals_badge_name_original_survivor(inputs)
});
