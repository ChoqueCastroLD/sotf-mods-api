/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Verified_Creator_HintInputs */

const en_profile_badge_verified_creator_hint = /** @type {(inputs: Profile_Badge_Verified_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creators verified by the SOTF Mods team.`)
};

const es_profile_badge_verified_creator_hint = /** @type {(inputs: Profile_Badge_Verified_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creadores verificados por el equipo de SOTF Mods.`)
};

const de_profile_badge_verified_creator_hint = /** @type {(inputs: Profile_Badge_Verified_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vom SOTF-Mods-Team verifizierte Ersteller.`)
};

const fr_profile_badge_verified_creator_hint = /** @type {(inputs: Profile_Badge_Verified_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créateurs vérifiés par l’équipe de SOTF Mods.`)
};

const it_profile_badge_verified_creator_hint = /** @type {(inputs: Profile_Badge_Verified_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creatori verificati dal team di SOTF Mods.`)
};

const nl_profile_badge_verified_creator_hint = /** @type {(inputs: Profile_Badge_Verified_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Makers die door het SOTF Mods-team zijn geverifieerd.`)
};

const pl_profile_badge_verified_creator_hint = /** @type {(inputs: Profile_Badge_Verified_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twórcy zweryfikowani przez zespół SOTF Mods.`)
};

const pt_profile_badge_verified_creator_hint = /** @type {(inputs: Profile_Badge_Verified_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criadores verificados pela equipe do SOTF Mods.`)
};

const ru_profile_badge_verified_creator_hint = /** @type {(inputs: Profile_Badge_Verified_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Авторы, проверенные командой SOTF Mods.`)
};

const sv_profile_badge_verified_creator_hint = /** @type {(inputs: Profile_Badge_Verified_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapare som verifierats av SOTF Mods-teamet.`)
};

const tr_profile_badge_verified_creator_hint = /** @type {(inputs: Profile_Badge_Verified_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods ekibi tarafından doğrulanmış üreticiler.`)
};

const zh_profile_badge_verified_creator_hint = /** @type {(inputs: Profile_Badge_Verified_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`经 SOTF Mods 团队认证的创作者。`)
};

const ja_profile_badge_verified_creator_hint = /** @type {(inputs: Profile_Badge_Verified_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods チームが認証したクリエイター。`)
};

/**
* | output |
* | --- |
* | "Creators verified by the SOTF Mods team." |
*
* @param {Profile_Badge_Verified_Creator_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_verified_creator_hint = /** @type {((inputs?: Profile_Badge_Verified_Creator_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Verified_Creator_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_verified_creator_hint(inputs)
	if (locale === "de") return de_profile_badge_verified_creator_hint(inputs)
	if (locale === "fr") return fr_profile_badge_verified_creator_hint(inputs)
	if (locale === "it") return it_profile_badge_verified_creator_hint(inputs)
	if (locale === "nl") return nl_profile_badge_verified_creator_hint(inputs)
	if (locale === "pl") return pl_profile_badge_verified_creator_hint(inputs)
	if (locale === "pt") return pt_profile_badge_verified_creator_hint(inputs)
	if (locale === "ru") return ru_profile_badge_verified_creator_hint(inputs)
	if (locale === "sv") return sv_profile_badge_verified_creator_hint(inputs)
	if (locale === "tr") return tr_profile_badge_verified_creator_hint(inputs)
	if (locale === "zh") return zh_profile_badge_verified_creator_hint(inputs)
	if (locale === "ja") return ja_profile_badge_verified_creator_hint(inputs)
	return en_profile_badge_verified_creator_hint(inputs)
});
