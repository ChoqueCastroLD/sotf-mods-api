/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown> }} Me_UnfollowedInputs */

const en_me_unfollowed = /** @type {(inputs: Me_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} left your backpack`)
};

const es_me_unfollowed = /** @type {(inputs: Me_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} ha salido de tu mochila`)
};

const de_me_unfollowed = /** @type {(inputs: Me_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} hat deinen Rucksack verlassen`)
};

const fr_me_unfollowed = /** @type {(inputs: Me_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} a quitté votre sac à dos`)
};

const it_me_unfollowed = /** @type {(inputs: Me_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} è uscita dal tuo zaino`)
};

const nl_me_unfollowed = /** @type {(inputs: Me_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} is uit je rugzak`)
};

const pl_me_unfollowed = /** @type {(inputs: Me_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} wypadł z twojego plecaka`)
};

const pt_me_unfollowed = /** @type {(inputs: Me_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} saiu da sua mochila`)
};

const ru_me_unfollowed = /** @type {(inputs: Me_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} убран из рюкзака`)
};

const sv_me_unfollowed = /** @type {(inputs: Me_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} togs ur ryggsäcken`)
};

const tr_me_unfollowed = /** @type {(inputs: Me_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} sırt çantandan çıkarıldı`)
};

const zh_me_unfollowed = /** @type {(inputs: Me_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} 已从背包中移除`)
};

const ja_me_unfollowed = /** @type {(inputs: Me_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} をバックパックから外しました`)
};

/**
* | output |
* | --- |
* | "{mod} left your backpack" |
*
* @param {Me_UnfollowedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_unfollowed = /** @type {((inputs: Me_UnfollowedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_UnfollowedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_unfollowed(inputs)
	if (locale === "de") return de_me_unfollowed(inputs)
	if (locale === "fr") return fr_me_unfollowed(inputs)
	if (locale === "it") return it_me_unfollowed(inputs)
	if (locale === "nl") return nl_me_unfollowed(inputs)
	if (locale === "pl") return pl_me_unfollowed(inputs)
	if (locale === "pt") return pt_me_unfollowed(inputs)
	if (locale === "ru") return ru_me_unfollowed(inputs)
	if (locale === "sv") return sv_me_unfollowed(inputs)
	if (locale === "tr") return tr_me_unfollowed(inputs)
	if (locale === "zh") return zh_me_unfollowed(inputs)
	if (locale === "ja") return ja_me_unfollowed(inputs)
	return en_me_unfollowed(inputs)
});
