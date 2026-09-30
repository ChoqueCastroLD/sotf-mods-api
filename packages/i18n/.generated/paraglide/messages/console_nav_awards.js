/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_AwardsInputs */

const en_console_nav_awards = /** @type {(inputs: Console_Nav_AwardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Awards`)
};

const es_console_nav_awards = /** @type {(inputs: Console_Nav_AwardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Premios`)
};

const de_console_nav_awards = /** @type {(inputs: Console_Nav_AwardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auszeichnungen`)
};

const fr_console_nav_awards = /** @type {(inputs: Console_Nav_AwardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Récompenses`)
};

const it_console_nav_awards = /** @type {(inputs: Console_Nav_AwardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Premi`)
};

const nl_console_nav_awards = /** @type {(inputs: Console_Nav_AwardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onderscheidingen`)
};

const pl_console_nav_awards = /** @type {(inputs: Console_Nav_AwardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nagrody`)
};

const pt_console_nav_awards = /** @type {(inputs: Console_Nav_AwardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prêmios`)
};

const ru_console_nav_awards = /** @type {(inputs: Console_Nav_AwardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Награды`)
};

const sv_console_nav_awards = /** @type {(inputs: Console_Nav_AwardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utmärkelser`)
};

const tr_console_nav_awards = /** @type {(inputs: Console_Nav_AwardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ödüller`)
};

const zh_console_nav_awards = /** @type {(inputs: Console_Nav_AwardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`奖项`)
};

const ja_console_nav_awards = /** @type {(inputs: Console_Nav_AwardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アワード`)
};

/**
* | output |
* | --- |
* | "Awards" |
*
* @param {Console_Nav_AwardsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_awards = /** @type {((inputs?: Console_Nav_AwardsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_AwardsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_awards(inputs)
	if (locale === "de") return de_console_nav_awards(inputs)
	if (locale === "fr") return fr_console_nav_awards(inputs)
	if (locale === "it") return it_console_nav_awards(inputs)
	if (locale === "nl") return nl_console_nav_awards(inputs)
	if (locale === "pl") return pl_console_nav_awards(inputs)
	if (locale === "pt") return pt_console_nav_awards(inputs)
	if (locale === "ru") return ru_console_nav_awards(inputs)
	if (locale === "sv") return sv_console_nav_awards(inputs)
	if (locale === "tr") return tr_console_nav_awards(inputs)
	if (locale === "zh") return zh_console_nav_awards(inputs)
	if (locale === "ja") return ja_console_nav_awards(inputs)
	return en_console_nav_awards(inputs)
});
