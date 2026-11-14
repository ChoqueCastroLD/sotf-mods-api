/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_KickerInputs */

const en_modpacks_kicker = /** @type {(inputs: Modpacks_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack`)
};

const es_modpacks_kicker = /** @type {(inputs: Modpacks_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack`)
};

const de_modpacks_kicker = /** @type {(inputs: Modpacks_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack`)
};

const fr_modpacks_kicker = /** @type {(inputs: Modpacks_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack`)
};

const it_modpacks_kicker = /** @type {(inputs: Modpacks_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack`)
};

const nl_modpacks_kicker = /** @type {(inputs: Modpacks_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack`)
};

const pl_modpacks_kicker = /** @type {(inputs: Modpacks_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack`)
};

const pt_modpacks_kicker = /** @type {(inputs: Modpacks_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack`)
};

const ru_modpacks_kicker = /** @type {(inputs: Modpacks_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Модпак`)
};

const sv_modpacks_kicker = /** @type {(inputs: Modpacks_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpaket`)
};

const tr_modpacks_kicker = /** @type {(inputs: Modpacks_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod paketi`)
};

const zh_modpacks_kicker = /** @type {(inputs: Modpacks_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`整合包`)
};

const ja_modpacks_kicker = /** @type {(inputs: Modpacks_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modパック`)
};

/**
* | output |
* | --- |
* | "Modpack" |
*
* @param {Modpacks_KickerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_kicker = /** @type {((inputs?: Modpacks_KickerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_KickerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_kicker(inputs)
	if (locale === "de") return de_modpacks_kicker(inputs)
	if (locale === "fr") return fr_modpacks_kicker(inputs)
	if (locale === "it") return it_modpacks_kicker(inputs)
	if (locale === "nl") return nl_modpacks_kicker(inputs)
	if (locale === "pl") return pl_modpacks_kicker(inputs)
	if (locale === "pt") return pt_modpacks_kicker(inputs)
	if (locale === "ru") return ru_modpacks_kicker(inputs)
	if (locale === "sv") return sv_modpacks_kicker(inputs)
	if (locale === "tr") return tr_modpacks_kicker(inputs)
	if (locale === "zh") return zh_modpacks_kicker(inputs)
	if (locale === "ja") return ja_modpacks_kicker(inputs)
	return en_modpacks_kicker(inputs)
});
