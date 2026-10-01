/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_First_DiscordInputs */

const en_jams_first_discord = /** @type {(inputs: Jams_First_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Join the Discord`)
};

const es_jams_first_discord = /** @type {(inputs: Jams_First_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Únete al Discord`)
};

const de_jams_first_discord = /** @type {(inputs: Jams_First_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dem Discord beitreten`)
};

const fr_jams_first_discord = /** @type {(inputs: Jams_First_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rejoindre le Discord`)
};

const it_jams_first_discord = /** @type {(inputs: Jams_First_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unisciti al Discord`)
};

const nl_jams_first_discord = /** @type {(inputs: Jams_First_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Join de Discord`)
};

const pl_jams_first_discord = /** @type {(inputs: Jams_First_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dołącz do Discorda`)
};

const pt_jams_first_discord = /** @type {(inputs: Jams_First_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entrar no Discord`)
};

const ru_jams_first_discord = /** @type {(inputs: Jams_First_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Зайти в Discord`)
};

const sv_jams_first_discord = /** @type {(inputs: Jams_First_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gå med i Discord`)
};

const tr_jams_first_discord = /** @type {(inputs: Jams_First_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord'a katıl`)
};

const zh_jams_first_discord = /** @type {(inputs: Jams_First_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加入 Discord`)
};

const ja_jams_first_discord = /** @type {(inputs: Jams_First_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord に参加`)
};

/**
* | output |
* | --- |
* | "Join the Discord" |
*
* @param {Jams_First_DiscordInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_first_discord = /** @type {((inputs?: Jams_First_DiscordInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_First_DiscordInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_first_discord(inputs)
	if (locale === "de") return de_jams_first_discord(inputs)
	if (locale === "fr") return fr_jams_first_discord(inputs)
	if (locale === "it") return it_jams_first_discord(inputs)
	if (locale === "nl") return nl_jams_first_discord(inputs)
	if (locale === "pl") return pl_jams_first_discord(inputs)
	if (locale === "pt") return pt_jams_first_discord(inputs)
	if (locale === "ru") return ru_jams_first_discord(inputs)
	if (locale === "sv") return sv_jams_first_discord(inputs)
	if (locale === "tr") return tr_jams_first_discord(inputs)
	if (locale === "zh") return zh_jams_first_discord(inputs)
	if (locale === "ja") return ja_jams_first_discord(inputs)
	return en_jams_first_discord(inputs)
});
