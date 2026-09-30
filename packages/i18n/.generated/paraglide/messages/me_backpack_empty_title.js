/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Backpack_Empty_TitleInputs */

const en_me_backpack_empty_title = /** @type {(inputs: Me_Backpack_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your backpack is empty`)
};

const es_me_backpack_empty_title = /** @type {(inputs: Me_Backpack_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu mochila está vacía`)
};

const de_me_backpack_empty_title = /** @type {(inputs: Me_Backpack_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein Rucksack ist leer`)
};

const fr_me_backpack_empty_title = /** @type {(inputs: Me_Backpack_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre sac à dos est vide`)
};

const it_me_backpack_empty_title = /** @type {(inputs: Me_Backpack_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tuo zaino è vuoto`)
};

const nl_me_backpack_empty_title = /** @type {(inputs: Me_Backpack_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je rugzak is leeg`)
};

const pl_me_backpack_empty_title = /** @type {(inputs: Me_Backpack_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twój plecak jest pusty`)
};

const pt_me_backpack_empty_title = /** @type {(inputs: Me_Backpack_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua mochila está vazia`)
};

const ru_me_backpack_empty_title = /** @type {(inputs: Me_Backpack_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш рюкзак пуст`)
};

const sv_me_backpack_empty_title = /** @type {(inputs: Me_Backpack_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din ryggsäck är tom`)
};

const tr_me_backpack_empty_title = /** @type {(inputs: Me_Backpack_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sırt çantan boş`)
};

const zh_me_backpack_empty_title = /** @type {(inputs: Me_Backpack_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的背包是空的`)
};

const ja_me_backpack_empty_title = /** @type {(inputs: Me_Backpack_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バックパックは空です`)
};

/**
* | output |
* | --- |
* | "Your backpack is empty" |
*
* @param {Me_Backpack_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_backpack_empty_title = /** @type {((inputs?: Me_Backpack_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Backpack_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_backpack_empty_title(inputs)
	if (locale === "de") return de_me_backpack_empty_title(inputs)
	if (locale === "fr") return fr_me_backpack_empty_title(inputs)
	if (locale === "it") return it_me_backpack_empty_title(inputs)
	if (locale === "nl") return nl_me_backpack_empty_title(inputs)
	if (locale === "pl") return pl_me_backpack_empty_title(inputs)
	if (locale === "pt") return pt_me_backpack_empty_title(inputs)
	if (locale === "ru") return ru_me_backpack_empty_title(inputs)
	if (locale === "sv") return sv_me_backpack_empty_title(inputs)
	if (locale === "tr") return tr_me_backpack_empty_title(inputs)
	if (locale === "zh") return zh_me_backpack_empty_title(inputs)
	if (locale === "ja") return ja_me_backpack_empty_title(inputs)
	return en_me_backpack_empty_title(inputs)
});
