/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Mod_Toast_UnfollowedInputs */

const en_mod_toast_unfollowed = /** @type {(inputs: Mod_Toast_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} left your backpack.`)
};

const es_mod_toast_unfollowed = /** @type {(inputs: Mod_Toast_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ya no está en tu mochila.`)
};

const de_mod_toast_unfollowed = /** @type {(inputs: Mod_Toast_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ist nicht mehr in deinem Rucksack.`)
};

const fr_mod_toast_unfollowed = /** @type {(inputs: Mod_Toast_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} a quitté votre sac.`)
};

const it_mod_toast_unfollowed = /** @type {(inputs: Mod_Toast_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} non è più nel tuo zaino.`)
};

const nl_mod_toast_unfollowed = /** @type {(inputs: Mod_Toast_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} is uit je rugzak.`)
};

const pl_mod_toast_unfollowed = /** @type {(inputs: Mod_Toast_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} nie jest już w twoim plecaku.`)
};

const pt_mod_toast_unfollowed = /** @type {(inputs: Mod_Toast_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} saiu da sua mochila.`)
};

const ru_mod_toast_unfollowed = /** @type {(inputs: Mod_Toast_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} больше нет в вашем рюкзаке.`)
};

const sv_mod_toast_unfollowed = /** @type {(inputs: Mod_Toast_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} har lämnat din ryggsäck.`)
};

const tr_mod_toast_unfollowed = /** @type {(inputs: Mod_Toast_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} sırt çantandan çıktı.`)
};

const zh_mod_toast_unfollowed = /** @type {(inputs: Mod_Toast_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 已从你的背包移除。`)
};

const ja_mod_toast_unfollowed = /** @type {(inputs: Mod_Toast_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} をバックパックから外しました。`)
};

/**
* | output |
* | --- |
* | "{name} left your backpack." |
*
* @param {Mod_Toast_UnfollowedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_toast_unfollowed = /** @type {((inputs: Mod_Toast_UnfollowedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Toast_UnfollowedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_toast_unfollowed(inputs)
	if (locale === "de") return de_mod_toast_unfollowed(inputs)
	if (locale === "fr") return fr_mod_toast_unfollowed(inputs)
	if (locale === "it") return it_mod_toast_unfollowed(inputs)
	if (locale === "nl") return nl_mod_toast_unfollowed(inputs)
	if (locale === "pl") return pl_mod_toast_unfollowed(inputs)
	if (locale === "pt") return pt_mod_toast_unfollowed(inputs)
	if (locale === "ru") return ru_mod_toast_unfollowed(inputs)
	if (locale === "sv") return sv_mod_toast_unfollowed(inputs)
	if (locale === "tr") return tr_mod_toast_unfollowed(inputs)
	if (locale === "zh") return zh_mod_toast_unfollowed(inputs)
	if (locale === "ja") return ja_mod_toast_unfollowed(inputs)
	return en_mod_toast_unfollowed(inputs)
});
