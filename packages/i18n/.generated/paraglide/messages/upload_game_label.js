/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Game_LabelInputs */

const en_upload_game_label = /** @type {(inputs: Upload_Game_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Game`)
};

const es_upload_game_label = /** @type {(inputs: Upload_Game_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Juego`)
};

const de_upload_game_label = /** @type {(inputs: Upload_Game_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spiel`)
};

const fr_upload_game_label = /** @type {(inputs: Upload_Game_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeu`)
};

const it_upload_game_label = /** @type {(inputs: Upload_Game_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gioco`)
};

const nl_upload_game_label = /** @type {(inputs: Upload_Game_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spel`)
};

const pl_upload_game_label = /** @type {(inputs: Upload_Game_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gra`)
};

const pt_upload_game_label = /** @type {(inputs: Upload_Game_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jogo`)
};

const ru_upload_game_label = /** @type {(inputs: Upload_Game_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Игра`)
};

const sv_upload_game_label = /** @type {(inputs: Upload_Game_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spel`)
};

const tr_upload_game_label = /** @type {(inputs: Upload_Game_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyun`)
};

const zh_upload_game_label = /** @type {(inputs: Upload_Game_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`游戏`)
};

const ja_upload_game_label = /** @type {(inputs: Upload_Game_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲーム`)
};

/**
* | output |
* | --- |
* | "Game" |
*
* @param {Upload_Game_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_game_label = /** @type {((inputs?: Upload_Game_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Game_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_game_label(inputs)
	if (locale === "de") return de_upload_game_label(inputs)
	if (locale === "fr") return fr_upload_game_label(inputs)
	if (locale === "it") return it_upload_game_label(inputs)
	if (locale === "nl") return nl_upload_game_label(inputs)
	if (locale === "pl") return pl_upload_game_label(inputs)
	if (locale === "pt") return pt_upload_game_label(inputs)
	if (locale === "ru") return ru_upload_game_label(inputs)
	if (locale === "sv") return sv_upload_game_label(inputs)
	if (locale === "tr") return tr_upload_game_label(inputs)
	if (locale === "zh") return zh_upload_game_label(inputs)
	if (locale === "ja") return ja_upload_game_label(inputs)
	return en_upload_game_label(inputs)
});
