/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Game_Builds_LabelInputs */

const en_upload_game_builds_label = /** @type {(inputs: Upload_Game_Builds_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Game builds you tested`)
};

const es_upload_game_builds_label = /** @type {(inputs: Upload_Game_Builds_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds del juego que probaste`)
};

const de_upload_game_builds_label = /** @type {(inputs: Upload_Game_Builds_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Getestete Spiel-Builds`)
};

const fr_upload_game_builds_label = /** @type {(inputs: Upload_Game_Builds_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds du jeu testés`)
};

const it_upload_game_builds_label = /** @type {(inputs: Upload_Game_Builds_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build del gioco che hai testato`)
};

const nl_upload_game_builds_label = /** @type {(inputs: Upload_Game_Builds_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geteste gamebuilds`)
};

const pl_upload_game_builds_label = /** @type {(inputs: Upload_Game_Builds_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przetestowane buildy gry`)
};

const pt_upload_game_builds_label = /** @type {(inputs: Upload_Game_Builds_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds do jogo que você testou`)
};

const ru_upload_game_builds_label = /** @type {(inputs: Upload_Game_Builds_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверенные сборки игры`)
};

const sv_upload_game_builds_label = /** @type {(inputs: Upload_Game_Builds_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spelversioner du har testat`)
};

const tr_upload_game_builds_label = /** @type {(inputs: Upload_Game_Builds_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Test ettiğin oyun sürümleri`)
};

const zh_upload_game_builds_label = /** @type {(inputs: Upload_Game_Builds_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你测试过的游戏版本`)
};

const ja_upload_game_builds_label = /** @type {(inputs: Upload_Game_Builds_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`テストしたゲームビルド`)
};

/**
* | output |
* | --- |
* | "Game builds you tested" |
*
* @param {Upload_Game_Builds_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_game_builds_label = /** @type {((inputs?: Upload_Game_Builds_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Game_Builds_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_game_builds_label(inputs)
	if (locale === "de") return de_upload_game_builds_label(inputs)
	if (locale === "fr") return fr_upload_game_builds_label(inputs)
	if (locale === "it") return it_upload_game_builds_label(inputs)
	if (locale === "nl") return nl_upload_game_builds_label(inputs)
	if (locale === "pl") return pl_upload_game_builds_label(inputs)
	if (locale === "pt") return pt_upload_game_builds_label(inputs)
	if (locale === "ru") return ru_upload_game_builds_label(inputs)
	if (locale === "sv") return sv_upload_game_builds_label(inputs)
	if (locale === "tr") return tr_upload_game_builds_label(inputs)
	if (locale === "zh") return zh_upload_game_builds_label(inputs)
	if (locale === "ja") return ja_upload_game_builds_label(inputs)
	return en_upload_game_builds_label(inputs)
});
