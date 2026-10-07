/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Footer_DiscordInputs */

const en_shell_footer_discord = /** @type {(inputs: Shell_Footer_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Join our Discord`)
};

const es_shell_footer_discord = /** @type {(inputs: Shell_Footer_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unirse a Discord`)
};

const de_shell_footer_discord = /** @type {(inputs: Shell_Footer_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dem Discord beitreten`)
};

const fr_shell_footer_discord = /** @type {(inputs: Shell_Footer_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rejoindre le Discord`)
};

const it_shell_footer_discord = /** @type {(inputs: Shell_Footer_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entra su Discord`)
};

const nl_shell_footer_discord = /** @type {(inputs: Shell_Footer_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Word lid van onze Discord`)
};

const pl_shell_footer_discord = /** @type {(inputs: Shell_Footer_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dołącz do Discorda`)
};

const pt_shell_footer_discord = /** @type {(inputs: Shell_Footer_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entrar no Discord`)
};

const ru_shell_footer_discord = /** @type {(inputs: Shell_Footer_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Присоединиться к Discord`)
};

const sv_shell_footer_discord = /** @type {(inputs: Shell_Footer_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gå med i Discord`)
};

const tr_shell_footer_discord = /** @type {(inputs: Shell_Footer_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord'a katıl`)
};

const zh_shell_footer_discord = /** @type {(inputs: Shell_Footer_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加入 Discord`)
};

const ja_shell_footer_discord = /** @type {(inputs: Shell_Footer_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discordに参加`)
};

/**
* | output |
* | --- |
* | "Join our Discord" |
*
* @param {Shell_Footer_DiscordInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_footer_discord = /** @type {((inputs?: Shell_Footer_DiscordInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Footer_DiscordInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_footer_discord(inputs)
	if (locale === "de") return de_shell_footer_discord(inputs)
	if (locale === "fr") return fr_shell_footer_discord(inputs)
	if (locale === "it") return it_shell_footer_discord(inputs)
	if (locale === "nl") return nl_shell_footer_discord(inputs)
	if (locale === "pl") return pl_shell_footer_discord(inputs)
	if (locale === "pt") return pt_shell_footer_discord(inputs)
	if (locale === "ru") return ru_shell_footer_discord(inputs)
	if (locale === "sv") return sv_shell_footer_discord(inputs)
	if (locale === "tr") return tr_shell_footer_discord(inputs)
	if (locale === "zh") return zh_shell_footer_discord(inputs)
	if (locale === "ja") return ja_shell_footer_discord(inputs)
	return en_shell_footer_discord(inputs)
});
