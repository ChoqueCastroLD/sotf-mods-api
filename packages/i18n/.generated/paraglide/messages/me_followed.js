/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown> }} Me_FollowedInputs */

const en_me_followed = /** @type {(inputs: Me_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} is in your backpack`)
};

const es_me_followed = /** @type {(inputs: Me_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} está en tu mochila`)
};

const de_me_followed = /** @type {(inputs: Me_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} ist in deinem Rucksack`)
};

const fr_me_followed = /** @type {(inputs: Me_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} est dans votre sac à dos`)
};

const it_me_followed = /** @type {(inputs: Me_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} è nel tuo zaino`)
};

const nl_me_followed = /** @type {(inputs: Me_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} zit in je rugzak`)
};

const pl_me_followed = /** @type {(inputs: Me_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} jest w twoim plecaku`)
};

const pt_me_followed = /** @type {(inputs: Me_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} está na sua mochila`)
};

const ru_me_followed = /** @type {(inputs: Me_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} в вашем рюкзаке`)
};

const sv_me_followed = /** @type {(inputs: Me_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} ligger i din ryggsäck`)
};

const tr_me_followed = /** @type {(inputs: Me_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} sırt çantanda`)
};

const zh_me_followed = /** @type {(inputs: Me_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} 已放入背包`)
};

const ja_me_followed = /** @type {(inputs: Me_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} をバックパックに入れました`)
};

/**
* | output |
* | --- |
* | "{mod} is in your backpack" |
*
* @param {Me_FollowedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_followed = /** @type {((inputs: Me_FollowedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_FollowedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_followed(inputs)
	if (locale === "de") return de_me_followed(inputs)
	if (locale === "fr") return fr_me_followed(inputs)
	if (locale === "it") return it_me_followed(inputs)
	if (locale === "nl") return nl_me_followed(inputs)
	if (locale === "pl") return pl_me_followed(inputs)
	if (locale === "pt") return pt_me_followed(inputs)
	if (locale === "ru") return ru_me_followed(inputs)
	if (locale === "sv") return sv_me_followed(inputs)
	if (locale === "tr") return tr_me_followed(inputs)
	if (locale === "zh") return zh_me_followed(inputs)
	if (locale === "ja") return ja_me_followed(inputs)
	return en_me_followed(inputs)
});
