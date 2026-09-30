/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Link_DiscordInputs */

const en_upload_link_discord = /** @type {(inputs: Upload_Link_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const es_upload_link_discord = /** @type {(inputs: Upload_Link_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const de_upload_link_discord = /** @type {(inputs: Upload_Link_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const fr_upload_link_discord = /** @type {(inputs: Upload_Link_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const it_upload_link_discord = /** @type {(inputs: Upload_Link_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const nl_upload_link_discord = /** @type {(inputs: Upload_Link_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const pl_upload_link_discord = /** @type {(inputs: Upload_Link_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const pt_upload_link_discord = /** @type {(inputs: Upload_Link_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const ru_upload_link_discord = /** @type {(inputs: Upload_Link_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const sv_upload_link_discord = /** @type {(inputs: Upload_Link_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const tr_upload_link_discord = /** @type {(inputs: Upload_Link_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const zh_upload_link_discord = /** @type {(inputs: Upload_Link_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

const ja_upload_link_discord = /** @type {(inputs: Upload_Link_DiscordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord`)
};

/**
* | output |
* | --- |
* | "Discord" |
*
* @param {Upload_Link_DiscordInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_link_discord = /** @type {((inputs?: Upload_Link_DiscordInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Link_DiscordInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_link_discord(inputs)
	if (locale === "de") return de_upload_link_discord(inputs)
	if (locale === "fr") return fr_upload_link_discord(inputs)
	if (locale === "it") return it_upload_link_discord(inputs)
	if (locale === "nl") return nl_upload_link_discord(inputs)
	if (locale === "pl") return pl_upload_link_discord(inputs)
	if (locale === "pt") return pt_upload_link_discord(inputs)
	if (locale === "ru") return ru_upload_link_discord(inputs)
	if (locale === "sv") return sv_upload_link_discord(inputs)
	if (locale === "tr") return tr_upload_link_discord(inputs)
	if (locale === "zh") return zh_upload_link_discord(inputs)
	if (locale === "ja") return ja_upload_link_discord(inputs)
	return en_upload_link_discord(inputs)
});
