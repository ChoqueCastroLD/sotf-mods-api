/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Kitsocial_Console_UnfollowedInputs */

const en_kitsocial_console_unfollowed = /** @type {(inputs: Kitsocial_Console_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`You unfollowed ${i?.name}.`)
};

const es_kitsocial_console_unfollowed = /** @type {(inputs: Kitsocial_Console_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dejaste de seguir ${i?.name}.`)
};

const de_kitsocial_console_unfollowed = /** @type {(inputs: Kitsocial_Console_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du folgst ${i?.name} nicht mehr.`)
};

const fr_kitsocial_console_unfollowed = /** @type {(inputs: Kitsocial_Console_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vous ne suivez plus ${i?.name}.`)
};

const it_kitsocial_console_unfollowed = /** @type {(inputs: Kitsocial_Console_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Non segui più ${i?.name}.`)
};

const nl_kitsocial_console_unfollowed = /** @type {(inputs: Kitsocial_Console_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Je volgt ${i?.name} niet meer.`)
};

const pl_kitsocial_console_unfollowed = /** @type {(inputs: Kitsocial_Console_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Przestałeś obserwować ${i?.name}.`)
};

const pt_kitsocial_console_unfollowed = /** @type {(inputs: Kitsocial_Console_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Você deixou de seguir ${i?.name}.`)
};

const ru_kitsocial_console_unfollowed = /** @type {(inputs: Kitsocial_Console_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Вы отписались от «${i?.name}».`)
};

const sv_kitsocial_console_unfollowed = /** @type {(inputs: Kitsocial_Console_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du följer inte längre ${i?.name}.`)
};

const tr_kitsocial_console_unfollowed = /** @type {(inputs: Kitsocial_Console_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} kitini artık takip etmiyorsun.`)
};

const zh_kitsocial_console_unfollowed = /** @type {(inputs: Kitsocial_Console_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`你已取消关注 ${i?.name}。`)
};

const ja_kitsocial_console_unfollowed = /** @type {(inputs: Kitsocial_Console_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} のフォローを解除しました。`)
};

/**
* | output |
* | --- |
* | "You unfollowed {name}." |
*
* @param {Kitsocial_Console_UnfollowedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_console_unfollowed = /** @type {((inputs: Kitsocial_Console_UnfollowedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Console_UnfollowedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_console_unfollowed(inputs)
	if (locale === "de") return de_kitsocial_console_unfollowed(inputs)
	if (locale === "fr") return fr_kitsocial_console_unfollowed(inputs)
	if (locale === "it") return it_kitsocial_console_unfollowed(inputs)
	if (locale === "nl") return nl_kitsocial_console_unfollowed(inputs)
	if (locale === "pl") return pl_kitsocial_console_unfollowed(inputs)
	if (locale === "pt") return pt_kitsocial_console_unfollowed(inputs)
	if (locale === "ru") return ru_kitsocial_console_unfollowed(inputs)
	if (locale === "sv") return sv_kitsocial_console_unfollowed(inputs)
	if (locale === "tr") return tr_kitsocial_console_unfollowed(inputs)
	if (locale === "zh") return zh_kitsocial_console_unfollowed(inputs)
	if (locale === "ja") return ja_kitsocial_console_unfollowed(inputs)
	return en_kitsocial_console_unfollowed(inputs)
});
