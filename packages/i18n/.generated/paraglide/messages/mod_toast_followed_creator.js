/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Mod_Toast_Followed_CreatorInputs */

const en_mod_toast_followed_creator = /** @type {(inputs: Mod_Toast_Followed_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`You follow ${i?.name}.`)
};

const es_mod_toast_followed_creator = /** @type {(inputs: Mod_Toast_Followed_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sigues a ${i?.name}.`)
};

const de_mod_toast_followed_creator = /** @type {(inputs: Mod_Toast_Followed_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du folgst ${i?.name}.`)
};

const fr_mod_toast_followed_creator = /** @type {(inputs: Mod_Toast_Followed_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vous suivez ${i?.name}.`)
};

const it_mod_toast_followed_creator = /** @type {(inputs: Mod_Toast_Followed_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Segui ${i?.name}.`)
};

const nl_mod_toast_followed_creator = /** @type {(inputs: Mod_Toast_Followed_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Je volgt ${i?.name}.`)
};

const pl_mod_toast_followed_creator = /** @type {(inputs: Mod_Toast_Followed_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Obserwujesz ${i?.name}.`)
};

const pt_mod_toast_followed_creator = /** @type {(inputs: Mod_Toast_Followed_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Você segue ${i?.name}.`)
};

const ru_mod_toast_followed_creator = /** @type {(inputs: Mod_Toast_Followed_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Вы подписаны на ${i?.name}.`)
};

const sv_mod_toast_followed_creator = /** @type {(inputs: Mod_Toast_Followed_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du följer ${i?.name}.`)
};

const tr_mod_toast_followed_creator = /** @type {(inputs: Mod_Toast_Followed_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} kullanıcısını takip ediyorsun.`)
};

const zh_mod_toast_followed_creator = /** @type {(inputs: Mod_Toast_Followed_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`你已关注 ${i?.name}。`)
};

const ja_mod_toast_followed_creator = /** @type {(inputs: Mod_Toast_Followed_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} をフォローしました。`)
};

/**
* | output |
* | --- |
* | "You follow {name}." |
*
* @param {Mod_Toast_Followed_CreatorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_toast_followed_creator = /** @type {((inputs: Mod_Toast_Followed_CreatorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Toast_Followed_CreatorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_toast_followed_creator(inputs)
	if (locale === "de") return de_mod_toast_followed_creator(inputs)
	if (locale === "fr") return fr_mod_toast_followed_creator(inputs)
	if (locale === "it") return it_mod_toast_followed_creator(inputs)
	if (locale === "nl") return nl_mod_toast_followed_creator(inputs)
	if (locale === "pl") return pl_mod_toast_followed_creator(inputs)
	if (locale === "pt") return pt_mod_toast_followed_creator(inputs)
	if (locale === "ru") return ru_mod_toast_followed_creator(inputs)
	if (locale === "sv") return sv_mod_toast_followed_creator(inputs)
	if (locale === "tr") return tr_mod_toast_followed_creator(inputs)
	if (locale === "zh") return zh_mod_toast_followed_creator(inputs)
	if (locale === "ja") return ja_mod_toast_followed_creator(inputs)
	return en_mod_toast_followed_creator(inputs)
});
