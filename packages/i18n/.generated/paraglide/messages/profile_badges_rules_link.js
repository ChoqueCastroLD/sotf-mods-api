/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badges_Rules_LinkInputs */

const en_profile_badges_rules_link = /** @type {(inputs: Profile_Badges_Rules_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How badges work`)
};

const es_profile_badges_rules_link = /** @type {(inputs: Profile_Badges_Rules_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cómo funcionan las insignias`)
};

const de_profile_badges_rules_link = /** @type {(inputs: Profile_Badges_Rules_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`So funktionieren Abzeichen`)
};

const fr_profile_badges_rules_link = /** @type {(inputs: Profile_Badges_Rules_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment fonctionnent les badges`)
};

const it_profile_badges_rules_link = /** @type {(inputs: Profile_Badges_Rules_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Come funzionano i distintivi`)
};

const nl_profile_badges_rules_link = /** @type {(inputs: Profile_Badges_Rules_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zo werken badges`)
};

const pl_profile_badges_rules_link = /** @type {(inputs: Profile_Badges_Rules_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jak działają odznaki`)
};

const pt_profile_badges_rules_link = /** @type {(inputs: Profile_Badges_Rules_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Como funcionam as insígnias`)
};

const ru_profile_badges_rules_link = /** @type {(inputs: Profile_Badges_Rules_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Как работают значки`)
};

const sv_profile_badges_rules_link = /** @type {(inputs: Profile_Badges_Rules_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Så fungerar märken`)
};

const tr_profile_badges_rules_link = /** @type {(inputs: Profile_Badges_Rules_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozetler nasıl çalışır`)
};

const zh_profile_badges_rules_link = /** @type {(inputs: Profile_Badges_Rules_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`徽章规则`)
};

const ja_profile_badges_rules_link = /** @type {(inputs: Profile_Badges_Rules_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バッジの仕組み`)
};

/**
* | output |
* | --- |
* | "How badges work" |
*
* @param {Profile_Badges_Rules_LinkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badges_rules_link = /** @type {((inputs?: Profile_Badges_Rules_LinkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badges_Rules_LinkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badges_rules_link(inputs)
	if (locale === "de") return de_profile_badges_rules_link(inputs)
	if (locale === "fr") return fr_profile_badges_rules_link(inputs)
	if (locale === "it") return it_profile_badges_rules_link(inputs)
	if (locale === "nl") return nl_profile_badges_rules_link(inputs)
	if (locale === "pl") return pl_profile_badges_rules_link(inputs)
	if (locale === "pt") return pt_profile_badges_rules_link(inputs)
	if (locale === "ru") return ru_profile_badges_rules_link(inputs)
	if (locale === "sv") return sv_profile_badges_rules_link(inputs)
	if (locale === "tr") return tr_profile_badges_rules_link(inputs)
	if (locale === "zh") return zh_profile_badges_rules_link(inputs)
	if (locale === "ja") return ja_profile_badges_rules_link(inputs)
	return en_profile_badges_rules_link(inputs)
});
