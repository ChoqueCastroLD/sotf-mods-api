/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Creators_Tiers_LinkInputs */

const en_profile_creators_tiers_link = /** @type {(inputs: Profile_Creators_Tiers_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How creator tiers work`)
};

const es_profile_creators_tiers_link = /** @type {(inputs: Profile_Creators_Tiers_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cómo funcionan los niveles de creador`)
};

const de_profile_creators_tiers_link = /** @type {(inputs: Profile_Creators_Tiers_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`So funktionieren Ersteller-Stufen`)
};

const fr_profile_creators_tiers_link = /** @type {(inputs: Profile_Creators_Tiers_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment fonctionnent les paliers de créateur`)
};

const it_profile_creators_tiers_link = /** @type {(inputs: Profile_Creators_Tiers_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Come funzionano i livelli da creatore`)
};

const nl_profile_creators_tiers_link = /** @type {(inputs: Profile_Creators_Tiers_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zo werken makersniveaus`)
};

const pl_profile_creators_tiers_link = /** @type {(inputs: Profile_Creators_Tiers_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jak działają poziomy twórców`)
};

const pt_profile_creators_tiers_link = /** @type {(inputs: Profile_Creators_Tiers_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Como funcionam os níveis de criador`)
};

const ru_profile_creators_tiers_link = /** @type {(inputs: Profile_Creators_Tiers_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Как работают уровни авторов`)
};

const sv_profile_creators_tiers_link = /** @type {(inputs: Profile_Creators_Tiers_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Så fungerar skaparnivåer`)
};

const tr_profile_creators_tiers_link = /** @type {(inputs: Profile_Creators_Tiers_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Üretici seviyeleri nasıl çalışır`)
};

const zh_profile_creators_tiers_link = /** @type {(inputs: Profile_Creators_Tiers_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创作者段位规则`)
};

const ja_profile_creators_tiers_link = /** @type {(inputs: Profile_Creators_Tiers_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリエイターティアの仕組み`)
};

/**
* | output |
* | --- |
* | "How creator tiers work" |
*
* @param {Profile_Creators_Tiers_LinkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_creators_tiers_link = /** @type {((inputs?: Profile_Creators_Tiers_LinkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Creators_Tiers_LinkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_creators_tiers_link(inputs)
	if (locale === "de") return de_profile_creators_tiers_link(inputs)
	if (locale === "fr") return fr_profile_creators_tiers_link(inputs)
	if (locale === "it") return it_profile_creators_tiers_link(inputs)
	if (locale === "nl") return nl_profile_creators_tiers_link(inputs)
	if (locale === "pl") return pl_profile_creators_tiers_link(inputs)
	if (locale === "pt") return pt_profile_creators_tiers_link(inputs)
	if (locale === "ru") return ru_profile_creators_tiers_link(inputs)
	if (locale === "sv") return sv_profile_creators_tiers_link(inputs)
	if (locale === "tr") return tr_profile_creators_tiers_link(inputs)
	if (locale === "zh") return zh_profile_creators_tiers_link(inputs)
	if (locale === "ja") return ja_profile_creators_tiers_link(inputs)
	return en_profile_creators_tiers_link(inputs)
});
