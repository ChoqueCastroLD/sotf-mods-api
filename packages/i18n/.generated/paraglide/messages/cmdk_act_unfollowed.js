/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ title: NonNullable<unknown> }} Cmdk_Act_UnfollowedInputs */

const en_cmdk_act_unfollowed = /** @type {(inputs: Cmdk_Act_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Unfollowed ${i?.title}`)
};

const es_cmdk_act_unfollowed = /** @type {(inputs: Cmdk_Act_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dejaste de seguir ${i?.title}`)
};

const de_cmdk_act_unfollowed = /** @type {(inputs: Cmdk_Act_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du folgst ${i?.title} nicht mehr`)
};

const fr_cmdk_act_unfollowed = /** @type {(inputs: Cmdk_Act_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vous ne suivez plus ${i?.title}`)
};

const it_cmdk_act_unfollowed = /** @type {(inputs: Cmdk_Act_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Non segui più ${i?.title}`)
};

const nl_cmdk_act_unfollowed = /** @type {(inputs: Cmdk_Act_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Je volgt ${i?.title} niet meer`)
};

const pl_cmdk_act_unfollowed = /** @type {(inputs: Cmdk_Act_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Przestano obserwować: ${i?.title}`)
};

const pt_cmdk_act_unfollowed = /** @type {(inputs: Cmdk_Act_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Deixou de seguir ${i?.title}`)
};

const ru_cmdk_act_unfollowed = /** @type {(inputs: Cmdk_Act_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Вы отписались: ${i?.title}`)
};

const sv_cmdk_act_unfollowed = /** @type {(inputs: Cmdk_Act_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du följer inte längre ${i?.title}`)
};

const tr_cmdk_act_unfollowed = /** @type {(inputs: Cmdk_Act_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} takipten çıkarıldı`)
};

const zh_cmdk_act_unfollowed = /** @type {(inputs: Cmdk_Act_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已取消关注 ${i?.title}`)
};

const ja_cmdk_act_unfollowed = /** @type {(inputs: Cmdk_Act_UnfollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} のフォローを解除しました`)
};

/**
* | output |
* | --- |
* | "Unfollowed {title}" |
*
* @param {Cmdk_Act_UnfollowedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_act_unfollowed = /** @type {((inputs: Cmdk_Act_UnfollowedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Act_UnfollowedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_act_unfollowed(inputs)
	if (locale === "de") return de_cmdk_act_unfollowed(inputs)
	if (locale === "fr") return fr_cmdk_act_unfollowed(inputs)
	if (locale === "it") return it_cmdk_act_unfollowed(inputs)
	if (locale === "nl") return nl_cmdk_act_unfollowed(inputs)
	if (locale === "pl") return pl_cmdk_act_unfollowed(inputs)
	if (locale === "pt") return pt_cmdk_act_unfollowed(inputs)
	if (locale === "ru") return ru_cmdk_act_unfollowed(inputs)
	if (locale === "sv") return sv_cmdk_act_unfollowed(inputs)
	if (locale === "tr") return tr_cmdk_act_unfollowed(inputs)
	if (locale === "zh") return zh_cmdk_act_unfollowed(inputs)
	if (locale === "ja") return ja_cmdk_act_unfollowed(inputs)
	return en_cmdk_act_unfollowed(inputs)
});
