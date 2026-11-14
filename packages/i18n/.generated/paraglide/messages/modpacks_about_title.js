/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_About_TitleInputs */

const en_modpacks_about_title = /** @type {(inputs: Modpacks_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`About`)
};

const es_modpacks_about_title = /** @type {(inputs: Modpacks_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acerca de`)
};

const de_modpacks_about_title = /** @type {(inputs: Modpacks_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Info`)
};

const fr_modpacks_about_title = /** @type {(inputs: Modpacks_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`À propos`)
};

const it_modpacks_about_title = /** @type {(inputs: Modpacks_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Informazioni`)
};

const nl_modpacks_about_title = /** @type {(inputs: Modpacks_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Over`)
};

const pl_modpacks_about_title = /** @type {(inputs: Modpacks_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opis`)
};

const pt_modpacks_about_title = /** @type {(inputs: Modpacks_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sobre`)
};

const ru_modpacks_about_title = /** @type {(inputs: Modpacks_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Описание`)
};

const sv_modpacks_about_title = /** @type {(inputs: Modpacks_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Om`)
};

const tr_modpacks_about_title = /** @type {(inputs: Modpacks_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hakkında`)
};

const zh_modpacks_about_title = /** @type {(inputs: Modpacks_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`简介`)
};

const ja_modpacks_about_title = /** @type {(inputs: Modpacks_About_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`概要`)
};

/**
* | output |
* | --- |
* | "About" |
*
* @param {Modpacks_About_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_about_title = /** @type {((inputs?: Modpacks_About_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_About_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_about_title(inputs)
	if (locale === "de") return de_modpacks_about_title(inputs)
	if (locale === "fr") return fr_modpacks_about_title(inputs)
	if (locale === "it") return it_modpacks_about_title(inputs)
	if (locale === "nl") return nl_modpacks_about_title(inputs)
	if (locale === "pl") return pl_modpacks_about_title(inputs)
	if (locale === "pt") return pt_modpacks_about_title(inputs)
	if (locale === "ru") return ru_modpacks_about_title(inputs)
	if (locale === "sv") return sv_modpacks_about_title(inputs)
	if (locale === "tr") return tr_modpacks_about_title(inputs)
	if (locale === "zh") return zh_modpacks_about_title(inputs)
	if (locale === "ja") return ja_modpacks_about_title(inputs)
	return en_modpacks_about_title(inputs)
});
