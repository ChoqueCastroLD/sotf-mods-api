/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ title: NonNullable<unknown> }} Cmdk_Act_FollowedInputs */

const en_cmdk_act_followed = /** @type {(inputs: Cmdk_Act_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Now following ${i?.title}`)
};

const es_cmdk_act_followed = /** @type {(inputs: Cmdk_Act_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ahora sigues ${i?.title}`)
};

const de_cmdk_act_followed = /** @type {(inputs: Cmdk_Act_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du folgst jetzt ${i?.title}`)
};

const fr_cmdk_act_followed = /** @type {(inputs: Cmdk_Act_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vous suivez ${i?.title}`)
};

const it_cmdk_act_followed = /** @type {(inputs: Cmdk_Act_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ora segui ${i?.title}`)
};

const nl_cmdk_act_followed = /** @type {(inputs: Cmdk_Act_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Je volgt nu ${i?.title}`)
};

const pl_cmdk_act_followed = /** @type {(inputs: Cmdk_Act_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Obserwujesz: ${i?.title}`)
};

const pt_cmdk_act_followed = /** @type {(inputs: Cmdk_Act_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Agora segue ${i?.title}`)
};

const ru_cmdk_act_followed = /** @type {(inputs: Cmdk_Act_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Вы подписались: ${i?.title}`)
};

const sv_cmdk_act_followed = /** @type {(inputs: Cmdk_Act_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du följer nu ${i?.title}`)
};

const tr_cmdk_act_followed = /** @type {(inputs: Cmdk_Act_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} takip ediliyor`)
};

const zh_cmdk_act_followed = /** @type {(inputs: Cmdk_Act_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已关注 ${i?.title}`)
};

const ja_cmdk_act_followed = /** @type {(inputs: Cmdk_Act_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} をフォローしました`)
};

/**
* | output |
* | --- |
* | "Now following {title}" |
*
* @param {Cmdk_Act_FollowedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_act_followed = /** @type {((inputs: Cmdk_Act_FollowedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Act_FollowedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_act_followed(inputs)
	if (locale === "de") return de_cmdk_act_followed(inputs)
	if (locale === "fr") return fr_cmdk_act_followed(inputs)
	if (locale === "it") return it_cmdk_act_followed(inputs)
	if (locale === "nl") return nl_cmdk_act_followed(inputs)
	if (locale === "pl") return pl_cmdk_act_followed(inputs)
	if (locale === "pt") return pt_cmdk_act_followed(inputs)
	if (locale === "ru") return ru_cmdk_act_followed(inputs)
	if (locale === "sv") return sv_cmdk_act_followed(inputs)
	if (locale === "tr") return tr_cmdk_act_followed(inputs)
	if (locale === "zh") return zh_cmdk_act_followed(inputs)
	if (locale === "ja") return ja_cmdk_act_followed(inputs)
	return en_cmdk_act_followed(inputs)
});
