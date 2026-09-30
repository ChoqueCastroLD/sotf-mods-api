/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Badge_Name_Patch_Day_HeroInputs */

const en_signals_badge_name_patch_day_hero = /** @type {(inputs: Signals_Badge_Name_Patch_Day_HeroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patch Day Hero`)
};

const es_signals_badge_name_patch_day_hero = /** @type {(inputs: Signals_Badge_Name_Patch_Day_HeroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Héroe del parche`)
};

const de_signals_badge_name_patch_day_hero = /** @type {(inputs: Signals_Badge_Name_Patch_Day_HeroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patch-Day-Held`)
};

const fr_signals_badge_name_patch_day_hero = /** @type {(inputs: Signals_Badge_Name_Patch_Day_HeroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Héros du patch`)
};

const it_signals_badge_name_patch_day_hero = /** @type {(inputs: Signals_Badge_Name_Patch_Day_HeroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eroe della patch`)
};

const nl_signals_badge_name_patch_day_hero = /** @type {(inputs: Signals_Badge_Name_Patch_Day_HeroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patchdagheld`)
};

const pl_signals_badge_name_patch_day_hero = /** @type {(inputs: Signals_Badge_Name_Patch_Day_HeroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bohater dnia łatki`)
};

const pt_signals_badge_name_patch_day_hero = /** @type {(inputs: Signals_Badge_Name_Patch_Day_HeroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herói do patch`)
};

const ru_signals_badge_name_patch_day_hero = /** @type {(inputs: Signals_Badge_Name_Patch_Day_HeroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Герой дня патча`)
};

const sv_signals_badge_name_patch_day_hero = /** @type {(inputs: Signals_Badge_Name_Patch_Day_HeroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patchdagens hjälte`)
};

const tr_signals_badge_name_patch_day_hero = /** @type {(inputs: Signals_Badge_Name_Patch_Day_HeroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yama Günü Kahramanı`)
};

const zh_signals_badge_name_patch_day_hero = /** @type {(inputs: Signals_Badge_Name_Patch_Day_HeroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`补丁日英雄`)
};

const ja_signals_badge_name_patch_day_hero = /** @type {(inputs: Signals_Badge_Name_Patch_Day_HeroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パッチデーの英雄`)
};

/**
* | output |
* | --- |
* | "Patch Day Hero" |
*
* @param {Signals_Badge_Name_Patch_Day_HeroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_badge_name_patch_day_hero = /** @type {((inputs?: Signals_Badge_Name_Patch_Day_HeroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Badge_Name_Patch_Day_HeroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_badge_name_patch_day_hero(inputs)
	if (locale === "de") return de_signals_badge_name_patch_day_hero(inputs)
	if (locale === "fr") return fr_signals_badge_name_patch_day_hero(inputs)
	if (locale === "it") return it_signals_badge_name_patch_day_hero(inputs)
	if (locale === "nl") return nl_signals_badge_name_patch_day_hero(inputs)
	if (locale === "pl") return pl_signals_badge_name_patch_day_hero(inputs)
	if (locale === "pt") return pt_signals_badge_name_patch_day_hero(inputs)
	if (locale === "ru") return ru_signals_badge_name_patch_day_hero(inputs)
	if (locale === "sv") return sv_signals_badge_name_patch_day_hero(inputs)
	if (locale === "tr") return tr_signals_badge_name_patch_day_hero(inputs)
	if (locale === "zh") return zh_signals_badge_name_patch_day_hero(inputs)
	if (locale === "ja") return ja_signals_badge_name_patch_day_hero(inputs)
	return en_signals_badge_name_patch_day_hero(inputs)
});
