/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Ranger_HintInputs */

const en_profile_badge_ranger_hint = /** @type {(inputs: Profile_Badge_Ranger_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderators who keep the island safe.`)
};

const es_profile_badge_ranger_hint = /** @type {(inputs: Profile_Badge_Ranger_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderadores que mantienen la isla a salvo.`)
};

const de_profile_badge_ranger_hint = /** @type {(inputs: Profile_Badge_Ranger_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatoren, die die Insel sicher halten.`)
};

const fr_profile_badge_ranger_hint = /** @type {(inputs: Profile_Badge_Ranger_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modérateurs qui veillent sur la sécurité de l’île.`)
};

const it_profile_badge_ranger_hint = /** @type {(inputs: Profile_Badge_Ranger_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatori che tengono al sicuro l’isola.`)
};

const nl_profile_badge_ranger_hint = /** @type {(inputs: Profile_Badge_Ranger_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderators die het eiland veilig houden.`)
};

const pl_profile_badge_ranger_hint = /** @type {(inputs: Profile_Badge_Ranger_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatorzy, którzy dbają o bezpieczeństwo wyspy.`)
};

const pt_profile_badge_ranger_hint = /** @type {(inputs: Profile_Badge_Ranger_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderadores que mantêm a ilha segura.`)
};

const ru_profile_badge_ranger_hint = /** @type {(inputs: Profile_Badge_Ranger_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Модераторы, которые берегут остров.`)
};

const sv_profile_badge_ranger_hint = /** @type {(inputs: Profile_Badge_Ranger_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatorer som håller ön trygg.`)
};

const tr_profile_badge_ranger_hint = /** @type {(inputs: Profile_Badge_Ranger_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adayı güvende tutan moderatörler.`)
};

const zh_profile_badge_ranger_hint = /** @type {(inputs: Profile_Badge_Ranger_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`守护小岛安全的版主。`)
};

const ja_profile_badge_ranger_hint = /** @type {(inputs: Profile_Badge_Ranger_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`島の安全を守るモデレーター。`)
};

/**
* | output |
* | --- |
* | "Moderators who keep the island safe." |
*
* @param {Profile_Badge_Ranger_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_ranger_hint = /** @type {((inputs?: Profile_Badge_Ranger_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Ranger_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_ranger_hint(inputs)
	if (locale === "de") return de_profile_badge_ranger_hint(inputs)
	if (locale === "fr") return fr_profile_badge_ranger_hint(inputs)
	if (locale === "it") return it_profile_badge_ranger_hint(inputs)
	if (locale === "nl") return nl_profile_badge_ranger_hint(inputs)
	if (locale === "pl") return pl_profile_badge_ranger_hint(inputs)
	if (locale === "pt") return pt_profile_badge_ranger_hint(inputs)
	if (locale === "ru") return ru_profile_badge_ranger_hint(inputs)
	if (locale === "sv") return sv_profile_badge_ranger_hint(inputs)
	if (locale === "tr") return tr_profile_badge_ranger_hint(inputs)
	if (locale === "zh") return zh_profile_badge_ranger_hint(inputs)
	if (locale === "ja") return ja_profile_badge_ranger_hint(inputs)
	return en_profile_badge_ranger_hint(inputs)
});
