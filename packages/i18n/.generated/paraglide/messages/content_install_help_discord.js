/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Install_Help_DiscordInputs */

const en_content_install_help_discord = /** @type {(inputs: Content_Install_Help_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask on Discord`)
};

const es_content_install_help_discord = /** @type {(inputs: Content_Install_Help_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preguntar en Discord`)
};

const de_content_install_help_discord = /** @type {(inputs: Content_Install_Help_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auf Discord fragen`)
};

const fr_content_install_help_discord = /** @type {(inputs: Content_Install_Help_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demander sur Discord`)
};

const it_content_install_help_discord = /** @type {(inputs: Content_Install_Help_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiedi su Discord`)
};

const nl_content_install_help_discord = /** @type {(inputs: Content_Install_Help_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vragen op Discord`)
};

const pl_content_install_help_discord = /** @type {(inputs: Content_Install_Help_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapytaj na Discordzie`)
};

const pt_content_install_help_discord = /** @type {(inputs: Content_Install_Help_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Perguntar no Discord`)
};

const ru_content_install_help_discord = /** @type {(inputs: Content_Install_Help_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Спросить в Discord`)
};

const sv_content_install_help_discord = /** @type {(inputs: Content_Install_Help_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fråga på Discord`)
};

const tr_content_install_help_discord = /** @type {(inputs: Content_Install_Help_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord’da sor`)
};

const zh_content_install_help_discord = /** @type {(inputs: Content_Install_Help_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在 Discord 提问`)
};

const ja_content_install_help_discord = /** @type {(inputs: Content_Install_Help_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord で質問する`)
};

/**
* | output |
* | --- |
* | "Ask on Discord" |
*
* @param {Content_Install_Help_DiscordInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_install_help_discord = /** @type {((inputs?: Content_Install_Help_DiscordInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Install_Help_DiscordInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_install_help_discord(inputs)
	if (locale === "de") return de_content_install_help_discord(inputs)
	if (locale === "fr") return fr_content_install_help_discord(inputs)
	if (locale === "it") return it_content_install_help_discord(inputs)
	if (locale === "nl") return nl_content_install_help_discord(inputs)
	if (locale === "pl") return pl_content_install_help_discord(inputs)
	if (locale === "pt") return pt_content_install_help_discord(inputs)
	if (locale === "ru") return ru_content_install_help_discord(inputs)
	if (locale === "sv") return sv_content_install_help_discord(inputs)
	if (locale === "tr") return tr_content_install_help_discord(inputs)
	if (locale === "zh") return zh_content_install_help_discord(inputs)
	if (locale === "ja") return ja_content_install_help_discord(inputs)
	return en_content_install_help_discord(inputs)
});
