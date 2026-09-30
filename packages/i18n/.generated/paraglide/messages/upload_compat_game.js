/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Compat_GameInputs */

const en_upload_compat_game = /** @type {(inputs: Upload_Compat_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Game and loader`)
};

const es_upload_compat_game = /** @type {(inputs: Upload_Compat_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Juego y cargador`)
};

const de_upload_compat_game = /** @type {(inputs: Upload_Compat_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spiel und Loader`)
};

const fr_upload_compat_game = /** @type {(inputs: Upload_Compat_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeu et chargeur`)
};

const it_upload_compat_game = /** @type {(inputs: Upload_Compat_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gioco e loader`)
};

const nl_upload_compat_game = /** @type {(inputs: Upload_Compat_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Game en loader`)
};

const pl_upload_compat_game = /** @type {(inputs: Upload_Compat_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gra i loader`)
};

const pt_upload_compat_game = /** @type {(inputs: Upload_Compat_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jogo e loader`)
};

const ru_upload_compat_game = /** @type {(inputs: Upload_Compat_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Игра и загрузчик`)
};

const sv_upload_compat_game = /** @type {(inputs: Upload_Compat_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spel och laddare`)
};

const tr_upload_compat_game = /** @type {(inputs: Upload_Compat_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyun ve yükleyici`)
};

const zh_upload_compat_game = /** @type {(inputs: Upload_Compat_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`游戏和加载器`)
};

const ja_upload_compat_game = /** @type {(inputs: Upload_Compat_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲームとローダー`)
};

/**
* | output |
* | --- |
* | "Game and loader" |
*
* @param {Upload_Compat_GameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_compat_game = /** @type {((inputs?: Upload_Compat_GameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Compat_GameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_compat_game(inputs)
	if (locale === "de") return de_upload_compat_game(inputs)
	if (locale === "fr") return fr_upload_compat_game(inputs)
	if (locale === "it") return it_upload_compat_game(inputs)
	if (locale === "nl") return nl_upload_compat_game(inputs)
	if (locale === "pl") return pl_upload_compat_game(inputs)
	if (locale === "pt") return pt_upload_compat_game(inputs)
	if (locale === "ru") return ru_upload_compat_game(inputs)
	if (locale === "sv") return sv_upload_compat_game(inputs)
	if (locale === "tr") return tr_upload_compat_game(inputs)
	if (locale === "zh") return zh_upload_compat_game(inputs)
	if (locale === "ja") return ja_upload_compat_game(inputs)
	return en_upload_compat_game(inputs)
});
