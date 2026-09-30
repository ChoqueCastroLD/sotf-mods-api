/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_LockedInputs */

const en_profile_badge_locked = /** @type {(inputs: Profile_Badge_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Locked`)
};

const es_profile_badge_locked = /** @type {(inputs: Profile_Badge_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bloqueada`)
};

const de_profile_badge_locked = /** @type {(inputs: Profile_Badge_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gesperrt`)
};

const fr_profile_badge_locked = /** @type {(inputs: Profile_Badge_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verrouillé`)
};

const it_profile_badge_locked = /** @type {(inputs: Profile_Badge_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bloccato`)
};

const nl_profile_badge_locked = /** @type {(inputs: Profile_Badge_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vergrendeld`)
};

const pl_profile_badge_locked = /** @type {(inputs: Profile_Badge_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zablokowana`)
};

const pt_profile_badge_locked = /** @type {(inputs: Profile_Badge_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bloqueada`)
};

const ru_profile_badge_locked = /** @type {(inputs: Profile_Badge_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Закрыт`)
};

const sv_profile_badge_locked = /** @type {(inputs: Profile_Badge_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Låst`)
};

const tr_profile_badge_locked = /** @type {(inputs: Profile_Badge_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kilitli`)
};

const zh_profile_badge_locked = /** @type {(inputs: Profile_Badge_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未解锁`)
};

const ja_profile_badge_locked = /** @type {(inputs: Profile_Badge_LockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未獲得`)
};

/**
* | output |
* | --- |
* | "Locked" |
*
* @param {Profile_Badge_LockedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_locked = /** @type {((inputs?: Profile_Badge_LockedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_LockedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_locked(inputs)
	if (locale === "de") return de_profile_badge_locked(inputs)
	if (locale === "fr") return fr_profile_badge_locked(inputs)
	if (locale === "it") return it_profile_badge_locked(inputs)
	if (locale === "nl") return nl_profile_badge_locked(inputs)
	if (locale === "pl") return pl_profile_badge_locked(inputs)
	if (locale === "pt") return pt_profile_badge_locked(inputs)
	if (locale === "ru") return ru_profile_badge_locked(inputs)
	if (locale === "sv") return sv_profile_badge_locked(inputs)
	if (locale === "tr") return tr_profile_badge_locked(inputs)
	if (locale === "zh") return zh_profile_badge_locked(inputs)
	if (locale === "ja") return ja_profile_badge_locked(inputs)
	return en_profile_badge_locked(inputs)
});
