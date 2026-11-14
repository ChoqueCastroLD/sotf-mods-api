/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_New_ButtonInputs */

const en_modpacks_new_button = /** @type {(inputs: Modpacks_New_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New modpack`)
};

const es_modpacks_new_button = /** @type {(inputs: Modpacks_New_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuevo modpack`)
};

const de_modpacks_new_button = /** @type {(inputs: Modpacks_New_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neues Modpack`)
};

const fr_modpacks_new_button = /** @type {(inputs: Modpacks_New_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouveau modpack`)
};

const it_modpacks_new_button = /** @type {(inputs: Modpacks_New_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuovo modpack`)
};

const nl_modpacks_new_button = /** @type {(inputs: Modpacks_New_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe modpack`)
};

const pl_modpacks_new_button = /** @type {(inputs: Modpacks_New_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowy modpack`)
};

const pt_modpacks_new_button = /** @type {(inputs: Modpacks_New_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novo modpack`)
};

const ru_modpacks_new_button = /** @type {(inputs: Modpacks_New_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новый модпак`)
};

const sv_modpacks_new_button = /** @type {(inputs: Modpacks_New_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nytt modpaket`)
};

const tr_modpacks_new_button = /** @type {(inputs: Modpacks_New_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni mod paketi`)
};

const zh_modpacks_new_button = /** @type {(inputs: Modpacks_New_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新建整合包`)
};

const ja_modpacks_new_button = /** @type {(inputs: Modpacks_New_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しい Modパック`)
};

/**
* | output |
* | --- |
* | "New modpack" |
*
* @param {Modpacks_New_ButtonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_new_button = /** @type {((inputs?: Modpacks_New_ButtonInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_New_ButtonInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_new_button(inputs)
	if (locale === "de") return de_modpacks_new_button(inputs)
	if (locale === "fr") return fr_modpacks_new_button(inputs)
	if (locale === "it") return it_modpacks_new_button(inputs)
	if (locale === "nl") return nl_modpacks_new_button(inputs)
	if (locale === "pl") return pl_modpacks_new_button(inputs)
	if (locale === "pt") return pt_modpacks_new_button(inputs)
	if (locale === "ru") return ru_modpacks_new_button(inputs)
	if (locale === "sv") return sv_modpacks_new_button(inputs)
	if (locale === "tr") return tr_modpacks_new_button(inputs)
	if (locale === "zh") return zh_modpacks_new_button(inputs)
	if (locale === "ja") return ja_modpacks_new_button(inputs)
	return en_modpacks_new_button(inputs)
});
