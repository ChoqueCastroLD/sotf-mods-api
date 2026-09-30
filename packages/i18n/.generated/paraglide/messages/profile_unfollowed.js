/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_UnfollowedInputs */

const en_profile_unfollowed = /** @type {(inputs: Profile_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unfollowed.`)
};

const es_profile_unfollowed = /** @type {(inputs: Profile_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Has dejado de seguirle.`)
};

const de_profile_unfollowed = /** @type {(inputs: Profile_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht mehr gefolgt.`)
};

const fr_profile_unfollowed = /** @type {(inputs: Profile_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Désabonné.`)
};

const it_profile_unfollowed = /** @type {(inputs: Profile_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non lo segui più.`)
};

const nl_profile_unfollowed = /** @type {(inputs: Profile_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet meer gevolgd.`)
};

const pl_profile_unfollowed = /** @type {(inputs: Profile_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przestano obserwować.`)
};

const pt_profile_unfollowed = /** @type {(inputs: Profile_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você deixou de seguir.`)
};

const ru_profile_unfollowed = /** @type {(inputs: Profile_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы отписались.`)
};

const sv_profile_unfollowed = /** @type {(inputs: Profile_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du följer inte längre.`)
};

const tr_profile_unfollowed = /** @type {(inputs: Profile_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takipten çıkıldı.`)
};

const zh_profile_unfollowed = /** @type {(inputs: Profile_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已取消关注。`)
};

const ja_profile_unfollowed = /** @type {(inputs: Profile_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォローを解除しました。`)
};

/**
* | output |
* | --- |
* | "Unfollowed." |
*
* @param {Profile_UnfollowedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_unfollowed = /** @type {((inputs?: Profile_UnfollowedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_UnfollowedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_unfollowed(inputs)
	if (locale === "de") return de_profile_unfollowed(inputs)
	if (locale === "fr") return fr_profile_unfollowed(inputs)
	if (locale === "it") return it_profile_unfollowed(inputs)
	if (locale === "nl") return nl_profile_unfollowed(inputs)
	if (locale === "pl") return pl_profile_unfollowed(inputs)
	if (locale === "pt") return pt_profile_unfollowed(inputs)
	if (locale === "ru") return ru_profile_unfollowed(inputs)
	if (locale === "sv") return sv_profile_unfollowed(inputs)
	if (locale === "tr") return tr_profile_unfollowed(inputs)
	if (locale === "zh") return zh_profile_unfollowed(inputs)
	if (locale === "ja") return ja_profile_unfollowed(inputs)
	return en_profile_unfollowed(inputs)
});
