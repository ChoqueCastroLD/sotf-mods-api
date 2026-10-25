/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Game_HintInputs */

const en_upload_game_hint = /** @type {(inputs: Upload_Game_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Which game is this mod for?`)
};

const es_upload_game_hint = /** @type {(inputs: Upload_Game_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Para qué juego es este mod?`)
};

const de_upload_game_hint = /** @type {(inputs: Upload_Game_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Für welches Spiel ist diese Mod?`)
};

const fr_upload_game_hint = /** @type {(inputs: Upload_Game_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pour quel jeu est ce mod ?`)
};

const it_upload_game_hint = /** @type {(inputs: Upload_Game_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per quale gioco è questa mod?`)
};

const nl_upload_game_hint = /** @type {(inputs: Upload_Game_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voor welk spel is deze mod?`)
};

const pl_upload_game_hint = /** @type {(inputs: Upload_Game_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do jakiej gry jest ten mod?`)
};

const pt_upload_game_hint = /** @type {(inputs: Upload_Game_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Para qual jogo é este mod?`)
};

const ru_upload_game_hint = /** @type {(inputs: Upload_Game_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Для какой игры этот мод?`)
};

const sv_upload_game_hint = /** @type {(inputs: Upload_Game_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vilket spel är modden för?`)
};

const tr_upload_game_hint = /** @type {(inputs: Upload_Game_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu mod hangi oyun için?`)
};

const zh_upload_game_hint = /** @type {(inputs: Upload_Game_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这个模组适用于哪款游戏？`)
};

const ja_upload_game_hint = /** @type {(inputs: Upload_Game_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このMODはどのゲーム用ですか？`)
};

/**
* | output |
* | --- |
* | "Which game is this mod for?" |
*
* @param {Upload_Game_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_game_hint = /** @type {((inputs?: Upload_Game_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Game_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_game_hint(inputs)
	if (locale === "de") return de_upload_game_hint(inputs)
	if (locale === "fr") return fr_upload_game_hint(inputs)
	if (locale === "it") return it_upload_game_hint(inputs)
	if (locale === "nl") return nl_upload_game_hint(inputs)
	if (locale === "pl") return pl_upload_game_hint(inputs)
	if (locale === "pt") return pt_upload_game_hint(inputs)
	if (locale === "ru") return ru_upload_game_hint(inputs)
	if (locale === "sv") return sv_upload_game_hint(inputs)
	if (locale === "tr") return tr_upload_game_hint(inputs)
	if (locale === "zh") return zh_upload_game_hint(inputs)
	if (locale === "ja") return ja_upload_game_hint(inputs)
	return en_upload_game_hint(inputs)
});
