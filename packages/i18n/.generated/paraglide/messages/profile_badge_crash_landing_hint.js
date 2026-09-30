/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Crash_Landing_HintInputs */

const en_profile_badge_crash_landing_hint = /** @type {(inputs: Profile_Badge_Crash_Landing_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publish your first mod.`)
};

const es_profile_badge_crash_landing_hint = /** @type {(inputs: Profile_Badge_Crash_Landing_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publica tu primer mod.`)
};

const de_profile_badge_crash_landing_hint = /** @type {(inputs: Profile_Badge_Crash_Landing_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veröffentliche deinen ersten Mod.`)
};

const fr_profile_badge_crash_landing_hint = /** @type {(inputs: Profile_Badge_Crash_Landing_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publiez votre premier mod.`)
};

const it_profile_badge_crash_landing_hint = /** @type {(inputs: Profile_Badge_Crash_Landing_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblica la tua prima mod.`)
};

const nl_profile_badge_crash_landing_hint = /** @type {(inputs: Profile_Badge_Crash_Landing_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publiceer je eerste mod.`)
};

const pl_profile_badge_crash_landing_hint = /** @type {(inputs: Profile_Badge_Crash_Landing_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opublikuj swój pierwszy mod.`)
};

const pt_profile_badge_crash_landing_hint = /** @type {(inputs: Profile_Badge_Crash_Landing_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publique seu primeiro mod.`)
};

const ru_profile_badge_crash_landing_hint = /** @type {(inputs: Profile_Badge_Crash_Landing_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опубликуйте свой первый мод.`)
};

const sv_profile_badge_crash_landing_hint = /** @type {(inputs: Profile_Badge_Crash_Landing_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicera din första modd.`)
};

const tr_profile_badge_crash_landing_hint = /** @type {(inputs: Profile_Badge_Crash_Landing_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk modunu yayınla.`)
};

const zh_profile_badge_crash_landing_hint = /** @type {(inputs: Profile_Badge_Crash_Landing_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布你的第一个模组。`)
};

const ja_profile_badge_crash_landing_hint = /** @type {(inputs: Profile_Badge_Crash_Landing_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最初の MOD を公開する。`)
};

/**
* | output |
* | --- |
* | "Publish your first mod." |
*
* @param {Profile_Badge_Crash_Landing_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_crash_landing_hint = /** @type {((inputs?: Profile_Badge_Crash_Landing_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Crash_Landing_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_crash_landing_hint(inputs)
	if (locale === "de") return de_profile_badge_crash_landing_hint(inputs)
	if (locale === "fr") return fr_profile_badge_crash_landing_hint(inputs)
	if (locale === "it") return it_profile_badge_crash_landing_hint(inputs)
	if (locale === "nl") return nl_profile_badge_crash_landing_hint(inputs)
	if (locale === "pl") return pl_profile_badge_crash_landing_hint(inputs)
	if (locale === "pt") return pt_profile_badge_crash_landing_hint(inputs)
	if (locale === "ru") return ru_profile_badge_crash_landing_hint(inputs)
	if (locale === "sv") return sv_profile_badge_crash_landing_hint(inputs)
	if (locale === "tr") return tr_profile_badge_crash_landing_hint(inputs)
	if (locale === "zh") return zh_profile_badge_crash_landing_hint(inputs)
	if (locale === "ja") return ja_profile_badge_crash_landing_hint(inputs)
	return en_profile_badge_crash_landing_hint(inputs)
});
