/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Creator_TitleInputs */

const en_mod_creator_title = /** @type {(inputs: Mod_Creator_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creator`)
};

const es_mod_creator_title = /** @type {(inputs: Mod_Creator_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creador`)
};

const de_mod_creator_title = /** @type {(inputs: Mod_Creator_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ersteller`)
};

const fr_mod_creator_title = /** @type {(inputs: Mod_Creator_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créateur`)
};

const it_mod_creator_title = /** @type {(inputs: Mod_Creator_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creatore`)
};

const nl_mod_creator_title = /** @type {(inputs: Mod_Creator_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maker`)
};

const pl_mod_creator_title = /** @type {(inputs: Mod_Creator_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twórca`)
};

const pt_mod_creator_title = /** @type {(inputs: Mod_Creator_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criador`)
};

const ru_mod_creator_title = /** @type {(inputs: Mod_Creator_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автор`)
};

const sv_mod_creator_title = /** @type {(inputs: Mod_Creator_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapare`)
};

const tr_mod_creator_title = /** @type {(inputs: Mod_Creator_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapımcı`)
};

const zh_mod_creator_title = /** @type {(inputs: Mod_Creator_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者`)
};

const ja_mod_creator_title = /** @type {(inputs: Mod_Creator_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者`)
};

/**
* | output |
* | --- |
* | "Creator" |
*
* @param {Mod_Creator_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_creator_title = /** @type {((inputs?: Mod_Creator_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Creator_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_creator_title(inputs)
	if (locale === "de") return de_mod_creator_title(inputs)
	if (locale === "fr") return fr_mod_creator_title(inputs)
	if (locale === "it") return it_mod_creator_title(inputs)
	if (locale === "nl") return nl_mod_creator_title(inputs)
	if (locale === "pl") return pl_mod_creator_title(inputs)
	if (locale === "pt") return pt_mod_creator_title(inputs)
	if (locale === "ru") return ru_mod_creator_title(inputs)
	if (locale === "sv") return sv_mod_creator_title(inputs)
	if (locale === "tr") return tr_mod_creator_title(inputs)
	if (locale === "zh") return zh_mod_creator_title(inputs)
	if (locale === "ja") return ja_mod_creator_title(inputs)
	return en_mod_creator_title(inputs)
});
