/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_FollowedInputs */

const en_builds_followed = /** @type {(inputs: Builds_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You now follow this build.`)
};

const es_builds_followed = /** @type {(inputs: Builds_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ahora sigues esta build.`)
};

const de_builds_followed = /** @type {(inputs: Builds_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du folgst diesem Build jetzt.`)
};

const fr_builds_followed = /** @type {(inputs: Builds_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous suivez maintenant cette build.`)
};

const it_builds_followed = /** @type {(inputs: Builds_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ora segui questa build.`)
};

const nl_builds_followed = /** @type {(inputs: Builds_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je volgt deze build nu.`)
};

const pl_builds_followed = /** @type {(inputs: Builds_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obserwujesz teraz ten build.`)
};

const pt_builds_followed = /** @type {(inputs: Builds_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você agora segue esta build.`)
};

const ru_builds_followed = /** @type {(inputs: Builds_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы подписались на эту постройку.`)
};

const sv_builds_followed = /** @type {(inputs: Builds_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du följer nu det här bygget.`)
};

const tr_builds_followed = /** @type {(inputs: Builds_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu yapıyı takip ediyorsun.`)
};

const zh_builds_followed = /** @type {(inputs: Builds_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你已关注此建筑。`)
};

const ja_builds_followed = /** @type {(inputs: Builds_FollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この建築をフォローしました。`)
};

/**
* | output |
* | --- |
* | "You now follow this build." |
*
* @param {Builds_FollowedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_followed = /** @type {((inputs?: Builds_FollowedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_FollowedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_followed(inputs)
	if (locale === "de") return de_builds_followed(inputs)
	if (locale === "fr") return fr_builds_followed(inputs)
	if (locale === "it") return it_builds_followed(inputs)
	if (locale === "nl") return nl_builds_followed(inputs)
	if (locale === "pl") return pl_builds_followed(inputs)
	if (locale === "pt") return pt_builds_followed(inputs)
	if (locale === "ru") return ru_builds_followed(inputs)
	if (locale === "sv") return sv_builds_followed(inputs)
	if (locale === "tr") return tr_builds_followed(inputs)
	if (locale === "zh") return zh_builds_followed(inputs)
	if (locale === "ja") return ja_builds_followed(inputs)
	return en_builds_followed(inputs)
});
