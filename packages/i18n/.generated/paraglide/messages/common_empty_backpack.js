/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Empty_BackpackInputs */

const en_common_empty_backpack = /** @type {(inputs: Common_Empty_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your backpack is empty. Tap ♥ on a mod to stash it here.`)
};

const es_common_empty_backpack = /** @type {(inputs: Common_Empty_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu mochila está vacía. Pulsa ♥ en un mod para guardarlo aquí.`)
};

const de_common_empty_backpack = /** @type {(inputs: Common_Empty_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein Rucksack ist leer. Tippe bei einem Mod auf ♥, um ihn hier zu verstauen.`)
};

const fr_common_empty_backpack = /** @type {(inputs: Common_Empty_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre sac à dos est vide. Touchez ♥ sur un mod pour le ranger ici.`)
};

const it_common_empty_backpack = /** @type {(inputs: Common_Empty_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tuo zaino è vuoto. Tocca ♥ su una mod per metterla qui.`)
};

const nl_common_empty_backpack = /** @type {(inputs: Common_Empty_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je rugzak is leeg. Tik op ♥ bij een mod om hem hier op te bergen.`)
};

const pl_common_empty_backpack = /** @type {(inputs: Common_Empty_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twój plecak jest pusty. Kliknij ♥ przy modzie, aby go tu schować.`)
};

const pt_common_empty_backpack = /** @type {(inputs: Common_Empty_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua mochila está vazia. Toque em ♥ em um mod para guardá-lo aqui.`)
};

const ru_common_empty_backpack = /** @type {(inputs: Common_Empty_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш рюкзак пуст. Нажмите ♥ у мода, чтобы положить его сюда.`)
};

const sv_common_empty_backpack = /** @type {(inputs: Common_Empty_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din ryggsäck är tom. Tryck på ♥ vid en modd för att lägga den här.`)
};

const tr_common_empty_backpack = /** @type {(inputs: Common_Empty_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sırt çantan boş. Bir modu buraya koymak için ♥ simgesine dokun.`)
};

const zh_common_empty_backpack = /** @type {(inputs: Common_Empty_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的背包是空的。点击模组上的 ♥ 即可收进这里。`)
};

const ja_common_empty_backpack = /** @type {(inputs: Common_Empty_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バックパックは空です。MOD の ♥ をタップするとここにしまえます。`)
};

/**
* | output |
* | --- |
* | "Your backpack is empty. Tap ♥ on a mod to stash it here." |
*
* @param {Common_Empty_BackpackInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_empty_backpack = /** @type {((inputs?: Common_Empty_BackpackInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Empty_BackpackInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_empty_backpack(inputs)
	if (locale === "de") return de_common_empty_backpack(inputs)
	if (locale === "fr") return fr_common_empty_backpack(inputs)
	if (locale === "it") return it_common_empty_backpack(inputs)
	if (locale === "nl") return nl_common_empty_backpack(inputs)
	if (locale === "pl") return pl_common_empty_backpack(inputs)
	if (locale === "pt") return pt_common_empty_backpack(inputs)
	if (locale === "ru") return ru_common_empty_backpack(inputs)
	if (locale === "sv") return sv_common_empty_backpack(inputs)
	if (locale === "tr") return tr_common_empty_backpack(inputs)
	if (locale === "zh") return zh_common_empty_backpack(inputs)
	if (locale === "ja") return ja_common_empty_backpack(inputs)
	return en_common_empty_backpack(inputs)
});
