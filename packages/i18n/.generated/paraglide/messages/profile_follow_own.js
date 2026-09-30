/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Follow_OwnInputs */

const en_profile_follow_own = /** @type {(inputs: Profile_Follow_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You can’t follow yourself.`)
};

const es_profile_follow_own = /** @type {(inputs: Profile_Follow_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No puedes seguirte a ti mismo.`)
};

const de_profile_follow_own = /** @type {(inputs: Profile_Follow_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du kannst dir nicht selbst folgen.`)
};

const fr_profile_follow_own = /** @type {(inputs: Profile_Follow_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous ne pouvez pas vous suivre vous-même.`)
};

const it_profile_follow_own = /** @type {(inputs: Profile_Follow_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non puoi seguire te stesso.`)
};

const nl_profile_follow_own = /** @type {(inputs: Profile_Follow_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je kunt jezelf niet volgen.`)
};

const pl_profile_follow_own = /** @type {(inputs: Profile_Follow_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie możesz obserwować samego siebie.`)
};

const pt_profile_follow_own = /** @type {(inputs: Profile_Follow_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você não pode seguir a si mesmo.`)
};

const ru_profile_follow_own = /** @type {(inputs: Profile_Follow_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нельзя подписаться на самого себя.`)
};

const sv_profile_follow_own = /** @type {(inputs: Profile_Follow_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du kan inte följa dig själv.`)
};

const tr_profile_follow_own = /** @type {(inputs: Profile_Follow_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kendini takip edemezsin.`)
};

const zh_profile_follow_own = /** @type {(inputs: Profile_Follow_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你不能关注自己。`)
};

const ja_profile_follow_own = /** @type {(inputs: Profile_Follow_OwnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自分自身はフォローできません。`)
};

/**
* | output |
* | --- |
* | "You can’t follow yourself." |
*
* @param {Profile_Follow_OwnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_follow_own = /** @type {((inputs?: Profile_Follow_OwnInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Follow_OwnInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_follow_own(inputs)
	if (locale === "de") return de_profile_follow_own(inputs)
	if (locale === "fr") return fr_profile_follow_own(inputs)
	if (locale === "it") return it_profile_follow_own(inputs)
	if (locale === "nl") return nl_profile_follow_own(inputs)
	if (locale === "pl") return pl_profile_follow_own(inputs)
	if (locale === "pt") return pt_profile_follow_own(inputs)
	if (locale === "ru") return ru_profile_follow_own(inputs)
	if (locale === "sv") return sv_profile_follow_own(inputs)
	if (locale === "tr") return tr_profile_follow_own(inputs)
	if (locale === "zh") return zh_profile_follow_own(inputs)
	if (locale === "ja") return ja_profile_follow_own(inputs)
	return en_profile_follow_own(inputs)
});
