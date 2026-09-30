/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_UnfollowedInputs */

const en_builds_unfollowed = /** @type {(inputs: Builds_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Removed from your Backpack.`)
};

const es_builds_unfollowed = /** @type {(inputs: Builds_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitada de tu Mochila.`)
};

const de_builds_unfollowed = /** @type {(inputs: Builds_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aus deinem Rucksack entfernt.`)
};

const fr_builds_unfollowed = /** @type {(inputs: Builds_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirée de votre sac à dos.`)
};

const it_builds_unfollowed = /** @type {(inputs: Builds_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimossa dal tuo zaino.`)
};

const nl_builds_unfollowed = /** @type {(inputs: Builds_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uit je rugzak gehaald.`)
};

const pl_builds_unfollowed = /** @type {(inputs: Builds_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usunięto z plecaka.`)
};

const pt_builds_unfollowed = /** @type {(inputs: Builds_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Removida da sua mochila.`)
};

const ru_builds_unfollowed = /** @type {(inputs: Builds_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Убрано из рюкзака.`)
};

const sv_builds_unfollowed = /** @type {(inputs: Builds_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borttaget från din ryggsäck.`)
};

const tr_builds_unfollowed = /** @type {(inputs: Builds_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sırt çantandan çıkarıldı.`)
};

const zh_builds_unfollowed = /** @type {(inputs: Builds_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已从你的背包移除。`)
};

const ja_builds_unfollowed = /** @type {(inputs: Builds_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バックパックから外しました。`)
};

/**
* | output |
* | --- |
* | "Removed from your Backpack." |
*
* @param {Builds_UnfollowedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_unfollowed = /** @type {((inputs?: Builds_UnfollowedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_UnfollowedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_unfollowed(inputs)
	if (locale === "de") return de_builds_unfollowed(inputs)
	if (locale === "fr") return fr_builds_unfollowed(inputs)
	if (locale === "it") return it_builds_unfollowed(inputs)
	if (locale === "nl") return nl_builds_unfollowed(inputs)
	if (locale === "pl") return pl_builds_unfollowed(inputs)
	if (locale === "pt") return pt_builds_unfollowed(inputs)
	if (locale === "ru") return ru_builds_unfollowed(inputs)
	if (locale === "sv") return sv_builds_unfollowed(inputs)
	if (locale === "tr") return tr_builds_unfollowed(inputs)
	if (locale === "zh") return zh_builds_unfollowed(inputs)
	if (locale === "ja") return ja_builds_unfollowed(inputs)
	return en_builds_unfollowed(inputs)
});
