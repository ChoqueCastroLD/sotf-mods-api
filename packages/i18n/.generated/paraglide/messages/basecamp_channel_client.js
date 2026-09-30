/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Channel_ClientInputs */

const en_basecamp_channel_client = /** @type {(inputs: Basecamp_Channel_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Game client`)
};

const es_basecamp_channel_client = /** @type {(inputs: Basecamp_Channel_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cliente del juego`)
};

const de_basecamp_channel_client = /** @type {(inputs: Basecamp_Channel_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spiel-Client`)
};

const fr_basecamp_channel_client = /** @type {(inputs: Basecamp_Channel_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client du jeu`)
};

const it_basecamp_channel_client = /** @type {(inputs: Basecamp_Channel_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client del gioco`)
};

const nl_basecamp_channel_client = /** @type {(inputs: Basecamp_Channel_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gameclient`)
};

const pl_basecamp_channel_client = /** @type {(inputs: Basecamp_Channel_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klient gry`)
};

const pt_basecamp_channel_client = /** @type {(inputs: Basecamp_Channel_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cliente do jogo`)
};

const ru_basecamp_channel_client = /** @type {(inputs: Basecamp_Channel_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Клиент игры`)
};

const sv_basecamp_channel_client = /** @type {(inputs: Basecamp_Channel_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spelklient`)
};

const tr_basecamp_channel_client = /** @type {(inputs: Basecamp_Channel_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyun istemcisi`)
};

const zh_basecamp_channel_client = /** @type {(inputs: Basecamp_Channel_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`游戏客户端`)
};

const ja_basecamp_channel_client = /** @type {(inputs: Basecamp_Channel_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲームクライアント`)
};

/**
* | output |
* | --- |
* | "Game client" |
*
* @param {Basecamp_Channel_ClientInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_channel_client = /** @type {((inputs?: Basecamp_Channel_ClientInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Channel_ClientInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_channel_client(inputs)
	if (locale === "de") return de_basecamp_channel_client(inputs)
	if (locale === "fr") return fr_basecamp_channel_client(inputs)
	if (locale === "it") return it_basecamp_channel_client(inputs)
	if (locale === "nl") return nl_basecamp_channel_client(inputs)
	if (locale === "pl") return pl_basecamp_channel_client(inputs)
	if (locale === "pt") return pt_basecamp_channel_client(inputs)
	if (locale === "ru") return ru_basecamp_channel_client(inputs)
	if (locale === "sv") return sv_basecamp_channel_client(inputs)
	if (locale === "tr") return tr_basecamp_channel_client(inputs)
	if (locale === "zh") return zh_basecamp_channel_client(inputs)
	if (locale === "ja") return ja_basecamp_channel_client(inputs)
	return en_basecamp_channel_client(inputs)
});
