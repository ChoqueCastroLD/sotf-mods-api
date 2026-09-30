/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Link_TwitchInputs */

const en_upload_link_twitch = /** @type {(inputs: Upload_Link_TwitchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twitch`)
};

const es_upload_link_twitch = /** @type {(inputs: Upload_Link_TwitchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twitch`)
};

const de_upload_link_twitch = /** @type {(inputs: Upload_Link_TwitchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twitch`)
};

const fr_upload_link_twitch = /** @type {(inputs: Upload_Link_TwitchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twitch`)
};

const it_upload_link_twitch = /** @type {(inputs: Upload_Link_TwitchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twitch`)
};

const nl_upload_link_twitch = /** @type {(inputs: Upload_Link_TwitchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twitch`)
};

const pl_upload_link_twitch = /** @type {(inputs: Upload_Link_TwitchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twitch`)
};

const pt_upload_link_twitch = /** @type {(inputs: Upload_Link_TwitchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twitch`)
};

const ru_upload_link_twitch = /** @type {(inputs: Upload_Link_TwitchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twitch`)
};

const sv_upload_link_twitch = /** @type {(inputs: Upload_Link_TwitchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twitch`)
};

const tr_upload_link_twitch = /** @type {(inputs: Upload_Link_TwitchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twitch`)
};

const zh_upload_link_twitch = /** @type {(inputs: Upload_Link_TwitchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twitch`)
};

const ja_upload_link_twitch = /** @type {(inputs: Upload_Link_TwitchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twitch`)
};

/**
* | output |
* | --- |
* | "Twitch" |
*
* @param {Upload_Link_TwitchInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_link_twitch = /** @type {((inputs?: Upload_Link_TwitchInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Link_TwitchInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_link_twitch(inputs)
	if (locale === "de") return de_upload_link_twitch(inputs)
	if (locale === "fr") return fr_upload_link_twitch(inputs)
	if (locale === "it") return it_upload_link_twitch(inputs)
	if (locale === "nl") return nl_upload_link_twitch(inputs)
	if (locale === "pl") return pl_upload_link_twitch(inputs)
	if (locale === "pt") return pt_upload_link_twitch(inputs)
	if (locale === "ru") return ru_upload_link_twitch(inputs)
	if (locale === "sv") return sv_upload_link_twitch(inputs)
	if (locale === "tr") return tr_upload_link_twitch(inputs)
	if (locale === "zh") return zh_upload_link_twitch(inputs)
	if (locale === "ja") return ja_upload_link_twitch(inputs)
	return en_upload_link_twitch(inputs)
});
