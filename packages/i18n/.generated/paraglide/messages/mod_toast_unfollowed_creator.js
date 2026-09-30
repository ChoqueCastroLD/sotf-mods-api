/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Mod_Toast_Unfollowed_CreatorInputs */

const en_mod_toast_unfollowed_creator = /** @type {(inputs: Mod_Toast_Unfollowed_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`You no longer follow ${i?.name}.`)
};

const es_mod_toast_unfollowed_creator = /** @type {(inputs: Mod_Toast_Unfollowed_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ya no sigues a ${i?.name}.`)
};

const de_mod_toast_unfollowed_creator = /** @type {(inputs: Mod_Toast_Unfollowed_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du folgst ${i?.name} nicht mehr.`)
};

const fr_mod_toast_unfollowed_creator = /** @type {(inputs: Mod_Toast_Unfollowed_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vous ne suivez plus ${i?.name}.`)
};

const it_mod_toast_unfollowed_creator = /** @type {(inputs: Mod_Toast_Unfollowed_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Non segui più ${i?.name}.`)
};

const nl_mod_toast_unfollowed_creator = /** @type {(inputs: Mod_Toast_Unfollowed_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Je volgt ${i?.name} niet meer.`)
};

const pl_mod_toast_unfollowed_creator = /** @type {(inputs: Mod_Toast_Unfollowed_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nie obserwujesz już ${i?.name}.`)
};

const pt_mod_toast_unfollowed_creator = /** @type {(inputs: Mod_Toast_Unfollowed_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Você deixou de seguir ${i?.name}.`)
};

const ru_mod_toast_unfollowed_creator = /** @type {(inputs: Mod_Toast_Unfollowed_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Вы отписались от ${i?.name}.`)
};

const sv_mod_toast_unfollowed_creator = /** @type {(inputs: Mod_Toast_Unfollowed_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du följer inte längre ${i?.name}.`)
};

const tr_mod_toast_unfollowed_creator = /** @type {(inputs: Mod_Toast_Unfollowed_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Artık ${i?.name} kullanıcısını takip etmiyorsun.`)
};

const zh_mod_toast_unfollowed_creator = /** @type {(inputs: Mod_Toast_Unfollowed_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`你已取消关注 ${i?.name}。`)
};

const ja_mod_toast_unfollowed_creator = /** @type {(inputs: Mod_Toast_Unfollowed_CreatorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} のフォローを解除しました。`)
};

/**
* | output |
* | --- |
* | "You no longer follow {name}." |
*
* @param {Mod_Toast_Unfollowed_CreatorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_toast_unfollowed_creator = /** @type {((inputs: Mod_Toast_Unfollowed_CreatorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Toast_Unfollowed_CreatorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_toast_unfollowed_creator(inputs)
	if (locale === "de") return de_mod_toast_unfollowed_creator(inputs)
	if (locale === "fr") return fr_mod_toast_unfollowed_creator(inputs)
	if (locale === "it") return it_mod_toast_unfollowed_creator(inputs)
	if (locale === "nl") return nl_mod_toast_unfollowed_creator(inputs)
	if (locale === "pl") return pl_mod_toast_unfollowed_creator(inputs)
	if (locale === "pt") return pt_mod_toast_unfollowed_creator(inputs)
	if (locale === "ru") return ru_mod_toast_unfollowed_creator(inputs)
	if (locale === "sv") return sv_mod_toast_unfollowed_creator(inputs)
	if (locale === "tr") return tr_mod_toast_unfollowed_creator(inputs)
	if (locale === "zh") return zh_mod_toast_unfollowed_creator(inputs)
	if (locale === "ja") return ja_mod_toast_unfollowed_creator(inputs)
	return en_mod_toast_unfollowed_creator(inputs)
});
