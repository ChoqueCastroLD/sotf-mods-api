/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Referrer_DiscordInputs */

const en_basecamp_referrer_discord = /** @type {(inputs: Basecamp_Referrer_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const es_basecamp_referrer_discord = /** @type {(inputs: Basecamp_Referrer_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const de_basecamp_referrer_discord = /** @type {(inputs: Basecamp_Referrer_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const fr_basecamp_referrer_discord = /** @type {(inputs: Basecamp_Referrer_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const it_basecamp_referrer_discord = /** @type {(inputs: Basecamp_Referrer_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const nl_basecamp_referrer_discord = /** @type {(inputs: Basecamp_Referrer_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const pl_basecamp_referrer_discord = /** @type {(inputs: Basecamp_Referrer_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const pt_basecamp_referrer_discord = /** @type {(inputs: Basecamp_Referrer_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const ru_basecamp_referrer_discord = /** @type {(inputs: Basecamp_Referrer_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const sv_basecamp_referrer_discord = /** @type {(inputs: Basecamp_Referrer_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const tr_basecamp_referrer_discord = /** @type {(inputs: Basecamp_Referrer_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const zh_basecamp_referrer_discord = /** @type {(inputs: Basecamp_Referrer_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const ja_basecamp_referrer_discord = /** @type {(inputs: Basecamp_Referrer_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

/**
* | output |
* | --- |
* | "Discord" |
*
* @param {Basecamp_Referrer_DiscordInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_referrer_discord = /** @type {((inputs?: Basecamp_Referrer_DiscordInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Referrer_DiscordInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_referrer_discord(inputs)
	if (locale === "de") return de_basecamp_referrer_discord(inputs)
	if (locale === "fr") return fr_basecamp_referrer_discord(inputs)
	if (locale === "it") return it_basecamp_referrer_discord(inputs)
	if (locale === "nl") return nl_basecamp_referrer_discord(inputs)
	if (locale === "pl") return pl_basecamp_referrer_discord(inputs)
	if (locale === "pt") return pt_basecamp_referrer_discord(inputs)
	if (locale === "ru") return ru_basecamp_referrer_discord(inputs)
	if (locale === "sv") return sv_basecamp_referrer_discord(inputs)
	if (locale === "tr") return tr_basecamp_referrer_discord(inputs)
	if (locale === "zh") return zh_basecamp_referrer_discord(inputs)
	if (locale === "ja") return ja_basecamp_referrer_discord(inputs)
	return en_basecamp_referrer_discord(inputs)
});
